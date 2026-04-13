"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Legacy", href: "#legacy" },
  { label: "Luxury", href: "#luxury" },
  { label: "Events", href: "#events" },
  { label: "Partner", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background: scrolled ? "rgba(14,13,11,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(180,155,110,0.12)" : "none",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-8 md:px-16 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-xs uppercase tracking-[0.4em] transition-colors duration-300"
          style={{ color: "var(--ivory)" }}
        >
          Galleria · Milano
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.25em] transition-colors duration-500"
              style={{ color: "rgba(232,224,208,0.4)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ivory)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(232,224,208,0.4)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden flex flex-col gap-[5px] w-5 py-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-px transition-all duration-300"
              style={{
                background: "var(--ivory)",
                opacity: i === 1 ? (open ? 0 : 0.6) : 0.6,
                transform: i === 0 && open ? "rotate(45deg) translateY(6px)"
                         : i === 2 && open ? "rotate(-45deg) translateY(-6px)"
                         : "none",
              }}
            />
          ))}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden overflow-hidden"
            style={{ background: "var(--dark)", borderTop: "1px solid rgba(180,155,110,0.1)" }}
          >
            <nav className="flex flex-col px-8 py-8 gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-[0.3em] transition-colors duration-300"
                  style={{ color: "rgba(232,224,208,0.5)" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
