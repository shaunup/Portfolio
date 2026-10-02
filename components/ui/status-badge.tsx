import { cn } from "@/lib/utils";
import type { ProjectStatus } from "@/content/types";

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string }
> = {
  completed: {
    label: "Completed",
    className: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  },
  active: {
    label: "Active",
    className: "bg-blue-500/10 text-blue-700 dark:text-blue-400",
  },
  prototype: {
    label: "Prototype",
    className: "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  },
  archived: {
    label: "Archived",
    className: "bg-muted text-muted-foreground",
  },
};

export function StatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full",
        config.className,
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />
      {config.label}
    </span>
  );
}
