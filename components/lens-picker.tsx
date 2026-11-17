"use client";

import { LENSES, useLens } from "@/app/context/lens-context";

export default function LensPicker({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const { lens, setLens } = useLens();
  const current = LENSES.find((l) => l.id === lens);

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <div
        role="group"
        aria-label="View this portfolio as"
        className="flex items-center gap-1 rounded-full border border-border bg-background/80 p-1 backdrop-blur-sm"
      >
        <span className="pl-3 pr-1 text-xs text-muted-foreground hidden sm:inline">Viewing as</span>
        <span className="pl-3 pr-1 text-xs text-muted-foreground sm:hidden">As</span>
        {LENSES.map((l) => (
          <button
            key={l.id}
            aria-pressed={lens === l.id}
            onClick={() => setLens(lens === l.id ? null : l.id)}
            className={`rounded-full px-3 py-1 text-xs transition-colors duration-300 cursor-pointer ${
              lens === l.id
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-primary"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
      {!compact && (
        <p className="text-xs text-muted-foreground min-h-4" aria-live="polite">
          {current ? current.blurb : "Pick a lens and the projects reorder for you."}
        </p>
      )}
    </div>
  );
}
