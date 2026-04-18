"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

const specs = [
  { value: "245 m",    label: "Arcade Length",  note: "Two galleries, Latin cross" },
  { value: "47 m",     label: "Central Dome",   note: "Octagonal glass & iron" },
  { value: "1,800 m²", label: "Floor Mosaics",  note: "Original Venetian mosaic" },
  { value: "1877",     label: "Year Opened",    note: "Structurally original today" },
];

const timeline = [
  { year: "1865", event: "Construction begins under Giuseppe Mengoni" },
  { year: "1877", event: "Inaugurated by King Vittorio Emanuele II" },
  { year: "1943", event: "WWII damage — restored to original spec" },
  { year: "2015", event: "€30M dome & mosaic restoration" },
];

export default function SlideLegacy() {
  return (
    <div className="relative w-full h-full flex" style={{ background: "var(--c-void)" }}>

      
      <div className="relative w-1/2 h-full overflow-hidden flex-shrink-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/videos/interior 1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "var(--ov-soft)" }} />
        <div className="absolute bottom-8 left-8">
          <p className="uppercase" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold-hi)", opacity: 0.75 }}>
            Interior · 1877
          </p>
        </div>
      </div>

      
      <div className="relative w-1/2 h-full flex flex-col justify-center px-10 md:px-14 overflow-y-auto"
        style={{ background: "var(--c-ivory)" }}>
        <motion.p {...fadeUp(0)} className="uppercase mb-4"
          style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
          Est. 1877 · Milan, Italy
        </motion.p>
        <motion.h2 {...fadeUp(0.08)} className="font-light mb-5"
          style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-dark)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
          147 Years of<br />Unbroken Prestige.
        </motion.h2>
        <motion.p {...fadeUp(0.16)} className="mb-6 max-w-sm"
          style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-dark-3)" }}>
          Mengoni's design became the template for every luxury arcade that followed.
          Structurally original after 147 years — a UNESCO World Heritage candidate.
        </motion.p>

        
        <motion.div {...fadeUp(0.22)} className="grid grid-cols-2 gap-3 mb-6">
          {specs.map((s) => (
            <div key={s.label} className="card-light py-4 px-4">
              <p className="font-light mb-1" style={{ fontSize: "var(--sz-stat)", color: "var(--t-dark)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{s.value}</p>
              <p className="uppercase mb-1" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{s.label}</p>
              <p style={{ fontSize: "0.75rem", color: "var(--t-dark-3)" }}>{s.note}</p>
            </div>
          ))}
        </motion.div>

        
        <motion.div {...fadeUp(0.3)} style={{ borderTop: "1px solid var(--div-light)" }}>
          <p className="uppercase mt-4 mb-3" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.65 }}>Key Dates</p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2">
            {timeline.map((t) => (
              <div key={t.year} className="flex gap-3 items-start">
                <span style={{ fontSize: "0.8125rem", color: "var(--gold)", fontWeight: 500, flexShrink: 0 }}>{t.year}</span>
                <span style={{ fontSize: "0.8125rem", lineHeight: 1.5, color: "var(--t-dark-3)" }}>{t.event}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
