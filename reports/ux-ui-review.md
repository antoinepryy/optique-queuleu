# UX/UI Review Report - Optique Queuleu

**Date:** 2026-02-14
**Reviewer:** UX/UI Agent (code-based review)
**Site:** http://localhost:3000
**Method:** Source code analysis of all 10 pages, shared components, and global styles

---

## Executive Summary

The Optique Queuleu site is a well-crafted static Next.js site with strong visual polish, consistent design tokens, and solid accessibility foundations. The design language is cohesive with a premium feel appropriate for an optical boutique. There are several areas for improvement, primarily around mobile responsiveness edge cases, navigation gaps, CTA consistency, and minor accessibility refinements.

**Overall Grade: B+**

---

## 1. Design System & Visual Consistency

### 1.1 Color Usage

**Strengths:**
- Design tokens are properly defined in CSS custom properties (`globals.css:3-11`) and correctly mapped to Tailwind theme (`globals.css:14-24`)
- Primary (`#0097C7`) and accent (`#B5975E`) colors are used consistently across all pages
- Background alternation between `bg-white` and `bg-muted` (`#f5f5f5`) creates clear visual rhythm on every page

**Issues:**
- **[LOW]** The `--primary-light: #00aee0` hover state is very close to primary. Consider a slightly more distinct hover color for better interactive feedback
- **[MEDIUM]** The Instagram social button on the homepage (`page.tsx:617`) uses a custom gradient (`from-purple-600 via-pink-500 to-orange-400`) that departs from the design system. While brand-accurate, it creates visual inconsistency next to the primary-colored Facebook button

### 1.2 Typography

**Strengths:**
- Montserrat is loaded correctly with weights 300-700 (`layout.tsx:8-12`) and applied via CSS variable
- `SectionTitle` component enforces consistent heading style: `text-3xl sm:text-4xl font-bold uppercase tracking-[0.15em]`
- Body text consistently uses `text-muted-foreground` with `leading-relaxed`

**Issues:**
- **[LOW]** Some pages use inline heading styles instead of `SectionTitle` component (e.g., `verres/page.tsx:189` uses `text-3xl font-bold text-foreground` directly). While not visually broken, it risks drift from the design system
- **[LOW]** The homepage hero title uses `text-5xl sm:text-6xl lg:text-8xl` which is extremely large at the `lg` breakpoint. On 1440px+ screens this may feel overwhelming

### 1.3 Spacing & Layout

**Strengths:**
- Consistent section padding of `py-24` or `py-28` across all pages
- Max width container (`max-w-7xl`) with `px-6 lg:px-8` is used universally
- Grid gaps are consistent: `gap-8` for cards, `gap-16` for two-column layouts, `gap-12` for contact/CTA sections

**Issues:**
- **[MEDIUM]** The `marques/page.tsx` featured brands section (`pb-24`) uses different bottom padding than the typical `py-24/28` pattern, creating slightly different visual rhythm
- **[LOW]** Some sections use `py-16` (blog internal links, contact intro) while most use `py-24`. Consider standardizing

---

## 2. Navigation & Information Architecture

### 2.1 Header (Desktop)

**Strengths:**
- Fixed header with scroll-based transparency transition works well (`Header.tsx:67-69`)
- Services dropdown with hover open/close and 150ms delay prevents accidental closes (`Header.tsx:60-63`)
- Active page highlighting with `text-primary` / `font-semibold` provides clear wayfinding
- Doctolib CTA button (`rounded-full bg-primary`) is always visible in the header
- Proper `aria-expanded` and `aria-haspopup` on services dropdown

**Issues:**
- **[MEDIUM]** Blog page is not in the header navigation. Users must find it through footer links or internal page links. Consider adding "Blog" to the main nav or under a "Plus" dropdown
- **[LOW]** No "Blog" link in header nav array (`Header.tsx:8-14`), but Blog is a real content page with 8 articles. This is a discoverability issue

### 2.2 Header (Mobile)

**Strengths:**
- Hamburger menu with animated open/close icon transition
- Proper `aria-label="Menu"` and `aria-expanded` on mobile toggle
- Services accordion works correctly with separate `mobileServicesOpen` state
- Full-width Doctolib CTA button at bottom of mobile menu
- Menu closes on link click (`onClick={() => setMobileMenuOpen(false)}`)

**Issues:**
- **[MEDIUM]** Mobile menu uses `max-h-[32rem]` for animation. If more nav items are added, this hardcoded max-height could clip content. Consider using a more flexible approach
- **[LOW]** No body scroll lock when mobile menu is open. Users can scroll the page behind the menu, which can be disorienting
- **[LOW]** The mobile menu border-top (`border-t border-gray-100`) is always present even when menu is closed (opacity 0, but still in DOM flow when transitioning)

