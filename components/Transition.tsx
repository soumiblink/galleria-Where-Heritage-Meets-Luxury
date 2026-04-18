"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeIn } from "../lib/motion";

const images = [
  "/assets/images/dome 11.jpg",
  "/assets/images/dome 12.jpg",
  "/assets/images/dome 13.jpg",
  "/assets/images/dome 14.jpg",
];

const facts = [
  { value: "15M+",   label: "Annual Visitors",  sub: "More than the Colosseum" },
  { value: "€2.4B",  label: "Retail Turnover",  sub: "Estimated annual" },
  { value: "196",    label: "Boutiques",         sub: "Across four wings" },
  { value: "UNESCO", label: "Heritage Status",   sub: "Cultural landmark" },
];

export default function Transition() {
  return (
    <section className="relative w-full" style={{ background: "var(--c-void)" }}>

     
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-28">

          <motion.div {...fadeUp(0)} className="lg:w-5/12">
            <p className="uppercase mb-6"
              style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.8 }}>
              The Property
            </p>
            <h2 className="font-light"
              style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
              Not a shopping centre.
              <br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>A civic monument.</em>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="lg:w-7/12 lg:pt-16 space-y-6">
            <p style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>
              Designed by Giuseppe Mengoni and inaugurated by King Vittorio Emanuele II in 1877,
              the Galleria is one of the world's oldest and most visited shopping arcades —
              a UNESCO-recognised cultural landmark at the geographic and symbolic heart of Milan.
            </p>
            <p style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>
              It connects Piazza del Duomo to Piazza della Scala — linking Italy's most visited
              cathedral to its most famous opera house — making it the single most trafficked
              pedestrian route in the country.
            </p>
            <ul className="pt-2 space-y-4">
              {[
                "15M+ annual visitors — more than the Colosseum",
                "60% international visitors from 80+ countries",
                "€2.4B estimated annual retail turnover",
                "Average visitor dwell time: 2.4 hours",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-[11px] w-5 h-px flex-shrink-0" style={{ background: "var(--gold)", opacity: 0.7 }} />
                  <span style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      
      <div className="grid grid-cols-4 gap-[2px]">
        {images.map((src, i) => (
          <motion.div key={src} {...fadeIn(0.06 * i)} className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
          </motion.div>
        ))}
      </div>

     
      <div style={{ background: "var(--c-slate)", borderTop: "1px solid var(--div-warm)", borderBottom: "1px solid var(--div-warm)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {facts.map((f, i) => (
              <motion.div key={f.label} {...fadeUp(0.07 * i)}
                className="stat-card py-14 text-center"
                style={{ borderRight: i < facts.length - 1 ? "1px solid var(--div-warm)" : "none" }}>
                <p className="font-light mb-2"
                  style={{ fontSize: "var(--sz-stat)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
                  {f.value}
                </p>
                <p className="uppercase mb-1"
                  style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
                  {f.label}
                </p>
                <p style={{ fontSize: "0.8125rem", color: "var(--t-light-3)" }}>{f.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
