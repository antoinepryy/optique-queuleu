# Code Quality Review - Optique Queuleu

**Date:** 2026-02-14
**Scope:** All source files under `src/` (21 .tsx files, 2 .ts data files, 1 CSS file)
**Stack:** Next.js 16.1.6 (App Router, Turbopack), Tailwind CSS v4, TypeScript

---

## Summary

| Category | Score | Details |
|----------|-------|---------|
| Semantic HTML | Good | Proper use of `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`, `<header>` |
| Next.js Best Practices | Good | Server components by default, next/image + next/link used correctly |
| Accessibility | Needs Improvement | Broken aria-labelledby refs, missing skip nav, form validation |
| Error Handling | Needs Improvement | Missing not-found.tsx, error.tsx, loading.tsx |
| Missing Infrastructure | Critical | No sitemap.ts, robots.ts, or legal pages |
| Performance | Good | Minimal client components, proper image optimization |
| External Links | Pass | All target="_blank" have rel="noopener noreferrer" |

---

## 1. Semantic HTML

### Positives
- `<main>` wraps children in `layout.tsx:50`
- `<header>` used in `Header.tsx:66`
- `<footer>` used in `Footer.tsx:6`
- `<nav>` used for navigation in `Header.tsx:71`, breadcrumbs on all sub-pages, social links `page.tsx:603`
- `<section>` with `aria-label` or `aria-labelledby` used throughout all pages
- `<article>` used for services cards (`page.tsx:374`), review cards (`Testimonials.tsx:151`), brand cards, blog articles
- `<ul>/<li>` used for lists: footer hours (`Footer.tsx:108`), avantages (`magasin/page.tsx:228`), fabricants (`lentilles/page.tsx:136`)
- `<time>` with `dateTime` used on blog articles (`blog/page.tsx:123`, `blog/[slug]/page.tsx:134`)
- `<ol>` used for breadcrumb in blog article page (`blog/[slug]/page.tsx:152`)

### Issues

**[HIGH] Broken `aria-labelledby` references on homepage**
`src/app/page.tsx:218,264,308,355,472,573` - Six sections use `aria-labelledby` pointing to IDs like `collections-heading`, `verres-heading`, `magasin-heading`, `services-heading`, `parking-heading`, `social-heading`, but none of these IDs exist. The `SectionTitle` component (`SectionTitle.tsx`) renders an `<h2>` that spreads `{...props}`, so IDs *can* be passed, but they are not passed on the homepage.

**[MEDIUM] Nested heading inside SectionTitle on marques page**
`src/app/marques/page.tsx:87` - `<SectionTitle color="accent"><h2>Marques du moment</h2></SectionTitle>` nests an `<h2>` inside the `<h2>` rendered by `SectionTitle`. This produces invalid HTML (`<h2><h2>...</h2></h2>`).

**[LOW] Heading hierarchy skip on magasin page**
`src/app/magasin/page.tsx:220` - Uses `<h3>` ("Des services optiques sur mesure !") above a `<SectionTitle>` which renders `<h2>`. The visual hierarchy and document outline could be confusing for screen readers.

---

## 2. Next.js Best Practices

### Positives
- **Server Components by default**: All page files are Server Components. Only 6 files use `"use client"`: `Header.tsx`, `ContactForm.tsx`, `ScrollReveal.tsx`, `Loader.tsx`, `PromoBanner.tsx`, `BrandsExplorer.tsx` -- all justified for interactivity
- **next/image**: Used in all 21 .tsx files for images. Zero raw `<img>` tags found
- **next/link**: Used for all internal navigation. Zero raw `<a href="/...">` for internal links
- **Metadata API**: All pages export proper `metadata` objects with title, description, OG, and many with twitter cards
- **generateStaticParams**: Used correctly in `blog/[slug]/page.tsx:8` for static generation of blog pages
- **generateMetadata**: Used correctly in `blog/[slug]/page.tsx:15` for dynamic blog metadata
- **Image priority**: Hero images on all pages use `priority` attribute for LCP optimization
- **Image sizes**: Provided on brand cards (`marques/page.tsx:103`, `BrandsExplorer.tsx:203`) for responsive loading
- **Font optimization**: Montserrat loaded via `next/font/google` in `layout.tsx:8` with CSS variable approach
- **Manifest**: Web app manifest linked in `layout.tsx:38`

