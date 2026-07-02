"use client";

import { motion } from "framer-motion";
import { Scale, ShieldCheck, Coins, FileSearch } from "lucide-react";

const specialties = [
  {
    icon: Scale,
    title: "Cross-Border Regulatory Compliance",
    desc: "Navigating multi-jurisdiction licensing and regulatory frameworks so transactions clear cleanly across markets.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Crypto Asset Valuation",
    desc: "Rigorous, defensible valuation of digital assets and treasuries built for institutional-grade scrutiny.",
  },
  {
    icon: Coins,
    title: "Tokenomics Restructuring",
    desc: "Redesigning supply, distribution, and incentive models to align token economies with deal objectives.",
  },
  {
    icon: FileSearch,
    title: "Deep-Dive Technical Due Diligence",
    desc: "Protocol, security, and architecture reviews that surface the real risk profile behind the pitch.",
  },
];

export default function MnaAdvisory() {
  return (
    <section id="ma-advisory" className="bg-ash/50 py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            M&amp;A Advisory
          </span>
          <h2 className="mb-6 font-[family-name:var(--font-dm-serif)] text-5xl tracking-tight text-black md:text-6xl">
            Crypto M&amp;A Advisory Services
          </h2>
          <p className="text-lg leading-relaxed text-black/60">
            End-to-end advisory tailored for digital asset pioneers and
            institutional buyers. We bridge the gap between traditional
            investment banking and blockchain innovation — whether you are a
            fintech leader acquiring global regulatory licenses or a Web3
            project pursuing a strategic exit.
          </p>
        </motion.div>

        {/* Specialties grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {specialties.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group border border-black/[0.04] bg-white p-8 transition-colors duration-300 hover:bg-ash"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-rose/10">
                  <Icon className="h-6 w-6 text-black" strokeWidth={1.6} />
                </div>
                <h3 className="mb-3 font-[family-name:var(--font-dm-serif)] text-2xl tracking-tight text-black">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-black/60">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 max-w-2xl font-[family-name:var(--font-dm-serif)] text-2xl italic leading-snug text-black/70 md:text-3xl"
        >
          We cut through market volatility to execute seamless, high-impact
          transactions — partner with us to unlock your next growth chapter.
        </motion.p>
      </div>
    </section>
  );
}
