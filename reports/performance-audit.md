# Performance Audit Report - Optique Queuleu

**Date:** 2026-02-14
**Tool:** Lighthouse 12.x (headless Chrome) + manual code analysis
**Environment:** Next.js 16.1.6 dev server (Turbopack), localhost:3000

> **Note:** Lighthouse was run against the dev server. Production builds will score higher due to minification and tree-shaking. Key findings around image weight, client/server component ratio, and architectural patterns remain valid regardless.

---

## 1. Lighthouse Scores Summary

| Page | Performance | Accessibility | Best Practices | SEO |
|------|:-----------:|:------------:|:--------------:|:---:|
| `/` (Home) | **75** | 92 | 100 | 100 |
| `/marques` | **73** | 96 | 96 | 100 |
| `/verres` | **90** | 92 | 100 | 100 |
| `/contact` | **78** | 96 | 100 | 100 |
| `/blog` | **87** | 96 | 100 | 100 |

**Key Takeaway:** SEO and Best Practices are excellent across the board. Accessibility is good (92-96). Performance is the main area for improvement, especially on image-heavy pages (homepage, marques, contact).

---

## 2. Core Web Vitals

| Metric | Home | Marques | Verres | Contact | Blog |
|--------|:----:|:-------:|:------:|:-------:|:----:|
| **FCP** (First Contentful Paint) | 1.1s | 1.2s | 0.9s | 0.9s | 0.9s |
| **LCP** (Largest Contentful Paint) | **7.5s** | **6.5s** | 3.7s | **6.4s** | 4.1s |
| **TBT** (Total Blocking Time) | 50ms | 210ms | 50ms | 50ms | 50ms |
| **CLS** (Cumulative Layout Shift) | 0 | 0 | 0 | 0 | 0 |
| **SI** (Speed Index) | 3.3s | 3.0s | 1.1s | 1.2s | 1.7s |

### Assessment

- **CLS: Excellent (0 across all pages).** No layout shifts -- great job with explicit image dimensions and proper use of `next/image`.
- **FCP: Good (0.9-1.2s).** All pages load initial content quickly.
- **TBT: Good.** Minimal main-thread blocking (only 210ms on /marques due to filtering logic).
- **LCP: Critical issue.** Homepage (7.5s), marques (6.5s), and contact (6.4s) have very poor LCP. This is the single biggest performance bottleneck.

---

## 3. LCP Analysis (Primary Issue)

The LCP element on the homepage is the hero background image (`/images/boutique/interieur-1.jpg`, 466KB JPG). The root causes:

1. **Large hero images not preloaded**: The hero image uses `priority` on `next/image`, but at 466KB as a JPEG, it takes significant time to download.
2. **Image format**: All hero/boutique images are JPEG/PNG. No WebP or AVIF versions exist in source, though `next/image` converts on-the-fly. The source images are still unnecessarily large.
3. **Google Maps iframe on contact page**: The iframe loads significant third-party resources, delaying LCP.
4. **Google Maps iframe in Footer**: Every page loads a Google Maps iframe in the Footer component, adding third-party weight site-wide.

### Recommendations (LCP)

| Priority | Action | Expected Impact |
|----------|--------|-----------------|
| P0 | Convert hero images to WebP at source, resize to max 1920px wide, target <100KB | LCP improvement 2-3s |
| P0 | Add `fetchPriority="high"` to hero `<Image>` and ensure the LCP image has proper `sizes` attribute | LCP improvement 0.5-1s |
| P1 | Lazy-load Google Maps iframe in Footer (use Intersection Observer or click-to-load) | Reduce third-party blocking |
| P1 | Consider a blurred placeholder (`placeholder="blur"` with `blurDataURL`) for hero images | Better perceived performance |
| P2 | Use `<link rel="preconnect">` for Google Maps domain | Reduce connection time |

---

## 4. Image Optimization

### 4.1 Image Component Usage

**All images use `next/image`** -- no raw `<img>` tags found anywhere. This is excellent.

### 4.2 Image Weight

| Directory | Size | File Count | Notes |
|-----------|------|:----------:|-------|
| `/public/images/produits/` | 5.8 MB | ~69 files | Brand hero images for /marques grid |
| `/public/images/boutique/` | 4.1 MB | 12 files | Store photos, hero banners |
| `/public/images/marques/` | 3.7 MB | ~80 files | Brand logos + photos |
| `/public/images/verriers/` | 592 KB | -- | Lens brand logos |
| `/public/images/divers/` | 344 KB | -- | Misc (Doctolib) |
| `/public/images/logo/` | 144 KB | -- | Site logo |
| **Total** | **~15 MB** | -- | -- |

### 4.3 Oversized Images (>200KB)

