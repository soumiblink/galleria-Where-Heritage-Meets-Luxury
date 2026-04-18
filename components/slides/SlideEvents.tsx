"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";

const activations = [
  { num: "01", title: "Fashion Week",          body: "Every Feb & Sep, brands transform the nave into immersive runway environments watched by global media.", stat: "200M+ impressions per activation", video: "/assets/videos/dome 1.mp4" },
  { num: "02", title: "Salone del Mobile",     body: "The world's most important design fair. Flagship installations and product launches draw the global design community.", stat: "300K+ design professionals in Milan", video: "/assets/videos/dome 2.mp4" },
  { num: "03", title: "Christmas Programme",   body: "One of the most photographed events in Europe. Luxury brand takeovers and exclusive after-hours events Nov–Jan.", stat: "4M+ visitors during the season", video: "/assets/videos/interior 1.mp4" },
];

export default function SlideEvents() {
  return (
    <div className="relative w-full h-full flex flex-col" style={{ background: "var(--c-void)" }}>

      {/* Header */}
      <div className="flex-shrink-0 max-w-screen-xl mx-auto w-full px-8 md:px-16 pt-10 pb-6">
        <div className="flex items-end justify-between gap-8">
          <motion.div {...fadeUp(0)}>
            <p className="uppercase mb-3" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>
              Events and Activations
            </p>
            <h2 className="font-light" style={{ fontSize: "var(--sz-h2)", letterSpacing: "var(--tr-h2)", lineHeight: "var(--lh-head)", color: "var(--t-light)", fontFamily: "var(--font-serif, Georgia, serif)" }}>
              The World's Most<br />Watched Stage.
            </h2>
          </motion.div>
          <motion.p {...fadeUp(0.12)} className="max-w-xs"
            style={{ fontSize: "var(--sz-body)", lineHeight: "var(--lh-body)", color: "var(--t-light-2)" }}>
            60+ major events per year. A 245-metre nave and 47-metre glass dome that no purpose-built venue can replicate.
          </motion.p>
        </div>
      </div>

      {/* 3 video cards */}
      <div className="flex-1 px-8 md:px-16 pb-8 grid grid-cols-3 gap-4 min-h-0">
        {activations.map((a, i) => (
          <motion.div key={a.num} {...fadeUp(0.1 * i)}
            className="relative overflow-hidden flex flex-col justify-end rounded-sm">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
              <source src={a.video} type="video/mp4" />
            </video>
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(10,12,16,0.95) 0%, rgba(10,12,16,0.25) 55%, rgba(10,12,16,0.05) 100%)" }} />
            <div className="relative z-10 p-6">
              <p className="uppercase mb-2" style={{ fontSize: "var(--sz-label)", letterSpacing: "var(--tr-label)", color: "var(--gold)" }}>{a.num}</p>
              <p className="mb-2" style={{ fontSize: "1.1rem", color: "var(--t-light)", lineHeight: 1.3 }}>{a.title}</p>
              <p className="mb-4" style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "var(--t-light-2)" }}>{a.body}</p>
              <p className="uppercase pt-3" style={{ fontSize: "var(--sz-label)", color: "var(--gold-hi)", borderTop: "1px solid rgba(200,160,80,0.25)", letterSpacing: "0.2em" }}>{a.stat}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
