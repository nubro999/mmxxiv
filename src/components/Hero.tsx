"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    const schedule =
      typeof window !== "undefined" &&
      "requestIdleCallback" in window
        ? (cb: () => void) =>
            (window as unknown as {
              requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
            }).requestIdleCallback(cb, { timeout: 1500 })
        : (cb: () => void) => window.setTimeout(cb, 300);

    const handle = schedule(() => setShowSpline(true));
    return () => {
      if (typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as unknown as { cancelIdleCallback: (h: number) => void }).cancelIdleCallback(
          handle as number
        );
      } else {
        clearTimeout(handle as number);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background gradient — behind 3D asset */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-black via-rose/20 to-rose/50" />

      {/* Spline 3D — deferred mount until after first paint */}
      {showSpline && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="pointer-events-none absolute inset-0 left-[15%] scale-[1.5] origin-center"
        >
          <iframe
            src="https://my.spline.design/coin-srnyRakDdmQ32v3epnPYHwSo/"
            className="h-full w-full border-0"
            allow="autoplay"
          />
        </motion.div>
      )}

      {/* Gradient overlay — softer */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

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
