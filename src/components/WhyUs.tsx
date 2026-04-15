"use client";

import { motion } from "framer-motion";

const strengths = [
  {
    title: "Shortest Path to Tier-1",
    desc: "We know the fastest route to major global exchanges, saving you months of navigating opaque processes.",
  },
  {
    title: "Higher Approval Probability",
    desc: "Our direct relationships and track record significantly increase your chances of listing approval.",
  },
  {
    title: "Avoid Costly Mistakes",
    desc: "We keep you from expensive missteps in tokenomics, timing, and exchange selection.",
  },
  {
    title: "Favorable Commercial Terms",
    desc: "Direct communication channels ensure better listing terms and transparent negotiations.",
  },
  {
    title: "Professional Packaging",
    desc: "Assistance with project presentation, documentation, and pitch materials that meet exchange standards.",
  },
  {
    title: "Lifetime Support",
    desc: "Our partnership doesn't end at listing — ongoing strategy, derivatives, and trading optimization.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Why MMXXIV
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl tracking-tight text-black md:text-6xl">
            Delegate your listing to professionals.
          </h2>
        </motion.div>

        {/* 2-column asymmetric — big number+title left, description right */}
        <div>
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="group grid grid-cols-1 items-baseline gap-2 border-t border-black/10 py-3.5 md:grid-cols-[3rem_1fr_1.2fr] md:gap-6"
            >
              <span className="hidden font-[family-name:var(--font-dm-serif)] text-2xl text-black/30 transition-colors duration-300 group-hover:text-rose md:block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-black md:text-2xl">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-black md:text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
