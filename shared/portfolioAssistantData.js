import { contact, experience, profile, projects, skills } from "./portfolioData/index.js";

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

export const portfolioAssistantFollowUps = [
  "Ask about backend experience",
  "See Sue's strongest projects",
  "Check contact options",
  "Ask about AI or RAG experience",
  "Review production tech stack",
  "Explore full-stack experience",
];

export const portfolioAssistantWelcome = {
  question: "Welcome",
  answer:
    "Hi, I'm Sue's portfolio assistant. I can answer questions about her projects, skills, experience, and contact options.",
  cta: "Pick a question below or type your own HR-style question.",
  cards: [
    { title: "Projects", label: "Browse projects", href: contact.portfolioProjectsHref },
    { title: "LinkedIn", label: "Open profile", href: contact.linkedin },
  ],
  followUps: portfolioAssistantFollowUps.slice(0, 3),
};

export const portfolioAssistantFallback = {
  question: "How else can the assistant help?",
  answer:
    "That goes beyond what I know from Sue's portfolio right now. Ask me about her projects, skills, experience, or contact options instead.",
  cta: "Try one of the suggested questions below to get a focused answer.",
  cards: [
    { title: "Projects", label: "Ask about projects", href: contact.portfolioProjectsHref },
    { title: "Skills", label: "Ask about backend experience", href: contact.portfolioSkillsHref },
  ],
  followUps: portfolioAssistantFollowUps.slice(0, 3),
};

const quickLinksByTopic = {
  intro: [
    { title: "LinkedIn", label: "View profile", href: contact.linkedin },
    { title: "GitHub", label: "See repositories", href: contact.github },
  ],
  projects: [
    { title: "Projects", label: "Browse projects", href: contact.portfolioProjectsHref },
    { title: "SPEED", label: "Open GitHub", href: "https://github.com/sueyan9/SPEED" },
    { title: "PriceHound", label: "Open GitHub", href: "https://github.com/thomasbrears/SDP_PriceHound.git" },
  ],
  role: [
    { title: "Projects", label: "Review portfolio work", href: contact.portfolioProjectsHref },
    { title: "Tech Stack", label: "See core stack", href: contact.portfolioSkillsHref },
  ],
  location: [
    { title: "LinkedIn", label: "Message Sue", href: contact.linkedin },
    { title: "GitHub", label: "Open profile", href: contact.github },
  ],
  strongestProject: [
    { title: "Clinic System", label: "See project section", href: contact.portfolioProjectsHref },
    { title: "3D Dental Chart", label: "Open live demo", href: "https://tooth-mate-app-2025.vercel.app/" },
  ],
  backend: [
    { title: "SPEED", label: "Open GitHub", href: "https://github.com/sueyan9/SPEED" },
    { title: "Matricle", label: "Visit company site", href: "https://www.matricle.com/" },
  ],
  stack: [
    { title: "Projects", label: "Review portfolio work", href: contact.portfolioProjectsHref },
    { title: "Tech Stack", label: "See core stack", href: contact.portfolioSkillsHref },
  ],
  fullStack: [
    { title: "ToothMate", label: "See project section", href: contact.portfolioProjectsHref },
    { title: "SPEED", label: "Open GitHub", href: "https://github.com/sueyan9/SPEED" },
  ],
  ai: [
    { title: "Portfolio Assistant", label: "Try the assistant", href: "#top" },
    { title: "SPEED", label: "View data-focused project", href: "https://github.com/sueyan9/SPEED" },
  ],
  hire: [
    { title: "GitHub", label: "Review code", href: contact.github },
    { title: "LinkedIn", label: "Connect with Sue", href: contact.linkedin },
  ],
  contact: [
    { title: "LinkedIn", label: "Open LinkedIn", href: contact.linkedin },
    { title: "GitHub", label: "Open GitHub", href: contact.github },
    { title: "Projects", label: "Browse projects", href: contact.portfolioProjectsHref },
  ],
};

