"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Legacy",  href: "#legacy" },
  { label: "Retail",  href: "#luxury" },
  { label: "Dining",  href: "#dining" },
  { label: "Events",  href: "#attractions" },
  { label: "Partner", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-700"
      style={{
        background: scrolled ? "rgba(12,11,9,0.94)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--div-dark)" : "none",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <a href="#"
          style={{ fontSize: "var(--sz-label)", letterSpacing: "0.45em", color: "var(--t-light)", textTransform: "uppercase" }}
          className="transition-opacity duration-300 hover:opacity-50">
          Galleria · Milano
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              style={{ fontSize: "var(--sz-label)", letterSpacing: "0.25em", color: "var(--t-light-2)", textTransform: "uppercase" }}
              className="transition-colors duration-500"
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-hi)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--t-light-2)")}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Enquire — bordered, not filled */}
        <a href="#contact"
          className="hidden md:block uppercase transition-all duration-500"
          style={{
            fontSize: "var(--sz-label)",
            letterSpacing: "0.25em",
            color: "var(--gold)",
            border: "1px solid var(--gold-lo)",
            padding: "9px 22px",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.color = "var(--c-void)";
            (e.currentTarget as HTMLElement).style.background = "var(--gold)";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.color = "var(--gold)";
            (e.currentTarget as HTMLElement).style.background = "transparent";
            (e.currentTarget as HTMLElement).style.borderColor = "var(--gold-lo)";
          }}>
          Enquire
        </a>

        {/* Mobile burger */}
        <button className="md:hidden flex flex-col justify-center gap-[5px] w-6 h-6"
          onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {[0, 1, 2].map((i) => (
            <span key={i} className="block h-px transition-all duration-300"
              style={{
                background: "var(--t-light)",
                opacity: i === 1 ? (open ? 0 : 0.45) : 0.45,
                transform: i === 0 && open ? "rotate(45deg) translateY(6px)"
                  : i === 2 && open ? "rotate(-45deg) translateY(-6px)" : "none",
              }} />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--c-coal)", borderTop: "1px solid var(--div-dark)" }}>
            <nav className="flex flex-col px-8 py-10 gap-7">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  style={{ fontSize: "var(--sz-label)", letterSpacing: "0.28em", color: "var(--t-light-2)", textTransform: "uppercase" }}>
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)}
                className="uppercase mt-2 text-center py-3"
                style={{ fontSize: "var(--sz-label)", letterSpacing: "0.25em", color: "var(--gold)", border: "1px solid var(--gold-lo)" }}>
                Enquire
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
