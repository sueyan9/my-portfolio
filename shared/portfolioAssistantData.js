import { contact, experience, profile, projects, skills } from "./portfolioData/index.js";

const getProjectTitle = (id, fallback) => projects.find((project) => project.id === id)?.title ?? fallback;

export const portfolioAssistantPromptGroups = [
  {
    label: "Technical",
    prompts: [
      "What backend systems has Sue built?",
      "What technologies does Sue use most?",
      "What kind of problems does Sue solve?",
    ],
  },
  {
    label: "Hiring",
    prompts: [
      "What makes Sue a strong candidate?",
      "How does Sue work in a team?",
      "What makes Sue different from other developers?",
    ],
  },
  {
    label: "Projects & Contact",
    prompts: [
      "What kind of projects can Sue help with?",
      "Has Sue worked on real-world systems?",
      "How can I contact Sue?",
    ],
  },
];

export const portfolioAssistantPrompts = portfolioAssistantPromptGroups.flatMap((group) => group.prompts);

export const portfolioAssistantFollowUps = [
  "What backend systems has Sue built?",
  "What technologies does Sue use most?",
  "What kind of problems does Sue solve?",
  "What makes Sue a strong candidate?",
  "What makes Sue different from other developers?",
  "How can I contact Sue?",
];

export const portfolioAssistantWelcome = {
  question: "Welcome",
  answer:
    "Hi, I know Sue's work inside out - her projects, backend stack, and what roles she thrives in.",
  cta: "Try a suggested question below, or just ask me anything.",
  cards: [],
  followUps: [],
};

export const portfolioAssistantFallback = {
  question: "How else can the assistant help?",
  answer:
    "That's an interesting one - I might need Sue herself for that. What I can do is help you explore what she's built, the technologies she uses most, and the kinds of problems she likes solving.",
  cta: "Try asking about her strongest project, backend systems, team experience, or contact options and I'll point you in the right direction.",
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
  intro: ["What kind of problems does Sue solve?", "What backend systems has Sue built?", "How can I contact Sue?"],
  projects: ["What backend systems has Sue built?", "What kind of problems does Sue solve?", "How can I contact Sue?"],
  role: ["What makes Sue a strong candidate?", "What makes Sue different from other developers?", "How can I contact Sue?"],
  location: ["What kind of projects can Sue help with?", "What makes Sue a strong candidate?", "How can I contact Sue?"],
  strongestProject: ["What backend systems has Sue built?", "What kind of problems does Sue solve?", "How can I contact Sue?"],
  backend: ["What technologies does Sue use most?", "What kind of problems does Sue solve?", "What makes Sue a strong candidate?"],
  stack: ["What backend systems has Sue built?", "What makes Sue different from other developers?", "How can I contact Sue?"],
  fullStack: ["What backend systems has Sue built?", "What technologies does Sue use most?", "How can I contact Sue?"],
  ai: ["What kind of problems does Sue solve?", "What makes Sue different from other developers?", "How can I contact Sue?"],
  hire: ["How does Sue work in a team?", "What makes Sue different from other developers?", "How can I contact Sue?"],
  contact: ["What makes Sue a strong candidate?", "What kind of projects can Sue help with?", "Has Sue worked on real-world systems?"],
};

