import {
  buildPortfolioResumeSummary,
  buildStructuredPortfolioData,
  findBestLocalReply,
  getCardsForTopic,
  getFollowUpsForTopic,
  portfolioAssistantFallback,
  portfolioAssistantFollowUps,
} from "../shared/portfolioAssistantData.js";
import { findForcedLocalReply, portfolioAssistantSystemPrompt } from "./assistantPrivateConfig.js";

const lastRequestTimeByIp = new Map();
let totalCompletionTokens = 0;

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json",
    },
  });
}

function getEnvValue(env, key) {
  if (!env) {
    return undefined;
  }

  if (typeof env.get === "function") {
    return env.get(key);
  }

  return env[key];
}

function isAiEnabled(env) {
  const rawValue = getEnvValue(env, "AI_ENABLED");

  if (rawValue === undefined) {
    return true;
  }

  return String(rawValue).toLowerCase() === "true";
}

function getRequestIp(request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("client-ip") ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip, now = Date.now()) {
  const lastRequestAt = lastRequestTimeByIp.get(ip);

  if (lastRequestAt && now - lastRequestAt < 5000) {
    return true;
  }

  lastRequestTimeByIp.set(ip, now);
  return false;
}

function getTotalTokenLimit(env) {
  const rawValue = Number(getEnvValue(env, "AI_TOTAL_TOKEN_LIMIT"));
  return Number.isFinite(rawValue) && rawValue > 0 ? rawValue : 50000;
}

function resolveProviderConfig(env) {
  const explicitProvider = getEnvValue(env, "LLM_PROVIDER");
  const openAiKey = getEnvValue(env, "OPENAI_API_KEY");
  const deepSeekKey = getEnvValue(env, "DEEPSEEK_API_KEY");
  const genericKey = getEnvValue(env, "LLM_API_KEY");
  const genericModel =
    getEnvValue(env, "AI_MODEL") || getEnvValue(env, "LLM_MODEL");
  const genericBaseUrl =
    getEnvValue(env, "AI_BASE_URL") || getEnvValue(env, "LLM_BASE_URL");

  if (explicitProvider === "openai" || (!explicitProvider && openAiKey)) {
    return {
      provider: "openai",
      apiKey: genericKey || openAiKey,
      model: getEnvValue(env, "OPENAI_MODEL") || genericModel || "gpt-4o-mini",
      baseUrl: getEnvValue(env, "OPENAI_BASE_URL") || genericBaseUrl || "https://api.openai.com/v1",
    };
  }

  if (explicitProvider === "deepseek" || (!explicitProvider && deepSeekKey)) {
    return {
      provider: "deepseek",
      apiKey: genericKey || deepSeekKey,
      model: getEnvValue(env, "DEEPSEEK_MODEL") || genericModel || "deepseek-chat",
      baseUrl: getEnvValue(env, "DEEPSEEK_BASE_URL") || genericBaseUrl || "https://api.deepseek.com/v1",
    };
  }

  return null;
}

function sanitizeTopic(topic) {
  const allowedTopics = new Set([
    "intro",
    "projects",
    "role",
    "location",
    "strongestProject",
    "backend",
    "stack",
    "fullStack",
    "ai",
    "hire",
    "contact",
    "fallback",
  ]);

  return allowedTopics.has(topic) ? topic : "fallback";
}

function sanitizeFollowUps(followUps, topic) {
  if (!Array.isArray(followUps)) {
    return getFollowUpsForTopic(topic).slice(0, 3);
  }

  const allowed = new Set(portfolioAssistantFollowUps);
  const picked = followUps.filter((item) => allowed.has(item)).slice(0, 3);

  if (picked.length >= 2) {
    return picked;
  }

  return getFollowUpsForTopic(topic).slice(0, 3);
}

function extractJson(text) {
  if (!text) {
    return null;
  }

  const trimmed = text.trim();

  try {
    return JSON.parse(trimmed);
  } catch {
    const match = trimmed.match(/\{[\s\S]*\}/);

    if (!match) {
      return null;
    }

    try {
      return JSON.parse(match[0]);
    } catch {
      return null;
    }
  }
}

