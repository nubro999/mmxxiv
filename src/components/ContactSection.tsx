"use client";

import { motion } from "framer-motion";

function SignalPulse() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden opacity-30">
      {[1, 2, 3, 4].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-teal/20"
          style={{
            width: ring * 150,
            height: ring * 150,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.08, 0.3],
          }}
          transition={{
            duration: 4,
            delay: ring * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Central node */}
      <motion.div
        className="absolute h-3 w-3 rounded-full bg-teal"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Orbiting satellite nodes */}
      {[0, 120, 240].map((deg, i) => (
        <motion.div
          key={`sat-${i}`}
          className="absolute h-2 w-2 rounded-full bg-gold"
          style={{
            transformOrigin: "0 0",
          }}
          animate={{
            rotate: [deg, deg + 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            className="absolute h-2 w-2 rounded-full bg-gold"
            style={{
              transform: `translateX(${80 + i * 40}px)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="relative bg-sage py-24 text-navy">
      <SignalPulse />
      <div className="relative mx-auto max-w-7xl px-8">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="mb-4 block text-[0.6875rem] font-bold uppercase tracking-[0.2em] text-teal">
                Initialization
              </span>
              <h2 className="text-5xl font-black leading-tight tracking-tighter">
                Let&apos;s build the future of liquidity together.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-relaxed text-navy/70">
              Our engineering team is ready to analyze your protocol&apos;s
              needs. Reach out to initiate the architectural assessment process.
            </p>
            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10">
                  <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest">Global Headquarters</p>
                  <p className="text-sm text-navy/70">Grid Alpha, Cryptographic District<br />Protocol City, LZ-01</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10">
                  <svg className="h-5 w-5 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest">Secure Communication</p>
                  <p className="text-sm text-navy/70">engineers@mmxxiv.arch</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-xl border border-navy/5 bg-white/40 p-10 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block px-1 text-[0.6875rem] font-black uppercase tracking-widest text-navy/60" htmlFor="name">Identifier</label>
                  <input className="w-full rounded-md border-0 bg-white px-4 py-4 text-sm text-navy ring-1 ring-navy/10 transition-all focus:ring-2 focus:ring-teal" id="name" placeholder="Full Name" type="text" />
                </div>
                <div className="space-y-2">
                  <label className="block px-1 text-[0.6875rem] font-black uppercase tracking-widest text-navy/60" htmlFor="email">Point of Contact</label>
                  <input className="w-full rounded-md border-0 bg-white px-4 py-4 text-sm text-navy ring-1 ring-navy/10 transition-all focus:ring-2 focus:ring-teal" id="email" placeholder="Email Address" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block px-1 text-[0.6875rem] font-black uppercase tracking-widest text-navy/60" htmlFor="message">Manifesto</label>
                <textarea className="min-h-[150px] w-full rounded-md border-0 bg-white px-4 py-4 text-sm text-navy ring-1 ring-navy/10 transition-all focus:ring-2 focus:ring-teal" id="message" placeholder="How can we assist your asset's ecosystem?" />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4 w-full rounded-md bg-navy py-5 text-sm font-black uppercase tracking-[0.2em] text-gold shadow-lg shadow-navy/5 transition-all hover:bg-navy/90"
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
