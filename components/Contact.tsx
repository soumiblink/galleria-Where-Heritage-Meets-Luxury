"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../lib/motion";

const paths = [
  {
    label: "Retail Leasing",
    desc: "Flagship, concept store, or seasonal pop-up. Available formats range from 40 m² kiosks to 800 m² anchor units across four wings and two levels.",
    details: ["Luxury · Fashion · Jewellery · F&B", "Short-term and long-term leases available", "Turnkey fit-out options and planning support", "Category exclusivity for anchor tenants"],
    email: "leasing@galleria.it",
    cta: "Inquire About Leasing",
  },
  {
    label: "Sponsorship and Brand Partnerships",
    desc: "Category-exclusive partnerships aligned to the Galleria's annual programming calendar and global media moments.",
    details: ["Fashion Week · Salone del Mobile · Christmas", "Digital and physical integration", "Co-branded content and earned media strategy", "Minimum 12-month partnership terms"],
    email: "partnerships@galleria.it",
    cta: "Explore Partnerships",
  },
  {
    label: "Events and Venue Hire",
    desc: "Exclusive access to the nave, loggia, and rooftop terraces for product launches, private dinners, and brand activations.",
    details: ["200 seated · 2,000 standing reception", "After-hours exclusive access from 22:00", "Full production, catering, and security", "Available 365 days per year"],
    email: "events@galleria.it",
    cta: "Book a Venue",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative w-full" style={{ background: "var(--c-void)" }}>

      {/* 1. Full-screen video hero */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: "100vh" }}>
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/assets/videos/interior 3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(10,12,16,0.55) 0%, rgba(10,12,16,0.75) 100%)" }} />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-8" style={{ minHeight: "100vh" }}>
          <motion.p {...fadeUp(0)} className="uppercase mb-6"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold-hi)", opacity: 0.9 }}>
            Partner With Us
          </motion.p>
          <motion.h2 {...fadeUp(0.12)} className="font-light"
            style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
            Your Next Move
            <br />Starts Here.
          </motion.h2>
          <motion.p {...fadeUp(0.24)} className="mt-8 max-w-lg"
            style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>
            The Galleria's commercial team works with a select number of partners each year.
            Conversations are confidential, tailored, and move quickly.
          </motion.p>
          <motion.a {...fadeUp(0.36)} href="#contact"
            className="mt-10 uppercase transition-all duration-400"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "0.3em", color: "var(--c-void)", background: "var(--gold)", padding: "16px 40px", display: "inline-block" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-hi)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}>
            See Partnership Options ↓
          </motion.a>
        </div>
      </div>

      {/* 2. Partnership paths — ivory */}
      <div style={{ background: "var(--c-ivory)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {paths.map((p, i) => (
              <motion.div key={p.label} {...fadeUp(0.1 * i)}
                className="card-light px-10 py-12 flex flex-col gap-7">
                <div className="flex-1 space-y-5">
                  <p className="uppercase" style={{ fontSize: "var(--sz-label)", letterSpacing: "0.32em", color: "var(--gold)" }}>{p.label}</p>
                  <p style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-dark-3)" }}>{p.desc}</p>
                  <ul className="space-y-3 pt-1">
                    {p.details.map((d) => (
                      <li key={d} className="flex items-start gap-3">
                        <span className="mt-[10px] w-4 h-px flex-shrink-0" style={{ background: "var(--gold)", opacity: 0.5 }} />
                        <span style={{ fontSize: "0.9375rem", lineHeight: "var(--lh-body)", color: "var(--t-dark-3)" }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href={`mailto:${p.email}`}
                  className="group flex items-center justify-between uppercase py-4 transition-all duration-400"
                  style={{ fontSize: "var(--sz-label)", letterSpacing: "0.28em", color: "var(--gold)", borderTop: "1px solid var(--div-light)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--t-dark)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--gold)")}>
                  {p.cta}
                  <span className="transition-transform duration-400 group-hover:translate-x-2">&#8594;</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Direct contacts — warm dark */}
      <div style={{ background: "var(--c-slate)", borderTop: "1px solid var(--div-warm)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-20">
          <motion.p {...fadeUp(0)} className="uppercase mb-12"
            style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)", opacity: 0.7 }}>
            Direct Contacts
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {paths.map((p, i) => (
              <motion.div key={p.label} {...fadeUp(0.07 * i)}>
                <p className="uppercase mb-3" style={{ fontSize: "var(--sz-label)", letterSpacing: "0.28em", color: "var(--gold)", opacity: 0.6 }}>{p.label}</p>
                <a href={`mailto:${p.email}`}
                  className="transition-opacity duration-300 hover:opacity-100"
                  style={{ fontSize: "var(--sz-body)", color: "var(--t-light-2)" }}>
                  {p.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Footer */}
      <div style={{ background: "var(--c-coal)", borderTop: "1px solid var(--div-dark)" }}>
        <div className="max-w-screen-xl mx-auto px-8 md:px-16 py-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="uppercase" style={{ fontSize: "var(--sz-label)", letterSpacing: "0.28em", color: "var(--t-light-3)" }}>
            Galleria Vittorio Emanuele II · Piazza del Duomo · Milan, Italy
          </p>
          <p style={{ fontSize: "0.875rem", color: "var(--t-light-3)" }}>
            &copy; {new Date().getFullYear()} Galleria Experience. All rights reserved.
          </p>
        </div>
      </div>

    </section>
  );
}
