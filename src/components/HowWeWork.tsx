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
    <section id="process" className="bg-ash py-24 text-black">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-silver">
            How We Work
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl tracking-tight text-black">
            Token launch task force.
          </h2>
          <p className="mt-4 leading-relaxed text-black/50">
            Advisory sits at the center of everything we do — orchestrating
            your project team, exchanges, investors, market makers, and
            marketing into one unified strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/assets/MMIXX_ASSET_6.svg"
              alt="MMXXIV Advisory Ecosystem"
              width={500}
              height={480}
              className="w-full max-w-md h-auto"
            />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="border border-silver/30 bg-white p-8"
            >
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-rose">
                Primary Listing Management
              </span>
              <ul className="space-y-3">
                {taskForce.primary.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-black/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="border border-silver/30 bg-white p-8"
            >
              <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-rose">
                Post-Listing Management
              </span>
              <ul className="space-y-3">
                {taskForce.post.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-black/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-silver" />
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
