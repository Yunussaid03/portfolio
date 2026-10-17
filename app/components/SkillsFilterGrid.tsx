"use client";

import { useState } from "react";

type Skill = {
  name: string;
  category: "languages" | "frontend" | "backend" | "databases" | "tools";
  devicon?: string;
  customSvg?: React.ReactNode;
};

// Custom authentic SVGs for specialized platforms not in standard Devicon
const GoogleGeminiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9" fill="none">
    <path
      d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z"
      fill="url(#gemini-gradient)"
    />
    <defs>
      <linearGradient id="gemini-gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4E82EE" />
        <stop offset="0.5" stopColor="#9B72CF" />
        <stop offset="1" stopColor="#F56565" />
      </linearGradient>
    </defs>
  </svg>
);

const GroqIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9" fill="currentColor">
    <path
      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
      className="text-orange-500"
    />
  </svg>
);

const LeafletIcon = () => (
  <svg viewBox="0 0 48 48" className="w-7 h-7 sm:w-9 sm:h-9" fill="none">
    <path
      d="M24 4C14 4 6 16 6 28C6 37 13 44 24 44C35 44 42 37 42 28C42 16 34 4 24 4Z"
      fill="#16A34A"
    />
    <path
      d="M24 10C24 26 12 36 12 36"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const IntaSendIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9" fill="none">
    <rect width="24" height="24" rx="6" fill="#00A859" />
    <path
      d="M6 12L10.5 16.5L18 7.5"
      stroke="#ffffff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RestApiIcon = () => (
  <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-9 sm:h-9" fill="none" stroke="currentColor">
    <path
      d="M4 6H20M4 12H20M4 18H20M8 6V18M16 6V18"
      stroke="#38BDF8"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default function SkillsFilterGrid() {
  const [filter, setFilter] = useState<string>("all");

  const skills: Skill[] = [
    // Languages
    { name: "C++", category: "languages", devicon: "devicon-cplusplus-plain colored" },
    { name: "Python", category: "languages", devicon: "devicon-python-plain colored" },
    { name: "TypeScript", category: "languages", devicon: "devicon-typescript-plain colored" },
    { name: "JavaScript", category: "languages", devicon: "devicon-javascript-plain colored" },
    { name: "PHP 8", category: "languages", devicon: "devicon-php-plain colored" },
    { name: "SQL", category: "languages", devicon: "devicon-postgresql-plain colored" },

    // Frontend
    { name: "React.js", category: "frontend", devicon: "devicon-react-original colored" },
    { name: "Next.js", category: "frontend", devicon: "devicon-nextjs-plain text-white" },
    { name: "Tailwind CSS", category: "frontend", devicon: "devicon-tailwindcss-original colored" },
    { name: "HTML5 & CSS3", category: "frontend", devicon: "devicon-html5-plain colored" },
    { name: "Leaflet.js GIS", category: "frontend", customSvg: <LeafletIcon /> },

    // Backend
    { name: "Node.js", category: "backend", devicon: "devicon-nodejs-plain colored" },
    { name: "Express.js", category: "backend", devicon: "devicon-express-original text-white" },
    { name: "REST APIs", category: "backend", customSvg: <RestApiIcon /> },
    { name: "IntaSend M-Pesa", category: "backend", customSvg: <IntaSendIcon /> },

    // Databases
    { name: "PostgreSQL", category: "databases", devicon: "devicon-postgresql-plain colored" },
    { name: "Supabase", category: "databases", devicon: "devicon-supabase-plain colored" },
    { name: "MySQL", category: "databases", devicon: "devicon-mysql-plain colored" },
    { name: "SQLite", category: "databases", devicon: "devicon-sqlite-plain colored" },

    // AI & Tools
    { name: "Google Gemini", category: "tools", customSvg: <GoogleGeminiIcon /> },
    { name: "Groq LLaMA", category: "tools", customSvg: <GroqIcon /> },
    { name: "Git", category: "tools", devicon: "devicon-git-plain colored" },
    { name: "GitHub", category: "tools", devicon: "devicon-github-original text-white" },
    { name: "Cloudflare", category: "tools", devicon: "devicon-cloudflare-plain colored" },
    { name: "Vercel", category: "tools", devicon: "devicon-vercel-original text-white" },
    { name: "Postman", category: "tools", devicon: "devicon-postman-plain colored" },
  ];

  const filteredSkills = filter === "all" ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 sm:space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Technical Skills - <span className="orange-text">Core Expertise!</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-base max-w-2xl mx-auto px-2">
          Official languages, frameworks, cloud databases, and AI tooling I leverage to build production software.
        </p>
      </div>

      {/* Filter Tabs (DevHQ Style with Orange Active Pill) */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {[
          { key: "all", label: "All" },
          { key: "languages", label: "Languages" },
          { key: "frontend", label: "Frontend" },
          { key: "backend", label: "Backend" },
          { key: "databases", label: "Databases" },
          { key: "tools", label: "AI & Tools" },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-mono text-[11px] sm:text-xs font-semibold transition-all ${
              filter === f.key
                ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.45)] border border-orange-400"
                : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Skill Grid with Real Official Logos */}
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4">
        {filteredSkills.map((s) => (
          <div
            key={s.name}
            className="glass-card p-3 sm:p-5 rounded-xl flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
              {s.devicon ? (
                <i className={`${s.devicon} text-2xl sm:text-4xl`} />
              ) : (
                s.customSvg
              )}
            </div>
            <span className="font-mono text-[11px] sm:text-xs text-slate-200 group-hover:text-orange-400 font-medium transition-colors line-clamp-1">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