### 2.3 Footer

**Strengths:**
- Well-organized 4-column grid with logo/contact, address/services, hours, and map
- Phone number is clickable (`tel:+33387373036`)
- Social links with proper `aria-label`
- Opening hours are clearly formatted with day/time layout
- Google Maps iframe loads lazily

**Issues:**
- **[MEDIUM]** Footer links to `/mentions-legales`, `/cookies`, and `/plan-du-site` but these pages do not exist in the codebase. Users clicking these will get 404 errors
- **[LOW]** Blog is not linked in the footer navigation. Consider adding it under a "Contenu" or "Ressources" column
- **[LOW]** The footer map iframe has a hardcoded placeholder coordinate (`0x4794dc1b16aa5555%3A0x0`) which may not resolve to the exact store location

### 2.4 Breadcrumbs

**Strengths:**
- Every subpage has a breadcrumb trail (Accueil > Page Name)
- Breadcrumbs are inside `<nav>` elements with `aria-label="Fil d'Ariane"`
- Blog article pages have proper 3-level breadcrumbs (Accueil > Blog > Article Title)

**Issues:**
- **[LOW]** Breadcrumb separator uses `>` text character instead of a more semantic approach. Consider using `aria-hidden` on separators (already done on some pages like `magasin/page.tsx:129` but inconsistent across other pages like `verres/page.tsx:178`)

---

## 3. CTA Placement & Conversion Flow

### 3.1 Primary CTA (Doctolib)

**Strengths:**
- Doctolib CTA appears in header (always visible), hero section, dedicated Doctolib section on homepage, and at the bottom of most subpages
- Consistent styling: `rounded-full bg-primary text-white` with icon
- External link properly marked with `target="_blank" rel="noopener noreferrer"`

**Issues:**
- **[MEDIUM]** Doctolib URL inconsistency: most pages use `https://www.doctolib.fr/opticien/metz/optique-queuleu` but blog article pages use `https://www.doctolib.fr/opticien-lunetier/metz/optique-queuleu-metz` (`blog/[slug]/page.tsx:202`). These may resolve differently
- **[LOW]** The `/lentilles` page CTA is a phone number instead of Doctolib. While appropriate for lens adaptation, consider adding Doctolib as a secondary option

### 3.2 Secondary CTAs

**Strengths:**
- "Voir toutes nos marques" links with arrow icon animation on hover
- Phone number CTAs on service pages with both `tel:` links and Doctolib buttons side by side
- Consistent outline button style for secondary actions: `border border-primary text-primary hover:bg-primary hover:text-white`

**Issues:**
- **[HIGH]** Homepage "Prescription en 48h" card links to `/blog` instead of `/prescription-48h` (`page.tsx:528-529`). This is a significant misdirect - users clicking "Decouvrir" expect to learn about the prescription service, not land on the blog listing
- **[HIGH]** Homepage "Oomade - Vision Minute" card also links to `/blog` instead of `/oomade` or `/vision-minute` (`page.tsx:558-559`). Same issue - the "En savoir plus" link should go to the dedicated service page

### 3.3 PromoBanner (Sticky Bottom)

**Strengths:**
- Fixed bottom banner with dark gradient background provides high contrast
- Two service highlights with icons and descriptions
- Close button with `aria-label="Fermer"`
- Slide-up animation on page load (1.5s delay)
- Links to `/prescription-48h` and `/vision-minute`

**Issues:**
- **[MEDIUM]** The PromoBanner state is not persisted. Every page navigation re-shows the banner. Users who dismiss it will see it again on the next page. Consider using `localStorage` or a cookie to remember dismissal
- **[MEDIUM]** The banner may overlap with page content at the bottom, especially the footer. There is no `pb-[banner-height]` offset on the body/main content
- **[LOW]** The second PromoBanner item icon shows the OOMADE logo but the description says "Vision Minute", while it links to `/vision-minute`. The relationship between OOMADE and Vision Minute might confuse first-time visitors

---

## 4. Responsive Design

### 4.1 Desktop (1024px+)

**Strengths:**
- Two-column layouts with alternating image/text positions create visual variety
- Brand grid on homepage uses `grid-cols-3` with 3D card effects
- Service cards use `lg:grid-cols-4` for efficient space usage
- Blog articles use `lg:grid-cols-3` grid

**Issues:**
- **[LOW]** Homepage social images grid uses `lg:grid-cols-4` for 8 images, creating 2 even rows. This works well

### 4.2 Tablet (768px-1023px)

