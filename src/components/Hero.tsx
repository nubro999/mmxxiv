"use client";

import { motion } from "framer-motion";

function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      {/* Background glow */}
      <defs>
        <radialGradient id="glow" cx="250" cy="250" r="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#007580" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#007580" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#007580" />
          <stop offset="100%" stopColor="#007580" stopOpacity="0.6" />
        </linearGradient>
        <filter id="glowFilter">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="500" height="500" fill="url(#glow)" />

      {/* Top: Project tokens */}
      {[
        { x: 150, y: 60, delay: 0 },
        { x: 250, y: 40, delay: 0.3 },
        { x: 350, y: 60, delay: 0.6 },
      ].map((p, i) => (
        <g key={i}>
          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Isometric cube */}
            <polygon points={`${p.x},${p.y - 15} ${p.x + 20},${p.y - 5} ${p.x},${p.y + 5} ${p.x - 20},${p.y - 5}`} fill="#D8EBE4" stroke="#282846" strokeWidth="1.5" />
            <polygon points={`${p.x},${p.y + 5} ${p.x + 20},${p.y - 5} ${p.x + 20},${p.y + 10} ${p.x},${p.y + 20}`} fill="#007580" fillOpacity="0.3" stroke="#282846" strokeWidth="1.5" />
            <polygon points={`${p.x},${p.y + 5} ${p.x - 20},${p.y - 5} ${p.x - 20},${p.y + 10} ${p.x},${p.y + 20}`} fill="#007580" fillOpacity="0.15" stroke="#282846" strokeWidth="1.5" />
          </motion.g>
        </g>
      ))}

      {/* Labels */}
      <text x="150" y="95" textAnchor="middle" fill="#282846" fontSize="9" fontWeight="600" opacity="0.5">Project A</text>
      <text x="250" y="75" textAnchor="middle" fill="#282846" fontSize="9" fontWeight="600" opacity="0.5">Project B</text>
      <text x="350" y="95" textAnchor="middle" fill="#282846" fontSize="9" fontWeight="600" opacity="0.5">Project C</text>

      {/* Arrows: tokens → gateway */}
      {[
        { x1: 150, y1: 105, x2: 220, y2: 190 },
        { x1: 250, y1: 85, x2: 250, y2: 190 },
        { x1: 350, y1: 105, x2: 280, y2: 190 },
      ].map((a, i) => (
        <motion.line
          key={`arr-${i}`}
          x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
          stroke="#FED049" strokeWidth="2" strokeDasharray="6 4"
          animate={{ strokeDashoffset: [20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Center: MMXXIV Gateway (glassmorphic panel) */}
      <motion.g
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "250px 260px" }}
      >
        {/* Glow behind */}
        <rect x="160" y="195" width="180" height="130" rx="8" fill="#007580" fillOpacity="0.1" filter="url(#glowFilter)" />
        {/* Main panel */}
        <rect x="170" y="200" width="160" height="120" rx="6" fill="#007580" fillOpacity="0.08" stroke="#007580" strokeWidth="2" />
        {/* Inner glow line */}
        <rect x="175" y="205" width="150" height="110" rx="4" fill="none" stroke="#007580" strokeWidth="0.5" strokeOpacity="0.3" />
        {/* Text */}
        <text x="250" y="248" textAnchor="middle" fill="#007580" fontSize="14" fontWeight="900" letterSpacing="-0.5">MMXXIV</text>
        <text x="250" y="268" textAnchor="middle" fill="#282846" fontSize="10" fontWeight="600" opacity="0.7">Gateway</text>
        {/* Corner accents */}
        <line x1="175" y1="210" x2="195" y2="210" stroke="#FED049" strokeWidth="2" />
        <line x1="175" y1="210" x2="175" y2="225" stroke="#FED049" strokeWidth="2" />
        <line x1="325" y1="305" x2="305" y2="305" stroke="#FED049" strokeWidth="2" />
        <line x1="325" y1="305" x2="325" y2="290" stroke="#FED049" strokeWidth="2" />
      </motion.g>

      {/* Arrows: gateway → exchanges */}
      {[
        { x1: 210, y1: 325, x2: 130, y2: 380 },
        { x1: 250, y1: 325, x2: 250, y2: 380 },
        { x1: 290, y1: 325, x2: 370, y2: 380 },
      ].map((a, i) => (
        <motion.line
          key={`arr2-${i}`}
          x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
          stroke="#FED049" strokeWidth="2" strokeDasharray="6 4"
          animate={{ strokeDashoffset: [20, 0] }}
          transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Bottom: Exchange icons */}
      {[
        { x: 100, y: 400, label: "CEX Tier 1" },
        { x: 230, y: 400, label: "CEX Tier 2" },
        { x: 360, y: 400, label: "DEX" },
      ].map((e, i) => (
        <g key={`ex-${i}`}>
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Isometric building */}
            <rect x={e.x} y={e.y} width="40" height="30" rx="2" fill="#D8EBE4" stroke="#282846" strokeWidth="1.5" />
            <rect x={e.x + 5} y={e.y + 5} width="12" height="8" rx="1" fill="#007580" fillOpacity="0.3" />
            <rect x={e.x + 23} y={e.y + 5} width="12" height="8" rx="1" fill="#007580" fillOpacity="0.3" />
            <rect x={e.x + 5} y={e.y + 17} width="30" height="3" rx="1" fill="#007580" fillOpacity="0.2" />
            {/* Roof */}
            <polygon points={`${e.x - 3},${e.y} ${e.x + 20},${e.y - 12} ${e.x + 43},${e.y}`} fill="#282846" fillOpacity="0.1" stroke="#282846" strokeWidth="1.5" />
          </motion.g>
          <text x={e.x + 20} y={e.y + 50} textAnchor="middle" fill="#282846" fontSize="9" fontWeight="600" opacity="0.5">{e.label}</text>
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative mx-auto flex min-h-[870px] max-w-7xl items-center overflow-hidden px-8">
      <div className="grid w-full grid-cols-12 items-center gap-8">
        {/* Left Content */}
        <motion.div
          className="z-10 col-span-12 py-12 md:col-span-7"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center rounded-full bg-teal/10 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-teal">
            Precision Liquidity Layer
          </div>

          <h1 className="mb-8 text-5xl font-black leading-[1.05] tracking-tighter text-navy md:text-7xl">
            Finding perfectly{" "}
            <span className="italic text-teal">tailored</span> exchanges for
            your asset.
          </h1>

          <p className="mb-10 max-w-xl text-lg leading-relaxed text-navy/70">
            Navigate the fragmented Web3 landscape with surgical precision. We
            engineer strategic gateways between institutional protocols and
            emerging digital ecosystems.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-gold px-8 py-4 text-sm font-black uppercase tracking-widest text-navy transition-all hover:brightness-105"
            >
              Start Assessment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-md bg-navy/5 px-8 py-4 text-sm font-bold uppercase tracking-widest text-navy transition-all"
            >
              View Ecosystem
            </motion.button>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div>
              <span className="block font-[family-name:var(--font-dm-serif)] text-3xl font-black text-teal">
                MMXXIV
              </span>
              <span className="text-[0.6875rem] uppercase tracking-widest text-navy/50">
                Established Protocol
              </span>
            </div>
            <div className="h-10 w-[1px] bg-navy/10" />
            <div>
              <span className="block font-[family-name:var(--font-dm-serif)] text-3xl font-black text-teal">
                40+
              </span>
              <span className="text-[0.6875rem] uppercase tracking-widest text-navy/50">
                Tailored Partnerships
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Visual */}
        <div className="col-span-12 flex items-center justify-center md:col-span-5">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-teal/5 blur-[100px]" />
          <motion.div
            className="relative w-full max-w-md"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>

      {/* Background vertical text */}
      <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 select-none lg:block">
        <span className="block rotate-90 text-[10rem] font-black tracking-tighter text-navy/[0.03]">
          MMXXIV
        </span>
      </div>
    </section>
  );
}
