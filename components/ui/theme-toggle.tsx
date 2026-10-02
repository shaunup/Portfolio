"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50",
        "transition-colors",
        className
      )}
      aria-label={mounted ? label : "Toggle color theme"}
      title={mounted ? label : "Toggle color theme"}
    >
      {mounted ? (
        isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />
      ) : (
        <span className="block w-4 h-4" aria-hidden="true" />
      )}
    </button>
  );
}
