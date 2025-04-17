"use client";

import React, { useState, useEffect } from 'react';
const ScrollDownIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sectionIds = ['home', 'about', 'skills', 'projects', 'experiences', 'contact'];

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const currentSection = sectionIds.findIndex(id => {
      const element = document.getElementById(id);
      if (element) {
        const top = element.offsetTop;
        const bottom = top + element.offsetHeight;
        return scrollPosition >= top && scrollPosition < bottom;
      }
      return false;
    });

    if (currentSection !== -1) {
      setCurrentSectionIndex(currentSection);
    }

    // Hide the down chevron at the last section
    setIsVisible(currentSectionIndex < sectionIds.length - 2);
  };

  const scrollToNext = () => {
    if (currentSectionIndex < sectionIds.length - 1) {
      const nextSectionId = sectionIds[currentSectionIndex + 1];
      document.getElementById(nextSectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToHome = () => {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSectionIndex]);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <button
            onClick={scrollToNext}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
      {!isVisible && currentSectionIndex === sectionIds.length - 1 && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 animate-bounce">
          <button
            onClick={scrollToHome}
            className="text-muted-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-up"
            >
              <path d="m18 15-6-6-6 6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollDownIndicator;