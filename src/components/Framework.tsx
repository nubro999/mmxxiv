"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Goals & Objectives",
    desc: "Define your long-term vision, target exchanges, and success criteria.",
  },
  {
    num: "02",
    title: "Listing Strategy",
    desc: "Tailored roadmap covering timeline, budget, and exchange prioritization.",
  },
  {
    num: "03",
    title: "Core Pillars",
    desc: "Tokenomics, CEX, VC, Market Makers, and Marketing — orchestrated in parallel.",
    pillars: ["Tokenomics", "CEX", "VC", "MM", "Marketing"],
  },
  {
    num: "04",
    title: "Token Launch & TGE",
    desc: "Coordinated execution — exchange onboarding, liquidity, and community.",
  },
  {
    num: "05",
    title: "Post Launch",
    desc: "Lifetime support including secondary listings, derivatives, and optimization.",
  },
];

export default function Framework() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-black py-28">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Our Proven Framework
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl tracking-tight text-white md:text-6xl">
            A systematic approach to token listing.
          </h2>
        </motion.div>

        {/* Horizontal accordion — desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex gap-0 border-t border-white/10 min-h-[280px]"
          onMouseLeave={() => setActive(null)}
        >
          {steps.map((step, i) => {
            const isActive = active === i;
            const hasActive = active !== null;

            return (
              <motion.div
                key={step.num}
                onMouseEnter={() => setActive(i)}
                animate={{
                  flex: isActive ? 5 : hasActive ? 1 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`relative overflow-hidden border-r border-white/10 last:border-r-0 cursor-default py-8 transition-colors duration-300 ${
                  isActive ? "bg-white/5" : ""
                }`}
              >
                {/* Collapsed */}
                <div
                  className={`px-5 transition-opacity duration-200 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="block font-[family-name:var(--font-dm-serif)] text-3xl text-white/40">
                    {step.num}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-dm-serif)] text-xl text-white/80 leading-tight tracking-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Expanded */}
                <div
                  className={`absolute inset-0 px-8 py-8 transition-opacity duration-200 ${
                    isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-[family-name:var(--font-dm-serif)] text-4xl text-rose">
                      {step.num}
                    </span>
                    <div className="h-px flex-1 bg-white/10" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-white/80 max-w-md">
                    {step.desc}
                  </p>
                  {step.pillars && (
                    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
                      {step.pillars.map((p) => (
                        <span key={p} className="text-sm font-semibold uppercase tracking-wider text-rose">
                          {p}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile */}
        <div className="md:hidden border-t border-white/10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex gap-5 border-b border-white/10 py-6"
            >
              <span className="shrink-0 font-[family-name:var(--font-dm-serif)] text-2xl text-white/40">
                {step.num}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-dm-serif)] text-xl text-white/80 tracking-tight">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/80">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
