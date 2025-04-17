"use client";

import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "E-Commerce Platform of PW",
      description:
        "PW Store. Contributed to an eCommerce website for PW built with NextJS, facilitating product purchases and engaging an average of 20K monthly visitors in 2022. I've worked as a FE Developer",
      tags: ["NextJS", "Tailwind CSS", "NodeJS"],
      liveLink: "https://store.pw.live/",
      githubLink: "",
    },
    {
      title: "PW Admin",
      description:
        "Control panel of PW and other 40+ organisations using Angular 12, Tailwind CSS on CRUD-Operations for uploaded images, lectures, pdfs, schedule classes, create batches, test series, answer check and uploading results by Operations Team.",
      tags: ["Material UI", "RxJS", "Tailwind CSS", "Angular 12"],
      liveLink: "",
      githubLink: "",
    },
    {
      title: "PW Spam check",
      description:
        "Contributed to GenAI project with DS team of PW built with NextJS, which simplifies the effort of DPP Analyst team to check more than 3k genuine answersheet monthly without hesitation.",
      tags: ["NextJS", "Tailwind CSS", "Axios"],
      liveLink: "",
      githubLink: "",
    },
    {
      title: "PW Test Series and Test Clonning",
      description:
        "Build an online subjective and objective test platform from scratch for students where after attempting this test student can check the result of this test, can see the leaderboard, suggested answers. Copying test series inside another test-series or merging together.",
      tags: ["NextJS", "Tailwind", "Angular", "Headless UI"],
      liveLink: "https://www.pw.live/study/batches",
      githubLink: "",
    },
    {
      title: "PW Landing Page",
      description:
        "Contributed to the main landing page of PhysicsWallah, where after login you can see your assigned batch, recent learning, current Scheduled lecture and some quick actions including cohort change.",
      tags: ["Angular", "Tailwind CSS", "Ionic", "Material UI"],
      liveLink: "https://www.pw.live/",
      githubLink: "",
    },
    {
      title: "User Dashboard",
      description:
        "A user dashboard management project where I can add users based on some different role. all the users' Name, Email and Role will be shown in a table with pie chart along with search functionality.",
      tags: ["Angular 19", "Chart.js"],
      liveLink: "https://user-dashboard-demo-bice.vercel.app/",
      githubLink: "https://github.com/popeye1235/user-dashboard-demo",
    },
    {
      title: "Portfolio",
      description:
        "Build a portfolio website using NextJS and Tailwind CSS with proper Contact us page by integrating Formspree and night mode button",
      tags: ["NextJS", "Tailwind CSS", "Framer motion", "Firebase"],
      liveLink: "https://practice-portfolio-0-0-1.vercel.app/",
      githubLink: "https://github.com/popeye1235/practice-portfolio-0.0.1",
    },
    {
      title: "Portfolio Ghibli Style",
      description:
        "A portfolio website for matching this Ghibli trend.",
      tags: ["NextJS", "Tailwind CSS", "Shadcn/UI - Matsu Theme", "Framer motion"],
      liveLink: "",
      githubLink: "",
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex flex-col items-center py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="text-xl text-primary font-medium">My Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold mt-2">Featured Projects</h3>
          <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -ml-8 -mb-8 group-hover:bg-primary/10 transition-colors duration-500"></div>

                <div className="relative space-y-4">
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-6 mt-4">
                <motion.button
                  id={`live-btn-${index}`}
                  whileTap={{ scale: 0.95, opacity: 0.7 }}
                  onClick={() => {
                    const btn = document.getElementById(`live-btn-${index}`);
                    if (btn) {
                      btn.classList.add("ring-2", "ring-primary/50", "shadow-lg");
                      setTimeout(() => {
                        window.open(project.liveLink, "_blank", "noopener,noreferrer");
                        btn.classList.remove("ring-2", "ring-primary/50", "shadow-lg");
                      }, 150);
                    }
                  }}
                  className="gap-1 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-4 py-2 flex items-center text-sm"
                >
                  <ExternalLink size={14} /> Live
                </motion.button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (!project.githubLink || project.githubLink === "#") {
                      setPopupIndex(index);
                      setTimeout(() => setPopupIndex(null), 2000);
                    } else {
                      window.open(project.githubLink, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="gap-1 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github size={14} /> Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {popupIndex !== null && (
        <div className="fixed top-6 right-6 bg-destructive/10 text-destructive border border-destructive px-6 py-3 rounded-md shadow-lg animate-in fade-in slide-in-from-top-5 duration-300 z-50">
          🚫 Can’t show code due to restrictions
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
