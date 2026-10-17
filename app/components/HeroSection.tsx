"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, ShieldCheck, Car, Globe, Sparkles } from "lucide-react";

export default function HeroSection() {
  const metrics = [
    {
      value: "57+ Vehicles",
      label: "B2B Fleet ERP Architecture",
      icon: Car,
      accent: "text-cyan-400",
      border: "border-cyan-500/20",
    },
    {
      value: "MBTMY 2026",
      label: "Mercedes-Benz Safety Edge AI",
      icon: ShieldCheck,
      accent: "text-amber-400",
      border: "border-amber-500/20",
    },
    {
      value: "Production Web",
      label: "Commercial Automotive & Fintech",
      icon: Globe,
      accent: "text-emerald-400",
      border: "border-emerald-500/20",
    },
    {
      value: "4 Languages",
      label: "English, Arabic, Swahili, Hindi",
      icon: Sparkles,
      accent: "text-purple-400",
      border: "border-purple-500/20",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] w-full flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-grid-pattern atmospheric-glow overflow-hidden"
    >
      <div className="max-w-5xl mx-auto w-full text-center relative z-10 space-y-8">
        {/* Top Telemetry Chip */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 bg-[#0B0F17] border border-cyan-500/30 rounded-full px-4 py-1.5 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="font-mono text-[11px] sm:text-xs font-medium tracking-wider text-cyan-300">
            FULL-STACK ENGINEER • AI INTEGRATOR • B2B SYSTEMS ARCHITECT
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Building{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Safety-Critical AI
            </span>
            ,<br className="hidden sm:inline" /> Enterprise ERPs, &{" "}
            <span className="text-white underline decoration-cyan-500/40 decoration-4 underline-offset-8">
              High-Impact Platforms
            </span>
            .
          </h1>

          <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 leading-relaxed font-normal pt-2">
            Hi, I&apos;m <span className="text-white font-semibold">Yunus Said Khaidum</span> — a Software Engineer &amp; Final-Year Computer Science student at Xiamen University Malaysia. I architect production-grade web systems, multi-tenant fleet ERPs, fintech payment pipelines, and autonomous AI agents designed to solve high-stakes operational problems.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <a
            href="#projects"
            className="group flex items-center gap-2 bg-cyan-400 hover:bg-cyan-300 text-black font-bold px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm shadow-[0_0_30px_rgba(0,240,255,0.35)] transition-all hover:scale-105"
          >
            <span>Explore Flagship Work</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href="https://github.com/Yunussaid03"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 bg-[#0B0F17] hover:bg-[#131B2A] text-slate-200 hover:text-white border border-white/10 hover:border-cyan-500/40 px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm transition-all"
          >
            <span>GitHub (@Yunussaid03)</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          <a
            href="https://www.klmw.my"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 bg-[#0B0F17] hover:bg-amber-950/20 text-amber-300 hover:text-amber-200 border border-amber-500/30 px-5 py-3.5 rounded-full font-mono text-xs sm:text-sm transition-all"
          >
            <span>klmw.my (Live Client Site)</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </motion.div>

        {/* Quick Proof Metrics Pills */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 max-w-4xl mx-auto"
        >
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.value}
                className={`flex flex-col items-center justify-center p-4 rounded-xl bg-[#0B0F17]/90 border ${m.border} backdrop-blur-sm hover:bg-[#121927] transition-colors`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className={`w-4 h-4 ${m.accent}`} />
                  <span className={`font-mono font-bold text-sm sm:text-base ${m.accent}`}>
                    {m.value}
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-400 text-center font-mono">
                  {m.label}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
