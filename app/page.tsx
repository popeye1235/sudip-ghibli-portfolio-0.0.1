"use client";

import React from 'react';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import ProjectsSection from '@/components/projects-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import FloatingNav from '@/components/floating-nav';
import ExperiencesSection from '@/components/experiences-section';
import ScrollDownIndicator from '@/components/scroll-down-indicator';


export default function Home() {
  return (
    <main className="min-h-screen">
       <FloatingNav /> 
      <div id="home">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="experiences">
        <ExperiencesSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
      <ScrollDownIndicator />
    </main>
  );
}