"use client";

import { Calendar, MapPin, Briefcase } from "lucide-react";

export default function ExperienceTimeline() {
  const experiences = [
    {
      num: "01",
      role: "Tech Associate (Internship)",
      company: "GETAcademy",
      dates: "SEP 2026 – PRESENT",
      location: "Kuala Lumpur, Malaysia (Hybrid)",
      tag: "Enterprise IT & Platform Systems",
      points: [
        "Contributing to core enterprise IT and software initiatives across academy departments.",
        "Supporting digital platform architecture, internal web workflows, and technology integrations.",
      ],
      skills: ["IT Infrastructure", "Full-Stack Support", "Platform Operations"],
    },
    {
      num: "02",
      role: "Software Engineer (Part-Time)",
      company: "Freelance / Fleet Management ERP",
      dates: "JUN 2026 – PRESENT",
      location: "Kenya (Remote)",
      tag: "57-Vehicle Commercial B2B Fleet ERP",
      points: [
        "Architecting full-stack cloud ERP for a commercial fleet operator managing ~57 vehicles.",
        "Engineered multi-tenant booking lifecycles, automated invoicing, digital mobile inspection logs, and real-time fleet turnaround tracking.",
      ],
      skills: ["PostgreSQL", "Supabase", "React 18", "TypeScript", "REST APIs"],
    },
    {
      num: "03",
      role: "Backend AI Engineer - Intern",
      company: "FlyRank AI",
      dates: "JUN 2026 – SEP 2026",
      location: "Sepang, Selangor, Malaysia (Remote)",
      tag: "Organic Growth & AI Automation",
      points: [
        "Developed scalable backend AI pipelines and automated content ingestion services.",
        "Optimized LLM query routing, context memory caching, and reliable data persistence layers.",
      ],
      skills: ["Backend AI Engineering", "LLM Pipelines", "API Architecture"],
    },
    {
      num: "04",
      role: "Freelance Full-Stack Developer",
      company: "Independent Client Engagements",
      dates: "2026",
      location: "Remote",
      tag: "Fintech Integration & Automotive Web",
      points: [
        "Integrated secure IntaSend fintech payment gateway, establishing native Safaricom M-Pesa STK push and automated webhook handling.",
        "Architected and deployed the production commercial web platform for KL Motoren Werke (klmw.my).",
      ],
      skills: ["IntaSend API", "M-Pesa STK Push", "Cloudflare DNS", "Commercial Production"],
    },
    {
      num: "05",
      role: "Assistant Head of People Management",
      company: "AIESEC (Apprenticeship)",
      dates: "APR 2024 – SEP 2025",
      location: "Malaysia (On-site)",
      tag: "Campus Executive Leadership & Talent",
      points: [
        "Led university talent acquisition drives, screened applicants, and conducted 1-on-1 interviews.",
        "Facilitated key operational meetings and championed Voice of Customer (VOC) feedback to steer executive culture.",
      ],
      skills: ["Leadership", "Talent Acquisition", "Team Operations", "Public Speaking"],
    },
  ];

  return (
    <section id="experience" className="py-14 sm:py-20 px-3 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8 sm:space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          Work Experience - <span className="orange-text">Professional Journey!</span>
        </h2>
        <p className="text-slate-400 text-xs sm:text-base max-w-2xl mx-auto px-2">
          Production software engineering, high-stakes edge AI, and university leadership milestones.
        </p>
      </div>

      {/* Connected Vertical Timeline - Adjusted for Mobile screens */}
      <div className="relative border-l-2 border-orange-500/30 ml-2 sm:ml-8 pl-4 sm:pl-10 space-y-8 sm:space-y-12">
        {experiences.map((exp) => (
          <div key={exp.num} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[23px] sm:-left-[47px] top-1.5 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0b0b0b] border-2 border-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] flex items-center justify-center group-hover:scale-125 transition-transform">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-400"></span>
            </div>

            {/* Timeline Content Card */}
            <div className="glass-card p-4 sm:p-6 md:p-8 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-orange-500/20 text-orange-400 font-mono font-bold text-xs sm:text-sm flex items-center justify-center border border-orange-500/30">
                    {exp.num}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/30">
                    {exp.tag}
                  </span>
                </div>

                <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-slate-400">
                  <div className="flex items-center gap-1 text-orange-400 font-bold">
                    <Calendar className="w-3.5 h-3.5 text-orange-400" />
                    <span>{exp.dates}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                  {exp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-orange-400 font-medium mt-1">
                  <div className="flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>
                  <span className="text-slate-600 hidden xs:inline">•</span>
                  <span className="text-slate-400 text-[11px] sm:text-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed list-disc list-inside">
                {exp.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                {exp.skills.map((s) => (
                  <span
                    key={s}
                    className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-black/60 font-mono text-[10px] sm:text-[11px] text-slate-400 border border-white/5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
