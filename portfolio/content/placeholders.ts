/**
 * CONTENT COMPLETION CHECKLIST
 *
 * This file lists every placeholder that must be replaced before the site
 * goes live. Search for the bracketed strings below in the codebase to
 * find where each one appears.
 *
 * Each item is marked:
 *   [ ] Not started
 *   [~] In progress
 *   [x] Complete
 */

export const PLACEHOLDERS = {
  // ── Personal information ──────────────────────────────────────────────────
  email: "[ADD EMAIL]",
  githubUrl: "https://github.com/[ADD GITHUB USERNAME]",
  githubUsername: "[ADD GITHUB USERNAME]",
  linkedinUrl: "https://linkedin.com/in/[ADD LINKEDIN]",

  // ── Education ─────────────────────────────────────────────────────────────
  degree: "[ADD DEGREE]",                    // e.g. "Bachelor of Science"
  institution: "[ADD INSTITUTION]",          // e.g. "University of Toronto"
  graduationYear: "[ADD GRADUATION YEAR]",   // e.g. "2026"

  // ── Projects — general ────────────────────────────────────────────────────
  projectCount: "[PROJECT_COUNT]",           // Total completed projects
  domainsCount: "[DOMAINS_COUNT]",           // Number of distinct domains
  technologiesCount: "[TECHNOLOGIES_COUNT]", // Distinct technologies used

  // ── Star Tracker ─────────────────────────────────────────────────────────
  starTrackerDuration: "[ADD PROJECT DURATION]",
  starTrackerTrackingError: "[ADD VERIFIED TRACKING ERROR]",
  starTrackerExposureDuration: "[ADD EXPOSURE DURATION]",
  starTrackerResult: "[ADD VERIFIED RESULT]",

  // ── Power Market Platform ─────────────────────────────────────────────────
  powerMarketDuration: "[ADD PROJECT DURATION]",
  powerMarketMarketsCount: "[ADD VERIFIED METRIC]",
  powerMarketDataVolume: "[ADD VERIFIED DATA VOLUME]",
  powerMarketLatency: "[ADD VERIFIED LATENCY]",
  powerMarketRepo: "[ADD GITHUB URL]",

  // ── Job Application Tracker ───────────────────────────────────────────────
  jobTrackerDuration: "[ADD PROJECT DURATION]",
  jobTrackerAccuracy: "[ADD VERIFIED ACCURACY]",
  jobTrackerEmailCount: "[ADD EMAIL COUNT]",
  jobTrackerProcessingTime: "[ADD PROCESSING TIME]",
  jobTrackerRepo: "[ADD GITHUB URL]",

  // ── High-Traffic Optimization ─────────────────────────────────────────────
  webPerfDuration: "[ADD PROJECT DURATION]",
  webPerfTeamSize: "[ADD TEAM SIZE]",
  webPerfPageTimeImprovement: "[ADD VERIFIED METRIC]",
  webPerfQueryReduction: "[ADD VERIFIED METRIC]",
  webPerfBotReduction: "[ADD VERIFIED METRIC]",

  // ── Blockchain project ────────────────────────────────────────────────────
  blockchainSubtitle: "[ADD PROJECT SUBTITLE]",
  blockchainSummary: "[ADD PROJECT SUMMARY]",
  blockchainProblem: "[ADD PROBLEM STATEMENT]",
  blockchainRole: "[ADD ROLE]",
  blockchainTeamSize: "[ADD TEAM SIZE]",
  blockchainDuration: "[ADD PROJECT DURATION]",
  blockchainRepo: "[ADD GITHUB URL]",

  // ── Timeline ──────────────────────────────────────────────────────────────
  timelineEarlyDate: "[ADD DATE]",
  timelineFirstAppDate: "[ADD DATE]",
  timelineUniversityDate: "[ADD DATE]",
  timelineEmbeddedDate: "[ADD DATE]",
  timelineStarTrackerDate: "[ADD DATE]",
  timelinePerformanceDate: "[ADD DATE]",
  timelineDataMlDate: "[ADD DATE]",
  timelineCurrentStatus: "[ADD CURRENT STATUS]",
  timelinePersonalStory: "[ADD PERSONAL STORY]",

  // ── About ─────────────────────────────────────────────────────────────────
  outsideEngineering: "[ADD PERSONAL INTERESTS]",
  favoritePlace: "[ADD FAVORITE PLACE]",
  bookOrArticle: "[ADD BOOK OR ARTICLE]",
  currentCuriosity: "[ADD CURRENT CURIOSITY]",
  nontechnicalGoal: "[ADD NONTECHNICAL GOAL]",
  communityInvolvement: "[ADD COMMUNITY INVOLVEMENT]",

  // ── Media ─────────────────────────────────────────────────────────────────
  // All placeholder images that need real assets:
  images: [
    { path: "/images/home/hero-star-tracker.webp", description: "Star tracker assembled and mounted outdoors", ratio: "4:3" },
    { path: "/images/home/hero-circuit.webp", description: "Electronics close-up or embedded hardware", ratio: "4:3" },
    { path: "/images/home/hero-dashboard.webp", description: "Application dashboard screenshot", ratio: "16:9" },
    { path: "/images/home/hero-code.webp", description: "Code or architecture diagram", ratio: "16:9" },
    { path: "/images/about/shaun-portrait.webp", description: "Professional portrait photograph", ratio: "3:4" },
    { path: "/images/about/shaun-workspace.webp", description: "Workspace photograph with electronics", ratio: "16:9" },
    { path: "/images/about/shaun-building.webp", description: "Building or prototyping photograph", ratio: "16:9" },
    { path: "/images/journey/early-build.webp", description: "Early project or build photograph", ratio: "4:3" },
    { path: "/images/journey/first-app.webp", description: "First significant application screenshot", ratio: "16:9" },
    { path: "/images/journey/embedded-prototype.webp", description: "Embedded systems prototype", ratio: "4:3" },
    { path: "/images/journey/star-tracker-testing.webp", description: "Star tracker during field testing", ratio: "4:3" },
    { path: "/images/journey/current-work.webp", description: "Current work or workspace", ratio: "16:9" },
    { path: "/images/projects/star-tracker/cover.webp", description: "Star tracker final assembled", ratio: "3:2" },
    { path: "/images/projects/star-tracker/cad.webp", description: "CAD model of the mount", ratio: "4:3" },
    { path: "/images/projects/star-tracker/electronics.webp", description: "Electronics and wiring close-up", ratio: "4:3" },
    { path: "/images/projects/star-tracker/field.webp", description: "Field setup outdoors", ratio: "4:3" },
    { path: "/images/projects/star-tracker/result.webp", description: "Captured astrophotography result", ratio: "16:9" },
    { path: "/images/projects/power-market/cover.webp", description: "Energy market dashboard", ratio: "16:9" },
    { path: "/images/projects/job-tracker/cover.webp", description: "Job tracker dashboard", ratio: "16:9" },
    { path: "/images/projects/web-performance/cover.webp", description: "Performance monitoring dashboard", ratio: "16:9" },
    { path: "/images/projects/blockchain/cover.webp", description: "Blockchain application UI", ratio: "16:9" },
  ],
  videos: [
    { path: "/videos/home/engineering-reel.mp4", description: "8–12 second engineering montage reel", poster: "/videos/home/engineering-reel-poster.webp" },
    { path: "/videos/projects/star-tracker/tracking-demo.mp4", description: "Star tracker tracking demonstration", poster: "/videos/projects/star-tracker/tracking-demo-poster.webp" },
  ],
};
