"use client";

import { useState, useEffect } from "react";
import { Code2, Brain, Trophy, Lightbulb, ArrowUpRight, FolderGit2 } from "lucide-react";

const titles = [
  "Yunus Said Khaidum",
  "Full-Stack Developer",
  "AI Systems Architect",
  "Enterprise Solutions Engineer",
];

export default function HeroDevHQ() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((titleIndex + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[90vh] w-full flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-28 pb-20 overflow-hidden"
    >
      {/* 4 Floating Corner Badges (DevHQ Signature in Orange) */}
      <div className="hidden lg:flex absolute top-32 left-16 w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 items-center justify-center text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.25)] animate-float-slow">
        <Code2 className="w-5 h-5" />
      </div>
      <div className="hidden lg:flex absolute top-28 right-20 w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 items-center justify-center text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.25)] animate-float-delayed">
        <Brain className="w-5 h-5" />
      </div>
      <div className="hidden lg:flex absolute bottom-28 left-24 w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 items-center justify-center text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.25)] animate-float-delayed">
        <Trophy className="w-5 h-5" />
      </div>
      <div className="hidden lg:flex absolute bottom-32 right-24 w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/30 items-center justify-center text-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.25)] animate-float-slow">
        <Lightbulb className="w-5 h-5" />
      </div>

      {/* Main Hero Content */}
      <div className="max-w-4xl mx-auto space-y-6 relative z-10">
        <h2 className="text-sm sm:text-lg font-bold tracking-widest text-slate-300 uppercase">
          Welcome to the Portfolio Website of The
        </h2>

        {/* Dynamic Typing Title */}
        <div className="min-h-[4.5rem] flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white">
            <span className="orange-text font-extrabold">{displayText}</span>
            <span className="animate-pulse text-orange-400">|</span>
          </h1>
        </div>

        <h3 className="text-lg sm:text-2xl font-light text-slate-300 pt-1 tracking-wide">
          Yunus Said Khaidum | <span className="text-orange-400 font-normal">Final-Year CS Undergrad</span> @ XMUM
        </h3>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
          Building safety-critical automotive AI, 57-vehicle B2B fleet ERPs, fintech payment infrastructure, and autonomous agent workflows.
        </p>

        {/* Shimmer Action Buttons (DevHQ Style with Orange Glow) */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <a
            href="https://www.linkedin.com/in/yunus-said-6340253b8/"
            target="_blank"
            rel="noreferrer"
            className="btn-resume group"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a href="#projects" className="btn-resume group">
            <FolderGit2 className="w-4 h-4 text-orange-400" />
            <span>Explore Work</span>
          </a>

          <a
            href="https://github.com/Yunussaid03"
            target="_blank"
            rel="noreferrer"
            className="btn-resume group"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-4 h-4 text-orange-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
