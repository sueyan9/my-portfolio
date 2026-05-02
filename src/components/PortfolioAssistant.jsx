import React, { useEffect, useMemo, useRef, useState } from "react";
import "./PortfolioAssistant.css";
import {
  portfolioAssistantFallback,
  portfolioAssistantKnowledge,
  portfolioAssistantPrompts,
} from "./portfolioAssistantData";

function findBestReply(input) {
  const normalized = input.trim().toLowerCase();

  if (!normalized) {
    return portfolioAssistantFallback;
  }

  const directMatch = portfolioAssistantKnowledge.find((item) =>
    item.matchers.some((matcher) => normalized.includes(matcher))
  );

  return directMatch || portfolioAssistantFallback;
}

export default function PortfolioAssistant({ isOpen, onToggle }) {
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState(() => [
    {
      role: "assistant",
      question: "Welcome",
      answer:
        "Hi, I'm Sue's portfolio assistant. I can answer questions about her projects, skills, experience, and contact options.",
      cta: "Pick a question below or type your own HR-style question.",
    },
  ]);
  const bodyRef = useRef(null);

  const suggestedQuestions = useMemo(() => portfolioAssistantPrompts, []);

  useEffect(() => {
    if (!bodyRef.current) {
      return;
    }

    bodyRef.current.scrollTo({
      top: bodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isOpen]);

  const submitQuestion = (questionText) => {
    const userQuestion = questionText.trim();
    if (!userQuestion) {
      return;
    }

    const reply = findBestReply(userQuestion);

    setMessages((current) => [
      ...current,
      { role: "user", text: userQuestion },
      {
        role: "assistant",
        question: reply.question,
        answer: reply.answer,
        cta: reply.cta,
      },
    ]);
    setDraft("");
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
        <span className="portfolio-assistant-fab__label">Ask my assistant</span>
      </button>

      <aside
        id="portfolio-assistant-panel"
        className={`portfolio-assistant-panel ${isOpen ? "portfolio-assistant-panel--open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="portfolio-assistant-panel__shell">
          <div className="portfolio-assistant-panel__header">
            <div>
              <p className="portfolio-assistant-panel__eyebrow">Portfolio Assistant</p>
              <h3>Sue's AI Guide</h3>
              <p className="portfolio-assistant-panel__boundary">
                I answer based only on Sue&apos;s portfolio and project information.
              </p>
            </div>
            <button
              type="button"
              className="portfolio-assistant-panel__close"
              onClick={onToggle}
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>

          <div className="portfolio-assistant-panel__body" ref={bodyRef}>
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
                  </>
                ) : (
                  <p>{message.text}</p>
                )}
              </div>
            ))}
          </div>

          <div className="portfolio-assistant-panel__prompts">
            {suggestedQuestions.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="portfolio-assistant-chip"
                onClick={() => submitQuestion(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          <form className="portfolio-assistant-panel__composer" onSubmit={handleSubmit}>
            <input
              type="text"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              placeholder="Ask about projects, backend skills, or contact info"
              aria-label="Ask Sue's assistant a question"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </aside>
    </>
  );
}
