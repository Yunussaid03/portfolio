"use client";

import { motion } from "framer-motion";

type BrandIconProps = {
  symbol: string;
  color: string;
};

function BrandIcon({ symbol, color }: BrandIconProps) {
  return (
    <div
      className="flex h-12 w-12 items-center justify-center rounded-3xl text-sm font-black text-white shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
}

const stackGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", symbol: "⚛", color: "#61dafb" },
      { name: "Next.js", symbol: "N", color: "#000000" },
      { name: "TypeScript", symbol: "TS", color: "#3178c6" },
      { name: "JavaScript", symbol: "JS", color: "#f7df1e" },
    ],
  },
  {
    title: "Systems",
    items: [
      { name: "Java", symbol: "J", color: "#f89820" },
      { name: "C++", symbol: "C++", color: "#00599c" },
      { name: "C", symbol: "C", color: "#9db4d7" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Supabase", symbol: "S", color: "#3ea6ff" },
      { name: "MySQL", symbol: "DB", color: "#00758f" },
      { name: "Git", symbol: "G", color: "#f1502f" },
    ],
  },
];

export default function StageOneOverview() {
  return (
    <section className="relative z-10 w-full bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="rounded-3xl border border-neutral-800 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur md:p-8"
          >
            <p className="text-[0.72rem] uppercase tracking-[0.35em] text-neutral-500">About</p>
            <h2 className="mt-4 max-w-2xl text-[clamp(2.4rem,7vw,4.4rem)] font-black uppercase leading-[0.98] tracking-[-0.08em] text-white">
              I make simple, solid products for real usage.
            </h2>
            <p className="mt-5 max-w-xl text-base text-neutral-300 sm:text-lg">
              I’m Yunus, a Computer Science student who builds polished web experiences, dependable backend services, and practical tools for projects that actually ship.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-400 sm:text-base">
              <li>• Front-end interfaces that feel clean and responsive.</li>
              <li>• Backend systems built with sensible data flow and stability.</li>
              <li>• Work that keeps learning, iteration, and real results in focus.</li>
            </ul>
          </motion.article>

          <div className="grid gap-6">
            {stackGroups.map((group) => (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
                className="rounded-3xl border border-neutral-800 bg-neutral-950/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
              >
                <p className="text-[0.72rem] uppercase tracking-[0.35em] text-neutral-500">{group.title}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4"
                    >
                      <BrandIcon symbol={item.symbol} color={item.color} />
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-neutral-400">{item.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
              className="relative overflow-hidden rounded-full border border-orange-500/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
            >
              <div className="absolute inset-0 rounded-full border border-white/10" />
              <div className="absolute inset-8 rounded-full border border-orange-500/20" />
              <div className="wheel-spin absolute inset-12 rounded-full border border-orange-400/20" />
              <div className="relative flex h-full flex-col items-center justify-center gap-4">
                <p className="text-[0.72rem] uppercase tracking-[0.35em] text-neutral-500">Motion</p>
                <p className="max-w-56 text-center text-base text-neutral-200 sm:text-lg">
                  Rotating ideas, steady execution, and a simple visual edge.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
