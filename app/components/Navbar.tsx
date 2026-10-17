"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Terminal, Cpu } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#projects" },
    { name: "In The Lab", href: "#lab" },
    { name: "Systems", href: "#systems" },
    { name: "Experience", href: "#experience" },
    { name: "Stack", href: "#stack" },
    { name: "Beyond", href: "#beyond" },
    { name: "Terminal", href: "#terminal" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06080D]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/60 transition-colors">
            <Cpu className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-wider font-bold">
              YUNUS<span className="text-cyan-400">.SOFTWARE</span>
            </span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-mono text-[10px] text-emerald-400 tracking-wider">
                AVAILABLE FOR ROLES
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-[#0B0F17]/80 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-mono text-xs text-slate-400 hover:text-cyan-300 px-3 py-1.5 rounded-full transition-colors hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/Yunussaid03"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs bg-white/5 hover:bg-cyan-500/10 text-slate-200 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/30 px-3.5 py-1.5 rounded-full transition-all"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href="#terminal"
            className="flex items-center gap-1.5 font-mono text-xs bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all hover:scale-105"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Launch CLI</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0F17]/95 border-b border-white/10 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-mono text-sm text-slate-300 hover:text-cyan-400 px-3 py-2 rounded-lg hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://github.com/Yunussaid03"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 font-mono text-xs bg-white/5 text-slate-200 border border-white/10 py-2.5 rounded-lg"
            >
              <span>GitHub (@Yunussaid03)</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#terminal"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 font-mono text-xs bg-cyan-500 text-black font-bold py-2.5 rounded-lg"
            >
              <Terminal className="w-4 h-4" />
              <span>Launch Interactive CLI</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
