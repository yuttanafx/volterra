# Voltera — Clean Energy Innovation Hero (Next.js)

Next.js 14 (App Router) + TypeScript + Tailwind version of the cinematic
hero, restyled for a decentralized clean-energy brand — inspired by the
direction of terravolteco.com, with original copy and a distinct visual
system (not a copy of their design or content).

## Design tokens

- **Color** — `ink #0A1F1C` (background), `surface #123832`, `volt #C6F135`
  (single electric-lime accent, standing in for voltage), `paper #F4F7F2`
  (primary text), `sage #9CB3AA` (muted text).
- **Type** — `Fraunces` (display, organic serif — nature + engineering),
  `Inter` (body), `IBM Plex Mono` (data readouts).
- **Signature element** — `EnergyPulse`: a live-ticking kWh counter with a
  pulsing voltage line, standing in for a decentralized network reporting
  generation in real time. Swap the increment logic for a real API later.

## Setup

```bash
npm install
npm run dev
```

The hero background video is already included at
`public/media/hero-clean-energy.mp4`. Swap it out any time by replacing
that file — the component picks up whatever is at that path automatically.

Open http://localhost:3000

## Structure

- `src/app/layout.tsx` — loads fonts, sets metadata
- `src/app/page.tsx` — composes the page
- `src/components/VideoBackground.tsx` — rAF-driven fade in/out loop
- `src/components/EnergyPulse.tsx` — signature live counter
- `src/components/Navbar.tsx` — logo + nav + CTA
- `src/components/Hero.tsx` — headline, description, CTA, EnergyPulse
