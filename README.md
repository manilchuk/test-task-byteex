# Byteex — Product Landing Page

A pixel-accurate recreation of the Byteex product landing page design (Figma), built as a standard
development test task: Next.js front end + Sanity as a headless CMS, version-controlled on GitHub.

**Live repo:** https://byteex-rho.vercel.app

## Table of contents

- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
- [Project structure](#project-structure)
- [Content management (Sanity)](#content-management-sanity)
- [Design tokens](#design-tokens)
- [Responsive behavior](#responsive-behavior)
- [Known limitations / roadmap](#known-limitations--roadmap)
- [Git workflow](#git-workflow)

## Tech stack

| Layer              | Choice                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework          | [Next.js](https://nextjs.org/) (App Router) + TypeScript                                                                                    |
| Styling            | CSS Modules — no CSS framework, every section hand-built against the Figma spec                                                             |
| Fonts              | `next/font/google` — Poppins (`--font-sofia-pro`) and Inter (`--font-suisse-int`), used as close stand-ins for the original Figma typefaces |
| Icons              | one SVG sprite (`public/icons/sprite.svg`), referenced via `<use href="/icons/sprite.svg#icon-name" />`                                     |
| Images             | `public/images/**`, `.webp`, served through `next/image`                                                                                    |
| CMS                | [Sanity](https://www.sanity.io/) — Studio embedded in this same Next.js app at `/studio`                                                    |
| Linting/formatting | ESLint + Prettier                                                                                                                           |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the site, and
[http://localhost:3000/studio](http://localhost:3000/studio) for the CMS.

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint     # ESLint
```

## Project structure

```
app/
  layout.tsx          # fonts, metadata
  page.tsx             # assembles every section in order
  globals.css           # design tokens (colors, container width) + resets
  studio/
    [[...tool]]/
      page.tsx          # embedded Sanity Studio, served at /studio
components/
  Header/                # announcement bar + logo
  Hero/                   # headline, bullets, CTA, review card, photo collage
  Press/                  # "as seen in" logo row
  Features/               # "Loungewear you can be proud of" + product gallery
  BestSelfSection/        # founder story + photo collage
  ComfortSection/         # "Comfort made easy" — 3 step cards
  FansSection/            # UGC photo mosaic + testimonial carousel
  FaqSection/             # accordion + photo collage
  ImpactSection/          # sustainability stats band
  FindSomethingSection/   # closing CTA + shipping/trust badges
sanity/
  lib/
    client.ts             # configured Sanity client (projectId, dataset)
    queries.ts             # every GROQ query used by the site
  schemaTypes/
    index.ts                # registers every schema type with Sanity
    <section>.ts             # one schema file per content section
sanity.config.ts           # Studio config (plugins, schema, basePath: /studio)
public/
  icons/sprite.svg          # all line icons as one SVG sprite
  images/                    # static/fallback photography (.webp)
```

Each component owns its own CSS Module (`Component.module.css`), scoped to that component only — the
shared `.container` helper in `globals.css` is the only class that crosses component boundaries.

Components with user interaction (accordions, carousels) are split into a **Server Component** that
fetches content from Sanity and a small **Client Component** (`'use client'`) that only handles the
interactive bits (e.g. `FaqSection.tsx` + `FaqAccordion.tsx`, `Features.tsx` +
`FeaturesGallery.tsx`). This keeps data fetching on the server while keeping `useState`/`onClick`
logic where React requires it.

## Content management (Sanity)

Every section on the page is backed by a singleton Sanity document (one document per section, e.g.
`hero`, `faq`, `comfort`) so editors can update copy, step cards, testimonials, FAQ entries and most
photography without a code deploy.

- **Studio:** open `/studio` on the running site, sign in with the account used to create the Sanity
  project, and edit any section listed on the left. Remember to hit **Publish** — a saved draft
  alone isn't visible to the live site.
- **Project:** `projectId` and `dataset` are set in `sanity.config.ts` and `sanity/lib/client.ts`.
- **Fallback content:** every Server Component that fetches from Sanity (`Hero.tsx`, `Press.tsx`,
  `Features.tsx`, etc.) has a hardcoded `FALLBACK` constant, used only if the matching Sanity
  document doesn't exist yet or comes back empty. This means the site never breaks while content is
  being filled in — but it's worth double-checking that real Sanity content (not the fallback) is
  what's actually rendering before treating a section as "done".
- **Images from Sanity:** resolved directly to their CDN URL in each GROQ query (e.g.
  `"imageUrl": image.asset->url`) and rendered through `next/image`. `next.config.ts` allowlists
  `cdn.sanity.io` as a remote image source — without that, `next/image` will refuse to render them.
- **Not CMS-managed on purpose:** the UGC photo mosaic in `FansSection` (22 decorative background
  images) and the payment-method icons in `FindSomethingSection` stay as static local assets —
  managing dozens of purely decorative images through the CMS wasn't worth the overhead for this
  project's scope.

## Design tokens

All colors, the shared container width, and the two font stacks live in `app/globals.css` as CSS
custom properties (e.g. `--color-navy`, `--color-cream`, `--container-w`). Components reference
these tokens rather than hardcoding hex values, so the palette can be adjusted from one place.

## Responsive behavior

Desktop layout matches the Figma desktop spec. Mobile adaptation (against a separate mobile Figma
mockup) is partially done — some sections already have dedicated mobile layouts (e.g. `Hero` reflows
via CSS Grid `grid-template-areas`, `ComfortSection` becomes a single-card carousel on small
screens, `FansSection` gets dot pagination) — others are still being fine-tuned against the mobile
redlines.

## Known limitations / roadmap

- Mobile responsiveness is being finished section by section against the mobile mockup.
- A few images (UGC mosaic, payment icons) are intentionally static rather than CMS-managed — see
  [Content management](#content-management-sanity).
- Some icon/image filenames referenced in components are placeholders for assets exported from Figma
  — double-check `public/icons` and `public/images` contain every file a component expects before
  deploying.

## Git workflow

Work is done in feature branches (`feat/<section-name>`) merged into `main`, with commits scoped to
one section or fix at a time.
