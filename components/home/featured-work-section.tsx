import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/projects/project-card";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { getFeaturedProjects } from "@/content/projects";

export function FeaturedWorkSection() {
  const featured = getFeaturedProjects();
  const [primary, secondary1, secondary2, ...rest] = featured;

  return (
    <section
      className="py-20 lg:py-28"
      aria-labelledby="featured-work-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex items-end justify-between gap-4 mb-10">
            <SectionHeader
              eyebrow="Selected work"
              title="Systems I've built and learned from."
              id="featured-work-heading"
              description="A cross-section of projects spanning hardware, software, data, and infrastructure."
            />
            <Link
              href="/work"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors flex-shrink-0"
            >
              All projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </FadeUp>

        {/* Editorial layout — primary large + grid */}
        <div className="space-y-6">
          {/* Primary featured project */}
          {primary && (
            <FadeUp delay={0.05}>
              <ProjectCard
                project={primary}
                variant="featured"
                className="sm:col-span-2"
              />
            </FadeUp>
          )}

          {/* Secondary row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondary1 && (
              <FadeUp delay={0.1}>
                <ProjectCard project={secondary1} />
              </FadeUp>
            )}
            {secondary2 && (
              <FadeUp delay={0.15}>
                <ProjectCard project={secondary2} />
              </FadeUp>
            )}
            {rest[0] && (
              <FadeUp delay={0.2}>
                <ProjectCard project={rest[0]} />
              </FadeUp>
            )}
          </div>

          {/* Remaining if any */}
          {rest.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rest.slice(1).map((project, i) => (
                <FadeUp key={project.slug} delay={0.1 * (i + 1)}>
                  <ProjectCard project={project} />
                </FadeUp>
              ))}
            </div>
          )}
        </div>

        <FadeUp delay={0.3} className="mt-10 text-center sm:hidden">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            View all projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
