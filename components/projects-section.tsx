// "use client";

// import React, { useState } from 'react';
// import { Badge } from '@/components/ui/badge';
// import { Separator } from '@/components/ui/separator';
// import { Button } from '@/components/ui/button';
// import { ExternalLink, Github } from 'lucide-react';
// import { motion } from 'framer-motion';

// const ProjectsSection = () => {
//   const [popupIndex, setPopupIndex] = useState<number | null>(null);

//   const projects = [
//     {
//       title: "E-Commerce Platform of PW",
//       description:
//         "PW Store. Contributed to an eCommerce website for PW built with NextJS, facilitating product purchases and engaging an average of 20K monthly visitors in 2022. I've worked as a FE Developer",
//       tags: ["NextJS", "Tailwind CSS", "NodeJS"],
//       liveLink: "https://store.pw.live/",
//       githubLink: "",
//     },
//     {
//       title: "PW Admin",
//       description:
//         "Control panel of PW and other 40+ organisations using Angular 12, Tailwind CSS on CRUD-Operations for uploaded images, lectures, pdfs, schedule classes, create batches, test series, answer check and uploading results by Operations Team.",
//       tags: ["Material UI", "RxJS", "Tailwind CSS", "Angular 12"],
//       liveLink: "",
//       githubLink: "",
//     },
//     {
//       title: "PW Spam check",
//       description:
//         "Contributed to GenAI project with DS team of PW built with NextJS, which simplifies the effort of DPP Analyst team to check more than 3k genuine answersheet monthly without hesitation.",
//       tags: ["NextJS", "Tailwind CSS", "Axios"],
//       liveLink: "",
//       githubLink: "",
//     },
//     {
//       title: "Landing page",
//       description:
//         "Contributed to PW’s main landing page using Angular and Ionic, where the user can see the scheduled classes, batch details, recent learning, cohorts, etc.",
//       tags: ["Angular", "Ionic", "RxJS"],
//       liveLink: "https://www.pw.live/study/batches",
//       githubLink: "",
//     },
//     {
//       title: "PW Test Series and Test Clonning",
//       description:
//         "Build an online subjective and objective test platform from scratch for students where after attempting this test student can check the result of this test, can see the leaderboard, suggested answers. Copying test series inside another test-series or merging together.",
//       tags: ["NextJS", "Tailwind", "Angular", "Headless UI"],
//       liveLink: "https://www.pw.live/study/batches",
//       githubLink: "",
//     },
//     {
//       title: "PW Landing Page",
//       description:
//         "Contributed to the main landing page of PhysicsWallah, where after login you can see your assigned batch, recent learning, current Scheduled lecture and some quick actions including cohort change.",
//       tags: ["Angular", "Tailwind CSS", "Ionic", "Material UI"],
//       liveLink: "https://www.pw.live/",
//       githubLink: "",
//     },
//     {
//       title: "User Dashboard",
//       description:
//         "A user dashboard management project where I can add users based on some different role. all the users' Name, Email and Role will be shown in a table with pie chart along with search functionality.",
//       tags: ["Angular 19", "Chart.js"],
//       liveLink: "https://user-dashboard-demo-bice.vercel.app/",
//       githubLink: "https://github.com/popeye1235/user-dashboard-demo",
//     },
//     {
//       title: "Portfolio",
//       description:
//         "Build a portfolio website using NextJS and Tailwind CSS with proper Contact us page by integrating Formspree and night mode button",
//       tags: ["NextJS", "Tailwind CSS", "Framer motion", "Firebase"],
//       liveLink: "https://practice-portfolio-0-0-1.vercel.app/",
//       githubLink: "https://github.com/popeye1235/practice-portfolio-0.0.1",
//     },
//     {
//       title: "Portfolio Ghibli Style",
//       description:
//         "A portfolio website for matching this Ghibli trend.",
//       tags: ["NextJS", "Tailwind CSS", "Shadcn/UI - Matsu Theme", "Framer motion"],
//       liveLink: "https://sudip-ghibli-portfolio.vercel.app/",
//       githubLink: "https://github.com/popeye1235/sudip-ghibli-portfolio-0.0.1",
//     },
//   ];

