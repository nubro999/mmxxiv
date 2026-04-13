"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden">
      {/* Left: Content — fixed width, no overlap */}
      <div className="relative z-10 flex w-full shrink-0 flex-col justify-center bg-black px-8 py-20 md:w-[45%] md:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] md:pr-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center border border-white/20 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-rose">
            Precision Liquidity Layer
          </div>

          <h1 className="mb-8 font-[family-name:var(--font-dm-serif)] text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Finding perfectly{" "}
            <span className="italic text-rose">tailored</span> exchanges for
            your asset.
          </h1>

          <p className="mb-10 max-w-md text-base leading-relaxed text-white/50">
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

          <div className="mt-12 flex items-center gap-8">
            <div>
              <span className="block font-[family-name:var(--font-dm-serif)] text-2xl text-rose">
                MMXXIV
              </span>
              <span className="text-[0.6875rem] uppercase tracking-widest text-white/40">
                Established Protocol
              </span>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div>
              <span className="block font-[family-name:var(--font-dm-serif)] text-2xl text-rose">
                40+
              </span>
              <span className="text-[0.6875rem] uppercase tracking-widest text-white/40">
                Tailored Partnerships
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right: Spline 3D — fills remaining space to edge */}
      <div className="relative hidden min-h-screen flex-1 md:block">
        <iframe
          src="https://my.spline.design/tvatimedoor-SLhH6tcrqs2n6GObMGCsH4OG/"
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay"
        />
        {/* Soft blend into left content */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent" />
      </div>

      {/* Mobile fallback: show Spline behind content */}
      <div className="pointer-events-none absolute inset-0 md:hidden">
        <iframe
          src="https://my.spline.design/tvatimedoor-SLhH6tcrqs2n6GObMGCsH4OG/"
          className="h-full w-full border-0 opacity-30"
          allow="autoplay"
        />
      </div>
    </section>
  );
}
