export const projects = [
  {
    id: "clinic-system",
    title: "Rongokit Clinic Management System",
    summary:
      "A clinic operations platform that centralizes patient information, appointment coordination, invoicing, and payment tracking to reduce manual work.",
    highlights: [
      "Centralized patient record management",
      "Appointment scheduling and visit coordination",
      "Invoice and payment tracking",
      "Responsive dashboard for staff workflows",
    ],
    techStack: ["Full-stack web application"],
    strengths: ["Operational workflow design", "Full-stack product thinking", "Healthcare-oriented UX"],
    links: [{ title: "Rongokit Clinic Management System", label: "Open live site", href: "https://rongolab.com" }],
  },
  {
    id: "leavewise",
    title: "LeaveWise – AI Daily Commute Planner",
    summary:
      "An AI-powered daily commute assistant that decides when to leave and how to travel each morning, combining live location, weather, and traffic data into one clear recommendation. Designed around a multi-agent architecture — a Planner/Orchestrator coordinating specialized Context, Weather, Routing, Traffic, and Calendar agents — so each data source can be reasoned about independently before being merged into an explainable recommendation.",
    highlights: [
      "Designed a multi-agent architecture: a Planner/Orchestrator coordinating Context, Weather, Routing, Traffic, and Calendar agents that feed into a shared context",
      "Recommendation agent layer that turns merged multi-agent signals into an explainable departure-time and travel-mode suggestion",
      "Browser geolocation for automatic starting-location detection, with reverse geocoding and driving route estimates via Google Maps APIs",
      "Real-time weather data from Open-Meteo factored into routing decisions",
      "Currently shipped as a layered FastAPI service (API / planner / LLM explanation layers) implementing this design, with full multi-agent orchestration as the next milestone",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "Google Maps API", "Open-Meteo"],
    strengths: ["Multi-agent system design", "Full-stack AI product design", "Real-time data integration", "API orchestration"],
    links: [{ title: "LeaveWise", label: "Open GitHub", href: "https://github.com/sueyan9/AI-Daily-Commute-Planner" }],
  },
  {
    id: "clinic-rag-support",
    title: "Clinic RAG Support API",
    summary:
      "A local-first Retrieval-Augmented Generation (RAG) API for clinic-management support, built with FastAPI, Qdrant, and Ollama. It retrieves section-aware knowledge-base chunks with domain routing and returns source-grounded answers — fully offline, with no prompts, embeddings, or context sent to external AI vendors.",
    highlights: [
      "Local-first, private RAG running entirely on local Ollama models",
      "Heading-aware markdown ingestion into section-level semantic chunks with metadata",
      "Domain-routed retrieval over a Qdrant vector store with global fallback",
      "Source-grounded answers with citations and similarity scores",
      "Built-in evaluation set measuring retrieval, answer, and citation quality",
    ],
    techStack: ["FastAPI", "Qdrant", "Ollama", "Python", "Docker"],
    strengths: ["RAG / AI engineering", "Retrieval and evaluation design", "Privacy-conscious local-first AI", "Backend API design"],
    links: [{ title: "Clinic RAG Support API", label: "Open GitHub", href: "https://github.com/sueyan9/ecommerce-rag-support" }],
  },
  {
    id: "dental-chart",
    title: "3D Dental Chart",
    summary:
      "A React-based 3D dental chart for exploring human teeth anatomy with rotation, zoom, and tooth-specific information.",
    highlights: [
      "Interactive 3D visualization",
      "Tooth-specific information display",
      "Smooth drag, rotate, and zoom interactions",
      "Educational use for students and patient communication",
    ],
    techStack: ["React", "React Three Fiber", "Three.js", "JavaScript", "HTML/CSS"],
    strengths: ["Interactive 3D UI", "Educational product design", "Modern frontend engineering"],
    links: [{ title: "3D Dental Chart", label: "Open live demo", href: "https://tooth-mate-app-2025.vercel.app/" }],
  },
  {
    id: "toothmate",
    title: "ToothMate Mobile App",
    summary:
      "A personalized dental care and education mobile app with 3D charts, treatment plans, educational content, and role-based user flows.",
    highlights: [
      "Interactive age-based 3D tooth models",
      "Treatment records and appointment management",
      "Personalized education modules with quizzes and flashcards",
      "Cross-platform mobile support with authentication and profiles",
    ],
    techStack: ["React Native", "Node.js", "Express", "MongoDB", "Three.js", "Firebase", "Expo"],
    strengths: ["Mobile product delivery", "3D interaction", "Education-focused UX", "End-to-end feature design"],
    links: [{ title: "Projects", label: "See ToothMate section", href: "#projects" }],
  },
  {
    id: "pricehound",
    title: "PriceHound",
    summary:
      "A smart price comparison platform for New Zealand and Australia that compares retailer pricing and supports account, review, and wishlist features.",
    highlights: [
      "Product search with price filters",
      "Real-time price comparison",
      "Currency conversion and account management",
      "Responsive design with contact form and authentication",
    ],
    techStack: ["Web application", "Firebase", "Firestore", "MailJet"],
    strengths: ["Consumer product thinking", "Search-oriented UX", "Responsive web flows"],
    links: [{ title: "PriceHound", label: "Open GitHub", href: "https://github.com/thomasbrears/SDP_PriceHound.git" }],
  },
  {
    id: "speed",
    title: "SPEED",
    summary:
      "A full-stack public evidence extraction database built with the MNNN stack to support secure article submission, moderation, and structured data access.",
    highlights: [
      "MongoDB-backed structured data management",
      "Authentication and moderation workflows",
      "Responsive submission and browsing UI",
      "RESTful and GraphQL API integration with deployment workflow",
    ],
    techStack: ["MongoDB", "NestJS", "Next.js", "Node.js", "TypeScript", "GraphQL"],
    strengths: ["Data-focused product work", "Backend architecture", "Team collaboration", "Deployment and CI/CD"],
    links: [{ title: "SPEED", label: "Open GitHub", href: "https://github.com/sueyan9/SPEED" }],
  },
  {
    id: "parametric-design",
    title: "Parametric Design & Fabrication",
    summary:
      "A digital-to-physical workflow project using parametric design, 3D printing, and laser cutting to create functional prototypes.",
    highlights: [
      "Rhino and Grasshopper modeling",
      "Rapid parametric iteration",
      "3D printing and laser cutting",
      "Assembly and material experimentation",
    ],
    techStack: ["Rhino", "Grasshopper", "3D printing", "Laser cutting"],
    strengths: ["Spatial thinking", "Fabrication workflow", "Design systems mindset"],
    links: [{ title: "Projects", label: "Browse projects", href: "#projects" }],
  },
  {
    id: "matricle-platform",
    title: "All-In-One (ERP + CRM + E-commerce) Platform",
    summary:
      "An enterprise internship project where Sue contributed to a full-stack ERP, CRM, and e-commerce platform, with the main focus on Spring Boot backend development and Vue-based frontend delivery for workflow-heavy business features.",
    highlights: [
      "Enterprise workflow features built primarily on Java Spring Boot services",
      "Vue-based frontend delivery for internal business flows and e-commerce interfaces",
      "Bootstrap used for selected custom pages and faster UI delivery where needed",
      "Backend support across Java (Spring Boot), C#, and Node.js services",
      "Unit testing with JUnit plus full-cycle manual testing for stability and release readiness",
      "Purchase order workflow improvements that reduced manual input errors",
    ],
    techStack: ["Java (Spring Boot)", "Vue", "Bootstrap", "Material UI", "C#", "Node.js", "MySQL", "PostgreSQL", "MongoDB"],
    strengths: ["Workflow-heavy product delivery", "Frontend and backend collaboration", "Testing and QA", "Internship production experience"],
    links: [{ title: "Matricle", label: "Visit company site", href: "https://www.matricle.com/" }],
  },
];
