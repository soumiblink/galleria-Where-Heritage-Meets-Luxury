"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "../lib/motion";

const images = [
  "/assets/images/dome 11.jpg",
  "/assets/images/dome 12.jpg",
  "/assets/images/dome 13.jpg",
  "/assets/images/dome 14.jpg",
  "/assets/images/dome 15.jpg",
  "/assets/images/dome 16.jpg",
  "/assets/images/dome 17.jpg",
];

const tenants = [
  { name: "Prada",         note: "Flagship since 1913 — the original Prada store" },
  { name: "Gucci",         note: "Historic presence since the brand's early expansion" },
  { name: "Louis Vuitton", note: "Multi-floor flagship on the north arcade" },
  { name: "Versace",       note: "Atelier and ready-to-wear across two levels" },
  { name: "Borsalino",     note: "Italian hat-maker, founded 1857 — a Galleria original" },
  { name: "Tod's",         note: "Leather goods and footwear flagship" },
  { name: "Cracco",        note: "Two Michelin stars — Carlo Cracco's flagship" },
  { name: "Savini Milano", note: "Grand café since 1867 — the oldest in the Galleria" },
];

const metrics = [
  { value: "15M+",  label: "Annual Visitors",        note: "More than the Colosseum" },
  { value: "196",   label: "Boutiques",              note: "Across four wings" },
  { value: "€2.4B", label: "Annual Retail Sales",    note: "Estimated turnover" },
  { value: "60%",   label: "International Visitors", note: "From 80+ countries" },
];

export default function Luxury() {
  const stripRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: stripRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section id="luxury" className="relative w-full" style={{ background: "var(--c-void)" }}>

      
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "85vh" }}>
        <div
          className="relative w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24 lg:py-32"
          style={{ background: "var(--c-void)" }}
        >
          <motion.p {...fadeUp(0)} className="uppercase mb-6"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold-hi)", opacity: 0.9 }}>
            Retail and Luxury
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-light"
            style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
            The World's
            <br />Most Coveted
            <br />Address.
          </motion.h2>
          <motion.div {...fadeUp(0.22)} className="mt-8 space-y-4 max-w-md">
            <p style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>
              The Galleria's 196 boutiques span luxury fashion, fine jewellery, gastronomy,
              and culture. No standalone location in Italy commands a comparable concentration
              of high-net-worth footfall — drawing visitors from 80+ countries.
            </p>
            <p style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>
              Positioned at Piazza del Duomo — the intersection of Milan's fashion, finance,
              and cultural districts — the Galleria is the single most valuable commercial
              address in Italy.
            </p>
          </motion.div>
        </div>
        
        <div className="relative w-full lg:w-1/2 h-[60vw] lg:h-auto overflow-hidden">
          <img
            src="/assets/images/dome 13.jpg"
            alt="Galleria interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--ov-soft)" }} />
        </div>
      </div>

      
      <div ref={stripRef} className="relative overflow-hidden py-2" style={{ background: "var(--c-coal)" }}>
        <motion.div style={{ x, paddingLeft: "clamp(2rem,4vw,4rem)" }} className="flex gap-[3px]">
          {images.map((src, i) => (
            <div key={i} className="relative flex-shrink-0 overflow-hidden"
              style={{ width: "clamp(160px, 18vw, 320px)", aspectRatio: "2/3" }}>
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </motion.div>
      </div>

      
      <div style={{ background: "var(--c-ivory)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-28">
          <div className="flex flex-col lg:flex-row gap-20">

            <div className="lg:w-1/2">
              <motion.p {...fadeUp(0)} className="uppercase mb-8"
                style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
                Key Tenants
              </motion.p>
              <div style={{ borderTop: "1px solid var(--div-light)" }}>
                {tenants.map((t, i) => (
                  <motion.div key={t.name} {...fadeUp(0.04 * i)}
                    className="flex items-start justify-between gap-6 py-4"
                    style={{ borderBottom: "1px solid var(--div-light)" }}>
                    <p style={{ fontSize: "var(--sz-body)", color: "var(--t-dark)" }}>{t.name}</p>
                    <p className="text-right" style={{ fontSize: "0.875rem", lineHeight: 1.5, maxWidth: "55%", color: "var(--t-dark-3)" }}>{t.note}</p>
                  </motion.div>
                ))}
              </div>
              <motion.p {...fadeUp(0.3)} className="mt-5 uppercase"
                style={{ fontSize: "var(--sz-label)", letterSpacing: "0.3em", color: "var(--gold)", opacity: 0.5 }}>
                + 188 additional boutiques
              </motion.p>
            </div>

            <div className="lg:w-1/2">
              <motion.p {...fadeUp(0)} className="uppercase mb-8"
                style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
                By the Numbers
              </motion.p>
              <div className="grid grid-cols-2 gap-4" style={{ borderTop: "1px solid var(--div-light)", paddingTop: "0" }}>
                {metrics.map((s, i) => (
                  <motion.div key={s.label} {...fadeUp(0.07 * i)}
                    className="card-light py-8 px-6">
                    <p className="font-light mb-1" style={{ fontSize: "var(--sz-stat)", color: "var(--t-dark)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{s.value}</p>
                    <p className="uppercase mb-1" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{s.label}</p>
                    <p style={{ fontSize: "0.875rem", color: "var(--t-dark-3)" }}>{s.note}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
