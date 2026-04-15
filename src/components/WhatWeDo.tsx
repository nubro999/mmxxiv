"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    label: "Listing Strategy",
    icon: "/assets/icon-19.png",
    desc: "Tailored exchange listing strategies to achieve your long-term goals in the most cost-effective way.",
    details: [
      "Market analysis and exchange selection",
      "Timeline and milestone planning",
      "Budget optimization and cost structuring",
      "Regulatory compliance assessment",
    ],
  },
  {
    label: "Tokenomics",
    icon: "/assets/icon-21.png",
    desc: "Token design, economies, distribution strategies, and go-to-market structuring.",
    details: [
      "Token supply and distribution modeling",
      "Vesting schedule design",
      "Incentive mechanism architecture",
      "Go-to-market token strategy",
    ],
  },
  {
    label: "CEX & DEX",
    icon: "/assets/icon-22.png",
    desc: "Direct exchange introductions with favorable commercial terms and higher approval probability.",
    details: [
      "Tier 1–3 exchange introductions",
      "Application preparation and review",
      "Commercial term negotiation",
      "DEX liquidity pool setup",
    ],
  },
  {
    label: "VC & MM",
    icon: "/assets/icon-23.png",
    desc: "Connections with leading investors, market makers, and partners essential for a successful TGE.",
    details: [
      "Investor matchmaking and warm intros",
      "Market maker selection and onboarding",
      "Deal structuring support",
      "Partnership facilitation",
    ],
  },
  {
    label: "Marketing",
    icon: "/assets/icon-31.png",
    desc: "Community building, user acquisition campaigns, and strategic marketing for sustained growth.",
    details: [
      "Community growth strategy",
      "KOL and influencer campaigns",
      "Social media and content planning",
      "Pre-launch hype and awareness",
    ],
  },
  {
    label: "Post-Launch",
    icon: "/assets/icon-33.png",
    desc: "Lifetime support including secondary listings, derivatives, and trading strategy optimization.",
    details: [
      "Secondary exchange listings",
      "Derivatives and futures listing",
      "Trading volume optimization",
      "Ongoing advisory and support",
    ],
  },
];

export default function WhatWeDo() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            What We Do
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl tracking-tight text-black md:text-6xl">
            Token Exchange Listings Service
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left — Tab List */}
          <div className="flex flex-col gap-1 lg:w-[340px] lg:shrink-0">
            {services.map((service, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={service.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  onClick={() => setActive(i)}
                  className={`group flex items-center gap-4 px-5 py-4 text-left transition-colors duration-200 ${
                    isActive
                      ? "bg-black text-white"
                      : "text-black/70 hover:bg-ash hover:text-black"
                  }`}
                >
                  <Image
                    src={service.icon}
                    alt=""
                    width={40}
                    height={40}
                    className="h-7 w-7 shrink-0"
                  />
                  <span className="text-[0.9375rem] font-semibold">
                    {service.label}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Right — Content Panel */}
          <div className="relative min-h-[320px] flex-1 border-l border-black/10 pl-12 lg:pl-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="flex h-full flex-col justify-center"
              >
                <Image
                  src={current.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="mb-6 h-14 w-14"
                />
                <h3 className="mb-3 font-[family-name:var(--font-dm-serif)] text-3xl tracking-tight text-black">
                  {current.label}
                </h3>
                <p className="mb-8 text-lg leading-relaxed text-black/60">
                  {current.desc}
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {current.details.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[0.9375rem] text-black/70"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-rose" style={{ width: 6, height: 6 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
