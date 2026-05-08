import React, { useEffect, useRef, useState } from "react";
import "./PortfolioAssistant.css";
import {
  findBestLocalReply,
  portfolioAssistantWelcome,
} from "./portfolioAssistantData";

const quickPrompts = [
  {
    label: "What stack does Sue use?",
    question: "What technologies does Sue use most?",
  },
  {
    label: "Best role fit for her?",
    question: "What makes Sue a strong candidate?",
  },
  {
    label: "Tell me about her projects",
    question: "What projects has Sue built?",
  },
  {
    label: "Her backend experience?",
    question: "What backend systems has Sue built?",
  },
];

export default function PortfolioAssistant({ isOpen, onToggle }) {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState(() => [{ role: "assistant", ...portfolioAssistantWelcome }]);
  const [isLoading, setIsLoading] = useState(false);
  const bodyRef = useRef(null);
  const showQuickPrompts = messages.length <= 1;

  const formatAssistantError = (error) => {
    if (!error) {
      return "";
    }

    const normalized = String(error).toLowerCase();

    if (normalized.includes("insufficient balance") || normalized.includes("402")) {
      return "Live AI is temporarily unavailable because the model account has no available balance.";
    }

    if (normalized.includes("401") || normalized.includes("unauthorized")) {
      return "Live AI is temporarily unavailable because the API credentials were rejected.";
    }

    if (normalized.includes("429")) {
      return "Live AI is temporarily unavailable because the request limit was reached.";
    }

    if (normalized.includes("missing llm api key")) {
      return "Live AI is temporarily unavailable because the server is missing its API key.";
    }

    return "Live AI is temporarily unavailable right now.";
  };

  useEffect(() => {
    if (!bodyRef.current) {
      return;
    }

    bodyRef.current.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isOpen]);

  const normalizeAssistantMessage = (reply, userQuestion) => ({
    role: "assistant",
    question: reply.question || userQuestion,
    answer: reply.answer,
    cta: reply.error ? `${reply.cta} ${formatAssistantError(reply.error)}` : reply.cta,
    cards: reply.cards || [],
    followUps: reply.followUps || [],
  });

  const submitQuestion = async (questionText) => {
    const userQuestion = questionText.trim();
    if (!userQuestion || isLoading) {
      return;
    }

    if (userQuestion.length > 200) {
      window.alert("Question too long");
      return;
    }

    const userMessage = { role: "user", text: userQuestion };
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setDraft("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/portfolio-assistant", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          question: userQuestion,
          history: nextMessages,
        }),
      });
      const payload = await response.json();

      if (!response.ok && !payload?.answer) {
        throw new Error(payload?.error || "Assistant request failed.");
      }

      const reply = payload?.answer ? payload : findBestLocalReply(userQuestion);
      setMessages((current) => [...current, normalizeAssistantMessage(reply, userQuestion)]);
    } catch {
      const fallbackReply = findBestLocalReply(userQuestion);

      setMessages((current) => [
        ...current,
        normalizeAssistantMessage(
          {
            ...fallbackReply,
            cta: `${fallbackReply.cta} The live LLM response is unavailable right now, so this answer used the local portfolio knowledge base.`,
          },
          userQuestion
        ),
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitQuestion(draft);
  };

  return (
    <>
      <button
        type="button"
        className={`portfolio-assistant-fab ${isOpen ? "portfolio-assistant-fab--active" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls="portfolio-assistant-panel"
      >
        <span className="portfolio-assistant-fab__icon">AI</span>
        <span className="portfolio-assistant-fab__label">Ask My AI</span>
      </button>

      <aside
        id="portfolio-assistant-panel"
        className={`portfolio-assistant-panel ${isOpen ? "portfolio-assistant-panel--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="portfolio-assistant-panel__shell">
          <div className="portfolio-assistant-panel__header">
            <div className="portfolio-assistant-panel__identity">
              <div className="portfolio-assistant-panel__monogram" aria-hidden="true">
                S
              </div>
              <div>
                <p className="portfolio-assistant-panel__eyebrow">Portfolio Assistant</p>
                <h3>Sue's AI Guide</h3>
                <p className="portfolio-assistant-panel__boundary">Projects · Backend · Hiring fit</p>
              </div>
            </div>
            <div className="portfolio-assistant-panel__status">
              <button
                type="button"
                className="portfolio-assistant-panel__close"
                onClick={onToggle}
                aria-label="Close assistant"
              >
                ×
              </button>
              <span className="portfolio-assistant-panel__indicator" aria-hidden="true" />
            </div>
          </div>

          <div className="portfolio-assistant-panel__body" ref={bodyRef}>
            <p className="portfolio-assistant-panel__section-label">Assistant</p>
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`portfolio-assistant-message portfolio-assistant-message--${message.role}`}
              >
                {message.role === "assistant" ? (
                  <>
                    <span className="portfolio-assistant-message__badge">Assistant</span>
                    <p>{message.answer}</p>
                    {message.cta ? (
                      <p className="portfolio-assistant-message__cta">{message.cta}</p>
                    ) : null}
                    {message.cards?.length ? (
                      <div className="portfolio-assistant-message__cards">
                        {message.cards.map((card) => (
                          <a
                            key={`${message.question}-${card.title}-${card.label}`}
                            className="portfolio-assistant-card"
                            href={card.href}
                            target={card.href.startsWith("http") ? "_blank" : undefined}
                            rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                          >
                            <span className="portfolio-assistant-card__title">{card.title}</span>
                            <span className="portfolio-assistant-card__label">{card.label}</span>
                          </a>
                        ))}
                      </div>
                    ) : null}
                    {message.followUps?.length ? (
                      <div className="portfolio-assistant-message__followups">
                        {message.followUps.map((followUp) => (
                          <button
                            key={`${message.question}-${followUp}`}
                            type="button"
                            className="portfolio-assistant-followup"
                            onClick={() => submitQuestion(followUp)}
                            disabled={isLoading}
                          >
                            {followUp}
                          </button>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <p>{message.text}</p>
                )}
              </div>
            ))}
            {isLoading ? (
              <div className="portfolio-assistant-message portfolio-assistant-message--assistant portfolio-assistant-message--typing">
                <span className="portfolio-assistant-message__badge">Assistant</span>
                <p>Thinking through Sue&apos;s portfolio details...</p>
              </div>
            ) : null}
          </div>

          {showQuickPrompts ? (
            <div className="portfolio-assistant-panel__quick-prompts">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt.label}
                  type="button"
                  className="portfolio-assistant-chip"
                  onClick={() => submitQuestion(prompt.question)}
                  disabled={isLoading}
                >
                  {prompt.label}
                </button>
              ))}
            </div>
          ) : null}

          <form className="portfolio-assistant-panel__composer" onSubmit={handleSubmit}>
            <input
              id="portfolio-assistant-input"
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask about Sue's work..."
              aria-label="Ask Sue's assistant a question"
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading} aria-label="Send message">
              {isLoading ? "…" : "→"}
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}
