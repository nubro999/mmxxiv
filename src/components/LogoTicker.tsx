"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const exchanges = [
  { name: "Binance", logo: "/exchanges/binance.jpg", scale: 1 },
  { name: "OKX", logo: "/exchanges/okx.png", scale: 1 },
  { name: "KuCoin", logo: "/exchanges/kucoin.png", scale: 1 },
  { name: "Gate.io", logo: "/exchanges/gateio.png", scale: 1 },
  { name: "BitMart", logo: "/exchanges/bitmart.png", scale: 1 },
  { name: "Bybit", logo: "/exchanges/bybit.png", scale: 1 },
  { name: "BitMEX", logo: "/exchanges/bitmex.png", scale: 0.67 },
  { name: "Bitget", logo: "/exchanges/bitget.png", scale: 1 },
  { name: "bitbank", logo: "/exchanges/bitbank.png", scale: 1 },
  { name: "Bitrue", logo: "/exchanges/bitrue.png", scale: 1 },
  { name: "MEXC Global", logo: "/exchanges/mexc.png", scale: 0.67 },
];

export default function LogoTicker() {
  return (
    <section className="relative overflow-hidden border-b border-black/5 bg-white py-8">
      {/* Left fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />

      <div className="flex">
        {[0, 1].map((copy) => (
          <motion.div
            key={copy}
            className="flex shrink-0 items-center gap-16"
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
            {exchanges.map((exchange) => (
              <div
                key={`${copy}-${exchange.name}`}
                className="shrink-0 px-4 opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={exchange.logo}
                  alt={exchange.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                  style={{ transform: `scale(${exchange.scale})` }}
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
