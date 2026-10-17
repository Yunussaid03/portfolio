"use client";

import { useState } from "react";
import { Briefcase, HeartHandshake, Calendar, MapPin } from "lucide-react";

export default function ExperienceMatrix() {
  const [activeTab, setActiveTab] = useState<"tech" | "leadership">("tech");

  const techExperiences = [
    {
      role: "Tech Associate (Internship)",
      company: "GETAcademy",
      dates: "Sep 2026 – Present",
      location: "Kuala Lumpur, Malaysia (Hybrid)",
      description:
        "Contributing to core enterprise IT and software initiatives. Supporting technology architecture, internal platforms, and full-stack technical delivery across cross-functional academy workflows.",
      tags: ["IT Infrastructure", "Digital Platforms", "Full-Stack Support", "System Architecture"],
    },
    {
      role: "Software Engineer (Part-Time)",
      company: "Freelance / Fleet Management ERP",
      dates: "Jun 2026 – Present",
      location: "Kenya (Remote)",
      description:
        "Architecting an end-to-end multi-tenant B2B Fleet Management ERP for a commercial operator managing ~57 vehicles. Engineered automated vehicle booking lifecycles, digital mobile inspection logging, and automated billing synchronization.",
      tags: ["PostgreSQL", "Supabase", "React 18", "TypeScript", "REST APIs", "B2B ERP"],
    },
    {
      role: "Backend AI Engineer - Intern",
      company: "FlyRank AI",
      dates: "Jun 2026 – Sep 2026 (4 mos)",
      location: "Sepang, Selangor, Malaysia (Remote)",
      description:
        "Engineered scalable backend AI pipelines and automated content ingestion services for FlyRank AI ('The Autopilot for Organic Growth'). Optimized LLM query routing and data persistence layers.",
      tags: ["Backend AI Engineering", "LLM Pipelines", "API Architecture", "Data Processing"],
    },
    {
      role: "Freelance Full-Stack Developer",
      company: "Independent Client Engagements",
      dates: "2026",
      location: "Remote",
      description:
        "Engineered secure fintech payment pipelines with the IntaSend API, integrating native Safaricom M-Pesa STK Push with automated webhook processing. Architected and launched the commercial digital platform for KL Motoren Werke (klmw.my).",
      tags: ["IntaSend API", "M-Pesa STK Push", "Cloudflare DNS", "Commercial Production"],
    },
  ];

  const leadershipExperiences = [
    {
      role: "Assistant Head of People Management",
      organization: "AIESEC (Apprenticeship)",
      dates: "Apr 2024 – Sep 2025 (1 yr 6 mos)",
      location: "Malaysia (On-site)",
      description:
        "Led campus recruitment drives, screened talent, and conducted 1-on-1 candidate interviews. Coordinated key internal operational meetings and championed Voice of Customer (VOC) feedback to align executive strategy with member experience.",
      tags: ["Leadership", "Talent Acquisition", "Team Operations", "Interviewing"],
    },
    {
      role: "Qualification Reviewer",
      organization: "Xiamen University Malaysia (Part-Time)",
      dates: "May 2025 – Jun 2025 (2 mos)",
      location: "Malaysia (Hybrid)",
      description:
        "Reviewed, verified, and audited official qualification documents for participants in the regional SEA-CICSIC competition; awarded Certificate of Appreciation by the university.",
      tags: ["Project Management", "Compliance Review", "Data Verification"],
    },
    {
      role: "Student Assistant",
      organization: "Xiamen University Malaysia (Part-Time)",
      dates: "Sep 2024 – Dec 2024 (4 mos)",
      location: "Selangor, Malaysia (On-site)",
      description:
        "Facilitated new student enrollment operations, guided international cohorts through campus onboarding logistics, and coordinated administrative medical examination compliance workflows.",
      tags: ["Campus Operations", "Student Onboarding", "Cross-Cultural Communication"],
    },
  ];

  const volunteerRoles = [
    {
      title: "Safety Coordinator",
      org: "Rotaract Club of XMUM",
      date: "Dec 2024",
      cause: "Arts & Culture",
      desc: "Managed crowd safety, access checkpoints, and emergency protocols for large-scale campus cultural events.",
    },
    {
      title: "Hydration Station Volunteer",
      org: "Standard Chartered KL Marathon",
      date: "Oct 2024",
      cause: "Health & Athletics",
      desc: "Coordinated high-volume hydration logistics and athlete support along the international marathon course.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs">
          <Briefcase className="w-3.5 h-3.5" />
          <span>DUAL-TRACK EXPERIENCE MATRIX</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Engineering &amp; Organizational Impact
        </h2>
        <p className="text-slate-400 max-w-3xl text-sm sm:text-base leading-relaxed">
          Technical systems engineering and campus leadership maintained in two dedicated tracks to cleanly present production software capabilities alongside executive communication and organizational leadership.
        </p>
      </div>

      {/* Mobile Tab Switcher */}
      <div className="flex lg:hidden items-center p-1 bg-[#0B0F17] rounded-xl border border-white/10 font-mono text-xs">
        <button
          onClick={() => setActiveTab("tech")}
          className={`flex-1 py-2.5 rounded-lg font-bold transition-all ${
            activeTab === "tech"
              ? "bg-cyan-500 text-black shadow-md"
              : "text-slate-400 hover:text-white"
          }`}
        >
          [01] Software &amp; AI
        </button>
        <button
          onClick={() => setActiveTab("leadership")}
          className={`flex-1 py-2.5 rounded-lg font-bold transition-all ${
            activeTab === "leadership"
              ? "bg-amber-400 text-black shadow-md"
              : "text-slate-400 hover:text-white"
          }`}
        >
          [02] Leadership &amp; Campus
        </button>
      </div>

      {/* 2-Column Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Software & AI Engineering */}
        <div className={`space-y-6 ${activeTab === "tech" ? "block" : "hidden lg:block"}`}>
          <div className="flex items-center justify-between border-b border-cyan-500/30 pb-3">
            <h3 className="text-lg font-mono font-bold text-cyan-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              [01] SOFTWARE &amp; AI ENGINEERING
            </h3>
            <span className="text-xs font-mono text-slate-500">4 Track Entries</span>
          </div>

          <div className="space-y-4">
            {techExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0B0F17] border border-white/10 hover:border-cyan-500/30 transition-all space-y-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-xs text-cyan-300 font-semibold">
                      {exp.company}
                    </span>
                  </div>

                  <div className="text-right font-mono text-[11px] text-slate-400">
                    <div className="flex items-center gap-1 text-slate-300 justify-end">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span>{exp.dates}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 justify-end mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Leadership & Campus */}
        <div className={`space-y-6 ${activeTab === "leadership" ? "block" : "hidden lg:block"}`}>
          <div className="flex items-center justify-between border-b border-amber-500/30 pb-3">
            <h3 className="text-lg font-mono font-bold text-amber-400 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              [02] LEADERSHIP, CAMPUS &amp; VOLUNTEERING
            </h3>
            <span className="text-xs font-mono text-slate-500">Executive &amp; Community</span>
          </div>

          <div className="space-y-4">
            {leadershipExperiences.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0B0F17] border border-white/10 hover:border-amber-500/30 transition-all space-y-3"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-xs text-amber-300 font-semibold">
                      {exp.organization}
                    </span>
                  </div>

                  <div className="text-right font-mono text-[11px] text-slate-400">
                    <div className="flex items-center gap-1 text-slate-300 justify-end">
                      <Calendar className="w-3 h-3 text-amber-400" />
                      <span>{exp.dates}</span>
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 justify-end mt-0.5">
                      <MapPin className="w-3 h-3" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Volunteering Badges */}
            <div className="p-5 rounded-xl bg-[#06080D] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-300 uppercase">
                <HeartHandshake className="w-4 h-4 text-rose-400" />
                <span>Volunteering &amp; Community Contributions</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                {volunteerRoles.map((v, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#0B0F17] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{v.title}</span>
                      <span className="text-[10px] text-slate-500">{v.date}</span>
                    </div>
                    <div className="text-amber-400 text-[11px]">{v.org}</div>
                    <p className="text-slate-400 text-[11px] leading-relaxed pt-1 font-sans">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
