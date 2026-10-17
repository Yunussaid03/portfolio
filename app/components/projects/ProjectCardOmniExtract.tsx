"use client";

import { useState } from "react";
import { ArrowUpRight, FileText, Mic, Receipt, Sparkles, Check, Database, Sheet } from "lucide-react";

export default function ProjectCardOmniExtract() {
  const [activeInput, setActiveInput] = useState<"invoice" | "audio" | "receipt">("invoice");

  const previews = {
    invoice: {
      type: "Commercial PDF Invoice",
      format: "application/pdf (842 KB)",
      json: `{
  "vendor": "KL Motoren Werke Sdn Bhd",
  "invoice_id": "INV-2026-089",
  "currency": "MYR",
  "total_amount": 2840.00,
  "line_items": [
    { "item": "BMW ZF 8HP Mechatronic Overhaul", "qty": 1, "price": 2400.00 },
    { "item": "Liqui Moly TopTec 1200 ATF Flush", "qty": 7, "price": 440.00 }
  ],
  "confidence_score": 0.994,
  "export_destination": "GOOGLE_SHEETS_LIVE_SYNC"
}`,
    },
    audio: {
      type: "Voice Note Memo",
      format: "audio/m4a (1m 14s)",
      json: `{
  "audio_channel": "WhatsApp Voice Note",
  "transcription_status": "ACCURATE_SYNTHESIS",
  "speaker_intent": "Schedule emergency fleet service for KDJ 482X",
  "extracted_parameters": {
    "vehicle_plate": "KDJ 482X",
    "required_service": "Brake pad sensor replacement & oil change",
    "priority_level": "URGENT_TIER_1"
  },
  "confidence_score": 0.988,
  "crm_status": "DISPATCH_TICKET_CREATED"
}`,
    },
    receipt: {
      type: "Scanned Fuel Receipt",
      format: "image/jpeg (1.2 MB)",
      json: `{
  "station": "TotalEnergies Mombasa Highway",
  "receipt_num": "RCPT-481029",
  "fuel_type": "Diesel Extra 50PPM",
  "litres_dispensed": 64.20,
  "total_kes": 12840.00,
  "payment_method": "Safaricom M-Pesa STK",
  "tax_deductible": true,
  "confidence_score": 0.997,
  "expense_ledger_status": "RECONCILED"
}`,
    },
  };

  return (
    <div className="rounded-2xl bg-[#0B0F17] border border-white/10 hover:border-cyan-500/30 transition-all p-6 sm:p-8 space-y-6 relative overflow-hidden group">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

      {/* Header Info */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-[11px] font-semibold tracking-wide flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            ACTIVE R&amp;D
          </span>
          <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 font-mono text-[10px]">
            MULTIMODAL AI INGESTION
          </span>
        </div>

        <a
          href="https://github.com/Yunussaid03/omniextract-ai"
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
          OmniExtract AI — Multimodal Document &amp; Media Extraction Pipeline
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          An intelligent ingestion microservice that transforms messy, unstructured inputs (PDF invoices, voice notes, physical receipts) into validated relational database entities and real-time Google Sheets integrations using <span className="text-cyan-300 font-medium">Google Gemini</span> multimodal reasoning and persistent conversational context memory.
        </p>
      </div>

      {/* Animated Multimodal Pipeline Visualizer */}
      <div className="rounded-xl border border-white/10 bg-[#06080D] p-5 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <span className="font-mono text-xs text-slate-300 uppercase font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Interactive Multimodal Pipeline:
          </span>
          <span className="text-[10px] font-mono text-slate-500">Select an input type to run inference:</span>
        </div>

        {/* Input Format Selector Pills */}
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setActiveInput("invoice")}
            className={`p-3 rounded-lg flex items-center justify-center gap-2 font-mono text-xs transition-all border ${
              activeInput === "invoice"
                ? "bg-cyan-500/15 border-cyan-500/50 text-cyan-300 shadow-sm"
                : "bg-[#0B0F17] border-white/5 text-slate-400 hover:bg-[#131B2A] hover:text-slate-200"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="font-bold">PDF Invoice</span>
          </button>

          <button
            onClick={() => setActiveInput("audio")}
            className={`p-3 rounded-lg flex items-center justify-center gap-2 font-mono text-xs transition-all border ${
              activeInput === "audio"
                ? "bg-purple-500/15 border-purple-500/50 text-purple-300 shadow-sm"
                : "bg-[#0B0F17] border-white/5 text-slate-400 hover:bg-[#131B2A] hover:text-slate-200"
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span className="font-bold">Voice Note</span>
          </button>

          <button
            onClick={() => setActiveInput("receipt")}
            className={`p-3 rounded-lg flex items-center justify-center gap-2 font-mono text-xs transition-all border ${
              activeInput === "receipt"
                ? "bg-emerald-500/15 border-emerald-500/50 text-emerald-300 shadow-sm"
                : "bg-[#0B0F17] border-white/5 text-slate-400 hover:bg-[#131B2A] hover:text-slate-200"
            }`}
          >
            <Receipt className="w-3.5 h-3.5" />
            <span className="font-bold">Fuel Receipt</span>
          </button>
        </div>

        {/* Pipeline Diagram & JSON Stream */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center font-mono">
          {/* Ingestion Engine Status */}
          <div className="lg:col-span-4 p-4 rounded-lg bg-[#0B0F17] border border-white/10 space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-slate-400">INGESTION ENGINE</span>
              <span className="text-cyan-400 text-[10px] flex items-center gap-1">
                <Check className="w-3 h-3" /> Ready
              </span>
            </div>
            <div>
              <div className="text-white font-bold">{previews[activeInput].type}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">{previews[activeInput].format}</div>
            </div>

            <div className="pt-2 border-t border-white/5 space-y-1.5 text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Gemini Multimodal API
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Database className="w-3.5 h-3.5 text-amber-400" /> SQLite Context Store
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Sheet className="w-3.5 h-3.5 text-emerald-400" /> Google Sheets API Sync
              </div>
            </div>
          </div>

          {/* Structured Output Preview */}
          <div className="lg:col-span-8 p-3.5 rounded-lg bg-black/80 border border-white/10 text-xs overflow-x-auto">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px] text-slate-400">
              <span>STRUCTURED JSON OUTPUT (STANDARDIZED SCHEMA)</span>
              <span className="text-emerald-400 font-bold">Confidence: 99.4%</span>
            </div>
            <pre className="text-cyan-300 text-[11px] leading-relaxed pt-2">
              <code>{previews[activeInput].json}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Tech Stack Tags */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5">
        {["TypeScript", "React 19", "Express.js", "Google Gemini API", "SQLite (better-sqlite3)", "Google OAuth 2.0", "Framer Motion"].map((tech) => (
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
