"use client";

import { motion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

// leader-line callouts carry real brand facts (Lumen: never blank / invented)
const CALLOUTS = [
  { side: "left", y: "16%", text: "100% natural" },
  { side: "right", y: "34%", text: "cold-processed" },
  { side: "left", y: "60%", text: "lemongrass" },
  { side: "right", y: "80%", text: "no artificial" },
];

export default function Hero() {
  return (
    <section id="top" className="blueprint relative overflow-clip pt-16">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-[1320px] grid-cols-1 items-center gap-16 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        {/* Left — headline */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            className="eyebrow mb-7"
          >
            00 · simply sacred
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease }}
            className="display max-w-[15ch] text-[clamp(2.6rem,5.4vw+1rem,5.25rem)] text-ink"
          >
            <span className="verb">reclaim</span>&nbsp;your glow, rooted in ancestry.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-2/70"
          >
            sacred botanical skincare, crafted for your skin, your home, and
            your soul. family ka moka — connecting cultures between ho chi minh
            city and southern africa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.62, ease }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-[13px] text-paper transition-opacity hover:opacity-90"
            >
              shop the collection
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#ritual"
              className="inline-flex items-center rounded-full border border-rule-2 px-6 py-3 text-[13px] text-ink-2 transition-colors hover:border-accent hover:text-accent"
            >
              the ritual
            </a>
          </motion.div>
        </div>

        {/* Right — botanical specimen apparatus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          className="relative mx-auto"
          aria-hidden
        >
          <figure className="relative">
            <div className="chamber">
              <span className="chamber__electrode" style={{ ["--y" as string]: "22%" }} />
              <span className="chamber__electrode" style={{ ["--y" as string]: "44%" }} />
              <span className="chamber__electrode" style={{ ["--y" as string]: "66%" }} />
              <span className="chamber__electrode" style={{ ["--y" as string]: "84%" }} />
              <span className="apparatus__filament" />
              <span className="apparatus__leaf" style={{ ["--y" as string]: "30%", ["--rot" as string]: "-28deg" }} />
              <span className="apparatus__leaf" style={{ ["--y" as string]: "46%", ["--rot" as string]: "26deg", ["--mx" as string]: "-26px", transform: "rotate(26deg) scaleX(-1)" }} />
              <span className="apparatus__leaf" style={{ ["--y" as string]: "62%", ["--rot" as string]: "-22deg" }} />
              <span className="chamber__glow" />
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[9px] uppercase tracking-[0.14em] text-ink/40">
                lmk-01
              </span>
            </div>

            {/* leader-line callouts */}
            <ul className="absolute inset-0">
              {CALLOUTS.map((c) => (
                <li
                  key={c.text}
                  className="absolute flex items-center gap-2"
                  style={{
                    top: c.y,
                    [c.side === "left" ? "right" : "left"]: "100%",
                    flexDirection: c.side === "left" ? "row" : "row-reverse",
                  }}
                >
                  <span className="callout__line w-8 md:w-12" />
                  <span className="callout whitespace-nowrap opacity-70">{c.text}</span>
                </li>
              ))}
            </ul>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
