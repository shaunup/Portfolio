import type { Metadata } from "next";

const siteUrl = "https://shaunpimenta.com";

interface GenerateMetadataOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
}

export function generatePageMetadata({
  title,
  description,
  path = "",
  image = "/og/default.png",
  noindex = false,
}: GenerateMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = `${title} | Shaun Pimenta`;

  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "Shaun Pimenta",
      type: "website",
      images: [
        {
          url: `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [`${siteUrl}${image}`],
    },
    alternates: {
      canonical: url,
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function generateStructuredData(type: "person" | "website" | "article", data?: Record<string, unknown>) {
  if (type === "person") {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Shaun Pimenta",
      url: siteUrl,
      jobTitle: "Multidisciplinary Engineer",
      description:
        "Multidisciplinary engineer building across embedded systems, software, machine learning, data, blockchain, and infrastructure.",
      sameAs: [
        "https://github.com/[ADD GITHUB USERNAME]",
        "https://linkedin.com/in/[ADD LINKEDIN]",
      ],
    };
  }

  if (type === "website") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Shaun Pimenta",
      url: siteUrl,
      description:
        "Portfolio of Shaun Pimenta, a multidisciplinary engineer.",
    };
  }

  if (type === "article" && data) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      ...data,
    };
  }

  return null;
}
