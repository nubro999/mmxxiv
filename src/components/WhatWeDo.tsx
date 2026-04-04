"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

/* ── Isometric icon components (30° standard, navy stroke, teal/sage fills) ── */

function IsoStrategy() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
      {/* 3×3 isometric grid base */}
      {[0, 1, 2].map(r =>
        [0, 1, 2].map(c => {
          const x = 32 + (c - r) * 10;
          const y = 20 + (c + r) * 6;
          return (
            <polygon key={`${r}-${c}`}
              points={`${x},${y - 4} ${x + 10},${y} ${x},${y + 4} ${x - 10},${y}`}
              fill={r === 1 && c === 1 ? "#007580" : "#D8EBE4"}
              fillOpacity={r === 1 && c === 1 ? 0.3 : 0.5}
              stroke="#282846" strokeWidth="0.8"
            />
          );
        })
      )}
      {/* Gold path arrow across grid */}
      <polyline points="12,26 22,32 32,28 42,34 52,28" stroke="#FED049" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="52,28 48,25 48,31" fill="#FED049" />
      {/* Flag at end */}
      <line x1="52" y1="20" x2="52" y2="28" stroke="#282846" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="52,20 60,23 52,26" fill="#FED049" opacity="0.8" />
    </svg>
  );
}

function IsoTokenomics() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
      {/* Stacked isometric coins */}
      {[0, 1, 2].map(i => {
        const y = 40 - i * 8;
        return (
          <g key={i}>
            {/* Coin top (ellipse) */}
            <ellipse cx="24" cy={y - 3} rx="14" ry="5" fill={i === 2 ? "#FED049" : "#D8EBE4"} stroke="#282846" strokeWidth="1.2" />
            {/* Coin side */}
            <path d={`M10,${y - 3} L10,${y + 2} Q10,${y + 7} 24,${y + 7} Q38,${y + 7} 38,${y + 2} L38,${y - 3}`}
              fill={i === 2 ? "rgba(254,208,73,0.4)" : "rgba(0,117,128,0.15)"} stroke="#282846" strokeWidth="1.2" />
          </g>
        );
      })}
      {/* Pie chart at right */}
      <circle cx="46" cy="24" r="10" fill="#D8EBE4" stroke="#282846" strokeWidth="1.2" />
      <path d="M46,24 L46,14 A10,10 0 0,1 54.66,29 Z" fill="#007580" fillOpacity="0.4" stroke="#282846" strokeWidth="0.8" />
      <path d="M46,24 L54.66,29 A10,10 0 0,1 41,33.66 Z" fill="#FED049" fillOpacity="0.6" stroke="#282846" strokeWidth="0.8" />
    </svg>
  );
}

function IsoExchange() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
      {/* Isometric building */}
      {/* Roof */}
      <polygon points="32,8 52,20 32,32 12,20" fill="#D8EBE4" stroke="#282846" strokeWidth="1.5" />
      {/* Left wall */}
      <polygon points="32,32 12,20 12,42 32,54" fill="rgba(0,117,128,0.2)" stroke="#282846" strokeWidth="1.5" />
      {/* Right wall */}
      <polygon points="32,32 52,20 52,42 32,54" fill="rgba(0,117,128,0.1)" stroke="#282846" strokeWidth="1.5" />
      {/* Windows left */}
      <rect x="17" y="28" width="5" height="4" rx="0.5" fill="#007580" fillOpacity="0.4" transform="skewY(30) translate(-10,-7)" />
      <rect x="17" y="36" width="5" height="4" rx="0.5" fill="#007580" fillOpacity="0.4" transform="skewY(30) translate(-10,-7)" />
      {/* Door */}
      <polygon points="32,54 32,44 37,41 37,51" fill="#FED049" fillOpacity="0.6" stroke="#282846" strokeWidth="1" />
      {/* Check mark */}
      <polyline points="28,18 31,21 38,14" stroke="#FED049" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IsoHandshake() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
      {/* Left cube */}
      <polygon points="22,22 34,28 22,34 10,28" fill="#D8EBE4" stroke="#282846" strokeWidth="1.2" />
      <polygon points="22,34 10,28 10,40 22,46" fill="rgba(0,117,128,0.25)" stroke="#282846" strokeWidth="1.2" />
      <polygon points="22,34 34,28 34,40 22,46" fill="rgba(0,117,128,0.12)" stroke="#282846" strokeWidth="1.2" />
      {/* Right cube */}
      <polygon points="42,22 54,28 42,34 30,28" fill="#D8EBE4" stroke="#282846" strokeWidth="1.2" />
      <polygon points="42,34 30,28 30,40 42,46" fill="rgba(0,117,128,0.25)" stroke="#282846" strokeWidth="1.2" />
      <polygon points="42,34 54,28 54,40 42,46" fill="rgba(0,117,128,0.12)" stroke="#282846" strokeWidth="1.2" />
      {/* Connection bridge (gold) */}
      <line x1="28" y1="34" x2="36" y2="34" stroke="#FED049" strokeWidth="2.5" strokeLinecap="round" />
      {/* Spark dots */}
      <circle cx="32" cy="30" r="1.5" fill="#FED049" />
      <circle cx="29" cy="27" r="1" fill="#FED049" opacity="0.5" />
      <circle cx="35" cy="27" r="1" fill="#FED049" opacity="0.5" />
    </svg>
  );
}