const localKnowledge = [
  {
    id: "intro",
    topic: "intro",
    matchers: ["tell me about sue", "about sue", "introduce", "yourself", "who is sue"],
    question: "Tell me about Sue",
    answer: `${profile.name} is a ${profile.title.toLowerCase()} with a strong focus on backend systems, full-stack product delivery, and real-world problem solving. She enjoys building systems that reduce repetitive work and improve efficiency, and her portfolio spans web, mobile, data-backed workflows, and interactive 3D experiences. She's also especially interested in AI-focused product work and smarter system design.`,
    cta: "If you'd like, I can walk you through one of her projects next. The clinic system is a great place to start.",
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
    answer: `If you want to understand Sue's work quickly, start with ${getProjectTitle("clinic-system", "Rongokit Clinic Management System")}. It's a full-stack project centered on real operational workflows, where she focused on reducing manual work, centralizing patient information, and supporting day-to-day clinic processes. ${getProjectTitle("toothmate", "ToothMate Mobile App")} is another strong example, especially for mobile product thinking, 3D interaction, and end-to-end feature design.`,
    cta: "I can break down the clinic system in more detail if you want to see how she approaches real-world problems.",
  },
  {
    id: "backend-systems",
    topic: "backend",
    matchers: ["what backend systems has sue built", "backend systems", "backend projects", "backend work"],
    question: "What backend systems has Sue built?",
    answer: `Sue's backend-oriented work shows up especially in ${getProjectTitle("clinic-system", "Rongokit Clinic Management System")}, ${getProjectTitle("clinic-rag-support", "Clinic RAG Support API")}, and ${getProjectTitle("speed", "SPEED")}. Across those projects, she has worked on workflow-driven product logic, structured data handling, authentication and moderation flows, APIs, and database-backed features rather than just surface-level UI.`,
    cta: "If you want the strongest backend example, I'd start with the clinic system or SPEED.",
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
    matchers: ["production", "internship", "used in production", "tech stack used", "real work stack", "what technologies does sue use most", "tech stack does sue prefer", "technologies use most"],
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
    matchers: ["hire", "junior developer", "why sue", "fit", "candidate", "strength", "what makes sue a strong candidate"],
    question: "Why would Sue be a good junior developer?",
    answer: `Sue stands out because she combines practical delivery with systems thinking. Her portfolio shows that she can work across frontend, backend, mobile, testing, and data-backed workflows while staying focused on real user needs and operational efficiency. She's not just building features in isolation. She's usually thinking about how the full system becomes more useful and less manual.`,
    cta: "If you're looking for someone who can build practical systems and think through real workflows, Sue could be a strong fit. You can reach out through LinkedIn or GitHub.",
  },
  {
    id: "different",
    topic: "hire",
    matchers: ["what makes sue different", "different from other developers", "what makes sue different from other developers"],
    question: "What makes Sue different from other developers?",
    answer: `What stands out about Sue is how she thinks about systems, not just screens or isolated features. Her projects consistently focus on reducing manual work, improving data flow, and making software genuinely usable in real scenarios. That shows up especially in the clinic system, SPEED, and her internship work on workflow-focused features.`,
    cta: "Want an example? The clinic management system is the clearest place to see that mindset in action.",
  },
  {
    id: "problems",
    topic: "projects",
    matchers: ["what kind of problems does sue solve", "what problems has sue solved", "problems does sue solve", "problems has sue solved"],
    question: "What kind of problems does Sue solve?",
    answer: `Sue's work tends to focus on practical, workflow-heavy problems: reducing repetitive manual work, organizing structured information, improving data flow, and making systems easier to use in day-to-day scenarios. In her portfolio, that includes clinic operations, evidence submission and moderation, education-focused product flows, and comparison/search experiences.`,
    cta: "If you want, I can point you to the project that best matches backend systems, mobile product work, or real operational workflows.",
  },
  {
    id: "teamwork",
    topic: "hire",
    matchers: ["how does sue work in a team", "work in a team", "team player", "collaboration"],
    question: "How does Sue work in a team?",
    answer: `Based on the portfolio, Sue works well in collaborative product environments where delivery spans more than one layer of the stack. SPEED highlights team collaboration directly, and her internship experience also shows cross-functional work across frontend implementation, backend support, testing, and feature delivery under deadlines.`,
    cta: "If team fit matters most, I'd also look at her internship experience and the SPEED project.",
  },
  {
    id: "client-fit",
    topic: "projects",
    matchers: ["what kind of projects can sue help with", "projects can sue help with", "what can sue help build"],
    question: "What kind of projects can Sue help with?",
    answer: `Sue is a strong fit for projects that need practical full-stack delivery, workflow design, backend-connected product features, or user-facing systems with real operational needs. Her portfolio covers clinic operations, mobile education products, structured data platforms, search-oriented tools, and interactive frontend experiences.`,
    cta: "If you have a workflow-heavy or product-focused project in mind, Sue's portfolio suggests she could be especially valuable there.",
  },
  {
    id: "real-world",
    topic: "projects",
    matchers: ["has sue worked on real-world systems", "real-world systems", "real world systems", "real systems"],
    question: "Has Sue worked on real-world systems?",
    answer: `Yes. Several of Sue's strongest projects are grounded in real-world workflows rather than purely visual demos. The clinic management system focuses on patient, appointment, invoicing, and payment processes; SPEED is built around submission and moderation workflows; and her internship work supported ERP, CRM, and e-commerce features tied to operational use cases.`,
    cta: "Those projects are the best proof that Sue can think beyond isolated features and work on systems people actually rely on.",
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