**Strengths:**
- Most grids gracefully collapse: `sm:grid-cols-2` is used widely
- Footer uses `md:grid-cols-2` then `lg:grid-cols-4`
- Brand fabricants use `md:grid-cols-6` for lentilles page

**Issues:**
- **[MEDIUM]** The brands explorer grid jumps from `grid-cols-2` to `sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5`. On a tablet in portrait mode (~768px), 4 columns of square cards may be cramped
- **[LOW]** Homepage hero CTA buttons use `sm:flex-row` at 640px which works, but the "Decouvrir nos collections" glass button may have insufficient contrast on certain background areas

### 4.3 Mobile (< 640px)

**Strengths:**
- Hero banners on subpages use `h-64 sm:h-80` for appropriate mobile height
- Forms use `sm:grid-cols-2` for name/phone fields, stacking to single column on mobile
- CTA buttons on service pages stack vertically: `flex-col sm:flex-row`
- Social media buttons stack on mobile

**Issues:**
- **[MEDIUM]** Homepage hero title `text-5xl` (3rem/48px) on mobile may be too large for 375px screens with the wide letter-spacing `tracking-[0.2em]`. The text could overflow or wrap awkwardly
- **[MEDIUM]** The brands "featured" cards use `aspect-[3/4]` which creates very tall cards on mobile (`sm:grid-cols-2 lg:grid-cols-3` falls back to 1 column). A single 3:4 ratio card will take up most of the viewport
- **[LOW]** PromoBanner items use `sm:flex-row` layout. On mobile they stack vertically, which may make the banner quite tall before being dismissed
- **[LOW]** Footer opening hours text may wrap awkwardly on very small screens since time ranges like "9h00 - 12h00 / 14h00 - 19h00" are long strings

---

## 5. Accessibility

### 5.1 Semantic HTML

**Strengths:**
- `<section>` elements with `aria-label` or `aria-labelledby` throughout
- `<article>` elements used correctly for blog posts, reviews, service cards
- `<nav>` elements for breadcrumbs and social media links
- `<main>` wrapping page content in layout (`layout.tsx:50`)
- `lang="fr"` set on `<html>` element
- Blog articles use `<time>` elements with `dateTime` attribute

**Issues:**
- **[MEDIUM]** The homepage hero section uses `<section>` without an `<h1>` as direct child - the `<h1>` is inside but semantic heading hierarchy is maintained
- **[LOW]** Contact form lacks a `<fieldset>` wrapper and `<legend>` for the RGPD checkbox group
- **[LOW]** Some `<article>` elements (service cards) might be better as `<div>` since they are not self-contained compositions

### 5.2 ARIA & Interactive Elements

**Strengths:**
- Mobile menu button has `aria-label="Menu"`, `aria-expanded`, and `aria-controls="mobile-menu"`
- Services dropdown has `aria-expanded` and `aria-haspopup="true"`
- Filter buttons in BrandsExplorer use `aria-pressed` state
- Search input has `aria-label`
- Brand count status uses `role="status"` and `aria-live="polite"`
- Star ratings have `aria-label` with numeric value
- Decorative SVGs use `aria-hidden="true"` on newer pages

**Issues:**
- **[MEDIUM]** Contact form inputs lack `required` attribute and `aria-required="true"`. The RGPD checkbox should likely be required before submission
- **[MEDIUM]** The form `onSubmit` handler only calls `e.preventDefault()` with no actual submission logic or user feedback. Users will click "Envoyer" and nothing visible happens
- **[LOW]** Some SVG icons in the homepage services array lack `aria-hidden="true"` (e.g., `page.tsx:68-69`)
- **[LOW]** The scroll indicator SVG on the homepage hero lacks `aria-hidden="true"` or descriptive label

### 5.3 Color Contrast

**Strengths:**
- Primary text on white background: `#333333` on `#ffffff` = 12.6:1 ratio (exceeds AAA)
- Primary color on white: `#0097C7` on `#ffffff` = 3.5:1 ratio (passes AA for large text)
- Accent color `#B5975E` on white = 3.1:1 ratio (passes AA for large text only)

**Issues:**
- **[MEDIUM]** Primary color `#0097C7` on white has only 3.5:1 contrast ratio. For body-size text links, WCAG AA requires 4.5:1. This affects all inline text links using `text-primary` (e.g., in paragraph text on verres, magasin pages)
- **[MEDIUM]** Accent color `#B5975E` at 3.1:1 fails WCAG AA for small text. It is used for section sub-labels (`text-accent`) which are typically `text-sm`. Consider darkening to at least `#8B7345` for small text usage
- **[LOW]** White text on hero image overlays depends on the image darkness. The gradient overlays (`from-black/60 via-black/40 to-black/70`) should be sufficient, but edge cases may occur with lighter images

