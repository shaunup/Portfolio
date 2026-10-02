import type { Metadata } from "next";
import { HeroSection } from "@/components/home/hero-section";
import { DomainsSection } from "@/components/home/domains-section";
import { FeaturedWorkSection } from "@/components/home/featured-work-section";
import { EngineeringProcessSection } from "@/components/home/engineering-process-section";
import { SnapshotSection } from "@/components/home/snapshot-section";
import { PersonalIntroSection } from "@/components/home/personal-intro-section";
import { ClosingCtaSection } from "@/components/home/closing-cta-section";
import { generateStructuredData } from "@/lib/metadata";

export const metadata: Metadata = {
  title: "Shaun Pimenta — Multidisciplinary Engineer",
  description:
    "Portfolio of Shaun Pimenta, a multidisciplinary engineer building across embedded systems, software, machine learning, data, blockchain, and infrastructure.",
};

export default function HomePage() {
  const personSchema = generateStructuredData("person");
  const websiteSchema = generateStructuredData("website");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <HeroSection />
      <DomainsSection />
      <FeaturedWorkSection />
      <EngineeringProcessSection />
      <SnapshotSection />
      <PersonalIntroSection />
      <ClosingCtaSection />
    </>
  );
}
