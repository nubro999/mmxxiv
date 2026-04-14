"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-black">
      {/* Left: Content */}
      <div className="relative z-10 flex w-full shrink-0 flex-col justify-center px-8 py-20 md:w-[48%] md:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))] md:pr-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-8 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.15em] text-rose">
            Your Trusted Web3.0 Ecosystem Partner
          </span>

          <h1 className="mb-6 font-[family-name:var(--font-dm-serif)] text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Finding perfectly{" "}
            <span className="italic text-rose">tailored</span> exchanges for
            your asset.
          </h1>

          <p className="mb-10 max-w-md text-base leading-relaxed text-white/45">
            Navigate the fragmented Web3 landscape with surgical precision. We
            engineer strategic gateways between institutional protocols and
            emerging digital ecosystems.
          </p>

          <div className="flex flex-wrap gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-rose px-7 py-3.5 text-sm font-bold text-black transition-colors hover:bg-rose/85"
            >
              Start Assessment
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              View Ecosystem
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Right: Spline 3D */}
      <div className="relative hidden min-h-screen flex-1 md:block">
        <iframe
          src="https://my.spline.design/tvatimedoor-SLhH6tcrqs2n6GObMGCsH4OG/"
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay"
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
      </div>

      {/* Mobile fallback */}
      <div className="pointer-events-none absolute inset-0 md:hidden">
        <iframe
          src="https://my.spline.design/tvatimedoor-SLhH6tcrqs2n6GObMGCsH4OG/"
          className="h-full w-full border-0 opacity-20"
          allow="autoplay"
        />
      </div>
    </section>
  );
}
