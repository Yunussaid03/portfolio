"use client";

import { useState } from "react";
import { ArrowUpRight, ShieldAlert, Cpu, Activity, Gauge, Terminal } from "lucide-react";

export default function ProjectCardMBUX() {
  const [activeTab, setActiveTab] = useState<"degraded" | "emergency" | "modal">("degraded");

  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-cyan-500/30 transition-all p-6 sm:p-8 space-y-6 relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-semibold tracking-wide">
            MERCEDES-BENZ VIBATHON 2026
          </span>
          <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono text-[10px]">
            SAFETY-CRITICAL EDGE AI
          </span>
        </div>

        <a
          href="https://github.com/jjibrah/MercedesBenzVibathon"
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
          MBUX Shadow AI — Autonomous Cockpit Watchdog &amp; Self-Healing Edge Agent
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Engineered with team <span className="text-slate-100 font-medium">The Vanguard Analysts</span> for the Mercedes-Benz Tech Malaysia Hackathon. Shadow AI is a zero-distraction edge watchdog embedded into the MBUX cockpit cluster. It continuously observes compute telemetry (memory spikes, thread exhaustion) and executes silent <span className="text-cyan-300 font-semibold">Graceful Degradation</span> so vital navigation and telemetry gauges never lock up at high speeds.
        </p>
      </div>

      {/* Interactive 3-State Telemetry Console */}
      <div className="rounded-xl border border-white/10 bg-[#06080D] p-4 space-y-4">
        {/* State Toggle Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span className="font-mono text-xs text-slate-300 uppercase tracking-wider font-semibold">
              Live Cockpit State Simulator:
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#0B0F17] p-1 rounded-lg border border-white/5">
            <button
              onClick={() => setActiveTab("degraded")}
              className={`px-3 py-1 rounded font-mono text-[11px] transition-all ${
                activeTab === "degraded"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Graceful Degradation
            </button>
            <button
              onClick={() => setActiveTab("emergency")}
              className={`px-3 py-1 rounded font-mono text-[11px] transition-all ${
                activeTab === "emergency"
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Emergency Cluster
            </button>
            <button
              onClick={() => setActiveTab("modal")}
              className={`px-3 py-1 rounded font-mono text-[11px] transition-all ${
                activeTab === "modal"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Watchdog Diagnostic
            </button>
          </div>
        </div>

        {/* State Display Screen */}
        <div className="min-h-[220px] rounded-lg bg-black/60 border border-white/5 p-4 flex flex-col justify-between font-mono relative overflow-hidden">
          {activeTab === "degraded" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-amber-400">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  MODE: DEGRADED SPORT CLUSTER [117 KM/H]
                </span>
                <span className="text-slate-400">FPS: 60 (LOCKED) • CPU SHED: ACTIVE</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded bg-[#0B0F17] border border-amber-500/20">
                  <div className="text-[10px] text-slate-400">NAVIGATION PIPELINE</div>
                  <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5 mt-1">
                    <span className="text-emerald-400">✓</span> Mapbox GL Vector
                  </div>
                  <div className="text-[10px] text-amber-400 mt-1">Traffic Rebalancing Active</div>
                </div>

                <div className="p-3 rounded bg-[#0B0F17] border border-amber-500/20">
                  <div className="text-[10px] text-slate-400">SYSTEM WATCHDOG</div>
                  <div className="text-sm font-bold text-amber-300 flex items-center gap-1.5 mt-1">
                    <Gauge className="w-4 h-4" /> 4,200 RPM
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Non-essential UI suspended</div>
                </div>

                <div className="p-3 rounded bg-[#0B0F17] border border-amber-500/20">
                  <div className="text-[10px] text-slate-400">FAILSAFE STATUS</div>
                  <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5 mt-1">
                    Zero Cluster Stutters
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">Telemetry bus priority 0</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 bg-white/5 p-2 rounded flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>[ShadowAgent.js]: Memory pressure at 87% — Shed background telemetry queue. Navigation maintained.</span>
              </div>
            </div>
          )}

          {activeTab === "emergency" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-rose-400 font-bold">
                  <ShieldAlert className="w-4 h-4 text-rose-500 animate-bounce" />
                  MODE: EMERGENCY SPORT CLUSTER [119 KM/H]
                </span>
                <span className="text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                  HIGH-SPEED DEFENSIVE LOCK
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded bg-rose-950/20 border border-rose-500/30">
                  <div className="text-[10px] text-slate-400">CRITICAL VEHICLE TELEMETRY</div>
                  <div className="text-lg font-black text-rose-400 mt-0.5">119 KM/H • SPORT D3</div>
                  <div className="text-[10px] text-slate-300 mt-1">Hardware-accelerated emergency HUD isolated on GPU layer</div>
                </div>

                <div className="p-3 rounded bg-rose-950/20 border border-rose-500/30">
                  <div className="text-[10px] text-slate-400">AUDIO &amp; SPEECH SYNTHESIS</div>
                  <div className="text-sm font-bold text-slate-100 flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                    MBUXVoice.js Alert Sent
                  </div>
                  <div className="text-[10px] text-slate-300 mt-1">&quot;Attention: Memory recovered. Safe cruising state active.&quot;</div>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 bg-rose-950/30 p-2 rounded border border-rose-500/20 flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Failsafe Watchdog: Thread pool cleared. All driver critical telemetry prioritized.</span>
              </div>
            </div>
          )}

          {activeTab === "modal" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-2 text-cyan-400">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  SHADOW AI DIAGNOSTIC OVERLAY
                </span>
                <span className="text-emerald-400">AGENT STATE: NOMINAL</span>
              </div>

              <div className="p-3.5 rounded bg-[#0B0F17] border border-cyan-500/20 space-y-2 text-xs">
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-slate-400">Watchdog Event ID:</span>
                  <span className="text-cyan-300">EVT-MBTMY-2026-904</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-slate-400">Detected Condition:</span>
                  <span className="text-amber-300">Memory usage high (89%) • CPU load elevated</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-1">
                  <span className="text-slate-400">Autonomous Action:</span>
                  <span className="text-emerald-300">Resolved 8 non-critical background tasks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Navigation &amp; Gauges:</span>
                  <span className="text-cyan-300">100% Uninterrupted Frame Delivery</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 bg-white/5 p-2 rounded flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Web Speech API synthesized diagnostic audio advisory to MBUX sound architecture.</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
        {["React 19", "Vite", "Tailwind CSS", "Mapbox GL", "Web Speech API", "Edge Telemetry", "Autonomous Watchdog"].map((tech) => (
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