### 5.4 Focus States

**Issues:**
- **[MEDIUM]** No visible custom focus styles are defined for links and buttons beyond browser defaults. The contact form inputs have `focus:border-primary focus:ring-1 focus:ring-primary` which is good, but navigation links, CTA buttons, and card elements lack visible focus indicators
- **[MEDIUM]** The services dropdown can be opened via click but keyboard users may struggle to navigate it without explicit `onKeyDown` handling for Escape key to close

### 5.5 Keyboard Navigation

**Issues:**
- **[LOW]** The brands filter buttons and search work with keyboard, but the filter section lacks a skip link or landmark for keyboard users to bypass the large filter bar
- **[LOW]** Blog article content uses `dangerouslySetInnerHTML` which means internal links in blog content cannot be Next.js `<Link>` components - they will trigger full page reloads

---

## 6. Animations & Interactions

### 6.1 Scroll Reveal

**Strengths:**
- `ScrollReveal` component uses `IntersectionObserver` with configurable threshold
- Animations trigger once (`observer.unobserve(el)`) - no repeated triggers on scroll
- Multiple animation variants: `reveal`, `reveal-left`, `reveal-right`, `reveal-scale`, `stagger-children`
- Easing curve `cubic-bezier(0.16, 1, 0.3, 1)` provides smooth deceleration

**Issues:**
- **[MEDIUM]** No `prefers-reduced-motion` media query to disable animations for users who prefer reduced motion. All reveal animations run regardless of user preference. Add `@media (prefers-reduced-motion: reduce)` rules to disable transitions
- **[LOW]** Stagger children animation supports up to 9 children (`globals.css:94-102`). If a section has more items, children beyond the 9th will have no stagger delay

### 6.2 Card Effects

**Strengths:**
- `card-3d` hover effect is subtle and polished: `translateY(-8px) rotateX(2deg)` with shadow increase
- Image hover (`img-lift`) provides visual feedback without being distracting
- Blog cards and brand cards have consistent hover behaviors

**Issues:**
- **[LOW]** The `card-3d` effect uses `transform-style: preserve-3d` which can cause rendering issues on some mobile browsers. The `perspective` inline style on the brands grid (`page.tsx:241`) adds to this

### 6.3 Loader

**Issues:**
- **[MEDIUM]** The `Loader` component (`Loader.tsx`) is defined but not used anywhere in `layout.tsx` or any page. It was likely removed from the layout but the component file remains. Dead code
- **[LOW]** The loader would add 2.5 seconds before content is visible. For a static site with fast loading, this would hurt perceived performance unnecessarily

---

## 7. Page-by-Page Issues

### 7.1 Homepage (/)
- **[HIGH]** Prescription and OOMADE cards link to `/blog` instead of their dedicated pages (see Section 3.2)
- **[LOW]** The scroll indicator arrow points down but the animation floats up/down, which works visually

### 7.2 Marques (/marques)
- **[LOW]** `SectionTitle` is used as a wrapper around another `<h2>` on line 87-88, creating a nested heading issue: `<h2><h2>Marques du moment</h2></h2>`
- **[LOW]** Featured brands without a `heroImage` get a plain dark gradient fallback. No brand name is visible on the card itself in this case until hover

### 7.3 Verres (/verres)
- **[LOW]** The Essilor section image and text columns appear in the same order as ZEISS (image on right), despite the intent to alternate. The `lg:order-first` class is on the image container but both columns are in the same visual order on desktop

### 7.4 Magasin (/magasin)
- Good page overall with strong content hierarchy and CTAs

### 7.5 Lentilles (/lentilles)
- **[LOW]** Fabricant cards only show text (brand names) without logos. Adding logos would improve visual richness
- **[LOW]** The structured data has a typo: `"streetAddress": "29 RueQueuleu"` - missing space and wrong number (should be "28 Rue de Queuleu")

### 7.6 Blog (/blog)
- **[LOW]** First 3 article images use `loading="eager"` while remaining use `loading="lazy"`. Good optimization

### 7.7 Blog Articles (/blog/[slug])
- **[MEDIUM]** Article content rendered via `dangerouslySetInnerHTML` means no XSS protection on content. While content is static and controlled, this pattern should be noted
- **[LOW]** Blog hero section overlaps with the fixed header (`pt-20` is missing, unlike other page heroes). The hero section has `flex h-72 items-end` but no `pt-20` offset

