"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header — full width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-rose">
            Get In Touch
          </span>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-5xl leading-tight tracking-tight text-black md:text-6xl">
            Let&apos;s build the future of liquidity together.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-black">
            Our team is ready to analyze your protocol&apos;s needs.
            Reach out to initiate the assessment process.
          </p>
        </motion.div>

        {/* Bottom — SVG + Form card */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[auto_1fr]">
          {/* SVG asset */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <Image
              src="/assets/MMIXX_ASSET_5.svg"
              alt="MMXXIV Signal"
              width={280}
              height={342}
              className="h-auto w-[220px]"
            />
          </motion.div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border border-black/10 bg-ash/50 p-8 md:p-10"
          >
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black/60" htmlFor="name">Name</label>
                <input
                  className="w-full border-b-2 border-black/10 bg-transparent pb-3 text-lg text-black placeholder-black/25 transition-colors focus:border-black focus:outline-none"
                  id="name"
                  placeholder="Full Name"
                  type="text"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black/60" htmlFor="email">Email</label>
                <input
                  className="w-full border-b-2 border-black/10 bg-transparent pb-3 text-lg text-black placeholder-black/25 transition-colors focus:border-black focus:outline-none"
                  id="email"
                  placeholder="Email Address"
                  type="email"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black/60" htmlFor="project">Project</label>
                <input
                  className="w-full border-b-2 border-black/10 bg-transparent pb-3 text-lg text-black placeholder-black/25 transition-colors focus:border-black focus:outline-none"
                  id="project"
                  placeholder="Project Name"
                  type="text"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black/60" htmlFor="telegram">Telegram</label>
                <input
                  className="w-full border-b-2 border-black/10 bg-transparent pb-3 text-lg text-black placeholder-black/25 transition-colors focus:border-black focus:outline-none"
                  id="telegram"
                  placeholder="@handle"
                  type="text"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black/60" htmlFor="message">Message</label>
                <textarea
                  className="min-h-[100px] w-full border-b-2 border-black/10 bg-transparent pb-3 text-lg text-black placeholder-black/25 transition-colors focus:border-black focus:outline-none"
                  id="message"
                  placeholder="Tell us about your project..."
                />
              </div>
              <div className="md:col-span-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded bg-black py-4 text-base font-semibold text-white transition-colors hover:bg-black/85"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
