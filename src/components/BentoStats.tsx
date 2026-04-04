"use client";

import { motion } from "framer-motion";

export default function BentoStats() {
  return (
    <section className="bg-sage py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { value: "40+", label: "Exchange Partnerships" },
            { value: "$2.4B", label: "Liquidity Managed" },
            { value: "99.8%", label: "Protocol Uptime" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-navy/10 bg-white p-10 text-center"
            >
              <span className="mb-2 block font-[family-name:var(--font-dm-serif)] text-5xl font-black text-teal">
                {stat.value}
              </span>
              <p className="text-sm font-bold uppercase tracking-widest text-navy/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
