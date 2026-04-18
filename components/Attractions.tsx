"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const activations = [
  { num: "01", title: "Fashion Week Installations",   body: "Every February and September, the Galleria becomes the centrepiece of Milan Fashion Week. Brands transform the nave into immersive runway environments, pop-up installations, and exclusive preview spaces watched by global media.", stat: "200M+ impressions per activation",              video: "/assets/videos/dome 1.mp4" },
  { num: "02", title: "Salone del Mobile",             body: "During the world's most important design fair, the Galleria hosts flagship brand installations, product launches, and curated design experiences that draw the global architecture and design community.",                              stat: "300K+ design professionals in Milan annually", video: "/assets/videos/dome 2.mp4" },
  { num: "03", title: "Christmas & Seasonal Events",   body: "The Galleria's Christmas programme is one of the most photographed events in Europe. Luxury brand takeovers, live performances, and exclusive after-hours events run from November through January.",                                  stat: "4M+ visitors during the Christmas season",    video: "/assets/videos/interior 1.mp4" },
];

const eventTypes = [
  { label: "Product Launches",     note: "Global brand reveals in a UNESCO-grade setting" },
  { label: "Private Dinners",      note: "After-hours exclusive access for 200+ guests" },
  { label: "Fashion Presentations",note: "Runway and presentation space for 500+ guests" },
  { label: "Corporate Receptions", note: "Executive events with full production support" },
  { label: "Brand Activations",    note: "Multi-day immersive brand experiences" },
  { label: "Cultural Programming", note: "Art installations, performances, exhibitions" },
];

export default function Attractions() {
  return (
    <section id="attractions" className="relative w-full" style={{ background: "var(--c-void)" }}>

      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <motion.div {...fadeUp(0)}>
            <p className="uppercase mb-6" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
              Events and Activations
            </p>
            <h2 className="font-light" style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
              The World's
              <br />Most Watched
              <br />Stage.
            </h2>
          </motion.div>
          <motion.p {...fadeUp(0.15)} className="lg:max-w-sm" style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>
            The Galleria hosts over 60 major events per year. Its 245-metre nave, 47-metre glass dome,
            and UNESCO-grade setting create a backdrop that no purpose-built venue can replicate —
            generating international press coverage on every continent.
          </motion.p>
        </div>
      </div>

      {/* 3 activation cards with video backgrounds */}
      <div className="px-8 md:px-16 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {activations.map((a, i) => (
            <motion.div key={a.num} {...fadeUp(0.1 * i)}
              className="relative overflow-hidden flex flex-col justify-end" style={{ minHeight: "520px" }}>
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src={a.video} type="video/mp4" />
              </video>
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(10,12,16,0.94) 0%, rgba(10,12,16,0.28) 55%, rgba(10,12,16,0.08) 100%)" }} />
              <div className="relative z-10 p-8 pb-10">
                <p className="uppercase mb-4" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{a.num}</p>
                <p className="mb-4" style={{ fontSize: "1.25rem", color: "var(--t-light)", letterSpacing: "0.01em", lineHeight: 1.3 }}>{a.title}</p>
                <p className="mb-6" style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>{a.body}</p>
                <p className="uppercase pt-5" style={{ fontSize: "var(--sz-label)", color: "var(--gold-hi)", borderTop: "1px solid rgba(200,160,80,0.25)", letterSpacing: "0.22em" }}>{a.stat}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Event types — warm dark */}
      <div style={{ background: "var(--c-slate)", borderTop: "1px solid var(--div-warm)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-20">
          <motion.p {...fadeUp(0)} className="uppercase mb-10" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.7 }}>
            What We Host
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ borderTop: "1px solid var(--div-warm)" }}>
            {eventTypes.map((e, i) => (
              <motion.div key={e.label} {...fadeUp(0.06 * i)} className="py-8 pr-8"
                style={{ borderBottom: "1px solid var(--div-warm)" }}>
                <p className="mb-2" style={{ fontSize: "1rem", color: "var(--t-light)", letterSpacing: "0.02em" }}>{e.label}</p>
                <p style={{ fontSize: "0.9375rem", lineHeight: 1.6, color: "var(--t-light-2)" }}>{e.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Capacity split */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "55vh" }}>
        <div className="relative w-full lg:w-1/2 h-[40vw] lg:h-auto overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/assets/videos/interior 3.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0" style={{ background: "var(--ov-soft)" }} />
        </div>
        <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-20"
          style={{ background: "var(--c-ivory)" }}>
          <motion.p {...fadeUp(0)} className="uppercase mb-6" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
            Venue Capacity
          </motion.p>
          <motion.h3 {...fadeUp(0.1)} className="font-light mb-10" style={{ fontSize: "var(--sz-h3)", letterSpacing: "0.04em", lineHeight: 1.15, color: "var(--t-dark)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
            After-hours.
            <br />Exclusive access.
            <br />Full production.
          </motion.h3>
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-4 mt-2">
            {[
              { value: "2,000", label: "Standing Reception" },
              { value: "200",   label: "Seated Dinner" },
              { value: "245 m", label: "Nave Length" },
              { value: "365",   label: "Days Available" },
            ].map((s) => (
              <div key={s.label} className="card-light py-7 px-5">
                <p className="font-light mb-1" style={{ fontSize: "var(--sz-stat)", color: "var(--t-dark)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{s.value}</p>
                <p className="uppercase" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

    </section>
  );
}
