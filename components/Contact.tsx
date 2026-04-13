"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const paths = [
  {
    label: "Retail Leasing",
    desc: "Flagship, concept store, or seasonal pop-up. Available formats range from 40m² kiosks to 800m² anchor units across four wings.",
    details: ["Luxury · Fashion · Jewellery · F&B", "Short-term and long-term leases", "Turnkey fit-out options available"],
    cta: "Inquire About Leasing",
  },
  {
    label: "Sponsorship & Brand Partnerships",
    desc: "Category-exclusive partnerships aligned to the Galleria's annual programming calendar and global media moments.",
    details: ["Fashion Week · Art Week · Christmas", "Digital and physical integration", "Co-branded content opportunities"],
    cta: "Explore Partnerships",
  },
  {
    label: "Events & Venue Hire",
    desc: "Exclusive access to the nave, loggia, and rooftop terraces for product launches, private dinners, and brand activations.",
    details: ["200 seated · 2,000 standing", "After-hours exclusive access", "Full production support available"],
    cta: "Book a Venue",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative w-full overflow-hidden" style={{ background: "var(--parchment)" }}>
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 pt-32 pb-40">

        <motion.p {...fadeUp(0)} className="text-xs uppercase tracking-[0.4em] mb-8" style={{ color: "var(--bronze)" }}>
          Partner With Us
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-20">
          <motion.h2
            {...fadeUp(0.1)}
            className="text-4xl md:text-6xl lg:text-7xl font-light uppercase"
            style={{ letterSpacing: "0.08em", lineHeight: 1.1, color: "var(--ink)" }}
          >
            Your Next Move
            <br />
            Starts Here.
          </motion.h2>
          <motion.p {...fadeUp(0.2)} className="lg:max-w-xs text-sm leading-relaxed" style={{ color: "var(--ink-2)", opacity: 0.6 }}>
            The Galleria's commercial team works with a select number of partners
            each year. Conversations are confidential, tailored, and move quickly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(26,23,20,0.08)" }}>
          {paths.map((p, i) => (
            <motion.div
              key={p.label}
              {...fadeUp(0.1 * i)}
              className="px-8 py-12 flex flex-col gap-8"
              style={{ background: "var(--parchment)" }}
            >
              <div className="flex-1 space-y-5">
                <p className="text-xs uppercase tracking-[0.35em]" style={{ color: "var(--bronze)" }}>{p.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--ink-2)", opacity: 0.7 }}>{p.desc}</p>
                <ul className="space-y-3 pt-1">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="mt-[7px] w-3 h-px flex-shrink-0" style={{ background: "var(--bronze)", opacity: 0.4 }} />
                      <span className="text-xs leading-relaxed" style={{ color: "var(--ink-2)", opacity: 0.5 }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="mailto:commercial@galleria.it"
                className="group flex items-center justify-between text-xs uppercase tracking-[0.3em] py-4 transition-all duration-500"
                style={{
                  color: "var(--bronze)",
                  borderBottom: "1px solid rgba(140,109,63,0.25)",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--bronze)")}
              >
                {p.cta}
                <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-20 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          style={{ borderTop: "1px solid rgba(26,23,20,0.08)" }}
        >
          <p className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--ink-2)", opacity: 0.3 }}>
            Galleria Vittorio Emanuele II · Piazza del Duomo · Milan, Italy
          </p>
          <p className="text-xs" style={{ color: "var(--ink-2)", opacity: 0.2 }}>
            © {new Date().getFullYear()} Galleria Experience. All rights reserved.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