function buildConversationHistory(history) {
  if (!Array.isArray(history) || history.length === 0) {
    return "No prior conversation.";
  }

  return history
    .slice(-6)
    .map((message) => `${message.role === "assistant" ? "Assistant" : "User"}: ${message.text || message.answer || ""}`)
    .join("\n");
}

async function generateAssistantReply({ question, history, env, fetchImpl }) {
  const providerConfig = resolveProviderConfig(env);

  if (!providerConfig?.apiKey) {
    throw new Error("Missing LLM API key. Set OPENAI_API_KEY or DEEPSEEK_API_KEY.");
  }

  const contextPayload = {
    resumeSummary: buildPortfolioResumeSummary(),
    structuredData: buildStructuredPortfolioData(),
    allowedFollowUps: portfolioAssistantFollowUps,
    conversationHistory: buildConversationHistory(history),
    currentQuestion: question,
  };

  const response = await fetchImpl(`${providerConfig.baseUrl}/chat/completions`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${providerConfig.apiKey}`,
    },
    body: JSON.stringify({
      model: providerConfig.model,
      temperature: 0.3,
      max_tokens: 200,
      messages: [
        { role: "system", content: portfolioAssistantSystemPrompt },
        {
          role: "user",
          content: `Use the following portfolio context to answer the question.\n\n${JSON.stringify(
            contextPayload,
            null,
            2
          )}`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`LLM request failed with ${response.status}: ${details}`);
  }

  const payload = await response.json();
  const completionTokens = payload?.usage?.completion_tokens || 0;
  totalCompletionTokens += completionTokens;
  const content = payload?.choices?.[0]?.message?.content;
  const parsed = extractJson(content);

  if (!parsed?.answer) {
    throw new Error("Model response could not be parsed into the expected JSON shape.");
  }

  const topic = sanitizeTopic(parsed.topic);

  return {
    answer: parsed.answer,
    cta: parsed.cta || "Ask another question or use one of the follow-up suggestions below.",
    topic,
    followUps: sanitizeFollowUps(parsed.followUps, topic),
    cards: getCardsForTopic(topic),
    provider: providerConfig.provider,
    model: providerConfig.model,
  };
}

export async function handlePortfolioAssistantRequest(request, { env = process.env, fetchImpl = fetch } = {}) {
  if (request.method !== "POST") {
    return jsonResponse({ error: "Method not allowed." }, 405);
  }

  if (!isAiEnabled(env)) {
    return jsonResponse(
      {
        ...portfolioAssistantFallback,
        answer: "AI assistant is currently offline.",
        cta: "You can still use the suggested prompts to browse Sue's portfolio highlights.",
        provider: "disabled",
      },
      503
    );
  }

  const ip = getRequestIp(request);

  if (isRateLimited(ip)) {
    return jsonResponse(
      {
        ...portfolioAssistantFallback,
        answer: "Too many requests. Please wait a few seconds before asking another question.",
        cta: "Try again in 5 seconds or use the portfolio links below.",
        provider: "rate-limited",
      },
      429
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body." }, 400);
  }

  const question = body?.question?.trim();
  const history = Array.isArray(body?.history) ? body.history : [];

  if (!question) {
    return jsonResponse({ error: "Question is required." }, 400);
  }

  const forcedLocalReply = findForcedLocalReply(question);

  if (forcedLocalReply) {
    return jsonResponse({
      ...forcedLocalReply,
      provider: "local-persona",
    });
  }

  if (totalCompletionTokens >= getTotalTokenLimit(env)) {
    const localReply = findBestLocalReply(question);

    return jsonResponse(
      {
        ...localReply,
        cta: `${localReply.cta} AI usage is currently capped, so this answer is coming from Sue's local portfolio knowledge base.`,
        provider: "quota-fallback",
      },
      200
    );
  }

  try {
    const reply = await generateAssistantReply({ question, history, env, fetchImpl });
    return jsonResponse(reply);
  } catch (error) {
    return jsonResponse(
      {
        ...portfolioAssistantFallback,
        error: error.message,
        followUps: portfolioAssistantFallback.followUps,
        provider: "fallback",
      },
      500
    );
  }
}
