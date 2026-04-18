# Galleria Vittorio Emanuele II — Interactive Sales Experience

A premium, cinematic, browser-based sales deck for Galleria Vittorio Emanuele II, Milan's legendary 147-year-old luxury arcade. Built as an interactive pitch tool for prospective retail tenants, brand partners, and event producers.

## Live Demo

Deploy via Vercel: `vercel --prod` from the `galleria-experience` directory.

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Framework | Next.js 15 (App Router) | Fast, SSR-ready, Vercel-native |
| Styling | Tailwind CSS v4 + CSS custom properties | Design token system, no runtime overhead |
| Animation | Framer Motion | Scroll-triggered reveals, parallax, spring physics |
| Fonts | Geist (sans) + Playfair Display (serif) | Sans for UI, serif for editorial headlines |
| Language | TypeScript | Type safety across all components |

## Setup

```bash
cd galleria-experience
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Project Structure

```
app/
  layout.tsx       # Font loading, metadata, global CSS
  page.tsx         # Section composition + global UI (ScrollProgress, SectionNav)
  globals.css      # Design token system (surfaces, gold, type scale)

components/
  Nav.tsx          # Fixed header, gold CTA pill, mobile drawer
  ScrollProgress.tsx  # Gold progress bar at top of viewport
  SectionNav.tsx   # Right-edge dot navigation with section labels
  Hero.tsx         # Full-screen video, serif headline, stat strip
  Transition.tsx   # Parchment intro + image grid + ember stat bar
  Legacy.tsx       # Split video/specs, timeline band, cultural split
  Luxury.tsx       # Video header, parallax image strip, tenant/metrics
  Dining.tsx       # Video hero, stats, venue cards, insight split
  Attractions.tsx  # Event activation cards (video bg), capacity split
  Prestige.tsx     # Video hero, reach stats, partnership cards, audience
  Contact.tsx      # Video band, 3 leasing paths, direct contacts, footer

lib/
  motion.ts        # Shared Framer Motion presets (fadeUp, mountUp, etc.)

public/assets/
  videos/          # hero.mp4, dome 1-2.mp4, interior 1-4.mp4
  images/          # dome 11-17.jpg
```

## Design System

All visual decisions are driven by CSS custom properties in `globals.css`:

**Surfaces** (7 levels, no pure black or white):
- `--c-void` #0f0e0c → `--c-deep` → `--c-coal` → `--c-ember` → `--c-stone` → `--c-parchment`

**Gold accent**: `--gold` #c4995a / `--gold-hi` #dab878

**Type scale**: `--sz-hero` through `--sz-label` using `clamp()` for fluid sizing

## Story Flow

```
Hero (cinematic video intro)
  ↓
Transition (property positioning + image grid + key stats)
  ↓
Legacy (history, architecture, cultural significance)
  ↓
Luxury (retail environment, key tenants, commercial metrics)
  ↓
Dining (lifestyle offer, venue detail, business case)
  ↓
Attractions (events, activations, capacity)
  ↓
Prestige (platform reach, partnership opportunities, audience data)
  ↓
Contact (3 leasing paths, direct contacts, CTA)
```

## Interactive Features

- **ScrollProgress bar** — gold line at top tracks reading position
- **SectionNav dots** — right-edge dot nav with active section label
- **Parallax image strip** — scroll-driven horizontal pan in Luxury section
- **Video backgrounds** — autoplay in every section, never decorative
- **Hover states** — all interactive elements have gold hover transitions
- **Smooth scroll** — native CSS scroll-behavior with section anchors
- **Non-linear navigation** — Nav + SectionNav allow jumping to any section

## AI Tools Used

- **Kiro (Claude)** — full component architecture, design system, content writing
- **Framer Motion** — animation presets tuned for luxury pacing (slow, deliberate)
- Content research: all facts about the Galleria are publicly documented

## Design Decisions

1. **Serif + sans pairing** — Playfair Display for editorial headlines creates luxury contrast against Geist's clean UI type
2. **7-surface palette** — eliminates the "all black" problem by cycling through void → ember → stone → parchment across sections
3. **Video-first** — every major section opens with or contains video; never used as decoration
4. **Bottom-anchored hero text** — text sits on the warm gradient at the base, not floating in the middle
5. **Gold as the only accent** — single accent colour maintains premium restraint
6. **Stat bars on ember** — warm dark brown (#2e2518) breaks monotony between dark and light sections

## What I'd Add With More Time

- Leasing sub-module with interactive floor plan
- Sponsorship tier calculator
- Video lightbox for event highlight reel
- Animated counter for stats on scroll entry
- Mobile-optimised video fallback (poster images)
- Lighthouse performance audit + image optimisation pass
