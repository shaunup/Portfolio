"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Circle } from "lucide-react";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { profile } from "@/content/profile";
import { cn } from "@/lib/utils";

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-grid opacity-50" aria-hidden="true" />

      {/* Gradient veil */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — text */}
          <div className="space-y-6">
            {/* Status */}
            <motion.div
              {...FADE_UP}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/20 text-xs text-primary font-medium">
                <Circle className="w-2 h-2 fill-primary" aria-hidden="true" />
                {profile.status}
              </div>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              className="label-mono text-muted-foreground"
              {...FADE_UP}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {profile.tagline}
            </motion.p>

            {/* Headline */}
            <motion.h1
              className="font-display font-semibold text-display-lg sm:text-display-xl text-foreground leading-[1.1] tracking-tight text-balance"
              {...FADE_UP}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              I build systems that connect{" "}
              <span className="text-primary">software</span>,{" "}
              <span className="text-accent">intelligence</span>, and the physical world.
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground leading-7 max-w-xl"
              {...FADE_UP}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {profile.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              {...FADE_UP}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/work"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "px-5 py-2.5 rounded-lg",
                  "bg-primary text-primary-foreground font-medium",
                  "hover:bg-primary/90 transition-colors",
                  "text-sm"
                )}
              >
                Explore my work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className={cn(
                  "inline-flex items-center justify-center gap-2",
                  "px-5 py-2.5 rounded-lg",
                  "border border-border text-foreground/80 font-medium",
                  "hover:bg-muted/50 hover:text-foreground transition-colors",
                  "text-sm"
                )}
              >
                Read my story
              </Link>
            </motion.div>

            <motion.div
              {...FADE_UP}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download résumé
              </a>
            </motion.div>
          </div>

          {/* Right column — visual composition */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Engineering workspace visual"
          >
            <div className="relative grid grid-cols-2 gap-3">
              {/* Large: star tracker */}
              <div className="col-span-2">
                <MediaPlaceholder
                  filename="/images/home/hero-star-tracker.webp"
                  description="Star tracker assembled and mounted outdoors at night"
                  aspectRatio="16/7"
                  className="rounded-xl"
                />
              </div>

              {/* Small left: circuit */}
              <MediaPlaceholder
                filename="/images/home/hero-circuit.webp"
                description="Electronics or embedded hardware close-up"
                aspectRatio="4/3"
                className="rounded-xl"
              />

              {/* Small right: dashboard */}
              <MediaPlaceholder
                filename="/images/home/hero-dashboard.webp"
                description="Application dashboard screenshot"
                aspectRatio="4/3"
                className="rounded-xl"
              />
            </div>

            {/* Technical label overlay */}
            <div
              className="absolute -bottom-4 -right-4 px-3 py-1.5 bg-card border border-border rounded-lg shadow-sm"
              aria-hidden="true"
            >
              <p className="font-mono text-xs text-muted-foreground">
                System{" "}
                <span className="text-primary font-semibold">01</span> · Active
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          aria-hidden="true"
        >
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-transparent to-muted-foreground/40"
            animate={{ scaleY: [0, 1] }}
            transition={{ delay: 1.2, duration: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