### 7.8 Contact (/contact)
- **[MEDIUM]** Phone numbers are inconsistent: footer shows `03 87 37 30 36` but contact page shows `03 87 30 18 65`. The structured data also uses different numbers across pages
- **[LOW]** Contact form has no server-side handler - the `onSubmit` only prevents default

### 7.9 OOMADE (/oomade)
- **[LOW]** Structured data address is incorrect: `"streetAddress": "5 Rue du General de Gaulle"` and postal code `"57050"`. The actual address is 28 Rue de Queuleu, 57070 Metz

### 7.10 Vision Minute (/vision-minute)
- **[LOW]** Structured data address is also incorrect: `"streetAddress": "65 Rue Mazelle"` and `"57000"`. Should be 28 Rue de Queuleu, 57070 Metz

### 7.11 Prescription 48h (/prescription-48h)
- Good page with clear value proposition and transparent limitations section

---

## 8. Prioritized Recommendations

### Critical (Fix Immediately)

| # | Issue | Page | Impact |
|---|-------|------|--------|
| 1 | Prescription card links to `/blog` instead of `/prescription-48h` | Homepage | Users misdirected, conversion lost |
| 2 | OOMADE card links to `/blog` instead of `/oomade` | Homepage | Users misdirected, conversion lost |

### High Priority

| # | Issue | Page | Impact |
|---|-------|------|--------|
| 3 | Add `prefers-reduced-motion` media query | Global CSS | Accessibility compliance |
| 4 | Inconsistent phone numbers (03 87 37 30 36 vs 03 87 30 18 65) | Contact/Footer | User confusion |
| 5 | Missing footer pages: mentions-legales, cookies, plan-du-site | Footer | 404 errors, legal compliance |
| 6 | Add visible focus styles for keyboard navigation | Global CSS | Accessibility |
| 7 | Primary color contrast ratio (3.5:1) insufficient for small text links | All pages | WCAG AA compliance |

### Medium Priority

| # | Issue | Page | Impact |
|---|-------|------|--------|
| 8 | PromoBanner state not persisted across navigation | Global | UX annoyance |
| 9 | Blog not in header navigation | Header | Content discoverability |
| 10 | Contact form has no submit functionality or feedback | Contact | Dead-end interaction |
| 11 | Incorrect addresses in structured data (OOMADE, Vision Minute) | Service pages | SEO/trust |
| 12 | Doctolib URL inconsistency between pages | Blog articles | Possible broken link |
| 13 | Mobile body scroll not locked when menu open | Header | Mobile UX |
| 14 | Homepage hero title may overflow on 375px with tracking | Homepage | Mobile layout |
| 15 | Accent color contrast (3.1:1) fails AA for small text | All pages | Accessibility |
| 16 | Add `required` attributes to contact form inputs | Contact | Form UX |
| 17 | Nested `<h2>` in marques page SectionTitle | Marques | HTML validity |
| 18 | PromoBanner may overlap footer content | Global | Layout overlap |

### Low Priority

| # | Issue | Page | Impact |
|---|-------|------|--------|
| 19 | Remove unused Loader component | Components | Code cleanup |
| 20 | Standardize section padding (py-16 vs py-24) | Various | Visual consistency |
| 21 | Add `aria-hidden` to breadcrumb separators consistently | All subpages | Accessibility polish |
| 22 | Add fabricant logos on lentilles page | Lentilles | Visual richness |
| 23 | Blog article hero missing `pt-20` for header offset | Blog articles | Layout |

---

## 9. Positive Highlights

1. **Design cohesion** - The site maintains a professional, premium feel throughout all 10 pages
2. **Animation system** - Scroll-reveal animations are thoughtful and enhance the browsing experience without being distracting
3. **SEO integration** - Every page has schema.org structured data, proper Open Graph metadata, and breadcrumbs
4. **Component reuse** - SectionTitle, ScrollReveal, and ContactForm components enforce consistency
5. **Image handling** - Proper use of Next.js Image with `fill`, `loading="lazy"`, descriptive `alt` text, and responsive `sizes` attributes
6. **Social proof** - Google Reviews section with structured data is well-designed and builds trust
7. **Services dropdown** - Desktop hover with delay and mobile accordion are well-implemented patterns
8. **Internal linking** - Good cross-page SEO linking between services, marques, verres, and magasin pages
9. **Color system** - CSS custom properties with Tailwind theme integration is clean and maintainable
10. **Content quality** - Real, detailed content on every page rather than placeholder text

---

*Report generated from source code analysis. Browser-based visual testing was not possible (Chrome extension not connected). Recommend visual verification of all findings, especially responsive layout issues and contrast ratios.*