//   return (
//     <section id="projects" className="min-h-screen flex flex-col items-center py-20 bg-background relative">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto mb-8 text-center">
//           <h2 className="text-xl text-primary font-medium">My Work</h2>
//           <h3 className="text-3xl md:text-5xl font-bold mt-2">Featured Projects</h3>
//           <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="group relative p-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
//             >
//               <div>
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-500"></div>
//                 <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -ml-8 -mb-8 group-hover:bg-primary/10 transition-colors duration-500"></div>

//                 <div className="relative space-y-4">
//                   <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
//                     {project.title}
//                   </h4>
//                   <p className="text-muted-foreground">{project.description}</p>

//                   <div className="flex flex-wrap gap-2 pt-2">
//                     {project.tags.map((tag, tagIndex) => (
//                       <Badge
//                         key={tagIndex}
//                         variant="secondary"
//                         className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="flex gap-3 pt-6 mt-4">
//                 <motion.button
//                   id={`live-btn-${index}`}
//                   whileTap={{ scale: 0.95, opacity: 0.7 }}
//                   onClick={() => {
//                     const btn = document.getElementById(`live-btn-${index}`);
//                     if (btn) {
//                       btn.classList.add("ring-2", "ring-primary/50", "shadow-lg");
//                       setTimeout(() => {
//                         window.open(project.liveLink, "_blank", "noopener,noreferrer");
//                         btn.classList.remove("ring-2", "ring-primary/50", "shadow-lg");
//                       }, 150);
//                     }
//                   }}
//                   className="gap-1 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-4 py-2 flex items-center text-sm"
//                 >
//                   <ExternalLink size={14} /> Live
//                 </motion.button>

//                 <Button
//                   variant="outline"
//                   size="sm"
//                   onClick={() => {
//                     if (!project.githubLink || project.githubLink === "#") {
//                       setPopupIndex(index);
//                       setTimeout(() => setPopupIndex(null), 2000);
//                     } else {
//                       window.open(project.githubLink, "_blank", "noopener,noreferrer");
//                     }
//                   }}
//                   className="gap-1 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//                 >
//                   <Github size={14} /> Code
//                 </Button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {popupIndex !== null && (
//         <div className="fixed top-6 right-6 bg-destructive/10 text-destructive border border-destructive px-6 py-3 rounded-md shadow-lg animate-in fade-in slide-in-from-top-5 duration-300 z-50">
//           🚫 Can’t show code due to restrictions
//         </div>
//       )}
//     </section>
//   );
// };

// export default ProjectsSection;


"use client";

import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import { useMode } from "@/app/context/mode-context";