const followUpsByTopic = {
  intro: ["See Sue's strongest projects", "Ask about backend experience", "Check contact options"],
  projects: ["See Sue's strongest projects", "Ask about backend experience", "Check contact options"],
  role: ["Explore full-stack experience", "Review production tech stack", "Check contact options"],
  location: ["Check contact options", "Explore full-stack experience", "See Sue's strongest projects"],
  strongestProject: ["Ask about backend experience", "Explore full-stack experience", "Check contact options"],
  backend: ["Review production tech stack", "Explore full-stack experience", "See Sue's strongest projects"],
  stack: ["Ask about backend experience", "Explore full-stack experience", "See Sue's strongest projects"],
  fullStack: ["Ask about backend experience", "Review production tech stack", "Check contact options"],
  ai: ["Ask about backend experience", "See Sue's strongest projects", "Check contact options"],
  hire: ["See Sue's strongest projects", "Ask about backend experience", "Check contact options"],
  contact: ["See Sue's strongest projects", "Ask about backend experience", "Explore full-stack experience"],
};

const localKnowledge = [
  {
    id: "intro",
    topic: "intro",
    matchers: ["tell me about sue", "about sue", "introduce", "yourself", "who is sue"],
    question: "Tell me about Sue",
    answer: `${profile.name} is a ${profile.title.toLowerCase()} based in ${profile.location} who enjoys building useful products with polished user experiences. Her portfolio spans web, mobile, backend, and interactive 3D work, with a strong interest in turning complex systems into practical product experiences.`,
    cta: "You can explore the About section and project timeline for a quick overview of her background.",
  },
  {
    id: "projects",
    topic: "projects",
    matchers: ["project", "built", "portfolio", "work samples"],
    question: "What projects has Sue built?",
    answer: `Sue has built ${projects
      .slice(0, 5)
      .map((project) => project.title)
      .join(", ")}. Together they show full-stack web development, mobile product work, interactive 3D UI, and data-driven platform design.`,
    cta: "The Projects section includes demos, screenshots, and repository links for several of these builds.",
  },
  {
    id: "role",
    topic: "role",
    matchers: ["role", "looking for", "position", "job type", "career direction"],
    question: "What role is Sue looking for?",
    answer: `Sue is especially aligned with ${profile.roleFocus.join(", ")}. Her portfolio shows a mix of user-facing product work, backend systems, and technical curiosity that fits well with modern engineering teams.`,
    cta: "A recruiter can validate that fit quickly through her project work and stack sections.",
  },
  {
    id: "remote-relocation",
    topic: "location",
    matchers: ["relocation", "remote", "hybrid", "onsite", "open to move", "availability location"],
    question: "Is Sue open to relocation or remote work?",
    answer: `Yes. Based on the information represented in this portfolio, Sue is open to remote opportunities and relocation conversations.`,
    cta: "The best next step is to contact Sue directly through LinkedIn or GitHub to discuss role details.",
  },
  {
    id: "strongest-project",
    topic: "strongestProject",
    matchers: ["strongest project", "best project", "main project", "highlight project", "acc", "toothmate"],
    question: "What is Sue's strongest project?",
    answer: `Two standout projects are ${projects[0].title} and ${projects[2].title}. The clinic platform shows practical full-stack product thinking around real operational workflows, while ToothMate demonstrates mobile development, 3D interaction, education-focused UX, and multi-feature product design.`,
    cta: "Those two projects are the best places to start if you want to understand Sue's strongest applied work.",
  },
  {
    id: "backend",
    topic: "backend",
    matchers: ["backend", "api", "spring", "node", "server", "database"],
    question: "What is Sue's strongest backend experience?",
    answer: `Sue's backend stack is strongest around ${skills.backend
      .slice(0, 4)
      .join(", ")}, along with relational database workflows. Her site also shows experience with ${skills.databases.join(", ")}, RabbitMQ, and production-style testing and integration work.`,
    cta: "For concrete examples, see the clinic system, SPEED, and her internship platform project.",
  },
  {
    id: "production-stack",
    topic: "stack",
    matchers: ["production", "internship", "used in production", "tech stack used", "real work stack"],
    question: "What tech stack has she used in production or internships?",
    answer: `Across her internship and applied projects, Sue has worked with ${experience[0].techStack
      .slice(0, 10)
      .join(", ")}. Her portfolio also shows cloud and infrastructure-adjacent experience with ${skills.cloudAndInfrastructure.join(", ")}.`,
    cta: "The internship platform, clinic system, and SPEED project give the clearest examples of that stack in context.",
  },
  {
    id: "full-stack",
    topic: "fullStack",
    matchers: ["frontend and backend", "full stack", "across frontend", "both frontend and backend"],
    question: "Can she work across frontend and backend?",
    answer: `Yes. Sue presents as a full-stack developer, with experience building frontend interfaces, backend APIs, database-backed features, and end-to-end product flows across web, mobile, and system-oriented work.`,
    cta: "That range is visible across the internship platform, ToothMate, SPEED, and the clinic system.",
  },
  {
    id: "ai-rag",
    topic: "ai",
    matchers: ["ai", "rag", "llm", "vector", "knowledge base", "openai"],
    question: "Does Sue have AI or RAG experience?",
    answer:
      "Sue is actively building toward AI and RAG-focused work, and this portfolio assistant is designed so it can grow into a retrieval-based project. Her current portfolio already demonstrates strong foundations that transfer well to AI product work: full-stack APIs, data modeling, search-oriented thinking, and user-facing product design.",
    cta: "If you'd like, ask about the assistant itself as a roadmap piece for a future RAG upgrade.",
  },
  {
    id: "hire",
    topic: "hire",
    matchers: ["hire", "junior developer", "why sue", "fit", "candidate", "strength"],
    question: "Why would Sue be a good junior developer?",
    answer: `Sue would be a strong junior developer because she combines practical delivery with curiosity and range. Her portfolio shows that she can work across frontend, backend, mobile, testing, and cloud-adjacent tools while still caring about real user experience.`,
    cta: "A good next step is to review her recent projects and connect on LinkedIn or GitHub.",
  },
  {
    id: "contact",
    topic: "contact",
    matchers: ["contact", "reach", "email", "linkedin", "github", "availability"],
    question: "How can I contact Sue?",
    answer:
      "The fastest way to reach Sue is through the contact links on this site, especially LinkedIn and GitHub. Those are the best places to continue the conversation, review more technical work, or discuss potential opportunities.",
    cta: "Use the profile card links to open Sue's LinkedIn or GitHub.",
  },
];

