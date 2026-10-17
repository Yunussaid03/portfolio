"use client";

import { useEffect, useState } from "react";
import { Home, User, Briefcase, Code2, Layers, Globe, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code2 },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "profiles", label: "Profiles", icon: Globe },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function SiteNav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-3 sm:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 max-w-[96vw] sm:max-w-[95vw]">
      <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#121214]/90 border border-orange-500/30 backdrop-blur-xl shadow-[0_0_25px_rgba(249,115,22,0.25)]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-label={item.label}
              className={`flex items-center justify-center gap-1.5 p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium transition-all shrink-0 min-w-[34px] min-h-[34px] sm:min-w-0 sm:min-h-0 ${
                isActive
                  ? "bg-orange-500/25 text-orange-400 border border-orange-500/50 shadow-[0_0_12px_rgba(249,115,22,0.35)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
              <span className="hidden md:inline">{item.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
