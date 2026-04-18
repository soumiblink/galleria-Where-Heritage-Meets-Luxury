"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

const tenants = [
  { name: "Prada",         note: "Flagship since 1913" },
  { name: "Gucci",         note: "Historic north arcade presence" },
  { name: "Louis Vuitton", note: "Multi-floor flagship" },
  { name: "Versace",       note: "Atelier across two levels" },
  { name: "Borsalino",     note: "Founded 1857 — a Galleria original" },
  { name: "Tod's",         note: "Leather goods flagship" },
];

const metrics = [
  { value: "15M+",  label: "Annual Visitors",        note: "More than the Colosseum" },
  { value: "196",   label: "Boutiques",              note: "Across four wings" },
  { value: "€2.4B", label: "Annual Retail Sales",    note: "Estimated turnover" },
  { value: "60%",   label: "International Visitors", note: "From 80+ countries" },
];

export default function SlideLuxury() {
  return (
    <div className="relative w-full h-full flex" style={{ background: "var(--c-void)" }}>

      
      <div className="relative w-1/2 h-full flex flex-col justify-center px-10 md:px-14 overflow-y-auto"
        style={{ background: "var(--c-void)" }}>
        <motion.p {...fadeUp(0)} className="uppercase mb-4"
          style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold-hi)", opacity: 0.9 }}>
          Retail and Luxury
        </motion.p>
        <motion.h2 {...fadeUp(0.08)} className="font-light mb-5"
          style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
          The World's<br />Most Coveted<br />Address.
        </motion.h2>
        <motion.p {...fadeUp(0.16)} className="mb-6 max-w-sm"
          style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>
          196 boutiques spanning luxury fashion, fine jewellery, gastronomy, and culture.
          The single most valuable commercial address in Italy.
        </motion.p>

        
        <motion.div {...fadeUp(0.22)} className="grid grid-cols-2 gap-3 mb-6">
          {metrics.map((s) => (
            <div key={s.label} className="card-dark py-4 px-4">
              <p className="font-light mb-1" style={{ fontSize: "var(--sz-stat)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{s.value}</p>
              <p className="uppercase mb-1" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{s.label}</p>
              <p style={{ fontSize: "0.75rem", color: "var(--t-light-3)" }}>{s.note}</p>
            </div>
          ))}
        </motion.div>

        
        <motion.div {...fadeUp(0.3)} style={{ borderTop: "1px solid var(--div-dark)" }}>
          <p className="uppercase mt-4 mb-3" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.65 }}>Key Tenants</p>
          <div className="grid grid-cols-2 gap-x-6">
            {tenants.map((t) => (
              <div key={t.name} className="py-2" style={{ borderBottom: "1px solid var(--div-dark)" }}>
                <p style={{ fontSize: "var(--sz-body)", color: "var(--t-light)" }}>{t.name}</p>
                <p style={{ fontSize: "0.75rem", color: "var(--t-light-3)" }}>{t.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 uppercase" style={{ fontSize: "var(--sz-label)", letterSpacing: "0.28em", color: "var(--gold)", opacity: 0.4 }}>+ 190 additional boutiques</p>
        </motion.div>
      </div>

      
      <div className="relative w-1/2 h-full overflow-hidden flex-shrink-0">
        <img src="/assets/images/dome 13.jpg" alt="Galleria interior"
          className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--ov-soft)" }} />
      </div>
    </div>
  );
}
