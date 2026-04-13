"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "40+", label: "Exchange Partnerships" },
  { value: "$2.4B", label: "Liquidity Managed" },
  { value: "99.8%", label: "Protocol Uptime" },
];

export default function BentoStats() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-white/10 bg-white/5 p-10 text-center"
                >
                  <span className="mb-2 block font-[family-name:var(--font-dm-serif)] text-5xl text-rose">
                    {stat.value}
                  </span>
                  <p className="text-sm font-bold uppercase tracking-widest text-white/40">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="flex justify-center lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/assets/MMIXX_ASSET_4.svg"
              alt="MMXXIV Data Architecture"
              width={400}
              height={428}
              className="w-full max-w-xs h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
