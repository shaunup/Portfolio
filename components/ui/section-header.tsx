import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "space-y-3",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="label-mono text-primary">{eyebrow}</p>
      )}
      <h2
        id={id}
        className="font-display text-display-sm font-semibold text-foreground text-balance"
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-muted-foreground leading-7",
            align === "center" ? "max-w-2xl mx-auto" : "max-w-2xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
