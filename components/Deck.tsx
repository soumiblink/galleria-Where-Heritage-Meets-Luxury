"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SlideHero from "./slides/SlideHero";
import SlideOverview from "./slides/SlideOverview";
import SlideLegacy from "./slides/SlideLegacy";
import SlideLuxury from "./slides/SlideLuxury";
import SlideDining from "./slides/SlideDining";
import SlideEvents from "./slides/SlideEvents";
import SlideAudience from "./slides/SlideAudience";
import SlidePartner from "./slides/SlidePartner";

const slides = [
  { id: "hero",     label: "Intro",    component: SlideHero },
  { id: "overview", label: "Overview", component: SlideOverview },
  { id: "legacy",   label: "Legacy",   component: SlideLegacy },
  { id: "luxury",   label: "Retail",   component: SlideLuxury },
  { id: "dining",   label: "Dining",   component: SlideDining },
  { id: "events",   label: "Events",   component: SlideEvents },
  { id: "audience", label: "Audience", component: SlideAudience },
  { id: "partner",  label: "Partner",  component: SlidePartner },
];

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit:  (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

const RAIL = 44; 

export default function Deck() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const [presentation, setPresentation] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const go = useCallback((next: number) => {
    if (next < 0 || next >= slides.length) return;
    setDir(next > active ? 1 : -1);
    setActive(next);
  }, [active]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(active + 1);
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   go(active - 1);
      if (e.key === "Escape") setPresentation(false);
      if (e.key === "f" || e.key === "F") setPresentation(p => !p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, go]);

  const ActiveSlide = slides[active].component;

  return (
    <div className="relative w-screen h-screen overflow-hidden select-none"
      style={{ background: "var(--c-void)" }}>

      
      <AnimatePresence mode="wait" custom={dir}>
        <motion.div
          key={active}
          custom={dir}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.42, ease: [0.22, 0.1, 0.22, 1] }}
          className="absolute inset-0"
          style={{ willChange: "transform, opacity" }}
        >
          <ActiveSlide />
        </motion.div>
      </AnimatePresence>

      
      {!presentation && (
        <motion.nav
          onHoverStart={() => setSidebarOpen(true)}
          onHoverEnd={() => setSidebarOpen(false)}
          animate={{ width: sidebarOpen ? 160 : RAIL }}
          transition={{ duration: 0.28, ease: [0.22, 0.1, 0.22, 1] }}
          className="absolute left-0 top-0 bottom-0 z-50 flex flex-col overflow-hidden"
          style={{
            background: "rgba(12,11,9,0.82)",
            backdropFilter: "blur(20px)",
            borderRight: "1px solid var(--div-dark)",
          }}
        >
          
          <div className="flex-shrink-0 flex items-center px-3 py-4"
            style={{ borderBottom: "1px solid var(--div-dark)", height: "56px" }}>
            {/* Dot icon always visible */}
            <span className="flex-shrink-0 w-2 h-2 rounded-full"
              style={{ background: "var(--gold)", opacity: 0.8 }} />
            <motion.div
              animate={{ opacity: sidebarOpen ? 1 : 0, x: sidebarOpen ? 0 : -8 }}
              transition={{ duration: 0.2 }}
              className="ml-3 overflow-hidden whitespace-nowrap">
              <p className="uppercase" style={{ fontSize: "0.6875rem", letterSpacing: "0.4em", color: "var(--t-light)" }}>Galleria</p>
              <p className="uppercase" style={{ fontSize: "0.5625rem", letterSpacing: "0.3em", color: "var(--gold)", opacity: 0.65 }}>Milano · 1877</p>
            </motion.div>
          </div>

          
          <div className="flex-1 flex flex-col justify-center py-4 gap-0.5">
            {slides.map((s, i) => {
              const isActive = i === active;
              return (
                <button key={s.id} onClick={() => go(i)}
                  className="flex items-center gap-3 px-3 py-2 transition-all duration-200 text-left w-full"
                  style={{ opacity: isActive ? 1 : 0.4 }}>
                  {/* Pill indicator — always visible */}
                  <span className="flex-shrink-0 rounded-full transition-all duration-300"
                    style={{
                      width: "4px",
                      height: isActive ? "20px" : "4px",
                      background: isActive ? "var(--gold)" : "var(--t-light-3)",
                    }} />
                  
                  <motion.span
                    animate={{ opacity: sidebarOpen ? 1 : 0 }}
                    transition={{ duration: 0.15 }}
                    className="uppercase whitespace-nowrap overflow-hidden"
                    style={{
                      fontSize: "0.6875rem",
                      letterSpacing: "0.22em",
                      color: isActive ? "var(--gold-hi)" : "var(--t-light-2)",
                    }}>
                    {s.label}
                  </motion.span>
                </button>
              );
            })}
          </div>

          
          <div className="flex-shrink-0 flex items-center px-3 py-3"
            style={{ borderTop: "1px solid var(--div-dark)" }}>
            <motion.p
              animate={{ opacity: sidebarOpen ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              style={{ fontSize: "0.6875rem", color: "var(--t-light-3)", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
              {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </motion.p>
          </div>
        </motion.nav>
      )}

      
      {!presentation && (
        <div className="absolute bottom-5 inset-x-0 z-40 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => go(i)}
              className="transition-all duration-300"
              style={{
                width: i === active ? "24px" : "6px",
                height: "6px",
                borderRadius: "3px",
                background: i === active ? "var(--gold)" : "var(--t-light-3)",
              }} />
          ))}
        </div>
      )}

      
      {!presentation && (
        <>
          <button onClick={() => go(active - 1)} disabled={active === 0}
            className="absolute z-40 transition-all duration-300"
            style={{
              left: `${RAIL + 8}px`, top: "50%", transform: "translateY(-50%)",
              opacity: active === 0 ? 0.12 : 0.45,
              color: "var(--t-light)", fontSize: "1.5rem", padding: "8px 4px",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = active === 0 ? "0.12" : "0.45")}>
            ‹
          </button>
          <button onClick={() => go(active + 1)} disabled={active === slides.length - 1}
            className="absolute z-40 transition-all duration-300"
            style={{
              right: "12px", top: "50%", transform: "translateY(-50%)",
              opacity: active === slides.length - 1 ? 0.12 : 0.45,
              color: "var(--t-light)", fontSize: "1.5rem", padding: "8px 4px",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={e => (e.currentTarget.style.opacity = active === slides.length - 1 ? "0.12" : "0.45")}>
            ›
          </button>
        </>
      )}

      
      <button onClick={() => setPresentation(p => !p)}
        className="absolute z-50 uppercase transition-all duration-300"
        style={{
          top: "12px", right: "12px",
          fontSize: "0.625rem", letterSpacing: "0.22em",
          color: presentation ? "var(--gold)" : "var(--t-light-3)",
          background: "rgba(12,11,9,0.60)",
          backdropFilter: "blur(8px)",
          border: "1px solid var(--div-dark)",
          padding: "5px 12px",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--gold-hi)")}
        onMouseLeave={e => (e.currentTarget.style.color = presentation ? "var(--gold)" : "var(--t-light-3)")}>
        {presentation ? "Exit" : "Present"}
      </button>

      
      {active === 0 && !presentation && (
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
          className="absolute z-40 uppercase"
          style={{ bottom: "26px", right: "16px", fontSize: "0.5625rem", letterSpacing: "0.25em", color: "var(--t-light-3)" }}>
          ← → navigate · F present
        </motion.p>
      )}
    </div>
  );
}
