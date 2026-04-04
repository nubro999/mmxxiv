"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/* ── Pipeline isometric mini-icons (dark bg: white lines, gold accents) ── */

function MiniAdvisory() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
      {/* Isometric table */}
      <polygon points="20,10 34,18 20,26 6,18" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="1.2" />
      <line x1="6" y1="18" x2="6" y2="24" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="34" y1="18" x2="34" y2="24" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="20" y1="26" x2="20" y2="32" stroke="white" strokeWidth="1" strokeOpacity="0.5" />
      {/* Person silhouette */}
      <circle cx="20" cy="5" r="2.5" stroke="white" strokeWidth="1" fill="none" />
      <line x1="20" y1="7.5" x2="20" y2="10" stroke="white" strokeWidth="1" />
      {/* Gold document on table */}
      <rect x="16" y="15" width="8" height="5" rx="0.5" fill="#FED049" fillOpacity="0.5" stroke="#FED049" strokeWidth="0.5" transform="skewY(-8) translate(0,4)" />
    </svg>
  );
}

function MiniToken() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
      {/* Isometric coin */}
      <ellipse cx="20" cy="16" rx="12" ry="5" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="1.2" />
      <path d="M8,16 L8,22 Q8,27 20,27 Q32,27 32,22 L32,16" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="1.2" />
      <ellipse cx="20" cy="22" rx="12" ry="5" fill="none" stroke="white" strokeWidth="0.6" strokeOpacity="0.3" />
      {/* T mark */}
      <text x="20" y="20" textAnchor="middle" fill="#FED049" fontSize="8" fontWeight="800">T</text>
    </svg>
  );
}

function MiniDiamond() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
      {/* Isometric diamond */}
      <polygon points="20,6 34,18 20,30 6,18" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="1.2" />
      <polygon points="20,6 34,18 20,18" fill="white" fillOpacity="0.1" />
      <polygon points="20,18 34,18 20,30" fill="white" fillOpacity="0.03" />
      {/* Inner facet */}
      <line x1="20" y1="6" x2="20" y2="30" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="6" y1="18" x2="34" y2="18" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" />
      {/* Gold center */}
      <circle cx="20" cy="18" r="2.5" fill="#FED049" fillOpacity="0.7" />
    </svg>
  );
}

function MiniBuilding() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
      {/* Iso building */}
      <polygon points="20,6 32,13 20,20 8,13" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.2" />
      <polygon points="20,20 8,13 8,28 20,35" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="1.2" />
      <polygon points="20,20 32,13 32,28 20,35" fill="white" fillOpacity="0.03" stroke="white" strokeWidth="1.2" />
      {/* Windows */}
      <rect x="11" y="18" width="3" height="3" fill="#FED049" fillOpacity="0.4" />
      <rect x="11" y="24" width="3" height="3" fill="#FED049" fillOpacity="0.4" />
      {/* Door */}
      <polygon points="20,35 20,29 24,27 24,33" fill="#FED049" fillOpacity="0.3" />
    </svg>
  );
}

function MiniChart() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
      {/* Base platform */}
      <polygon points="20,28 36,20 36,24 20,32 4,24 4,20" fill="white" fillOpacity="0.05" stroke="white" strokeWidth="1" />
      {/* Bar 1 */}
      <polygon points="10,20 14,18 14,24 10,26" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.8" />
      {/* Bar 2 */}
      <polygon points="18,14 22,12 22,24 18,26" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="0.8" />
      {/* Bar 3 (tallest, gold) */}
      <polygon points="26,8 30,6 30,22 26,24" fill="#FED049" fillOpacity="0.3" stroke="#FED049" strokeWidth="0.8" />
      {/* Bidirectional arrows */}
      <line x1="6" y1="10" x2="6" y2="22" stroke="white" strokeWidth="1" strokeOpacity="0.4" />
      <polygon points="6,10 4,13 8,13" fill="white" fillOpacity="0.4" />
      <polygon points="6,22 4,19 8,19" fill="white" fillOpacity="0.4" />
    </svg>
  );
}

function MiniMegaphone() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="h-8 w-8">
      {/* Megaphone body */}
      <path d="M8,18 L18,14 L26,10 L26,30 L18,26 L8,22 Z" fill="white" fillOpacity="0.08" stroke="white" strokeWidth="1.2" />
      <path d="M8,18 L8,22 L4,21 L4,19 Z" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="0.8" />
      {/* Sound nodes */}
      <circle cx="32" cy="16" r="2" fill="#FED049" fillOpacity="0.5" />
      <circle cx="36" cy="20" r="1.5" fill="#FED049" fillOpacity="0.3" />
      <circle cx="32" cy="26" r="2" fill="#FED049" fillOpacity="0.5" />
      {/* Waves */}
      <path d="M28,14 Q32,20 28,26" stroke="white" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
    </svg>
  );
}

const pipeline: { step: string; label: string; sub: string; icon: ReactNode }[] = [
  { step: "01", label: "Advisory", sub: "Project Team", icon: <MiniAdvisory /> },
  { step: "02", label: "Token Economy", sub: "Design & Allocation", icon: <MiniToken /> },
  { step: "03", label: "Venture Capital", sub: "Fundraising", icon: <MiniDiamond /> },
  { step: "04", label: "Exchange Listing", sub: "CEX / DEX", icon: <MiniBuilding /> },
  { step: "05", label: "Market Maker", sub: "Liquidity", icon: <MiniChart /> },
  { step: "06", label: "Marketing", sub: "Web3 Growth", icon: <MiniMegaphone /> },
];

const taskForce = {
  primary: [
    "Weekly calls with your team",
    "Introductions to exchanges",
    "Tokenomics design and modification",
    "Listing communication with exchanges",
    "Roadmap & white paper recommendations",
    "Overall primary listing strategy",
  ],
  post: [
    "Secondary listing strategy",
    "Derivative & perpetual products",
    "Market making & trading strategy",
  ],
};

export default function HowWeWork() {
  return (
    <section id="process" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gold">
            How We Work
          </span>
          <h2 className="text-4xl font-black tracking-tighter">
            Token launch task force.
          </h2>
          <p className="mt-4 leading-relaxed text-white/60">
            A dedicated team guiding your project from initial advisory through
            post-launch management.
          </p>
        </div>

        {/* Pipeline with isometric icons */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {pipeline.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative border bg-white/5 p-6 backdrop-blur-sm ${
                i === 3 ? "border-gold/40" : "border-white/10"
              }`}
            >
              <div className="mb-3">{item.icon}</div>
              <span className="mb-2 block font-[family-name:var(--font-dm-serif)] text-lg text-gold/40">
                {item.step}
              </span>
              <h3 className="text-sm font-bold">{item.label}</h3>
              <p className="mt-1 text-xs text-white/40">{item.sub}</p>

              {/* Gold glow ring on active step (Exchange) */}
              {i === 3 && (
                <motion.div
                  className="pointer-events-none absolute -inset-[2px] border-2 border-gold/30"
                  animate={{ opacity: [0.3, 0.7, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              {i < pipeline.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-gold/60 lg:block">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Task Force Details */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 bg-white/5 p-8"
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-gold">
              Primary Listing Management
            </span>
            <ul className="space-y-3">
              {taskForce.primary.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 bg-white/5 p-8"
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-gold">
              Post-Listing Management
            </span>
            <ul className="space-y-3">
              {taskForce.post.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
