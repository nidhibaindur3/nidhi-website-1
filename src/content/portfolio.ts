export const links = {
  email: "mailto:nidhibaindur@outlook.com",
  github: "https://github.com/nidhibaindur3",
  linkedin: "https://www.linkedin.com/in/nidhi-baindur",
  resume: "/resume/Nidhi-Baindur-Resume.pdf",
  dailyDigestRepository: "https://github.com/nidhibaindur3/daily-reporter",
  dailyDigestDemo: "https://daily-reporter.nidhibaindur.com",
  studyBuddyDemo: "https://study-buddy.nidhibaindur.com",
  researchLinkedInPost: "https://www.linkedin.com/posts/nidhi-baindur_happy-to-share-that-i-was-awarded-the-rit-activity-7189042944098615296-ndb2",
  ritResearchRecognition: "https://www.rit.edu/provost/undergraduate-research-scholar-graduation-recognition",
  ensoConferenceRecord: "https://www.rit.edu/news/malik-co-presents-research-national-conference",
  ensoAdvisorRecord: "https://nishant-malik.github.io/webcvNM/cvnm-web-version.pdf",
  jasmonicAdvisorRecord: "https://sites.google.com/site/lcarichino/group",
} as const;

export const chapters = [
  { id: "intro", label: "Introduction", nav: "intro" },
  { id: "work", label: "Prep N Print", nav: "work" },
  { id: "daily-digest", label: "Daily Digest", nav: "work" },
  { id: "study-buddy", label: "Study Buddy", nav: "work" },
  { id: "research-enso", label: "ENSO research", nav: "research" },
  { id: "research-jasmonic", label: "Jasmonic acid modeling", nav: "research" },
  { id: "research-crypto", label: "Financial mathematics", nav: "research" },
  { id: "research-graduation", label: "Graduation gaps", nav: "research" },
  { id: "about", label: "About Nidhi", nav: "about" },
  { id: "principles", label: "How I work", nav: "about" },
  { id: "contact", label: "Contact", nav: "contact" },
] as const;

export const navigation = [
  { label: "Work", chapterIndex: 1, group: "work" },
  { label: "Research", chapterIndex: 4, group: "research" },
  { label: "About", chapterIndex: 8, group: "about" },
  { label: "Contact", chapterIndex: 10, group: "contact" },
] as const;

export const dailyDigestStudy = {
  slug: "daily-digest",
  eyebrow: "GenAI application · Independent project",
  title: "Daily Digest",
  dek: "An evidence-first research system that turns current information into inspectable research leads for long-term investors.",
  summary:
    "Daily Digest combines curated sources and market observations into structured claims, themes, contradictions, limitations, and questions worth investigating.",
  role: "Product design, frontend, backend, AI workflow, and infrastructure",
  stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Alembic", "OpenAI"],
  image: "/projects/daily-digest/daily-digest.png",
  imageAlt:
    "Daily Digest research dashboard with a market watchlist, research themes, confidence indicators, and cited evidence.",
  repository: links.dailyDigestRepository,
  demo: links.dailyDigestDemo,
  sections: [
    {
      label: "Why",
      title: "Research needs a trail, not just an answer.",
      body:
        "The product is designed for long-term investigation rather than stock picking. A useful result must preserve where each claim came from, where sources disagree, and what evidence would change the thesis.",
    },
    {
      label: "System",
      title: "The application owns the facts.",
      body:
        "A durable background workflow coordinates claim extraction, theme formation, contradiction review, and thesis synthesis. Jobs, retries, leases, persistence, and confidence remain application responsibilities rather than model responsibilities.",
    },
    {
      label: "Guardrails",
      title: "Structured output is only the first boundary.",
      body:
        "Strict schemas and deterministic validators reject unknown identifiers, unsupported numeric claims, companies absent from the evidence, generated URLs, trading instructions, and themes without enough source breadth.",
    },
  ],
  shipped: [
    "Market watchlist with price, daily change, previous close, and market status",
    "On-demand research discovery with citations and limitations",
    "Source-to-claim provenance and contradiction relationships",
    "Durable background jobs with retries and leases",
    "Backend tests around providers, provenance, validators, and AI boundaries",
  ],
  next: [
    "Broader authoritative source coverage",
    "Deeper market-context workflows",
    "Persistent knowledge and retrieval using embeddings",
    "Authentication and production-grade operational controls",
  ],
} as const;

