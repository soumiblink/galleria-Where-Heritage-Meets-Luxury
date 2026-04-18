"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const venues = [
  { name: "Savini Milano",        tag: "Grand Café · Est. 1867",       desc: "The oldest restaurant in the Galleria. Savini has hosted Verdi, Toscanini, and every major figure of Milanese cultural life for over 150 years. The risotto alla Milanese remains unchanged since opening.",                                                                note: "Reservations: 3–4 weeks in advance" },
  { name: "Camparino in Galleria",tag: "Historic Bar · Est. 1915",      desc: "Birthplace of the Campari Spritz. Gaspare Campari's original bar, still serving the house recipe from behind the same Liberty-style counter installed in 1915.",                                                                                                              note: "National Register of Historic Premises" },
  { name: "Cracco",               tag: "Fine Dining · 2 Michelin Stars",desc: "Carlo Cracco's flagship restaurant occupies a restored 19th-century space across two floors of the north wing. The tasting menu reinterprets Lombard cuisine with rigorous technique.",                                                                                       note: "Tasting menu from €180 per person" },
  { name: "Terrazza Aperol",      tag: "Rooftop Bar",                   desc: "The most photographed dining view in Milan — a rooftop terrace directly above the Galleria's triumphal arch, overlooking the Duomo's spires. Aperitivo from 12:00 to midnight.",                                                                                              note: "Capacity: 120 covers · Private hire available" },
];

const stats = [
  { value: "40+",   label: "Dining Venues",   note: "Espresso bars to Michelin restaurants" },
  { value: "3",     label: "Michelin Stars",  note: "Across two restaurants in the arcade" },
  { value: "€180",  label: "Avg. Spend",      note: "Combined retail and dining per visitor" },
  { value: "2.4 h", label: "Avg. Dwell Time", note: "Highest of any Italian retail destination" },
];

const insights = [
  "Visitors who dine here spend 2.1× more on retail than those who do not",
  "Dining extends average visit duration from 45 minutes to 2.4 hours",
  "Repeat visit frequency is 4.8× higher among dining visitors",
  "Evening dining attracts a distinct cohort — high-income, low price-sensitivity",
];

export default function Dining() {
  return (
    <section id="dining" className="relative w-full" style={{ background: "var(--c-void)" }}>

     
      <div className="flex flex-col-reverse lg:flex-row" style={{ minHeight: "90vh" }}>
        <div className="relative w-full lg:w-1/2 h-[60vw] lg:h-auto overflow-hidden">
          <img
            src="/assets/images/dome 17.jpg"
            alt="Galleria dining"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--ov-soft)" }} />
        </div>
        <div
          className="relative w-full lg:w-1/2 flex flex-col justify-center px-10 md:px-16 lg:px-20 py-24 lg:py-32"
          style={{ background: "var(--c-ivory)" }}
        >
          <motion.p {...fadeUp(0)} className="uppercase mb-6"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
            Dining and Lifestyle
          </motion.p>
          <motion.h2 {...fadeUp(0.12)} className="font-light"
            style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-dark)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
            Where Milan
            <br />Comes to Taste.
          </motion.h2>
          <motion.p {...fadeUp(0.24)} className="mt-8 max-w-md"
            style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-dark-3)" }}>
            The Galleria's dining offer is not an amenity — it is a destination in its own right.
            Institutions that shaped Italian food culture for over a century sit alongside
            contemporary Michelin-starred restaurants, all beneath the same iconic glass vault.
          </motion.p>
          <motion.div {...fadeUp(0.36)} className="mt-10 grid grid-cols-3 gap-6" style={{ borderTop: "1px solid var(--div-light)", paddingTop: "2rem" }}>
            {[
              { value: "40+", label: "Dining Venues" },
              { value: "3",   label: "Michelin Stars" },
              { value: "150+",label: "Years of History" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-light mb-1" style={{ fontSize: "var(--sz-stat)", color: "var(--t-dark)" }}>{s.value}</p>
                <p className="uppercase" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

     
      <div style={{ background: "var(--c-slate)", borderTop: "1px solid var(--div-warm)", borderBottom: "1px solid var(--div-warm)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div key={s.label} {...fadeUp(0.06 * i)}
                className="stat-card py-14 text-center"
                style={{ borderRight: i < stats.length - 1 ? "1px solid var(--div-warm)" : "none" }}>
                <p className="font-light mb-2" style={{ fontSize: "var(--sz-stat)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>{s.value}</p>
                <p className="uppercase mb-1" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{s.label}</p>
                <p style={{ fontSize: "0.8125rem", color: "var(--t-light-3)" }}>{s.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    
      <div style={{ background: "var(--c-ivory)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-28">
          <motion.p {...fadeUp(0)} className="uppercase mb-14"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
            Landmark Venues
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {venues.map((v, i) => (
              <motion.div key={v.name} {...fadeUp(0.07 * i)}
                className="card-light px-10 py-10 flex flex-col gap-5">
                <div>
                  <p className="mb-2" style={{ fontSize: "1.125rem", fontWeight: 400, color: "var(--t-dark)", letterSpacing: "0.01em" }}>{v.name}</p>
                  <p className="uppercase" style={{ fontSize: "var(--sz-label)", letterSpacing: "0.28em", color: "var(--gold)" }}>{v.tag}</p>
                </div>
                <p style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-dark-3)" }}>{v.desc}</p>
                <p className="pt-4 mt-auto" style={{ fontSize: "0.875rem", color: "var(--gold)", borderTop: "1px solid var(--div-light)" }}>{v.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "65vh" }}>
        <div className="relative w-full lg:w-1/2 h-[50vw] lg:h-auto overflow-hidden">
          <img src="/assets/images/dome 15.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--ov-soft)" }} />
        </div>
        <div className="relative w-full lg:w-1/2 overflow-hidden" style={{ minHeight: "50vw" }}>
          <img src="/assets/images/dome 16.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(10,12,16,0.84)" }} />
          <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-16 lg:px-20 py-24">
            <motion.p {...fadeUp(0)} className="uppercase mb-5"
              style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.75 }}>
              The Business Case
            </motion.p>
            <motion.h3 {...fadeUp(0.1)} className="font-light mb-10"
              style={{ fontSize: "var(--sz-h3)", letterSpacing: "0.04em", lineHeight: 1.15, color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
              Dwell time
              <br />drives spend.
            </motion.h3>
            <motion.ul {...fadeUp(0.2)} className="space-y-5 max-w-md">
              {insights.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="mt-[10px] w-5 h-px flex-shrink-0" style={{ background: "var(--gold)", opacity: 0.6 }} />
                  <span style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>

    </section>
  );
}
