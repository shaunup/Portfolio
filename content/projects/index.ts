import type { Project } from "@/content/types";

export const projects: Project[] = [
  {
    slug: "equatorial-star-tracker",
    title: "Equatorial-Mount Star Tracker",
    subtitle: "A motorized equatorial mount for long-exposure astrophotography",
    summary:
      "Designed and built a motorized equatorial mount that compensates for Earth's rotation, enabling long-exposure astrophotography by maintaining precise sidereal tracking.",
    year: 2024,
    status: "completed",
    featured: true,
    featuredOrder: 1,
    disciplines: [
      "Embedded Systems",
      "Firmware",
      "Mechanical Design",
      "Astronomy",
      "Robotics",
    ],
    categories: ["embedded", "robotics"],
    technologies: [
      "C/C++",
      "Arduino",
      "Stepper Motors",
      "A4988 Driver",
      "CAD",
      "3D Printing",
      "TMC2208",
      "FreeRTOS",
    ],
    role: "Sole designer and engineer",
    teamSize: 1,
    duration: "[ADD PROJECT DURATION]",
    coverImage: {
      src: "/images/projects/star-tracker/cover.webp",
      alt: "Assembled equatorial star tracker mounted outdoors at night",
      width: 1200,
      height: 800,
    },
    problem:
      "Long-exposure astrophotography requires a camera to move in precise synchrony with Earth's rotation. Without compensation, stars trail across the image within seconds, making detailed deep-sky photographs impossible without expensive commercial equipment.",
    constraints: [
      "Sub-arcsecond tracking accuracy over 10–20 minute exposures",
      "Mechanical tolerances tight enough to avoid periodic error",
      "Low-noise motor drive to avoid vibration blur",
      "Powered from a 12 V field battery",
      "Portable and self-contained",
    ],
    approach:
      "Designed the mechanical mount around a precisely machined RA axis aligned to the celestial pole. Implemented the motor control system in firmware using interrupt-driven step timing to hit the sidereal rate (15.04 arcseconds per second). Selected a TMC2208 driver for silent, microstep-precise motor control and built calibration routines to correct for polar alignment error.",
    architecture:
      "User configuration → microcontroller firmware → TMC2208 motor driver → NEMA 17 stepper motor → worm gear assembly → RA axis → camera platform → sky / calibration feedback",
    engineeringDecisions: [
      {
        decision: "Microstepping resolution",
        alternatives: ["Full step (coarser)", "1/8 step", "1/32 step"],
        chosen: "1/16 step with TMC2208",
        reason:
          "Provides smooth motion at sidereal rate while remaining within the MCU's interrupt latency budget",
        tradeoff:
          "Higher interrupt rate increases MCU load but remains manageable on the ATmega platform",
      },
      {
        decision: "Worm gear ratio",
        alternatives: ["60:1", "100:1", "144:1"],
        chosen: "144:1",
        reason:
          "Higher ratio reduces the effect of motor stepping artifacts on the final axis motion",
        tradeoff:
          "Slower slew speed for coarse positioning adjustments",
      },
    ],
    challenges:
      "Initial tracking tests revealed periodic error caused by slight worm gear eccentricity. Debugged by logging axis position against known star positions and iterating on the gear-mesh preload.",
    results:
      "Achieved consistent tracking accuracy sufficient for [ADD VERIFIED TRACKING ERROR] arcsecond error over [ADD EXPOSURE DURATION] minute exposures. Successfully captured [ADD VERIFIED RESULT].",
    lessons:
      "Mechanical tolerances have a direct and measurable effect on system accuracy in ways that software cannot fully compensate for. Designing for calibration—not perfection—from the start would have shortened the iteration cycle.",
    nextSteps:
      "Add autoguiding support via ST-4 interface, implement plate-solving for automated polar alignment, and design a lighter carbon-fiber mechanical structure.",
    relatedProjects: [
      "power-market-intelligence",
      "job-application-tracker",
    ],
    seoTitle: "Equatorial Star Tracker — Shaun Pimenta",
    seoDescription:
      "Engineering case study: motorized equatorial mount for astrophotography, covering motor control, mechanical design, firmware, and calibration.",
  },
  {
    slug: "power-market-intelligence",
    title: "North American Power Market Intelligence Platform",
    subtitle: "Energy data ingestion, analysis, and interactive forecasting dashboard",
    summary:
      "Built a data pipeline and interactive dashboard for collecting, processing, and visualizing public North American electricity-market data, with scenario-analysis tools for price and generation forecasting.",
    year: 2024,
    status: "active",
    featured: true,
    featuredOrder: 2,
    disciplines: [
      "Data Engineering",
      "Energy Analytics",
      "Full Stack",
      "Machine Learning",
    ],
    categories: ["data", "full-stack", "machine-learning"],
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "TimescaleDB",
      "React",
      "TypeScript",
      "Recharts",
      "Apache Airflow",
      "Docker",
      "Redis",
    ],
    role: "Full-stack engineer and data pipeline designer",
    teamSize: 1,
    duration: "[ADD PROJECT DURATION]",
    coverImage: {
      src: "/images/projects/power-market/cover.webp",
      alt: "Interactive energy market dashboard showing price and generation data",
      width: 1200,
      height: 800,
    },
    problem:
      "Public North American electricity-market data is available from CAISO, MISO, PJM, and other ISOs, but arrives in inconsistent formats across different endpoints, making it difficult to compare markets, identify patterns, or run scenario analyses without significant manual preprocessing.",
    constraints: [
      "Data arrives in varying formats (CSV, XML, JSON) from different ISO APIs",
      "Historical data volumes require time-series optimized storage",
      "Dashboard must remain responsive at the granularity of 5-minute intervals",
      "No budget for commercial data providers",
    ],
    approach:
      "Designed a modular ingestion layer with per-ISO adapters that normalize data into a shared schema before loading into a TimescaleDB time-series database. Built scheduled pipelines in Airflow for reliable daily and intraday updates. The React dashboard uses server-sent events for live price updates and provides filtering, aggregation, and export tools.",
    architecture:
      "Public ISO APIs → per-ISO adapters → normalization layer → TimescaleDB → FastAPI → React dashboard with Recharts visualization",
    results:
      "[ADD VERIFIED METRIC] markets integrated. Pipeline handles [ADD VERIFIED DATA VOLUME] of historical data. Dashboard responds to queries in under [ADD VERIFIED LATENCY] seconds.",
    lessons:
      "ISO data quality varies significantly. Building robust validation at the ingestion boundary—rather than tolerating dirty data downstream—saved substantial debugging time once the pipeline scaled.",
    nextSteps:
      "Add ML-based price forecasting models, integrate real-time grid-frequency data, and build an alerting system for unusual price or congestion events.",
    repositoryUrl: "[ADD GITHUB URL]",
    relatedProjects: ["job-application-tracker", "high-traffic-optimization"],
    seoTitle: "Power Market Intelligence Platform — Shaun Pimenta",
    seoDescription:
      "Engineering case study: data pipeline and dashboard for North American electricity-market data, covering ingestion, time-series storage, and interactive visualization.",
  },
  {
    slug: "job-application-tracker",
    title: "Intelligent Job Application Tracker",
    subtitle: "Email-based automation for structured application-stage tracking",
    summary:
      "Built a privacy-aware system that monitors an email inbox for application-related messages, extracts structured metadata using an LLM, and maintains a searchable, queryable tracker—with human review at every classification step.",
    year: 2024,
    status: "active",
    featured: true,
    featuredOrder: 3,
    disciplines: [
      "Machine Learning",
      "Full Stack",
      "Data Engineering",
    ],
    categories: ["machine-learning", "full-stack", "data"],
    technologies: [
      "Python",
      "LangChain",
      "OpenAI API",
      "FastAPI",
      "PostgreSQL",
      "React",
      "TypeScript",
      "Gmail API",
      "Celery",
      "Redis",
    ],
    role: "Designer and sole engineer",
    teamSize: 1,
    duration: "[ADD PROJECT DURATION]",
    coverImage: {
      src: "/images/projects/job-tracker/cover.webp",
      alt: "Job application tracker dashboard showing application stages and timeline",
      width: 1200,
      height: 800,
    },
    problem:
      "Managing a large number of job applications across multiple companies, roles, and stages is error-prone when done manually. Application status emails arrive with varying formats, and tracking them in a spreadsheet requires constant manual updates.",
    constraints: [
      "Email content is private and should not be sent wholesale to external APIs",
      "Classification errors would degrade trust in the system quickly",
      "The system should remain useful even when the LLM is unavailable",
      "Latency between email arrival and tracker update should be under a few minutes",
    ],
    approach:
      "Implemented a pipeline that polls the Gmail API, extracts only the sender, subject, and a cleaned summary of each email—stripping personal content before LLM processing. A classification prompt determines application stage, company, and role. A human-review queue surfaces uncertain classifications for manual confirmation before they update the tracker.",
    architecture:
      "Gmail API → email poller → content sanitizer → LLM classifier → confidence evaluator → human-review queue (low confidence) → PostgreSQL tracker → React dashboard",
    engineeringDecisions: [
      {
        decision: "Privacy boundary for LLM input",
        alternatives: [
          "Send full email body",
          "Send only extracted fields",
          "Local-only LLM",
        ],
        chosen: "Extracted structured summary only",
        reason:
          "Avoids sending personal correspondence to external APIs while retaining enough context for accurate classification",
        tradeoff:
          "Extraction step adds latency and may occasionally miss context that the full body would have provided",
      },
    ],
    results:
      "Correctly classifies [ADD VERIFIED ACCURACY]% of application emails without human review. Human-review queue captures uncertain cases before they affect the tracker. Processes a backlog of [ADD EMAIL COUNT] emails in under [ADD PROCESSING TIME].",
    lessons:
      "Designing the system around human oversight from the start—rather than adding it later—made the classification errors visible and correctable rather than silently corrupting the data.",
    nextSteps:
      "Add follow-up reminders, interview scheduling integration, and a timeline view comparing application stages across companies.",
    repositoryUrl: "[ADD GITHUB URL]",
    relatedProjects: ["power-market-intelligence", "equatorial-star-tracker"],
    seoTitle: "Intelligent Job Application Tracker — Shaun Pimenta",
    seoDescription:
      "Engineering case study: privacy-aware email automation system for structured job application tracking, covering LLM classification, human review, and pipeline design.",
  },
  {
    slug: "high-traffic-optimization",
    title: "High-Traffic Web Platform Optimization",
    subtitle: "Diagnosing and resolving reliability issues at scale",
    summary:
      "Diagnosed and resolved a set of compounding performance and reliability problems on a high-traffic WordPress platform, covering caching strategy, database query efficiency, pagination architecture, bot-traffic analysis, and concurrency control.",
    year: 2023,
    status: "completed",
    featured: true,
    featuredOrder: 4,
    disciplines: [
      "Web Performance",
      "Infrastructure",
      "Full Stack",
    ],
    categories: ["infrastructure", "full-stack"],
    technologies: [
      "PHP",
      "WordPress",
      "MySQL",
      "Redis",
      "Nginx",
      "Varnish",
      "Google Cloud Platform",
      "New Relic",
      "Query Monitor",
    ],
    role: "Performance and infrastructure engineer",
    teamSize: "[ADD TEAM SIZE]",
    duration: "[ADD PROJECT DURATION]",
    coverImage: {
      src: "/images/projects/web-performance/cover.webp",
      alt: "Performance monitoring dashboard showing request throughput and response times",
      width: 1200,
      height: 800,
    },
    problem:
      "A high-traffic platform was experiencing intermittent availability problems, slow page generation times, and database overload under peak traffic, despite previously working infrastructure.",
    constraints: [
      "Changes could not cause production downtime",
      "Confidential business data could not be exposed",
      "Database schema changes required careful migration planning",
      "Root causes were masked by multiple interacting issues",
    ],
    approach:
      "Began with traffic-pattern analysis to separate legitimate and bot traffic, then used query profiling to identify the most expensive database operations. Identified N+1 query patterns, missing indexes, and cache invalidation logic that was defeating the Redis layer. Fixed each category of problem in isolation before validating under realistic load.",
    architecture:
      "Traffic analysis → query profiling → cache audit → index analysis → pagination refactoring → load validation → monitoring baseline",
    results:
      "Reduced average page generation time by [ADD VERIFIED METRIC]%. Reduced database query count per request by [ADD VERIFIED METRIC]%. Eliminated [ADD VERIFIED METRIC]% of bot-driven load. Restored reliable uptime under peak traffic.",
    lessons:
      "Performance problems at scale are almost never a single root cause. The discipline of isolating and measuring one variable at a time—even when multiple problems are visible—is what allows systematic resolution rather than guesswork.",
    nextSteps:
      "Implement edge caching for static and semi-static content, add structured query performance baselines, and migrate read-heavy queries to read replicas.",
    relatedProjects: ["power-market-intelligence", "job-application-tracker"],
    seoTitle: "High-Traffic Web Platform Optimization — Shaun Pimenta",
    seoDescription:
      "Engineering case study: diagnosing and resolving performance and reliability issues on a high-traffic WordPress platform through caching, database optimization, and traffic analysis.",
  },
  {
    slug: "blockchain-application",
    title: "Decentralized Application",
    subtitle: "[ADD PROJECT SUBTITLE]",
    summary: "[ADD PROJECT SUMMARY]",
    year: 2024,
    status: "prototype",
    featured: true,
    featuredOrder: 5,
    disciplines: ["Blockchain", "Full Stack"],
    categories: ["blockchain", "full-stack"],
    technologies: [
      "Solidity",
      "Hardhat",
      "ethers.js",
      "React",
      "TypeScript",
      "IPFS",
      "MetaMask",
    ],
    role: "[ADD ROLE]",
    teamSize: "[ADD TEAM SIZE]",
    duration: "[ADD PROJECT DURATION]",
    coverImage: {
      src: "/images/projects/blockchain/cover.webp",
      alt: "[ADD ALT TEXT]",
      width: 1200,
      height: 800,
    },
    problem: "[ADD PROBLEM STATEMENT]",
    constraints: ["[ADD CONSTRAINTS]"],
    approach: "[ADD APPROACH]",
    results: "[ADD RESULTS]",
    lessons: "[ADD LESSONS]",
    repositoryUrl: "[ADD GITHUB URL]",
    relatedProjects: ["high-traffic-optimization"],
    seoTitle: "Decentralized Application — Shaun Pimenta",
    seoDescription: "[ADD SEO DESCRIPTION]",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "all") return projects;
  if (category === "featured") return getFeaturedProjects();
  return projects.filter((p) => p.categories.includes(category as string & typeof p.categories[number]));
}
