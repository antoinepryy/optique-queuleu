# SEO Audit Report - Optique Queuleu

**Date:** 2026-02-14
**Site:** optique-queuleu.vercel.app (Next.js 16)
**Pages audited:** 11 routes

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Global Configuration](#global-configuration)
3. [Per-Page Metadata Analysis](#per-page-metadata-analysis)
4. [Structured Data (JSON-LD)](#structured-data-json-ld)
5. [Heading Hierarchy](#heading-hierarchy)
6. [Image Alt Tags](#image-alt-tags)
7. [Internal Linking](#internal-linking)
8. [Robots.txt & Sitemap](#robotstxt--sitemap)
9. [Canonical URLs & hreflang](#canonical-urls--hreflang)
10. [Keyword Optimization](#keyword-optimization)
11. [Prioritized Recommendations](#prioritized-recommendations)

---

## Executive Summary

The site has a **solid SEO foundation** with per-page metadata, JSON-LD structured data on every page, good heading hierarchy, descriptive alt tags on all images, and strong internal linking. However, there are several **critical gaps**: no robots.txt, no sitemap.xml, no canonical URLs, inconsistent metadataBase URLs across pages, and inconsistent phone numbers and addresses in structured data. These issues should be addressed urgently.

**Score: 6.5/10** - Good foundation, critical infrastructure missing.

---

## Global Configuration

### layout.tsx (Root Layout)

| Item | Status | Details |
|------|--------|---------|
| `lang` attribute | OK | `<html lang="fr">` |
| `metadataBase` | WARNING | Set to `https://optique-queuleu.vercel.app` (Vercel preview URL, not production domain) |
| Default title | OK | "Optique Queuleu \| Votre Opticien a Metz" |
| Title template | OK | `%s \| Optique Queuleu` |
| Default description | OK | 123 chars, includes "opticien a Metz" |
| Keywords | OK | 7 keywords defined globally |
| Favicon | OK | ICO + PNG + Apple icon |
| Manifest | OK | `/manifest.webmanifest` present |
| Viewport | OK | Handled by Next.js automatically |
| OG tags (global) | MISSING | No global openGraph defaults in layout |
| Twitter card (global) | MISSING | No global twitter card defaults in layout |

---

## Per-Page Metadata Analysis

### / (Homepage)

| Item | Status | Details |
|------|--------|---------|
| Title | OK | 73 chars - "Optique Queuleu \| Opticien a Metz - Lunettes, Lentilles & Examen de Vue" |
| Description | OK | 168 chars - comprehensive, keyword-rich |
| Keywords | OK | 13 local keywords |
| OG title | OK | Matches page title |
| OG description | OK | Shortened version |
| OG image | OK | facade.jpg with dimensions + alt |
| OG type | OK | "website" |
| OG locale | OK | "fr_FR" |
| OG url | WARNING | Uses `https://optique-queuleu.vercel.app` (not production domain) |
| Twitter card | MISSING | No twitter card metadata |

### /marques

| Item | Status | Details |
|------|--------|---------|
| Title | OK | 67 chars - "Marques de Lunettes a Metz \| +60 Createurs & Designers \| Optique Queuleu" |
| Description | OK | 155 chars |
| Keywords | MISSING | No page-specific keywords |
| OG tags | OK | Complete with locale, type |
| OG url | OK | `https://www.optiquequeuleu.com/marques` |
| OG image | MISSING | No OG image defined |
| Twitter card | MISSING | Not defined |

### /verres

| Item | Status | Details |
|------|--------|---------|
| Title | OK | 61 chars |
| Description | OK | 157 chars |
| Keywords | OK | 10 keywords |
| OG tags | OK | Complete |
| OG image | WARNING | Relative URL `/images/verriers/bandeau-marque.webp` (should be absolute) |
| Twitter card | OK | Defined with summary_large_image |

### /magasin

| Item | Status | Details |
|------|--------|---------|
| Title | OK | 72 chars |
| Description | OK | 171 chars |
| Keywords | OK | 9 keywords |
| OG tags | OK | Complete |
| OG url | WARNING | Uses `https://optiquequeuleu.com/magasin` (missing www) |
| OG image | WARNING | Relative URL `/images/boutique/facade.jpg` |
| Twitter card | OK | Defined |

### /lentilles

| Item | Status | Details |
|------|--------|---------|
| Title | OK | 73 chars |
| Description | OK | 176 chars |
| Keywords | MISSING | No page-specific keywords |
| OG tags | OK | Complete |
| OG image | WARNING | Relative URL `/images/produits/lentilles.jpg` |
| Twitter card | MISSING | Not defined |

### /blog

| Item | Status | Details |
|------|--------|---------|
| Title | OK | 68 chars |
| Description | OK | 154 chars |
| Keywords | MISSING | No keywords |
| OG tags | OK | Complete |
| OG image | MISSING | No OG image |
| Twitter card | MISSING | Not defined |

### /blog/[slug]

| Item | Status | Details |
|------|--------|---------|
| Title | OK | Dynamic per article |
| Description | OK | Uses article excerpt |
| Keywords | MISSING | No per-article keywords |
| OG tags | OK | Complete with type "article", publishedTime, authors |
| OG image | OK | Absolute URL with dimensions |
| Twitter card | OK | Defined |

### /contact

| Item | Status | Details |
|------|--------|---------|
| Title | OK | 57 chars |
| Description | OK | 152 chars |
| Keywords | MISSING | No keywords |
| OG tags | OK | Complete |
| OG image | WARNING | Relative URL |
| Twitter card | MISSING | Not defined |

### /oomade

| Item | Status | Details |
|------|--------|---------|
| Title | OK | 70 chars |
| Description | OK | 145 chars |
| Keywords | MISSING | No keywords |
| OG tags | OK | Complete with absolute image URL |
| Twitter card | MISSING | Not defined |

### /vision-minute

| Item | Status | Details |
|------|--------|---------|
| Title | OK | 64 chars |
| Description | OK | 153 chars |
| Keywords | OK | 8 keywords |
| OG tags | OK | Complete |
| OG image | WARNING | Relative URL |
| Twitter card | OK | Defined |

### /prescription-48h

| Item | Status | Details |
|------|--------|---------|
| Title | OK | 72 chars |
| Description | OK | 181 chars |
| Keywords | OK | 8 keywords |
| OG tags | OK | Complete with absolute image URL |
| Twitter card | OK | Defined |

### Metadata Summary

| Metric | Count | Coverage |
|--------|-------|----------|
| Pages with title | 11/11 | 100% |
| Pages with description | 11/11 | 100% |
| Pages with keywords | 7/11 | 64% |
| Pages with OG tags | 11/11 | 100% |
| Pages with OG image | 8/11 | 73% |
| Pages with Twitter card | 6/11 | 55% |

---

## Structured Data (JSON-LD)

Every page has JSON-LD structured data, which is excellent. Here is a breakdown:

| Page | Schema Type | Status | Issues |
|------|-------------|--------|--------|
| `/` | Optician | OK | URL uses Vercel domain |
| `/marques` | ItemList (Brand) | OK | Good use of Brand items |
| `/verres` | ItemList (Product) | OK | Products with Offers and Brand |
| `/magasin` | Optician | OK | Includes amenityFeature |
| `/lentilles` | Service | WARNING | Address has typo: "29 RueQueuleu" (missing space, wrong number) |
| `/blog` | Blog + BlogPosting | OK | Dynamic blog posts |
| `/blog/[slug]` | BlogPosting | WARNING | Address: "7 Rue Queuleu" (wrong) |
| `/contact` | ContactPage + LocalBusiness | WARNING | Phone: +33387301865 (different from other pages: +33387373036) |
| `/oomade` | Service | WARNING | Address: "5 Rue du General de Gaulle, 57050" (completely wrong) |
| `/vision-minute` | Service | WARNING | Address: "65 Rue Mazelle, 57000" (completely wrong) |
| `/prescription-48h` | Service | OK | Correct address: 28 Rue de Queuleu |

### Critical Structured Data Issues

1. **Inconsistent addresses across pages:**
   - Homepage/Magasin: "28 Rue de Queuleu, 57070 Metz" (correct)
   - Lentilles: "29 RueQueuleu" (typo + wrong number)
   - Blog slug: "7 Rue Queuleu" (wrong number)
   - OOMADE: "5 Rue du General de Gaulle, 57050" (completely wrong)
   - Vision Minute: "65 Rue Mazelle, 57000" (completely wrong)
   - Blog index: "7 Rue Queuleu" (wrong number)

2. **Inconsistent phone numbers:**
   - Most pages: `+33387373036`
   - Contact page: `+33387301865`

3. **Inconsistent base URLs:**
   - Homepage: `https://optique-queuleu.vercel.app`
   - Other pages: `https://www.optiquequeuleu.com` or `https://optiquequeuleu.com`

---

## Heading Hierarchy

Every page has exactly one `<h1>` tag, which is excellent.

| Page | H1 Content | Issue |
|------|-----------|-------|
| `/` | "Optique Queuleu" | Could be more keyword-rich (e.g. "Optique Queuleu - Opticien a Metz") |
| `/marques` | "Nos collections" | Generic; could include "marques de lunettes Metz" |
| `/verres` | "Verres Optiques Haut de Gamme" | Good, keyword-rich |
| `/magasin` | "Magasin Optique Queuleu a Metz" | Excellent, local keyword |
| `/lentilles` | "Lentilles de contact a Metz" | Good, local keyword |
| `/blog` | "Blog Optique Queuleu Metz" | Good |
| `/blog/[slug]` | Dynamic article title | Good |
| `/contact` | "Prendre contact" | Generic; could include "opticien Metz" |
| `/oomade` | "OOMADE" | Too short; no keyword context |
| `/vision-minute` | "Vision Minute" | Too short; no keyword context |
| `/prescription-48h` | "Prescription en 48h" | Could include "lunettes Metz" |

H2-H3 heading nesting is properly structured across all pages. No heading level skips detected.

---

## Image Alt Tags

**Total alt attributes found: 45 across 15 files.**

- **No empty alt tags (`alt=""`) found** - all images have descriptive alt text.
- Alt texts are descriptive and include relevant keywords (brand names, location "Metz", product types).
- Hero images on all pages have priority loading with descriptive alt text.

**Rating: Excellent**

---

## Internal Linking

### Navigation Structure (Header)

Main nav: Accueil, Marques, Verres, Magasin, Lentilles, Contact
Services dropdown: Vision Minute, OOMADE, Prescription 48h

**Missing from nav:** /blog is not in the header navigation.

### Footer Links

- Services section: Vision Minute, OOMADE, Prescription 48h
- Legal links: Mentions legales, Gestion des cookies, Plan du site (all link to pages that **do not exist**)

### Cross-Page Internal Links

| Page | Links to | Assessment |
|------|----------|------------|
| `/` | /marques, /verres, /magasin, /blog, /contact | Good hub page |
| `/marques` | /verres, /lentilles, /magasin, /contact | Good cross-linking |
| `/verres` | /magasin, /marques, /lentilles, /contact | Good cross-linking |
| `/magasin` | /marques, /lentilles, /verres, /contact | Good cross-linking |
| `/lentilles` | /magasin, /verres, /contact | Good |
| `/blog` | /marques, /verres, /magasin | Good |
| `/blog/[slug]` | /blog, /contact, internal article content links | Good |
| `/contact` | /magasin, /vision-minute, /oomade | Good |
| `/oomade` | /vision-minute, /marques, /verres, /magasin, /contact | Excellent |
| `/vision-minute` | /oomade, /magasin, /verres, /contact | Excellent |
| `/prescription-48h` | /magasin, /marques, /lentilles, /verres, /contact | Excellent |

**Rating: Very Good** - Strong internal linking between all pages. Only gap: /blog missing from main nav.

---

## Robots.txt & Sitemap

| Item | Status | Impact |
|------|--------|--------|
| `robots.txt` | **MISSING** | Search engines have no crawl directives. No sitemap reference. |
| `sitemap.xml` | **MISSING** | Search engines cannot discover all pages efficiently. |

**Both are critical for SEO** and should be created immediately using Next.js App Router conventions (`src/app/robots.ts` and `src/app/sitemap.ts`).

---

## Canonical URLs & hreflang

| Item | Status | Impact |
|------|--------|--------|
| Canonical URLs | **MISSING** | No canonical tags on any page. Risk of duplicate content issues (especially with www vs non-www, Vercel preview URLs) |
| hreflang | N/A | Single language site (French), not required |

---

## Keyword Optimization

### Primary Target: "opticien Metz"

| Page | Title | Description | H1 | Body | Assessment |
|------|-------|-------------|----| -----|------------|
| `/` | Yes | Yes | No | Yes | Good - H1 could include it |
| `/magasin` | Yes | Yes | Yes | Yes | Excellent |
| `/contact` | Yes | Yes | No | Yes | Good |

### Secondary Keywords Coverage

| Keyword | Pages Present |
|---------|---------------|
| "lunettes Metz" | /, /marques |
| "lentilles de contact Metz" | /, /lentilles |
| "verres optiques Metz" | /verres |
| "examen de vue Metz" | /, /magasin |
| "opticien Queuleu" | /, /magasin |
| "OOMADE" | /oomade, /vision-minute |
| "impression 3D lunettes" | /oomade, /vision-minute |
| "prescription 48h" | /prescription-48h |

**Rating: Good** - Keywords are well-distributed across pages.

---

## Prioritized Recommendations

### CRITICAL (Must fix immediately)

1. **Create `src/app/robots.ts`**
   - Allow all crawlers
   - Reference sitemap.xml
   - Block `/api/` routes if any exist

2. **Create `src/app/sitemap.ts`**
   - Include all 11 page routes + dynamic blog slugs
   - Set appropriate `lastModified` dates
   - Set appropriate `changeFrequency` and `priority`

3. **Fix inconsistent addresses in structured data**
   - Lentilles page: "29 RueQueuleu" -> "28 Rue de Queuleu"
   - OOMADE page: "5 Rue du General de Gaulle, 57050" -> "28 Rue de Queuleu, 57070"
   - Vision Minute page: "65 Rue Mazelle, 57000" -> "28 Rue de Queuleu, 57070"
   - Blog index: "7 Rue Queuleu" -> "28 Rue de Queuleu"
   - Blog slug: "7 Rue Queuleu" -> "28 Rue de Queuleu"

4. **Fix inconsistent phone numbers**
   - Contact page JSON-LD uses `+33387301865` while all other pages use `+33387373036`
   - Verify which is correct and standardize across all pages

5. **Fix `metadataBase` in layout.tsx**
   - Change from `https://optique-queuleu.vercel.app` to `https://www.optiquequeuleu.com`
   - This affects all relative OG image URLs site-wide

### IMPORTANT (Fix soon)

6. **Add canonical URLs**
   - Use `alternates.canonical` in each page's metadata export
   - This prevents duplicate content across www/non-www and Vercel preview URLs

7. **Standardize OG URLs across pages**
   - Homepage uses Vercel URL, magasin uses no-www, others use www
   - All should use `https://www.optiquequeuleu.com/...`

8. **Add Twitter card metadata to all pages**
   - Missing on: `/` (homepage), `/marques`, `/lentilles`, `/blog`, `/contact`, `/oomade`
   - Add at minimum: `card: "summary_large_image"`, `title`, `description`, `images`

9. **Add OG images to pages missing them**
   - `/marques` - no OG image
   - `/blog` - no OG image

10. **Fix broken footer links**
    - `/mentions-legales` - page does not exist
    - `/cookies` - page does not exist
    - `/plan-du-site` - page does not exist
    - Either create these pages or remove the links

11. **Add `/blog` to header navigation**
    - Blog is not accessible from the main nav; only reachable through internal links on pages

### NICE-TO-HAVE (Optimize later)

12. **Add keywords to pages missing them**
    - `/marques`, `/lentilles`, `/blog`, `/contact`, `/oomade` have no page-specific keywords

13. **Optimize H1 tags for keywords**
    - Homepage H1 "Optique Queuleu" could be "Optique Queuleu - Opticien a Metz"
    - Contact H1 "Prendre contact" could be "Contactez votre opticien a Metz"
    - OOMADE H1 "OOMADE" could include "Impression 3D Lunettes Metz"
    - Vision Minute H1 could include context

14. **Add BreadcrumbList structured data**
    - Breadcrumbs exist visually on all subpages but lack `BreadcrumbList` JSON-LD schema
    - This enables rich breadcrumb snippets in Google results

15. **Add FAQ structured data**
    - The /prescription-48h and /vision-minute pages have Q&A-style content that could use `FAQPage` schema

16. **Add Review/AggregateRating structured data**
    - The Testimonials component on homepage has reviews that could be structured as AggregateRating for rich snippets

17. **Consider adding `next/script` with `strategy="afterInteractive"`**
    - All JSON-LD scripts use `dangerouslySetInnerHTML` directly, which works but Next.js `Script` component with `id` is the recommended approach

---

## Summary Table

| Category | Score | Notes |
|----------|-------|-------|
| Page titles | 9/10 | All unique, good length, keyword-rich |
| Meta descriptions | 9/10 | All unique, good length |
| OG tags | 7/10 | Present but inconsistent URLs, some missing images |
| Twitter cards | 5/10 | Only on 6 of 11 pages |
| Structured data | 6/10 | Present on all pages but critical address/phone errors |
| Heading hierarchy | 8/10 | All pages have single H1, good nesting, some H1s could be more keyword-rich |
| Image alt tags | 10/10 | All images have descriptive, keyword-rich alt text |
| Internal linking | 9/10 | Excellent cross-linking, blog missing from nav |
| robots.txt | 0/10 | Missing |
| sitemap.xml | 0/10 | Missing |
| Canonical URLs | 0/10 | Missing |
| Overall | 6.5/10 | Strong content SEO, critical technical gaps |
