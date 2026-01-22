"use client";

export default function ExplainInterfaceButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="
        mt-4
        inline-flex items-center gap-1
        rounded-full
        border border-border/50
        bg-background/70 backdrop-blur-sm
        px-3 py-1.5
        text-xs text-muted-foreground
        hover:text-primary hover:border-primary/50
        transition-all duration-300
      "
    >
      💡 Why this design?
    </button>
  );
}
