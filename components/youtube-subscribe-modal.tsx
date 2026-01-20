"use client";

import { useEffect, useState } from "react";

export default function YoutubeSubscribeModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("yt-ghibli-invite");

    if (!seen) {
      const timer = setTimeout(() => {
        setOpen(true);
        localStorage.setItem("yt-ghibli-invite", "true");
      }, 6000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center modal-backdrop">
      <div className="w-[92%] max-w-md rounded-3xl bg-[#f4edd6] px-6 py-5 text-center shadow-xl animate-modal">

        <h2 className="mb-3 text-xl font-semibold text-[#4a5d2f]">
          Stories that outlive noise
        </h2>

        <div className="mb-4 overflow-hidden rounded-2xl border border-[#d6cfae]">
          <iframe
            src="https://www.youtube.com/embed/12wmXz2LKio?list=PLMiwc8jT94saUc6ZIVd19dzOdtQixAzF4&rel=0&modestbranding=1"
            title="Mahabharata Stories – Babumoshai"
            className="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="mb-5 text-sm leading-relaxed text-[#5b5b3f]">
          If Indian mythology, Mahabharata, and quiet reflections on Dharma speak
          to you, this channel may feel like home.
          <br /><br />
          No noise. No shortcuts. Just stories worth remembering.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="https://www.youtube.com/@babumoshai_23?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#7a8f3a] px-6 py-2 text-sm text-white transition hover:scale-[1.03]"
          >
            Subscribe on YouTube 🙏🏼
          </a>

          <button
            onClick={() => setOpen(false)}
            className="text-sm text-[#6b6b4a] hover:underline"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
