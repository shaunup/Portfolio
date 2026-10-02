import type { TimelineEntry } from "@/content/types";

export const timeline: TimelineEntry[] = [
  {
    id: "curiosity-start",
    date: "[ADD DATE]",
    title: "First contact with hardware",
    description:
      "[ADD PERSONAL STORY — e.g., the moment you first took apart a device, wrote your first program, or built something that actually worked.]",
    category: "Milestone",
    what_changed:
      "Shifted from consuming technology to wanting to understand how it works underneath.",
    skill_gained: "Curiosity about systems",
    image: {
      src: "/images/journey/early-build.webp",
      alt: "Early project or build photograph",
    },
  },
  {
    id: "first-app",
    date: "[ADD DATE]",
    title: "First independent application",
    description:
      "[ADD PERSONAL STORY — describe the first significant project you built independently, what it did, and what you learned from the process.]",
    category: "Project",
    what_changed:
      "Moved from following tutorials to designing and building something original.",
    skill_gained: "Full-stack application architecture",
    image: {
      src: "/images/journey/first-app.webp",
      alt: "Screenshot or photograph of first independent application",
    },
  },
  {
    id: "university-start",
    date: "[ADD DATE]",
    title: "Started computer science degree",
    description:
      "[ADD INSTITUTION NAME]. Formal study in algorithms, data structures, systems, and theory provided rigorous foundations for patterns I had been building toward intuitively.",
    category: "Education",
    what_changed: "Gained formal foundations in computer science and mathematics.",
    skill_gained: "Algorithmic thinking, formal problem analysis",
    image: {
      src: "/images/journey/embedded-prototype.webp",
      alt: "University project or campus photograph",
    },
  },
  {
    id: "embedded-discovery",
    date: "[ADD DATE]",
    title: "First embedded systems project",
    description:
      "[ADD PERSONAL STORY — describe the first time you worked with microcontrollers, firmware, or physical hardware in a meaningful way.]",
    category: "Project",
    what_changed:
      "Realized that software is more interesting when it controls something physical.",
    skill_gained: "Firmware, motor control, real-time systems",
    relatedProject: "equatorial-star-tracker",
    image: {
      src: "/images/journey/embedded-prototype.webp",
      alt: "Early embedded systems or electronics prototype",
    },
  },
  {
    id: "star-tracker-build",
    date: "[ADD DATE]",
    title: "Built the equatorial star tracker",
    description:
      "Designed and built a motorized equatorial mount for long-exposure astrophotography. The project demanded understanding mechanical tolerances, stepper motor physics, sidereal-rate mathematics, and real-time firmware simultaneously.",
    category: "Project",
    what_changed:
      "Learned that the most interesting engineering problems sit at the intersection of multiple disciplines.",
    skill_gained:
      "System integration, mechanical design, precision motor control",
    relatedProject: "equatorial-star-tracker",
    image: {
      src: "/images/journey/star-tracker-testing.webp",
      alt: "Star tracker during field testing",
    },
  },
  {
    id: "performance-work",
    date: "[ADD DATE]",
    title: "First production performance investigation",
    description:
      "Worked on diagnosing intermittent availability problems in a high-traffic platform. Learned to read infrastructure from traffic patterns down to query-level behavior.",
    category: "Work",
    what_changed:
      "Understood that production systems behave differently from development environments in ways that require measurement, not intuition.",
    skill_gained: "Performance analysis, database optimization, production debugging",
    relatedProject: "high-traffic-optimization",
    image: {
      src: "/images/journey/current-work.webp",
      alt: "Performance monitoring setup or dashboard",
    },
  },
  {
    id: "data-ml-entry",
    date: "[ADD DATE]",
    title: "Energy data platform and ML projects",
    description:
      "Built data pipelines for North American electricity market data and began applying language models to structured extraction problems. Data engineering and machine learning became a coherent third layer alongside hardware and software.",
    category: "Project",
    what_changed:
      "Expanded from software and hardware into data systems and applied ML.",
    skill_gained:
      "Data pipeline design, time-series databases, LLM integration",
    relatedProject: "power-market-intelligence",
    image: {
      src: "/images/journey/current-work.webp",
      alt: "Data dashboard or pipeline diagram",
    },
  },
  {
    id: "current",
    date: "Now",
    title: "Building across systems",
    description:
      "[ADD CURRENT STATUS — describe what you are currently working on or exploring, and where your engineering focus is pointing.]",
    category: "Milestone",
    what_changed:
      "Developing a coherent engineering identity that treats breadth as a strength.",
    skill_gained: "System thinking, cross-domain design",
    image: {
      src: "/images/journey/current-work.webp",
      alt: "Current work or workspace photograph",
    },
  },
];
