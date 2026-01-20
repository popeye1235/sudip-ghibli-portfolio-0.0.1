"use client";

import React from "react";
import { Separator } from "@/components/ui/separator";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-2 mb-8 text-center">
            <h2 className="text-xl text-primary font-medium">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-bold">My Journey</h3>
            <Separator className="w-24 h-1 bg-primary rounded-full mt-4" />
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I’m a frontend developer by trade 🧑🏻‍💻, but more than that — I’m a
              storyteller at heart. Whether it&apos;s through code, design, or a
              well-timed metaphor, I bring ideas to life across screens and
              senses. My journey weaves through development, design, marketing,
              and sales — a path carved not by roles, but by curiosity.
            </p>
            <p>
              My craft is guided by intention: interfaces that feel alive,
              interactions that whisper with elegance, and performance that
              flows like wind through leaves. I believe every product should be
              built like a story — structured, meaningful, and deeply human.
            </p>
            <p>
              When I’m not immersed in pixels and performance, I find joy in the
              quiet magic of books 📚, the rhythm of poetry 🖋️, the lens of
              photography 📸, and the winding roads of places I’ve yet to know ✈️.
              Creation doesn’t end with code — it begins with how we see the
              world 🌏.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3.5+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
