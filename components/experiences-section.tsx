// "use client";
// import React from 'react';
// import { Badge } from '@/components/ui/badge';
// import { Separator } from '@/components/ui/separator';
// import { Button } from '@/components/ui/button';
// import { ExternalLink } from 'lucide-react';

// const ExperiencesSection = () => {
//   const companies = [
//     {
//       name: "Credit Nirvana - A Perfios Company",
//       description: `At Credit Nirvana, I work as a Software Engineer focused on modernizing and enhancing the frontend of our debt collection platform using React.js. I collaborate closely with product, design and backend teams to deliver scalable, user-centric interfaces that improve usability and performance. My work contributes to building smart, data-driven solutions that help financial institutions make faster and more accurate decisions in debt collection management.`,
//       tags: ["SQL", "React", "MUI", "Java", "KeyCloak", "Spring Boot", "JavaScript", "HTML/CSS"],
//       link: "https://www.creditnirvana.ai/",
//       startDate: "Jun 2025",
//       endDate: "Present",
//       position: "Software Engineer",
//       location: "Bengaluru, India"
//     },
//     {
//       name: "PhysicsWallah Pvt Ltd",
//       description: `Developed and published over 30+ features, resulting in a 58% increase in user engagement. Contributed to the development of a unified Master Admin Panel, integrating frontend functionalities for 40+ orga-
// nizations. Implemented server-side rendering (SSR) in ReactJS, which significantly reduced page load time by 40% and
// boosted overall website performance and efficiency. Facilitated cross-functional collaboration among dev, QA, and product teams, resulting in 25% faster time-to-market. Wrote ReactJS unit tests with Jest, achieving greater than 80% code coverage for comprehensive testing. Aided junior devs through mentorship, comprehensive code reviews, clarifying queries, and making tangible contributions. Developed new features and fixed bugs in PW Marketplace and Teachers-Portal using NextJS, Angular and Tailwind
// CSS.`,
//       tags: ["Next.js", "React", "Tailwind CSS", "Angular"],
//       link: "https://www.pw.live/",
//       startDate: "May 2022",
//       endDate: "Sept 2024",
//       position: "Frontend Developer(SDE-1)",
//       location: "Noida, India"
//     },
//     {
//       name: "BYJUS",
//       description: "Took some time to brush-up my technical skills and again joined technical team of BYJUS through IJP. Worked as ASE to build Dashboard page, Testimonial and Rating Module using React and Bootstrap.",
//       tags: ["React", "Redux", "Tailwind CSS", "Bootstrap", "JavaScript", "HTML/CSS"],
//       link: "https://byjus.com/",
//       startDate: "Aug 2021",
//       endDate: "Mar 2022",
//       position: "Associate Software Engineer",
//       location: "Remote, India"
//     },
//     {
//       name: "BYJUS",
//       description: "Led a team segment to clarify job roles, managed client interactions, and oversaw CRM tool and lead management processes. Recognized as a top performer in the eastern zone, excelled in direct client handling, and effectively identified and resolved students’ needs and problems.",
//       tags: ["CRM", "Client Handling", "Lead Management", "Operations", "Excel"],
//       link: "https://byjus.com/",
//       startDate: "Oct 2020",
//       endDate: "July 2021",
//       position: "Operations Team lead",
//       location: "Remote, India"
//     },
//     {
//       name: "Synprox Solutions",
//       description: "Performed frontend development using Angular 7, quickly learned Material UI and Bootstrap, contributing to successful project launches and enhanced user interfaces.",
//       tags: ["Angular", "JavaScript", "HTML/CSS", "SCSS/SASS", "Bootstrap"],
//       link: "https://synproxsolutions.com/",
//       startDate: "Jan 2020",
//       endDate: "Sept 2020",
//       position: "Web Developer Intern",
//       location: "Kolkata, India"
//     }
//   ];

//   return (
//     <section id="experiences" className="min-h-screen flex items-center py-20 bg-background">
//       <div className="container mx-auto px-4">
//         <div className="max-w-4xl mx-auto mb-8 text-center">
//           <h2 className="text-xl text-primary font-medium">My Experiences </h2>
//           <h3 className="text-3xl md:text-5xl font-bold mt-2">Companies I&apos;ve worked for</h3>
//           <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
//         </div>

//         <div className="flex flex-col items-center gap-8">
//           {companies.map((company, index) => (
//             <React.Fragment key={index}>
//               <div 
//                 className="group relative p-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border/50 hover:border-primary/50 transition-all duration-300 max-w-[90%] w-full"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

//                 <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-500"></div>
//                 <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -ml-8 -mb-8 group-hover:bg-primary/10 transition-colors duration-500"></div>

//                 <div className="relative space-y-4">
//                   <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{company.name} <span className="text-sm text-muted-foreground">📍 {company.location}</span></h4>
//                   <p className="text-sm text-muted-foreground">🧑🏻‍💻 {company.position}  🗓️ {company.startDate} - {company.endDate}</p>
//                   <p className="text-muted-foreground">📎 {company.description}</p>

//                   <div className="flex flex-wrap gap-2 pt-2">
//                     {company.tags.map((tag, tagIndex) => (
//                       <Badge 
//                         key={tagIndex} 
//                         variant="secondary" 
//                         className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
//                       >
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>

