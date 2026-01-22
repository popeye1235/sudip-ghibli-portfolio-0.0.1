"use client";

import React from "react";
import { useState } from "react";
import ExplainInterfaceButton from "./explain-interface-button";
import ExplainInterfaceModal from "./explain-interface-modal";

import { Separator } from "@/components/ui/separator";
import { useMode } from "@/app/context/mode-context";

const PRINCIPLES = [
  {
    story: {
      title: "Interfaces should reduce anxiety 🌱",
      description:
        "A good interface doesn’t rush the user. It quietly reassures them — you’re in control, nothing bad will happen if you move forward.",
    },
    developer: {
      title: "Write code for long-term maintainability",
      description:
        "I structure components and state with readability and future change in mind, knowing most frontend work is iteration, not greenfield.",
    },
  },
  {
    story: {
      title: "Speed matters, but calm matters more 🌬️",
      description:
        "Fast systems that feel unstable create stress. I value experiences that feel steady, even when complexity lives beneath the surface.",
    },
    developer: {
      title: "Optimize for perceived performance",
      description:
        "I prioritize layout stability, progressive loading, and meaningful feedback over raw metrics, especially in real-world, high-traffic products.",
    },
  },
  {
    story: {
      title: "Every interface teaches behavior 🧭",
      description:
        "Spacing, color, and silence guide users as much as buttons do. Interfaces should teach gently, not punish mistakes.",
    },
    developer: {
      title: "Guide users through affordances",
      description:
        "I rely on affordances, constraints, and sensible defaults instead of instructions, tooltips, or excessive validation.",
    },
  },
  {
    story: {
      title: "Complex systems deserve simple surfaces 🪵",
      description:
        "Users shouldn’t feel the weight of what happens behind the curtain. Complexity belongs in systems, not in screens.",
    },
    developer: {
      title: "Abstract complexity behind clean UI",
      description:
        "I hide domain complexity behind clear abstractions, breaking workflows into digestible steps while keeping interfaces approachable.",
    },
  },
  {
    story: {
      title: "Consistency builds trust over time 🧱",
      description:
        "When interfaces behave the same way every day, users stop worrying and start trusting.",
    },
    developer: {
      title: "Design for consistency and reuse",
      description:
        "I prefer shared components, consistent patterns, and design systems to reduce regressions and keep teams aligned.",
    },
  },
];

const WhyIBuildInterfacesSection = () => {
  const { mode, isDesktop } = useMode();
  const [explainOpen, setExplainOpen] = useState(false);

  const isStory = mode === "story";

  return (
    <section
      id="philosophy"
      className="min-h-screen flex items-center py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="text-xl text-primary font-medium">
            {isStory ? "How I Think Before I Build 🌿" : "Why I Build Interfaces"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mt-2">
            {isStory
              ? "The quiet rules I follow"
              : "Design & engineering principles"}
          </h3>
          <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>
        {!isStory && isDesktop && (
  <div className="flex justify-center mb-10">
    <ExplainInterfaceButton onClick={() => setExplainOpen(true)} />
  </div>
)}

        <div className="flex flex-col items-center gap-8">
          {PRINCIPLES.map((item, index) => {
            const content = isStory ? item.story : item.developer;

            return (
              <div
                key={index}
                className="group relative p-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border/50 hover:border-primary/50 transition-all duration-300 max-w-[90%] w-full"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -ml-8 -mb-8 group-hover:bg-primary/10 transition-colors duration-500"></div>

                <div className="relative space-y-4">
                  <h4 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                    {content.title}
                  </h4>

                  <p className="text-muted-foreground leading-relaxed">
                    {content.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ExplainInterfaceModal
  open={explainOpen}
  onClose={() => setExplainOpen(false)}
/>

    </section>
  );
};

export default WhyIBuildInterfacesSection;
