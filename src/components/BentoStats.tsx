"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

const stats = [
  { value: 80, prefix: "", suffix: "+", label: "Web3 Partners" },
  { value: 100, prefix: "", suffix: "%", label: "Successful Listing Rate" },
  { value: 500, prefix: "$", suffix: "M", label: "FDV Launched" },
];

export default function BentoStats() {
  return (
    <section className="bg-black py-28">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`${
                i < stats.length - 1
                  ? "border-b border-white/10 pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-10"
                  : ""
              } ${i > 0 ? "md:pl-10" : ""}`}
            >
              <span className="block font-[family-name:var(--font-dm-serif)] text-7xl text-rose md:text-8xl">
                {stat.prefix}
                <CountUp to={stat.value} from={0} duration={0.6} separator="," />
                {stat.suffix}
              </span>
              <p className="mt-3 text-sm font-medium uppercase tracking-widest text-white/60">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
