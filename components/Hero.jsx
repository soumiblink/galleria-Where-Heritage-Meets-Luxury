"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
});

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video — sharp, no transforms */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ transform: "none", filter: "none" }}
      >
        <source src="/assets/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

        <motion.h1
          {...fadeUp(0)}
          className="text-5xl md:text-7xl lg:text-8xl font-light uppercase"
          style={{
            letterSpacing: "0.2em",
            textShadow: "0 0 40px rgba(255,255,255,0.12)",
          }}
        >
          Where Heritage<br />Meets Luxury
        </motion.h1>

        <motion.p
          {...fadeUp(0.35)}
          className="mt-8 text-lg md:text-xl font-light tracking-widest opacity-80"
          style={{ textShadow: "0 0 20px rgba(255,255,255,0.08)" }}
        >
          Galleria Vittorio Emanuele II
        </motion.p>

        <motion.p
          {...fadeUp(0.65)}
          className="mt-3 text-xs md:text-sm uppercase opacity-50"
          style={{ letterSpacing: "0.3em" }}
        >
          Since 1877 · Milan, Italy
        </motion.p>

      </div>

    </section>
  );
}
