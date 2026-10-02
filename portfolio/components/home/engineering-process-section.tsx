"use client";

import { motion } from "framer-motion";
import { Search, FlaskConical, Blocks, TestTube } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { StaggerContainer, StaggerItem } from "@/components/ui/motion-wrapper";

const steps = [
  {
    number: "01",
    icon: <Search className="w-5 h-5" />,
    title: "Understand the system",
    description:
      "Before writing any code or choosing any tool, I try to understand the full shape of the problem—including parts that are outside my initial scope. The boundary of a system is often where the most important constraints live.",
  },
  {
    number: "02",
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Prototype the uncertain parts",
    description:
      "Every project has assumptions that sound reasonable but might be wrong. I identify those first and build the smallest thing that can test them. The goal is to learn, not to finish.",
  },
  {
    number: "03",
    icon: <Blocks className="w-5 h-5" />,
    title: "Build across boundaries",
    description:
      "Most interesting systems span more than one layer. I try to maintain enough context across layers—hardware, firmware, application, data, infrastructure—to make decisions that hold up when the layers interact.",
  },
  {
    number: "04",
    icon: <TestTube className="w-5 h-5" />,
    title: "Test in the real world",
    description:
      "A system is only as good as its behavior under real conditions. I test with realistic loads, real hardware, and real users as early as possible—because the gap between a working prototype and a reliable system is usually where the most interesting engineering happens.",
  },
];

export function EngineeringProcessSection() {
  return (
    <section
      className="py-20 lg:py-28 bg-card/30 border-y border-border"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-1">
            <SectionHeader
              eyebrow="How I engineer"
              title="A consistent process for novel problems."
              id="process-heading"
            />
          </div>

          <StaggerContainer className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative p-6 rounded-xl bg-background border border-border space-y-3">
                  {/* Step number */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground/50 font-bold">
                      {step.number}
                    </span>
                    <div className="text-primary">{step.icon}</div>
                  </div>
                  <h3 className="font-display font-semibold text-base text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
