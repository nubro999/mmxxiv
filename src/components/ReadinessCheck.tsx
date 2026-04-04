"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

function IconBudget() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
      <rect x="8" y="18" width="32" height="24" rx="3" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
      <line x1="8" y1="26" x2="40" y2="26" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
      <circle cx="24" cy="34" r="5" stroke="#FED049" strokeWidth="1.5" fill="none" />
      <text x="24" y="37" textAnchor="middle" fill="#FED049" fontSize="7" fontWeight="700">$</text>
    </svg>
  );
}

function IconProduct() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
      <rect x="6" y="10" width="36" height="24" rx="2" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
      <line x1="14" y1="34" x2="34" y2="34" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      {/* Dashboard bars */}
      <rect x="12" y="22" width="5" height="8" rx="1" fill="#FED049" fillOpacity="0.4" />
      <rect x="19" y="18" width="5" height="12" rx="1" fill="#FED049" fillOpacity="0.6" />
      <rect x="26" y="20" width="5" height="10" rx="1" fill="#FED049" fillOpacity="0.5" />
      <rect x="33" y="15" width="5" height="15" rx="1" fill="#FED049" fillOpacity="0.7" />
    </svg>
  );
}

function IconLegal() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
      <rect x="10" y="6" width="28" height="36" rx="2" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
      <line x1="16" y1="14" x2="32" y2="14" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="16" y1="20" x2="32" y2="20" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      <line x1="16" y1="26" x2="28" y2="26" stroke="white" strokeWidth="1" strokeOpacity="0.3" />
      {/* Shield/stamp */}
      <path d="M30 30 L38 30 L38 38 L34 42 L30 38 Z" stroke="#FED049" strokeWidth="1.5" fill="#FED049" fillOpacity="0.15" />
      <text x="34" y="37" textAnchor="middle" fill="#FED049" fontSize="7" fontWeight="700">&#10003;</text>
    </svg>
  );
}

function IconSecurity() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
      <path d="M24 4 L40 12 L40 24 C40 34 32 42 24 44 C16 42 8 34 8 24 L8 12 Z" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
      <rect x="18" y="20" width="12" height="10" rx="2" stroke="#FED049" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="25" r="2" fill="#FED049" />
      <line x1="24" y1="27" x2="24" y2="28" stroke="#FED049" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 20 L19 16 C19 12 29 12 29 16 L29 20" stroke="#FED049" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

function IconMarketMakers() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
      {/* Chart line */}
      <polyline points="6,36 14,28 22,32 30,18 38,22 46,12" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Bidirectional arrows */}
      <line x1="10" y1="42" x2="38" y2="42" stroke="#FED049" strokeWidth="1.5" />
      <polygon points="10,42 14,40 14,44" fill="#FED049" />
      <polygon points="38,42 34,40 34,44" fill="#FED049" />
    </svg>
  );
}

function IconAudience() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="h-8 w-8">
      {/* People group */}
      <circle cx="24" cy="16" r="5" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
      <path d="M14 36 C14 28 34 28 34 36" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.05" />
      <circle cx="12" cy="20" r="3.5" stroke="white" strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <circle cx="36" cy="20" r="3.5" stroke="white" strokeWidth="1" strokeOpacity="0.5" fill="none" />
      <path d="M6 34 C6 28 16 28 16 32" stroke="white" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      <path d="M42 34 C42 28 32 28 32 32" stroke="white" strokeWidth="1" strokeOpacity="0.4" fill="none" />
      {/* Gold highlight */}
      <circle cx="24" cy="16" r="2" fill="#FED049" fillOpacity="0.3" />
    </svg>
  );
}

const items: { label: string; question: string; icon: ReactNode }[] = [
  {
    label: "Budget",
    question: "How much has the team raised to execute your token launch campaign and cater to fees?",
    icon: <IconBudget />,
  },
  {
    label: "Product",
    question: "Do you have a live product with several thousand users that can grow via campaigns?",
    icon: <IconProduct />,
  },
  {
    label: "Legal",
    question: "Do you have a legal entity setup and a legal opinion letter that states your token is not a security?",
    icon: <IconLegal />,
  },
  {
    label: "Security",
    question: "Are your smart contracts and apps secure and can you demonstrate that through audits?",
    icon: <IconSecurity />,
  },
  {
    label: "Market Makers",
    question: "Have you discussed the Market Making strategy that best suits the project\u2019s needs for liquidity management?",
    icon: <IconMarketMakers />,
  },
  {
    label: "Audience",
    question: "Do you have a significant real community that can act as a buyer pool pre- and post-listing?",
    icon: <IconAudience />,
  },
];

export default function ReadinessCheck() {
  return (
    <section className="bg-navy py-24 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-gold">
            Readiness Assessment
          </span>
          <h2 className="text-4xl font-black tracking-tighter">Are you ready?</h2>
          <p className="mt-4 leading-relaxed text-white/50">
            Exchanges differ in how they assess projects, but most focus on these common criteria.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 border-l-2 border-gold/40 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-gold"
            >
              <div className="shrink-0 pt-1">{item.icon}</div>
              <div>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-gold">
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">{item.question}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