| File | Size | Used On |
|------|------|---------|
| `veronika.png` | **982 KB** | boutique |
| `interieur-1.jpg` | 466 KB | Homepage hero (LCP element) |
| `prescription.jpg` | 466 KB | Homepage |
| `interieur-2.jpg` | 465 KB | Homepage |
| `interieur-3.jpg` | 419 KB | Magasin page |
| `facade.jpg` | 399 KB | Homepage, OG image |
| `isimg-967516.jpg` | 377 KB | Produits (marques grid) |
| `galerie.jpg` | 341 KB | Produits |
| `product-large.jpg` | 335 KB | Produits |
| `contact.jpg` | 296 KB | Contact hero |
| `magasin.jpg` | 283 KB | Magasin page |

### Recommendations (Images)

| Priority | Action | Expected Impact |
|----------|--------|-----------------|
| P0 | Batch-convert all JPG/PNG source images to WebP using `sharp` or `squoosh-cli` | 60-80% file size reduction |
| P0 | Resize `veronika.png` (982KB PNG!) -- convert to WebP, max 800px wide | ~90% reduction |
| P0 | Resize all boutique hero images to max 1920x1080 before WebP conversion | Significant savings |
| P1 | Add `sizes` prop to all `fill` images (currently missing on many) | Avoids downloading oversized images |
| P1 | Add `placeholder="blur"` with `blurDataURL` for above-the-fold images | Better perceived load |
| P2 | Consider using AVIF for browsers that support it (next/image handles this) | Additional 20-30% savings |

---

## 5. JavaScript Bundle Analysis

### 5.1 Chunk Sizes (Dev Build)

| Chunk | Size |
|-------|------|
| `aee6c7720838f8a2.js` | 219.2 KB |
| `d702a24e2b6c48fa.js` | 127.8 KB |
| `a6dad97d9634a72d.js` | 110.0 KB |
| `082abf2d65f5428ae.js` | 32.5 KB |
| `49b3d715adff46bb.js` | 32.1 KB |
| CSS chunk | 66.0 KB |
| **Total JS** | **~667 KB** |

> These are dev-mode sizes. Production build with minification and tree-shaking will be significantly smaller. However, the relative proportions indicate where the weight is.

### 5.2 Lighthouse JS Opportunities (Dev)

- **Minify JavaScript**: ~170 KB potential savings (will be resolved by production build)
- **Reduce unused JavaScript**: ~281 KB wasted (mostly Next.js devtools and React DOM -- production build eliminates this)

### 5.3 Assessment

The JS bundle is reasonable for a Next.js site. No heavy third-party libraries (no chart libs, animation libraries, etc.). The main JS weight comes from React runtime + Next.js framework code. Production build should bring this down substantially.

---

## 6. Client vs. Server Components

### 6.1 Component Ratio

| Type | Count | Percentage |
|------|:-----:|:----------:|
| **Server Components** | 15 | 71% |
| **Client Components** | 6 | 29% |
| **Total** | 21 | 100% |

### 6.2 Client Components List

| Component | Reason for `"use client"` | Justified? |
|-----------|---------------------------|:----------:|
| `Header.tsx` | `usePathname`, `useState`, `useEffect` (scroll, mobile menu, dropdown) | Yes |
| `ScrollReveal.tsx` | `useEffect`, `useRef` (IntersectionObserver) | Yes |
| `ContactForm.tsx` | Form `onSubmit` handler | Yes |
| `PromoBanner.tsx` | `useState` (dismiss functionality) | Yes |
| `Loader.tsx` | `useState`, `useEffect` (timer-based animation) | Questionable |
| `BrandsExplorer.tsx` | `useState`, `useMemo` (search/filter) | Yes |

### 6.3 Assessment

Good ratio -- most pages are server components. One concern:

- **`Loader.tsx`**: This splash screen component blocks content for 1.8-2.5 seconds with a purely decorative animation. This directly harms LCP and perceived performance. It forces users to wait before seeing any real content.

### Recommendations (Components)

| Priority | Action | Expected Impact |
|----------|--------|-----------------|
| P0 | **Remove or significantly shorten the Loader component** -- it blocks real content for ~2s, directly harming LCP | LCP improvement 1-2s |
| P2 | Consider making `ContactForm` a server component with progressive enhancement (form action) | Minor JS reduction |

---

## 7. Font Loading Strategy

### Current Implementation

```tsx
// layout.tsx
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
```

### Assessment

- Uses `next/font/google` -- correct approach for self-hosting Google Fonts
- Font subsetting with `["latin"]` -- good
- **5 weights loaded** (300, 400, 500, 600, 700) -- this is quite heavy

### Recommendations (Fonts)

