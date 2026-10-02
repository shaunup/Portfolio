import Link from "next/link";
import Image from "next/image";
import { ArrowRight, GitFork, ExternalLink } from "lucide-react";
import { type Project } from "@/content/types";
import { TechTagList } from "@/components/ui/tech-tag";
import { DomainBadgeList } from "@/components/ui/domain-badge";
import { StatusBadge } from "@/components/ui/status-badge";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "featured" | "compact";
  className?: string;
}

export function ProjectCard({
  project,
  variant = "default",
  className,
}: ProjectCardProps) {
  const href = `/work/${project.slug}`;

  return (
    <article
      className={cn(
        "group bg-card border border-border rounded-xl overflow-hidden",
        "hover:border-primary/30 hover:shadow-md transition-all duration-300",
        className
      )}
    >
      {/* Cover image */}
      <Link href={href} className="block" tabIndex={-1} aria-hidden="true">
        <div
          className={cn(
            "relative overflow-hidden bg-muted",
            variant === "compact" ? "aspect-[16/7]" : "aspect-[16/9]"
          )}
        >
          {project.coverImage ? (
            <Image
              src={project.coverImage.src}
              alt={project.coverImage.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <MediaPlaceholder
              filename={`/images/projects/${project.slug}/cover.webp`}
              description={`Cover image for ${project.title}`}
              aspectRatio="16/9"
              className="rounded-none border-0 h-full"
            />
          )}
          <div className="absolute top-3 left-3">
            <StatusBadge status={project.status} />
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 flex-1 min-w-0">
            <p className="font-mono text-xs text-muted-foreground/70">
              {project.year}
            </p>
            <h3 className="font-display font-semibold text-base text-foreground leading-snug">
              <Link
                href={href}
                className="hover:text-primary transition-colors"
              >
                {project.title}
              </Link>
            </h3>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.summary}
        </p>

        <DomainBadgeList disciplines={project.disciplines} max={3} />
        <TechTagList tags={project.technologies} max={4} />

        {/* Actions */}
        <div className="flex items-center justify-between pt-1">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            Case study
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <div className="flex items-center gap-2">
            {project.repositoryUrl &&
              !project.repositoryUrl.startsWith("[") && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <GitFork className="w-4 h-4" />
                </a>
              )}
            {project.demoUrl && !project.demoUrl.startsWith("[") && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
