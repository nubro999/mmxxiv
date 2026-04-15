"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Spline 3D — full background */}
      <div className="pointer-events-none absolute inset-0">
        <iframe
          src="https://my.spline.design/tvatimedoor-SLhH6tcrqs2n6GObMGCsH4OG/"
          className="h-full w-full border-0"
          allow="autoplay"
        />
      </div>

      {/* Gradient overlay — left side readable */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center px-4 md:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="mb-7 font-[family-name:var(--font-dm-serif)] text-5xl leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Your Trusted Web3.0{" "}
            <span className="italic text-rose">Ecosystem</span> Partner
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-white/50 md:text-xl">
            Finding perfectly tailored exchanges for your asset.
            We engineer strategic gateways between institutional
            protocols and emerging digital ecosystems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
