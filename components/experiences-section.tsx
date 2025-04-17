"use client";
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const ExperiencesSection = () => {
  const companies = [
    {
      name: "PhysicsWallah Pvt Ltd",
      description: `Developed and published over 30+ features, resulting in a 58% increase in user engagement. Contributed to the development of a unified Master Admin Panel, integrating frontend functionalities for 40+ orga-
nizations. Implemented server-side rendering (SSR) in ReactJS, which significantly reduced page load time by 40% and
boosted overall website performance and efficiency. Facilitated cross-functional collaboration among dev, QA, and product teams, resulting in 25% faster time-to-market. Wrote ReactJS unit tests with Jest, achieving greater than 80% code coverage for comprehensive testing. Aided junior devs through mentorship, comprehensive code reviews, clarifying queries, and making tangible contributions. Developed new features and fixed bugs in PW Marketplace and Teachers-Portal using NextJS, Angular and Tailwind
CSS.`,
      tags: ["Next.js", "React", "Tailwind CSS", "Angular"],
      link: "https://www.pw.live/",
      startDate: "May 2022",
      endDate: "Sept 2024",
      position: "Frontend Developer(SDE-1)",
      location: "Noida, India"
    },
    {
      name: "BYJUS",
      description: "Led a team segment to clarify job roles, managed client interactions, and oversaw CRM tool and lead management processes. Recognized as a top performer in the eastern zone, excelled in direct client handling, and effectively identified and resolved students’ needs and problems.",
      tags: ["CRM", "Client Handling", "Lead Management", "Operations", "Excel"],
      link: "https://byjus.com/",
      startDate: "Oct 2020",
      endDate: "Mar 2022",
      position: "Operations Team lead(Pre Sales)",
      location: "Remote, India"
    },
    {
      name: "Synprox Solutions",
      description: "Performed frontend development using Angular 7, quickly learned Material UI and Bootstrap, contributing to successful project launches and enhanced user interfaces.",
      tags: ["Angular", "JavaScript", "HTML/CSS", "SCSS/SASS", "Bootstrap"],
      link: "https://synproxsolutions.com/",
      startDate: "Jun 2020",
      endDate: "Sept 2020",
      position: "Web Developer",
      location: "Kolkata, India"
    }
  ];

  return (
    <section id="experiences" className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="text-xl text-primary font-medium">My Experiences </h2>
          <h3 className="text-3xl md:text-5xl font-bold mt-2">Companies I&apos;ve worked for</h3>
          <Separator className="w-24 h-1 bg-primary rounded-full mx-auto mt-4" />
        </div>

        <div className="flex flex-col items-center gap-8">
          {companies.map((company, index) => (
            <React.Fragment key={index}>
              <div 
                className="group relative p-6 rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border/50 hover:border-primary/50 transition-all duration-300 max-w-[90%] w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -ml-8 -mb-8 group-hover:bg-primary/10 transition-colors duration-500"></div>

                <div className="relative space-y-4">
                  <h4 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">{company.name} <span className="text-sm text-muted-foreground">📍 {company.location}</span></h4>
                  <p className="text-sm text-muted-foreground">🧑🏻‍💻 {company.position}  🗓️ {company.startDate} - {company.endDate}</p>
                  <p className="text-muted-foreground">📎 {company.description}</p>

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
                      onClick={() => window.open(company.link, '_blank')}
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
