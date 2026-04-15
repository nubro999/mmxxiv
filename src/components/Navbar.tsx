"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowLogo(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top bar — logo centered */}
      <header className="fixed top-0 z-50 w-full">
        <div className="flex w-full items-center justify-center px-6 py-5">
          <a
            href="#"
            className={`transition-opacity duration-500 ${showLogo ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <Image
              src="/assets/logo-signature-white.png"
              alt="MMXXIV"
              width={600}
              height={120}
              className="h-6 w-auto"
              priority
            />
          </a>

          <button
            className="absolute right-6 text-white md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-white/5 bg-black/90 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-4 px-6 py-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Right-side nav — desktop only */}
      <nav
        className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-5 md:flex"
        onMouseLeave={() => setHovered(null)}
      >
        {navLinks.map((link, i) => (
          <button
            key={link.label}
            onClick={() => scrollTo(link.href)}
            onMouseEnter={() => setHovered(i)}
            className="group flex items-center gap-3 text-right"
          >
            <span
              className={`text-xs font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
                hovered === i
                  ? "text-rose"
                  : "text-rose/50"
              }`}
            >
              {link.label}
            </span>
            <span
              className={`block transition-all duration-300 ${
                hovered === i
                  ? "h-8 w-[3px] bg-rose"
                  : "h-4 w-[2px] bg-rose/40"
              }`}
            />
          </button>
        ))}
      </nav>
    </>
  );
}
