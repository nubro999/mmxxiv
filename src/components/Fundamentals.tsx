"use client";

import { motion } from "framer-motion";

function PillarsDiagram() {
  const nodePositions = [
    { x: 200, y: 60, label: "Revenue" },
    { x: 600, y: 60, label: "Token Utility" },
    { x: 200, y: 260, label: "User Base" },
    { x: 600, y: 260, label: "Product" },
  ];

  return (
    <svg viewBox="0 0 800 340" fill="none" className="mx-auto mb-16 w-full max-w-3xl">
      {/* Connection lines */}
      {[
        [0, 1], [1, 3], [3, 2], [2, 0], [0, 3], [1, 2],
      ].map(([a, b], i) => (
        <motion.line
          key={`conn-${i}`}
          x1={nodePositions[a].x} y1={nodePositions[a].y}
          x2={nodePositions[b].x} y2={nodePositions[b].y}
          stroke="#007580" strokeWidth="1" strokeOpacity="0.25"
          strokeDasharray="6 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: i * 0.15 }}
        />
      ))}

      {/* Center hub */}
      <motion.g
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        style={{ transformOrigin: "400px 160px" }}
      >
        {/* Pulse rings */}
        <motion.circle
          cx="400" cy="160" r="45"
          stroke="#007580" strokeWidth="1" fill="none"
          animate={{ r: [45, 55, 45], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <circle cx="400" cy="160" r="35" stroke="#007580" strokeWidth="1.5" fill="#007580" fillOpacity="0.08" />
        <text x="400" y="155" textAnchor="middle" fill="#007580" fontSize="11" fontWeight="800">PROJECT</text>
        <text x="400" y="170" textAnchor="middle" fill="#007580" fontSize="11" fontWeight="800">SUCCESS</text>
      </motion.g>

      {/* 4 Nodes */}
      {nodePositions.map((node, i) => (
        <motion.g
          key={node.label}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
        >
          <circle cx={node.x} cy={node.y} r="28" stroke="#282846" strokeWidth="1.5" fill="white" />
          <text x={node.x} y={node.y + 4} textAnchor="middle" fill="#282846" fontSize="10" fontWeight="700">{node.label}</text>

          {/* Gold connection dot between node and center */}
          <motion.circle
            cx={(node.x + 400) / 2}
            cy={(node.y + 160) / 2}
            r="3"
            fill="#FED049"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>
      ))}
    </svg>
  );
}

const fundamentals = [
  {
    title: "Revenue",
    subtitle: "Long Term Sustainability",
    desc: "Clear, sustainable, and demonstrable revenue model. Diversification ensures project longevity.",
    details: [
      "Revenue model should have multiple streams",
      "Token is meant as an alternative but not main source of revenue",
    ],
  },
  {
    title: "Token Utility",
    subtitle: "Token Use Case",
    desc: "Direct link between token utility and the project\u2019s revenue. Ensuring token use cases drive demand and maintain token value.",
    details: [
      "Token economics",
      "Clear use case of token to drive up demand",
      "Clear explanations of token utility to community",
    ],
  },
  {
    title: "User Base",
    subtitle: "Community Engagement",
    desc: "Ability to convert community members into active users of the platform. Strong marketing and community engagement strategy.",
    details: [
      "Campaigns to engage community",
      "Whitelist wallets",
      "Email campaigns",
      "Key milestones",
    ],
  },
  {
    title: "Product",
    subtitle: "Traction",
    desc: "Demonstrable product usage and growth metrics. Key indicators: Active users, transactions, partnerships, and integrations.",
    details: [
      "MVP Launch",
      "Alpha/Beta Launch",
      "Mainnet statistics (if applicable)",
      "Any on-chain campaign metrics",
    ],
  },
];

export default function Fundamentals() {
  return (
    <section id="governance" className="relative bg-sage py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/bg-pattern.jpg')",
          backgroundSize: "500px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-8 max-w-2xl">
          <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-teal">
            Core Pillars
          </span>
          <h2 className="text-4xl font-black tracking-tighter text-navy">
            Four key fundamentals.
          </h2>
        </div>

        <PillarsDiagram />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {fundamentals.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-4 flex items-baseline gap-3">
                <h3 className="text-xl font-black text-navy">{item.title}</h3>
                <span className="text-xs font-bold uppercase tracking-widest text-teal/60">{item.subtitle}</span>
              </div>
              <p className="mb-6 text-sm leading-relaxed text-navy/70">{item.desc}</p>
              <ul className="space-y-2">
                {item.details.map((d, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-navy">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
