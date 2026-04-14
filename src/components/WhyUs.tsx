"use client";

import { motion } from "framer-motion";
import {
  Zap,
  CheckCircle,
  ShieldAlert,
  Handshake,
  FileText,
  HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const strengths: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Zap,
    title: "Shortest Path to Tier-1",
    desc: "We know the fastest route to major global exchanges, saving you months of navigating opaque processes.",
  },
  {
    icon: CheckCircle,
    title: "Higher Approval Probability",
    desc: "Our direct relationships and track record significantly increase your chances of listing approval.",
  },
  {
    icon: ShieldAlert,
    title: "Avoid Costly Mistakes",
    desc: "We keep you from expensive missteps in tokenomics, timing, and exchange selection.",
  },
  {
    icon: Handshake,
    title: "Favorable Commercial Terms",
    desc: "Direct communication channels ensure better listing terms and transparent negotiations.",
  },
  {
    icon: FileText,
    title: "Professional Packaging",
    desc: "Assistance with project presentation, documentation, and pitch materials that meet exchange standards.",
  },
  {
    icon: HeartHandshake,
    title: "Lifetime Support",
    desc: "Our partnership doesn't end at listing — ongoing strategy, derivatives, and trading optimization.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-2xl"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Why MMXXIV
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-4xl tracking-tight text-black md:text-5xl">
            Delegate your listing to professionals.
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll — cards sized so ~3.3 fit in viewport */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-4">
          {strengths.map((item, i) => {
            const Icon = item.icon;
            const isFirst = i === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className={`flex w-[calc((100%-3rem)/3.3)] min-w-[260px] shrink-0 flex-col justify-between rounded-2xl p-7 md:p-8 ${
                  isFirst
                    ? "bg-black text-white"
                    : "border border-black/[0.04] bg-ash/60 text-black"
                }`}
                style={{ aspectRatio: "1 / 1.05" }}
              >
                <div>
                  <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${isFirst ? "bg-rose/25" : "bg-rose/15"}`}>
                    <Icon className={`h-5 w-5 ${isFirst ? "text-rose" : "text-black/60"}`} strokeWidth={1.8} />
                  </div>
                  <h3 className={`text-xl font-semibold leading-snug ${isFirst ? "text-white" : "text-black"}`}>
                    {item.title}
                  </h3>
                </div>
                <p className={`text-base leading-relaxed ${isFirst ? "text-white/55" : "text-black/45"}`}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
