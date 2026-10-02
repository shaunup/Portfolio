import { articles } from "@/content/notes";

const baseUrl = "https://shaunpimenta.com";

export async function GET() {
  const published = articles.filter((a) => !a.draft);

  const items = published
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${baseUrl}/notes/${article.slug}</link>
      <guid>${baseUrl}/notes/${article.slug}</guid>
      ${article.publishedAt ? `<pubDate>${new Date(article.publishedAt).toUTCString()}</pubDate>` : ""}
    </item>`
    )
    .join("");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Shaun Pimenta — Notes</title>
    <description>Technical writing by Shaun Pimenta: build logs, engineering lessons, and reflections.</description>
    <link>${baseUrl}/notes</link>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
