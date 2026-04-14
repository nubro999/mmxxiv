"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div>
              <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
                Get In Touch
              </span>
              <h2 className="mb-5 font-[family-name:var(--font-dm-serif)] text-4xl leading-tight tracking-tight text-black md:text-5xl">
                Let&apos;s build the future of liquidity together.
              </h2>
              <p className="max-w-md text-lg leading-relaxed text-black/50">
                Our team is ready to analyze your protocol&apos;s needs.
                Reach out to initiate the assessment process.
              </p>
            </div>

            <Image
              src="/assets/MMIXX_ASSET_5.svg"
              alt="MMXXIV Signal"
              width={280}
              height={342}
              className="h-auto w-full max-w-[220px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-black/[0.04] bg-ash/60 p-8 md:p-10"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-black/40" htmlFor="name">Name</label>
                  <input className="w-full rounded-xl border border-black/8 bg-white px-4 py-4 text-base text-black placeholder-black/25 transition-colors focus:border-black/20 focus:outline-none" id="name" placeholder="Full Name" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-black/40" htmlFor="email">Email</label>
                  <input className="w-full rounded-xl border border-black/8 bg-white px-4 py-4 text-base text-black placeholder-black/25 transition-colors focus:border-black/20 focus:outline-none" id="email" placeholder="Email Address" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-black/40" htmlFor="message">Message</label>
                <textarea className="min-h-[150px] w-full rounded-xl border border-black/8 bg-white px-4 py-4 text-base text-black placeholder-black/25 transition-colors focus:border-black/20 focus:outline-none" id="message" placeholder="Tell us about your project..." />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-full bg-black py-4 text-base font-semibold text-white transition-colors hover:bg-black/85"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
