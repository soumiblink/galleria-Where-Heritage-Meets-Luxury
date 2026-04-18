export const ease = [0.22, 0.1, 0.22, 1] as const;
export const easeSlow = [0.16, 0.08, 0.16, 1] as const;

/** Fade up on scroll into view */
export const fadeUp = (delay = 0, distance = 28) => ({
  initial: { opacity: 0, y: distance },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 as const },
  transition: { delay, duration: 1.2, ease },
});

/** Fade in on scroll into view */
export const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.18 as const },
  transition: { delay, duration: 1.4, ease },
});

/** Fade up on mount (hero elements) */
export const mountUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 1.3, ease },
});

/** Fade in on mount */
export const mountIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay, duration: 1.2, ease },
});
