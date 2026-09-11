# Metro Media House — Next.js

A Next.js rebuild of [metromediahouse.co](https://www.metromediahouse.co/), migrated from the original Webflow site with GSAP scroll animations.

## Stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- GSAP + ScrollTrigger

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL for SEO, sitemap, and Open Graph |

## Scripts

```bash
npm run dev    # development server
npm run build  # production build
npm run start  # serve production build
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain (e.g. `https://your-domain.vercel.app`).
4. Deploy — no extra build configuration required.

## Project structure

```
app/              # routes, layout, SEO files (sitemap, robots, manifest)
components/
  animations/     # GSAP scroll orchestration
  layout/         # Navbar, Footer, SkipLink
  sections/       # page sections
  seo/            # JSON-LD helpers
lib/
  content.ts      # all site copy and media URLs
  constants.ts    # links, assets, site config
  seo.ts          # metadata and structured data
```

## SEO

- Metadata API with Open Graph and Twitter cards
- `sitemap.xml`, `robots.txt`, and web manifest
- Organization, WebSite, ProfessionalService, and FAQ JSON-LD
