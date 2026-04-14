"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pillars = [
  "Tokenomics",
  "CEX",
  "Venture Capital",
  "Market Makers",
  "Marketing",
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
          className="mb-16 max-w-2xl"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Our Proven Framework
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl tracking-tight text-black md:text-5xl">
            A systematic approach to token listing.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black/50">
            We partner with Web3 leaders to successfully launch their tokens
            with our proven framework.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 lg:col-span-3"
          >
            <div className="rounded-xl border-l-[3px] border-rose bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-black">Goals & Objectives</h3>
              <p className="mt-1 text-sm text-black/40">Define your long-term vision and success criteria</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-black/80">Overall Listing Strategy</h3>
              <p className="mt-1 text-sm text-black/40">A roadmap tailored to your project&apos;s unique needs</p>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {pillars.map((p, i) => (
                <motion.div
                  key={p}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.04 }}
                  className="rounded-lg bg-white p-3 text-center shadow-sm"
                >
                  <div className="mb-1.5 h-[2px] w-full rounded bg-rose/40" />
                  <p className="text-[0.6rem] font-semibold uppercase leading-tight tracking-wide text-black/45">{p}</p>
                </motion.div>
              ))}
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-black/60">Token Launch & TGE</h3>
              <p className="mt-1 text-sm text-black/30">Coordinated execution across all channels</p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-black/60">Post Launch Management</h3>
              <p className="mt-1 text-sm text-black/30">Lifetime support, derivatives, and trading optimization</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center gap-6 lg:col-span-2"
          >
            <Image src="/assets/MMIXX_ASSET_1.svg" alt="MMXXIV Goal" width={140} height={117} className="h-auto w-24" />
            <Image src="/assets/MMIXX_ASSET_3.svg" alt="MMXXIV Network" width={340} height={455} className="w-full max-w-[260px] h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
