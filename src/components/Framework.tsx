"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const layers = [
  {
    label: "Goals & Objectives",
    sub: "Define your long-term vision and success criteria",
    accent: true,
  },
  {
    label: "Overall Listing Strategy",
    sub: "A roadmap tailored to your project's unique needs",
    accent: false,
  },
];

const pillars = [
  "Tokenomics & Allocation",
  "Centralized Exchange",
  "Venture Capital",
  "Market Makers",
  "Marketing",
];

const foundation = [
  {
    label: "Token Launch & TGE",
    sub: "Coordinated execution across all channels",
  },
  {
    label: "Post Launch Management",
    sub: "Lifetime support, derivatives, and trading optimization",
  },
];

export default function Framework() {
  return (
    <section className="bg-charcoal py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-rose">
            Our Proven Framework
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl tracking-tight text-white">
            A systematic approach to token listing.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/50">
            We partner with Web3 leaders to successfully launch their tokens
            with our proven framework — not a flat checklist, but a strategic
            architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`border p-6 ${
                  layer.accent
                    ? "border-rose/40 bg-rose/5"
                    : "border-white/20 bg-white/5"
                }`}
              >
                <h3 className="text-sm font-black uppercase tracking-widest text-white">
                  {layer.label}
                </h3>
                <p className="mt-1 text-xs text-white/40">{layer.sub}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-5 gap-2"
            >
              {pillars.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  className="border border-white/10 bg-white/5 p-3 text-center"
                >
                  <div className="mb-1 h-0.5 w-full bg-rose" />
                  <p className="text-[0.6rem] font-bold uppercase leading-tight tracking-wide text-white/70">
                    {p}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {foundation.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="border border-white/10 p-6"
              >
                <h3 className="text-sm font-black uppercase tracking-widest text-white/70">
                  {layer.label}
                </h3>
                <p className="mt-1 text-xs text-white/30">{layer.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <Image
              src="/assets/MMIXX_ASSET_3.svg"
              alt="MMXXIV Framework Architecture"
              width={400}
              height={536}
              className="w-full max-w-sm h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
