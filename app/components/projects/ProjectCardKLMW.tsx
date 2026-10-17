"use client";

import { useState } from "react";
import { ArrowUpRight, Wrench, Shield, CheckCircle2, Globe, ExternalLink } from "lucide-react";

export default function ProjectCardKLMW() {
  const [selectedService, setSelectedService] = useState<number>(0);

  const services = [
    {
      category: "Preventive Care",
      title: "Scheduled Inspection & Fluid Service",
      marques: "BMW • Mercedes • Porsche • Audi",
      details: "Liqui Moly / Motul OEM-approved fluid replacements, multi-point visual inspection, and electronic reset.",
    },
    {
      category: "Drivetrain",
      title: "ZF / DSG / PDK Transmission Overhauls",
      marques: "Dual-Clutch & Torque Converter",
      details: "Mechatronic diagnostics, valve body rebuilds, clutch-pack adaptation, and calibrated fluid flushes.",
    },
    {
      category: "Diagnostics",
      title: "ECU Coding & Software Adaptations",
      marques: "Factory Diagnostix Tooling",
      details: "OEM ISTA, Xentry, and PIWIS diagnostic sweeps, module retrofits, and electrical fault isolation.",
    },
    {
      category: "Corporate Fleet",
      title: "B2B Fleet Maintenance Packages",
      marques: "Commercial & Executive Fleets",
      details: "SST and E-Invoice compliant service agreements with rapid bay priority and dedicated dispatch liaison.",
    },
  ];

  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-amber-500/30 transition-all p-6 sm:p-8 space-y-6 relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-semibold tracking-wide">
            LIVE COMMERCIAL PRODUCTION
          </span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono text-[10px]">
            AUTOMOTIVE DIGITAL PLATFORM
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://www.klmw.my"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-amber-300 hover:text-amber-200 transition-colors bg-amber-500/10 hover:bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30"
          >
            <span>klmw.my ↗</span>
          </a>
        </div>
      </div>

      {/* Main Title & Problem Summary */}
      <div className="space-y-3">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          KL Motoren Werke — Continental &amp; Luxury Automotive Web Platform
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Architected and deployed the production digital platform for <span className="text-white font-medium">KL Motoren Werke Sdn Bhd</span>, Kuala Lumpur&apos;s independent specialist for German and Continental marques (BMW, Mercedes-Benz, Porsche, Audi, VW). Replaced opaque quotation processes with a transparent, mobile-optimized service matrix and automated WhatsApp concierge inquiry pipeline.
        </p>
      </div>

      {/* Interactive Safari Browser Frame Showcase */}
      <div className="rounded-xl border border-white/10 bg-[#06080D] overflow-hidden shadow-2xl">
        {/* Browser Top Bar */}
        <div className="bg-[#121824] px-4 py-2.5 flex items-center justify-between border-b border-white/5 font-mono text-xs">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-slate-400 text-[11px] ml-2">KL Motoren Werke Web Gateway</span>
          </div>

          <div className="hidden sm:flex items-center gap-1 bg-[#06080D] px-3 py-1 rounded border border-white/5 text-[11px] text-slate-300">
            <Globe className="w-3 h-3 text-cyan-400" />
            <span>https://www.klmw.my</span>
          </div>

          <a
            href="https://www.klmw.my"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-[11px] text-amber-300 hover:underline"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Browser Content: Interactive Service Matrix Explorer */}
        <div className="p-5 sm:p-6 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5" /> Interactive Service Matrix Explorer
              </span>
              <p className="text-slate-400 text-xs mt-0.5">Explore the production diagnostic &amp; workshop packages:</p>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
              <CheckCircle2 className="w-3 h-3" />
              <span>Cloudflare Edge Caching Active</span>
            </div>
          </div>

          {/* Service Selector Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {services.map((s, idx) => (
              <button
                key={s.category}
                onClick={() => setSelectedService(idx)}
                className={`p-2.5 text-left rounded-lg font-mono text-xs transition-all border ${
                  selectedService === idx
                    ? "bg-amber-500/15 border-amber-500/50 text-amber-300 shadow-sm"
                    : "bg-[#0B0F17] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-[#131B2A]"
                }`}
              >
                <div className="text-[10px] uppercase text-slate-500 font-bold">{s.category}</div>
                <div className="font-semibold text-slate-200 truncate mt-0.5">{s.title.split(" ")[0]}</div>
              </button>
            ))}
          </div>

          {/* Active Service Card Details */}
          <div className="p-4 rounded-lg bg-[#0B0F17] border border-amber-500/20 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-bold text-white text-sm sm:text-base">
                {services[selectedService].title}
              </h4>
              <span className="font-mono text-[11px] text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">
                {services[selectedService].marques}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {services[selectedService].details}
            </p>
          </div>

          {/* Bottom highlight pill */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs font-mono text-slate-400 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>SST Compliant • Multi-Bay Workshop Gallery • WhatsApp Lead Routing</span>
            </div>
            <a
              href="https://www.klmw.my"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold"
            >
              <span>Visit Production klmw.my</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
        {["HTML5 / Modern JS", "Cloudflare DNS & Edge Caching", "Responsive Layout", "WhatsApp Conversion API", "Automotive SEO", "Performance Tuned"].map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
