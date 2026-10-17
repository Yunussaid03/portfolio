"use client";

import { Eye } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectsDevHQ() {
  const projects = [
    {
      date: "OCT-2026",
      tag: "Mercedes-Benz Vibathon 2026",
      title: "MBUX Shadow AI",
      category: "Safety-Critical Edge AI",
      description:
        "Zero-distraction automotive watchdog embedded into the MBUX infotainment cluster. Monitors vehicle telemetry spikes and triggers background graceful degradation so vital Mapbox navigation and speed gauges never freeze at high speeds.",
      liveUrl: "https://github.com/jjibrah/MercedesBenzVibathon",
      githubUrl: "https://github.com/jjibrah/MercedesBenzVibathon",
      isLiveAvailable: true,
      liveLabel: "View Demo",
      tech: ["React 19", "Vite", "Tailwind CSS", "Mapbox GL", "Web Speech API", "Edge Watchdog"],
    },
    {
      date: "SEP-2026",
      tag: "Live Commercial Production",
      title: "KL Motoren Werke",
      category: "Continental Automotive Platform",
      description:
        "End-to-end commercial web platform for KL Motoren Werke Sdn Bhd (Kuala Lumpur independent specialist for BMW, Mercedes, Porsche, Audi). Features a 12-category pricing matrix, corporate fleet pipeline, and Cloudflare edge caching.",
      liveUrl: "https://www.klmw.my",
      githubUrl: "https://github.com/Yunussaid03",
      isLiveAvailable: true,
      liveLabel: "View Live (klmw.my)",
      tech: ["HTML5/JS", "Cloudflare DNS", "Edge Caching", "WhatsApp Conversion API", "SEO Schema"],
    },
    {
      date: "AUG-2026",
      tag: "XMUM Campus Ecosystem",
      title: "CampusRelay",
      category: "Geospatial P2P Mobility",
      description:
        "Two-sided peer-to-peer campus vehicle rental marketplace for Xiamen University Malaysia. Features dual-console role switching (Student vs Lender), interactive Leaflet.js campus browse maps, and encrypted physical lock-box code reveals upon payment.",
      liveUrl: "https://github.com/Yunussaid03/campusrelay",
      githubUrl: "https://github.com/Yunussaid03/campusrelay",
      isLiveAvailable: true,
      liveLabel: "View Repository",
      tech: ["PHP 8", "MySQL", "JavaScript ES6+", "Leaflet.js", "OpenStreetMap GIS", "Encrypted Locks"],
    },
    {
      date: "JUL-2026",
      tag: "57-Vehicle Commercial Fleet",
      title: "Fleet Management ERP",
      category: "Multi-Tenant Enterprise System",
      description:
        "Full-stack B2B Enterprise Resource Planning system for a commercial fleet operator in Kenya managing 57 vehicles. Replaced paper logbooks with automated booking workflows, mobile pre/post inspection photo logs, and real-time fleet turnaround tracking.",
      liveUrl: "https://github.com/Yunussaid03/kettyfleet",
      githubUrl: "https://github.com/Yunussaid03/kettyfleet",
      isLiveAvailable: true,
      liveLabel: "View System",
      tech: ["TypeScript", "React 18", "Supabase", "PostgreSQL", "Tailwind CSS", "React Query"],
    },
    {
      date: "JUN-2026",
      tag: "Multimodal AI Microservice",
      title: "OmniExtract AI",
      category: "Document & Media Ingestion",
      description:
        "Intelligent document pipeline transforming unstructured multi-format inputs (PDF invoices, voice notes, fuel receipts) into validated relational database entities and real-time Google Sheets sync using Google Gemini multimodal AI.",
      liveUrl: "https://github.com/Yunussaid03/omniextract-ai",
      githubUrl: "https://github.com/Yunussaid03/omniextract-ai",
      isLiveAvailable: true,
      liveLabel: "View Pipeline",
      tech: ["TypeScript", "Express.js", "Google Gemini API", "SQLite", "Google OAuth 2.0"],
    },
    {
      date: "MAY-2026",
      tag: "Generative AI Platform",
      title: "Storygen Agent",
      category: "Multimodal Narrative Engine",
      description:
        "Autonomous generative storytelling engine pairing ultra-low-latency Groq LLaMA text inference (480 tokens/sec) with dynamic visual scene synthesis via Pollinations AI, backed by Supabase user authentication and cloud story persistence.",
      liveUrl: "https://github.com/Yunussaid03/storygen-agent",
      githubUrl: "https://github.com/Yunussaid03/storygen-agent",
      isLiveAvailable: true,
      liveLabel: "View Engine",
      tech: ["Python", "Streamlit", "Groq API (LLaMA)", "Pollinations AI", "Supabase Auth & DB"],
    },
    {
      date: "APR-2026",
      tag: "Systems Programming",
      title: "Page Replacement Engine",
      category: "OS Virtual Memory Optimizer",
      description:
        "Systems programming and algorithm benchmarking toolkit that simulates, evaluates, and benchmarks operating system virtual memory page replacement policies (LRU, FIFO, and Optimal/OPT) with real-time hit/fault ratios.",
      liveUrl: "https://github.com/Yunussaid03/algorithm-optimization-engine",
      githubUrl: "https://github.com/Yunussaid03/algorithm-optimization-engine",
      isLiveAvailable: true,
      liveLabel: "View Benchmark",
      tech: ["Algorithms", "Systems Architecture", "Virtual Memory", "Cache Locality", "Python / JS"],
    },
  ];

  return (
    <section id="projects" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8 sm:space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Projects Showcase - <span className="orange-text">What I&apos;ve Built!</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-base max-w-2xl mx-auto px-2">
          Explore production platforms, safety-critical AI watchdogs, and systems software engineering projects.
        </p>
      </div>

      {/* DevHQ Experience Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="glass-card p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-4 sm:space-y-5 group relative"
          >
            <div className="space-y-3 sm:space-y-4">
              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2.5">
                <span className="font-mono text-[11px] sm:text-xs text-orange-400 font-bold bg-orange-500/10 px-2.5 py-0.5 sm:py-1 rounded-full border border-orange-500/30">
                  {p.date}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] text-slate-400">
                  {p.tag}
                </span>
              </div>

              {/* Title & Category */}
              <div>
                <span className="text-[11px] sm:text-xs font-mono text-orange-400 uppercase tracking-wider font-semibold">
                  {p.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-0.5 group-hover:text-orange-300 transition-colors">
                  {p.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {p.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded bg-black/50 text-[10px] font-mono text-slate-400 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons (Full-width touch targets on mobile) */}
            <div className="pt-3 sm:pt-4 border-t border-white/5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-xs font-semibold shadow-[0_0_15px_rgba(249,115,22,0.35)] hover:shadow-[0_0_20px_rgba(249,115,22,0.55)] transition-all text-center"
              >
                <Eye className="w-4 h-4" />
                <span>{p.liveLabel}</span>
              </a>

              <a
                href={p.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 text-xs font-semibold border border-white/10 hover:border-orange-500/30 transition-all text-center"
              >
                <GithubIcon className="w-4 h-4 text-orange-400" />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
