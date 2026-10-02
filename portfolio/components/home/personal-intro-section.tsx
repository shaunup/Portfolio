import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { profile } from "@/content/profile";

export function PersonalIntroSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-card/50 border-y border-border"
      aria-labelledby="personal-intro-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <FadeUp>
            <div className="relative">
              <MediaPlaceholder
                filename="/images/about/shaun-workspace.webp"
                description="Shaun working at a desk with electronics and prototyping equipment"
                aspectRatio="4/3"
                className="rounded-2xl"
              />
              {/* Coordinate label */}
              <div
                className="absolute -top-3 -left-3 px-2 py-1 bg-background border border-border rounded font-mono text-xs text-muted-foreground/70"
                aria-hidden="true"
              >
                48.2°N 16.4°E
              </div>
            </div>
          </FadeUp>

          {/* Text */}
          <FadeUp delay={0.1}>
            <div className="space-y-5">
              <p className="label-mono text-primary">About Shaun</p>
              <h2
                id="personal-intro-heading"
                className="font-display font-semibold text-display-sm text-foreground text-balance"
              >
                I've never been satisfied with understanding only one piece of a system.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-7">
                <p>{profile.philosophy}</p>
                <p>
                  My work spans embedded hardware and firmware through to web
                  applications, machine learning pipelines, and production
                  infrastructure. Not because I set out to cover every layer, but
                  because each layer kept revealing something important about the
                  one next to it.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Read the full story
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
