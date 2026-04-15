"use client";

import { motion } from "framer-motion";

const exchanges = [
  "BINANCE",
  "OKX",
  "KUCOIN",
  "GATE.IO",
  "BITMART",
  "BYBIT",
  "BITMEX",
  "BITGET",
  "BITBANK",
  "BITRUE",
  "MEXC GLOBAL",
];

export default function LogoTicker() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-black py-6">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <div className="flex">
        {[0, 1].map((copy) => (
          <motion.div
            key={copy}
            className="flex shrink-0 items-center gap-12"
            animate={{ x: "-100%" }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {exchanges.map((name) => (
              <span
                key={`${copy}-${name}`}
                className="shrink-0 px-4 text-sm font-semibold uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white/60"
              >
                {name}
              </span>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
