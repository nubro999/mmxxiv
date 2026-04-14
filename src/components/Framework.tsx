"use client";

import { motion } from "framer-motion";

const pillars = [
  { label: "Tokenomics", abbr: "T" },
  { label: "CEX", abbr: "C" },
  { label: "Venture Capital", abbr: "V" },
  { label: "Market Makers", abbr: "M" },
  { label: "Marketing", abbr: "K" },
];

const steps = [
  {
    title: "Goals & Objectives",
    desc: "Define your long-term vision, target exchanges, and success criteria before anything else.",
    active: true,
  },
  {
    title: "Overall Listing Strategy",
    desc: "A tailored roadmap covering timeline, budget allocation, and exchange prioritization.",
    active: false,
  },
  {
    title: null, // pillars row
    desc: null,
    active: false,
  },
  {
    title: "Token Launch & TGE",
    desc: "Coordinated execution across all channels — exchange onboarding, liquidity, and community.",
    active: false,
  },
  {
    title: "Post Launch Management",
    desc: "Lifetime support including secondary listings, derivatives, and trading optimization.",
    active: false,
  },
];

export default function Framework() {
  return (
    <section className="bg-ash/50 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-2xl"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Our Proven Framework
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl tracking-tight text-black md:text-5xl">
            A systematic approach to token listing.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black/50">
            Not a flat checklist — a strategic architecture built from years of
            navigating exchange ecosystems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="mx-auto max-w-3xl">
          {steps.map((step, i) => {
            const isPillars = step.title === null;

            if (isPillars) {
              return (
                <motion.div
                  key="pillars"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="relative flex"
                >
                  {/* Timeline spine */}
                  <div className="flex w-12 shrink-0 flex-col items-center md:w-16">
                    <div className="w-px flex-1 bg-black/10" />
                  </div>

                  {/* Pillars grid */}
                  <div className="flex-1 pb-8 pt-2">
                    <div className="grid grid-cols-5 gap-2">
                      {pillars.map((p, pi) => (
                        <motion.div
                          key={p.label}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + pi * 0.05 }}
                          className="group relative rounded bg-white p-3 text-center shadow-sm transition-colors hover:bg-black"
                        >
                          <div className="mb-1.5 h-[2px] w-full rounded bg-rose/40 transition-colors group-hover:bg-rose" />
                          <p className="text-[0.6rem] font-semibold uppercase leading-tight tracking-wide text-black/50 transition-colors group-hover:text-white md:text-xs">
                            {p.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative flex"
              >
                {/* Timeline spine + node */}
                <div className="flex w-12 shrink-0 flex-col items-center md:w-16">
                  {i > 0 && <div className="w-px flex-1 bg-black/10" />}
                  {i === 0 && <div className="flex-1" />}
                  <div
                    className={`relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                      step.active
                        ? "bg-rose shadow-[0_0_0_4px_rgba(255,192,203,0.25)]"
                        : "border-2 border-black/15 bg-white"
                    }`}
                  >
                    {step.active && (
                      <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    )}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-black/10" />
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1 pb-8 pt-0.5">
                  <div
                    className={`rounded p-6 transition-all duration-300 md:p-7 ${
                      step.active
                        ? "bg-black text-white shadow-lg"
                        : "bg-white shadow-sm hover:shadow-md"
                    }`}
                  >
                    <h3
                      className={`mb-1.5 text-lg font-semibold ${
                        step.active ? "text-white" : "text-black"
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`text-base leading-relaxed ${
                        step.active ? "text-white/55" : "text-black/45"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
