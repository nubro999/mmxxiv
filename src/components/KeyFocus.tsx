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
    <section className="bg-white py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Image
              src="/assets/MMIXX_ASSET_4.svg"
              alt="MMXXIV Analysis"
              width={420}
              height={449}
              className="w-full max-w-[340px] h-auto"
            />
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
                3 Key Focus
              </span>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl tracking-tight text-black md:text-5xl">
                How we deliver results.
              </h2>
            </motion.div>

            <div className="space-y-4">
              {focuses.map((focus, i) => (
                <motion.div
                  key={focus.keyword}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-5 rounded-2xl border border-black/[0.04] bg-ash/60 p-7 transition-colors hover:bg-ash"
                >
                  <span className="mt-1 block shrink-0 font-[family-name:var(--font-dm-serif)] text-3xl leading-none text-rose/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-black">
                      {focus.keyword}
                    </h3>
                    <p className="text-base leading-relaxed text-black/45">
                      {focus.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
