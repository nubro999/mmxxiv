"use client";

import { motion } from "framer-motion";

function DataGrid() {
  const nodes: { x: number; y: number; color: string; delay: number }[] = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 8; col++) {
      nodes.push({
        x: 30 + col * 50,
        y: 20 + row * 40,
        color: (row + col) % 3 === 0 ? "#FED049" : "#007580",
        delay: (row + col) * 0.15,
      });
    }
  }

  return (
    <svg viewBox="0 0 420 200" fill="none" className="w-full h-auto opacity-60">
      {/* Grid lines */}
      {Array.from({ length: 9 }, (_, i) => (
        <line key={`v${i}`} x1={30 + i * 50} y1="0" x2={30 + i * 50} y2="200" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={20 + i * 40} x2="420" y2={20 + i * 40} stroke="white" strokeOpacity="0.03" strokeWidth="1" />
      ))}
      {/* Connection lines */}
      {nodes.slice(0, -1).map((n, i) => {
        const next = nodes[i + 1];
        if (!next || Math.random() > 0.3) return null;
        return (
          <motion.line
            key={`line-${i}`}
            x1={n.x} y1={n.y} x2={next.x} y2={next.y}
            stroke="#007580" strokeOpacity="0.15" strokeWidth="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: n.delay }}
          />
        );
      })}
      {/* Nodes */}
      {nodes.map((n, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={n.x} cy={n.y} r="2.5"
          fill={n.color}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.6, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: n.delay }}
        />
      ))}
    </svg>
  );
}

export default function BentoStats() {
  return (
    <section className="overflow-hidden bg-navy py-24 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-12 gap-6">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 flex min-h-[400px] flex-col justify-between overflow-hidden bg-white/5 p-12 lg:col-span-4"
          >
            <div>
              <h2 className="mb-6 text-3xl font-black tracking-tighter">
                Built for the next epoch of finance.
              </h2>
              <p className="text-sm leading-relaxed text-white/50">
                The architecture of trust is built on transparency and precision
                data analytics.
              </p>
            </div>
            <div className="mt-6">
              <DataGrid />
            </div>
          </motion.div>

          {/* Right grid */}
          <div className="col-span-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex min-h-[250px] flex-col justify-end bg-white/5 p-8"
            >
              <span className="mb-4 font-[family-name:var(--font-dm-serif)] text-5xl font-black text-gold">
                99.8%
              </span>
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">
                Protocol Uptime
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex min-h-[250px] flex-col justify-end bg-teal/20 p-8"
            >
              <span className="mb-4 font-[family-name:var(--font-dm-serif)] text-5xl font-black text-gold">
                $2.4B
              </span>
              <p className="text-sm font-bold uppercase tracking-widest text-white/80">
                Liquidity Managed
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-1 flex flex-col items-center justify-between gap-8 bg-gold p-8 md:col-span-2 md:flex-row"
            >
              <div className="text-navy">
                <h3 className="text-2xl font-black tracking-tight">
                  Ready to architecturalize your asset?
                </h3>
                <p className="font-medium opacity-80">
                  Connect with our strategic engineers today.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-md bg-navy px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all"
              >
                Request Access
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
