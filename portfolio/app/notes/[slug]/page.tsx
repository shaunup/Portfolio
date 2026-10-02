import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ChevronRight, Clock, Calendar } from "lucide-react";
import { articles, getArticleBySlug } from "@/content/notes";
import { generatePageMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles
    .filter((a) => !a.draft)
    .map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article || article.draft) return {};

  return generatePageMetadata({
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.description,
    path: `/notes/${article.slug}`,
  });
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || article.draft) notFound();

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <nav className="border-b border-border bg-card/50" aria-label="Breadcrumb">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link
            href="/notes"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Notes
          </Link>
          <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="text-foreground/80 truncate max-w-xs">{article.title}</span>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <header className="mb-10 space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
              {article.category}
            </span>
            {article.readingTime && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {article.readingTime} min read
              </span>
            )}
            {article.publishedAt && (
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
          </div>
          <h1 className="font-display font-semibold text-display-md text-foreground text-balance">
            {article.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-7">
            {article.description}
          </p>
        </header>

        <div className="prose-engineering">
          <p className="text-muted-foreground italic">
            Full article content coming soon. Check back later.
          </p>
        </div>
      </article>
    </div>
  );
}
