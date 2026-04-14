"use client";

import { motion } from "framer-motion";
import {
  Target,
  Coins,
  ArrowLeftRight,
  TrendingUp,
  Megaphone,
  ShieldCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { icon: LucideIcon; label: string; desc: string }[] = [
  {
    icon: Target,
    label: "Listing Strategy",
    desc: "Tailored exchange listing strategies to achieve your long-term goals in the most cost-effective way.",
  },
  {
    icon: Coins,
    label: "Tokenomics",
    desc: "Token design, economies, distribution strategies, and go-to-market structuring.",
  },
  {
    icon: ArrowLeftRight,
    label: "CEX & DEX",
    desc: "Direct exchange introductions with favorable commercial terms and higher approval probability.",
  },
  {
    icon: TrendingUp,
    label: "VC & MM",
    desc: "Connections with leading investors, market makers, and partners essential for a successful TGE.",
  },
  {
    icon: Megaphone,
    label: "Marketing",
    desc: "Community building, user acquisition campaigns, and strategic marketing for sustained growth.",
  },
  {
    icon: ShieldCheck,
    label: "Post-Launch",
    desc: "Lifetime support including secondary listings, derivatives, and trading strategy optimization.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="bg-white py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 max-w-4xl"
        >
          <div className="mb-2 h-3 w-3 rounded-full bg-rose" />
          <h2 className="mb-6 font-[family-name:var(--font-dm-serif)] text-4xl tracking-tight text-black md:text-5xl">
            End-to-end token listing & launch.
          </h2>
          <p className="text-lg leading-relaxed text-black/50 md:text-xl">
            From tokenomics design to post-launch management, we cover every
            stage of your exchange listing journey — tailored strategies,
            direct exchange introductions, and lifetime support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-10 md:gap-14"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.15 + i * 0.06 }}
                className="group relative flex flex-col items-center gap-4"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-rose/10 transition-colors duration-300 group-hover:bg-rose/20 md:h-24 md:w-24">
                  <Icon className="h-9 w-9 text-black/70 md:h-10 md:w-10" strokeWidth={1.4} />
                </div>
                <span className="rounded-full bg-black px-5 py-1.5 text-sm font-semibold text-white">
                  {service.label}
                </span>

                {/* Hover tooltip */}
                <div className="pointer-events-none absolute top-full z-10 mt-3 w-64 translate-y-2 rounded-xl bg-black p-5 opacity-0 shadow-lg transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rotate-45 bg-black" />
                  <h4 className="mb-1.5 text-sm font-semibold text-white">{service.label}</h4>
                  <p className="text-sm leading-relaxed text-white/60">{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
