"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-black">
      {/* Left: Content */}
      <div className="relative z-10 flex w-full shrink-0 flex-col justify-center px-4 py-20 md:w-[48%] md:pl-[max(1rem,calc((100vw-80rem)/2+1rem))] md:pr-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="mb-6 font-[family-name:var(--font-dm-serif)] text-4xl leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Your Trusted Web3.0{" "}
            <span className="italic text-rose">Ecosystem</span> Partner
          </h1>

          <p className="mb-10 max-w-md text-lg leading-relaxed text-white/50">
            Finding perfectly tailored exchanges for your asset.
            We engineer strategic gateways between institutional
            protocols and emerging digital ecosystems.
          </p>

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
