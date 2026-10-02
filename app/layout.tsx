import type { Metadata, Viewport } from "next";
import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shaunpimenta.com"),
  title: {
    default: "Shaun Pimenta — Multidisciplinary Engineer",
    template: "%s | Shaun Pimenta",
  },
  description:
    "Portfolio of Shaun Pimenta, a multidisciplinary engineer building across embedded systems, software, machine learning, data, blockchain, and infrastructure.",
  keywords: [
    "Shaun Pimenta",
    "multidisciplinary engineer",
    "embedded systems",
    "robotics",
    "full-stack development",
    "machine learning",
    "data engineering",
    "blockchain",
    "cloud infrastructure",
    "computer science",
  ],
  authors: [{ name: "Shaun Pimenta" }],
  creator: "Shaun Pimenta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shaunpimenta.com",
    siteName: "Shaun Pimenta",
    title: "Shaun Pimenta — Multidisciplinary Engineer",
    description:
      "Portfolio of Shaun Pimenta, a multidisciplinary engineer building across embedded systems, software, machine learning, data, blockchain, and infrastructure.",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Shaun Pimenta — Multidisciplinary Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaun Pimenta — Multidisciplinary Engineer",
    description:
      "Portfolio of Shaun Pimenta, a multidisciplinary engineer building across embedded systems, software, machine learning, data, blockchain, and infrastructure.",
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png" }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F8FA" },
    { media: "(prefers-color-scheme: dark)", color: "#0B111A" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navigation />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
