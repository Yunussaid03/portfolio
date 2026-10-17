"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "./Icons";

export default function ProfilesSection() {
  const profiles = [
    {
      name: "LinkedIn",
      action: "Connect",
      url: "https://www.linkedin.com/in/yunus-said-6340253b8/",
      icon: LinkedinIcon,
      color: "text-blue-400",
    },
    {
      name: "GitHub",
      action: "Commit",
      url: "https://github.com/Yunussaid03",
      icon: GithubIcon,
      color: "text-slate-100",
    },
    {
      name: "Email",
      action: "Reach Out",
      url: "mailto:yunussaid2704@gmail.com",
      icon: Mail,
      color: "text-orange-400",
    },
    {
      name: "Instagram",
      action: "Follow",
      url: "https://instagram.com/kingsman_.__",
      icon: InstagramIcon,
      color: "text-rose-400",
    },
  ];

  return (
    <section id="profiles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Web Presence - <span className="orange-text">Dev Network!</span>
        </h2>

        {/* Profile Tagline */}
        <div className="flex items-center justify-center gap-2 pt-2">
          <div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400 font-bold text-sm shadow-[0_0_15px_rgba(249,115,22,0.35)]">
            YS
          </div>
          <span className="font-mono text-sm text-orange-400 font-bold">@Yunussaid03</span>
        </div>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {profiles.map((p) => {
          const Icon = p.icon;
          return (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:scale-[1.02] transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:border-orange-500/30 transition-colors">
                <Icon className={`w-6 h-6 ${p.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">{p.action}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          );
        })}
      </div>

      <p className="text-center font-mono text-xs text-slate-500">
        You can explore further by clicking on any of the profile cards above!
      </p>
    </section>
  );
}
