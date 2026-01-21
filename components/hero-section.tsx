// "use client";

// import React, { useEffect, useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   ArrowLeft,
//   ArrowRight,
//   Github,
//   Instagram,
//   Linkedin,
//   Twitter,
// } from "lucide-react";
// import Image from "next/image";
// import { MaskedImage } from "@/components/ui/masked-image";
// import { motion } from "framer-motion";
// import { useMode } from "@/app/context/mode-context";

// // FlipImage Component — Desktop Only
// const FlipImage = () => {
//   const images = [
//     "https://res.cloudinary.com/dwbwiwduw/image/upload/v1744278926/ghibli-dam_dus3zq.png",
//     "https://res.cloudinary.com/dwbwiwduw/image/upload/v1747289556/IMG_8294_lsvxag.jpg",
//   ];

//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <div className="relative w-full h-full flex items-center justify-center">
//       {images.map((img, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] aspect-[3/5]"
//           animate={{
//             rotateY: i === index ? 0 : 180,
//             opacity: i === index ? 1 : 0,
//             zIndex: i === index ? 1 : 0,
//           }}
//           initial={false}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           style={{ backfaceVisibility: "hidden" }}
//         >
//           <MaskedImage
//             src={img}
//             alt={`Sudip Mishra ${i}`}
//             variant="shape3"
//             fill
//             className="rounded-sm"
//           />
//         </motion.div>
//       ))}
//     </div>
//   );
// };

// const HeroSection = () => {
//   const { mode } = useMode();
// console.log("MODE:", mode);

//   const handleSmoothScroll = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <>
//       <section
//         id="home"
//         className="min-h-screen flex flex-col lg:flex-row overflow-hidden"
//       >
//         {/* Left Side Content */}
//         <div className="w-full lg:w-1/2 bg-background flex items-center order-2 lg:order-1 px-6 py-12 lg:py-0">
//           <div className="max-w-xl mx-auto space-y-8">
//             <div className="space-y-2">
//               <h2 className="text-xl text-primary font-medium">
//                 Frontend Developer
//               </h2>
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
//                 Hi, I&apos;m <span className="text-primary">Mishra Sudip</span>
//               </h1>
//             </div>

//             {/* <p className="text-xl text-muted-foreground leading-relaxed">
//               Like painting with light and structure, I shape interfaces that
//               feel alive — blending art with logic, emotion with interaction. My
//               code tells stories, and every UI is a quiet spell cast with
//               intention 🖌️ 🌿.
//             </p> */}

// <p className="text-xl text-muted-foreground leading-relaxed">
//   {mode === "story"
//     ? "Like painting with light and structure, I shape interfaces that feel alive — blending art with logic, emotion with interaction. My code tells stories, and every UI is a quiet spell cast with intention 🖌️ 🌿."
//     : "Frontend engineer focused on building accessible, performant interfaces using React, Next.js, and modern UI systems. I care deeply about architecture, maintainability, and user experience trade-offs."}
// </p>


//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4 pt-4">
//               <Button className="gap-2 px-6 py-6 text-base rounded-full">
//                 <ArrowLeft size={18} />
//                 <a
//                   href="https://drive.google.com/file/d/1sEXnyQiHNuWy7m-6vBllSoWePs1QxAtQ/view?usp=sharing"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   See Resume
//                 </a>
//               </Button>
//               <Button className="gap-2 px-6 py-6 text-base rounded-full">
//                 <a
//                   href="#projects"
//                   onClick={() => handleSmoothScroll("projects")}
//                 >
//                   View Projects
//                 </a>
//                 <ArrowRight size={18} />
//               </Button>
//               <div className="hidden sm:flex items-center gap-3">
//                 <a href="https://github.com/popeye1235" target="_blank" rel="noopener noreferrer">
//                   <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 cursor-pointer">
//                     <Github size={22} />
//                   </Button>
//                 </a>
//                 <a href="https://www.linkedin.com/in/sudip-mishra-11b93013a/" target="_blank" rel="noopener noreferrer">
//                   <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 cursor-pointer">
//                     <Linkedin size={22} />
//                   </Button>
//                 </a>
//                 <a href="https://x.com/babumosai_23" target="_blank" rel="noopener noreferrer">
//                   <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 cursor-pointer">
//                     <Twitter size={22} />
//                   </Button>
//                 </a>
//                 <a href="https://www.instagram.com/babumoshai_023/" target="_blank" rel="noopener noreferrer">
//                   <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 cursor-pointer">
//                     <Instagram size={22} />
//                   </Button>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side Image Section */}
//         <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen order-1 lg:order-2 relative">
//           {/* Desktop - Flipping image */}
//           <div className="hidden lg:block w-full h-full">
//             <FlipImage />
//           </div>

//           {/* Mobile - Static Ghibli image */}
//           <div className="block lg:hidden w-full h-full relative">
//             <Image
//               priority
//               src="https://res.cloudinary.com/dwbwiwduw/image/upload/v1744278926/ghibli-dam_dus3zq.png"
//               alt="Sudip Mishra"
//               fill
//               sizes="(max-width: 768px) 100vw"
//               className="object-cover rounded-lg"
//             />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default HeroSection;

"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { MaskedImage } from "@/components/ui/masked-image";
import { motion } from "framer-motion";
import { useMode } from "@/app/context/mode-context";


