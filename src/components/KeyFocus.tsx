"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const focuses = [
  {
    keyword: "Advise",
    desc: "We advise founders on everything from token design & economies, token launches & go-to-market strategy, structuring, technology, and fundraising.",
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
    <section className="bg-cream py-24 text-black">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-silver">
            3 Key Focus
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl tracking-tight text-black">
            How we deliver results.
          </h2>
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
              src="/assets/MMIXX_ASSET_2.svg"
              alt="MMXXIV Ecosystem Architecture"
              width={500}
              height={490}
              className="w-full max-w-md h-auto"
            />
          </motion.div>

          <div className="space-y-8">
            {focuses.map((focus, i) => (
              <motion.div
                key={focus.keyword}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="border-l-2 border-rose pl-8"
              >
                <span className="mb-1 block font-[family-name:var(--font-dm-serif)] text-4xl text-silver/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mb-3 text-xl font-black text-black">
                  {focus.keyword}
                </h3>
                <p className="text-sm leading-relaxed text-black/50">
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
