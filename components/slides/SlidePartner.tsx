"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

const paths = [
  { label: "Retail Leasing",              desc: "40 m² kiosks to 800 m² anchor units across four wings.", email: "leasing@galleria.it",      cta: "Inquire About Leasing" },
  { label: "Sponsorship & Partnerships",  desc: "Category-exclusive packages aligned to the annual programming calendar.", email: "partnerships@galleria.it", cta: "Explore Partnerships" },
  { label: "Events and Venue Hire",       desc: "Exclusive nave, loggia, and rooftop access. 200 seated · 2,000 standing.", email: "events@galleria.it",       cta: "Book a Venue" },
];

export default function SlidePartner() {
  return (
    <div className="relative w-full h-full flex" style={{ background: "var(--c-void)" }}>

      
      <div className="relative w-5/12 h-full overflow-hidden flex-shrink-0">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/videos/interior 3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,12,16,0.50) 0%, rgba(10,12,16,0.72) 100%)" }} />
        <div className="relative z-10 flex flex-col justify-center h-full px-10 md:px-12">
          <motion.p {...fadeUp(0)} className="uppercase mb-5"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold-hi)", opacity: 0.9 }}>
            Partner With Us
          </motion.p>
          <motion.h2 {...fadeUp(0.1)} className="font-light mb-6"
            style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
            Your Next Move<br />Starts Here.
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="mb-8"
            style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>
            The Galleria's commercial team works with a select number of partners each year.
            Conversations are confidential and move quickly.
          </motion.p>
          <motion.div {...fadeUp(0.3)}>
            <p className="uppercase mb-2" style={{ fontSize: "var(--sz-label)", letterSpacing: "0.28em", color: "var(--gold)", opacity: 0.6 }}>General Enquiries</p>
            <a href="mailto:commercial@galleria.it"
              style={{ fontSize: "var(--sz-body)", color: "var(--t-light-2)" }}
              className="hover:opacity-100 transition-opacity">
              commercial@galleria.it
            </a>
          </motion.div>
        </div>
      </div>

      
      <div className="relative w-7/12 h-full flex flex-col justify-center px-10 md:px-14 py-10 overflow-y-auto"
        style={{ background: "var(--c-ivory)" }}>
        <motion.p {...fadeUp(0)} className="uppercase mb-6"
          style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
          How to Partner
        </motion.p>
        <div className="space-y-4">
          {paths.map((p, i) => (
            <motion.div key={p.label} {...fadeUp(0.1 * i)} className="card-light px-8 py-6">
              <p className="uppercase mb-2" style={{ fontSize: "var(--sz-label)", letterSpacing: "0.28em", color: "var(--gold)" }}>{p.label}</p>
              <p className="mb-4" style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-dark-3)" }}>{p.desc}</p>
              <a href={`mailto:${p.email}`}
                className="group flex items-center justify-between uppercase transition-colors duration-300"
                style={{ fontSize: "var(--sz-label)", letterSpacing: "0.25em", color: "var(--gold)", borderTop: "1px solid var(--div-light)", paddingTop: "0.75rem" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--t-dark)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--gold)")}>
                {p.cta}
                <span className="transition-transform duration-300 group-hover:translate-x-2">&#8594;</span>
              </a>
            </motion.div>
          ))}
        </div>
        <motion.p {...fadeUp(0.4)} className="mt-6 uppercase text-center"
          style={{ fontSize: "var(--sz-label)", letterSpacing: "0.28em", color: "var(--t-dark-3)", opacity: 0.4 }}>
          Galleria Vittorio Emanuele II · Piazza del Duomo · Milan
        </motion.p>
      </div>
    </div>
  );
}
