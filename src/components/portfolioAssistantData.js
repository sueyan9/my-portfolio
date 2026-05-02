export const portfolioAssistantPrompts = [
  "Tell me about Sue",
  "What projects has Sue built?",
  "What is Sue's strongest backend experience?",
  "Does Sue have AI or RAG experience?",
  "Why would Sue be a good junior developer?",
  "How can I contact Sue?",
];

export const portfolioAssistantKnowledge = [
  {
    id: "intro",
    matchers: ["tell me about sue", "about sue", "introduce", "yourself", "who is sue"],
    question: "Tell me about Sue",
    answer:
      "Sue Yan is a full-stack developer based in New Zealand who enjoys building useful products with polished user experiences. Her portfolio highlights web, mobile, and 3D interface work, with a strong interest in turning complex systems into smooth and practical experiences.",
    cta: "You can explore the About section and timeline for a quick overview of her background.",
  },
  {
    id: "projects",
    matchers: ["project", "built", "portfolio", "work samples"],
    question: "What projects has Sue built?",
    answer:
      "Sue has built a clinic management system, a React-based 3D dental chart, the ToothMate mobile app, the PriceHound comparison platform, and SPEED, a public evidence extraction database. These projects span full-stack web development, mobile development, interactive 3D UI, and data-driven product design.",
    cta: "The Projects section includes demos, screenshots, and repository links for several of these builds.",
  },
  {
    id: "backend",
    matchers: ["backend", "api", "spring", "node", "server", "database"],
    question: "What is Sue's strongest backend experience?",
    answer:
      "Sue's backend stack is strongest around Java with Spring Boot, Node.js services, RESTful APIs, and relational database workflows. Her site also shows experience with C#, PostgreSQL, MySQL, MongoDB, RabbitMQ, and production-style testing and integration work.",
    cta: "For concrete examples, see the clinic system, SPEED, and her internship platform project.",
  },
  {
    id: "ai-rag",
    matchers: ["ai", "rag", "llm", "vector", "knowledge base", "openai"],
    question: "Does Sue have AI or RAG experience?",
    answer:
      "Sue is actively building toward AI and RAG-focused work, and this portfolio assistant is designed so it can grow into a retrieval-based project. Her current portfolio already demonstrates strong foundations that transfer well to AI product work: full-stack APIs, data modeling, search-oriented thinking, and user-facing product design.",
    cta: "If you'd like, ask about the assistant itself as a roadmap piece for a future RAG upgrade.",
  },
  {
    id: "hire",
    matchers: ["hire", "junior developer", "why sue", "fit", "candidate", "strength"],
    question: "Why would Sue be a good junior developer?",
    answer:
      "Sue would be a strong junior developer because she combines practical delivery with curiosity and range. Her portfolio shows that she can work across frontend, backend, mobile, testing, and cloud-adjacent tools, while also caring about real user experience instead of only technical implementation.",
    cta: "A good next step is to review her recent projects and connect on LinkedIn or GitHub.",
  },
  {
    id: "contact",
    matchers: ["contact", "reach", "email", "linkedin", "github", "availability"],
    question: "How can I contact Sue?",
    answer:
      "The fastest way to reach Sue is through the contact links on this site, especially LinkedIn and GitHub. Those are the best places to continue the conversation, review more technical work, or discuss potential opportunities.",
    cta: "Use the profile card links to open Sue's LinkedIn or GitHub.",
  },
];

export const portfolioAssistantFallback = {
  question: "How else can the assistant help?",
  answer:
    "This assistant currently answers portfolio-specific questions about Sue's background, projects, backend strengths, AI direction, and contact options.",
  cta: "Try one of the suggested questions below to get a focused answer.",
};
