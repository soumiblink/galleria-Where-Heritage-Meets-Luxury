"use client";

import { motion } from "framer-motion";
import { mountIn, mountUp } from "../../lib/motion";

const strip = [
  { value: "1877",             label: "Year Inaugurated" },
  { value: "15M+",             label: "Annual Visitors" },
  { value: "Piazza del Duomo", label: "Heart of Milan" },
  { value: "€2.4B",            label: "Annual Retail Sales" },
];

export default function SlideHero() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <video autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover scale-[1.03]">
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{
        background: "linear-gradient(160deg, rgba(15,14,12,0.55) 0%, rgba(15,14,12,0.10) 45%, rgba(22,17,10,0.90) 100%)"
      }} />

      <div className="relative z-10 flex flex-col justify-center h-full max-w-screen-xl mx-auto px-8 md:px-16 pb-28">
        <motion.p {...mountIn(0.3)} className="uppercase mb-5"
          style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold-hi)", opacity: 0.9 }}>
          Milan · Galleria Vittorio Emanuele II
        </motion.p>
        <motion.h1 {...mountUp(0.5)} className="font-light"
          style={{ fontSize: "var(--sz-hero)", letterSpacing: "var(--tr-hero)", lineHeight: "var(--lh-head)", color: "var(--t-light)", maxWidth: "14ch", fontFamily: "var(--font-serif, Georgia, serif)" }}>
          The World's<br />Most Iconic<br />
          <em className="not-italic" style={{ color: "var(--gold-hi)" }}>Address.</em>
        </motion.h1>
        <motion.p {...mountUp(0.85)} className="mt-6 max-w-md"
          style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>
          147 years of unbroken prestige at the heart of Milan.
          A UNESCO-recognised monument. The single most valuable commercial address in Italy.
        </motion.p>
      </div>

      {/* Stat strip */}
      <motion.div {...mountIn(1.2)} className="absolute bottom-0 inset-x-0 z-10"
        style={{ borderTop: "1px solid var(--div-dark)", background: "rgba(8,10,14,0.65)", backdropFilter: "blur(14px)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {strip.map((s, i) => (
              <div key={s.label} className="py-4 text-center"
                style={{ borderRight: i < strip.length - 1 ? "1px solid var(--div-dark)" : "none" }}>
                <p className="font-light mb-1" style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.3rem)", color: "var(--t-light)" }}>{s.value}</p>
                <p className="uppercase" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.72 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
