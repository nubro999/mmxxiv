"use client";

import { motion } from "framer-motion";

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
    <section className="bg-teal py-24 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gold">
            3 Key Focus
          </span>
          <h2 className="text-4xl font-black tracking-tighter">
            How we deliver results.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {focuses.map((focus, i) => (
            <motion.div
              key={focus.keyword}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="border border-white/10 bg-white/5 p-10 backdrop-blur-sm"
            >
              <span className="mb-2 block font-[family-name:var(--font-dm-serif)] text-5xl text-gold/30">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-4 text-2xl font-black">{focus.keyword}</h3>
              <p className="text-sm leading-relaxed text-white/70">
                {focus.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
