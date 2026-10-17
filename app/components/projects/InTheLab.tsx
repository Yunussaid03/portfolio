"use client";

import ProjectCardKettyFleet from "./ProjectCardKettyFleet";
import ProjectCardOmniExtract from "./ProjectCardOmniExtract";
import { FlaskConical } from "lucide-react";

export default function InTheLab() {
  return (
    <section id="lab" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>TIER 2 — IN THE LAB (ONGOING R&amp;D PROJECTS)</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Active Production Architecture &amp; AI Systems
        </h2>
        <p className="text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          Currently under active engineering. Rather than relying on generic mockups, each project features live simulated architecture widgets that expose the data pipelines, business logic, and backend contracts running under the hood.
        </p>
      </div>

      {/* Lab Cards Container */}
      <div className="space-y-8">
        <ProjectCardKettyFleet />
        <ProjectCardOmniExtract />
      </div>
    </section>
  );
}
