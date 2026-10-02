import { z } from "zod";

// ── Project Schema ────────────────────────────────────────────────────────────

export const DisciplineSchema = z.enum([
  "Embedded Systems",
  "Robotics",
  "Full Stack",
  "Mobile",
  "Machine Learning",
  "Data Engineering",
  "Blockchain",
  "Infrastructure",
  "Web Performance",
  "Mechanical Design",
  "Firmware",
  "DevOps",
  "Cybersecurity",
  "Astronomy",
  "Energy Analytics",
]);

export type Discipline = z.infer<typeof DisciplineSchema>;

export const ProjectStatusSchema = z.enum([
  "completed",
  "active",
  "prototype",
  "archived",
]);

export type ProjectStatus = z.infer<typeof ProjectStatusSchema>;

export const ProjectCategorySchema = z.enum([
  "embedded",
  "robotics",
  "full-stack",
  "mobile",
  "machine-learning",
  "data",
  "blockchain",
  "infrastructure",
  "experiment",
]);

export type ProjectCategory = z.infer<typeof ProjectCategorySchema>;

export const MediaSchema = z.object({
  src: z.string(),
  alt: z.string(),
  width: z.number().optional(),
  height: z.number().optional(),
  caption: z.string().optional(),
});

export type Media = z.infer<typeof MediaSchema>;

export const VideoSchema = z.object({
  src: z.string(),
  poster: z.string().optional(),
  caption: z.string().optional(),
});

export type Video = z.infer<typeof VideoSchema>;

export const EngineeringDecisionSchema = z.object({
  decision: z.string(),
  alternatives: z.array(z.string()),
  chosen: z.string(),
  reason: z.string(),
  tradeoff: z.string(),
});

export type EngineeringDecision = z.infer<typeof EngineeringDecisionSchema>;

export const ProjectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  subtitle: z.string(),
  summary: z.string(),
  year: z.number(),
  status: ProjectStatusSchema,
  featured: z.boolean().default(false),
  featuredOrder: z.number().optional(),
  disciplines: z.array(DisciplineSchema),
  categories: z.array(ProjectCategorySchema),
  technologies: z.array(z.string()),
  role: z.string(),
  teamSize: z.union([z.number(), z.string()]).optional(),
  duration: z.string().optional(),
  coverImage: MediaSchema.optional(),
  coverVideo: VideoSchema.optional(),
  gallery: z.array(MediaSchema).optional(),
  problem: z.string(),
  constraints: z.array(z.string()).optional(),
  approach: z.string(),
  architecture: z.string().optional(),
  implementation: z.string().optional(),
  engineeringDecisions: z.array(EngineeringDecisionSchema).optional(),
  challenges: z.string().optional(),
  tradeoffs: z.string().optional(),
  results: z.string(),
  lessons: z.string(),
  nextSteps: z.string().optional(),
  repositoryUrl: z.string().url().optional(),
  demoUrl: z.string().url().optional(),
  relatedProjects: z.array(z.string()).optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

// ── Article / Note Schema ─────────────────────────────────────────────────────

export const ArticleCategorySchema = z.enum([
  "Build Logs",
  "Embedded Systems",
  "Software Engineering",
  "Machine Learning",
  "Data and Energy",
  "Infrastructure",
  "Lessons Learned",
]);

export type ArticleCategory = z.infer<typeof ArticleCategorySchema>;

export const ArticleSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  category: ArticleCategorySchema,
  publishedAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
  draft: z.boolean().default(true),
  readingTime: z.number().optional(),
  tags: z.array(z.string()).optional(),
  relatedProjects: z.array(z.string()).optional(),
  coverImage: MediaSchema.optional(),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
});

export type Article = z.infer<typeof ArticleSchema>;

// ── Timeline Entry Schema ─────────────────────────────────────────────────────

export const TimelineCategorySchema = z.enum([
  "Education",
  "Project",
  "Work",
  "Community",
  "Milestone",
]);

export type TimelineCategory = z.infer<typeof TimelineCategorySchema>;

export const TimelineEntrySchema = z.object({
  id: z.string(),
  date: z.string(),
  title: z.string(),
  description: z.string(),
  category: TimelineCategorySchema,
  what_changed: z.string().optional(),
  skill_gained: z.string().optional(),
  relatedProject: z.string().optional(),
  image: MediaSchema.optional(),
});

export type TimelineEntry = z.infer<typeof TimelineEntrySchema>;

// ── Domain Schema ─────────────────────────────────────────────────────────────

export const EngineeringDomainSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  filterCategory: z.string(),
  icon: z.string(),
  color: z.string(),
});

export type EngineeringDomain = z.infer<typeof EngineeringDomainSchema>;