const ProjectsSection = () => {
  const { mode } = useMode();
  const [popupIndex, setPopupIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Anti–Money Laundering (AML) Module - CN",
      story:
        "A system built to notice patterns humans might miss — guarding trust where money, risk, and responsibility intersect.",
      developer:
        "Worked on AML workflows at Credit Nirvana, building frontend interfaces to surface risk signals, transaction insights, and compliance-driven decision paths using React and MUI.",
      tags: ["React", "MUI", "Java", "Spring Boot", "SQL"],
      liveLink: "",
      githubLink: "",
    },
    {
      title: "Online Dispute Resolution (ODR) Module - CN",
      story:
        "A quieter alternative to conflict — designed to resolve disputes with clarity instead of confrontation.",
      developer:
        "Built frontend modules for Credit Nirvana’s ODR system, enabling structured dispute handling, case timelines, and resolution tracking for financial institutions.",
      tags: ["React", "MUI", "Java", "Spring Boot"],
      liveLink: "",
      githubLink: "",
    },    
    {
      title: "E-Commerce Platform of PW",
      story:
        "A marketplace built for scale — where learning materials move quietly but reliably from creators to students.",
      developer:
        "Contributed to PW Store built with Next.js, handling frontend features for product discovery and purchase flows.",
      tags: ["NextJS", "Tailwind CSS", "NodeJS"],
      liveLink: "https://store.pw.live/",
      githubLink: "",
    },
    {
      title: "PW Admin",
      story:
        "A silent control room — where thousands of daily decisions depend on clarity, speed, and trust.",
      developer:
        "Built and maintained a master admin panel used by 40+ organizations using Angular, Tailwind CSS, and Material UI.",
      tags: ["Material UI", "RxJS", "Tailwind CSS", "Angular 12"],
      liveLink: "",
      githubLink: "",
    },
    {
      title: "PW Spam Check (GenAI)",
      story:
        "An invisible assistant — reducing human fatigue by filtering noise from genuine effort.",
      developer:
        "Worked on a GenAI-powered answer sheet verification tool using Next.js and Axios for large-scale data processing.",
      tags: ["NextJS", "Tailwind CSS", "Axios"],
      liveLink: "",
      githubLink: "",
    },
    {
      title: "Landing Page (PW)",
      story:
        "The front door to learning — where first impressions quietly decide trust.",
      developer:
        "Contributed to PW’s landing page using Angular and Ionic, displaying batch schedules, cohorts, and learning paths.",
      tags: ["Angular", "Ionic", "RxJS"],
      liveLink: "https://www.pw.live/study/batches",
      githubLink: "",
    },
    {
      title: "PW Test Series Platform",
      story:
        "A system built to measure growth, not just scores.",
      developer:
        "Built an online subjective and objective test platform with leaderboards, results, and test cloning features.",
      tags: ["NextJS", "Tailwind", "Angular", "Headless UI"],
      liveLink: "https://www.pw.live/study/batches",
      githubLink: "",
    },
    {
      title: "User Dashboard",
      story:
        "An experiment in balance — how much information is helpful before it becomes noise.",
      developer:
        "Built a role-based user dashboard with tables, charts, and search using Angular 19 and Chart.js.",
      tags: ["Angular 19", "Chart.js"],
      liveLink: "https://user-dashboard-demo-bice.vercel.app/",
      githubLink: "https://github.com/popeye1235/user-dashboard-demo",
    },
    {
      title: "Portfolio Ghibli Style",
      story:
        "A quiet portfolio — designed to feel lived in, not marketed.",
      developer:
        "Built a narrative-driven portfolio using Next.js, Tailwind CSS, Shadcn UI, and Framer Motion.",
      tags: ["NextJS", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://sudip-ghibli-portfolio.vercel.app/",
      githubLink: "https://github.com/popeye1235/sudip-ghibli-portfolio-0.0.1",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center py-20 bg-background relative"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="text-xl text-primary font-medium">{mode === "story" ? "What I’ve Brought to Life 🎨" : "My Work"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mt-2">
          {mode === "story" ? "Living Works 🏋🏽‍♀️" : "Featured Projects"}
          </h3>
          <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border/50 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Decorative blobs */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-500"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -ml-8 -mb-8 group-hover:bg-primary/10 transition-colors duration-500"></div>

              <div className="relative space-y-4">
                <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-muted-foreground">
                  {mode === "story" ? project.story : project.developer}
                </p>

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

              <div className="flex gap-3 pt-6 mt-4">
                {/* <motion.button
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
                </motion.button> */}
<motion.button
  id={`live-btn-${index}`}
  whileTap={project.liveLink ? { scale: 0.95, opacity: 0.7 } : undefined}
  disabled={!project.liveLink}
  onClick={() => {
    if (!project.liveLink) return;

    const btn = document.getElementById(`live-btn-${index}`);
    if (btn) {
      btn.classList.add("ring-2", "ring-primary/50", "shadow-lg");
      setTimeout(() => {
        window.open(project.liveLink, "_blank", "noopener,noreferrer");
        btn.classList.remove("ring-2", "ring-primary/50", "shadow-lg");
      }, 150);
    }
  }}
  className={`gap-1 rounded-full px-4 py-2 flex items-center text-sm backdrop-blur-sm transition-all duration-300
    ${
      project.liveLink
        ? "bg-background/80 hover:bg-primary hover:text-primary-foreground cursor-pointer"
        : "bg-muted/40 text-muted-foreground cursor-not-allowed"
    }
  `}
>
  <ExternalLink size={14} />
  {project.liveLink ? "Live" : "Internal"}
</motion.button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (!project.githubLink) {
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
