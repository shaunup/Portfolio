import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";
import { profile } from "@/content/profile";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description:
    "Learn about Shaun Pimenta—his engineering journey, motivations, values, and the kinds of problems he wants to work on.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 lg:py-24" aria-label="About introduction">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Portrait */}
            <FadeUp>
              <div className="relative space-y-4">
                <MediaPlaceholder
                  filename="/images/about/shaun-portrait.webp"
                  description="Professional portrait of Shaun Pimenta"
                  aspectRatio="3/4"
                  className="rounded-2xl max-w-sm mx-auto lg:mx-0"
                />
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                    {profile.education.field} · {profile.education.institution}
                  </span>
                </div>
              </div>
            </FadeUp>

            {/* Opening narrative */}
            <FadeUp delay={0.1}>
              <div className="space-y-5 lg:pt-4">
                <p className="label-mono text-primary">About me</p>
                <h1 className="font-display font-semibold text-display-md text-foreground text-balance">
                  I've never been satisfied with understanding only one piece of a system.
                </h1>
                <div className="space-y-4 text-muted-foreground leading-7">
                  <p>
                    My range as an engineer grew naturally from a single underlying habit:
                    wanting to understand how complete products work. A motor controller
                    is more interesting once you see the mechanical system it moves.
                    A web application makes more sense when you've traced a request
                    from the browser through the cache, the database, and back.
                    A machine learning model becomes more useful when you understand
                    the pipeline that feeds it and the interface that delivers its output.
                  </p>
                  <p>
                    That habit pulled me across layers. I started building small programs,
                    then got curious about hardware, then data, then production systems.
                    The domains are different, but the underlying question is always the same:
                    how does this system actually work, and what would make it more reliable,
                    more efficient, or more capable?
                  </p>
                  <p>
                    I'm a computer science student, but I think of myself as an engineer
                    first—someone who builds real things, tests them under real conditions,
                    and iterates on what the evidence shows.
                  </p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Engineering journey narrative */}
      <section
        className="py-16 lg:py-24 bg-card/50 border-y border-border"
        aria-labelledby="journey-narrative-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="The journey so far"
              title="From curiosity to building across systems."
              id="journey-narrative-heading"
              description="Not a résumé. A rough account of how the engineering interests developed and how they connect."
              className="max-w-2xl mb-12"
            />
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                phase: "Curiosity",
                description:
                  "It started with wanting to understand how things worked underneath—why programs behaved the way they did, what was actually happening in the hardware, what the operating system was doing while the application ran. I took things apart, read source code for programs I used, and built small tools to understand the mechanisms that made them work.",
                image: "/images/journey/early-build.webp",
                imageAlt: "Early build or project photograph",
              },
              {
                phase: "Building",
                description:
                  "Moving from following tutorials to building independent projects changed how I learned. The gap between a working example and an original design revealed all the decisions that tutorials silently make for you. I started developing judgment about tradeoffs, not just knowledge of tools.",
                image: "/images/journey/first-app.webp",
                imageAlt: "First independent application screenshot",
              },
              {
                phase: "Connecting disciplines",
                description:
                  "The star tracker project was a turning point. It demanded mechanical design, stepper motor physics, real-time firmware, and calibration mathematics simultaneously. I realized that the most interesting problems sit at the intersection of disciplines—and that understanding one layer deeply made the adjacent layers more legible.",
                image: "/images/journey/star-tracker-testing.webp",
                imageAlt: "Star tracker during field testing",
              },
              {
                phase: "Engineering in practice",
                description:
                  "Working on production systems taught me things that controlled projects never do: how traffic actually arrives, how caches fail under real load, how a database behaves when the query patterns differ from what was assumed at design time. Real systems are harder than designed ones, and harder is more interesting.",
                image: "/images/journey/current-work.webp",
                imageAlt: "Production engineering work or dashboard",
              },
            ].map((item, i) => (
              <FadeUp key={item.phase} delay={i * 0.08}>
                <div className="space-y-4">
                  <MediaPlaceholder
                    filename={item.image}
                    description={item.imageAlt}
                    aspectRatio="16/9"
                    className="rounded-xl"
                  />
                  <div>
                    <p className="label-mono text-primary mb-2">
                      Phase · {item.phase}
                    </p>
                    <p className="text-muted-foreground leading-7 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2} className="mt-10">
            <Link
              href="/journey"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              See the full timeline
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-16 lg:py-24"
        aria-labelledby="values-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <SectionHeader
              eyebrow="Engineering values"
              title="What guides how I work."
              id="values-heading"
              className="max-w-xl mb-10"
            />
          </FadeUp>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {profile.values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-6 rounded-xl bg-card border border-border space-y-2">
                  <h3 className="font-display font-semibold text-base text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Outside engineering */}
      <section
        className="py-16 lg:py-24 bg-card/50 border-y border-border"
        aria-labelledby="outside-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="space-y-4">
                <p className="label-mono text-primary">Outside engineering</p>
                <h2
                  id="outside-heading"
                  className="font-display font-semibold text-display-sm text-foreground"
                >
                  Engineering is a major part of my life, but it is not the whole picture.
                </h2>
                <div className="space-y-3 text-muted-foreground leading-7 text-sm">
                  <p>
                    [ADD PERSONAL INTERESTS — describe interests, activities, or communities
                    outside engineering. Keep it specific and genuine.]
                  </p>
                  <p>
                    I'm also drawn to astronomy—not only as the motivation for the star
                    tracker project, but as a reminder that some systems operate on scales
                    that make every software optimization feel appropriately humble.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { label: "Current curiosity", value: "[ADD CURRENT CURIOSITY]" },
                    { label: "Favorite place", value: "[ADD FAVORITE PLACE]" },
                    { label: "Reading", value: "[ADD BOOK OR ARTICLE]" },
                    { label: "Community", value: "[ADD COMMUNITY INVOLVEMENT]" },
                  ].map((item) => (
                    <div key={item.label} className="space-y-0.5">
                      <p className="font-mono text-xs text-muted-foreground/60 uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="text-sm text-foreground/80">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <MediaPlaceholder
                filename="/images/about/shaun-building.webp"
                description="Shaun building or prototyping — personal photograph"
                aspectRatio="4/3"
                className="rounded-2xl"
              />
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Current direction */}
      <section
        className="py-16 lg:py-24"
        aria-labelledby="direction-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            <FadeUp>
              <SectionHeader
                eyebrow="Where I'm heading"
                title="The kinds of systems I want to help build."
                id="direction-heading"
              />
              <p className="mt-4 text-sm text-muted-foreground leading-7">
                The thread across these areas is the same: technically demanding,
                interdisciplinary systems with tangible, measurable impact.
              </p>
            </FadeUp>
            <FadeUp delay={0.1} className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    area: "Software Engineering",
                    desc: "Systems that are reliable, maintainable, and fast under real conditions.",
                  },
                  {
                    area: "Embedded Systems",
                    desc: "Firmware, motor control, sensor integration, and real-time constraints.",
                  },
                  {
                    area: "Robotics",
                    desc: "Mechanical and control systems that navigate the physical world.",
                  },
                  {
                    area: "Aerospace & Space Systems",
                    desc: "Guidance, control, and onboard computation for demanding environments.",
                  },
                  {
                    area: "Data & Energy Analytics",
                    desc: "Pipelines and models that extract signal from large, messy datasets.",
                  },
                  {
                    area: "Applied Machine Learning",
                    desc: "Models that become part of dependable, production-ready systems.",
                  },
                ].map((item) => (
                  <div
                    key={item.area}
                    className="p-4 rounded-lg bg-card border border-border space-y-1"
                  >
                    <h3 className="font-display font-semibold text-sm text-foreground">
                      {item.area}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Start a conversation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/work"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-sm font-medium text-foreground/80 hover:bg-muted/50 hover:text-foreground transition-colors"
                >
                  View my work
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  );
}
