"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Spotlight } from "./Spotlight";

const projects = [
  {
    title: "_01. STORYGEN AGENT",
    copy:
      "AI-powered storytelling engine. Intelligent agent system for generating dynamic narratives with context-awareness and real-time adaptation.",
    repo: "https://github.com/Yunussaid03/storygen-agent",
  },
  {
    title: "_02. ALGORITHM OPTIMIZATION ENGINE",
    copy:
      "Performance-critical algorithm optimization toolkit. Benchmarking and optimization strategies for computational efficiency.",
    repo: "https://github.com/Yunussaid03/algorithm-optimization-engine",
  },
  {
    title: "_03. STUDYTRACK",
    copy:
      "Educational productivity platform. Smart study session tracking with analytics and personalized learning recommendations (In Progress).",
    repo: "https://github.com/Yunussaid03/studytrack",
  },
  {
    title: "_04. UNIWALLET",
    copy:
      "B2C Fintech infrastructure. Scalable full-stack architecture utilizing React Native, Prisma, SQL, and Node.js (In Progress).",
    repo: "https://github.com/Yunussaid03/uniwallet",
  },
];

export default function ProjectGrid() {
  return (
    <section id="projects" className="relative w-full bg-black text-white">
      <Spotlight className="absolute inset-0" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-0 md:grid-cols-2">
        {projects.map((project) => (
          <motion.a
            key={project.title}
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            initial={false}
            whileHover={{ backgroundColor: "rgb(23 23 23)" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="group cursor-pointer border-t border-neutral-800 px-6 py-10 transition-colors duration-200 hover:bg-neutral-900 md:px-8 lg:px-10"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-4">
                <p className="text-[0.72rem] uppercase tracking-[0.35em] text-neutral-500">
                  PROJECT
                </p>
                <h3 className="max-w-xs text-[clamp(2.4rem,6vw,4rem)] font-black uppercase leading-[0.95] tracking-[-0.08em] text-white">
                  {project.title}
                </h3>
              </div>

              <motion.div
                className="mt-2 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-700 bg-white/5 text-white"
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <ArrowUpRight className="h-5 w-5" />
              </motion.div>
            </div>

            <p className="mt-6 max-w-md text-base text-neutral-300 sm:text-lg">
              {project.copy}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
