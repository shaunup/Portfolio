import Link from "next/link";
import { GitFork, Mail, FileText, ExternalLink } from "lucide-react";
import { profile } from "@/content/profile";
import { navigationItems } from "@/content/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-card/50"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm">
                SP
              </span>
              <span className="font-display font-semibold text-sm">
                Shaun Pimenta
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Multidisciplinary engineer building across embedded systems,
              software, data, and infrastructure.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub profile"
              >
                <GitFork className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn profile"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="label-mono mb-4">Navigation</p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact / Resources */}
          <div>
            <p className="label-mono mb-4">Resources</p>
            <ul className="space-y-2">
              <li>
                <Link
                  href={profile.resumeUrl}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  Résumé PDF
                </Link>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Shaun Pimenta. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Designed and built by Shaun Pimenta · Built with Next.js, TypeScript, and curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}
