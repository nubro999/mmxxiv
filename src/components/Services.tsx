"use client";

import { motion } from "framer-motion";

function IconAssessment({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Magnifying glass */}
      <circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <line x1="38" y1="38" x2="52" y2="52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      {/* Chart bars inside */}
      <rect x="20" y="30" width="4" height="8" rx="1" fill="currentColor" opacity="0.3" />
      <rect x="26" y="24" width="4" height="14" rx="1" fill="currentColor" opacity="0.5" />
      <rect x="32" y="27" width="4" height="11" rx="1" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function IconStrategy({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Staircase blocks */}
      <rect x="8" y="44" width="14" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1" />
      <rect x="22" y="34" width="14" height="22" rx="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.15" />
      <rect x="36" y="24" width="14" height="32" rx="1.5" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
      {/* Flag on top */}
      <line x1="50" y1="10" x2="50" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <polygon points="50,10 60,15 50,20" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

function IconMetrics({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Gauge outer */}
      <path d="M12 44 A24 24 0 1 1 52 44" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Gauge segments */}
      <path d="M16 40 A20 20 0 0 1 20 22" stroke="currentColor" strokeWidth="3" strokeOpacity="0.15" strokeLinecap="round" />
      <path d="M22 18 A20 20 0 0 1 42 18" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" strokeLinecap="round" />
      <path d="M44 22 A20 20 0 0 1 48 40" stroke="currentColor" strokeWidth="3" strokeOpacity="0.5" strokeLinecap="round" />
      {/* Needle */}
      <line x1="32" y1="40" x2="44" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="32" cy="40" r="3" fill="currentColor" />
      {/* Gold tip */}
      <circle cx="44" cy="24" r="2.5" fill="#FED049" />
    </svg>
  );
}

const cards = [
  {
    num: "01",
    icon: IconAssessment,
    title: "Strategic Assessment",
    desc: "Deep-dive analysis of your asset\u2019s protocol architecture to identify the most compatible exchange liquidity pools and market makers.",
  },
  {
    num: "02",
    icon: IconStrategy,
    title: "Listing Strategy",
    desc: "We don\u2019t just list; we position. Developing a multi-stage roadmap that ensures sustained volume and technical integrity across the ecosystem.",
  },
  {
    num: "03",
    icon: IconMetrics,
    title: "Metric-Driven Suitability",
    desc: "Continuous data monitoring and adjustment. Our systems evaluate exchange performance in real-time to maintain your asset\u2019s health.",
  },
];

export default function Services() {
  return (
    <section id="ecosystem" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-20 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-teal">
              Our Methodology
            </span>
            <h2 className="text-4xl font-black tracking-tighter text-navy">
              Engineered for architectural efficiency.
            </h2>
          </div>
          <p className="max-w-sm pb-2 text-sm leading-relaxed text-navy/70">
            We avoid generic market entry. Every deployment is a calculated move
            within the global liquidity grid.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-white p-10 transition-colors duration-500 hover:bg-teal"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-sage text-teal transition-colors group-hover:bg-white/20 group-hover:text-white">
                  <card.icon className="h-10 w-10" />
                </div>
                <span className="text-4xl font-black text-navy/10 transition-colors group-hover:text-white/20">
                  {card.num}
                </span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-navy transition-colors group-hover:text-white">
                {card.title}
              </h3>
              <p className="text-sm leading-relaxed text-navy/70 transition-colors group-hover:text-white/80">
                {card.desc}
              </p>
              <div className="mt-8 border-t border-navy/5 pt-8 group-hover:border-white/10">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal transition-colors group-hover:text-gold"
                >
                  Details
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
