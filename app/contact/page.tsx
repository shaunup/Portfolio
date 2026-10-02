import type { Metadata } from "next";
import { Mail, GitFork, FileText, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { FadeUp } from "@/components/ui/motion-wrapper";
import { ContactForm } from "@/components/ui/contact-form";
import { profile } from "@/content/profile";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact",
  description:
    "Get in touch with Shaun Pimenta—for engineering roles, collaboration, or thoughtful project conversations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <div className="border-b border-border bg-card/50 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contact"
            title="Let's build something meaningful."
            description="If you're working on a challenging engineering problem, hiring for a multidisciplinary role, or simply want to talk about a project, I'd be glad to hear from you."
            className="max-w-3xl"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Contact info */}
          <FadeUp className="space-y-8">
            <div className="space-y-4">
              <p className="label-mono text-muted-foreground">Direct contact</p>
              <div className="space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-xs mb-0.5">Email</p>
                    <span>{profile.email}</span>
                  </div>
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors flex-shrink-0">
                    <GitFork className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-xs mb-0.5">GitHub</p>
                    <span>github.com/[ADD GITHUB USERNAME]</span>
                  </div>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors flex-shrink-0">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-xs mb-0.5">LinkedIn</p>
                    <span>linkedin.com/in/[ADD LINKEDIN]</span>
                  </div>
                </a>
                <a
                  href={profile.resumeUrl}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors flex-shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-xs mb-0.5">Résumé</p>
                    <span>Download PDF</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-muted/50 border border-border space-y-2">
              <p className="font-mono text-xs text-muted-foreground/70 uppercase tracking-wide">
                Response time
              </p>
              <p className="text-sm text-muted-foreground">
                I typically respond within a few days. For urgent matters, email directly.
              </p>
            </div>
          </FadeUp>

          {/* Contact form */}
          <FadeUp delay={0.1} className="lg:col-span-2">
            <ContactForm />
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
