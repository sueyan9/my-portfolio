import {
  buildPortfolioResumeSummary,
  buildStructuredPortfolioData,
  getCardsForTopic,
  getFollowUpsForTopic,
  portfolioAssistantFallback,
  portfolioAssistantFollowUps,
  portfolioAssistantSystemPrompt,
} from "../shared/portfolioAssistantData.js";

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

function resolveProviderConfig(env) {
  const explicitProvider = getEnvValue(env, "LLM_PROVIDER");
  const openAiKey = getEnvValue(env, "OPENAI_API_KEY");
  const deepSeekKey = getEnvValue(env, "DEEPSEEK_API_KEY");
  const genericKey = getEnvValue(env, "LLM_API_KEY");

  if (explicitProvider === "openai" || (!explicitProvider && openAiKey)) {
    return {
      provider: "openai",
      apiKey: genericKey || openAiKey,
      model: getEnvValue(env, "OPENAI_MODEL") || getEnvValue(env, "LLM_MODEL") || "gpt-4o-mini",
      baseUrl: getEnvValue(env, "OPENAI_BASE_URL") || getEnvValue(env, "LLM_BASE_URL") || "https://api.openai.com/v1",
    };
  }

  if (explicitProvider === "deepseek" || (!explicitProvider && deepSeekKey)) {
    return {
      provider: "deepseek",
      apiKey: genericKey || deepSeekKey,
      model: getEnvValue(env, "DEEPSEEK_MODEL") || getEnvValue(env, "LLM_MODEL") || "deepseek-chat",
      baseUrl: getEnvValue(env, "DEEPSEEK_BASE_URL") || getEnvValue(env, "LLM_BASE_URL") || "https://api.deepseek.com/v1",
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
      max_tokens: 550,
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
