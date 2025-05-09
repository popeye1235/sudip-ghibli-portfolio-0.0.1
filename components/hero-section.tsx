"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { MaskedImage } from "@/components/ui/masked-image";

const HeroSection = () => {
  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col lg:flex-row overflow-hidden"
      >
        {/* Left side content - full width on mobile, 50% on desktop */}
        <div className="w-full lg:w-1/2 bg-background flex items-center order-2 lg:order-1 px-6 py-12 lg:py-0">
          <div className="max-w-xl mx-auto space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl text-primary font-medium">
                Frontend Developer
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-primary">Mishra Sudip</span>
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Like painting with light and structure, I shape interfaces that
              feel alive — blending art with logic, emotion with interaction. My
              code tells stories, and every UI is a quiet spell cast with
              intention 🖌️ 🌿.
            </p>

            {/* <p className="text-xl text-muted-foreground leading-relaxed">
              I build exceptional and accessible digital experiences for the
              web. Focused on creating intuitive and responsive applications
              that solve real-world problems.
            </p> */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 pt-4">
              <Button className="gap-2 px-6 py-6 text-base rounded-full">
                <ArrowLeft size={18} />
                <a
                  href="https://drive.google.com/file/d/1fpsVwwJiAMZqo4YIYkxMaiBVb8ZVywb3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Resume
                </a>
              </Button>
              <Button className="gap-2 px-6 py-6 text-base rounded-full">
                <a
                  href="#projects"
                  onClick={() => handleSmoothScroll("projects")}
                >
                  View Projects
                </a>
                <ArrowRight size={18} />
              </Button>
              <div className="hidden sm:flex items-center gap-3">
                <a
                  href="https://github.com/popeye1235"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-12 w-12 cursor-pointer"
                  >
                    <Github size={22} />
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/sudip-mishra-11b93013a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-12 w-12 cursor-pointer"
                  >
                    <Linkedin size={22} />
                  </Button>
                </a>
                <a
                  href="https://x.com/babumosai_23"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-12 w-12 cursor-pointer"
                  >
                    <Twitter size={22} />
                  </Button>
                </a>
                <a
                  href="https://www.instagram.com/babumosai_23/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full h-12 w-12 cursor-pointer"
                  >
                    <Instagram size={22} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen order-1 lg:order-2 relative">
          <div className="hidden lg:block w-full h-full">
            <MaskedImage
              src="https://res.cloudinary.com/dwbwiwduw/image/upload/v1744278926/ghibli-dam_dus3zq.png"
              alt="Sudip Mishra"
              width={600}
              height={1000}
              className="object-cover rounded-sm"
            />
          </div>
          <div className="block lg:hidden w-full h-full relative">
            <Image
              priority={true}
              src="https://res.cloudinary.com/dwbwiwduw/image/upload/v1744278926/ghibli-dam_dus3zq.png"
              alt="Sudip Mishra"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* The ScrollDownIndicator will now handle the chevron */}
    </>
  );
};

export default HeroSection;
