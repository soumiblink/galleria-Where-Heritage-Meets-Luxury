"use client";

import { motion } from "framer-motion";
import { ease } from "../lib/motion";

export default function Transition() {
  return (
    <section
      className="relative w-full flex items-center justify-center py-48 px-8"
      style={{ background: "var(--dark)" }}
    >
      {/* Subtle warm horizontal rule */}
      <div
        className="absolute top-0 left-8 right-8 md:left-16 md:right-16 h-px"
        style={{ background: "var(--sepia-strong)" }}
      />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.8, ease }}
        className="text-2xl md:text-4xl lg:text-5xl font-light text-center uppercase"
        style={{ letterSpacing: "0.2em", lineHeight: 1.6, color: "var(--ivory)" }}
      >
        More than a destination.
        <br />
        <span style={{ color: "var(--bronze-light)", opacity: 0.7 }}>A legacy.</span>
      </motion.p>

      <div
        className="absolute bottom-0 left-8 right-8 md:left-16 md:right-16 h-px"
        style={{ background: "var(--sepia-strong)" }}
      />
    </section>
  );
}
