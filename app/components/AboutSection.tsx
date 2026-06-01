"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Spotlight } from "./Spotlight";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const techCards = [
  {
    title: "React / Next.js",
    copy: "Modern UI and web performance with React components, SSR, and fast loading.",
  },
  {
    title: "Java / C++",
    copy: "Core programming foundations for reliable systems, tooling, and thoughtful architecture.",
  },
  {
    title: "Supabase / MySQL",
    copy: "Realtime data, auth, and storage for apps that need a backend you can trust.",
  },
  {
    title: "Git",
    copy: "Version control, clean history, and collaboration across every project.",
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
      id="about"
      ref={sectionRef}
      className="relative min-h-[220vh] overflow-hidden bg-black text-white"
      aria-label="About and tech stack"
    >
      <Spotlight className="absolute inset-0" />
      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_1fr] lg:px-16 lg:py-20">
        <div
          ref={stickyRef}
          className="lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:items-center"
        >
          <article className="max-w-xl border border-white/10 bg-white/4 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur md:p-8 lg:p-10">
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.35em] text-neutral-400">
              About / Stack
            </p>
            <h2 className="max-w-md text-[clamp(3rem,8vw,5rem)] font-black uppercase leading-[0.95] tracking-[-0.08em] text-white">
              WHAT I DO
            </h2>
            <p className="mt-6 max-w-md text-base text-neutral-300 sm:text-lg">
              I build clean web apps, solid backend flows, and practical tools that work without noise. My focus is useful features, stable delivery, and interfaces people actually enjoy.
            </p>
            <ul className="mt-6 max-w-md space-y-3 text-sm text-neutral-400 sm:text-base">
              <li>• Simple, fast, and maintainable front-end experiences.</li>
              <li>• Backend systems that keep data safe and apps reliable.</li>
              <li>• Real tools built for actual use, not just visuals.</li>
            </ul>
          </article>
        </div>

        <div className="flex flex-col justify-center gap-6 py-10 lg:py-20">
          {techCards.map((card, index) => (
            <article
              key={card.title}
              className="tech-card rounded-3xl border border-white/10 bg-white/4 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/6 md:p-8"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 h-1 w-24 rounded-full bg-linear-to-r from-orange-400 to-transparent" />
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
