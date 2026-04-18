"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../lib/motion";

const specs = [
  { value: "245 m",    label: "Arcade Length",  note: "Two galleries forming a Latin cross" },
  { value: "47 m",     label: "Central Dome",   note: "Octagonal glass & iron — largest of its era" },
  { value: "1,800 m²", label: "Floor Mosaics",  note: "Hand-laid Venetian mosaic, original to 1877" },
  { value: "32 m",     label: "Façade Height",  note: "Triumphal arch on Piazza del Duomo" },
];

const timeline = [
  { year: "1865", event: "Construction begins under architect Giuseppe Mengoni" },
  { year: "1867", event: "Savini Milano opens — the Galleria's first grand café" },
  { year: "1877", event: "Inaugurated by King Vittorio Emanuele II of unified Italy" },
  { year: "1943", event: "Partially damaged in WWII — restored to original specification" },
  { year: "2015", event: "€30M restoration of the central dome and mosaic floors" },
];

const cultural = [
  "UNESCO World Heritage candidate within the Milan Historic Centre",
  "40M+ organic social media posts annually — zero paid amplification",
  "Adjacent to the Duomo di Milano — Italy's most visited monument",
  "The heel-spin ritual on the mosaic bull — a Milanese rite of passage",
  "Featured in every major global travel publication as a must-visit",
];

export default function Legacy() {
  return (
    <section id="legacy" className="relative w-full" style={{ background: "var(--c-void)" }}>

      
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "100vh" }}>
        <div className="relative w-full lg:w-1/2 h-[65vw] lg:h-auto overflow-hidden">
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

        <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24 lg:py-32"
          style={{ background: "var(--c-ivory)" }}>
          <motion.p {...fadeUp(0)} className="uppercase mb-6"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
            Est. 1877 · Milan, Italy
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-light"
            style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-dark)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
            147 Years of
            <br />Unbroken
            <br />Prestige.
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="mt-8 max-w-md"
            style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-dark-3)" }}>
            Mengoni's design fused Parisian arcade typology with Italian civic grandeur —
            a covered street of iron, glass, and polychrome marble that became the template
            for every luxury arcade that followed. Structurally original after 147 years.
          </motion.p>
          <motion.div {...fadeUp(0.3)} className="mt-10 grid grid-cols-2 gap-4">
            {specs.map((s, i) => (
              <div key={s.label} className="card-light py-7 px-5">
                <p className="font-light mb-1" style={{ fontSize: "var(--sz-stat)", color: "var(--t-dark)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{s.value}</p>
                <p className="uppercase mb-1" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{s.label}</p>
                <p style={{ fontSize: "0.8125rem", lineHeight: 1.5, color: "var(--t-dark-3)" }}>{s.note}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      
      <div style={{ background: "var(--c-slate)", borderTop: "1px solid var(--div-warm)", borderBottom: "1px solid var(--div-warm)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-16">
          <motion.p {...fadeUp(0)} className="uppercase mb-10"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.7 }}>
            Key Dates
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
            {timeline.map((t, i) => (
              <motion.div key={t.year} {...fadeUp(0.06 * i)} className="py-6 pr-8"
                style={{ borderTop: "1px solid var(--div-warm)" }}>
                <p className="font-light mb-3" style={{ fontSize: "1.25rem", color: "var(--gold-hi)" }}>{t.year}</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--t-light-2)" }}>{t.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="flex flex-col-reverse lg:flex-row" style={{ minHeight: "70vh" }}>
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24"
          style={{ background: "var(--c-cream)" }}>
          <motion.p {...fadeUp(0)} className="uppercase mb-6"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
            Cultural Status
          </motion.p>
          <motion.h3 {...fadeUp(0.1)} className="font-light mb-10"
            style={{ fontSize: "var(--sz-h3)", letterSpacing: "0.04em", lineHeight: 1.15, color: "var(--t-dark)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
            Recognised by UNESCO.
            <br />Loved by Milan.
          </motion.h3>
          <motion.ul {...fadeUp(0.2)} className="space-y-5 max-w-md">
            {cultural.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-[10px] w-5 h-px flex-shrink-0" style={{ background: "var(--gold)" }} />
                <span style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-dark-3)" }}>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <div className="relative w-full lg:w-1/2 h-[50vw] lg:h-auto overflow-hidden">
          <img src="/assets/images/dome 14.jpg" alt="Galleria dome"
            className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--ov-soft)" }} />
        </div>
      </div>

    </section>
  );
}
