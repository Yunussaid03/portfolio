"use client";

import { GraduationCap, MapPin, Languages } from "lucide-react";

export default function AboutSectionDevHQ() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="glass-card p-8 sm:p-12 space-y-8">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          About Me - <span className="orange-text">Behind The Code!</span>
        </h2>

        {/* Narrative Copy */}
        <div className="space-y-5 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
          <p>
            I am a <strong className="text-white">Final-Year Computer Science and Technology student</strong> at Xiamen University Malaysia (School of Computing and Data Science). My engineering journey is driven by solving real operational bottlenecks—from building safety-critical AI watchdogs for Mercedes-Benz infotainment clusters to architecting enterprise cloud ERPs managing 57-vehicle commercial fleets.
          </p>

          <p>
            I thrive at the intersection of robust backend system architecture and high-conversion web platforms. Whether it&apos;s integrating Safaricom M-Pesa STK push payments, optimizing virtual memory page replacement simulations, or orchestrating low-latency multimodal LLM pipelines, I focus on clean code, dependable uptime, and measurable impact.
          </p>

          <p>
            Beyond the keyboard, you&apos;ll find me on the Friday night futsal court, progressive overload training in the gym, developing automated Fantasy Premier League prediction models, or practicing cardistry.
          </p>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono text-xs">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <GraduationCap className="w-5 h-5 text-orange-400 shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">EDUCATION</div>
              <div className="text-white font-bold">B.Sc. CS @ XMUM</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <MapPin className="w-5 h-5 text-orange-400 shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">LOCATION</div>
              <div className="text-white font-bold">Kuala Lumpur / Remote</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
            <Languages className="w-5 h-5 text-orange-400 shrink-0" />
            <div>
              <div className="text-slate-400 text-[10px]">LANGUAGES</div>
              <div className="text-white font-bold">English, Arabic, Swahili, Hindi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
