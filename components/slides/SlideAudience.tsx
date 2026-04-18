"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

const reach = [
  { value: "40M+",  label: "Social Posts / Year", note: "Organic UGC — zero paid amplification" },
  { value: "200M+", label: "Earned Impressions",   note: "Per major brand activation" },
  { value: "60+",   label: "Events Per Year",      note: "Fashion, art, culture, corporate" },
  { value: "13M",   label: "Adjacent Visitors",    note: "Duomo di Milano annual footfall" },
];

const audience = [
  { label: "Location",       value: "Piazza del Duomo", body: "Most visited public square in Italy. Adjacent to the Duomo (13M/yr) and La Scala opera house." },
  { label: "Catchment",      value: "4.3M residents",   body: "Within 60 min by public transport. Gateway to Northern Italy's €280B consumer economy." },
  { label: "Visitor Profile",value: "60% international",body: "80+ countries. 78% self-identify as luxury consumers. Average age 34." },
];

const partnerships = [
  { idx: "01", title: "Brand Activations",           proof: "200M+ earned media impressions" },
  { idx: "02", title: "Corporate and Private Events", proof: "200 seated · 2,000 standing" },
  { idx: "03", title: "Sponsorship & Naming Rights",  proof: "12 major moments per year" },
];

export default function SlideAudience() {
  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "var(--c-void)" }}>

      {/* Reach stats */}
      <div className="flex-shrink-0" style={{ background: "var(--c-slate)", borderBottom: "1px solid var(--div-warm)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-4">
            {reach.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(0.06 * i)}
                className="stat-card py-6 text-center"
                style={{ borderRight: i < reach.length - 1 ? "1px solid var(--div-warm)" : "none" }}>
                <p className="font-light mb-1" style={{ fontSize: "var(--sz-stat)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{s.value}</p>
                <p className="uppercase mb-1" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{s.label}</p>
                <p style={{ fontSize: "0.75rem", color: "var(--t-light-3)" }}>{s.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Audience cards + partnerships */}
      <div className="flex-1 flex min-h-0">

        {/* Audience */}
        <div className="w-1/2 flex flex-col justify-center px-8 md:px-14 py-8 overflow-y-auto"
          style={{ background: "var(--c-void)" }}>
          <motion.p {...fadeUp(0)} className="uppercase mb-6"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.7 }}>
            Audience and Reach
          </motion.p>
          <div className="space-y-4">
            {audience.map((a, i) => (
              <motion.div key={a.label} {...fadeUp(0.08 * i)} className="card-dark px-6 py-5">
                <p className="uppercase mb-1" style={{ fontSize: "var(--sz-label)", letterSpacing: "0.28em", color: "var(--gold)", opacity: 0.55 }}>{a.label}</p>
                <p className="font-light mb-2" style={{ fontSize: "1.25rem", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{a.value}</p>
                <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--t-light-2)" }}>{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnerships */}
        <div className="w-1/2 flex flex-col justify-center px-8 md:px-14 py-8 overflow-y-auto"
          style={{ background: "var(--c-ivory)" }}>
          <motion.p {...fadeUp(0)} className="uppercase mb-6"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
            Partnership Opportunities
          </motion.p>
          <div className="space-y-4">
            {partnerships.map((p, i) => (
              <motion.div key={p.idx} {...fadeUp(0.1 * i)} className="card-light px-6 py-5">
                <p className="uppercase mb-1" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.5 }}>{p.idx}</p>
                <p className="mb-2" style={{ fontSize: "1.1rem", color: "var(--t-dark)", lineHeight: 1.3 }}>{p.title}</p>
                <p className="uppercase" style={{ fontSize: "var(--sz-label)", color: "var(--gold)", letterSpacing: "0.22em" }}>{p.proof}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
