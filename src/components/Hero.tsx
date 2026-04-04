"use client";

import { motion } from "framer-motion";

/* ── Isometric cube helper (30° standard) ── */
function IsoCube({ x, y, size, topColor, leftColor, rightColor }: {
  x: number; y: number; size: number;
  topColor: string; leftColor: string; rightColor: string;
}) {
  const h = size * 0.6;
  return (
    <g>
      {/* Top face */}
      <polygon
        points={`${x},${y - h} ${x + size},${y - h / 2} ${x},${y} ${x - size},${y - h / 2}`}
        fill={topColor} stroke="#282846" strokeWidth="1.5"
      />
      {/* Left face */}
      <polygon
        points={`${x},${y} ${x - size},${y - h / 2} ${x - size},${y + h / 2} ${x},${y + h}`}
        fill={leftColor} stroke="#282846" strokeWidth="1.5"
      />
      {/* Right face */}
      <polygon
        points={`${x},${y} ${x + size},${y - h / 2} ${x + size},${y + h / 2} ${x},${y + h}`}
        fill={rightColor} stroke="#282846" strokeWidth="1.5"
      />
    </g>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 520" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <radialGradient id="glow" cx="250" cy="260" r="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#007580" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#007580" stopOpacity="0" />
        </radialGradient>
        <filter id="glowFilter">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      <rect width="500" height="520" fill="url(#glow)" />

      {/* ── Top: Project token cubes ── */}
      {[
        { x: 150, y: 60, delay: 0, label: "Token A" },
        { x: 250, y: 40, delay: 0.3, label: "Token B" },
        { x: 350, y: 60, delay: 0.6, label: "Token C" },
      ].map((p, i) => (
        <g key={i}>
          <motion.g
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 2.5, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <IsoCube x={p.x} y={p.y} size={18} topColor="#D8EBE4" leftColor="rgba(0,117,128,0.3)" rightColor="rgba(0,117,128,0.15)" />
          </motion.g>
          <text x={p.x} y={p.y + 32} textAnchor="middle" fill="#282846" fontSize="8" fontWeight="600" opacity="0.4">{p.label}</text>
        </g>
      ))}

      {/* ── Flow arrows: tokens → gateway ── */}
      {[
        { x1: 150, y1: 90, x2: 210, y2: 190 },
        { x1: 250, y1: 75, x2: 250, y2: 190 },
        { x1: 350, y1: 90, x2: 290, y2: 190 },
      ].map((a, i) => (
        <motion.line
          key={`in-${i}`}
          x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
          stroke="#FED049" strokeWidth="1.5" strokeDasharray="6 4"
          animate={{ strokeDashoffset: [20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* ── Center: MMXXIV Gateway (glassmorphic) ── */}
      <motion.g
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "250px 260px" }}
      >
        {/* Glow */}
        <rect x="165" y="195" width="170" height="130" rx="6" fill="#007580" fillOpacity="0.08" filter="url(#glowFilter)" />
        {/* Outer panel */}
        <rect x="175" y="200" width="150" height="120" rx="4" fill="#007580" fillOpacity="0.06" stroke="#007580" strokeWidth="2" />
        {/* Inner border */}
        <rect x="180" y="205" width="140" height="110" rx="3" fill="none" stroke="#007580" strokeWidth="0.5" strokeOpacity="0.2" />

        {/* Gateway symbol — isometric cube silhouette with slit */}
        <g opacity="0.9">
          {/* Cube top */}
          <polygon points="250,230 275,243 250,256 225,243" fill="#D8EBE4" stroke="#282846" strokeWidth="1" />
          {/* Cube left */}
          <polygon points="250,256 225,243 225,265 250,278" fill="rgba(0,117,128,0.25)" stroke="#282846" strokeWidth="1" />
          {/* Cube right */}
          <polygon points="250,256 275,243 275,265 250,278" fill="rgba(0,117,128,0.12)" stroke="#282846" strokeWidth="1" />
          {/* Gold gate slit */}
          <line x1="250" y1="250" x2="250" y2="278" stroke="#FED049" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        <text x="250" y="296" textAnchor="middle" fill="#007580" fontSize="11" fontWeight="900" letterSpacing="-0.3">MMXXIV</text>
        <text x="250" y="308" textAnchor="middle" fill="#282846" fontSize="8" fontWeight="600" opacity="0.5">Gateway</text>

        {/* Corner accents */}
        <line x1="180" y1="210" x2="196" y2="210" stroke="#FED049" strokeWidth="1.5" />
        <line x1="180" y1="210" x2="180" y2="222" stroke="#FED049" strokeWidth="1.5" />
        <line x1="320" y1="310" x2="304" y2="310" stroke="#FED049" strokeWidth="1.5" />
        <line x1="320" y1="310" x2="320" y2="298" stroke="#FED049" strokeWidth="1.5" />
      </motion.g>

      {/* ── Flow arrows: gateway → outputs ── */}
      {[
        { x1: 200, y1: 325, x2: 100, y2: 390 },
        { x1: 230, y1: 325, x2: 190, y2: 390 },
        { x1: 270, y1: 325, x2: 310, y2: 390 },
        { x1: 300, y1: 325, x2: 400, y2: 390 },
      ].map((a, i) => (
        <motion.line
          key={`out-${i}`}
          x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
          stroke="#FED049" strokeWidth="1.5" strokeDasharray="6 4"
          animate={{ strokeDashoffset: [20, 0] }}
          transition={{ duration: 1.5, delay: 0.4, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* ── Bottom: Output nodes (isometric buildings) ── */}
      {[
        { x: 80, y: 410, label: "CEX" },
        { x: 175, y: 410, label: "DEX" },
        { x: 295, y: 410, label: "VC" },
        { x: 390, y: 410, label: "MM" },
      ].map((e, i) => (
        <g key={`out-node-${i}`}>
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Isometric building */}
            <IsoCube x={e.x} y={e.y} size={16} topColor="#D8EBE4" leftColor="rgba(0,117,128,0.25)" rightColor="rgba(0,117,128,0.12)" />
            {/* Window detail */}
            <rect x={e.x - 5} y={e.y - 2} width="4" height="3" rx="0.5" fill="#007580" fillOpacity="0.3" />
            <rect x={e.x + 1} y={e.y - 2} width="4" height="3" rx="0.5" fill="#007580" fillOpacity="0.3" />
          </motion.g>
          <text x={e.x} y={e.y + 32} textAnchor="middle" fill="#282846" fontSize="9" fontWeight="700" opacity="0.4">{e.label}</text>
        </g>
      ))}

      {/* ── Side labels ── */}
      <text x="60" y="470" textAnchor="middle" fill="#282846" fontSize="7" fontWeight="600" opacity="0.3">Tokenomics</text>
      <text x="440" y="470" textAnchor="middle" fill="#282846" fontSize="7" fontWeight="600" opacity="0.3">Marketing</text>
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
