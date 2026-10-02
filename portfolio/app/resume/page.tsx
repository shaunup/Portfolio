import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { TechTag } from "@/components/ui/tech-tag";
import { profile } from "@/content/profile";
import { getFeaturedProjects } from "@/content/projects";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Résumé",
  description:
    "Professional résumé of Shaun Pimenta, multidisciplinary engineer with experience in embedded systems, full-stack development, machine learning, data engineering, blockchain, and infrastructure.",
  path: "/resume",
});

export default function ResumePage() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);

  return (
    <div className="pt-20">
      {/* Header */}
      <div className="border-b border-border bg-card/50 py-10 lg:py-14 print:py-4 print:border-none">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display font-bold text-2xl text-foreground">
                Shaun Pimenta
              </h1>
              <p className="text-muted-foreground mt-1">{profile.title}</p>
              <p className="font-mono text-xs text-muted-foreground/70 mt-1">
                {profile.email} · {profile.github} · {profile.linkedin}
              </p>
            </div>
            <a
              href={profile.resumeUrl}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors print:hidden"
              aria-label="Download résumé PDF"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14 space-y-12">
        {/* Summary */}
        <FadeUp>
          <section aria-labelledby="summary-heading">
            <h2 id="summary-heading" className="label-mono mb-3">Summary</h2>
            <p className="text-muted-foreground leading-7 max-w-2xl">
              Engineering student and builder with experience spanning embedded systems,
              full-stack web and mobile development, machine learning, data engineering,
              blockchain application development, and cloud infrastructure. I'm most
              effective on problems where understanding the whole system matters—where
              firmware, software, data, and infrastructure interact in ways that require
              context across layers.
            </p>
          </section>
        </FadeUp>

        {/* Education */}
        <FadeUp delay={0.05}>
          <section aria-labelledby="education-heading">
            <h2 id="education-heading" className="label-mono mb-4">Education</h2>
            <div className="rounded-xl border border-border p-5 space-y-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold text-base text-foreground">
                    {profile.education.degree} in {profile.education.field}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {profile.education.institution}
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground flex-shrink-0">
                  Expected {profile.education.graduationYear}
                </span>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Experience */}
        <FadeUp delay={0.1}>
          <section aria-labelledby="experience-heading">
            <h2 id="experience-heading" className="label-mono mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="rounded-xl border border-border p-5 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-semibold text-base text-foreground">
                      [ADD POSITION TITLE]
                    </h3>
                    <p className="text-sm text-muted-foreground">[ADD ORGANIZATION] · [ADD EMPLOYMENT TYPE]</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground flex-shrink-0">
                    [ADD DATE RANGE]
                  </span>
                </div>
                <ul className="space-y-1">
                  {[
                    "[ADD RESPONSIBILITY OR ACHIEVEMENT]",
                    "[ADD RESPONSIBILITY OR ACHIEVEMENT]",
                    "[ADD RESPONSIBILITY OR ACHIEVEMENT]",
                  ].map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-muted-foreground/50 flex-shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </FadeUp>

        {/* Selected projects */}
        <FadeUp delay={0.15}>
          <section aria-labelledby="projects-heading">
            <h2 id="projects-heading" className="label-mono mb-4">Selected Projects</h2>
            <div className="space-y-4">
              {featuredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="rounded-xl border border-border p-5 space-y-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display font-semibold text-sm text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {project.disciplines.slice(0, 3).join(" · ")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="font-mono text-xs text-muted-foreground">
                        {project.year}
                      </span>
                      <Link
                        href={`/work/${project.slug}`}
                        className="text-xs text-primary hover:text-primary/80 transition-colors"
                        aria-label={`View case study for ${project.title}`}
                      >
                        Case study →
                      </Link>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <TechTag key={tech} label={tech} size="sm" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
            >
              View all projects →
            </Link>
          </section>
        </FadeUp>

        {/* Technical skills */}
        <FadeUp delay={0.2}>
          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="label-mono mb-4">Technical Skills</h2>
            <div className="space-y-4">
              {[
                { label: "Languages", items: profile.skills.languages },
                { label: "Application Development", items: profile.skills.applicationDevelopment },
                { label: "Embedded & Hardware", items: profile.skills.embeddedHardware },
                { label: "Data & Machine Learning", items: profile.skills.dataMl },
                { label: "Cloud & Infrastructure", items: profile.skills.cloudInfrastructure },
                { label: "Engineering Tools", items: profile.skills.engineeringTools },
              ].map((group) => (
                <div key={group.label} className="grid grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-2">
                  <div className="col-span-1">
                    <p className="text-xs font-medium text-foreground/60">{group.label}</p>
                  </div>
                  <div className="col-span-2 sm:col-span-3 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <TechTag key={item} label={item} size="sm" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Certifications / Awards placeholder */}
        <FadeUp delay={0.25}>
          <section aria-labelledby="certs-heading">
            <h2 id="certs-heading" className="label-mono mb-4">Certifications & Awards</h2>
            <p className="text-sm text-muted-foreground italic">
              [ADD CERTIFICATIONS, AWARDS, OR HONORS — or remove this section if not applicable]
            </p>
          </section>
        </FadeUp>

        {/* Community */}
        <FadeUp delay={0.3}>
          <section aria-labelledby="community-heading">
            <h2 id="community-heading" className="label-mono mb-4">Leadership & Community</h2>
            <p className="text-sm text-muted-foreground italic">
              [ADD COMMUNITY INVOLVEMENT, LEADERSHIP ROLES, CLUBS, OR VOLUNTEERING]
            </p>
          </section>
        </FadeUp>
      </div>
    </div>
  );
}
