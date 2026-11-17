"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Command, CornerDownLeft, Search, Sparkles } from "lucide-react";
import { useMode } from "@/app/context/mode-context";
import { LENSES, useLens } from "@/app/context/lens-context";
import { askKnowledge } from "@/app/data/knowledge";

type Item = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  run: () => void;
};

const SECTIONS: [string, string][] = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Philosophy", "Philosophy"],
  ["Experiences", "experiences"],
  ["Contact", "contact"],
];

const SUGGESTIONS = [
  "What is his strongest tech stack?",
  "Has he worked on high traffic systems?",
  "Any GenAI experience?",
];

export default function CommandPalette() {
  const { mode, toggleMode, isDesktop } = useMode();
  const { lens, setLens } = useLens();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  const go = useCallback(
    (id: string) => {
      close();
      // wait for the overlay to unmount so scrolling isn't interrupted
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    },
    [close]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 30);
  }, [open]);

  const items = useMemo<Item[]>(() => {
    const q = query.trim().toLowerCase();
    const actions: Item[] = [
      ...SECTIONS.map(([label, id]) => ({
        id: `go-${id}`,
        label: `Go to ${label}`,
        group: "Navigate",
        run: () => go(id),
      })),
      ...(isDesktop
        ? [
            {
              id: "toggle-mode",
              label: `Switch to ${mode === "story" ? "Technical" : "Narrative"} mode`,
              group: "Actions",
              run: () => {
                toggleMode();
                close();
              },
            },
          ]
        : []),
      ...LENSES.map((l) => ({
        id: `lens-${l.id}`,
        label: lens === l.id ? `Stop viewing as ${l.label}` : `View as ${l.label}`,
        hint: l.blurb,
        group: "Actions",
        run: () => {
          setLens(lens === l.id ? null : l.id);
          go("projects");
        },
      })),
      {
        id: "github",
        label: "Open GitHub",
        group: "Actions",
        run: () => {
          window.open("https://github.com/popeye1235", "_blank");
          close();
        },
      },
    ];

    if (!q) return actions;

    const matched = actions.filter((a) => a.label.toLowerCase().includes(q));
    const answers: Item[] = askKnowledge(query).map((k) => ({
      id: `ask-${k.id}`,
      label: k.title,
      hint: k.answer,
      group: "Ask Sudip",
      run: () => go(k.section),
    }));
    // commands you typed the name of come first; Ask answers follow
    return [...matched, ...answers];
  }, [query, mode, isDesktop, toggleMode, close, go, lens, setLens]);

  useEffect(() => setActive(0), [query]);

  const onInputKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, items.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      items[active]?.run();
    }
  };

  let lastGroup = "";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Open command palette"
        className="fixed bottom-6 left-6 z-40 hidden sm:flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur-sm px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer"
      >
        <Sparkles className="h-3.5 w-3.5" />
        Ask or jump
        <kbd className="ml-1 flex items-center gap-0.5 rounded border border-border px-1.5 py-0.5 text-[10px]">
          <Command className="h-2.5 w-2.5" />K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 backdrop-blur-sm px-4 pt-[15vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Command palette"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -12, scale: 0.97 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: -12, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
              className="w-full max-w-xl overflow-hidden rounded-xl border border-border/50 bg-background shadow-xl"
            >
              <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onInputKey}
                  placeholder="Ask about Sudip, or jump to a section…"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px] text-muted-foreground">
                  esc
                </kbd>
              </div>

              <div className="max-h-[50vh] overflow-y-auto p-2">
                {!query && (
                  <div className="flex flex-wrap gap-2 px-2 pb-2 pt-1">
                    {SUGGESTIONS.map((s) => (
                      <button
                        key={s}
                        onClick={() => setQuery(s)}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-pointer"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                {items.length === 0 && (
                  <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                    Nothing matched. Try “React”, “AI”, “PhysicsWallah” or “contact”.
                  </p>
                )}

                {items.map((item, i) => {
                  const showGroup = item.group !== lastGroup;
                  lastGroup = item.group;
                  return (
                    <div key={item.id}>
                      {showGroup && (
                        <p className="px-3 pb-1 pt-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                          {item.group}
                        </p>
                      )}
                      <button
                        onMouseEnter={() => setActive(i)}
                        onClick={item.run}
                        className={`flex w-full items-start gap-3 rounded-lg px-3 py-2 text-left transition-colors cursor-pointer ${
                          i === active ? "bg-primary/10" : ""
                        }`}
                      >
                        <span className="flex-1">
                          <span className="block text-sm font-medium">{item.label}</span>
                          {item.hint && (
                            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                              {item.hint}
                            </span>
                          )}
                        </span>
                        {i === active && (
                          <CornerDownLeft className="mt-1 h-3.5 w-3.5 text-muted-foreground" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
