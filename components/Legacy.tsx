"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const facts = [
  "Designed by architect Giuseppe Mengoni, 1865–1877",
  "47-metre octagonal glass dome — an engineering marvel of its era",
  "Named after King Vittorio Emanuele II, first king of unified Italy",
  "Survived two World Wars and remains structurally original",
];

export default function Legacy() {
  return (
    <section id="legacy" className="relative w-full overflow-hidden" style={{ background: "var(--dark)" }}>
      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Video panel */}
        <div className="relative w-full lg:w-1/2 h-[60vw] lg:h-auto overflow-hidden">
          <video
            autoPlay loop muted playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ transform: "none", filter: "none" }}
          >
            <source src="/assets/videos/interior 1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "rgba(14,13,11,0.15)" }} />
        </div>

        {/* Content panel — warm parchment */}
        <div
          className="w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24 lg:py-32"
          style={{ background: "var(--parchment)" }}
        >
          <motion.p
            {...fadeUp(0)}
            className="text-xs uppercase tracking-[0.4em] mb-8"
            style={{ color: "var(--bronze)" }}
          >
            Est. 1877 · Milan, Italy
          </motion.p>

          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-5xl lg:text-6xl font-light uppercase"
            style={{ letterSpacing: "0.08em", lineHeight: 1.15, color: "var(--ink)" }}
          >
            147 Years of
            <br />
            Unbroken Prestige
          </motion.h2>

          <motion.p
            {...fadeUp(0.2)}
            className="mt-8 text-sm md:text-base leading-relaxed max-w-md"
            style={{ color: "var(--ink-2)", opacity: 0.75 }}
          >
            Galleria Vittorio Emanuele II is not a shopping centre. It is one
            of the world's great public spaces — a 19th-century masterpiece
            of iron, glass, and mosaic that has defined Milanese life for
            nearly 150 years.
          </motion.p>

          <motion.ul {...fadeUp(0.3)} className="mt-10 space-y-4">
            {facts.map((f) => (
              <li key={f} className="flex items-start gap-4">
                <span className="mt-[7px] w-3 h-px flex-shrink-0" style={{ background: "var(--bronze)", opacity: 0.5 }} />
                <span className="text-xs leading-relaxed tracking-wide" style={{ color: "var(--ink-2)", opacity: 0.65 }}>{f}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-12 pt-10 grid grid-cols-2 gap-8"
            style={{ borderTop: "1px solid rgba(26,23,20,0.1)" }}
          >
            {[
              { value: "245m", label: "Length of the arcade" },
              { value: "47m", label: "Height of the central dome" },
              { value: "1865", label: "Construction began" },
              { value: "UNESCO", label: "Cultural heritage site" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-light mb-1" style={{ color: "var(--ink)" }}>{s.value}</p>
                <p className="text-xs uppercase tracking-[0.25em]" style={{ color: "var(--bronze)", opacity: 0.7 }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
