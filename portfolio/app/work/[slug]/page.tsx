import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  GitFork,
  ExternalLink,
  Calendar,
  Users,
  Clock,
  ChevronRight,
} from "lucide-react";
import { projects, getProjectBySlug } from "@/content/projects";
import { DomainBadgeList } from "@/components/ui/domain-badge";
import { TechTagList } from "@/components/ui/tech-tag";
import { StatusBadge } from "@/components/ui/status-badge";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { ProjectCard } from "@/components/projects/project-card";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { generatePageMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return generatePageMetadata({
    title: project.seoTitle || project.title,
    description: project.seoDescription || project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const relatedProjects = (project.relatedProjects ?? [])
    .map((s) => getProjectBySlug(s))
    .filter(Boolean) as (typeof projects)[number][];

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <nav
        className="border-b border-border bg-card/50"
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href="/work"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Work
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-foreground/80 truncate max-w-xs">
            {project.title}
          </span>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-12 lg:py-16 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
            {/* Left: metadata */}
            <FadeUp className="lg:col-span-1 space-y-6">
              {/* At a glance panel */}
              <div className="rounded-xl bg-card border border-border p-5 space-y-4">
                <p className="label-mono">At a glance</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wide mb-0.5">Problem</p>
                    <p className="text-foreground/80 leading-relaxed">{project.problem.slice(0, 120)}…</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wide mb-0.5">My role</p>
                    <p className="text-foreground/80">{project.role}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wide mb-0.5">Key lesson</p>
                    <p className="text-foreground/80 leading-relaxed">
                      {project.lessons.slice(0, 100)}…
                    </p>
                  </div>
                </div>
              </div>

              {/* Meta details */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 flex-shrink-0" />
                  <span>{project.year}</span>
                </div>
                {project.duration && !project.duration.startsWith("[") && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.teamSize && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    <span>
                      {typeof project.teamSize === "number"
                        ? project.teamSize === 1
                          ? "Solo project"
                          : `Team of ${project.teamSize}`
                        : project.teamSize}
                    </span>
                  </div>
                )}
              </div>

              <div>
                <p className="label-mono mb-2">Status</p>
                <StatusBadge status={project.status} />
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2">
                {project.repositoryUrl &&
                  !project.repositoryUrl.startsWith("[") && (
                    <a
                      href={project.repositoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <GitFork className="w-4 h-4" />
                      View repository
                    </a>
                  )}
                {project.demoUrl && !project.demoUrl.startsWith("[") && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live demo
                  </a>
                )}
              </div>
            </FadeUp>

            {/* Right: title + cover */}
            <FadeUp delay={0.1} className="lg:col-span-2 space-y-5">
              <div className="space-y-3">
                <DomainBadgeList disciplines={project.disciplines} />
                <h1 className="font-display font-semibold text-display-md text-foreground text-balance">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-7">
                  {project.subtitle}
                </p>
              </div>

              <TechTagList tags={project.technologies} size="md" />

              {/* Cover */}
              <MediaPlaceholder
                filename={
                  project.coverImage?.src ||
                  `/images/projects/${project.slug}/cover.webp`
                }
                description={
                  project.coverImage?.alt || `Cover image for ${project.title}`
                }
                aspectRatio="16/9"
                className="rounded-xl"
              />
            </FadeUp>
          </div>
        </div>
      </header>

      {/* Case study body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 space-y-16">
        {/* Context */}
        <FadeUp>
          <section aria-labelledby="context-heading">
            <h2 id="context-heading" className="font-display font-semibold text-xl text-foreground mb-4">
              Context
            </h2>
            <p className="text-muted-foreground leading-7">{project.problem}</p>
          </section>
        </FadeUp>

        {/* Constraints */}
        {project.constraints && project.constraints.length > 0 && (
          <FadeUp>
            <section aria-labelledby="constraints-heading">
              <h2 id="constraints-heading" className="font-display font-semibold text-xl text-foreground mb-4">
                Constraints
              </h2>
              <ul className="space-y-2">
                {project.constraints.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2"
                      aria-hidden="true"
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </section>
          </FadeUp>
        )}

        {/* Approach */}
        <FadeUp>
          <section aria-labelledby="approach-heading">
            <h2 id="approach-heading" className="font-display font-semibold text-xl text-foreground mb-4">
              Approach
            </h2>
            <p className="text-muted-foreground leading-7">{project.approach}</p>
          </section>
        </FadeUp>

        {/* Architecture */}
        {project.architecture && (
          <FadeUp>
            <section aria-labelledby="architecture-heading">
              <h2 id="architecture-heading" className="font-display font-semibold text-xl text-foreground mb-4">
                System Architecture
              </h2>
              <div
                className="p-5 rounded-xl bg-card border border-border overflow-x-auto"
                role="img"
                aria-label={`Architecture diagram for ${project.title}`}
              >
                <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-muted-foreground min-w-max">
                  {project.architecture.split("→").map((step, i, arr) => (
                    <React.Fragment key={i}>
                      <span className="px-3 py-1.5 rounded-md bg-muted text-foreground/80 text-xs whitespace-nowrap">
                        {step.trim()}
                      </span>
                      {i < arr.length - 1 && (
                        <span
                          className="text-muted-foreground/50"
                          aria-hidden="true"
                        >
                          →
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground/60 font-mono">
                System data flow — read left to right
              </p>
            </section>
          </FadeUp>
        )}

        {/* Engineering decisions */}
        {project.engineeringDecisions &&
          project.engineeringDecisions.length > 0 && (
            <FadeUp>
              <section aria-labelledby="decisions-heading">
                <h2 id="decisions-heading" className="font-display font-semibold text-xl text-foreground mb-6">
                  Engineering Decisions
                </h2>
                <div className="space-y-4">
                  {project.engineeringDecisions.map((decision, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-border overflow-hidden"
                    >
                      <div className="p-4 bg-card border-b border-border">
                        <p className="font-medium text-foreground text-sm">
                          Decision: {decision.decision}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                        <div className="p-4 space-y-3">
                          <div>
                            <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wide mb-1">
                              Alternatives considered
                            </p>
                            <ul className="space-y-0.5">
                              {decision.alternatives.map((alt) => (
                                <li
                                  key={alt}
                                  className="text-sm text-muted-foreground"
                                >
                                  · {alt}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wide mb-1">
                              Chosen
                            </p>
                            <p className="text-sm font-medium text-foreground">
                              {decision.chosen}
                            </p>
                          </div>
                        </div>
                        <div className="p-4 space-y-3">
                          <div>
                            <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wide mb-1">
                              Reason
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {decision.reason}
                            </p>
                          </div>
                          <div>
                            <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wide mb-1">
                              Tradeoff
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {decision.tradeoff}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </FadeUp>
          )}

        {/* Challenges */}
        {project.challenges && (
          <FadeUp>
            <section aria-labelledby="challenges-heading">
              <h2 id="challenges-heading" className="font-display font-semibold text-xl text-foreground mb-4">
                What Did Not Work the First Time
              </h2>
              <p className="text-muted-foreground leading-7">
                {project.challenges}
              </p>
            </section>
          </FadeUp>
        )}

        {/* Results */}
        <FadeUp>
          <section aria-labelledby="results-heading">
            <h2 id="results-heading" className="font-display font-semibold text-xl text-foreground mb-4">
              Results
            </h2>
            <p className="text-muted-foreground leading-7">{project.results}</p>
          </section>
        </FadeUp>

        {/* Lessons */}
        <FadeUp>
          <section aria-labelledby="lessons-heading">
            <h2 id="lessons-heading" className="font-display font-semibold text-xl text-foreground mb-4">
              Reflection
            </h2>
            <p className="text-muted-foreground leading-7">{project.lessons}</p>
          </section>
        </FadeUp>

        {/* Next steps */}
        {project.nextSteps && (
          <FadeUp>
            <section aria-labelledby="next-heading">
              <h2 id="next-heading" className="font-display font-semibold text-xl text-foreground mb-4">
                What Comes Next
              </h2>
              <p className="text-muted-foreground leading-7">
                {project.nextSteps}
              </p>
            </section>
          </FadeUp>
        )}
      </div>

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <div className="border-t border-border py-14 bg-card/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <p className="label-mono text-muted-foreground mb-6">
                Related work
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProjects.slice(0, 3).map((p) => (
                  <ProjectCard key={p.slug} project={p} variant="compact" />
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      )}
    </div>
  );
}
