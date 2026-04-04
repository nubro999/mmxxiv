"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/* ── Symbolic monoline icons (white on teal bg) ── */

function SymCompass() {
  return (
    <svg viewBox="0 0 56 56" fill="none" className="h-14 w-14">
      {/* Outer ring */}
      <circle cx="28" cy="28" r="22" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" />
      <circle cx="28" cy="28" r="18" stroke="white" strokeWidth="0.8" strokeOpacity="0.2" />
      {/* Cardinal marks */}
      <line x1="28" y1="4" x2="28" y2="10" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
      <line x1="28" y1="46" x2="28" y2="52" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
      <line x1="4" y1="28" x2="10" y2="28" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
      <line x1="46" y1="28" x2="52" y2="28" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
      {/* Needle - north (gold) */}
      <polygon points="28,12 31,28 28,26 25,28" fill="#FED049" fillOpacity="0.8" />
      {/* Needle - south */}
      <polygon points="28,44 31,28 28,30 25,28" fill="white" fillOpacity="0.25" />
      {/* Center dot */}
      <circle cx="28" cy="28" r="2.5" fill="white" fillOpacity="0.8" />
    </svg>
  );
}

function SymHands() {
  return (
    <svg viewBox="0 0 56 56" fill="none" className="h-14 w-14">
      {/* Left hand arc */}
      <path d="M8,38 Q8,20 22,16" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" fill="none" strokeLinecap="round" />
      {/* Right hand arc */}
      <path d="M48,38 Q48,20 34,16" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" fill="none" strokeLinecap="round" />
      {/* Base platform */}
      <path d="M8,38 Q28,48 48,38" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" fill="none" strokeLinecap="round" />
      {/* Inner cradle lines */}
      <path d="M14,34 Q28,42 42,34" stroke="white" strokeWidth="0.8" strokeOpacity="0.2" fill="none" />
      {/* Supported element (cube) */}
      <polygon points="28,16 36,20 28,24 20,20" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.2" strokeOpacity="0.5" />
      <polygon points="28,24 20,20 20,26 28,30" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />
      <polygon points="28,24 36,20 36,26 28,30" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />
      {/* Gold glow */}
      <circle cx="28" cy="22" r="3" fill="#FED049" fillOpacity="0.3" />
    </svg>
  );
}

function SymConnect() {
  return (
    <svg viewBox="0 0 56 56" fill="none" className="h-14 w-14">
      {/* Left node */}
      <circle cx="14" cy="28" r="6" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" fill="white" fillOpacity="0.06" />
      <circle cx="14" cy="28" r="2" fill="white" fillOpacity="0.5" />
      {/* Right node */}
      <circle cx="42" cy="28" r="6" stroke="white" strokeWidth="1.5" strokeOpacity="0.6" fill="white" fillOpacity="0.06" />
      <circle cx="42" cy="28" r="2" fill="white" fillOpacity="0.5" />
      {/* Connection line */}
      <line x1="20" y1="28" x2="36" y2="28" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
      {/* Gold bridge node */}
      <circle cx="28" cy="28" r="3.5" fill="#FED049" fillOpacity="0.7" stroke="#FED049" strokeWidth="1" />
      {/* Satellite nodes */}
      <circle cx="28" cy="12" r="3" stroke="white" strokeWidth="1" strokeOpacity="0.3" fill="white" fillOpacity="0.04" />
      <circle cx="28" cy="44" r="3" stroke="white" strokeWidth="1" strokeOpacity="0.3" fill="white" fillOpacity="0.04" />
      {/* Vertical connections */}
      <line x1="28" y1="15" x2="28" y2="24.5" stroke="white" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="2 2" />
      <line x1="28" y1="31.5" x2="28" y2="41" stroke="white" strokeWidth="0.8" strokeOpacity="0.2" strokeDasharray="2 2" />
    </svg>
  );
}

const focuses: { keyword: string; desc: string; icon: ReactNode }[] = [
  {
    keyword: "Advise",
    desc: "We advise founders on everything from token design & economies, token launches & go-to-market strategy, structuring, technology, and fundraising.",
    icon: <SymCompass />,
  },
  {
    keyword: "Support",
    desc: "We support teams in successfully launching their tokens by advising on token distribution strategies, token economies, community building & user acquisition.",
    icon: <SymHands />,
  },
  {
    keyword: "Connect",
    desc: "We connect projects with leading investors, centralized exchanges, market makers, and other partners essential to ensure a successful TGE.",
    icon: <SymConnect />,
  },
];

export default function KeyFocus() {
  return (
    <section className="bg-teal py-24 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gold">
            3 Key Focus
          </span>
          <h2 className="text-4xl font-black tracking-tighter">
            How we deliver results.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {focuses.map((focus, i) => (
            <motion.div
              key={focus.keyword}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border border-white/10 bg-white/5 p-10 backdrop-blur-sm"
            >
              <div className="mb-6">{focus.icon}</div>
              <span className="mb-2 block font-[family-name:var(--font-dm-serif)] text-5xl text-gold/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-4 text-2xl font-black">{focus.keyword}</h3>
              <p className="text-sm leading-relaxed text-white/70">
                {focus.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
