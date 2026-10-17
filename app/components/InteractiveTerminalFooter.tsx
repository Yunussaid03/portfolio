"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpRight, Terminal, CornerDownLeft, Sparkles } from "lucide-react";

type CommandOutput = {
  command: string;
  output: string | string[];
  isError?: boolean;
};

export default function InteractiveTerminalFooter() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "whoami",
      output: [
        "Yunus Said Khaidum",
        "Role: Full-Stack Software Engineer & AI Systems Architect",
        "Education: Final-Year B.Sc. in Computer Science & Technology @ Xiamen University Malaysia",
        "Location: Sepang / Kuala Lumpur, Malaysia (Open to Global Remote & Hybrid)",
      ],
    },
    {
      command: "status --current",
      output: [
        "● Status: ACTIVE (Available for full-time engineering roles, high-impact contracts & R&D)",
        "● Current Builds: Fleet Management ERP (57 vehicles) • OmniExtract AI (Multimodal ingestion)",
        "● Recent Victory: Mercedes-Benz Vibathon 2026 (MBUX Shadow AI Autonomous Watchdog)",
      ],
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const lower = cmd.toLowerCase();
    let result: string | string[] = "";
    let isErr = false;

    switch (lower) {
      case "help":
        result = [
          "Available terminal commands:",
          "  whoami      - Candidate biography & profile metadata",
          "  status      - Current engineering status & availability",
          "  projects    - List the 7 flagship & R&D projects with links",
          "  stack       - Categorized engineering technology stack",
          "  experience  - Dual-track engineering & leadership overview",
          "  fpl         - Easter egg transmission from Kingsman FPL Bot",
          "  contact     - Direct contact channels & social links",
          "  clear       - Clear the terminal scrollback history",
        ];
        break;

      case "whoami":
        result = [
          "Yunus Said Khaidum — Software Engineer & AI Systems Architect",
          "Final-Year CS Student at Xiamen University Malaysia (School of Computing and Data Science)",
          "Languages: English, Arabic, Swahili, Hindi",
          "Specialties: Safety-critical AI, enterprise ERPs, fintech APIs, and full-stack web platforms.",
        ];
        break;

      case "status":
      case "status --current":
        result = [
          "STATUS: ONLINE • AVAILABLE FOR HIRE / CONTRACT",
          "Focus: Building production-grade software that solves operational bottlenecks.",
          "Email: yunussaid2704@gmail.com",
        ];
        break;

      case "projects":
        result = [
          "1. MBUX Shadow AI       - Mercedes-Benz Vibathon 2026 Cockpit Watchdog",
          "2. KL Motoren Werke     - Continental Automotive Web Platform (https://www.klmw.my)",
          "3. CampusRelay          - P2P Campus Micro-Mobility & GIS Sharing",
          "4. Fleet Management ERP - 57-Vehicle Enterprise Dispatch System",
          "5. OmniExtract AI       - Multimodal Gemini Document Ingestion",
          "6. Storygen Agent       - Low-Latency Groq LLaMA Storytelling Engine",
          "7. Page Replacement     - OS Virtual Memory Algorithm Visualizer & Benchmark",
        ];
        break;

      case "stack":
        result = [
          "Languages:   TypeScript, JavaScript, Python, PHP, C++, SQL",
          "Frontend:    Next.js (App Router), React 18/19, Tailwind CSS v4, Framer Motion",
          "Backend:     Node.js, Express, REST APIs, Supabase, PostgreSQL, SQLite, MySQL",
          "AI / Agents: Google Gemini, Groq LLaMA, Multimodal Ingestion, Prompt Architecture",
          "Edge/Infra:  Cloudflare DNS/Caching, Vercel, Git, Mapbox GL, Web Speech API",
        ];
        break;

      case "experience":
        result = [
          "[Engineering Track]",
          "  • Tech Associate Intern @ GETAcademy (Sep 2026 – Present)",
          "  • Software Engineer @ Fleet Management ERP (Jun 2026 – Present)",
          "  • Backend AI Engineer Intern @ FlyRank AI (Jun 2026 – Sep 2026)",
          "  • Freelance Developer @ IntaSend M-Pesa & KL Motoren Werke (2026)",
          "[Leadership Track]",
          "  • Assistant Head of People Management @ AIESEC (Apr 2024 – Sep 2025)",
          "  • Qualification Reviewer @ XMUM SEA-CICSIC (May 2025 – Jun 2025)",
        ];
        break;

      case "fpl":
        result = [
          "⚽ [KINGSMAN FPL AGENT TRANSMISSION]",
          "----------------------------------------------------------------",
          "\"Captaincy algorithm says: Never captain against a high-line defense.",
          "xGI differential model running on Pipedream. Green arrows incoming!\"",
        ];
        break;

      case "contact":
        result = [
          "Direct Communication Channels:",
          "  • Email:     yunussaid2704@gmail.com",
          "  • GitHub:    https://github.com/Yunussaid03",
          "  • LinkedIn:  https://www.linkedin.com/in/yunus-said-6340253b8/",
          "  • Instagram: https://instagram.com/kingsman_.__",
        ];
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        result = `zsh: command not found: ${cmd}. Type "help" to view valid commands.`;
        isErr = true;
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: result, isError: isErr }]);
    setInputVal("");
  };

  const socialLinks = [
    { label: "GitHub (@Yunussaid03)", href: "https://github.com/Yunussaid03" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yunus-said-6340253b8/" },
    { label: "Email (yunussaid2704@gmail.com)", href: "mailto:yunussaid2704@gmail.com" },
    { label: "Instagram", href: "https://instagram.com/kingsman_.__" },
  ];

  return (
    <footer id="terminal" className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
          <Terminal className="w-3.5 h-3.5" />
          <span>COMMAND LINE INTERFACE</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Interactive ZSH Terminal
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm font-mono">
          Type <span className="text-cyan-400 font-bold">&quot;help&quot;</span> to explore commands or query systems directly.
        </p>
      </div>

      {/* Terminal Window */}
      <div
        onClick={() => inputRef.current?.focus()}
        className="rounded-2xl bg-[#06080D] border border-white/10 shadow-2xl overflow-hidden cursor-text font-mono text-xs sm:text-sm"
      >
        {/* Terminal Title Bar */}
        <div className="bg-[#101622] px-4 py-3 flex items-center justify-between border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            <span className="ml-2 text-slate-400 text-xs">yunus@macbook-pro: ~ (zsh)</span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-cyan-400">
            <Sparkles className="w-3 h-3" />
            <span>Interactive CLI</span>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="p-4 sm:p-6 space-y-4 max-h-[380px] overflow-y-auto">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-cyan-400 font-bold">yunus@mbp:~$</span>
                <span className="text-white">{item.command}</span>
              </div>
              <div className={`leading-relaxed pl-4 border-l-2 ${item.isError ? "border-rose-500/40 text-rose-300" : "border-cyan-500/30 text-slate-300"}`}>
                {Array.isArray(item.output) ? (
                  item.output.map((line, lIdx) => (
                    <div key={lIdx} className="font-mono text-xs sm:text-[13px]">{line}</div>
                  ))
                ) : (
                  <div className="font-mono text-xs sm:text-[13px]">{item.output}</div>
                )}
              </div>
            </div>
          ))}

          {/* Active Input Prompt */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 text-slate-200 pt-1">
            <span className="text-cyan-400 font-bold shrink-0">yunus@mbp:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type help, projects, stack, fpl, contact..."
              className="w-full bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm placeholder:text-slate-600 focus:ring-0"
            />
            <button type="submit" className="text-slate-500 hover:text-cyan-400 p-1">
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>

          <div ref={terminalEndRef} />
        </div>
      </div>

      {/* Social Quick-Links Bar */}
      <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full border border-white/5"
            >
              <span>{s.label}</span>
              <ArrowUpRight className="w-3 h-3 text-slate-500" />
            </a>
          ))}
        </div>

        <div className="text-slate-500 text-[11px]">
          © {new Date().getFullYear()} Yunus Said Khaidum. Designed for high performance.
        </div>
      </div>
    </footer>
  );
}
