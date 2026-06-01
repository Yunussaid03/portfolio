"use client";

import { motion } from "framer-motion";
import IntroSection from "@/app/components/IntroSection";
import AboutSection from "@/app/components/AboutSection";
import ProjectGrid from "@/app/components/ProjectGrid";
import { Spotlight } from "@/app/components/Spotlight";
import TerminalFooter from "@/app/components/TerminalFooter";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Full Hero Section */}
      <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
        <Spotlight className="absolute inset-0" />
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="text-[clamp(6rem,20vw,12rem)] font-black uppercase leading-[0.9] tracking-[-0.08em] text-white"
            >
              <span className="bg-linear-to-r from-white via-orange-400 to-white bg-clip-text text-transparent">
                YUNUS
              </span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mt-6 text-lg text-neutral-400 sm:text-xl"
          >
            Scroll to explore
          </motion.p>
        </div>
      </section>

      {/* Intro Section with Developer Title */}
      <IntroSection />
      <AboutSection />
      <ProjectGrid />
      <TerminalFooter />
    </main>
  );
}
