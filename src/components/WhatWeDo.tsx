"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    asset: "/assets/MMIXX_ASSET_1.svg",
    title: "Overall Listing Strategy",
    desc: "Tailored exchange listing strategies to achieve your long-term goals in the most cost-effective way.",
  },
  {
    asset: "/assets/MMIXX_ASSET_2.svg",
    title: "Tokenomics & Allocation",
    desc: "Token design, economies, distribution strategies, and go-to-market structuring.",
  },
  {
    asset: "/assets/MMIXX_ASSET_3.svg",
    title: "CEX & DEX Listing",
    desc: "Direct exchange introductions with favorable commercial terms and higher approval probability.",
  },
  {
    asset: "/assets/MMIXX_ASSET_4.svg",
    title: "VC & Market Makers",
    desc: "Connections with leading investors, market makers, and partners essential for a successful TGE.",
  },
  {
    asset: "/assets/MMIXX_ASSET_5.svg",
    title: "Marketing & Community",
    desc: "Community building, user acquisition campaigns, and strategic marketing for sustained growth.",
  },
  {
    asset: "/assets/MMIXX_ASSET_6.svg",
    title: "Post-Launch Management",
    desc: "Lifetime support including secondary listings, derivatives, and trading strategy optimization.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-silver">
            What We Do
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl tracking-tight text-black">
            End-to-end token listing & launch.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-black/50">
            From tokenomics design to post-launch management, we cover every
            stage of your exchange listing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group border border-silver/30 bg-white p-10 transition-all duration-300 hover:border-rose"
            >
              <div className="mb-8 flex h-28 items-center justify-center">
                <Image
                  src={service.asset}
                  alt={service.title}
                  width={160}
                  height={120}
                  className="h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-lg font-bold text-black">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-black/50">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