### Issues

**[CRITICAL] Missing `not-found.tsx`**
No `src/app/not-found.tsx` exists. Users hitting invalid URLs will see the default Next.js 404 page instead of a branded experience. The blog `[slug]/page.tsx:68` correctly calls `notFound()` but no custom page catches it.

**[CRITICAL] Missing `error.tsx`**
No error boundary exists at any level. Runtime errors will show the default Next.js error page.

**[HIGH] Missing `loading.tsx`**
No loading states for any routes. Navigation between pages has no visual feedback.

**[CRITICAL] Missing `sitemap.ts`**
No `src/app/sitemap.ts` found. Search engines have no sitemap to crawl.

**[CRITICAL] Missing `robots.ts`**
No `src/app/robots.ts` found. No robots.txt directives for search engines.

**[HIGH] Unused Loader component**
`src/components/Loader.tsx` is never imported or used anywhere (not in `layout.tsx` or any other file). This is dead code.

**[MEDIUM] Inconsistent metadataBase URLs**
- `layout.tsx:15`: `https://optique-queuleu.vercel.app`
- `page.tsx:33`: `https://optique-queuleu.vercel.app` (OG url)
- `marques/page.tsx:17`: `https://www.optiquequeuleu.com/marques` (OG url)
- `contact/page.tsx:17`: `https://www.optiquequeuleu.com/contact` (OG url)
- `magasin/page.tsx:27`: `https://optiquequeuleu.com/magasin` (no www)

Three different base URLs are used across the site. Should be unified to one canonical domain.

---

## 3. Accessibility

### Positives
- `<html lang="fr">` set in `layout.tsx:47`
- `aria-label` on many sections across all pages
- `aria-expanded` and `aria-haspopup` on header dropdown (`Header.tsx:121-122`)
- `aria-controls="mobile-menu"` on mobile menu button (`Header.tsx:216`)
- `aria-hidden="true"` on decorative SVG icons throughout
- `aria-label` on social links (`Footer.tsx:38,49`, `page.tsx:609,619`)
- `aria-pressed` on filter buttons (`BrandsExplorer.tsx:169`)
- `aria-live="polite"` on filter results count (`BrandsExplorer.tsx:114`)
- Form labels with `htmlFor` on all form fields (`ContactForm.tsx:9,25,39,53,69,90`)
- Screen-reader-only headings where needed (`contact/page.tsx:121,153`, `magasin/page.tsx:257-275`)

### Issues

**[HIGH] No skip navigation link**
No "Skip to main content" link exists. Keyboard users must tab through all header navigation on every page load.

**[HIGH] Broken aria-labelledby on homepage (see Semantic HTML section)**
Six sections reference non-existent IDs. Screen readers announce sections with no accessible name.

**[MEDIUM] Contact form lacks required field indicators**
`src/components/ContactForm.tsx` - No fields are marked as `required`. No `aria-required` attributes. No visual required indicators. Users and assistive technology cannot determine which fields are mandatory.

**[MEDIUM] Contact form has no validation feedback**
`src/components/ContactForm.tsx:5` - `onSubmit` just calls `e.preventDefault()`. No validation logic, no error messages, no `aria-invalid`, no `aria-describedby` for errors.

**[MEDIUM] RGPD checkbox not required**
`src/components/ContactForm.tsx:84-88` - The RGPD consent checkbox has no `required` attribute, meaning the form could theoretically be submitted without consent.

**[LOW] Breadcrumb not using structured markup**
Breadcrumbs on sub-pages use `<nav>` with `<Link>` elements and `>` separators, but don't use `<ol>/<li>` structure (except on `blog/[slug]/page.tsx:152` which does it correctly). Using `<ol>` would better convey the ordered hierarchy to assistive technology.

**[LOW] Star ratings in Testimonials**
`src/components/Testimonials.tsx:156` - The `aria-label` on star ratings is on the container `<div>`, but individual `<StarIcon>` components only have `aria-hidden="true"`. This works but could benefit from a role="img" on the container.

---

## 4. Performance Patterns

