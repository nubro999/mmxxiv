"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const focuses = [
  {
    keyword: "Advise",
    desc: "We advise founders on token design & economies, token launches & go-to-market strategy, structuring, technology, and fundraising — catapulting projects to the next level.",
  },
  {
    keyword: "Support",
    desc: "We support teams in successfully launching their tokens by advising on token distribution strategies, token economies, community building & user acquisition.",
  },
  {
    keyword: "Connect",
    desc: "We connect projects with leading investors, centralized exchanges, market makers, and other partners essential to ensure a successful TGE.",
  },
];

export default function KeyFocus() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_1.4fr]">
          {/* Left — label + image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
              3 Key Focus
            </span>
            <h2 className="mb-10 font-[family-name:var(--font-dm-serif)] text-5xl tracking-tight text-black md:text-6xl">
              How we deliver results.
            </h2>
            <Image
              src="/assets/MMIXX_ASSET_1.svg"
              alt="MMXXIV Key Focus"
              width={500}
              height={530}
              className="hidden w-full max-w-[400px] mx-auto h-auto lg:block"
            />
          </motion.div>

          {/* Right — giant keyword typography */}
          <div>
            {focuses.map((focus, i) => (
              <motion.div
                key={focus.keyword}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group border-t border-black/10 py-8"
              >
                <h3 className="font-[family-name:var(--font-dm-serif)] text-5xl italic text-black/20 transition-colors duration-500 group-hover:text-rose/40 md:text-7xl">
                  {focus.keyword}
                </h3>
                <p className="-mt-2 max-w-lg text-base leading-relaxed text-black md:-mt-3 md:text-lg">
                  {focus.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
