"use client";

import { motion } from "framer-motion";
import { ease, fadeUp } from "../lib/motion";

const partnerships = [
  {
    idx: "01",
    title: "Brand Activations",
    body: "The central nave — 245 metres of covered arcade — transforms into a world-class activation space. Past clients include Ferrari, Rolex, Dior, Maserati, and the Italian Olympic Committee.",
    proof: "200M+ earned media impressions per activation",
  },
  {
    idx: "02",
    title: "Corporate and Private Events",
    body: "Exclusive after-hours access for private dinners, executive receptions, and product reveals. The Galleria has hosted heads of state, global CEOs, and royal guests.",
    proof: "200 seated · 2,000 standing reception",
  },
  {
    idx: "03",
    title: "Sponsorship and Naming Rights",
    body: "Category-exclusive packages aligned to the Galleria's annual calendar — Milan Fashion Week, Salone del Mobile, Christmas, and summer cultural events.",
    proof: "12 major programming moments per year",
  },
];

const audience = [
  {
    label: "Location",
    value: "Piazza del Duomo",
    body: "The most visited public square in Italy. Adjacent to the Duomo di Milano (13M annual visitors) and La Scala opera house.",
  },
  {
    label: "Catchment",
    value: "4.3M residents",
    body: "Within 60 minutes by public transport. Gateway to Northern Italy's EUR 280B consumer economy — the wealthiest region in the country.",
  },
  {
    label: "Visitor Profile",
    value: "60% international",
    body: "Visitors from 80+ countries. 78% self-identify as luxury consumers. Average age 34 — younger than comparable European luxury destinations.",
  },
];

const reach = [
  { value: "40M+",  label: "Social Posts / Year", note: "Organic UGC — zero paid amplification" },
  { value: "200M+", label: "Earned Impressions",   note: "Per major brand activation" },
  { value: "60+",   label: "Events Per Year",      note: "Fashion, art, culture, corporate" },
  { value: "13M",   label: "Adjacent Visitors",    note: "Duomo di Milano annual footfall" },
];

export default function Prestige() {
  return (
    <section id="events" className="relative w-full" style={{ background: "var(--c-void)" }}>

      {/* 1. Content header — breaks video-video collision with Attractions */}
      <div style={{ background: "var(--c-void)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 pt-32 pb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <motion.div {...fadeUp(0)}>
              <p className="uppercase mb-6"
                style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold-hi)", opacity: 0.85 }}>
                Events and Platform
              </p>
              <h2 className="font-light"
                style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
                A Stage Without
                <br />Equal in Europe.
              </h2>
            </motion.div>
            <motion.p {...fadeUp(0.15)} className="lg:max-w-sm"
              style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>
              The Galleria hosts over 60 major events per year — from global fashion week
              installations to royal visits, product launches, and cultural programming
              that generates international press coverage on every continent.
            </motion.p>
          </div>
        </div>

        {/* Full-bleed image — not video, to break the collision */}
        <div className="relative w-full overflow-hidden" style={{ height: "65vh" }}>
          <img
            src="/assets/images/dome 12.jpg"
            alt="Galleria events"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--ov-mid)" }} />
          <div className="relative z-10 flex items-end h-full max-w-screen-xl mx-auto px-8 md:px-16 pb-12">
            <motion.p {...fadeUp(0.1)} className="uppercase"
              style={{ fontSize: "var(--sz-label)", letterSpacing: "0.35em", color: "var(--gold-hi)", opacity: 0.7 }}>
              60+ events per year · Fashion Week · Salone del Mobile · Christmas
            </motion.p>
          </div>
        </div>
      </div>

      {/* 2. Reach stats — warm dark */}
      <div style={{ background: "var(--c-slate)", borderBottom: "1px solid var(--div-warm)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {reach.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(0.07 * i)}
                className="stat-card py-14 text-center"
                style={{ borderRight: i < reach.length - 1 ? "1px solid var(--div-warm)" : "none" }}>
                <p className="font-light mb-2" style={{ fontSize: "var(--sz-stat)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{s.value}</p>
                <p className="uppercase mb-1" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{s.label}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--t-light-3)" }}>{s.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Partnership cards — ivory */}
      <div style={{ background: "var(--c-ivory)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-28">
          <motion.p {...fadeUp(0)} className="uppercase mb-14"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
            Partnership Opportunities
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {partnerships.map((p, i) => (
              <motion.div key={p.idx} {...fadeUp(0.1 * i)}
                className="card-light px-10 py-12 flex flex-col gap-5">
                <p className="uppercase" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.55 }}>{p.idx}</p>
                <p style={{ fontSize: "1.2rem", color: "var(--t-dark)", letterSpacing: "0.01em", lineHeight: 1.3 }}>{p.title}</p>
                <p style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-dark-3)", flexGrow: 1 }}>{p.body}</p>
                <p className="uppercase pt-5" style={{ fontSize: "var(--sz-label)", color: "var(--gold)", borderTop: "1px solid var(--div-light)", letterSpacing: "0.22em" }}>{p.proof}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Audience — coal */}
      <div style={{ background: "var(--c-coal)", borderTop: "1px solid var(--div-dark)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-24">
          <motion.p {...fadeUp(0)} className="uppercase mb-14"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.7 }}>
            Audience and Reach
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {audience.map((a, i) => (
              <motion.div key={a.label} {...fadeUp(0.08 * i)}
                className="card-dark px-10 py-12">
                <p className="uppercase mb-4" style={{ fontSize: "var(--sz-label)", letterSpacing: "0.32em", color: "var(--gold)", opacity: 0.6 }}>{a.label}</p>
                <p className="font-light mb-4" style={{ fontSize: "var(--sz-h3)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{a.value}</p>
                <p style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 5. Closing video */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/videos/dome 2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(12,11,9,0.52)" }} />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
          <motion.p {...fadeUp(0)} className="font-light"
            style={{ fontSize: "clamp(1.75rem, 3.5vw, 3rem)", letterSpacing: "0.15em", color: "var(--t-light)", opacity: 0.85 }}>
            60 events per year.
          </motion.p>
          <motion.p {...fadeUp(0.18)} className="mt-4 uppercase"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "0.3em", color: "var(--gold-hi)", opacity: 0.6 }}>
            Fashion Week · Salone del Mobile · Christmas · Cultural Programming
          </motion.p>
        </div>
      </div>

    </section>
  );
}