| Priority | Action | Expected Impact |
|----------|--------|-----------------|
| P1 | Reduce font weights to 3 (400, 600, 700) -- weight 300 is used sparingly, weight 500 can be replaced by 400 or 600 | ~40% font file reduction |
| P2 | Add `display: "swap"` explicitly to ensure FOUT instead of FOIT | Faster text visibility |

---

## 8. CSS Analysis

### Current Setup

- Tailwind CSS v4 with `@import "tailwindcss"`
- Custom CSS in `globals.css`: ~300 lines of animations and effects
- Total CSS chunk: 66 KB (dev, unminified)

### Assessment

- CSS is well-organized with Tailwind utility classes
- Custom animations (hero, loader, scroll-reveal, 3D cards) are moderate
- No redundant CSS frameworks loaded
- Tailwind v4 handles purging automatically

### Potential Issues

- The `.stagger-children` CSS has 9 hardcoded nth-child selectors (lines 94-101). If more children are added, they won't animate.
- Multiple `blur-3xl` decorative elements on every section may cause repainting during scroll on lower-end devices.

---

## 9. Third-Party Resources

### Google Maps Iframes

**Found on 3 locations:**
1. Homepage contact section
2. Contact page
3. **Footer (every page)**

The Footer iframe means every page load triggers a Google Maps embed, adding ~500KB-1MB of third-party resources.

### Recommendations (Third-Party)

| Priority | Action | Expected Impact |
|----------|--------|-----------------|
| P0 | Replace Footer Google Maps iframe with a static map image + link to Google Maps | Eliminate ~500KB-1MB per page |
| P1 | Lazy-load remaining Google Maps iframes (click-to-load or intersection observer) | Defer non-critical resources |
| P2 | Add `<link rel="preconnect" href="https://www.google.com">` for Maps | Faster iframe load when needed |

---

## 10. Render-Blocking Resources

Lighthouse flagged one render-blocking CSS file (the Tailwind CSS chunk, 155ms). This is expected and difficult to eliminate entirely since it's the main stylesheet.

No render-blocking JavaScript was flagged.

---

## 11. Missing Infrastructure

| Item | Status | Impact |
|------|--------|--------|
| `robots.txt` | Missing | Crawlers may not index optimally |
| `sitemap.xml` | Missing | Search engines lack page inventory |
| Next.js `images` config in `next.config.ts` | Empty config | No image optimization settings |
| Production build analysis | Not available | Dev build inflates JS metrics |

---

## 12. Prioritized Action Plan

### Critical (P0) -- Expected to fix LCP issues

1. **Remove or minimize the Loader component** -- Currently blocks content for ~2s. Either remove entirely or reduce to <500ms.
2. **Optimize hero images at source** -- Convert `interieur-1.jpg` (466KB), `facade.jpg` (399KB), `veronika.png` (982KB) and other large images to WebP, resize to max 1920px.
3. **Replace Footer Google Maps iframe with static image** -- Eliminates ~500KB-1MB third-party load on every page.
4. **Batch-convert all source images to WebP** -- Run a script to convert all JPG/PNG in `/public/images/` to WebP format.

### High (P1) -- Will improve overall performance

5. **Add `sizes` attribute to all `fill` images** -- Tell the browser to download appropriate sizes.
6. **Add `placeholder="blur"` to hero images** -- Improve perceived performance.
7. **Lazy-load Google Maps iframes** (on homepage and contact page) -- Use click-to-load pattern.
8. **Reduce Montserrat font weights** from 5 to 3 (drop 300 and 500).
9. **Add `robots.txt` and `sitemap.xml`**.

### Medium (P2) -- Nice-to-have optimizations

10. **Add `fetchPriority="high"` to LCP hero images**.
11. **Configure `next.config.ts`** with image optimization settings (formats, device sizes).
12. **Consider converting `ContactForm` to server action** for progressive enhancement.
13. **Add preconnect hints** for third-party domains (Google Maps, Doctolib).

---

## 13. Production Build Expectations

Running `next build` and serving with `next start` should:
- Eliminate "Minify JavaScript" and "Reduce unused JavaScript" warnings (dev-only issue)
- Reduce total JS from ~667KB to ~200-300KB (gzipped ~60-100KB)
- Improve Performance scores by 10-15 points across the board
- All image-related and architectural issues (Loader, Maps iframe, image sizes) will persist and need manual fixes

---

## Appendix: Dev Server vs Production Comparison

| Aspect | Dev (Current) | Production (Expected) |
|--------|:------------:|:--------------------:|
| JS bundle size | ~667 KB | ~200-300 KB |
| JS minification | No | Yes |
| Tree-shaking | Partial | Full |
| Source maps | Included | Separate |
| Image optimization | On-the-fly | Cached |
| Performance score | 73-90 | 85-95+ (with fixes) |
