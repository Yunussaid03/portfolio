"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section id="experience" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Falling snowflakes background */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`snowflake-${i}`}
            className="snowflake absolute text-2xl text-white/60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `snowfall ${8 + Math.random() * 6}s linear infinite`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Title */}
          <div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(3.5rem,12vw,7rem)] font-black uppercase leading-[0.9] tracking-[-0.08em] text-white"
            >
              <span className="text-orange-400">SOFTWARE</span>
              <br />
              <span className="text-white">DEVELOPER</span>
            </motion.h2>
          </div>

          {/* Intro Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl space-y-4"
          >
            <p className="text-lg text-neutral-300 sm:text-xl">
              Hi! I'm <span className="font-semibold text-white">Yunus</span>. A software developer focused on building clean interfaces, reliable systems, and practical products that users actually need.
            </p>
            <p className="text-base text-neutral-400 sm:text-lg">
              I work across frontend and backend, with a passion for smooth user experiences and code that's easy to maintain. Always learning, always shipping.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#projects"
              className="inline-block rounded-lg bg-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-[0.24em] text-black transition-all hover:bg-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}