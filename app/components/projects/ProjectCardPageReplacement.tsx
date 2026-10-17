"use client";

import { useState } from "react";
import { ArrowUpRight, Cpu, Play, RotateCcw, CheckCircle, AlertOctagon } from "lucide-react";

export default function ProjectCardPageReplacement() {
  const referenceString = [7, 0, 1, 2, 0, 3, 0, 4, 2, 3];
  const [algo, setAlgo] = useState<"LRU" | "FIFO" | "OPT">("LRU");
  const [stepIndex, setStepIndex] = useState<number>(0);

  // Compute state up to current step
  const simulate = (currentStep: number, selectedAlgo: "LRU" | "FIFO" | "OPT") => {
    const frames: (number | null)[] = [null, null, null];
    let hits = 0;
    let faults = 0;
    let lastEvent: "HIT" | "FAULT" | "INIT" = "INIT";

    // For FIFO tracking: queue of insertion order
    const fifoQueue: number[] = [];
    // For LRU tracking: order of use
    const lruOrder: number[] = [];

    for (let i = 0; i <= currentStep; i++) {
      const page = referenceString[i];

      if (frames.includes(page)) {
        hits++;
        lastEvent = "HIT";
        if (selectedAlgo === "LRU") {
          const idx = lruOrder.indexOf(page);
          if (idx !== -1) lruOrder.splice(idx, 1);
          lruOrder.push(page);
        }
      } else {
        faults++;
        lastEvent = "FAULT";
        const emptySlot = frames.indexOf(null);

        if (emptySlot !== -1) {
          frames[emptySlot] = page;
          fifoQueue.push(page);
          lruOrder.push(page);
        } else {
          // Replacement needed
          if (selectedAlgo === "FIFO") {
            const victim = fifoQueue.shift()!;
            const victimIdx = frames.indexOf(victim);
            frames[victimIdx] = page;
            fifoQueue.push(page);
          } else if (selectedAlgo === "LRU") {
            const victim = lruOrder.shift()!;
            const victimIdx = frames.indexOf(victim);
            frames[victimIdx] = page;
            lruOrder.push(page);
          } else {
            // OPT: Replace page not used for longest time in future
            let farthest = -1;
            let victimIdx = 0;

            for (let f = 0; f < frames.length; f++) {
              const currentFramePage = frames[f]!;
              const nextUse = referenceString.slice(i + 1).indexOf(currentFramePage);
              if (nextUse === -1) {
                victimIdx = f;
                break;
              } else if (nextUse > farthest) {
                farthest = nextUse;
                victimIdx = f;
              }
            }
            frames[victimIdx] = page;
          }
        }
      }
    }

    return { frames, hits, faults, lastEvent };
  };

  const { frames, hits, faults, lastEvent } = simulate(stepIndex, algo);
  const total = hits + faults;
  const hitRatio = total > 0 ? ((hits / total) * 100).toFixed(1) : "0.0";

  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-cyan-500/30 transition-all p-6 sm:p-8 space-y-6 relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-semibold tracking-wide">
            SYSTEMS PROGRAMMING
          </span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono text-[10px]">
            OS MEMORY ALGORITHMS
          </span>
        </div>

        <a
          href="https://github.com/Yunussaid03/algorithm-optimization-engine"
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
          OS Page Replacement Visualizer &amp; Benchmark Engine
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          A systems programming toolkit designed to simulate, analyze, and benchmark virtual memory management algorithms (<span className="text-white font-medium">LRU, FIFO, and Optimal/OPT</span>). Models cache locality, page fault frequency, and frame eviction behaviors across custom memory reference patterns.
        </p>
      </div>

      {/* Working Mini Interactive Page Replacement Simulator */}
      <div className="rounded-xl border border-white/10 bg-[#06080D] p-5 space-y-5 shadow-2xl font-mono">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <span className="text-xs text-slate-300 uppercase font-semibold flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" /> Interactive OS Simulator (3 Physical Frames):
          </span>

          {/* Algorithm Switcher */}
          <div className="flex items-center gap-1 bg-[#0B0F17] p-1 rounded-lg border border-white/5">
            {(["LRU", "FIFO", "OPT"] as const).map((a) => (
              <button
                key={a}
                onClick={() => {
                  setAlgo(a);
                  setStepIndex(0);
                }}
                className={`px-3 py-1 rounded text-xs transition-all ${
                  algo === a
                    ? "bg-cyan-500 text-black font-bold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        </div>

        {/* Reference String Display */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span>REFERENCE STRING SEQUENCE:</span>
            <span>Step {stepIndex + 1} of {referenceString.length}</span>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 p-2 rounded-lg bg-[#0B0F17] border border-white/5">
            {referenceString.map((val, idx) => (
              <span
                key={idx}
                className={`w-7 h-7 flex items-center justify-center rounded text-xs font-bold transition-all ${
                  idx === stepIndex
                    ? lastEvent === "HIT"
                      ? "bg-emerald-500 text-black scale-110 shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                      : "bg-rose-500 text-white scale-110 shadow-[0_0_10px_rgba(244,63,94,0.5)]"
                    : idx < stepIndex
                    ? "bg-white/10 text-slate-400"
                    : "bg-white/5 text-slate-600"
                }`}
              >
                {val}
              </span>
            ))}
          </div>
        </div>

        {/* Physical Frames & Step Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {frames.map((page, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-lg bg-[#0B0F17] border border-white/10 text-center space-y-1"
            >
              <div className="text-[10px] text-slate-500 font-bold">FRAME_0{idx}</div>
              <div className="text-2xl font-black text-white">
                {page !== null ? page : <span className="text-slate-700">EMPTY</span>}
              </div>
              <div className="text-[10px] text-slate-400">Allocated RAM Slot</div>
            </div>
          ))}
        </div>

        {/* Controller & Telemetry Stats */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-white/5 text-xs">
          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setStepIndex((prev) => Math.min(referenceString.length - 1, prev + 1))}
              disabled={stepIndex >= referenceString.length - 1}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-black font-bold transition-all"
            >
              <Play className="w-3 h-3 fill-current" />
              <span>Step Next</span>
            </button>
            <button
              onClick={() => setStepIndex(0)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          {/* Real-Time Result Status */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <CheckCircle className="w-4 h-4" />
              <span>Hits: {hits}</span>
            </div>
            <div className="flex items-center gap-1.5 text-rose-400 font-bold">
              <AlertOctagon className="w-4 h-4" />
              <span>Faults: {faults}</span>
            </div>
            <div className="text-slate-300 font-mono text-[11px] bg-white/5 px-2.5 py-1 rounded">
              Hit Ratio: <span className="text-cyan-300 font-bold">{hitRatio}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
        {["Algorithms & Data Structures", "Systems Architecture", "Virtual Memory", "Cache Locality", "Benchmarking", "Python / JS"].map((tech) => (
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
