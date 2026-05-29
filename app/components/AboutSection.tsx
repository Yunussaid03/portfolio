"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const techCards = [
  {
    title: "Node.js",
    copy: "Fast runtime orchestration, API resilience, and product-grade delivery pipelines.",
    accent: "from-white/10 to-white/5",
  },
  {
    title: "C / C++",
    copy: "Low-level clarity for embedded systems, performance-critical tooling, and control loops.",
    accent: "from-white/12 to-transparent",
  },
  {
    title: "UNIX / Ubuntu",
    copy: "Shell fluency, containerized workflows, and reliable production operations at scale.",
    accent: "from-white/10 to-white/5",
  },
  {
    title: "Agentic AI",
    copy: "Human-in-the-loop automation, orchestration logic, and decision systems with discipline.",
    accent: "from-white/12 to-transparent",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !stickyRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: stickyRef.current,
        pinSpacing: false,
        scrub: 0.8,
      });

      gsap.utils.toArray<HTMLElement>(".tech-card").forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            delay: index * 0.05,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top+=180 center",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[220vh] overflow-hidden bg-black text-white"
      aria-label="About and tech stack"
    >
      <div className="mx-auto grid min-h-screen w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_1fr] lg:px-16 lg:py-20">
        <div
          ref={stickyRef}
          className="lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:items-center"
        >
          <article className="max-w-xl border border-white/10 bg-white/4 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur md:p-8 lg:p-10">
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.35em] text-neutral-400">
              About / Stack
            </p>
            <h2 className="max-w-md text-[clamp(3rem,8vw,5rem)] font-black uppercase leading-[0.95] tracking-[-0.08em] text-white">
              THE ARSENAL
            </h2>
            <p className="mt-6 max-w-md text-base text-neutral-300 sm:text-lg">
              I build systems that balance ruthless precision with calm execution. The result is a portfolio that feels industrial, responsive, and unmistakably modern.
            </p>
            <p className="mt-4 max-w-md text-sm uppercase tracking-[0.24em] text-neutral-400">
              Engineering mindset · Human-centered delivery · Brutalist clarity
            </p>
          </article>
        </div>

        <div className="flex flex-col justify-center gap-6 py-10 lg:py-20">
          {techCards.map((card, index) => (
            <article
              key={card.title}
              className="tech-card rounded-3xl border border-white/10 bg-white/4 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/6 md:p-8"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className={`mb-4 h-1 w-24 rounded-full bg-linear-to-r ${card.accent}`} />
              <p className="text-[0.72rem] uppercase tracking-[0.35em] text-neutral-400">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] text-white md:text-3xl">
                {card.title}
              </h3>
              <p className="mt-4 max-w-md text-base text-neutral-300">{card.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
