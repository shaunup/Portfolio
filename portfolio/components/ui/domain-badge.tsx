import { cn } from "@/lib/utils";
import type { Discipline } from "@/content/types";

const disciplineColors: Record<string, string> = {
  "Embedded Systems": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Robotics": "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Firmware": "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
  "Full Stack": "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
  "Mobile": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  "Machine Learning": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  "Data Engineering": "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  "Energy Analytics": "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  "Blockchain": "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "Infrastructure": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  "Web Performance": "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  "DevOps": "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  "Cybersecurity": "bg-red-500/10 text-red-600 dark:text-red-400",
  "Mechanical Design": "bg-slate-500/10 text-slate-600 dark:text-slate-400",
  "Astronomy": "bg-sky-500/10 text-sky-600 dark:text-sky-400",
};

interface DomainBadgeProps {
  discipline: Discipline | string;
  size?: "sm" | "md";
  className?: string;
}

export function DomainBadge({ discipline, size = "sm", className }: DomainBadgeProps) {
  const colorClass = disciplineColors[discipline] || "bg-muted text-muted-foreground";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        size === "sm" && "text-xs px-2 py-0.5",
        size === "md" && "text-sm px-2.5 py-1",
        colorClass,
        className
      )}
    >
      {discipline}
    </span>
  );
}

export function DomainBadgeList({
  disciplines,
  max,
  size = "sm",
  className,
}: {
  disciplines: string[];
  max?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const visible = max ? disciplines.slice(0, max) : disciplines;
  const remaining = max && disciplines.length > max ? disciplines.length - max : 0;

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {visible.map((d) => (
        <DomainBadge key={d} discipline={d} size={size} />
      ))}
      {remaining > 0 && (
        <span className="text-xs text-muted-foreground self-center">
          +{remaining} more
        </span>
      )}
    </div>
  );
}
