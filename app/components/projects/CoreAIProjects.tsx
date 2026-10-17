"use client";

import ProjectCardStorygen from "./ProjectCardStorygen";
import ProjectCardPageReplacement from "./ProjectCardPageReplacement";
import { Cpu } from "lucide-react";

export default function CoreAIProjects() {
  return (
    <section id="systems" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 font-mono text-xs">
          <Cpu className="w-3.5 h-3.5" />
          <span>TIER 3 — SYSTEMS PROGRAMMING &amp; AI ENGINES</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Algorithmic R&amp;D &amp; Generative Intelligence
        </h2>
        <p className="text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          Low-latency inference pipelines, operating system virtual memory optimizations, and agentic workflows.
        </p>
      </div>

      {/* Systems Cards Container */}
      <div className="space-y-8">
        <ProjectCardStorygen />
        <ProjectCardPageReplacement />
      </div>
    </section>
  );
}
