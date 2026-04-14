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
    <section id="process" className="bg-black py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            How We Work
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl tracking-tight text-white md:text-5xl">
            Token launch task force.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/45">
            Advisory sits at the center — orchestrating your project team,
            exchanges, investors, market makers, and marketing into one
            unified strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Image
              src="/assets/MMIXX_ASSET_2.svg"
              alt="MMXXIV Token Architecture"
              width={420}
              height={411}
              className="w-full max-w-[340px] h-auto"
            />
          </motion.div>

          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-white/8 bg-white/[0.04] p-8"
            >
              <span className="mb-5 block text-sm font-semibold uppercase tracking-[0.15em] text-rose">
                Primary Listing Management
              </span>
              <ul className="space-y-3">
                {taskForce.primary.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-white/55">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="rounded-2xl border border-white/8 bg-white/[0.04] p-8"
            >
              <span className="mb-5 block text-sm font-semibold uppercase tracking-[0.15em] text-white/35">
                Post-Listing Management
              </span>
              <ul className="space-y-3">
                {taskForce.post.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-base text-white/35">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
