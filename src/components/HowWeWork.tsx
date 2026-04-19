"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const taskForce = {
  primary: [
    "Weekly calls with your team",
    "Introductions to exchanges",
    "Tokenomics design and modification",
    "Listing communication with exchanges",
    "Roadmap & white paper recommendations",
    "Overall primary listing strategy",
  ],
  post: [
    "Secondary listing strategy",
    "Derivative & perpetual products",
    "Market making & trading strategy",
  ],
};

export default function HowWeWork() {
  return (
    <section id="process" className="bg-ash/50 py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            How We Work
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl tracking-tight text-black md:text-6xl">
            Token launch task force.
          </h2>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-black">
            Advisory sits at the center — orchestrating your project team,
            exchanges, investors, market makers, and marketing into one
            unified strategy.
          </p>
        </motion.div>

        {/* 3-column: Primary | Post | Asset */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr]">
          {/* Primary */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <span className="mb-6 block text-base font-bold uppercase tracking-[0.15em] text-rose">
              Primary Listing
            </span>
            {taskForce.primary.map((item, i) => (
              <div
                key={item}
                className="border-t border-black/10 py-3"
              >
                <span className="text-lg font-medium text-black">{item}</span>
              </div>
            ))}
            <div className="border-t border-black/10" />
          </motion.div>

          {/* Post */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.08 }}
          >
            <span className="mb-6 block text-base font-bold uppercase tracking-[0.15em] text-black/70">
              Post-Listing
            </span>
            {taskForce.post.map((item, i) => (
              <div
                key={item}
                className="border-t border-black/10 py-3"
              >
                <span className="text-lg font-medium text-black/80">{item}</span>
              </div>
            ))}
            <div className="border-t border-black/10" />
          </motion.div>

          {/* Asset — fixed, no sticky */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:flex items-start justify-center lg:-mt-24"
          >
            <Image
              src="/assets/MMIXX_ASSET_4.svg"
              alt="MMXXIV Token Architecture"
              width={267}
              height={286}
              className="w-full max-w-[340px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
