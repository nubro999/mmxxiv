"use client";

import { motion } from "framer-motion";

function LaunchPipeline() {
  const stages = [
    { label: "Advisory", sub: "Project Team", icon: "A" },
    { label: "Tokenomics", sub: "VC/MM Connect", icon: "T" },
    { label: "Exchange", sub: "CEX/DEX Listing", icon: "E" },
    { label: "TGE", sub: "Token Launch", icon: "L" },
    { label: "Post Launch", sub: "Management", icon: "P" },
  ];

  return (
    <div className="mb-16 overflow-x-auto">
      <svg viewBox="0 0 900 140" fill="none" className="mx-auto w-full min-w-[600px] max-w-4xl">
        {/* Connection line */}
        <motion.line
          x1="90" y1="55" x2="810" y2="55"
          stroke="#007580" strokeWidth="2" strokeOpacity="0.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />

        {stages.map((stage, i) => {
          const x = 90 + i * 180;
          return (
            <motion.g
              key={stage.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              {/* Node circle */}
              <circle cx={x} cy="55" r="24" stroke="#007580" strokeWidth="2" fill="white" />
              <text x={x} y="59" textAnchor="middle" fill="#007580" fontSize="14" fontWeight="800">
                {stage.icon}
              </text>

              {/* Gold ring highlight on active */}
              {i === 2 && (
                <motion.circle
                  cx={x} cy="55" r="30"
                  stroke="#FED049" strokeWidth="1.5" fill="none"
                  animate={{ r: [30, 34, 30], opacity: [0.6, 0.2, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              )}

              {/* Arrow between nodes */}
              {i < stages.length - 1 && (
                <motion.g
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.2 + 0.3 }}
                >
                  <polygon
                    points={`${x + 120},55 ${x + 112},50 ${x + 112},60`}
                    fill="#FED049"
                  />
                </motion.g>
              )}

              {/* Labels */}
              <text x={x} y="95" textAnchor="middle" fill="#282846" fontSize="11" fontWeight="700">
                {stage.label}
              </text>
              <text x={x} y="110" textAnchor="middle" fill="#282846" fillOpacity="0.5" fontSize="9" fontWeight="500">
                {stage.sub}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

const benefits = [
  "We know the shortest way to Tier-1 exchanges",
  "Keeping you from costly mistakes",
  "Assistance with professional project presentation and packaging",
  "Higher probability of listing approval through us",
  "Favorable listing commercial terms and direct communication",
  "Lifetime support after post-listing",
];

const taskForce = {
  primary: [
    "Weekly calls",
    "Introductions to exchanges",
    "Tokenomics design and modification",
    "Listing communication with exchanges",
    "Roadmap / white paper recommendations",
    "Overall primary listing strategy suggestion",
  ],
  post: [
    "Overall secondary listing strategy suggestion",
    "Derivative / perpetual products recommendations",
    "Market making, trading strategy and modification",
  ],
};

export default function ListingSupport() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-12 max-w-3xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-teal">
            Full-Service Support
          </span>
          <h2 className="text-4xl font-black tracking-tighter text-navy">
            Overview of MMXXIV listing support.
          </h2>
          <p className="mt-4 leading-relaxed text-navy/70">
            We partner with Web3 leaders to successfully launch their tokens
            with our proven framework.
          </p>
        </div>

        <LaunchPipeline />

        {/* Benefits + Task Force */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-sage/50 p-8"
          >
            <h3 className="mb-6 text-lg font-black text-navy">
              Delegate your listing to professionals
            </h3>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-navy">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-sage/50 p-8"
          >
            <h3 className="mb-6 text-lg font-black text-navy">
              Token Launch Task Force
            </h3>
            <div className="mb-6">
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-teal">
                Primary Listing Management
              </span>
              <ul className="space-y-2">
                {taskForce.primary.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-navy">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-teal">
                Post-Listing Management
              </span>
              <ul className="space-y-2">
                {taskForce.post.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-navy">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* 3 Key Focus */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            "We advise founders on everything from token design & economies, token launches & go-to-market strategy, structuring, technology, and fundraising.",
            "We support teams in successfully launching their tokens by advising on token distribution strategies, token economies, community building & user acquisition.",
            "We connect projects with leading investors, centralized exchanges, market makers, and other partners essential to ensure a successful TGE.",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-t-2 border-teal/30 bg-sage/50 p-6"
            >
              <span className="mb-3 block font-[family-name:var(--font-dm-serif)] text-3xl text-teal/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-navy/70">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
