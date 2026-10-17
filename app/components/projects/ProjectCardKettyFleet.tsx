"use client";

import { useState } from "react";
import { ArrowUpRight, Truck, CheckCircle2, RefreshCw, Layers } from "lucide-react";

export default function ProjectCardKettyFleet() {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    { num: "01", name: "Booking Verified", desc: "Customer identity & contract signed" },
    { num: "02", name: "Digital Inspection", desc: "Damage photos & fuel level stamped" },
    { num: "03", name: "M-Pesa / Invoice Synced", desc: "Automated IntaSend webhook callback" },
    { num: "04", name: "Vehicle Dispatched", desc: "Keys handed over & GPS tracker live" },
  ];

  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-emerald-500/30 transition-all p-6 sm:p-8 space-y-6 relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[11px] font-semibold tracking-wide flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            ACTIVE PRODUCTION R&amp;D
          </span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono text-[10px]">
            57-VEHICLE B2B FLEET
          </span>
        </div>

        <a
          href="https://github.com/Yunussaid03/kettyfleet"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-300 hover:text-emerald-300 transition-colors bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/10"
        >
          <span>Repository</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Title & Problem Summary */}
      <div className="space-y-3">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Fleet Management ERP — Multi-Tenant Enterprise Fleet &amp; Dispatch System
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Architected for a commercial enterprise fleet operator in Kenya managing approximately <span className="text-white font-medium">57 vehicles</span>. Replaces vulnerable physical logbooks with an end-to-end cloud ERP handling multi-tenant vehicle allocations, mobile pre/post-rental digital inspection photo logs, automated invoicing, and real-time fleet turnaround tracking.
        </p>
      </div>

      {/* Custom Live Interactive Fleet Telemetry & Dispatch Pipeline */}
      <div className="rounded-xl border border-white/10 bg-[#06080D] p-5 space-y-5 shadow-2xl">
        {/* Top KPI Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono">
          <div className="p-3 rounded-lg bg-[#0B0F17] border border-white/5">
            <div className="text-[10px] text-slate-400">TOTAL FLEET</div>
            <div className="text-lg font-black text-white mt-0.5">57 UNITS</div>
          </div>
          <div className="p-3 rounded-lg bg-[#0B0F17] border border-emerald-500/20">
            <div className="text-[10px] text-emerald-400">DISPATCHED</div>
            <div className="text-lg font-black text-emerald-300 mt-0.5">42 ACTIVE</div>
          </div>
          <div className="p-3 rounded-lg bg-[#0B0F17] border border-amber-500/20">
            <div className="text-[10px] text-amber-400">MAINTENANCE</div>
            <div className="text-lg font-black text-amber-300 mt-0.5">4 IN SERVICE</div>
          </div>
          <div className="p-3 rounded-lg bg-[#0B0F17] border border-cyan-500/20">
            <div className="text-[10px] text-cyan-400">AVAILABLE</div>
            <div className="text-lg font-black text-cyan-300 mt-0.5">11 READY</div>
          </div>
        </div>

        {/* Animated 4-Step Transaction Pipeline */}
        <div className="space-y-2">
          <div className="text-xs font-mono text-slate-300 uppercase font-semibold flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-cyan-400" /> Dispatch Lifecycle Pipeline
            </span>
            <span className="text-[10px] text-slate-500">Click steps to inspect lifecycle:</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {steps.map((st, i) => (
              <button
                key={st.num}
                onClick={() => setActiveStep(i)}
                className={`p-3 rounded-lg text-left font-mono transition-all border ${
                  activeStep === i
                    ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-md"
                    : "bg-[#0B0F17] border-white/5 text-slate-400 hover:bg-[#131B2A] hover:text-slate-200"
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-bold">
                  <span>STEP {st.num}</span>
                  {i <= activeStep && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                </div>
                <div className="font-semibold text-slate-200 text-xs mt-1 truncate">{st.name}</div>
                <div className="text-[10px] text-slate-400 mt-0.5 leading-tight">{st.desc}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Simulated Live Vehicle Queue */}
        <div className="p-3.5 rounded-lg bg-[#0B0F17] border border-white/5 space-y-2 font-mono text-xs">
          <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>Live Dispatch Queue Telemetry</span>
            <span className="flex items-center gap-1 text-emerald-400 text-[10px]">
              <RefreshCw className="w-3 h-3 animate-spin" /> Real-time Supabase Sync
            </span>
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-cyan-400" />
                <span className="text-white font-medium">KDJ 482X • Toyota Land Cruiser Prado</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 text-[10px] border border-emerald-500/20">
                Active B2B Lease (Mombasa)
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-amber-400" />
                <span className="text-white font-medium">KDM 109A • Nissan Urvan Commuter</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 text-[10px] border border-amber-500/20">
                Pre-Trip Digital Inspection Pending
              </span>
            </div>

            <div className="flex items-center justify-between p-2 rounded bg-black/40 border border-white/5">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-slate-400" />
                <span className="text-white font-medium">KDA 773Z • Isuzu FRR Executive Coach</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[10px] border border-cyan-500/20">
                Scheduled Return: 18:30 EAT
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
        {["TypeScript", "React 18", "Tailwind CSS", "Supabase", "PostgreSQL", "React Query", "Multi-Tenant Architecture"].map((tech) => (
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
