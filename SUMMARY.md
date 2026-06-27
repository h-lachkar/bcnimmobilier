# BCN-Immobilier — Project Summary

Complete rebuild of [bcn-immobilier.com](https://www.bcn-immobilier.com) from Squarespace to Next.js 14, preserving all original content while redesigning the UI and maximizing SEO/performance.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14.2.18 (App Router, static export) |
| Styling | Tailwind CSS 3.4 + custom CSS |
| Animations | Framer Motion |
| Fonts | DM Sans (display) · Inter (body) · JetBrains Mono |
| Language | TypeScript |
| Images | Sharp (icon/OG generation) |

---

## Design System

Custom color palette derived from the original logo:

| Token | Value | Usage |
|---|---|---|
| `cream` | `#FFFFFF` | Primary background |
| `offwhite` | `#F8F6F2` | Section alternation |
| `beige` | `#F0EBE2` | Card backgrounds |
| `orange` | `#D4602E` | Primary accent, CTAs |
| `sea` | `#3A8AA8` | Secondary CTAs |
| `ink` | `#1F1F1F` | Body text |

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Main one-page site |
| `/mentions-legales` | Legal notices (RGPD compliant) |
| `/not-found` | Custom 404 page |
| `/sitemap.xml` | Auto-generated sitemap |
| `/robots.txt` | Search engine directives |
| `/manifest.webmanifest` | PWA manifest |

---

## Components

| File | Description |
|---|---|
| `Nav.tsx` | Fixed navbar · white background on scroll · mobile hamburger menu |
| `Hero.tsx` | Full-screen hero · parallax background · staggered text entrance |
| `Marquee.tsx` | Infinite scrolling ticker (orange bar, 8 service keywords) |
| `About.tsx` | Two-column layout · Chloé portrait · slide-in animation |
| `Services.tsx` | 3 service rows (alternating image sides) · price cards |
| `Process.tsx` | 5-step purchase process · staggered icons |
| `Clients.tsx` | Horizontal snap slider · 30 client photos · progress bar |
| `Contact.tsx` | Split layout · Calendly inline widget · contact cards |
| `Footer.tsx` | Links · address · legal |
| `WhatsAppWidget.tsx` | Floating WhatsApp button with popup card |
| `CircleHighlight.tsx` | Animated hand-drawn SVG circle (draws on scroll entry) |

---

## Animations (Framer Motion)

- **Hero**: parallax background (20% vertical shift on scroll) + staggered entrance for h1 → subtitle → CTAs
- **CircleHighlight**: SVG `pathLength` animation — orange ellipse draws itself when element enters viewport (`once: true`)
- **About**: image and text fade up on scroll (with 120ms delay offset)
- **Services**: each row (image + text) fades up on scroll; price cards stagger in
- **Process**: section title fades up, then 5 steps cascade in with scale
- **Clients**: header fades up before the slider
- **Contact**: eyebrow, title, paragraph stagger; Calendly column fades up

---

## SEO — Google

### Metadata (`app/layout.tsx`)
- Full `title` with template + `description` + `keywords`
- `openGraph` (type, locale, image 1200×630, siteName)
- `twitter` card (summary_large_image)
- `canonical` + `hreflang` (fr-FR, x-default)
- `robots` with Google-specific directives (`max-image-preview: large`, `max-snippet: -1`)
- `alternates`, `formatDetection`, geo tags (ES-CT / Barcelona)
- Preload LCP image + `dns-prefetch` for Calendly/WhatsApp

### JSON-LD Schemas (6 total)
| Schema | Purpose |
|---|---|
| `RealEstateAgent` | Core business entity with services, hours, ratings |
| `LocalBusiness` | Local SEO with address, geo coordinates, aggregateRating |
| `WebSite` | Site identity + SearchAction + speakable spec |
| `FAQPage` | 11 Q&A covering pricing, process, NIE, arras… |
| `BreadcrumbList` | Navigation hierarchy |
| `Person` | Chloé — name, role, nationality, languages, photo |

### Technical SEO
- `sitemap.xml` — auto-generated, 2 URLs with priority/frequency
- `robots.txt` — allow all + sitemap pointer
- `app/manifest.ts` — PWA manifest (standalone, all icon sizes)
- All icons generated: favicon 16/32, apple-touch 180, 192, 512, maskable-512
- `og-image.png` (1200×630) generated with Sharp
- All image `alt` attributes filled with descriptive French text

---

## SEO — AI (GEO — Generative Engine Optimization)

Targeting ChatGPT (SearchGPT), Claude, Perplexity, Google AI Overviews:

### `public/llms.txt`
Standard file read by AI crawlers — structured natural language summary covering:
- Agency identity, founding year, team
- Services with detailed descriptions
- Pricing with examples
- Full FAQ in Q&A format
- Unique positioning statement

### Schema enhancements
- `speakable` on WebSite schema (flags H1/H2 as citable content)
- `Person` schema for Chloé with `sameAs`, `knowsLanguage`, `nationality`
- Extended FAQ (11 questions) covering long-tail AI queries

---

## Performance

- All pages **fully static** (`○` in build output)
- Images self-hosted in `public/images/` — zero Squarespace CDN dependency
- LCP image preloaded with `fetchPriority="high"`
- Fonts loaded via `next/font` with `display: swap`
- `overflow-x: hidden` on `html` + `body` to prevent animation overflow

---

## Security Headers (`next.config.js`)

Applied to all routes:

```
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

---

## Assets

### Images (`public/images/`)
| File | Usage |
|---|---|
| `apartment-hero.jpeg` | Hero background + Service 1 |
| `chloe.jpeg` | About, Contact, WhatsApp widget |
| `service-forfait.jpg` | Service 2 |
| `service-demarches.jpg` | Service 3 |
| `process/*.png` | 5 process step icons |
| `clients/01–30.*` | 30 client photos (slider) |

All images downloaded from Squarespace CDN via `scripts/download-images.js`.

### Icons & OG
Generated via `scripts/generate-assets.js` and `scripts/generate-og.js` using Sharp:
`favicon.png`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `og-image.png`, `twitter-image.png`

---

## Third-party Integrations

| Service | Implementation |
|---|---|
| **Calendly** | Inline widget (`calendly-inline-widget`) loaded async in Contact section |
| **WhatsApp** | Floating widget (bottom-right) with popup card showing Chloé's photo |

---

## Build Output

```
Route (app)                    Size     First Load JS
○ /                            55.4 kB       148 kB
○ /mentions-legales             2.66 kB      95.1 kB
○ /manifest.webmanifest         0 B            0 B
○ /robots.txt                   0 B            0 B
○ /sitemap.xml                  0 B            0 B
```

All routes prerendered as static content. Zero build errors. Zero TypeScript errors.