function IsoMegaphone() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
      {/* Megaphone body (isometric) */}
      <path d="M14,30 L30,22 L38,18 L38,42 L30,38 L14,34 Z" fill="#D8EBE4" stroke="#282846" strokeWidth="1.5" />
      <path d="M14,30 L14,34 L8,33 L8,31 Z" fill="rgba(0,117,128,0.3)" stroke="#282846" strokeWidth="1" />
      <line x1="38" y1="18" x2="38" y2="42" stroke="#282846" strokeWidth="1.5" />
      {/* Sound wave nodes */}
      {[
        { x: 46, y: 24 },
        { x: 52, y: 20 },
        { x: 54, y: 30 },
        { x: 50, y: 36 },
        { x: 46, y: 40 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="3" fill="#007580" fillOpacity="0.2" stroke="#282846" strokeWidth="0.8" />
          <line x1="38" y1="30" x2={n.x} y2={n.y} stroke="#007580" strokeWidth="0.6" strokeOpacity="0.3" strokeDasharray="2 2" />
        </g>
      ))}
      {/* Gold accent on bell */}
      <circle cx="38" cy="30" r="2" fill="#FED049" />
    </svg>
  );
}

function IsoShield() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-12 w-12">
      {/* Shield shape */}
      <path d="M32,8 L50,18 L50,36 Q50,50 32,56 Q14,50 14,36 L14,18 Z"
        fill="#D8EBE4" stroke="#282846" strokeWidth="1.5" />
      {/* Inner shield face */}
      <path d="M32,14 L44,22 L44,35 Q44,46 32,50 Q20,46 20,35 L20,22 Z"
        fill="rgba(0,117,128,0.1)" stroke="#282846" strokeWidth="0.8" />
      {/* Rising chart inside */}
      <polyline points="24,40 30,34 34,37 40,26" stroke="#007580" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Arrow tip */}
      <polygon points="40,26 37,27 39,30" fill="#007580" />
      {/* Gold star accent */}
      <circle cx="40" cy="26" r="2" fill="#FED049" />
    </svg>
  );
}

const services: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <IsoStrategy />,
    title: "Overall Listing Strategy",
    desc: "Tailored exchange listing strategies to achieve your long-term goals in the most cost-effective way.",
  },
  {
    icon: <IsoTokenomics />,
    title: "Tokenomics & Allocation",
    desc: "Token design, economies, distribution strategies, and go-to-market structuring.",
  },
  {
    icon: <IsoExchange />,
    title: "CEX & DEX Listing",
    desc: "Direct exchange introductions with favorable commercial terms and higher approval probability.",
  },
  {
    icon: <IsoHandshake />,
    title: "VC & Market Makers",
    desc: "Connections with leading investors, market makers, and partners essential for a successful TGE.",
  },
  {
    icon: <IsoMegaphone />,
    title: "Marketing & Community",
    desc: "Community building, user acquisition campaigns, and strategic marketing for sustained growth.",
  },
  {
    icon: <IsoShield />,
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
              className="group border border-navy/10 bg-white p-8 transition-colors duration-300 hover:border-teal hover:bg-teal [&:hover_svg]:brightness-0 [&:hover_svg]:invert"
            >
              <div className="mb-6 transition-all">
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
