import Link from "next/link";
import { Home, FolderOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-md w-full text-center space-y-8">
        {/* Technical illustration */}
        <div className="relative mx-auto w-32 h-32">
          <div className="absolute inset-0 rounded-2xl bg-muted/40 border border-dashed border-border flex items-center justify-center">
            <div className="space-y-1 text-center">
              <p className="font-mono text-3xl font-bold text-muted-foreground/40">
                404
              </p>
              <p className="font-mono text-xs text-muted-foreground/30">
                NOT_FOUND
              </p>
            </div>
          </div>
          {/* Coordinate markers */}
          <div
            className="absolute -top-2 -left-2 w-2 h-2 border-t border-l border-muted-foreground/30"
            aria-hidden="true"
          />
          <div
            className="absolute -top-2 -right-2 w-2 h-2 border-t border-r border-muted-foreground/30"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-2 -left-2 w-2 h-2 border-b border-l border-muted-foreground/30"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-2 -right-2 w-2 h-2 border-b border-r border-muted-foreground/30"
            aria-hidden="true"
          />
        </div>

        <div className="space-y-3">
          <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-widest">
            Status · 404
          </p>
          <h1 className="font-display font-semibold text-2xl text-foreground text-balance">
            Looks like this path never made it into production.
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The page you're looking for doesndoesn'tapos;t exist, was moved, or the URL
            has a typo. Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Return home
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground/80 hover:bg-muted/50 hover:text-foreground transition-colors"
          >
            <FolderOpen className="w-4 h-4" />
            View projects
          </Link>
        </div>
      </div>
    </div>
  );
}
