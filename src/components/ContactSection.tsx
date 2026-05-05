"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CONTACT_EMAIL = "maurice@byzentine.capital";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) ?? "";
    const email = (data.get("email") as string) ?? "";
    const project = (data.get("project") as string) ?? "";
    const telegram = (data.get("telegram") as string) ?? "";
    const message = (data.get("message") as string) ?? "";

    const subject = `Project Inquiry${project ? ` — ${project}` : ""}${name ? ` (${name})` : ""}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Project: ${project}`,
      `Telegram: ${telegram}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black/60" htmlFor="name">Name</label>
                <input
                  className="w-full border-b-2 border-black/10 bg-transparent pb-3 text-lg text-black placeholder-black/25 transition-colors focus:border-black focus:outline-none"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                  type="text"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black/60" htmlFor="email">Email</label>
                <input
                  className="w-full border-b-2 border-black/10 bg-transparent pb-3 text-lg text-black placeholder-black/25 transition-colors focus:border-black focus:outline-none"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  type="email"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black/60" htmlFor="project">Project</label>
                <input
                  className="w-full border-b-2 border-black/10 bg-transparent pb-3 text-lg text-black placeholder-black/25 transition-colors focus:border-black focus:outline-none"
                  id="project"
                  name="project"
                  placeholder="Project Name"
                  type="text"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black/60" htmlFor="telegram">Telegram</label>
                <input
                  className="w-full border-b-2 border-black/10 bg-transparent pb-3 text-lg text-black placeholder-black/25 transition-colors focus:border-black focus:outline-none"
                  id="telegram"
                  name="telegram"
                  placeholder="@handle"
                  type="text"
                />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-black/60" htmlFor="message">Message</label>
                <textarea
                  className="min-h-[100px] w-full border-b-2 border-black/10 bg-transparent pb-3 text-lg text-black placeholder-black/25 transition-colors focus:border-black focus:outline-none"
                  id="message"
                  name="message"
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