export function getCardsForTopic(topic) {
  return quickLinksByTopic[topic] || portfolioAssistantFallback.cards;
}

export function getFollowUpsForTopic(topic) {
  return followUpsByTopic[topic] || portfolioAssistantFallback.followUps;
}

export function findBestLocalReply(input) {
  const normalized = input.trim().toLowerCase();

  if (!normalized) {
    return portfolioAssistantFallback;
  }

  const directMatch = localKnowledge.find((item) =>
    item.matchers.some((matcher) => normalized.includes(matcher))
  );

  if (!directMatch) {
    return portfolioAssistantFallback;
  }

  return {
    ...directMatch,
    cards: getCardsForTopic(directMatch.topic),
    followUps: getFollowUpsForTopic(directMatch.topic),
  };
}

export function buildStructuredPortfolioData() {
  return {
    profile,
    projects,
    skills,
    experience,
    contact,
  };
}

export function buildPortfolioResumeSummary() {
  return [
    `Name: ${profile.name}`,
    `Title: ${profile.title}`,
    `Location: ${profile.location}`,
    `Summary: ${profile.summary}`,
    `Role focus: ${profile.roleFocus.join(", ")}`,
    `Key strengths: ${profile.strengths.join(", ")}`,
    `Core backend skills: ${skills.backend.join(", ")}`,
    `Core frontend skills: ${skills.frontend.join(", ")}`,
    `Databases: ${skills.databases.join(", ")}`,
    `Cloud and infrastructure: ${skills.cloudAndInfrastructure.join(", ")}`,
    `Flagship projects: ${projects
      .filter((project) => ["clinic-system", "toothmate", "speed"].includes(project.id))
      .map((project) => `${project.title} (${project.summary})`)
      .join("; ")}`,
    `Experience: ${experience
      .map((item) => `${item.company}: ${item.summary}`)
      .join("; ")}`,
    `Contact: LinkedIn ${contact.linkedin}, GitHub ${contact.github}`,
  ].join("\n");
}

export const portfolioAssistantSystemPrompt = `You are Sue Yan's portfolio assistant.

Rules:
- Answer naturally, but only use the portfolio data provided to you.
- Do not invent employers, dates, achievements, contact methods, or technologies that are not in the provided data.
- If the answer is not supported by the provided data, say so clearly and redirect to what is known.
- Keep answers concise, recruiter-friendly, and specific.
- Mention 1 to 3 concrete examples when it improves the answer.
- Return strict JSON only with this shape:
{
  "answer": "string",
  "cta": "string",
  "topic": "intro | projects | role | location | strongestProject | backend | stack | fullStack | ai | hire | contact | fallback",
  "followUps": ["string", "string"]
}`;
