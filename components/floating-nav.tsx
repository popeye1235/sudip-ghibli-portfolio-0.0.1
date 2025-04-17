"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Home, User, Code, Briefcase, Mail, Building2, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const sections = useMemo(() => [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: Briefcase, label: 'Projects' },
    { id: 'experiences', icon: Building2, label: 'Experiences' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const currentSection = sections
        .map(section => {
          const element = document.getElementById(section.id);
          if (!element) return { id: section.id, position: -1 };
          return {
            id: section.id,
            position: element.offsetTop,
          };
        })
        .filter(section => section.position !== -1)
        .reduce((prev, current) => {
          return scrollPosition >= current.position ? current : prev;
        }, { id: 'home', position: 0 });

      setActiveSection(currentSection.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileNavOpen(false);
  };

  return (
    <>
      {/* Desktop Nav */}
      <div className="hidden sm:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center gap-4 bg-background/80 backdrop-blur-sm p-3 rounded-full shadow-lg border border-border">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleNavClick(e, section.id)}
              className={cn(
                'relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group',
                activeSection === section.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-primary/10'
              )}
              aria-label={section.label}
            >
              <section.icon size={18} />
              <span className="absolute right-full mr-2 px-2 py-1 rounded-md bg-background shadow-md border border-border text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {section.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Nav Toggle & Icons */}
      <div className="sm:hidden fixed bottom-4 right-4 z-50 flex flex-col items-center gap-2">
        {isMobileNavOpen && (
          <div className="flex flex-col items-center gap-2 mb-2">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleNavClick(e, section.id)}
                className={cn(
                  `relative flex items-center justify-center w-12 h-12 rounded-full bg-background shadow-lg border border-border text-muted-foreground transition-all duration-300 group fade-in-up fade-delay-${index + 1}`,
                  activeSection === section.id && 'bg-primary text-primary-foreground'
                )}
                aria-label={section.label}
              >
                <section.icon size={20} />
                <span className="absolute right-full mr-2 px-2 py-1 rounded-md bg-background shadow-md border border-border text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {section.label}
                </span>
              </a>
            ))}
          </div>
        )}

        <button
          className="w-12 h-12 flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
          onClick={() => setIsMobileNavOpen((prev) => !prev)}
          aria-label="Toggle Navigation"
        >
          {isMobileNavOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </>
  );
};

export default FloatingNav;