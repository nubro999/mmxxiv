"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="3" fill="currentColor" />
        <line x1="24" y1="4" x2="24" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="36" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <line x1="36" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Overall Listing Strategy",
    desc: "Tailored exchange listing strategies to achieve your long-term goals in the most cost-effective way.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <rect x="8" y="20" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="24" y="12" width="12" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
        <circle cx="36" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <line x1="14" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    ),
    title: "Tokenomics & Allocation",
    desc: "Token design, economies, distribution strategies, and go-to-market structuring.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <rect x="6" y="8" width="36" height="26" rx="3" stroke="currentColor" strokeWidth="2" />
        <line x1="6" y1="18" x2="42" y2="18" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="22" width="8" height="5" rx="1" fill="currentColor" fillOpacity="0.3" />
        <rect x="24" y="22" width="12" height="2" rx="1" fill="currentColor" fillOpacity="0.2" />
        <rect x="24" y="27" width="8" height="2" rx="1" fill="currentColor" fillOpacity="0.2" />
        <line x1="16" y1="38" x2="32" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "CEX & DEX Listing",
    desc: "Direct exchange introductions with favorable commercial terms and higher approval probability.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <path d="M12 36 L24 12 L36 36" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="currentColor" fillOpacity="0.05" />
        <line x1="16" y1="28" x2="32" y2="28" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="24" cy="22" r="3" fill="currentColor" fillOpacity="0.3" />
      </svg>
    ),
    title: "VC & Market Makers",
    desc: "Connections with leading investors, market makers, and partners essential for a successful TGE.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <circle cx="24" cy="16" r="8" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="34" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="36" cy="34" r="5" stroke="currentColor" strokeWidth="1.5" />
        <line x1="18" y1="22" x2="14" y2="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="30" y1="22" x2="34" y2="30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      </svg>
    ),
    title: "Marketing & Community",
    desc: "Community building, user acquisition campaigns, and strategic marketing for sustained growth.",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
        <path d="M8 24 Q8 8 24 8 Q40 8 40 24 Q40 40 24 40 Q8 40 8 24Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <polyline points="16,24 22,30 34,18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Post-Launch Management",
    desc: "Lifetime support including secondary listings, derivatives, and trading strategy optimization.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-teal">
            What We Do
          </span>
          <h2 className="text-4xl font-black tracking-tighter text-navy">
            End-to-end token listing & launch.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-navy/70">
            From tokenomics design to post-launch management, we cover every
            stage of your exchange listing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group border border-navy/5 bg-white p-8 transition-colors duration-300 hover:bg-teal"
            >
              <div className="mb-6 text-teal transition-colors group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-lg font-bold text-navy transition-colors group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy/60 transition-colors group-hover:text-white/80">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
