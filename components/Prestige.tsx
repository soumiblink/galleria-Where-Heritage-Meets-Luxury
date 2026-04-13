"use client";

import { motion } from "framer-motion";
import { ease, fadeUp } from "../lib/motion";

const activations = [
  { index: "01", title: "Brand Activations", body: "The central nave — 245 metres of covered arcade — transforms into a world-class activation space. Past clients include Ferrari, Rolex, Dior, and the Italian Olympic Committee.", proof: "200M+ earned media impressions per major activation" },
  { index: "02", title: "Corporate & Private Events", body: "Exclusive after-hours access for private dinners, executive receptions, and product reveals. The Galleria has hosted heads of state, global CEOs, and royal guests.", proof: "Capacity: 200 seated · 2,000 standing" },
  { index: "03", title: "Sponsorship & Naming Rights", body: "Category-exclusive sponsorship packages aligned to the Galleria annual programming calendar — Fashion Week, Art Week, Christmas, and summer cultural events.", proof: "12 major programming moments per year" },
];

const audienceData = [
  { label: "Location", value: "Piazza del Duomo", body: "The most visited public square in Italy. Adjacent to the Duomo di Milano (13M annual visitors) and La Scala opera house." },
  { label: "Catchment", value: "4.3M residents", body: "Within 60 minutes by public transport. Gateway to Northern Italy's €280B consumer economy — the wealthiest region in the country." },
  { label: "Visitor Profile", value: "60% international", body: "Visitors from 80+ countries. Average household income in the top 5% nationally. 78% classify themselves as luxury consumers." },
];

export default function Prestige() {
  return (
    <section id="events" className="relative w-full overflow-hidden" style={{ background: "var(--dark)" }}>

      <div className="relative h-screen w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" style={{ transform: "none", filter: "none" }}>
          <source src="/assets/videos/dome 1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(14,13,11,0.38)" }} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1.2, ease }} className="text-xs uppercase tracking-[0.4em] mb-10" style={{ color: "var(--bronze-light)", opacity: 0.7 }}>
            Events and Platform
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.2, duration: 1.6, ease }} className="text-5xl md:text-7xl lg:text-8xl font-light uppercase" style={{ letterSpacing: "0.1em", lineHeight: 1.1, color: "var(--ivory)" }}>
            A Stage Without
            <br />
            Equal in Europe.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.5, duration: 1.4, ease }} className="mt-10 max-w-lg text-sm md:text-base leading-relaxed" style={{ color: "rgba(232,224,208,0.55)" }}>
            The Galleria hosts over 60 major events per year — from global fashion week installations to royal visits, product launches, and cultural programming that generates international press coverage.
          </motion.p>
        </div>
      </div>

      <div style={{ background: "var(--parchment-2)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-24">
          <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-[0.4em] mb-12" style={{ color: "var(--bronze)" }}>Partnership Opportunities</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(26,23,20,0.08)" }}>
            {activations.map((a, i) => (
              <motion.div key={a.index} {...fadeUp(0.1 * i)} className="px-8 py-12 flex flex-col gap-5" style={{ background: "var(--parchment-2)" }}>
                <p className="text-xs uppercase tracking-[0.4em]" style={{ color: "var(--bronze)", opacity: 0.4 }}>{a.index}</p>
                <p className="text-lg font-light" style={{ color: "var(--ink)", letterSpacing: "0.04em" }}>{a.title}</p>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--ink-2)", opacity: 0.65 }}>{a.body}</p>
                <p className="text-xs uppercase tracking-[0.25em] pt-5" style={{ color: "var(--bronze)", opacity: 0.6, borderTop: "1px solid rgba(26,23,20,0.08)" }}>{a.proof}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: "var(--dark-2)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-24">
          <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-[0.4em] mb-12" style={{ color: "var(--bronze-light)", opacity: 0.6 }}>Audience and Reach</motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(180,155,110,0.08)" }}>
            {audienceData.map((a, i) => (
              <motion.div key={a.label} {...fadeUp(0.08 * i)} className="px-8 py-10" style={{ background: "var(--dark-2)" }}>
                <p className="text-xs uppercase tracking-[0.35em] mb-3" style={{ color: "var(--bronze-light)", opacity: 0.5 }}>{a.label}</p>
                <p className="text-2xl font-light mb-4" style={{ color: "var(--ivory)" }}>{a.value}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(232,224,208,0.5)" }}>{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative h-[55vh] w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" style={{ transform: "none", filter: "none" }}>
          <source src="/assets/videos/dome 2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(14,13,11,0.4)" }} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
          <motion.p {...fadeUp(0)} className="text-xl md:text-3xl font-light uppercase" style={{ letterSpacing: "0.2em", color: "var(--ivory)", opacity: 0.75 }}>60 events per year.</motion.p>
          <motion.p {...fadeUp(0.2)} className="mt-4 text-xs uppercase tracking-[0.35em]" style={{ color: "var(--bronze-light)", opacity: 0.5 }}>Fashion Week · Art Week · Christmas · Cultural Programming</motion.p>
        </div>
      </div>

    </section>
  );
}