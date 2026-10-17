"use client";

import ProjectCardMBUX from "./ProjectCardMBUX";
import ProjectCardKLMW from "./ProjectCardKLMW";
import ProjectCardCampusRelay from "./ProjectCardCampusRelay";
import { Sparkles } from "lucide-react";

export default function FlagshipProjects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TIER 1 — FLAGSHIP PRODUCTION &amp; HACKATHONS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Battle-Tested Engineering &amp; Commercial Work
        </h2>
        <p className="text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          High-stakes systems engineered for live commercial users and competitive automotive edge challenges. Every case study features interactive telemetry, real problem constraints, and production architecture.
        </p>
      </div>

      {/* Flagship Cards Container */}
      <div className="space-y-8">
        <ProjectCardMBUX />
        <ProjectCardKLMW />
        <ProjectCardCampusRelay />
      </div>
    </section>
  );
}
