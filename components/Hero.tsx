"use client";

import { motion } from "framer-motion";
import { ease } from "../lib/motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "none", filter: "none" }}
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-8">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2, ease }}
          className="text-white/50 text-xs uppercase tracking-[0.4em] mb-10"
        >
          Milan · Est. 1877
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.6, ease }}
          className="text-white text-5xl md:text-7xl lg:text-[6rem] font-light uppercase leading-none"
          style={{ letterSpacing: "0.15em" }}
        >
          Where Heritage
          <br />
          Meets Luxury
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1.4, ease }}
          className="mt-10 text-white/60 text-sm md:text-base font-light tracking-[0.3em] uppercase"
        >
          Galleria Vittorio Emanuele II
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/25 text-[10px] uppercase tracking-[0.4em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
}
