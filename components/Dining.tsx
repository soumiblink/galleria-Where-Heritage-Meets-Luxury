"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const highlights = [
  { name: "Savini Milano", desc: "Founded 1867 — the Galleria's historic grand café, a Milanese institution for over 150 years." },
  { name: "Camparino in Galleria", desc: "Birthplace of the Campari Spritz. A national landmark since 1915, still serving the original recipe." },
  { name: "Cracco", desc: "Carlo Cracco's flagship restaurant — two Michelin stars, set within the Galleria's historic arcade." },
  { name: "Terrazza Aperol", desc: "Rooftop terrace overlooking the Duomo — the most photographed dining view in Milan." },
];

export default function Dining() {
  return (
    <section id="dining" className="relative w-full overflow-hidden" style={{ background: "var(--dark)" }}>

      {/* Full-bleed video */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: "none", filter: "none" }}
        >
          <source src="/assets/videos/interior 2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(14,13,11,0.42)" }} />

        <div className="relative z-10 flex flex-col justify-center h-full max-w-screen-xl mx-auto px-8 md:px-16">
          <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-[0.4em] mb-8" style={{ color: "var(--bronze-light)", opacity: 0.7 }}>
            Dining & Lifestyle
          </motion.p>
          <motion.h2
            {...fadeUp(0.15)}
            className="text-4xl md:text-6xl lg:text-7xl font-light uppercase"
            style={{ letterSpacing: "0.08em", lineHeight: 1.15, color: "var(--ivory)" }}
          >
            Where Milan
            <br />
            Comes to Taste.
          </motion.h2>
          <motion.p {...fadeUp(0.3)} className="mt-8 max-w-lg text-sm md:text-base leading-relaxed" style={{ color: "rgba(232,224,208,0.62)" }}>
            The Galleria's dining offer is not an amenity — it is a destination.
            Institutions that have shaped Italian food culture for over a century
            sit alongside contemporary Michelin-starred restaurants, all beneath
            the same iconic glass vault.
          </motion.p>
          <motion.div {...fadeUp(0.45)} className="mt-12 flex gap-14">
            {[
              { value: "40+", label: "Dining Venues" },
              { value: "3", label: "Michelin Stars" },
              { value: "150+", label: "Years of History" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-light" style={{ color: "var(--ivory)" }}>{s.value}</p>
                <p className="text-xs uppercase tracking-[0.25em] mt-2" style={{ color: "var(--bronze-light)", opacity: 0.55 }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Venue highlights — parchment */}
      <div style={{ background: "var(--parchment)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-24">
          <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-[0.4em] mb-12" style={{ color: "var(--bronze)" }}>
            Landmark Venues
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(26,23,20,0.08)" }}>
            {highlights.map((h, i) => (
              <motion.div
                key={h.name}
                {...fadeUp(0.08 * i)}
                className="px-8 py-10"
                style={{ background: "var(--parchment)" }}
              >
                <p className="text-base font-light mb-3 tracking-wide" style={{ color: "var(--ink)" }}>{h.name}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-2)", opacity: 0.6 }}>{h.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeUp(0.2)} className="mt-8 text-xs leading-relaxed max-w-lg" style={{ color: "var(--ink-2)", opacity: 0.35 }}>
            Average visitor dwell time: 2.4 hours · Average spend per visit: €180 ·
            The Galleria's dining environment drives repeat visits that no standalone retail location can match.
          </motion.p>
        </div>
      </div>

    </section>
  );
}
