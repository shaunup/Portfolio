import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, PenLine } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { articles } from "@/content/notes";
import { generatePageMetadata } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export const metadata: Metadata = generatePageMetadata({
  title: "Notes",
  description:
    "Technical writing by Shaun Pimenta: build logs, engineering lessons, embedded systems, software, machine learning, and infrastructure.",
  path: "/notes",
});

const categoryColors: Record<string, string> = {
  "Build Logs": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Embedded Systems": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  "Software Engineering": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  "Machine Learning": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  "Data and Energy": "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  "Infrastructure": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  "Lessons Learned": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

export default function NotesPage() {
  const published = articles.filter((a) => !a.draft);
  const drafts = articles.filter((a) => a.draft);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="border-b border-border bg-card/50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Notes"
            title="How I think about engineering."
            description="Build logs, lessons learned, and thinking-out-loud pieces. Writing that captures decisions, failures, and the reasoning behind them."
            className="max-w-3xl"
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        {/* Published articles */}
        {published.length > 0 ? (
          <section aria-labelledby="published-heading">
            <FadeUp>
              <h2 id="published-heading" className="label-mono text-muted-foreground mb-6">
                Published
              </h2>
            </FadeUp>
            <StaggerContainer className="space-y-4">
              {published.map((article) => (
                <StaggerItem key={article.slug}>
                  <Link
                    href={`/notes/${article.slug}`}
                    className="group block p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2 flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={cn(
                              "text-xs font-medium px-2 py-0.5 rounded-full",
                              categoryColors[article.category] || "bg-muted text-muted-foreground"
                            )}
                          >
                            {article.category}
                          </span>
                          {article.readingTime && (
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="w-3 h-3" />
                              {article.readingTime} min read
                            </span>
                          )}
                        </div>
                        <h3 className="font-display font-semibold text-base text-foreground group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {article.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        ) : null}

        {/* Coming soon */}
        {drafts.length > 0 && (
          <section
            aria-labelledby="coming-soon-heading"
            className={cn(published.length > 0 && "mt-14")}
          >
            <FadeUp>
              <div className="flex items-center gap-3 mb-6">
                <h2 id="coming-soon-heading" className="label-mono text-muted-foreground">
                  Coming soon
                </h2>
                <span className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground font-mono">
                  In progress
                </span>
              </div>
            </FadeUp>
            <StaggerContainer className="space-y-3">
              {drafts.map((article) => (
                <StaggerItem key={article.slug}>
                  <div className="flex items-center gap-4 p-4 rounded-lg border border-border border-dashed opacity-60">
                    <PenLine className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span
                          className={cn(
                            "text-xs font-medium px-1.5 py-0.5 rounded",
                            categoryColors[article.category] || "bg-muted text-muted-foreground"
                          )}
                        >
                          {article.category}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-foreground/60 truncate">
                        {article.title}
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground/50 flex-shrink-0">
                      Draft
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </section>
        )}

        {/* Empty state */}
        {published.length === 0 && drafts.length === 0 && (
          <div className="text-center py-20 space-y-3">
            <p className="text-muted-foreground">No articles yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
