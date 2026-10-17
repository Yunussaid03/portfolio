"use client";

import { useState } from "react";
import { User, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    // Trigger mailto link as fallback for immediate transmission
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:yunussaid2704@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-10">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Get In Touch - <span className="orange-text">Ask Me Anything!</span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Ready to collaborate or have an engineering role or project in mind? I&apos;m always open to new opportunities and interesting conversations.
        </p>
      </div>

      {/* Glassmorphic Contact Card */}
      <div className="glass-card p-6 sm:p-10">
        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(249,115,22,0.4)]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Message Prepared!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Your default email client has been opened with your inquiry directed to <span className="text-orange-400 font-mono">yunussaid2704@gmail.com</span>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: "", email: "", message: "" });
              }}
              className="btn-resume text-xs mt-4"
            >
              Send Another Note
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-mono text-slate-400 font-medium">
                Your Name
              </label>
              <div className="relative flex items-center">
                <User className="absolute left-4 w-4 h-4 text-orange-400/80 pointer-events-none" />
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-mono"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-mono text-slate-400 font-medium">
                Email Address
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 w-4 h-4 text-orange-400/80 pointer-events-none" />
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-mono"
                />
              </div>
            </div>

            {/* Message Input */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-mono text-slate-400 font-medium">
                Your Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-orange-400/80 pointer-events-none" />
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Let's build something impactful together..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-mono resize-none"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full btn-resume justify-center py-3.5 text-sm mt-2">
              <span>Send Message</span>
              <Send className="w-4 h-4 text-orange-400" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