export const studyBuddyStudy = {
  slug: "study-buddy",
  eyebrow: "AI learning product · Independent project",
  title: "Study Buddy",
  dek: "An adaptive system-design tutor that evaluates the reasoning behind an architectural decision, not a memorized answer.",
  summary:
    "Study Buddy presents one consequential design decision, asks the learner to explain it, and responds with either a targeted concept bridge or a harder transfer question.",
  role: "Product design, learning model, frontend, backend, and AI integration",
  stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "OpenAI"],
  image: "/projects/study-buddy/homepage.png",
  imageAlt:
    "Study Buddy system-design lesson asking a learner to choose and explain an architecture decision.",
  repository: null,
  demo: links.studyBuddyDemo,
  sections: [
    {
      label: "Why",
      title: "Good system design is a chain of decisions.",
      body:
        "Traditional study tools reward recall. Study Buddy instead asks learners to justify a decision under constraints, so the next prompt can respond to the reasoning they actually demonstrated.",
    },
    {
      label: "Learning model",
      title: "Evidence accumulates; mastery is not guessed.",
      body:
        "Attempts append evidence across six dimensions. Deterministic projection owns mastery and review timing, while the AI supplies a bounded assessment that can fall back to a rubric when the model is unavailable.",
    },
    {
      label: "Reliability",
      title: "The experience survives an imperfect dependency.",
      body:
        "Structured response schemas, idempotent attempts, persisted scenarios, and deterministic fallback behavior keep the learning loop usable when an AI request fails or no API key is configured.",
    },
  ],
  shipped: [
    "Seeded URL-shortener system-design scenario",
    "Model-generated scenarios with schema validation and persistence",
    "Adaptive bridge and transfer-question flow",
    "Append-only learning evidence and review scheduling",
    "Backend and frontend tests for mastery, fallback, and core learning flows",
  ],
  next: [
    "Authentication and learner isolation",
    "Human review for generated scenarios",
    "A broader authored scenario library",
    "Production telemetry and operating controls",
  ],
} as const;

export const caseStudies = [dailyDigestStudy, studyBuddyStudy] as const;

export type CaseStudy = (typeof caseStudies)[number];

export const researchProjects = [
  {
    number: "01",
    slug: "enso",
    shortTitle: "ENSO prediction",
    title: "Climate networks and ENSO prediction",
    mentor: "Dr. Nishant Malik",
    context: "Applied machine learning · 2022—2024",
    period: "2022—2024",
    area: "Complex networks · time series · machine learning",
    question: "Can structure in climate networks support useful 12-month ENSO forecasts?",
    summary: "Integrated climate-network analysis with machine learning for long-range El Niño–Southern Oscillation forecasting.",
    methods: ["Time-series analysis", "Probabilistic methods", "Random Forests", "Complex-network metrics"],
    tools: ["Python"],
    evidence: ["500,000+ sea-surface-temperature observations", "75 years of historical data", "12-month forecast horizon"],
    source: links.ensoConferenceRecord,
    featured: true,
    detailsNeeded: [
      "The exact validation split and baseline",
      "What the reported 95% accuracy measures",
      "Findings that are approved for public use",
    ],
  },
  {
    number: "02",
    slug: "jasmonic-acid-modeling",
    shortTitle: "Jasmonic acid modeling",
    title: "Computational modeling of jasmonic acid biosynthesis",
    mentor: "Dr. Lucia Carichino",
    context: "Mathematical modeling · Spring 2023",
    period: "Spring 2023",
    area: "Computational modeling · biological systems",
    question: "How does spatial dependence affect jasmonic acid production?",
    summary: "Modeled the effect of spatial dependence on jasmonic acid production.",
    methods: ["Computational modeling", "Spatial dependence"],
    tools: [],
    evidence: [],
    source: links.jasmonicAdvisorRecord,
    detailsNeeded: [
      "Model equations and assumptions",
      "Software or programming languages used",
      "Findings and validation approach",
      "Your individual implementation and analysis",
    ],
  },
  {
    number: "03",
    slug: "crypto-inflation",
    shortTitle: "Crypto and inflation",
    title: "Cryptocurrencies and forward inflation rates",
    mentor: "Dr. Mary Lynn Reed",
    context: "Financial mathematics research",
    period: "Date to add",
    area: "Financial mathematics",
    question: "What relationships exist between cryptocurrency markets and forward inflation rates?",
    summary: "Studied relationships between cryptocurrency markets and forward inflation rates.",
    methods: [],
    tools: [],
    evidence: [],
    source: links.researchLinkedInPost,
    detailsNeeded: [
      "Research dates and dataset",
      "Mathematical or statistical methods",
      "Software or programming languages used",
      "Findings and your individual contribution",
    ],
  },
  {
    number: "04",
    slug: "mathematics-graduation-gaps",
    shortTitle: "Graduation gaps",
    title: "Mathematics graduation gaps",
    mentor: "Dr. Tony Wong · Dr. Kara L. Maki · Dr. Carol Marchetti",
    context: "School Action Team research",
    period: "Date to add",
    area: "Mathematics education research",
    question: "What graduation gaps can be identified in RIT’s School of Mathematical Sciences?",
    summary: "Contributed to research examining graduation gaps in RIT’s School of Mathematical Sciences.",
    methods: [],
    tools: [],
    evidence: [],
    source: links.researchLinkedInPost,
    detailsNeeded: [
      "Research dates and dataset boundary",
      "Analytical methods",
      "Tools or programming languages used",
      "Findings and your individual contribution",
    ],
  },
] as const;
