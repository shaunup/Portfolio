import { GraduationCap, Code2, Globe, Focus, BookOpen } from "lucide-react";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { profile } from "@/content/profile";

const facts = [
  {
    icon: <Code2 className="w-4 h-4" />,
    label: "Projects completed",
    value: "[PROJECT_COUNT]",
    note: "Replace with actual count",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    label: "Domains",
    value: "5",
    note: "Embedded, Full-Stack, ML, Blockchain, Infrastructure",
  },
  {
    icon: <Focus className="w-4 h-4" />,
    label: "Current focus",
    value: "Systems engineering",
    note: "Embedded, data, and applied ML",
  },
  {
    icon: <GraduationCap className="w-4 h-4" />,
    label: "Education",
    value: profile.education.field,
    note: profile.education.institution,
  },
  {
    icon: <BookOpen className="w-4 h-4" />,
    label: "Technologies",
    value: "[TECHNOLOGIES_COUNT]+",
    note: "Across production projects",
  },
];

export function SnapshotSection() {
  return (
    <section className="py-16 lg:py-20" aria-label="Technical snapshot">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <p className="label-mono text-muted-foreground text-center mb-8">
            At a glance
          </p>
        </FadeUp>
        <FadeUp delay={0.05}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="flex flex-col gap-2 p-4 rounded-xl bg-card border border-border"
              >
                <div className="text-muted-foreground/60">{fact.icon}</div>
                <div>
                  <p className="font-display font-bold text-xl text-foreground">
                    {fact.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {fact.label}
                  </p>
                  {fact.note && (
                    <p className="text-xs text-muted-foreground/60 mt-1 leading-relaxed">
                      {fact.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
