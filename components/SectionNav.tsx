"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero",        label: "Intro" },
  { id: "legacy",      label: "Legacy" },
  { id: "luxury",      label: "Retail" },
  { id: "dining",      label: "Dining" },
  { id: "attractions", label: "Events" },
  { id: "events",      label: "Platform" },
  { id: "contact",     label: "Partner" },
];

export default function SectionNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = id === "hero" ? document.body : document.getElementById(id);
      if (!el) return;

      const target = id === "hero" ? document.querySelector("section") : el;
      if (!target) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.35 }
      );
      obs.observe(target);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 items-center"
      aria-label="Section navigation"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={id === "hero" ? "#" : `#${id}`}
            title={label}
            className="group flex items-center gap-2 justify-end"
          >
            <span
              className="text-right uppercase transition-all duration-300 overflow-hidden"
              style={{
                fontSize: "9px",
                letterSpacing: "0.25em",
                color: "var(--gold)",
                opacity: isActive ? 0.9 : 0,
                maxWidth: isActive ? "80px" : "0px",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
            <motion.span
              animate={{ scale: isActive ? 1 : 0.6, opacity: isActive ? 1 : 0.35 }}
              transition={{ duration: 0.3 }}
              className="block rounded-full flex-shrink-0"
              style={{
                width: isActive ? "8px" : "5px",
                height: isActive ? "8px" : "5px",
                background: isActive ? "var(--gold)" : "var(--t-light-3)",
                border: isActive ? "none" : "1px solid var(--t-light-3)",
              }}
            />
          </a>
        );
      })}
    </nav>
  );
}
