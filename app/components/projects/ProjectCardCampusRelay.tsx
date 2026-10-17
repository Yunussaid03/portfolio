"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin, KeyRound, Eye, EyeOff, Wallet, Layers } from "lucide-react";

export default function ProjectCardCampusRelay() {
  const [activeView, setActiveView] = useState<"map" | "lender" | "form" | "listing">("map");
  const [lockRevealed, setLockRevealed] = useState(false);

  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-cyan-500/30 transition-all p-6 sm:p-8 space-y-6 relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-semibold tracking-wide">
            FULL-STACK MARKETPLACE
          </span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono text-[10px]">
            GEOSPATIAL CAMPUS MOBILITY
          </span>
        </div>

        <a
          href="https://github.com/Yunussaid03/campusrelay"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-cyan-300 transition-colors bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/10"
        >
          <span>Repository</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Title & Problem Summary */}
      <div className="space-y-3">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          CampusRelay — Peer-to-Peer Vehicle &amp; Micro-Mobility Sharing Platform
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Engineered for the <span className="text-white font-medium">Xiamen University Malaysia (XMUM)</span> campus community. A two-sided peer-to-peer rental ecosystem where students and vehicle hosts list, discover, and rent cars, electric scooters, and transport accessories with pinpoint campus location coordinates and encrypted lock-box reveals.
        </p>
      </div>

      {/* Interactive 4-View Switcher Console */}
      <div className="rounded-xl border border-white/10 bg-[#06080D] p-4 sm:p-5 space-y-4 shadow-xl">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs text-slate-300 uppercase tracking-wider font-semibold">
              Interactive Platform View:
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-[#0B0F17] p-1 rounded-lg border border-white/5">
            <button
              onClick={() => setActiveView("map")}
              className={`px-3 py-1 rounded font-mono text-[11px] transition-all ${
                activeView === "map"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              GIS Campus Map
            </button>
            <button
              onClick={() => setActiveView("lender")}
              className={`px-3 py-1 rounded font-mono text-[11px] transition-all ${
                activeView === "lender"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              XMUM Lender Console
            </button>
            <button
              onClick={() => setActiveView("form")}
              className={`px-3 py-1 rounded font-mono text-[11px] transition-all ${
                activeView === "form"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Pin-Drop Form
            </button>
            <button
              onClick={() => setActiveView("listing")}
              className={`px-3 py-1 rounded font-mono text-[11px] transition-all ${
                activeView === "listing"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Encrypted Lock Card
            </button>
          </div>
        </div>

        {/* View Body */}
        <div className="min-h-[220px] rounded-lg bg-[#0B0F17] border border-white/5 p-4 flex flex-col justify-between font-mono">
          {activeView === "map" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> LEAFLET.JS GIS CAMPUS BROWSE
                </span>
                <span className="text-slate-400 text-[11px]">XMUM Sepang • Active Listings: 14</span>
              </div>

              {/* Simulated Map Visualizer */}
              <div className="h-32 rounded bg-[#06080D] border border-cyan-500/20 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
                <div className="relative z-10 flex flex-wrap items-center justify-around w-full px-4 gap-2 text-xs">
                  <div className="bg-[#121927] border border-cyan-500/40 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                    <span className="text-slate-200 text-[11px]">Block D3: Proton Saga (RM 12/hr)</span>
                  </div>
                  <div className="bg-[#121927] border border-emerald-500/40 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span className="text-slate-200 text-[11px]">Student Mall: Xiaomi E-Scooter (RM 5/hr)</span>
                  </div>
                  <div className="bg-[#121927] border border-amber-500/40 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span className="text-slate-200 text-[11px]">North Gate: Mercedes C200 (Reserved)</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                Integrated OpenStreetMap tiling with custom clustering for fast, responsive student pickup coordination.
              </p>
            </div>
          )}

          {activeView === "lender" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                <span className="text-slate-200 font-bold flex items-center gap-1.5">
                  <Wallet className="w-3.5 h-3.5 text-emerald-400" /> XMUM LENDER DASHBOARD
                </span>
                <span className="text-emerald-400 font-mono font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  WALLET: RM 50.00
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded bg-[#06080D] border border-white/10 space-y-1">
                  <div className="text-[10px] text-slate-400">ACTIVE LISTING</div>
                  <div className="font-bold text-white">Mountain Bike &amp; Helmet Kit</div>
                  <div className="text-cyan-300 text-[11px]">RM 8.00 / 4 Hours • Status: Available</div>
                </div>
                <div className="p-3 rounded bg-[#06080D] border border-white/10 space-y-1">
                  <div className="text-[10px] text-slate-400">COMPLETED BOOKING</div>
                  <div className="font-bold text-white">Mercedes AMG (Special Weekend)</div>
                  <div className="text-emerald-400 text-[11px]">Settled: RM 150.00 • Rating: ★★★★★</div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                Instant role transition between Student Renter and Vehicle Host with internal credit balance ledger.
              </p>
            </div>
          )}

          {activeView === "form" && (
            <div className="space-y-3">
              <div className="text-xs font-bold text-cyan-300">ADD LISTING (COORDINATE PIN-DROP)</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="bg-[#06080D] p-2.5 rounded border border-white/10 space-y-1">
                  <span className="text-[10px] text-slate-500">PICKUP SPOT GEO-COORDINATES</span>
                  <div className="text-slate-200 text-[11px]">LAT: 2.8331° N | LNG: 101.7088° E</div>
                  <div className="text-[10px] text-cyan-400">✓ Clicked on XMUM Block LY3 Parking</div>
                </div>
                <div className="bg-[#06080D] p-2.5 rounded border border-white/10 space-y-1">
                  <span className="text-[10px] text-slate-500">PHYSICAL KEY BOX COMBINATION</span>
                  <div className="text-amber-400 text-[11px]">•••• (Only shared after rental payment)</div>
                  <div className="text-[10px] text-slate-400">Server-side hashed &amp; locked</div>
                </div>
              </div>
              <p className="text-[11px] text-slate-400">
                Hosts pin-drop their vehicle exact bay location on Leaflet without having to type manual latitude/longitude.
              </p>
            </div>
          )}

          {activeView === "listing" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs border-b border-white/5 pb-2">
                <span className="text-white font-bold">Proton Saga 1.3 Standard (XMUM Verified)</span>
                <span className="text-cyan-400 text-[11px]">Spot: LY3-Bay 14</span>
              </div>

              <div className="p-3 rounded bg-[#06080D] border border-cyan-500/20 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-4 h-4 text-amber-400" />
                  <div>
                    <div className="text-[10px] text-slate-400">KEY-BOX LOCK CODE</div>
                    <div className="text-sm font-mono font-bold text-white">
                      {lockRevealed ? (
                        <span className="text-emerald-400 tracking-wider">CODE: 8492-XMUM</span>
                      ) : (
                        <span className="text-slate-500">••••-•••• (ENCRYPTED)</span>
                      )}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setLockRevealed(!lockRevealed)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs transition-colors"
                >
                  {lockRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  <span>{lockRevealed ? "Hide Code" : "Simulate Unlock"}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400">
                Security-first architecture: Physical vehicle combinations are masked on the database layer until payment confirmation.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
        {["PHP 8", "MySQL", "JavaScript ES6+", "Leaflet.js", "OpenStreetMap GIS", "Encrypted Lock Access", "P2P Marketplace"].map((tech) => (
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
