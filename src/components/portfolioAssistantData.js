export const portfolioAssistantPrompts = [
  "Tell me about Sue",
  "What projects has Sue built?",
  "What role is Sue looking for?",
  "Is Sue open to relocation or remote work?",
  "What is Sue's strongest project?",
  "What is Sue's strongest backend experience?",
  "What tech stack has she used in production or internships?",
  "Can she work across frontend and backend?",
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
    id: "role",
    matchers: ["role", "looking for", "position", "job type", "career direction"],
    question: "What role is Sue looking for?",
    answer:
      "Sue is especially well aligned with full-stack, AI-focused, and cloud-related software roles. Her portfolio shows a mix of user-facing product work, backend systems, and technical curiosity that fits well with modern full-stack engineering teams.",
    cta: "A recruiter can quickly validate that fit through her project work and stack sections.",
  },
  {
    id: "remote-relocation",
    matchers: ["relocation", "remote", "hybrid", "onsite", "open to move", "availability location"],
    question: "Is Sue open to relocation or remote work?",
    answer:
      "Yes. Based on the information represented in this portfolio, Sue is open to remote opportunities and relocation conversations.",
    cta: "The best next step is to contact Sue directly through LinkedIn or GitHub to discuss role details.",
  },
  {
    id: "strongest-project",
    matchers: ["strongest project", "best project", "main project", "highlight project", "acc", "toothmate"],
    question: "What is Sue's strongest project?",
    answer:
      "Two standout projects are the clinic management system and ToothMate. The clinic platform shows practical full-stack product thinking around real operational workflows, while ToothMate demonstrates mobile development, 3D interaction, education-focused UX, and multi-feature product design.",
    cta: "Those two projects are the best places to start if you want to understand Sue's strongest applied work.",
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
    id: "production-stack",
    matchers: ["production", "internship", "used in production", "tech stack used", "real work stack"],
    question: "What tech stack has she used in production or internships?",
    answer:
      "Across her internship and applied projects, Sue has worked with React, TypeScript, Bootstrap, Material UI, Java with Spring Boot, C#, Node.js, REST APIs, MySQL, PostgreSQL, MongoDB, and testing workflows such as JUnit. Her portfolio also shows experience with cloud and infrastructure-adjacent tools including AWS, Azure, GCP, and Cloudflare.",
    cta: "The internship platform, clinic system, and SPEED project give the clearest examples of that stack in context.",
  },
  {
    id: "full-stack",
    matchers: ["frontend and backend", "full stack", "across frontend", "both frontend and backend"],
    question: "Can she work across frontend and backend?",
    answer:
      "Yes. Sue presents as a full-stack developer, with experience building frontend interfaces, backend APIs, database-backed features, and end-to-end product flows. Her portfolio includes web, mobile, and system-oriented work rather than only one narrow layer of the stack.",
    cta: "That range is visible across the internship platform, ToothMate, SPEED, and the clinic system.",
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
    "Oops, that goes beyond what I know from Sue's portfolio. Ask me about her projects, skills, or experience instead.",
  cta: "Try one of the suggested questions below to get a focused answer.",
};
