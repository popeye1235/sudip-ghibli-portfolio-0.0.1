// Single source of truth for SEO. Set NEXT_PUBLIC_SITE_URL on Vercel if you add a custom domain.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://sudip-ghibli-portfolio.vercel.app"
).replace(/\/$/, "");

export const SITE = {
  name: "Sudip Mishra",
  title: "Sudip Mishra | Frontend Engineer",
  description:
    "Frontend engineer with 4+ years building scalable, production-grade web apps with React, Next.js and Angular. Fintech, EdTech and GenAI products: SSFL collections platform, AskCN AI data assistant, and metadata-driven UIs.",
  keywords: [
    "Sudip Mishra",
    "Mishra Sudip",
    "babumoshai_023",
    "babumoshai23",
    "Babumoshai",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "Portfolio",
    "GenAI",
    "Credit Nirvana",
    "PhysicsWallah",
    "Bengaluru",
  ],
  // other names and handles people may search for
  alternateNames: ["Mishra Sudip", "Babumoshai", "babumoshai_023", "babumoshai23", "mishra.sudip.23"],
  sameAs: [
    "https://github.com/popeye1235",
    "https://www.linkedin.com/in/sudip-mishra-11b93013a/",
    "https://x.com/babumosai_23",
    "https://www.instagram.com/babumoshai_023/",
    "https://www.youtube.com/@mishra.sudip.23",
  ],
};
