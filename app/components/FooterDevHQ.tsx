"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";

export default function FooterDevHQ() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-16 pb-12 border-t border-white/5 bg-[#080808] px-4 sm:px-6 lg:px-8 font-mono">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand & Tagline */}
          <div className="space-y-1.5">
            <h2 className="text-2xl font-black text-white tracking-wider">
              Yunus<span className="orange-text">Said</span>
            </h2>
            <p className="text-xs text-slate-400 font-sans">
              Engineering at the Intersection of Scalable Systems and AI.
            </p>
          </div>

          {/* Quick Nav Links */}
          <ul className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400">
            <li><a href="#home" className="hover:text-orange-400 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-orange-400 transition-colors">About</a></li>
            <li><a href="#experience" className="hover:text-orange-400 transition-colors">Experience</a></li>
            <li><a href="#projects" className="hover:text-orange-400 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-orange-400 transition-colors">Skills</a></li>
            <li><a href="#profiles" className="hover:text-orange-400 transition-colors">Profiles</a></li>
            <li><a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a></li>
          </ul>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/yunus-said-6340253b8/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500/40 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/Yunussaid03"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500/40 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:yunussaid2704@gmail.com"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500/40 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/kingsman_.__"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-orange-400 hover:border-orange-500/40 transition-all"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar & Back To Top */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Yunus Said Khaidum. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/40 text-slate-400 hover:text-orange-400 transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
