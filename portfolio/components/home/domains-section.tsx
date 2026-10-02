"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Cpu,
  Layers,
  BrainCircuit,
  Network,
  Server,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  BrainCircuit: <BrainCircuit className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Server: <Server className="w-5 h-5" />,
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-900/50",
  indigo: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-900/50",
  violet: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-200/50 dark:border-violet-900/50",
  amber: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-900/50",
  teal: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-200/50 dark:border-teal-900/50",
};

export function DomainsSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-card/50 border-y border-border"
      aria-labelledby="domains-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Header */}
          <div className="lg:col-span-1">
            <SectionHeader
              eyebrow="Engineering domains"
              title="Five layers of the same kind of problem."
              id="domains-heading"
            />
            <p className="mt-4 text-sm text-muted-foreground leading-7">
              These are not separate interests. They are different layers of the
              same kind of problem: how to design reliable systems that sense,
              decide, communicate, and create value.
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              View all projects
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Domain cards */}
          <div className="lg:col-span-2">
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {profile.domains.map((domain) => (
                <StaggerItem key={domain.id}>
                  <Link
                    href={`/work?category=${domain.filterCategory}`}
                    className={cn(
                      "group block p-5 rounded-xl border bg-background",
                      "hover:shadow-sm transition-all duration-200",
                      "border-border hover:border-primary/30"
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border",
                          colorMap[domain.color] || colorMap.blue
                        )}
                      >
                        {iconMap[domain.icon]}
                      </div>
                      <div className="space-y-1.5 min-w-0">
                        <h3 className="font-display font-semibold text-sm text-foreground leading-snug group-hover:text-primary transition-colors">
                          {domain.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {domain.description}
                        </p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {domain.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-xs text-muted-foreground/70"
                            >
                              {tech}
                            </span>
                          ))}
                          {domain.technologies.length > 4 && (
                            <span className="font-mono text-xs text-muted-foreground/50">
                              +{domain.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
