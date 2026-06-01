"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home", color: "from-yellow-400 to-orange-400" },
    { label: "About Me", href: "#about", color: "from-blue-400 to-blue-500" },
    { label: "Experience", href: "#experience", color: "from-cyan-400 to-teal-400" },
    { label: "Projects", href: "#projects", color: "from-purple-400 to-indigo-500" },
  ];

  const socialLinks = [
    { label: "Github", href: "https://github.com/Yunussaid03" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yunus-said-6340253b8/" },
    { label: "Email", href: "mailto:yunussaid2704@gmail.com" },
    { label: "Instagram", href: "https://instagram.com/kingsman_.__" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button - visible only on mobile */}
      <button
        onClick={toggleMenu}
        className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 backdrop-blur transition duration-300 hover:bg-white/10"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="relative h-5 w-5"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 8 },
            }}
            className="absolute left-0 top-0 block h-0.5 w-5 bg-white"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="absolute left-0 top-2 block h-0.5 w-5 bg-white"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -8 },
            }}
            className="absolute left-0 top-4 block h-0.5 w-5 bg-white"
          />
        </motion.div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm"
            />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 flex items-center justify-center"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                className="w-full max-w-lg space-y-12 px-6 py-12"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-4xl text-white/60 transition hover:text-white"
                  >
                    ✕
                  </button>
                </div>

                {/* Navigation Menu */}
                <div>
                  <p className="mb-6 text-sm uppercase tracking-[0.24em] text-neutral-500">
                    MENU
                  </p>
                  <nav className="space-y-4">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="group flex items-center gap-3 text-xl font-semibold uppercase tracking-[0.08em] text-white transition hover:text-orange-400"
                        >
                          <div
                            className={`h-3 w-3 rounded-full bg-gradient-to-r ${link.color} transition duration-300 group-hover:scale-125`}
                          />
                          <span>{link.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Social Links */}
                <div>
                  <p className="mb-6 text-sm uppercase tracking-[0.24em] text-neutral-500">
                    SOCIAL
                  </p>
                  <div className="space-y-3">
                    {socialLinks.map((link, index) => (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index + navLinks.length) * 0.05 }}
                      >
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="text-lg text-neutral-300 transition hover:text-orange-400"
                        >
                          {link.label}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNav;
