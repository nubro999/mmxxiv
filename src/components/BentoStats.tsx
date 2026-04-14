"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";

const stats = [
  { value: 40, prefix: "", suffix: "+", label: "Exchange Partnerships" },
  { value: 2.4, prefix: "$", suffix: "B", label: "Liquidity Managed" },
  { value: 99.8, prefix: "", suffix: "%", label: "Protocol Uptime" },
];

export default function BentoStats() {
  return (
    <section className="bg-ash/50 py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center gap-10 md:flex-row md:gap-0"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center gap-2 px-16 ${
                i < stats.length - 1
                  ? "border-b border-black/8 pb-10 md:border-b-0 md:border-r md:pb-0"
                  : ""
              }`}
            >
              <span className="block font-[family-name:var(--font-dm-serif)] text-6xl text-black md:text-7xl">
                {stat.prefix}
                <CountUp to={stat.value} from={0} duration={0.6} separator="," />
                {stat.suffix}
              </span>
              <p className="text-sm font-medium uppercase tracking-widest text-black/30">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
