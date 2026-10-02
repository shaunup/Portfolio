import { cn } from "@/lib/utils";

interface TechTagProps {
  label: string;
  size?: "sm" | "md";
  variant?: "default" | "primary" | "muted";
  className?: string;
}

export function TechTag({
  label,
  size = "sm",
  variant = "default",
  className,
}: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono rounded",
        size === "sm" && "text-xs px-2 py-0.5",
        size === "md" && "text-sm px-2.5 py-1",
        variant === "default" && "bg-muted text-muted-foreground",
        variant === "primary" && "bg-primary/10 text-primary",
        variant === "muted" && "bg-secondary text-secondary-foreground",
        className
      )}
    >
      {label}
    </span>
  );
}

export function TechTagList({
  tags,
  max,
  size = "sm",
  className,
}: {
  tags: string[];
  max?: number;
  size?: "sm" | "md";
  className?: string;
}) {
  const visible = max ? tags.slice(0, max) : tags;
  const remaining = max && tags.length > max ? tags.length - max : 0;

  return (
    <div className={cn("flex flex-wrap gap-1.5", className)}>
      {visible.map((tag) => (
        <TechTag key={tag} label={tag} size={size} />
      ))}
      {remaining > 0 && (
        <span className="text-xs font-mono text-muted-foreground/70 self-center">
          +{remaining}
        </span>
      )}
    </div>
  );
}
