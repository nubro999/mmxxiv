"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-cream py-24 text-black">
      <div className="relative mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-silver">
                Initialization
              </span>
              <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-tight tracking-tight text-black">
                Let&apos;s build the future of liquidity together.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-black/50">
              Our engineering team is ready to analyze your protocol&apos;s
              needs. Reach out to initiate the architectural assessment process.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-4"
            >
              <Image
                src="/assets/MMIXX_ASSET_5.svg"
                alt="MMXXIV Signal"
                width={360}
                height={440}
                className="h-auto w-full max-w-[280px]"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="border border-silver/30 bg-white p-10"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block px-1 text-[0.6875rem] font-black uppercase tracking-widest text-black/40" htmlFor="name">Identifier</label>
                  <input className="w-full border border-silver/30 bg-cream/30 px-4 py-4 text-sm text-black transition-all focus:border-black focus:outline-none" id="name" placeholder="Full Name" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="block px-1 text-[0.6875rem] font-black uppercase tracking-widest text-black/40" htmlFor="email">Point of Contact</label>
                  <input className="w-full border border-silver/30 bg-cream/30 px-4 py-4 text-sm text-black transition-all focus:border-black focus:outline-none" id="email" placeholder="Email Address" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block px-1 text-[0.6875rem] font-black uppercase tracking-widest text-black/40" htmlFor="message">Manifesto</label>
                <textarea className="min-h-[150px] w-full border border-silver/30 bg-cream/30 px-4 py-4 text-sm text-black transition-all focus:border-black focus:outline-none" id="message" placeholder="How can we assist your asset's ecosystem?" />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full bg-black py-5 text-sm font-black uppercase tracking-[0.2em] text-rose transition-all hover:bg-black/90"
              >
                Transmit Signal
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
