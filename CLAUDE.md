# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

No test framework is configured.

## Architecture

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4. Marketing site for a mobile hibachi catering business with Acuity Scheduling booking integration.

### Data-Driven Content

Site content is driven by structured data in `src/lib/`:

- **`site.ts`** — Central config: site name, URLs, booking link, phone, email, service areas. Components import `siteConfig` from here.
- **`menu-states.ts`** — Array of state/region objects (slug, name, markets, descriptions). Drives dynamic `/menu/[stateSlug]` routes and their metadata.
- **`menu-cities.ts`** — City-level data for dynamic `/menu/[stateSlug]/[citySlug]` routes.
- **`faqs.ts`** — Q&A array consumed by the FAQ component and JSON-LD structured data.
- **`structured-data.ts`** — Functions generating JSON-LD schemas (WebSite, LocalBusiness, FAQPage, Service, BreadcrumbList) for SEO.

### Routing

- `/` — Homepage composing all section components in order
- `/menu` — Menu listing with states grouped by region
- `/menu/[stateSlug]` — Dynamic state menu pages with `generateStaticParams()` and `generateMetadata()`
- `/menu/[stateSlug]/[citySlug]` — Dynamic city menu pages
- `/contact` — Contact page with booking help and direct contact info
- `/locations` — Service locations page
- `/reviews` — Customer reviews page
- `/connecticut-hibachi-menu` — Legacy redirect
- `/hibachi-at-home-in-maryland` — Legacy redirect to `/menu/maryland`
- `/robots.ts`, `/sitemap.ts`, `/opengraph-image.tsx` — SEO route handlers

### Client vs Server Components

Most components are server components. Only these use `"use client"`:
- **Header** — scroll-based active section tracking, mobile menu toggle
- **Gallery** — photo/video tab switching
- **AcuityEmbed** — iframe loading state, uses `next/script` with `strategy="lazyOnload"`
- **FireEmbers** — animated background effect
- **BookNowLink** — interactive booking link

### Styling

Tailwind CSS v4 with CSS-first config in `globals.css` using `@theme` block. Path alias: `@/*` → `./src/*`.

**Color palette** (dark theme — warm earth tones):
- Surface: `#1a1512`, containers: `#261f1c` → `#332a26` → `#443833` → `#574843`, bright: `#2d2623`
- Primary: `#ff5a00` (orange), primary-container: `#e64a00` (darker orange)
- Tertiary: `#facc15` (gold accent)
- Text: `#fdf8f5` (on-surface), `#e0d5cf` (on-surface-variant)
- Accent text: `#ffb786` (warm peach, used for labels/highlights), `#ddc1b0` (muted peach, used for body text)
- Outline: `#574843` (outline-variant)

**Fonts**: Inter (sans), Noto Serif (serif), Material Symbols Outlined — all loaded via Google Fonts `<link>` in `layout.tsx`.

**Button classes**: `.btn-primary` (solid orange, rounded-full, press-down effect), `.btn-secondary` (surface-container bg with hover fill). No border rule on cards — use background color differentiation via `style={{ background: "var(--color-surface-container-low)" }}` etc.

### SEO

Every page generates full metadata (title, description, keywords, OG). State menu pages produce dynamic JSON-LD structured data and breadcrumbs. OG image is generated dynamically via `ImageResponse` API in `opengraph-image.tsx`.

### Booking Integration

Acuity Scheduling iframe embedded in `AcuityEmbed.tsx` with a skeleton loader for CLS prevention. The embed URL comes from `siteConfig.bookingUrl`. The `#booking` section on the homepage scrolls to this embed.
