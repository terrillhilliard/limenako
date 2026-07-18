"use client";

import { motion } from "motion/react";
import Marquee from "./Marquee";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-paper pt-20">
      {/* Geometric split blocks */}
      <div aria-hidden className="absolute inset-0">
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.1, ease }}
          style={{ transformOrigin: "top" }}
          className="absolute right-0 top-0 h-full w-[38%] bg-indigo"
        />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.1, delay: 0.12, ease }}
          style={{ transformOrigin: "bottom" }}
          className="absolute bottom-0 left-0 h-[42%] w-[46%] bg-terra"
        />
        <div className="absolute right-[38%] top-1/3 hidden h-40 w-40 -translate-x-1/2 rounded-full border border-terra/40 md:block" />
        <div className="absolute left-[8%] top-[22%] hidden h-24 w-24 border border-indigo/30 md:block" style={{ transform: "rotate(45deg)" }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1400px] flex-col justify-center px-5 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mb-6 text-[11px] font-semibold uppercase tracking-mega text-ink-soft"
        >
          Ho Chi Minh City &nbsp;✳&nbsp; Southern Africa
        </motion.p>

        <h1 className="display-tight text-ink">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="block text-[19vw] leading-[0.82] md:text-[13vw]"
          >
            Simply
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.58, ease }}
            className="block pl-[12vw] text-[19vw] leading-[0.82] md:pl-[22vw] md:text-[13vw]"
          >
            <span className="font-serif italic text-terra">Sacred</span>
          </motion.span>
        </h1>

        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease }}
            className="max-w-md text-base leading-relaxed text-ink-soft md:text-lg"
          >
            Reclaim your glow through rituals rooted in ancestry — crafted for
            your skin, your home, and your soul. Family Ka Moka, connecting
            cultures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.88, ease }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-[11px] font-semibold uppercase tracking-wide-sm text-paper transition-colors hover:bg-terra"
            >
              Shop the Collection
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#ritual"
              className="inline-flex items-center rounded-full border border-ink/25 px-7 py-4 text-[11px] font-semibold uppercase tracking-wide-sm text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              The Ritual
            </a>
          </motion.div>
        </div>
      </div>

      {/* Marquee band anchored to the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-y border-ink/15 bg-paper/60 py-3 text-[11px] font-semibold uppercase tracking-wide-sm text-ink backdrop-blur-sm">
        <Marquee
          items={[
            "Simply Sacred",
            "100% Natural",
            "Cold-Processed",
            "Family Ka Moka",
            "Acne-Free Glow",
            "Connecting Cultures",
          ]}
        />
      </div>
    </section>
  );
}
