"use client";

import { motion } from "framer-motion";

const pipeline = [
  { step: "01", label: "Advisory", sub: "Project Team" },
  { step: "02", label: "Token Economy", sub: "Design & Allocation" },
  { step: "03", label: "Venture Capital", sub: "Fundraising" },
  { step: "04", label: "Exchange Listing", sub: "CEX / DEX" },
  { step: "05", label: "Market Maker", sub: "Liquidity" },
  { step: "06", label: "Marketing", sub: "Web3 Growth" },
];

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
    <section id="process" className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gold">
            How We Work
          </span>
          <h2 className="text-4xl font-black tracking-tighter">
            Token launch task force.
          </h2>
          <p className="mt-4 leading-relaxed text-white/60">
            A dedicated team guiding your project from initial advisory through
            post-launch management.
          </p>
        </div>

        {/* Pipeline */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {pipeline.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <span className="mb-3 block font-[family-name:var(--font-dm-serif)] text-2xl text-gold/40">
                {item.step}
              </span>
              <h3 className="text-sm font-bold">{item.label}</h3>
              <p className="mt-1 text-xs text-white/40">{item.sub}</p>
              {i < pipeline.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-gold/60 lg:block">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Task Force Details */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 bg-white/5 p-8"
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-gold">
              Primary Listing Management
            </span>
            <ul className="space-y-3">
              {taskForce.primary.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 bg-white/5 p-8"
          >
            <span className="mb-4 block text-xs font-bold uppercase tracking-widest text-gold">
              Post-Listing Management
            </span>
            <ul className="space-y-3">
              {taskForce.post.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