//                   <div className="flex gap-3 pt-4">
//                     <Button 
//                       variant="outline" 
//                       size="sm" 
//                       className="gap-1 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//                       onClick={() => window.open(company.link, '_blank')}
//                     >
//                       <ExternalLink size={14} /> Website
//                     </Button>
//                   </div>
//                 </div>
//               </div>

//               {index !== companies.length - 1 && (
//                 <div className="h-12 w-[2px] border-l-2 border-dashed border-border my-4 bg-primary"></div>
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperiencesSection;



"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useMode } from "@/app/context/mode-context";

const companies = [
  {
    name: "Credit Nirvana - A Perfios Company",
    location: "Bengaluru, India",
    position: "Software Engineer",
    startDate: "Jun 2025",
    endDate: "Present",
    link: "https://www.creditnirvana.ai/",
    tags: ["SQL", "React", "MUI", "Java", "KeyCloak", "Spring Boot", "JavaScript", "HTML/CSS"],
    story: `At Credit Nirvana, I work inside systems where clarity matters more than speed. The platform supports sensitive financial decisions, and every interface must earn trust before it earns clicks. My role often sits between product intent and technical reality — shaping calm, reliable experiences in complex debt workflows.`,
    developer: `Working as a Software Engineer focused on modernizing and enhancing the frontend of a debt collection platform using React.js. I collaborate closely with product, design, and backend teams to deliver scalable, user-centric interfaces that improve usability and performance.`,
  },
  {
    name: "PhysicsWallah Pvt Ltd",
    location: "Noida, India",
    position: "Frontend Developer (SDE-1)",
    startDate: "May 2022",
    endDate: "Sept 2024",
    link: "https://www.pw.live/",
    tags: ["Next.js", "React", "Tailwind CSS", "Angular"],
    story: `PhysicsWallah was fast, intense, and deeply educational. Scale wasn’t a future problem — it was the present. I learned how systems behave under real traffic, real deadlines, and real consequences, where calm engineering mattered as much as clever solutions.`,
    developer: `Developed and published over 30+ features, resulting in a 58% increase in user engagement. Contributed to the Master Admin Panel, implemented SSR to reduce load time by 40%, and collaborated across dev, QA, and product teams.`,
  },
  {
    name: "BYJUS",
    location: "Remote, India",
    position: "Associate Software Engineer",
    startDate: "Aug 2021",
    endDate: "Mar 2022",
    link: "https://byjus.com/",
    tags: ["React", "Redux", "Bootstrap"],
    story: `This phase was about returning to engineering with sharper intent — focusing on fundamentals, ownership, and consistency.`,
    developer: `Worked as an Associate Software Engineer building dashboards, testimonial modules, and rating components using React and Bootstrap.`,
  },
  {
    name: "BYJUS",
    location: "Remote, India",
    position: "Operations Team Lead",
    startDate: "Oct 2020",
    endDate: "July 2021",
    link: "https://byjus.com/",
    tags: ["CRM", "Client Handling", "Operations", "Excel"],
    story: `This role shaped my understanding of people, pressure, and responsibility — lessons that still guide how I build interfaces today.`,
    developer: `Led operations workflows, managed CRM tools, handled client interactions, and consistently ranked as a top performer in the eastern zone.`,
  },
  {
    name: "Synprox Solutions",
    location: "Kolkata, India",
    position: "Web Developer Intern",
    startDate: "Jan 2020",
    endDate: "Sept 2020",
    link: "https://synproxsolutions.com/",
    tags: ["Angular", "JavaScript", "HTML/CSS", "SCSS/SASS", "Bootstrap"],
    story: `This was where the habit of building daily was formed — learning not just how to code, but how to finish.`,
    developer: `Performed frontend development using Angular 7, SCSS, and Bootstrap while contributing to successful project launches.`,
  },
];

const ExperiencesSection = () => {
  const { mode } = useMode();

  return (
    <section
      id="experiences"
      className="min-h-screen flex items-center py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="text-xl text-primary font-medium">{mode === "story" ? "Places That Shaped Me 🧭" : "My Experiences"}
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mt-2">
          {mode === "story" ? "Homes I Built Within 🏠" : "Companies I’ve Worked For"}
          </h3>
          <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="flex flex-col items-center gap-8">
          {companies.map((company, index) => (
            <React.Fragment key={index}>
              <div className="group relative p-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border/50 hover:border-primary/50 transition-all duration-300 max-w-[90%] w-full">
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                {/* Decorative blobs */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -ml-8 -mb-8 group-hover:bg-primary/10 transition-colors duration-500"></div>

                <div className="relative space-y-4">
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {company.name}{" "}
                    <span className="text-sm text-muted-foreground">
                      📍 {company.location}
                    </span>
                  </h4>

                  <p className="text-sm text-muted-foreground">
                    🧑🏻‍💻 {company.position} 🗓️ {company.startDate} - {company.endDate}
                  </p>

                  <p className="text-muted-foreground">
                    📎 {mode === "story" ? company.story : company.developer}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {company.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 rounded-full bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.open(company.link, "_blank")}
                    >
                      <ExternalLink size={14} /> Website
                    </Button>
                  </div>
                </div>
              </div>

              {index !== companies.length - 1 && (
                <div className="h-12 w-[2px] border-l-2 border-dashed border-border my-4 bg-primary"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