### Positives
- Minimal client-side JavaScript: only 6 `"use client"` components out of 21 files
- `IntersectionObserver` in `ScrollReveal.tsx` unobserves after first intersection (no memory leaks)
- `useMemo` for filtered brands in `BrandsExplorer.tsx:20,38`
- Passive scroll listener in `Header.tsx:37`: `{ passive: true }`
- `loading="lazy"` on below-fold images
- `priority` on hero/above-fold images
- Blog article images use conditional loading: `loading={index < 3 ? "eager" : "lazy"}` (`blog/page.tsx:117`)

### Issues

**[MEDIUM] Large homepage component**
`src/app/page.tsx` is 631 lines with inline SVG icons defined in data arrays (lines 64-85). The SVGs for the services section could be extracted into a shared icon component or moved to the data layer.

**[LOW] Scroll event listener in Header**
`src/components/Header.tsx:35-38` - Uses a scroll listener instead of CSS `position: sticky` with an IntersectionObserver. While it uses `{ passive: true }`, an IO approach would be more performant.

**[LOW] Duplicate Google Maps iframes**
Google Maps iframe appears in: `page.tsx:461`, `Footer.tsx:131`, `contact/page.tsx:160`. Each loads the Maps embed separately. This is 3 separate iframe loads. Consider using a single Maps component or loading lazily.

---

## 5. Client Component Audit

| File | Reason | Justified? |
|------|--------|-----------|
| `Header.tsx` | `usePathname`, `useState`, `useEffect`, scroll/click listeners | Yes |
| `ContactForm.tsx` | Form with `onSubmit` | Yes |
| `ScrollReveal.tsx` | `IntersectionObserver` via `useEffect` | Yes |
| `Loader.tsx` | `useState`, `useEffect`, timer-based animation | **No - unused** |
| `PromoBanner.tsx` | `useState` for dismiss | Yes |
| `BrandsExplorer.tsx` | `useState`, `useMemo` for search/filter | Yes |

**Verdict:** 5 of 6 client components are justified. `Loader.tsx` is dead code.

---

## 6. Error Handling & Edge Cases

### Issues

**[CRITICAL] No custom 404 page (`not-found.tsx`)**
Default Next.js page shown for invalid routes.

**[CRITICAL] No error boundary (`error.tsx`)**
No error recovery UI at any route level.

**[MEDIUM] Blog article `dangerouslySetInnerHTML`**
`src/app/blog/[slug]/page.tsx:184` - Article content is rendered via `dangerouslySetInnerHTML={{ __html: article.content }}`. Since content comes from the local `articles-data.ts` file (not external input), XSS risk is minimal, but this should be documented.

**[HIGH] Footer links to non-existent pages**
`src/components/Footer.tsx:149-159` - Links to:
- `/mentions-legales` - **Page does not exist**
- `/cookies` - **Page does not exist**
- `/plan-du-site` - **Page does not exist**

These produce 404 errors. For a French website, `/mentions-legales` is legally required.

---

## 7. External Link Security

**All 14 `target="_blank"` links include `rel="noopener noreferrer"`** across:
- `Header.tsx` (2): Doctolib desktop + mobile
- `Footer.tsx` (2): Facebook, Instagram
- `page.tsx` (4): Doctolib hero, Doctolib section, Facebook, Instagram
- `Testimonials.tsx` (1): Google Maps reviews
- `blog/[slug]/page.tsx` (1): Doctolib CTA
- `magasin/page.tsx` (1): Doctolib CTA
- `vision-minute/page.tsx` (1): Doctolib CTA
- `oomade/page.tsx` (1): Doctolib CTA
- `prescription-48h/page.tsx` (1): Doctolib CTA

**Status: PASS** - No security issues.

---

## 8. Image Optimization

**All images use `next/image`** (zero raw `<img>` tags).

| Pattern | Usage | Files |
|---------|-------|-------|
| `fill` + `priority` | Hero banners | All page files |
| `fill` + `loading="lazy"` | Below-fold full-bleed images | Multiple |
| `width`/`height` + `loading="lazy"` | Logo/brand images | `page.tsx`, `BrandsExplorer.tsx`, `Footer.tsx` |
| `sizes` attribute | Responsive brand cards | `marques/page.tsx:103`, `BrandsExplorer.tsx:203` |
| Conditional `loading` | Blog article grid | `blog/page.tsx:117` |

