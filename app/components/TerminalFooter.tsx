"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.26.8-.57 0-.28-.01-1.02-.02-2-3.34.72-4.04-1.62-4.04-1.62-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.74.08-.74 1.2.08 1.84 1.25 1.84 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.8.42-1.32.76-1.62-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0112 5.8c1.02.004 2.05.14 3.01.41 2.28-1.55 3.29-1.23 3.29-1.23.66 1.64.24 2.86.12 3.16.77.84 1.23 1.92 1.23 3.24 0 4.63-2.8 5.65-5.48 5.95.43.38.82 1.1.82 2.22 0 1.6-.02 2.88-.02 3.27 0 .32.2.68.82.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M4.98 3.5C4.98 5.43 3.42 7 1.5 7S-1.98 5.43-1.98 3.5  -0.42 0 1.5 0s3.48 1.57 3.48 3.5zM0 8.5H3v12H0v-12zM7 8.5h2.9v1.7h.04c.4-.76 1.4-1.56 2.9-1.56 3.1 0 3.7 2 3.7 4.6v6.3H12V12c0-1.6 0-3.7-2.3-3.7-2.3 0-2.6 1.8-2.6 3.6v7.6H4.5v-12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .5 2.5 1 .5.5.9 1.3 1 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.5 2-1 2.5-.5.5-1.3.9-2.5 1-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.5-2.5-1-.5-.5-.9-1.3-1-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.5-2 1-2.5.5-.5 1.3-.9 2.5-1 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.2 0 6.9.1 5.5.2 4.4.6 3.5 1.5 2.6 2.4 2.2 3.5 2.1 4.9 2 6.2 2 6.6 2 10s0 3.8.1 5.1c.1 1.4.5 2.5 1.4 3.4.9.9 2 1.3 3.4 1.4 1.3.1 1.7.1 5.1.1s3.8 0 5.1-.1c1.4-.1 2.5-.5 3.4-1.4.9-.9 1.3-2 1.4-3.4.1-1.3.1-1.7.1-5.1s0-3.8-.1-5.1c-.1-1.4-.5-2.5-1.4-3.4C19.5.6 18.4.2 17 .1 15.7 0 15.3 0 12 0zm0 5.8A6.2 6.2 0 105.8 12 6.2 6.2 0 0012 5.8zm0 10.2A4 4 0 118 12a4 4 0 014 4zm5.4-10.7a1.44 1.44 0 11-1.44-1.44A1.44 1.44 0 0117.4 4.3z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

const links = [
  { label: "GitHub", href: "https://github.com/Yunussaid03", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yunus-said-6340253b8/", icon: LinkedInIcon },
  { label: "Email", href: "mailto:yunussaid2704@gmail.com", icon: EmailIcon },
  { label: "Instagram", href: "https://instagram.com/kingsman_.__", icon: InstagramIcon },
];

export default function TerminalFooter() {
  return (
    <footer id="contact" className="flex min-h-[50vh] w-full flex-col items-center justify-center border-t border-neutral-800 bg-black px-6 py-16 text-white md:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        <div className="w-full rounded-none border border-neutral-800 bg-neutral-950/80 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] md:p-8">
          <p className="mb-3 text-[0.72rem] uppercase tracking-[0.35em] text-neutral-500">
            Terminal Contact
          </p>
          <pre className="overflow-x-auto font-mono text-base text-neutral-100 sm:text-xl md:text-2xl">
            <code>$ whoami<br/>yunus-said<br/>$ echo {'Let\u0027s build something amazing'}</code>
          </pre>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="group flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm uppercase tracking-[0.18em] text-neutral-200 transition-colors hover:border-neutral-700 hover:bg-neutral-900 md:text-base"
            >
              <Icon />
              <span>{label}</span>
              <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-white" />
            </motion.a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
