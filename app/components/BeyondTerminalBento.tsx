"use client";

import { Trophy, Dumbbell, Bot, Target, Sparkles } from "lucide-react";

export default function BeyondTerminalBento() {
  return (
    <section id="beyond" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
          <Trophy className="w-3.5 h-3.5" />
          <span>OFF-SCREEN / PLAYER STATS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Beyond the Terminal
        </h2>
        <p className="text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          Discipline in physical performance, quantitative sports modeling, and strategic recreation directly informs how I build high-intensity engineering systems.
        </p>
      </div>

      {/* 5-Tile Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Tile 1: Futsal (Spans 2 cols on md) */}
        <div className="md:col-span-2 p-6 sm:p-7 rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-emerald-500/30 transition-all space-y-4 relative overflow-hidden group">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            ⚽
          </div>
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">
              Weekly Field Operations
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Pitch &amp; Friday Futsal
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Every Friday night on the court or pitch. High-tempo pressing, quick spatial awareness, tactical transitions, and team chemistry under pressure.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px] text-slate-400">
            <span className="px-2.5 py-1 rounded bg-black/60 border border-white/5">Midfield Engine</span>
            <span className="px-2.5 py-1 rounded bg-black/60 border border-white/5">Spatial Awareness</span>
            <span className="px-2.5 py-1 rounded bg-black/60 border border-white/5">High Tempo</span>
          </div>
        </div>

        {/* Tile 2: Strength & Hypertrophy */}
        <div className="md:col-span-1 lg:col-span-2 p-6 sm:p-7 rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-amber-500/30 transition-all space-y-4 relative overflow-hidden group">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Dumbbell className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider">
              Discipline &amp; Nutrition
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Strength &amp; Hypertrophy
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Consistent progressive overload weightlifting paired with disciplined high-protein meal prep (air-fried chicken, pilau, Jollof rice). Relentless consistency.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px] text-slate-400">
            <span className="px-2.5 py-1 rounded bg-black/60 border border-white/5">Progressive Overload</span>
            <span className="px-2.5 py-1 rounded bg-black/60 border border-white/5">High-Protein Fuel</span>
          </div>
        </div>

        {/* Tile 3: Kingsman FPL Analytics (Spans 2 cols on lg) */}
        <div className="md:col-span-2 p-6 sm:p-7 rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-cyan-500/30 transition-all space-y-4 relative overflow-hidden group">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Bot className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-cyan-400 font-bold uppercase tracking-wider">
              Quantitative Sports Modeling
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Kingsman FPL Telegram Agent
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Engineered a custom automated Telegram assistant (`Kingsman`) integrating Pipedream workflows, live Premier League APIs, and LLMs to model expected goal involvement (xGI), fixture difficulty swings, and differential captaincy predictions.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px] text-slate-400">
            <span className="px-2.5 py-1 rounded bg-black/60 border border-white/5">Telegram Bot API</span>
            <span className="px-2.5 py-1 rounded bg-black/60 border border-white/5">Pipedream Automation</span>
            <span className="px-2.5 py-1 rounded bg-black/60 border border-white/5">Statistical Modeling</span>
          </div>
        </div>

        {/* Tile 4: Tactical Precision (Chess & 8-Ball Pool) */}
        <div className="md:col-span-1 p-6 rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-purple-500/30 transition-all space-y-4">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <Target className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-wider">
              Calculation
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Tactical Precision
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Geometric angles on the 8-ball pool table and multi-move tactical combinations on the chessboard.
            </p>
          </div>
          <div className="font-mono text-[11px] text-purple-300">
            8-Ball Pool • Chess Tactics
          </div>
        </div>

        {/* Tile 5: Competitive Gaming & Cardistry */}
        <div className="md:col-span-1 p-6 rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-rose-500/30 transition-all space-y-4">
          <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="space-y-1.5">
            <span className="font-mono text-xs text-rose-400 font-bold uppercase tracking-wider">
              Dexterity &amp; Reflexes
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Gaming &amp; Cardistry
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              High-APM competitive football simulations (`eFootball`) and practicing sleight-of-hand card flourishes.
            </p>
          </div>
          <div className="font-mono text-[11px] text-rose-300">
            Sleight-of-Hand • High APM
          </div>
        </div>
      </div>
    </section>
  );
}
