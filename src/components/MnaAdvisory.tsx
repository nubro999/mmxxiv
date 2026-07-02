"use client";

import { motion } from "framer-motion";

const specialties = [
  {
    title: "Cross-Border Regulatory Compliance",
    desc: "Multi-jurisdiction licensing and regulatory frameworks so transactions clear cleanly across markets.",
  },
  {
    title: "Secure Crypto Asset Valuation",
    desc: "Rigorous, defensible valuation of digital assets and treasuries built for institutional-grade scrutiny.",
  },
  {
    title: "Tokenomics Restructuring",
    desc: "Redesigning supply, distribution, and incentive models to align token economies with deal objectives.",
  },
  {
    title: "Deep-Dive Technical Due Diligence",
    desc: "Protocol, security, and architecture reviews that surface the real risk profile behind the pitch.",
  },
];

export default function MnaAdvisory() {
  return (
    <section id="ma-advisory" className="bg-ash/50 py-20">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            M&amp;A Advisory
          </span>
          <h2 className="mb-5 font-[family-name:var(--font-dm-serif)] text-4xl tracking-tight text-black md:text-5xl">
            Crypto M&amp;A Advisory Services
          </h2>
          <p className="text-base leading-relaxed text-black/60 md:text-lg">
            End-to-end advisory tailored for digital asset pioneers and
            institutional buyers — bridging traditional investment banking and
            blockchain innovation.
          </p>
        </motion.div>

        {/* Specialties — typographic list, no boxes */}
        <div>
          {specialties.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-t border-black/10 py-5 md:grid-cols-[auto_minmax(0,20rem)_1fr] md:items-baseline md:gap-x-8"
            >
              <span className="font-[family-name:var(--font-dm-serif)] text-lg text-rose">
                0{i + 1}
              </span>
              <h3 className="font-[family-name:var(--font-dm-serif)] text-xl tracking-tight text-black md:text-2xl">
                {item.title}
              </h3>
              <p className="col-start-2 text-sm leading-relaxed text-black/55 md:col-start-3 md:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 max-w-2xl font-[family-name:var(--font-dm-serif)] text-xl italic leading-snug text-black/70 md:text-2xl"
        >
          We cut through market volatility to execute seamless, high-impact
          transactions — partner with us to unlock your next growth chapter.
        </motion.p>
      </div>
    </section>
  );
}
