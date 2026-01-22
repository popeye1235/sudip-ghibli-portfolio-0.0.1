"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { DESIGN_RATIONALE } from "../app/data/design-rationale";
import { Button } from "@/components/ui/button";

export default function ExplainInterfaceModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const data = DESIGN_RATIONALE.philosophy;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
      onClick={onClose} // backdrop click closes modal
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="design-rationale-title"
        onClick={(e) => e.stopPropagation()} // prevent accidental close
        className="group relative w-full max-w-lg rounded-xl overflow-hidden bg-gradient-to-br from-muted/30 to-background border border-border/50 shadow-xl transition-all duration-300"
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-primary/5 rounded-full -ml-8 -mb-8" />

        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 z-20 h-8 w-8 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10"
        >
          <X className="h-4 w-4" />
        </Button>

        {/* Content */}
        <div className="relative p-6 space-y-4">
          <h3
            id="design-rationale-title"
            className="text-lg font-semibold"
          >
            Why this interface is designed this way
          </h3>

          <p className="text-xs text-muted-foreground">
            Philosophy · Design rationale
          </p>

          <p className="text-sm text-muted-foreground">
            {data.intent}
          </p>

          <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
            {data.decisions.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <p className="text-sm italic text-muted-foreground opacity-80">
            Tradeoffs considered:
          </p>

          <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
            {data.tradeoffs.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground mt-4">
            This reflects how I design production systems — not demos.
          </p>
        </div>
      </div>
    </div>
  );
}
