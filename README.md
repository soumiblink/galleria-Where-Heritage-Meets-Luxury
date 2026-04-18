# Galleria Vittorio Emanuele II — Interactive Sales Experience

A premium, cinematic, browser-based sales deck for Galleria Vittorio Emanuele II — Milan's 147-year-old luxury arcade. Built as an interactive pitch tool for prospective retail tenants, brand partners, and event producers.

---

## Live Demo

Deploy to Vercel:

```bash
cd galleria-experience
vercel --prod
```

Or run locally — see setup below.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Animation | Framer Motion |
| Fonts | Geist (sans) + Playfair Display (serif) via Google Fonts |
| Deployment | Vercel |

---

## Setup

```bash
# Install dependencies
cd galleria-experience
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

Node.js 18+ required.

---

## Project Structure

```
galleria-experience/
├── app/
│   ├── globals.css       # Design token system (all CSS variables)
│   ├── layout.tsx        # Font loading, metadata, root layout
│   └── page.tsx          # Section composition
│
├── components/
│   ├── Nav.tsx           # Fixed navigation bar with scroll-aware background
│   ├── ScrollProgress.tsx # Gold progress bar tracking scroll position
│   ├── SectionNav.tsx    # Right-edge dot navigation with active section tracking
│   ├── Hero.tsx          # Full-screen video intro with stat strip
│   ├── Transition.tsx    # Property intro, image grid, key stats
│   ├── Legacy.tsx        # History, architecture specs, timeline, cultural status
│   ├── Luxury.tsx        # Retail positioning, parallax image strip, tenant list
│   ├── Dining.tsx        # Dining offer, venue cards, business case
│   ├── Attractions.tsx   # Events, activations, venue capacity
│   ├── Prestige.tsx      # Platform reach, partnership opportunities, audience data
│   └── Contact.tsx       # CTA, partnership paths, direct contacts, footer
│
├── lib/
│   └── motion.ts         # Shared Framer Motion animation presets
│
└── public/
    └── assets/
        ├── images/       # dome 11–17.jpg (static gallery images)
        └── videos/       # hero.mp4, dome 1–2.mp4, interior 1–4.mp4
```

---

## Design System

All visual decisions live in `app/globals.css` as CSS custom properties.

### Surfaces (7 levels — no pure black or white)

| Token | Value | Use |
|---|---|---|
| `--c-void` | `#0c0b09` | Primary dark background |
| `--c-deep` | `#131109` | Lifted dark |
| `--c-coal` | `#1a1812` | Charcoal panels |
| `--c-slate` | `#1f1d16` | Warm slate — stat bars, timelines |
| `--c-ivory` | `#f5f0e8` | Primary light background |
| `--c-cream` | `#ede8de` | Warm cream panels |
| `--c-stone` | `#e2dbd0` | Warm stone |

### Accent

Single gold accent: `--gold` `#c8a050` / `--gold-hi` `#ddb86a`

### Card Classes

```css
.card-light   /* White card on light bg — hover lifts with shadow */
.card-dark    /* Dark card on dark bg — hover lifts with shadow */
.stat-card    /* Stat block — gold top-border appears on hover */
```

### Type Scale

All sizes use `clamp()` for fluid scaling:

| Token | Range |
|---|---|
| `--sz-hero` | 3.75rem → 7rem |
| `--sz-h2` | 2.75rem → 5rem |
| `--sz-h3` | 2rem → 3.25rem |
| `--sz-stat` | 2.25rem → 3.75rem |
| `--sz-body` | 1.0625rem (fixed) |
| `--sz-label` | 0.75rem (fixed) |

---

## Story Flow

The page tells a linear sales story, but navigation is non-linear — viewers can jump to any section at any time.

```
Hero          → Cinematic video intro, 4 key stats
Transition    → Property positioning, image grid, headline numbers
Legacy        → 147-year history, architecture specs, timeline, cultural significance
Luxury        → Retail environment, key tenants, commercial metrics
Dining        → Dining offer, landmark venues, business case for dwell time
Attractions   → Events, activations (Fashion Week, Salone, Christmas), venue capacity
Prestige      → Platform reach, partnership opportunities, audience profile
Contact       → CTA, 3 partnership paths, direct contacts
```

Each section answers: **"Why should a brand invest here?"**

---

## Interactive Features

| Feature | Implementation |
|---|---|
| Scroll progress bar | `ScrollProgress.tsx` — manual scroll listener, spring-physics gold bar |
| Section dot nav | `SectionNav.tsx` — IntersectionObserver, right-edge dots with labels |
| Parallax image strip | `Luxury.tsx` — `useScroll` + `useTransform` horizontal pan |
| Scroll-triggered reveals | `fadeUp`, `fadeIn` presets in `lib/motion.ts` |
| Video backgrounds | Autoplay, muted, loop on every major section |
| Card hover states | CSS classes `.card-light`, `.card-dark`, `.stat-card` |
| Non-linear navigation | Nav bar + SectionNav allow jumping to any section |

---

## Video / Image Assets

| File | Used in |
|---|---|
| `hero.mp4` | Hero section |
| `interior 1.mp4` | Legacy — split panel |
| `interior 2.mp4` | Dining — business case panel |
| `interior 3.mp4` | Attractions — capacity split, Contact — CTA |
| `interior 4.mp4` | Attractions — activation card |
| `dome 1.mp4` | Attractions — activation card |
| `dome 2.mp4` | Prestige — closing video band |
| `dome 11–17.jpg` | Transition image grid, Luxury parallax strip |

No two full-screen videos appear back-to-back — each video section is separated by a content or image section to avoid visual confusion.

---

## AI Tools Used

- **Kiro (Claude)** — component architecture, design system, content writing, iterative refinement
- All factual content about the Galleria is drawn from publicly documented sources

---

## What Would Be Added With More Time

- Interactive floor plan for the leasing section
- Sponsorship tier calculator
- Video lightbox for event highlight reel
- Animated number counters on scroll entry
- Mobile-optimised video poster images for low-bandwidth connections
- Lighthouse performance audit and image optimisation pass
- Deployment pipeline with preview URLs per branch
