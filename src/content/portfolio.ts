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
  { id: "about", label: "About Nidhi", nav: "about" },
  { id: "work", label: "Prep N Print", nav: "work" },
  { id: "research-enso", label: "ENSO research", nav: "research" },
  { id: "research-jasmonic", label: "Jasmonic acid modeling", nav: "research" },
  { id: "research-crypto", label: "Financial mathematics", nav: "research" },
  { id: "research-graduation", label: "Graduation gaps", nav: "research" },
  { id: "daily-digest", label: "Daily Digest", nav: "projects" },
  { id: "study-buddy", label: "Study Buddy", nav: "projects" },
  { id: "contact", label: "Contact", nav: "contact" },
] as const;

export const navigation = [
  { label: "About", chapterIndex: 1, group: "about" },
  { label: "Work", chapterIndex: 2, group: "work" },
  { label: "Research", chapterIndex: 3, group: "research" },
  { label: "Projects", chapterIndex: 7, group: "projects" },
  { label: "Contact", chapterIndex: 9, group: "contact" },
] as const;

export const dailyDigestStudy = {
  slug: "daily-digest",
  eyebrow: "GenAI application · Independent project",
  title: "Daily Digest",
  dek: "A research pipeline that keeps every generated claim connected to its evidence, limitations, and contradictions.",
  summary:
    "Long-term research becomes difficult to trust when an AI answer hides its sources or compresses disagreement into one confident response. Daily Digest turns curated sources and market observations into claims that remain inspectable throughout the workflow.",
  role: "Designed and built the product, frontend, backend, AI workflow, and infrastructure",
  status: "Live product",
  stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Alembic", "OpenAI"],
  image: "/projects/daily-digest/daily-digest.png",
  imageAlt:
    "Daily Digest research dashboard with a market watchlist, research themes, confidence indicators, and cited evidence.",
  repository: links.dailyDigestRepository,
  demo: links.dailyDigestDemo,
  sections: [
    {
      label: "Problem",
      title: "Research needs a trail, not just an answer.",
      body:
        "The product is designed for long-term investigation rather than stock picking. A useful result must preserve where each claim came from, where sources disagree, and what evidence would change the thesis.",
    },
    {
      label: "Architecture",
      title: "A durable workflow coordinates the research stages.",
      body:
        "Background jobs coordinate claim extraction, theme formation, contradiction review, and thesis synthesis. Retries, leases, persistence, and confidence are explicit application concerns, so the workflow can recover without asking the model to manage system state.",
    },
    {
      label: "Technical decision",
      title: "The model proposes; the application verifies.",
      body:
        "Structured model output enters strict schemas and deterministic validators. The application rejects unknown identifiers, unsupported numeric claims, companies absent from the evidence, generated URLs, trading instructions, and themes without enough source breadth.",
    },
    {
      label: "Reliability",
      title: "Provenance survives every transformation.",
      body:
        "Source-to-claim relationships and contradictions are persisted alongside the research output. Provider, provenance, validator, and AI-boundary tests cover the places where a plausible response could otherwise become an unsupported fact.",
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
  dek: "A system-design tutor that evaluates why a learner made an architecture decision, then adapts the next question.",
  summary:
    "System design is difficult to learn through recall alone: the important signal is how someone reasons under constraints. Study Buddy presents one consequential decision, evaluates the explanation, and chooses either a concept bridge or a harder transfer question.",
  role: "Designed and built the product, learning model, frontend, backend, and AI integration",
  status: "Live prototype",
  stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker", "OpenAI"],
  image: "/projects/study-buddy/homepage.png",
  imageAlt:
    "Study Buddy system-design lesson asking a learner to choose and explain an architecture decision.",
  repository: null,
  demo: links.studyBuddyDemo,
  sections: [
    {
      label: "Problem",
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
      label: "Technical decision",
      title: "Assessment and progression have separate owners.",
      body:
        "The AI evaluates a response within a structured schema, but deterministic application logic updates mastery and review timing. That boundary keeps one model response from directly rewriting the learner’s state.",
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
    title: "Predicting ENSO with climate networks",
    mentor: "Dr. Nishant Malik",
    context: "Network science + machine learning · 2022—2024",
    period: "2022—2024",
    area: "Complex networks · time series · machine learning",
    question: "Can the structure of global temperature relationships add useful signal to ENSO prediction?",
    summary:
      "Converted global surface-air temperature anomalies into network features, then tested what a Random Forest could—and could not—learn about ENSO.",
    methods: ["Pearson correlation", "Climate-network metrics", "Random Forest regression", "Cross-validation"],
    tools: [],
    evidence: ["NCEP/NCAR Reanalysis I", "1948—2022 climate record", "Training MSE 0.342 · validation MSE 0.803"],
    source: links.ensoConferenceRecord,
    featured: true,
    evidenceBoundary: [
      "The number of cross-validation folds and temporal ordering are not documented in the supplied report.",
      "The one-year training-window experiment predicts a different period and is not treated as directly comparable.",
      "No programming language or unreported model hyperparameters are claimed here.",
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
    evidenceBoundary: [
      "The model equations and assumptions are not included in the current public record.",
      "The implementation tools are not publicly documented.",
      "Findings, validation, and individual ownership are not claimed beyond the linked source.",
    ],
  },
  {
    number: "03",
    slug: "crypto-inflation",
    shortTitle: "Crypto and inflation",
    title: "Cryptocurrencies and forward inflation rates",
    mentor: "Dr. Mary Lynn Reed",
    context: "Financial mathematics research",
    period: "Not publicly documented",
    area: "Financial mathematics",
    question: "What relationships exist between cryptocurrency markets and forward inflation rates?",
    summary: "Studied relationships between cryptocurrency markets and forward inflation rates.",
    methods: [],
    tools: [],
    evidence: [],
    source: links.researchLinkedInPost,
    evidenceBoundary: [
      "Research dates and the dataset boundary are not included in the current public record.",
      "Methods and implementation tools are not publicly documented.",
      "Findings and individual ownership are not claimed beyond the linked source.",
    ],
  },
  {
    number: "04",
    slug: "mathematics-graduation-gaps",
    shortTitle: "Graduation gaps",
    title: "Mathematics graduation gaps",
    mentor: "Dr. Tony Wong · Dr. Kara L. Maki · Dr. Carol Marchetti",
    context: "School Action Team research",
    period: "Not publicly documented",
    area: "Mathematics education research",
    question: "What graduation gaps can be identified in RIT’s School of Mathematical Sciences?",
    summary: "Contributed to research examining graduation gaps in RIT’s School of Mathematical Sciences.",
    methods: [],
    tools: [],
    evidence: [],
    source: links.researchLinkedInPost,
    evidenceBoundary: [
      "Research dates and the dataset boundary are not included in the current public record.",
      "Analytical methods and implementation tools are not publicly documented.",
      "Findings and individual ownership are not claimed beyond the linked source.",
    ],
  },
] as const;
