"use client";

import { useState } from "react";
import { ArrowUpRight, Zap, BookOpen, Cloud, Play } from "lucide-react";

export default function ProjectCardStorygen() {
  const [promptIdx, setPromptIdx] = useState(0);

  const stories = [
    {
      prompt: "Generate a cyberpunk noir detective scene in Kuala Lumpur 2088 under neon rain...",
      genre: "Cyberpunk Noir",
      mood: "Atmospheric & Moody",
      synopsis:
        "The monolithic XMUM towers cast holographic shadows across the flooded streets of Sepang. Detective Malik adjusted his neural lens as the synthetic rain crackled against his trench coat...",
      imagePrompt: "Cyberpunk detective looking at holographic neon billboards in Kuala Lumpur rain, 8k cinematic",
    },
    {
      prompt: "Chronicle an interstellar navigation crisis near a dormant gravitational singularity...",
      genre: "Hard Sci-Fi",
      mood: "High Tension & Spatial",
      synopsis:
        "The reaction wheels shuddered as telemetry sirens filled the cockpit. Captain Zara glanced at the orbital decaying trajectory—they had only 90 seconds to calculate the escape burn...",
      imagePrompt: "Spaceship cockpit facing a massive glowing black hole accretion disk, photorealistic sci-fi",
    },
  ];

  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-purple-500/30 transition-all p-6 sm:p-8 space-y-6 relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-[11px] font-semibold tracking-wide">
            GENERATIVE AI &amp; MULTIMODAL
          </span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono text-[10px]">
            GROQ LLAMA + POLLINATIONS
          </span>
        </div>

        <a
          href="https://github.com/Yunussaid03/storygen-agent"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-purple-300 transition-colors bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/10"
        >
          <span>Repository</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Title & Problem Summary */}
      <div className="space-y-3">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Storygen Agent — Context-Aware Multimodal Storytelling Engine
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          An autonomous generative storytelling platform that pairs ultra-low-latency <span className="text-purple-300 font-medium">Groq LLaMA inference</span> for real-time narrative generation with dynamic scene illustration via <span className="text-purple-300 font-medium">Pollinations AI</span>, backed by Supabase user authentication and persistent cloud story history.
        </p>
      </div>

      {/* Split-Screen Studio Interactive Mockup */}
      <div className="rounded-xl border border-white/10 bg-[#06080D] p-5 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <span className="font-mono text-xs text-slate-300 uppercase font-semibold flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" /> Interactive Narrative Studio:
          </span>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded border border-purple-500/20">
            <Zap className="w-3 h-3 text-amber-400" />
            <span>480 Tokens/Sec via Groq LLaMA</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          {/* Prompt Console */}
          <div className="p-4 rounded-lg bg-[#0B0F17] border border-white/10 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>INFERENCE PROMPT CONSOLE</span>
                <span className="text-cyan-400">LLaMA 3.3 70B</span>
              </div>
              <p className="text-slate-200 text-xs sm:text-sm bg-black/60 p-3 rounded border border-white/5 leading-relaxed font-sans">
                &ldquo;{stories[promptIdx].prompt}&rdquo;
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>Genre: <span className="text-purple-300">{stories[promptIdx].genre}</span></span>
                <span>Mood: <span className="text-slate-300">{stories[promptIdx].mood}</span></span>
              </div>
              <button
                onClick={() => setPromptIdx((promptIdx + 1) % stories.length)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold transition-colors"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>Cycle Sample Narrative</span>
              </button>
            </div>
          </div>

          {/* Generated Narrative & Media Output */}
          <div className="p-4 rounded-lg bg-[#0B0F17] border border-purple-500/20 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] text-slate-400">
                <span>STREAMED CHAPTER OUTPUT</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <Cloud className="w-3 h-3" /> Supabase Synced
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed font-sans bg-black/40 p-3 rounded border border-white/5">
                {stories[promptIdx].synopsis}
              </p>
            </div>

            <div className="p-2.5 rounded bg-black/60 border border-white/5 text-[10px] space-y-1">
              <span className="text-slate-500 font-bold uppercase">Pollinations Visual Prompt:</span>
              <p className="text-slate-400 truncate font-mono">{stories[promptIdx].imagePrompt}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
        {["Python", "Streamlit", "Groq API (LLaMA)", "Pollinations AI", "Supabase Auth", "PostgreSQL", "Prompt Engineering"].map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
