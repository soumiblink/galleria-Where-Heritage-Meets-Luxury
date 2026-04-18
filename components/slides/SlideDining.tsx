"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

const venues = [
  { name: "Savini Milano",         tag: "Grand Café · Est. 1867",        note: "Hosted Verdi, Toscanini — risotto unchanged since opening" },
  { name: "Camparino in Galleria", tag: "Historic Bar · Est. 1915",       note: "Birthplace of the Campari Spritz" },
  { name: "Cracco",                tag: "Fine Dining · 2 Michelin Stars", note: "Tasting menu from €180 per person" },
  { name: "Terrazza Aperol",       tag: "Rooftop Bar",                    note: "Most photographed dining view in Milan" },
];

const stats = [
  { value: "40+",   label: "Dining Venues" },
  { value: "3",     label: "Michelin Stars" },
  { value: "€180",  label: "Avg. Spend" },
  { value: "2.4 h", label: "Avg. Dwell Time" },
];

export default function SlideDining() {
  return (
    <div className="relative w-full h-full flex" style={{ background: "var(--c-void)" }}>

      {/* Left: image */}
      <div className="relative w-5/12 h-full overflow-hidden flex-shrink-0">
        <img src="/assets/images/dome 17.jpg" alt="Galleria dining"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--ov-soft)" }} />
      </div>

      {/* Right: content */}
      <div className="relative w-7/12 h-full flex flex-col justify-center px-10 md:px-14 overflow-y-auto"
        style={{ background: "var(--c-ivory)" }}>
        <motion.p {...fadeUp(0)} className="uppercase mb-4"
          style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
          Dining and Lifestyle
        </motion.p>
        <motion.h2 {...fadeUp(0.08)} className="font-light mb-4"
          style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-dark)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
          Where Milan<br />Comes to Taste.
        </motion.h2>
        <motion.p {...fadeUp(0.16)} className="mb-5 max-w-md"
          style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-dark-3)" }}>
          Not an amenity — a destination. Institutions that shaped Italian food culture
          for over a century, alongside Michelin-starred restaurants, all beneath the same iconic glass vault.
        </motion.p>

        {/* Stats row */}
        <motion.div {...fadeUp(0.22)} className="grid grid-cols-4 gap-3 mb-5">
          {stats.map((s) => (
            <div key={s.label} className="card-light py-3 px-3 text-center">
              <p className="font-light mb-1" style={{ fontSize: "clamp(1.25rem, 2vw, 1.75rem)", color: "var(--t-dark)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{s.value}</p>
              <p className="uppercase" style={{ fontSize: "0.6875rem", letterSpacing: "0.22em", color: "var(--gold)" }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Venue list */}
        <motion.div {...fadeUp(0.3)} style={{ borderTop: "1px solid var(--div-light)" }}>
          <p className="uppercase mt-4 mb-3" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.65 }}>Landmark Venues</p>
          <div className="space-y-2">
            {venues.map((v) => (
              <div key={v.name} className="flex items-start justify-between gap-4 py-2"
                style={{ borderBottom: "1px solid var(--div-light)" }}>
                <div>
                  <p style={{ fontSize: "var(--sz-body)", color: "var(--t-dark)" }}>{v.name}</p>
                  <p className="uppercase" style={{ fontSize: "0.6875rem", letterSpacing: "0.22em", color: "var(--gold)", opacity: 0.65 }}>{v.tag}</p>
                </div>
                <p className="text-right" style={{ fontSize: "0.8125rem", color: "var(--t-dark-3)", maxWidth: "45%" }}>{v.note}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
