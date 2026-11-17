// Knowledge base for the local "Ask Sudip" search in the command palette.
// Runs fully in the browser: no API, no cost, nothing to expire.

export type KnowledgeEntry = {
  id: string;
  kind: "experience" | "project" | "skill" | "about";
  title: string;
  answer: string;
  keywords: string[];
  section: string; // element id to scroll to
};

export const KNOWLEDGE: KnowledgeEntry[] = [
  {
    id: "exp-cn",
    kind: "experience",
    title: "Credit Nirvana (Perfios) — Software Engineer",
    answer:
      "Jun 2025 – Present, Bengaluru. Modernizing the frontend of a debt-collection platform with React, MUI, Java, Spring Boot and Keycloak, working closely with product, design and backend teams.",
    keywords: ["credit nirvana", "perfios", "current", "now", "present", "latest", "job", "company", "react", "mui", "keycloak", "spring boot", "fintech", "debt"],
    section: "experiences",
  },
  {
    id: "exp-pw",
    kind: "experience",
    title: "PhysicsWallah — Frontend Developer (SDE-1)",
    answer:
      "May 2022 – Sept 2024, Noida. Shipped 30+ features (58% more user engagement), contributed to a Master Admin Panel used by 40+ organizations, and cut load time by 40% with SSR.",
    keywords: ["physicswallah", "pw", "scale", "traffic", "performance", "ssr", "engagement", "admin", "next", "angular", "impact", "achievement", "metrics", "high traffic"],
    section: "experiences",
  },
  {
    id: "exp-byjus-dev",
    kind: "experience",
    title: "BYJU'S — Associate Software Engineer",
    answer:
      "Aug 2021 – Mar 2022. Built a dashboard, testimonial and rating modules with React, Redux and Bootstrap.",
    keywords: ["byjus", "byju", "associate", "dashboard", "redux", "bootstrap", "react"],
    section: "experiences",
  },
  {
    id: "exp-byjus-ops",
    kind: "experience",
    title: "BYJU'S — Operations Team Lead",
    answer:
      "Oct 2020 – Jul 2021. Led operations workflows and CRM tooling, handled clients directly, and ranked as a top performer in the eastern zone.",
    keywords: ["byjus", "operations", "lead", "leadership", "team lead", "management", "crm", "client", "people"],
    section: "experiences",
  },
  {
    id: "exp-synprox",
    kind: "experience",
    title: "Synprox Solutions — Web Developer Intern",
    answer:
      "Jan 2020 – Sept 2020, Kolkata. First dev role: frontend work in Angular 7, SCSS and Bootstrap.",
    keywords: ["synprox", "intern", "internship", "first", "start", "began", "angular", "scss"],
    section: "experiences",
  },
  {
    id: "proj-aml",
    kind: "project",
    title: "Anti-Money Laundering (AML) module",
    answer:
      "Frontend for AML workflows at Credit Nirvana: surfaces risk signals, transaction insights and compliance-driven decision paths. React, MUI, Java, Spring Boot, SQL.",
    keywords: ["aml", "anti money laundering", "compliance", "risk", "transaction", "finance", "fintech", "project"],
    section: "projects",
  },
  {
    id: "proj-odr",
    kind: "project",
    title: "Online Dispute Resolution (ODR) module",
    answer:
      "Frontend for structured dispute handling, case timelines and resolution tracking for financial institutions. React, MUI, Java, Spring Boot.",
    keywords: ["odr", "dispute", "resolution", "case", "timeline", "finance", "project"],
    section: "projects",
  },
  {
    id: "proj-ssfl",
    kind: "project",
    title: "SSFL Collections Platform (Credit Nirvana)",
    answer:
      "Frontend lead across several drops: OTS and pre-closure posting, payment links with QR, collection posting and authentication, legal notice management with maker-checker, FOS activity map and an SSFL-only navbar. React, MUI, Vite.",
    keywords: ["ssfl", "collections", "collection", "ots", "preclosure", "pre-closure", "payment link", "qr", "notice", "legal", "maker checker", "authentication", "biggest", "largest", "major", "lead", "project", "credit nirvana", "vite"],
    section: "projects",
  },
  {
    id: "proj-voice",
    kind: "project",
    title: "Voice Call Recordings & Summaries",
    answer:
      "Call-recording playback and recording summaries inside the voice-bot flow, including a second phase of enhancements. React, MUI.",
    keywords: ["voice", "call", "recording", "recordings", "summary", "summaries", "voice bot", "bot", "audio", "ai", "analysis", "project"],
    section: "projects",
  },
  {
    id: "proj-payments",
    kind: "project",
    title: "Payment Reversal & Refund",
    answer:
      "Reversal and refund workflows (two phases) with validation, pagination and loaders, plus OTP-verification UI changes.",
    keywords: ["payment", "payments", "reversal", "refund", "otp", "money", "finance", "project"],
    section: "projects",
  },
  {
    id: "proj-priority",
    kind: "project",
    title: "Priority Assignment & Monitoring",
    answer:
      "Interfaces for assigning and monitoring case priority for collections teams, plus FOS live-monitoring map fixes.",
    keywords: ["priority", "assignment", "monitoring", "map", "maps", "fos", "field", "project"],
    section: "projects",
  },
  {
    id: "proj-pii",
    kind: "project",
    title: "PII Masking",
    answer:
      "A metadata-driven masking convention in shared inputs: eye-toggle reveal with 30-second auto re-mask, wired into many forms.",
    keywords: ["pii", "masking", "mask", "security", "privacy", "shoulder surfing", "sensitive", "data protection", "project"],
    section: "projects",
  },
  {
    id: "proj-theme",
    kind: "project",
    title: "Themeable Design System",
    answer:
      "Figma tokens turned into per-client MUI themes picked at build time, with inline colours removed and the default theme visually unchanged.",
    keywords: ["design system", "theme", "theming", "figma", "tokens", "white label", "client", "styling", "css", "ui", "project"],
    section: "projects",
  },
  {
    id: "proj-metadata",
    kind: "project",
    title: "Metadata-Driven UI Engine",
    answer:
      "Screens, filters, tables, forms and routes rendered from layout JSON in the database, so many features and client customisations need only a JSON change in the DB, with no code change or redeploy.",
    keywords: ["metadata", "metadata driven", "json", "config", "configurable", "no code", "low code", "layout", "dynamic", "customisation", "customization", "database", "db", "architecture", "project"],
    section: "projects",
  },
  {
    id: "proj-utility",
    kind: "project",
    title: "Reusable Utility Components",
    answer:
      "Shared grids, image viewers, multi-select lists, details modals and PDF generation, extended through metadata-gated opt-in props so one change benefits many screens safely.",
    keywords: ["utility", "utilities", "reusable", "shared", "components", "component library", "pdf", "modal", "grid", "design", "reuse", "project"],
    section: "projects",
  },
  {
    id: "proj-perf",
    kind: "project",
    title: "Frontend Performance & Optimisation",
    answer:
      "Lazy-loaded modals, optimised filter handling, a Vite build migration, and case-sensitive build checks to keep deploys reliable.",
    keywords: ["performance", "optimisation", "optimization", "optimize", "fast", "speed", "lazy", "lazy loading", "vite", "build", "bundle", "project"],
    section: "projects",
  },
  {
    id: "proj-store",
    kind: "project",
    title: "PW Store (e-commerce)",
    answer:
      "Product discovery and purchase flows for PW's marketplace. Next.js, Tailwind CSS, Node.js. Live at store.pw.live.",
    keywords: ["store", "ecommerce", "e-commerce", "commerce", "shop", "marketplace", "next", "project", "live"],
    section: "projects",
  },
  {
    id: "proj-admin",
    kind: "project",
    title: "PW Admin panel",
    answer:
      "Master admin panel used by 40+ organizations. Angular 12, RxJS, Material UI, Tailwind CSS.",
    keywords: ["admin", "panel", "master", "angular", "rxjs", "material", "dashboard", "project", "enterprise"],
    section: "projects",
  },
  {
    id: "proj-spam",
    kind: "project",
    title: "PW Spam Check (GenAI)",
    answer:
      "A GenAI-powered answer-sheet verification tool that filters spam from genuine answers at scale. Next.js, Tailwind CSS, Axios.",
    keywords: ["ai", "genai", "gen ai", "llm", "spam", "verification", "answer sheet", "machine learning", "project"],
    section: "projects",
  },
  {
    id: "proj-test",
    kind: "project",
    title: "PW Test Series platform",
    answer:
      "Online subjective + objective test platform with leaderboards, results and test cloning. Next.js, Angular, Tailwind, Headless UI.",
    keywords: ["test", "series", "exam", "leaderboard", "quiz", "project", "education"],
    section: "projects",
  },
  {
    id: "proj-dashboard",
    kind: "project",
    title: "User Dashboard (open source)",
    answer:
      "Role-based dashboard with tables, charts and search. Angular 19 and Chart.js. Live demo and GitHub repo available.",
    keywords: ["dashboard", "chart", "charts", "angular 19", "github", "open source", "demo", "project", "code"],
    section: "projects",
  },
  {
    id: "proj-portfolio",
    kind: "project",
    title: "This portfolio",
    answer:
      "A Ghibli-inspired portfolio with a Narrative/Technical mode toggle. Next.js, Tailwind, shadcn/ui, Framer Motion.",
    keywords: ["portfolio", "this site", "website", "ghibli", "design", "next", "framer", "motion", "animation", "project"],
    section: "Philosophy",
  },
  {
    id: "skill-genai",
    kind: "skill",
    title: "GenAI experience",
    answer:
      "Yes, on the product frontend side. At PhysicsWallah he built the UI for PW Spam Check, a GenAI-powered answer-sheet verification tool processing data at scale (Next.js, Axios). At Credit Nirvana he builds frontend for the voice-bot flow, including call-recording playback and recording summaries. His focus is turning AI output into clear, trustworthy interfaces.",
    keywords: ["genai", "gen ai", "generative ai", "ai", "llm", "gpt", "machine learning", "ml", "artificial intelligence", "voice bot", "chatbot", "ai experience", "ai projects"],
    section: "projects",
  },
  {
    id: "skill-frontend",
    kind: "skill",
    title: "Frontend skills",
    answer:
      "React, Next.js, TypeScript, JavaScript, Vue, Angular (7/12/14/19), Tailwind, MUI, Bootstrap, RxJS, Chart.js, Ionic.",
    keywords: ["frontend", "front end", "skills", "stack", "tech", "technologies", "react", "next", "typescript", "angular", "vue", "tailwind", "good at", "strength", "strongest"],
    section: "skills",
  },
  {
    id: "skill-backend",
    kind: "skill",
    title: "Backend skills",
    answer: "Node.js, Express, Java, Spring Boot, REST and SOAP APIs, MongoDB, MySQL.",
    keywords: ["backend", "back end", "server", "node", "java", "spring", "api", "database", "sql", "mongodb", "full stack", "fullstack"],
    section: "skills",
  },
  {
    id: "skill-tools",
    kind: "skill",
    title: "Tools & process",
    answer:
      "Git/GitHub, Docker, CI/CD, Jenkins, Jest, Cypress, Postman, Figma, Jira, React Native.",
    keywords: ["tools", "testing", "test", "docker", "ci", "cd", "git", "figma", "jest", "cypress", "devops", "design"],
    section: "skills",
  },
  {
    id: "about-philosophy",
    kind: "about",
    title: "How Sudip thinks about interfaces",
    answer:
      "Interfaces should reduce anxiety, favour calm over raw speed, teach through affordances, and hide complexity behind simple surfaces. Write code for long-term maintainability.",
    keywords: ["philosophy", "approach", "think", "thinking", "principles", "values", "design", "ux", "maintainability", "why"],
    section: "Philosophy",
  },
  {
    id: "about-years",
    kind: "about",
    title: "Experience level",
    answer:
      "Developing professionally since Jan 2020: an internship, two years at BYJU'S (including a team-lead role), over two years at PhysicsWallah, and now at Credit Nirvana.",
    keywords: ["experience", "years", "senior", "junior", "how long", "background", "career", "about", "who"],
    section: "about",
  },
  {
    id: "about-contact",
    kind: "about",
    title: "Get in touch",
    answer: "Use the contact section at the bottom of the page.",
    keywords: ["contact", "hire", "hiring", "email", "reach", "available", "availability", "talk", "call", "connect", "linkedin", "resume", "cv"],
    section: "contact",
  },
];

const STOP = new Set([
  "a", "an", "the", "is", "are", "does", "do", "did", "has", "have", "had", "he", "his", "him", "sudip",
  "what", "which", "who", "how", "about", "with", "on", "in", "of", "to", "for", "and", "or", "any", "me", "tell", "can", "i",
]);

function tokenize(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9+#.\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t && !STOP.has(t));
}

export function askKnowledge(query: string, limit = 3): KnowledgeEntry[] {
  const q = query.toLowerCase();
  const tokens = tokenize(query);
  if (!tokens.length) return [];

  return KNOWLEDGE.map((e) => {
    let score = 0;
    for (const k of e.keywords) {
      // short keywords must match a whole word ("ai" must not hit "maintain")
      const hit = k.length <= 3 ? tokens.includes(k) : q.includes(k);
      if (hit) score += k.includes(" ") ? 4 : 3;
    }
    const hay = `${e.title} ${e.answer}`.toLowerCase();
    for (const t of tokens) {
      if (t.length > 2 && hay.includes(t)) score += 1;
    }
    return { e, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.e);
}
