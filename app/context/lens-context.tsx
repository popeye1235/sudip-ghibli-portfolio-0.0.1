"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

export type Lens = "recruiter" | "engineer" | "founder";

export const LENSES: { id: Lens; label: string; blurb: string }[] = [
  {
    id: "recruiter",
    label: "Recruiter",
    blurb: "Biggest, most impactful work first.",
  },
  {
    id: "engineer",
    label: "Engineer",
    blurb: "Architecture, reusability and performance first.",
  },
  {
    id: "founder",
    label: "Founder",
    blurb: "Products and AI that shipped, first.",
  },
];

type LensContextType = {
  lens: Lens | null;
  setLens: (l: Lens | null) => void;
};

const LensContext = createContext<LensContextType | null>(null);
const KEY = "site-lens";

export function LensProvider({ children }: { children: React.ReactNode }) {
  const [lens, setLensState] = useState<Lens | null>(null);

  // restore the visitor's last choice (storage can throw in private windows)
  useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY) as Lens | null;
      if (saved && LENSES.some((l) => l.id === saved)) setLensState(saved);
    } catch {}
  }, []);

  const setLens = useCallback((l: Lens | null) => {
    setLensState(l);
    try {
      if (l) localStorage.setItem(KEY, l);
      else localStorage.removeItem(KEY);
    } catch {}
  }, []);

  return <LensContext.Provider value={{ lens, setLens }}>{children}</LensContext.Provider>;
}

export function useLens() {
  const ctx = useContext(LensContext);
  if (!ctx) throw new Error("useLens must be used inside LensProvider");
  return ctx;
}
