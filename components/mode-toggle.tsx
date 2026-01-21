"use client";

import { useMode } from "@/app/context/mode-context";
import { motion } from "framer-motion";

export default function ModeToggle() {
  const { mode, toggleMode } = useMode();

  return (
    <motion.button
      onClick={toggleMode}
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.04 }}
      initial={false}
      animate={{
        boxShadow:
          mode === "story"
            ? "0 0 0 2px rgba(122,143,58,0.35)"
            : "0 0 0 2px rgba(0,0,0,0.15)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        hidden lg:flex
        fixed top-6 right-6 z-40
        items-center gap-2
        rounded-full border border-border
        bg-background/80 backdrop-blur-sm
        px-5 py-2
        text-xs font-medium tracking-wide
        text-muted-foreground hover:text-primary
        transition-colors duration-300
        cursor-pointer
      "
    >
      {/* subtle dot indicator */}
      <span
        className={`
          h-2 w-2 rounded-full transition-colors duration-300
          ${mode === "story" ? "bg-primary" : "bg-muted-foreground/40"}
        `}
      />

      {mode === "story" ? "Narrative Mode" : "Technical Mode"}
    </motion.button>
  );
}
