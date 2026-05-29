"use client";

import { motion } from "framer-motion";
import AboutSection from "@/app/components/AboutSection";
import { Spotlight } from "@/app/components/Spotlight";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black text-white">
      <Spotlight className="absolute -top-40 left-0 md:left-60 md:-top-20" />

      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start justify-center px-6 py-20 sm:px-10 lg:px-16">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            className="max-w-6xl text-[clamp(4.75rem,18vw,10rem)] font-black uppercase leading-[0.92] tracking-[-0.08em] text-white"
          >
            SYSTEMS ENGINEER
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
          className="mt-6 flex flex-col gap-1"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.22 }}
            className="text-base text-neutral-400 sm:text-xl"
          >
            Bridging B2C Agility
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.32 }}
            className="text-base text-neutral-400 sm:text-xl"
          >
            with Enterprise Integrity.
          </motion.p>
        </motion.div>
      </section>

      <AboutSection />
    </main>
  );
}
