"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services", active: true },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sage/80 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-8 py-6">
        <div className="flex items-center gap-4">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj7XOBmyxTKZHG8DApN5SC24Ga-XarXzEk_YqvMSjt_qc4Ws2499NL0n5hEehitc0JKnhwuzheQx5Jcq6XSd2SExN_sNMIcrWv32iJxUedWEK4bw3nD3BN_aeVG3QnOZ7Y0Q6-LHosXVOY7itjM3ydYurn9D0ogOE70IqVLH35FqEfRajFQazCHuYGoe13KVHcf0U0_0yKzyIUtvZA6LKuJcDDK-c-V76Us_EJvQbxHDewUFCvW7-3_HdB8VEyJsrG4hhIrRIAiwrx"
            alt="MMXXIV logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="text-xl font-black tracking-tighter text-navy">
            MMXXIV
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden items-center space-x-10 font-medium tracking-tight md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={
                link.active
                  ? "border-b-2 border-teal pb-1 font-bold text-teal transition-colors"
                  : "text-navy/70 transition-colors hover:text-teal"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-navy md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-navy/10 md:hidden"
          >
            <div className="flex flex-col gap-4 px-8 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-medium text-navy/70 transition-colors hover:text-teal"
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
  );
}
