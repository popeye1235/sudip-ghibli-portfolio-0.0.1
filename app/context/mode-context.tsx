"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Mode = "story" | "developer";

type ModeContextType = {
  mode: Mode;
  toggleMode: () => void;
  isDesktop: boolean;
};

const ModeContext = createContext<ModeContextType | null>(null);

export function ModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("developer");
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => {
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      setIsDesktop(desktop);

      // FORCE developer mode on mobile
      if (!desktop) {
        setMode("developer");
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Load saved mode (DESKTOP ONLY)
  useEffect(() => {
    if (!isDesktop) return;

    const saved = localStorage.getItem("site-mode") as Mode | null;
    if (saved) setMode(saved);
  }, [isDesktop]);

  const toggleMode = () => {
    // No toggling on mobile
    if (!isDesktop) return;

    const next = mode === "story" ? "developer" : "story";
    setMode(next);
    localStorage.setItem("site-mode", next);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode, isDesktop }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const ctx = useContext(ModeContext);
  if (!ctx) {
    throw new Error("useMode must be used inside ModeProvider");
  }
  return ctx;
}
