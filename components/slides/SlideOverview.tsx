"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

const facts = [
  { value: "15M+",   label: "Annual Visitors",  sub: "More than the Colosseum" },
  { value: "€2.4B",  label: "Retail Turnover",  sub: "Estimated annual" },
  { value: "196",    label: "Boutiques",         sub: "Across four wings" },
  { value: "UNESCO", label: "Heritage Status",   sub: "Cultural landmark" },
];

const bullets = [
  "Designed by Giuseppe Mengoni, inaugurated 1877 by King Vittorio Emanuele II",
  "Connects Piazza del Duomo to Piazza della Scala — Italy's most trafficked pedestrian route",
  "60% international visitors from 80+ countries",
  "Average visitor dwell time: 2.4 hours",
];

const images = [
  "/assets/images/dome 11.jpg",
  "/assets/images/dome 12.jpg",
  "/assets/images/dome 13.jpg",
  "/assets/images/dome 14.jpg",
];

export default function SlideOverview() {
  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "var(--c-void)" }}>

      {/* Top: 2-col content */}
      <div className="flex-1 flex items-center">
        <div className="w-full max-w-screen-xl mx-auto px-8 md:px-16 py-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            <motion.div {...fadeUp(0)} className="lg:w-5/12">
              <p className="uppercase mb-4" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.8 }}>
                The Property
              </p>
              <h2 className="font-light" style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
                Not a shopping centre.
                <br /><em style={{ color: "var(--gold)", fontStyle: "italic" }}>A civic monument.</em>
              </h2>
            </motion.div>
            <motion.div {...fadeUp(0.12)} className="lg:w-7/12 lg:pt-10">
              <ul className="space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-[9px] w-4 h-px flex-shrink-0" style={{ background: "var(--gold)", opacity: 0.7 }} />
                    <span style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image strip */}
      <div className="flex-shrink-0 grid grid-cols-4 gap-[2px]" style={{ height: "28vh" }}>
        {images.map((src, i) => (
          <motion.div key={src} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ delay: 0.06 * i, duration: 0.8 }}
            className="overflow-hidden">
            <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>

      {/* Stat bar */}
      <div className="flex-shrink-0" style={{ background: "var(--c-slate)", borderTop: "1px solid var(--div-warm)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {facts.map((f, i) => (
              <motion.div key={f.label} {...fadeUp(0.07 * i)}
                className="stat-card py-5 text-center"
                style={{ borderRight: i < facts.length - 1 ? "1px solid var(--div-warm)" : "none" }}>
                <p className="font-light mb-1" style={{ fontSize: "var(--sz-stat)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{f.value}</p>
                <p className="uppercase" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{f.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
