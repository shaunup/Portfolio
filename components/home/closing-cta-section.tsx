import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { profile } from "@/content/profile";

export function ClosingCtaSection() {
  return (
    <section
      className="py-20 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeUp>
          <div className="space-y-6">
            <p className="label-mono text-muted-foreground">
              Let's work together
            </p>
            <h2
              id="cta-heading"
              className="font-display font-semibold text-display-md sm:text-display-lg text-foreground text-balance"
            >
              Have an ambitious system to build?
            </h2>
            <p className="text-lg text-muted-foreground leading-7 max-w-2xl mx-auto">
              I'm always interested in thoughtful engineering problems—especially
              the ones that do not fit neatly into a single discipline.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={profile.resumeUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground/80 font-medium hover:bg-muted/50 hover:text-foreground transition-colors"
              >
                <FileText className="w-4 h-4" />
                View résumé
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