**Status: PASS** - Well-optimized image handling.

---

## 9. RGPD / Cookie Consent

### Issues

**[CRITICAL] No cookie consent banner/mechanism**
No cookie consent implementation found. The site embeds:
- Google Maps iframes (3 instances) which set Google cookies
- Links to external services (Doctolib, Facebook, Instagram)

RGPD requires explicit consent before setting non-essential cookies. A cookie consent solution is needed.

**[CRITICAL] Missing mentions legales page**
Footer links to `/mentions-legales` but the page does not exist. This is legally required for French websites.

**[HIGH] Missing cookies management page**
Footer links to `/cookies` but the page does not exist.

---

## 10. Structured Data (JSON-LD)

All pages include Schema.org structured data via `dangerouslySetInnerHTML`:

| Page | Schema Type | File |
|------|-------------|------|
| Homepage | Optician | `page.tsx:102-165` |
| Testimonials | LocalBusiness + AggregateRating | `Testimonials.tsx:86-104` |
| Marques | ItemList + Brand | `marques/page.tsx:26-42` |
| Verres | ItemList + Product | `verres/page.tsx:51-150` |
| Magasin | Optician | `magasin/page.tsx:66-108` |
| Lentilles | Service | `lentilles/page.tsx:43-74` |
| Contact | ContactPage + LocalBusiness | `contact/page.tsx:32-84` |
| Vision Minute | Service | `vision-minute/page.tsx:165-203` |
| OOMADE | Service | `oomade/page.tsx:121-151` |
| Prescription 48h | Service | `prescription-48h/page.tsx:260-291` |
| Blog listing | Blog + BlogPosting[] | `blog/page.tsx:24-55` |
| Blog article | BlogPosting | `blog/[slug]/page.tsx:77-111` |

### Issues

**[MEDIUM] Inconsistent street addresses in structured data**
- `page.tsx:113`: "28 Rue de Queuleu" (correct)
- `lentilles/page.tsx:56`: "29 RueQueuleu" (wrong - typo, missing space and wrong number)
- `vision-minute/page.tsx:178`: "65 Rue Mazelle" (wrong address)
- `oomade/page.tsx:132`: "5 Rue du General de Gaulle" (wrong address)
- `blog/page.tsx:38`: "7 Rue Queuleu" (wrong address)
- `blog/[slug]/page.tsx:102`: "7 Rue Queuleu" (wrong address)

The correct address is **28 Rue de Queuleu, 57070 Metz**.

---

## Prioritized Recommendations

### Critical (Fix immediately)
1. **Create `src/app/not-found.tsx`** - Custom branded 404 page
2. **Create `src/app/error.tsx`** - Error boundary with recovery UI
3. **Create `src/app/sitemap.ts`** - Dynamic sitemap generation for all routes
4. **Create `src/app/robots.ts`** - Robots.txt configuration
5. **Create `/mentions-legales` page** - Legally required for French websites
6. **Implement cookie consent** - RGPD compliance for Google Maps cookies
7. **Fix incorrect addresses in structured data** - 5 pages have wrong addresses

### High Priority
8. **Fix broken `aria-labelledby` on homepage** - Add `id` props to `SectionTitle` components on `page.tsx`
9. **Add skip navigation link** - Add to `layout.tsx` before `<Header />`
10. **Create `/cookies` and `/plan-du-site` pages** - Fix dead footer links
11. **Delete `src/components/Loader.tsx`** - Unused dead code
12. **Add `loading.tsx`** - At least at root level for navigation feedback
13. **Unify canonical domain** - Pick one base URL across all metadata

### Medium Priority
14. **Fix nested h2 in marques page** - `marques/page.tsx:87`
15. **Add form validation to ContactForm** - Required fields, error states, aria attributes
16. **Make RGPD checkbox required** - `ContactForm.tsx:84`
17. **Standardize breadcrumb markup** - Use `<ol>/<li>` consistently

### Low Priority
18. **Extract inline SVGs** from `page.tsx` data arrays into components
19. **Consider Maps component** to reduce duplicate iframe loading
20. **Use IntersectionObserver** for header scroll state instead of scroll listener
