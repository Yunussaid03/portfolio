"use client";

import { Code2, Layout, Database, Sparkles, Server } from "lucide-react";

export default function TechStackMatrix() {
  const categories = [
    {
      title: "Languages & Core",
      icon: Code2,
      accent: "text-cyan-400",
      border: "border-cyan-500/20",
      skills: ["TypeScript", "JavaScript (ES6+)", "Python", "PHP 8", "C++", "SQL (PostgreSQL / MySQL)"],
    },
    {
      title: "Frontend & Interfaces",
      icon: Layout,
      accent: "text-blue-400",
      border: "border-blue-500/20",
      skills: ["Next.js (App Router)", "React 18 / 19", "Tailwind CSS v4", "Framer Motion", "Shadcn UI", "Leaflet.js GIS"],
    },
    {
      title: "Backend & Systems",
      icon: Server,
      accent: "text-emerald-400",
      border: "border-emerald-500/20",
      skills: ["Express.js", "Node.js", "REST API Design", "Authentication & JWT", "IntaSend M-Pesa Webhooks", "Multi-Tenant Architecture"],
    },
    {
      title: "AI & Multimodal Agents",
      icon: Sparkles,
      accent: "text-purple-400",
      border: "border-purple-500/20",
      skills: ["Google Gemini API", "Groq LLaMA Inference", "Multimodal Ingestion", "Agentic Workflows", "Prompt Architecture", "Context Memory"],
    },
    {
      title: "Databases & Cloud Edge",
      icon: Database,
      accent: "text-amber-400",
      border: "border-amber-500/20",
      skills: ["PostgreSQL", "Supabase", "SQLite (better-sqlite3)", "Cloudflare DNS & Caching", "Vercel", "Git & GitHub"],
    },
  ];

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
          <Code2 className="w-3.5 h-3.5" />
          <span>TECHNICAL TELEMETRY</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Tools, Languages &amp; Production Stack
        </h2>
        <p className="text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          Technologies utilized across safety-critical edge hackathons, commercial client platforms, and high-throughput B2B systems.
        </p>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className={`p-6 rounded-2xl bg-[#0B0F17] border ${cat.border} hover:border-cyan-500/40 transition-all space-y-4`}
            >
              <div className="flex items-center gap-2.5 border-b border-white/5 pb-3">
                <Icon className={`w-5 h-5 ${cat.accent}`} />
                <h3 className="font-mono text-sm font-bold text-white tracking-wide">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg bg-black/60 border border-white/5 font-mono text-xs text-slate-300 hover:text-white hover:border-white/20 transition-all"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
