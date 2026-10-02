import { Info, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutVariant = "info" | "warning" | "success" | "idea";

interface CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  info: {
    container: "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-900",
    icon: <Info className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    title: "text-blue-800 dark:text-blue-300",
    text: "text-blue-700 dark:text-blue-400",
  },
  warning: {
    container: "bg-amber-50 border-amber-200 dark:bg-amber-950/30 dark:border-amber-900",
    icon: <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    title: "text-amber-800 dark:text-amber-300",
    text: "text-amber-700 dark:text-amber-400",
  },
  success: {
    container: "bg-emerald-50 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-900",
    icon: <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    title: "text-emerald-800 dark:text-emerald-300",
    text: "text-emerald-700 dark:text-emerald-400",
  },
  idea: {
    container: "bg-violet-50 border-violet-200 dark:bg-violet-950/30 dark:border-violet-900",
    icon: <Lightbulb className="w-4 h-4 text-violet-600 dark:text-violet-400" />,
    title: "text-violet-800 dark:text-violet-300",
    text: "text-violet-700 dark:text-violet-400",
  },
};

export function Callout({ variant = "info", title, children, className }: CalloutProps) {
  const v = variants[variant];

  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border p-4 my-6",
        v.container,
        className
      )}
      role="note"
    >
      <div className="flex-shrink-0 mt-0.5">{v.icon}</div>
      <div className="space-y-1 text-sm">
        {title && (
          <p className={cn("font-semibold", v.title)}>{title}</p>
        )}
        <div className={cn("leading-relaxed", v.text)}>{children}</div>
      </div>
    </div>
  );
}
