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

const tenants = ["Prada", "Gucci", "Louis Vuitton", "Versace", "Borsalino", "Savini", "Tod's", "Biffi"];

export default function Luxury() {
  const stripRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: stripRef, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);

  return (
    <section id="luxury" className="relative w-full overflow-hidden" style={{ background: "var(--dark)" }}>

      {/* Header — dark */}
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 pt-36 pb-20">
        <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-[0.4em] mb-8" style={{ color: "var(--bronze-light)", opacity: 0.7 }}>
          Retail & Luxury
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl lg:text-7xl font-light uppercase"
            style={{ letterSpacing: "0.08em", lineHeight: 1.1, color: "var(--ivory)" }}
          >
            The World's
            <br />
            Most Coveted
            <br />
            Address.
          </motion.h2>

          <motion.div {...fadeUp(0.2)} className="lg:max-w-sm space-y-5">
            <p className="text-sm leading-relaxed" style={{ color: "rgba(232,224,208,0.6)" }}>
              The Galleria is home to the most prestigious retail names in the
              world. Its 196 boutiques span luxury fashion, fine jewellery,
              gastronomy, and culture — drawing a clientele that no standalone
              location can replicate.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(232,224,208,0.6)" }}>
              Positioned at Piazza del Duomo, the Galleria sits at the
              intersection of Milan's fashion, finance, and cultural districts —
              the single most valuable commercial address in Italy.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Parallax image strip */}
      <div ref={stripRef} className="relative overflow-hidden pb-0">
        <motion.div style={{ x }} className="flex gap-2 pl-8 md:pl-16">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 overflow-hidden"
              style={{ width: "clamp(200px, 22vw, 380px)", aspectRatio: "2/3" }}
            >
              <img src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Tenant + stats — parchment panel */}
      <div style={{ background: "var(--parchment-2)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-24">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Tenant list */}
            <motion.div {...fadeUp(0.1)} className="lg:w-1/2">
              <p className="text-xs uppercase tracking-[0.4em] mb-8" style={{ color: "var(--bronze)" }}>Key Tenants</p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-0">
                {tenants.map((t) => (
                  <p
                    key={t}
                    className="text-sm font-light tracking-wide py-4"
                    style={{ color: "var(--ink)", borderBottom: "1px solid rgba(26,23,20,0.08)" }}
                  >
                    {t}
                  </p>
                ))}
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.3em]" style={{ color: "var(--bronze)", opacity: 0.5 }}>
                + 188 additional boutiques
              </p>
            </motion.div>

            {/* Stats */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-8 content-start">
              {[
                { value: "15M+", label: "Annual Visitors", sub: "More than the Colosseum" },
                { value: "196", label: "Boutiques", sub: "Across 4 wings" },
                { value: "€2.4B", label: "Annual Retail Sales", sub: "Estimated turnover" },
                { value: "60%", label: "International Visitors", sub: "From 80+ countries" },
              ].map((s, i) => (
                <motion.div key={s.label} {...fadeUp(0.08 * i)} className="py-6" style={{ borderTop: "1px solid rgba(26,23,20,0.1)" }}>
                  <p className="text-4xl md:text-5xl font-light mb-1" style={{ color: "var(--ink)" }}>{s.value}</p>
                  <p className="text-xs uppercase tracking-[0.25em] mb-1" style={{ color: "var(--bronze)" }}>{s.label}</p>
                  <p className="text-xs" style={{ color: "var(--ink-2)", opacity: 0.4 }}>{s.sub}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}
