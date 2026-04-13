"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      {/* ── Main Hero: Text Left + Spline 3D Right ── */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-12 items-center gap-0 px-8">
          {/* Left: Content */}
          <motion.div
            className="col-span-12 py-20 md:col-span-6 lg:col-span-5"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center border border-white/20 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-rose">
              Precision Liquidity Layer
            </div>

            <h1 className="mb-8 font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl">
              Finding perfectly{" "}
              <span className="italic text-rose">tailored</span> exchanges for
              your asset.
            </h1>

            <p className="mb-10 max-w-xl text-lg leading-relaxed text-white/50">
              Navigate the fragmented Web3 landscape with surgical precision. We
              engineer strategic gateways between institutional protocols and
              emerging digital ecosystems.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="bg-rose px-8 py-4 text-sm font-black uppercase tracking-widest text-black transition-all"
              >
                Start Assessment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:border-white/40"
              >
                View Ecosystem
              </motion.button>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <div>
                <span className="block font-[family-name:var(--font-dm-serif)] text-3xl text-rose">
                  MMXXIV
                </span>
                <span className="text-[0.6875rem] uppercase tracking-widest text-white/40">
                  Established Protocol
                </span>
              </div>
              <div className="h-10 w-[1px] bg-white/10" />
              <div>
                <span className="block font-[family-name:var(--font-dm-serif)] text-3xl text-rose">
                  40+
                </span>
                <span className="text-[0.6875rem] uppercase tracking-widest text-white/40">
                  Tailored Partnerships
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right: Spline 3D */}
          <div className="col-span-12 md:col-span-6 lg:col-span-7 relative h-[500px] md:h-[700px] lg:h-screen">
            <iframe
              src="https://my.spline.design/tvatimedoor-SLhH6tcrqs2n6GObMGCsH4OG/"
              className="absolute inset-0 h-full w-full border-0"
              allow="autoplay"
            />
            {/* Left fade so 3D blends into text area */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
          </div>
        </div>

        {/* Background watermark */}
        <div className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 select-none lg:block">
          <span className="block rotate-90 text-[10rem] font-black tracking-tighter text-white/[0.03]">
            MMXXIV
          </span>
        </div>
      </section>
    </>
  );
}
