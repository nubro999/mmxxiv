"use client";

import { motion } from "framer-motion";

function TierPyramid() {
  return (
    <svg viewBox="0 0 800 220" fill="none" className="mx-auto mb-12 w-full max-w-3xl">
      <defs>
        <linearGradient id="pyramidGlow" x1="400" y1="0" x2="400" y2="220" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FED049" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#007580" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Pyramid layers */}
      {/* Tier 1 - Top, narrowest */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <rect x="280" y="10" width="240" height="55" rx="3" fill="white" fillOpacity="0.08" stroke="#FED049" strokeWidth="1.5" />
        <text x="400" y="35" textAnchor="middle" fill="#FED049" fontSize="13" fontWeight="800">TIER 1</text>
        <text x="400" y="52" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="10">Major Global Exchanges</text>
      </motion.g>

      {/* Tier 2 - Middle */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <rect x="200" y="75" width="400" height="55" rx="3" fill="white" fillOpacity="0.06" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
        <text x="400" y="100" textAnchor="middle" fill="white" fillOpacity="0.8" fontSize="13" fontWeight="800">TIER 2</text>
        <text x="400" y="117" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="10">Regional Exchanges</text>
      </motion.g>

      {/* Tier 3 - Bottom, widest */}
      <motion.g
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <rect x="120" y="140" width="560" height="55" rx="3" fill="white" fillOpacity="0.04" stroke="white" strokeWidth="1" strokeOpacity="0.15" />
        <text x="400" y="165" textAnchor="middle" fill="white" fillOpacity="0.6" fontSize="13" fontWeight="800">TIER 3</text>
        <text x="400" y="182" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="10">Niche Exchanges</text>
      </motion.g>

      {/* Difficulty arrows on right */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <line x1="720" y1="185" x2="720" y2="25" stroke="#FED049" strokeWidth="1.5" strokeDasharray="4 3" />
        <polygon points="720,20 715,32 725,32" fill="#FED049" />
        <text x="740" y="110" textAnchor="start" fill="white" fillOpacity="0.3" fontSize="9" fontWeight="600" transform="rotate(90 740 110)">DIFFICULTY</text>
      </motion.g>

      {/* Left: Private Investor icon */}
      <motion.g
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <circle cx="55" cy="90" r="8" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" fill="none" />
        <line x1="55" y1="100" x2="55" y2="120" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="42" y1="108" x2="68" y2="108" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
        <text x="55" y="140" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="9" fontWeight="600">Private</text>
        <text x="55" y="152" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="9" fontWeight="600">Investor</text>
        {/* Arrow to pyramid */}
        <motion.line x1="80" y1="105" x2="115" y2="165" stroke="#FED049" strokeWidth="1" strokeDasharray="4 3"
          animate={{ strokeDashoffset: [16, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.g>

      {/* Right: Public Sale icon */}
      <motion.g
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {[0, -12, 12].map((offset, i) => (
          <g key={i}>
            <circle cx={745 + offset} cy={80 + Math.abs(offset) * 0.5} r="6" stroke="white" strokeWidth="1" strokeOpacity="0.3" fill="none" />
          </g>
        ))}
        <text x="745" y="110" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="9" fontWeight="600">Public</text>
        <text x="745" y="122" textAnchor="middle" fill="white" fillOpacity="0.3" fontSize="9" fontWeight="600">Sale</text>
      </motion.g>
    </svg>
  );
}

const tiers = [
  {
    name: "Tier 1",
    subtitle: "Major Global Exchanges",
    positives: ["Huge liquidity", "Established user base", "Higher trust levels"],
    negatives: ["Very hard to achieve"],
    note: "Due diligence processes are very unique and on a case by case scenario. There is no fixed approval process and it might take a long time.",
  },
  {
    name: "Tier 2",
    subtitle: "Mid-sized exchanges with strong regional presence",
    positives: ["Achievable with reasonably good core metrics", "Decent trading volume"],
    negatives: ["Can be expensive", "Hard to move up to Tier 1"],
    note: "Might have fixed terms or terms on a case by case basis. Preference for initial listing.",
  },
  {
    name: "Tier 3",
    subtitle: "Smaller, niche exchanges with specific community focus",
    positives: ["Lower fee structure", "Specific communities"],
    negatives: ["Low volume", "Small user base"],
    note: "No preference for initial or secondary listings, relatively flexible with lower barriers to entry.",
  },
];

export default function TierComparison() {
  return (
    <section id="architecture" className="bg-teal py-24 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-12 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gold">
            Exchange Tiers
          </span>
          <h2 className="text-4xl font-black tracking-tighter">
            Understanding exchange tiers.
          </h2>
        </div>

        <TierPyramid />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex flex-col border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-black text-gold">{tier.name}</h3>
                <p className="mt-1 text-sm text-white/60">{tier.subtitle}</p>
              </div>
              <div className="mb-4">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-gold/80">Positive</span>
                <ul className="space-y-1">
                  {tier.positives.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-0.5 text-gold">+</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-white/50">Negative</span>
                <ul className="space-y-1">
                  {tier.negatives.map((n) => (
                    <li key={n} className="flex items-start gap-2 text-sm text-white/80">
                      <span className="mt-0.5 text-white/50">&minus;</span>{n}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto border-t border-white/10 pt-4">
                <span className="mb-1 block text-[0.625rem] font-bold uppercase tracking-widest text-white/40">Note</span>
                <p className="text-xs leading-relaxed text-white/50">{tier.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
