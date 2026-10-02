import type { Metadata } from "next";
import { Suspense } from "react";
import { ProjectsClientPage } from "@/components/projects/projects-client";
import { projects } from "@/content/projects";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
  title: "Work",
  description:
    "Projects by Shaun Pimenta spanning embedded systems, full-stack development, machine learning, data engineering, blockchain, and infrastructure.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <div className="pt-20">
      <Suspense
        fallback={
          <div className="py-16 text-center text-muted-foreground text-sm">
            Loading projects…
          </div>
        }
      >
        <ProjectsClientPage projects={projects} />
      </Suspense>
    </div>
  );
}