const DESKTOP_COPY = {
  story: {
    role: "Website Craftsman ✍️ • Storyteller at Heart 🌿",
    name: "Babumoshai 🌾",
    description: (
      <>
        Like painting with light and structure 🎨, I shape interfaces that feel
        alive — blending art with logic, emotion with interaction.
        <br />
        My code tells stories 📖, and every UI is a quiet spell cast with
        intention 🖌️🌿.
      </>
    ),
    primaryCTA: "Read My Journey 📜",
    secondaryCTA: "Explore Creations ✨",
  },

  technical: {
    role: "Frontend Engineer 💻",
    name: "Mishra Sudip",
    description: (
      <>
        Frontend engineer with 3.5+ years of experience building scalable,
        production-grade web applications ⚙️ using React, Next.js, and Angular.
        <br />
        Strong focus on performance optimization, SSR, design systems, and
        real-world UX trade-offs. Comfortable working with Node.js, Java,
        REST APIs, and cross-functional teams 🧠.
      </>
    ),
    primaryCTA: "View Resume 📄",
    secondaryCTA: "View Projects 🚀",
  },
};

const MOBILE_COPY = {
  role: "Frontend Developer 💻",
  name: "Mishra Sudip",
  description: (
    <>
      Frontend engineer focused on building accessible, performant interfaces
      using React, Next.js, and modern UI systems.
      <br />
      I care deeply about clean architecture, maintainability, and practical
      UI/UX ⚙️.
    </>
  ),
  primaryCTA: "View Resume 📄",
  secondaryCTA: "View Projects 🚀",
};

const FlipImage = () => {
  const images = [
    "https://res.cloudinary.com/dwbwiwduw/image/upload/v1744278926/ghibli-dam_dus3zq.png",
    "https://res.cloudinary.com/dwbwiwduw/image/upload/v1747289556/IMG_8294_lsvxag.jpg",
    // "https://res.cloudinary.com/dwbwiwduw/image/upload/v1768996347/popeye_sij9wt.jpg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {images.map((img, i) => (
        <motion.div
          key={i}
          className="absolute w-full max-w-[500px] aspect-[3/5]"
          animate={{
            rotateY: i === index ? 0 : 180,
            opacity: i === index ? 1 : 0,
            zIndex: i === index ? 1 : 0,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ backfaceVisibility: "hidden" }}
        >
          <MaskedImage src={img} alt="Profile" fill variant="shape3" />
        </motion.div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  const { mode } = useMode();
  const desktopContent =
    DESKTOP_COPY[mode === "story" ? "story" : "technical"];

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col lg:flex-row overflow-hidden"
    >
  
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen relative order-1 lg:order-2">
        {/* Desktop */}
        <div className="hidden lg:block w-full h-full">
          <FlipImage />
        </div>

        {/* Mobile (unchanged position) */}
        <div className="lg:hidden w-full h-full relative">
          <Image
            src="https://res.cloudinary.com/dwbwiwduw/image/upload/v1744278926/ghibli-dam_dus3zq.png"
            alt="Profile"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover rounded-lg"
          />
        </div>
      </div>


      <div className="w-full lg:w-1/2 flex items-center px-6 py-12 order-2 lg:order-1">
        <div className="max-w-xl mx-auto space-y-8">

          <div className="lg:hidden space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl text-primary font-medium">
                {MOBILE_COPY.role}
              </h2>
              <h1 className="text-4xl font-bold tracking-tight">
                Hi, I’m{" "}
                <span className="text-primary">{MOBILE_COPY.name}</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {MOBILE_COPY.description}
            </p>

            <div className="flex flex-col gap-4 pt-2">
              <Button className="gap-2 px-6 py-6 rounded-full">
                <ArrowLeft size={18} />
                <a
                  href="https://drive.google.com/file/d/1sEXnyQiHNuWy7m-6vBllSoWePs1QxAtQ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {MOBILE_COPY.primaryCTA}
                </a>
              </Button>

              <Button
                className="gap-2 px-6 py-6 rounded-full"
                onClick={() => handleScroll("projects")}
              >
                {MOBILE_COPY.secondaryCTA}
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          <div className="hidden lg:block space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl text-primary font-medium">
                {desktopContent.role}
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I’m{" "}
                <span className="text-primary">{desktopContent.name}</span>
              </h1>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {desktopContent.description}
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Button className="gap-2 px-6 py-6 rounded-full">
                <ArrowLeft size={18} />
                <a
                  href="https://drive.google.com/file/d/1sEXnyQiHNuWy7m-6vBllSoWePs1QxAtQ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {desktopContent.primaryCTA}
                </a>
              </Button>

              <Button
                className="gap-2 px-6 py-6 rounded-full"
                onClick={() => handleScroll("projects")}
              >
                {desktopContent.secondaryCTA}
                <ArrowRight size={18} />
              </Button>

              <div className="flex items-center gap-3">
                <Button asChild variant="ghost" size="icon">
                  <a href="https://github.com/popeye1235" target="_blank">
                    <Github size={22} />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="https://www.linkedin.com/in/sudip-mishra-11b93013a/" target="_blank">
                    <Linkedin size={22} />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="https://x.com/babumosai_23" target="_blank">
                    <Twitter size={22} />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="https://www.instagram.com/babumoshai_023/" target="_blank">
                    <Instagram size={22} />
                  </a>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
