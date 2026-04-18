# Galleria Vittorio Emanuele II — Interactive Sales Deck

A premium, cinematic, slide-based sales presentation for Galleria Vittorio Emanuele II — Milan's 147-year-old luxury arcade. Built as an interactive pitch tool for live sales calls and standalone prospect exploration.

---

## Live Demo

```bash
cd galleria-experience
vercel --prod
```

Or run locally — see setup below.

---

## Setup

```bash
cd galleria-experience
npm install
npm run dev        # → http://localhost:3000
npm run build      # production build
```

Node.js 18+ required.

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

## Project Structure

```
galleria-experience/
├── app/
│   ├── globals.css       # Design token system (all CSS variables)
│   ├── layout.tsx        # Font loading, metadata, root layout
│   └── page.tsx          # Renders <Deck /> — single entry point
│
├── components/
│   ├── Deck.tsx          # Core presentation engine — state, nav, transitions
│   └── slides/
│       ├── SlideHero.tsx      # Full-screen video intro with stat strip
│       ├── SlideOverview.tsx  # Property positioning, image grid, key stats
│       ├── SlideLegacy.tsx    # History, architecture specs, timeline
│       ├── SlideLuxury.tsx    # Retail environment, tenants, metrics
│       ├── SlideDining.tsx    # Dining offer, landmark venues
│       ├── SlideEvents.tsx    # Events, activations (Fashion Week, Salone, Christmas)
│       ├── SlideAudience.tsx  # Platform reach, audience data, partnerships
│       └── SlidePartner.tsx   # CTA, 3 partnership paths, direct contacts
│
├── lib/
│   └── motion.ts         # Shared Framer Motion animation presets
│
└── public/
    └── assets/
        ├── images/       # dome 11–17.jpg
        └── videos/       # hero.mp4, dome 1–2.mp4, interior 1–4.mp4
```

---

## Navigation

### Keyboard
| Key | Action |
|---|---|
| `→` or `↓` | Next slide |
| `←` or `↑` | Previous slide |
| `F` | Toggle presentation mode (hides all UI chrome) |
| `Escape` | Exit presentation mode |

### Mouse / Touch
- **Left sidebar rail** — hover to expand, click any label to jump to that slide
- **Bottom dots** — click any dot to jump directly to a slide
- **Arrow buttons** — `‹` and `›` on the left and right edges

### Presentation Mode
Click **Present** (top-right) or press `F` to hide the sidebar, dots, and arrows — clean full-screen view for screen-sharing on a live call.

---

## Slide Structure

Each slide is a single-viewport (`w-full h-full`) component. No scrolling.

| # | Slide | Layout | Key Content |
|---|---|---|---|
| 1 | Hero | Full-screen video | Cinematic intro, 4 key stats |
| 2 | Overview | 2-col text + image strip + stat bar | Property positioning, headline numbers |
| 3 | Legacy | 50/50 video + content | 147-year history, architecture specs, timeline |
| 4 | Retail | 50/50 text + image | Key tenants, commercial metrics |
| 5 | Dining | 40/60 image + content | Landmark venues, dining stats |
| 6 | Events | Header + 3 video cards | Fashion Week, Salone, Christmas activations |
| 7 | Audience | Stat bar + 2-col cards | Platform reach, audience profile, partnerships |
| 8 | Partner | 40/60 video + cards | 3 partnership paths, direct contacts |

Each slide answers: **"Why should a brand invest here?"**

---

## Design System

All visual decisions live in `app/globals.css` as CSS custom properties.

### Surfaces

| Token | Value | Use |
|---|---|---|
| `--c-void` | `#0c0b09` | Primary dark background |
| `--c-coal` | `#1a1812` | Charcoal panels |
| `--c-slate` | `#1f1d16` | Warm slate — stat bars |
| `--c-ivory` | `#f5f0e8` | Primary light background |
| `--c-cream` | `#ede8de` | Warm cream panels |

### Accent

Single gold: `--gold` `#c8a050` / `--gold-hi` `#ddb86a`

### Card Classes

```css
.card-light   /* Lifted white card — hover raises with shadow */
.card-dark    /* Lifted dark card — hover raises with shadow */
.stat-card    /* Gold top-border appears on hover */
```

### `overflow: hidden` on `html` and `body`

The deck controls all navigation — browser scroll is disabled globally.

---

## Deck Architecture (`Deck.tsx`)

```
activeSlide (index)  ──→  renders slides[active].component
     ↑
  go(next)  ←── keyboard / sidebar / dots / arrows
     ↑
  direction (1 or -1)  ──→  AnimatePresence slide direction
```

- `AnimatePresence mode="wait"` — waits for exit before entering next slide
- Transition: `opacity + x` (horizontal slide, 420ms)
- Sidebar: 44px collapsed rail, expands to 160px on hover via `motion.nav`
- Slides fill `absolute inset-0` — sidebar overlays, never clips content

---

## AI Tools Used

- **Kiro (Claude)** — full architecture, all component code, design system, content
- All factual content about the Galleria is drawn from publicly documented sources

---

## What Would Be Added With More Time

- Swipe gesture support for tablet use
- Sub-deck modules (deeper leasing, sponsorship, venue pages)
- Animated number counters on slide entry
- PDF export of the deck
- Password-protected shareable link
- Analytics — slide view time tracking
