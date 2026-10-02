import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { timeline } from "@/content/timeline";
import { generatePageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Journey",
  description:
    "A timeline of Shaun Pimenta's engineering journey—from early curiosity through building, connecting disciplines, and engineering in practice.",
  path: "/journey",
});

const categoryColors: Record<string, string> = {
  Education: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-900/50",
  Project: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200/50 dark:border-violet-900/50",
  Work: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-900/50",
  Community: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-900/50",
  Milestone: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-200/50 dark:border-orange-900/50",
};

export default function JourneyPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="border-b border-border bg-card/50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Journey"
            title="From first principles to working systems."
            description="Not a résumé. A rough account of how the engineering interests, skills, and perspective developed—and how they connect."
            className="max-w-3xl"
          />
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {timeline.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <FadeUp key={entry.id} delay={i * 0.05}>
                  <div
                    className={cn(
                      "relative grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10",
                      isLeft ? "" : "sm:[direction:rtl]"
                    )}
                  >
                    {/* Dot */}
                    <div
                      className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background ring-2 ring-primary/20 z-10"
                      aria-hidden="true"
                    />

                    {/* Card */}
                    <div
                      className={cn(
                        "sm:[direction:ltr] ml-10 sm:ml-0 rounded-xl bg-card border border-border p-5 space-y-3",
                        isLeft ? "sm:pr-8" : "sm:pl-8"
                      )}
                    >
                      <div className="flex items-center gap-2 flex-wrap">
                        <span
                          className={cn(
                            "inline-flex items-center text-xs font-medium px-2 py-0.5 rounded-full border",
                            categoryColors[entry.category] || "bg-muted text-muted-foreground border-border"
                          )}
                        >
                          {entry.category}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground">
                          {entry.date}
                        </span>
                      </div>

                      <h3 className="font-display font-semibold text-base text-foreground">
                        {entry.title}
                      </h3>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {entry.description}
                      </p>

                      {(entry.what_changed || entry.skill_gained) && (
                        <div className="pt-1 space-y-1.5">
                          {entry.what_changed && (
                            <div className="text-xs">
                              <span className="font-mono text-muted-foreground/60 uppercase tracking-wide">
                                What changed:{" "}
                              </span>
                              <span className="text-muted-foreground">
                                {entry.what_changed}
                              </span>
                            </div>
                          )}
                          {entry.skill_gained && (
                            <div className="text-xs">
                              <span className="font-mono text-muted-foreground/60 uppercase tracking-wide">
                                Gained:{" "}
                              </span>
                              <span className="text-muted-foreground">
                                {entry.skill_gained}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {entry.relatedProject && (
                        <Link
                          href={`/work/${entry.relatedProject}`}
                          className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors"
                        >
                          Related project
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>

                    {/* Image (desktop alternate column) */}
                    {entry.image && (
                      <div
                        className={cn(
                          "sm:[direction:ltr] hidden sm:block",
                          isLeft ? "sm:pl-8" : "sm:pr-8"
                        )}
                      >
                        <MediaPlaceholder
                          filename={entry.image.src}
                          description={entry.image.alt}
                          aspectRatio="4/3"
                          className="rounded-xl"
                        />
                      </div>
                    )}
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        {/* Next chapter */}
        <FadeUp delay={0.2}>
          <div className="mt-20 pt-10 border-t border-border space-y-4">
            <p className="label-mono text-primary">The next chapter</p>
            <h2 className="font-display font-semibold text-display-sm text-foreground max-w-xl">
              Building systems where every layer matters.
            </h2>
            <p className="text-muted-foreground leading-7 max-w-2xl text-sm">
              [ADD CURRENT STATUS — describe the kinds of problems, roles, and environments
              you want to work in next. What would the ideal next chapter look like?]
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Let's talk
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground/80 hover:bg-muted/50 hover:text-foreground transition-colors"
              >
                View my work
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
