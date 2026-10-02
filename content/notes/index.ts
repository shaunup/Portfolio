import type { Article } from "@/content/types";

export const articles: Article[] = [
  {
    slug: "equatorial-star-tracker-build-log",
    title: "Building an Equatorial Star Tracker from First Principles",
    description:
      "A detailed build log covering the mechanical design, motor control firmware, calibration process, and field testing of a DIY equatorial mount.",
    category: "Build Logs",
    draft: true,
    tags: ["embedded systems", "astronomy", "motors", "firmware"],
    relatedProjects: ["equatorial-star-tracker"],
  },
  {
    slug: "hardware-taught-me-software",
    title: "What Hardware Taught Me About Writing Better Software",
    description:
      "Reflections on how working with microcontrollers and real-time systems changed the way I think about software reliability, latency, and resource use.",
    category: "Lessons Learned",
    draft: true,
    tags: ["embedded systems", "software engineering", "reflections"],
    relatedProjects: ["equatorial-star-tracker"],
  },
  {
    slug: "diagnosing-traffic-spikes",
    title: "Diagnosing Traffic Spikes Without Guessing",
    description:
      "How to move from 'the site is slow' to a specific, measurable root cause using traffic analysis, query profiling, and systematic isolation.",
    category: "Infrastructure",
    draft: true,
    tags: ["performance", "debugging", "infrastructure", "databases"],
    relatedProjects: ["high-traffic-optimization"],
  },
  {
    slug: "caches-that-remain-correct",
    title: "Designing Caches That Remain Correct Under Load",
    description:
      "Cache invalidation is where performance optimizations most often fail in production. A look at strategies for keeping cached data accurate while preserving the gains.",
    category: "Software Engineering",
    draft: true,
    tags: ["caching", "redis", "performance", "correctness"],
    relatedProjects: ["high-traffic-optimization"],
  },
  {
    slug: "email-to-structured-data",
    title: "From Email Threads to Structured Job-Application Data",
    description:
      "Designing a privacy-aware pipeline that uses language models to extract structured information from email without sending private correspondence to external APIs.",
    category: "Machine Learning",
    draft: true,
    tags: ["llm", "data engineering", "privacy", "automation"],
    relatedProjects: ["job-application-tracker"],
  },
  {
    slug: "building-across-layers",
    title: "What I Learned Building Across Too Many Layers",
    description:
      "An honest look at the costs and benefits of working across embedded systems, software, data, and infrastructure simultaneously—and why I think it's worth it.",
    category: "Lessons Learned",
    draft: true,
    tags: ["multidisciplinary", "engineering", "reflections", "learning"],
  },
];

export function getPublishedArticles(): Article[] {
  return articles.filter((a) => !a.draft);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
