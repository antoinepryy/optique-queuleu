# Fiches marques enrichies — Phase 1 (pilote 5 marques) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construire toute la mécanique des fiches marques détaillées (données, composants, formulaire contextualisé, validation) et la remplir pour 5 marques pilotes.

**Architecture :** Les données riches vivent dans un module TypeScript séparé (`brands-details.ts`) importé uniquement par la page serveur `/marques/[slug]`, pour ne pas alourdir le bundle client de `/marques`. La page se compose de blocs autonomes qui ne rendent rien quand leur donnée est absente. Un script Node valide l'intégrité des données et l'existence des fichiers image.

**Tech Stack :** Next.js 16.1.6 (App Router, Turbopack), React 19, TypeScript 5, Tailwind CSS v4, EmailJS (`emailjs-com`), Playwright 1.58 (déjà en devDependency), `node --test` (Node 20 intégré), `tsx` (à ajouter).

## Global Constraints

- Français pour tout texte visible par l'utilisateur. Accents corrects, apostrophes typographiques (`’`) dans les textes rédigés.
- **Un champ non sourcé est absent, jamais rempli par un placeholder.** Aucun « N/A », aucun « Non communiqué » ne doit apparaître dans le rendu.
- Chaque `BrandDetail` doit avoir au moins une URL dans `sources` et un `story` non vide.
- `verified: false` par défaut sur toute fiche non relue par le gérant.
- Ne jamais créer de nouveau template EmailJS. Les variables d'environnement `NEXT_PUBLIC_EMAILJS_*` existantes restent les seules utilisées.
- `src/app/marques/brands-data.ts` conserve sa structure : aucun champ ne lui est ajouté. Il est importé par le composant client `BrandsExplorer.tsx`.
- Tokens de design existants : `primary` `#0097C7`, `accent` `#B5975E`, `foreground` `#333333`, plus `muted` / `muted-foreground` définis dans `globals.css`. Utiliser les classes Tailwind existantes du projet, pas de couleur en dur.
- Marques pilotes : `persol`, `gucci`, `ancet-fayolle`, `bolle`, `komono` (cette dernière a `image: null`, elle vérifie le rendu sans visuel).
- Commit après chaque tâche. Messages en conventional commits, en français.

---

### Task 1 : Modèle de données, module vide, et validateur

**Files:**
- Create: `src/app/marques/brands-details.ts`
- Create: `scripts/lib/validate-brands.mjs`
- Test: `scripts/lib/validate-brands.test.mjs`
- Create: `scripts/check-brands.ts`
- Modify: `package.json` (scripts + devDependency `tsx`)

**Interfaces:**
- Consumes: `Brand` depuis `src/app/marques/brands-data.ts` (champs utilisés : `slug`, `image`, `heroImage`, `description`).
- Produces:
  - `interface BrandSpecs`, `interface BrandGalleryImage`, `interface BrandDetail`
  - `const brandDetails: Record<string, BrandDetail>`
  - `function getBrandDetail(slug: string): BrandDetail | undefined`
  - `function validateBrandDetails({ brands, details, imageExists }): string[]` (module `.mjs`, sans types)

- [ ] **Step 1 : Écrire le test qui échoue**

Créer `scripts/lib/validate-brands.test.mjs` :

```js
import test from "node:test";
import assert from "node:assert/strict";
import { validateBrandDetails } from "./validate-brands.mjs";

const brands = [
  { slug: "persol", image: "/images/marques/persol.webp", heroImage: null },
  { slug: "komono", image: null, heroImage: null },
];

const ok = (src) => src === "/images/marques/persol.webp" || src === "/images/marques/persol/01.webp";

test("aucune erreur sur des données valides", () => {
  const details = {
    persol: {
      slug: "persol",
      story: ["Un paragraphe."],
      specs: { founded: "1917" },
      sources: ["https://www.persol.com/"],
      verified: false,
    },
  };
  assert.deepEqual(validateBrandDetails({ brands, details, imageExists: ok }), []);
});

test("signale une clé qui ne correspond pas au slug", () => {
  const details = {
    persol: { slug: "persoll", story: ["x"], specs: {}, sources: ["https://a.fr"], verified: false },
  };
  const errors = validateBrandDetails({ brands, details, imageExists: ok });
  assert.equal(errors.length, 2);
  assert.match(errors[0], /clé/);
  assert.match(errors[1], /absent de brands-data/);
});

test("signale un slug inconnu de brands-data", () => {
  const details = {
    inconnue: { slug: "inconnue", story: ["x"], specs: {}, sources: ["https://a.fr"], verified: false },
  };
  const errors = validateBrandDetails({ brands, details, imageExists: ok });
  assert.equal(errors.length, 1);
  assert.match(errors[0], /absent de brands-data/);
});

test("signale une story vide et des sources vides", () => {
  const details = {
    persol: { slug: "persol", story: [], specs: {}, sources: [], verified: false },
  };
  const errors = validateBrandDetails({ brands, details, imageExists: ok });
  assert.equal(errors.length, 2);
  assert.match(errors[0], /story vide/);
  assert.match(errors[1], /aucune source/);
});

test("signale une image de galerie introuvable et un alt manquant", () => {
  const details = {
    persol: {
      slug: "persol",
      story: ["x"],
      specs: {},
      sources: ["https://a.fr"],
      verified: false,
      gallery: [
        { src: "/images/marques/persol/01.webp", alt: "Lunettes Persol" },
        { src: "/images/marques/persol/99.webp", alt: "" },
      ],
    },
  };
  const errors = validateBrandDetails({ brands, details, imageExists: ok });
  assert.equal(errors.length, 2);
  assert.match(errors[0], /introuvable/);
  assert.match(errors[1], /alt manquant/);
});

test("signale une image de brands-data introuvable", () => {
  const brandsKo = [{ slug: "gucci", image: "/images/marques/absent.webp", heroImage: null }];
  const errors = validateBrandDetails({ brands: brandsKo, details: {}, imageExists: ok });
  assert.equal(errors.length, 1);
  assert.match(errors[0], /gucci/);
});
```

- [ ] **Step 2 : Lancer le test pour vérifier qu'il échoue**

Run: `node --test scripts/lib/`
Expected: FAIL — `Cannot find module '.../scripts/lib/validate-brands.mjs'`

- [ ] **Step 3 : Écrire le validateur minimal**

Créer `scripts/lib/validate-brands.mjs` :

```js
/**
 * Valide la cohérence entre le catalogue de marques et les fiches détaillées.
 * @param {{ brands: Array<{slug: string, image: string|null, heroImage?: string|null}>,
 *           details: Record<string, object>,
 *           imageExists: (src: string) => boolean }} input
 * @returns {string[]} liste d'erreurs lisibles, vide si tout est valide
 */
export function validateBrandDetails({ brands, details, imageExists }) {
  const errors = [];
  const knownSlugs = new Set(brands.map((b) => b.slug));

  for (const [key, detail] of Object.entries(details)) {
    if (key !== detail.slug) {
      errors.push(`${key} : la clé ne correspond pas à detail.slug ("${detail.slug}")`);
    }
    if (!knownSlugs.has(detail.slug)) {
      errors.push(`${detail.slug} : slug absent de brands-data.ts`);
    }
    if (!Array.isArray(detail.story) || detail.story.length === 0) {
      errors.push(`${detail.slug} : story vide`);
    }
    if (!Array.isArray(detail.sources) || detail.sources.length === 0) {
      errors.push(`${detail.slug} : aucune source renseignée`);
    }
    for (const image of detail.gallery ?? []) {
      if (!imageExists(image.src)) {
        errors.push(`${detail.slug} : image de galerie introuvable ${image.src}`);
      }
      if (!image.alt) {
        errors.push(`${detail.slug} : alt manquant pour ${image.src}`);
      }
    }
  }

  for (const brand of brands) {
    for (const src of [brand.image, brand.heroImage]) {
      if (src && !imageExists(src)) {
        errors.push(`${brand.slug} : image introuvable ${src}`);
      }
    }
  }

  return errors;
}
```

- [ ] **Step 4 : Lancer le test pour vérifier qu'il passe**

Run: `node --test scripts/lib/`
Expected: PASS, 6 tests

- [ ] **Step 5 : Créer le module de données vide**

Créer `src/app/marques/brands-details.ts` :

```ts
export interface BrandSpecs {
  founded?: string;
  origin?: string;
  group?: string;
  madeIn?: string[];
  materials?: string[];
  frameTypes?: string[];
  audience?: string[];
  warranty?: string;
}

export interface BrandGalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface BrandDetail {
  slug: string;
  tagline?: string;
  story: string[];
  savoirFaire?: string[];
  signature?: string[];
  specs: BrandSpecs;
  gallery?: BrandGalleryImage[];
  website?: string;
  /** URLs consultées lors de la collecte. Jamais affiché, contrôle interne. */
  sources: string[];
  /** Passe à true seulement après relecture par le gérant. */
  verified: boolean;
}

export const brandDetails: Record<string, BrandDetail> = {};

export function getBrandDetail(slug: string): BrandDetail | undefined {
  return brandDetails[slug];
}
```

- [ ] **Step 6 : Créer le runner de vérification**

Créer `scripts/check-brands.ts` :

```ts
import { existsSync } from "node:fs";
import { join } from "node:path";
import { brands } from "../src/app/marques/brands-data";
import { brandDetails } from "../src/app/marques/brands-details";
// @ts-expect-error module JS sans types, volontairement testable sans tsx
import { validateBrandDetails } from "./lib/validate-brands.mjs";

const imageExists = (src: string) => existsSync(join(process.cwd(), "public", src));

const errors: string[] = validateBrandDetails({ brands, details: brandDetails, imageExists });

if (errors.length > 0) {
  console.error(`${errors.length} problème(s) détecté(s) :\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(
  `OK — ${brands.length} marques, ${Object.keys(brandDetails).length} fiches détaillées, images vérifiées.`
);
```

- [ ] **Step 7 : Ajouter tsx et les scripts npm**

Run: `npm install --save-dev tsx`

Puis ajouter dans `package.json`, section `scripts` :

```json
    "test": "node --test scripts/lib/",
    "check:brands": "tsx scripts/check-brands.ts"
```

- [ ] **Step 8 : Vérifier que le check passe sur les données actuelles**

Run: `npm run check:brands`
Expected: soit `OK — 55 marques, 0 fiches détaillées, images vérifiées.`, soit une liste d'images manquantes dans `brands-data.ts`. Si des images manquent, **ne pas modifier le validateur** : corriger les chemins dans `brands-data.ts` ou retirer les références mortes, puis relancer.

- [ ] **Step 9 : Vérifier le typecheck**

Run: `npx tsc --noEmit`
Expected: aucune erreur

- [ ] **Step 10 : Commit**

```bash
git add src/app/marques/brands-details.ts scripts/ package.json package-lock.json
git commit -m "feat(marques): modele de donnees fiches detaillees + script de validation"
```

---

### Task 2 : Fiche pilote minimale (Persol) et intégration dans la page

**Files:**
- Modify: `src/app/marques/brands-details.ts`
- Modify: `src/app/marques/[slug]/page.tsx:6` (import) et le bloc « Fiche marque »
- Create: `scripts/verify-brand-pages.mjs`
- Modify: `package.json` (script `verify:brands`)

**Interfaces:**
- Consumes: `getBrandDetail`, `BrandDetail` (Task 1)
- Produces: la fiche `brandDetails.persol` ; le script `npm run verify:brands` que les tâches suivantes étendent.

Contenu de cette tâche : `tagline` + `story` + `specs` de base, rendus dans le bloc existant. Les blocs specs/galerie/contact arrivent dans les tâches suivantes.

- [ ] **Step 1 : Écrire le test de rendu qui échoue**

Créer `scripts/verify-brand-pages.mjs` :

```js
import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";

const checks = [
  {
    url: `${BASE}/marques/persol`,
    label: "Persol — accroche et histoire",
    assert: async (page) => {
      const main = await page.textContent("body");
      if (!main.includes("per il sol")) throw new Error("le récit Persol est absent");
      const tagline = await page.locator("[data-testid='brand-tagline']").count();
      if (tagline !== 1) throw new Error("tagline absente ou dupliquée");
    },
  },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
let failed = 0;

for (const check of checks) {
  try {
    await page.goto(check.url, { waitUntil: "domcontentloaded", timeout: 20000 });
    await check.assert(page);
    console.log(`OK   ${check.label}`);
  } catch (error) {
    failed += 1;
    console.error(`FAIL ${check.label} — ${error.message}`);
  }
}

await browser.close();
process.exit(failed > 0 ? 1 : 0);
```

Ajouter dans `package.json` :

```json
    "verify:brands": "node scripts/verify-brand-pages.mjs"
```

- [ ] **Step 2 : Lancer le test pour vérifier qu'il échoue**

Run (dans deux terminaux) :
```bash
npm run dev
npm run verify:brands
```
Expected: `FAIL Persol — accroche et histoire — tagline absente ou dupliquée`

- [ ] **Step 3 : Ajouter la fiche Persol**

Dans `src/app/marques/brands-details.ts`, remplacer `export const brandDetails: Record<string, BrandDetail> = {};` par :

```ts
export const brandDetails: Record<string, BrandDetail> = {
  persol: {
    slug: "persol",
    tagline: "Depuis 1917, la lunette turinoise « pour le soleil ».",
    story: [
      "L’histoire de Persol commence en 1917 à Turin, quand le photographe et inventeur Giuseppe Ratti crée l’entreprise Ratti pour fabriquer des lunettes de protection destinées aux pilotes — de trams comme de voitures de course. Le modèle Protector est rapidement adopté par l’armée italienne, puis par les civils.",
      "Riche de treize ans d’innovations, la maison devient Persol en 1930. Le nom est une contraction de « per il sol », pour le soleil. Avant même Steve McQueen, c’est Marcello Mastroianni qui popularise la marque dans La Dolce Vita de Federico Fellini, en 1960.",
    ],
    specs: {
      founded: "1917",
      origin: "Turin, Italie",
      group: "EssilorLuxottica",
      madeIn: ["Italie"],
    },
    website: "https://www.persol.com/",
    sources: ["https://www.persol.com/", "https://www.essilorluxottica.com/"],
    verified: false,
  },
};
```

- [ ] **Step 4 : Rendre la fiche dans la page**

Dans `src/app/marques/[slug]/page.tsx`, ajouter l'import ligne 7 :

```ts
import { getBrandDetail } from "../brands-details";
```

Puis, juste après `if (!brand) { notFound(); }` dans `BrandPage` :

```tsx
  const detail = getBrandDetail(brand.slug);
```

Enfin, dans la section « Fiche marque », remplacer le bloc :

```tsx
              {brand.description && (
                <p className="mt-8 text-lg leading-relaxed text-foreground/85">
                  {brand.description}
                </p>
              )}
```

par :

```tsx
              {detail?.tagline && (
                <p
                  data-testid="brand-tagline"
                  className="mt-8 text-xl font-medium leading-snug text-foreground sm:text-2xl"
                >
                  {detail.tagline}
                </p>
              )}

              {detail?.story?.length ? (
                <div className="mt-6 space-y-5">
                  {detail.story.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg leading-relaxed text-foreground/85"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              ) : (
                brand.description && (
                  <p className="mt-8 text-lg leading-relaxed text-foreground/85">
                    {brand.description}
                  </p>
                )
              )}
```

Le `website` affiché plus bas doit désormais préférer la fiche détaillée. Remplacer les deux occurrences de `brand.website` dans ce bloc par `detail?.website ?? brand.website`, et la condition d'ouverture `{brand.website && (` par `{(detail?.website ?? brand.website) && (`. Le texte du lien reste `Visiter le site {brand.name}`.

- [ ] **Step 5 : Lancer les vérifications**

Run: `npm run verify:brands` (serveur dev lancé)
Expected: `OK   Persol — accroche et histoire`

Run: `npm run check:brands`
Expected: `OK — 55 marques, 1 fiches détaillées, images vérifiées.`

Run: `npx tsc --noEmit`
Expected: aucune erreur

- [ ] **Step 6 : Vérifier qu'une marque sans fiche ne régresse pas**

Ouvrir `http://localhost:3000/marques/chloe`.
Expected: la description historique de Chloé s'affiche comme avant, aucun bloc vide, aucune erreur console.

- [ ] **Step 7 : Commit**

```bash
git add src/app/marques scripts/verify-brand-pages.mjs package.json
git commit -m "feat(marques): fiche detaillee Persol + rendu accroche et recit"
```

---

### Task 3 : Tableau de caractéristiques techniques

**Files:**
- Create: `src/app/marques/[slug]/BrandSpecsTable.tsx`
- Modify: `src/app/marques/[slug]/page.tsx`
- Modify: `scripts/verify-brand-pages.mjs`

**Interfaces:**
- Consumes: `BrandSpecs` (Task 1), `detail` (Task 2)
- Produces: `export default function BrandSpecsTable({ specs }: { specs: BrandSpecs }): JSX.Element | null`

- [ ] **Step 1 : Écrire le test qui échoue**

Dans `scripts/verify-brand-pages.mjs`, ajouter au tableau `checks` :

```js
  {
    url: `${BASE}/marques/persol`,
    label: "Persol — tableau de caractéristiques",
    assert: async (page) => {
      const table = page.locator("[data-testid='brand-specs']");
      if ((await table.count()) !== 1) throw new Error("tableau de specs absent");
      const text = await table.textContent();
      for (const expected of ["Création", "1917", "Origine", "Turin, Italie", "Groupe", "EssilorLuxottica", "Fabrication", "Italie"]) {
        if (!text.includes(expected)) throw new Error(`"${expected}" absent du tableau`);
      }
      for (const absent of ["Matériaux", "Garantie", "N/A", "Non communiqué"]) {
        if (text.includes(absent)) throw new Error(`"${absent}" ne devrait pas être rendu`);
      }
    },
  },
  {
    url: `${BASE}/marques/chloe`,
    label: "Chloé — pas de tableau sans données",
    assert: async (page) => {
      if ((await page.locator("[data-testid='brand-specs']").count()) !== 0) {
        throw new Error("un tableau de specs vide est rendu");
      }
    },
  },
```

- [ ] **Step 2 : Lancer le test pour vérifier qu'il échoue**

Run: `npm run verify:brands`
Expected: `FAIL Persol — tableau de caractéristiques — tableau de specs absent`

- [ ] **Step 3 : Créer le composant**

Créer `src/app/marques/[slug]/BrandSpecsTable.tsx` :

```tsx
import type { BrandSpecs } from "../brands-details";

const LABELS: Array<{ key: keyof BrandSpecs; label: string }> = [
  { key: "founded", label: "Création" },
  { key: "origin", label: "Origine" },
  { key: "group", label: "Groupe" },
  { key: "madeIn", label: "Fabrication" },
  { key: "materials", label: "Matériaux" },
  { key: "frameTypes", label: "Types de montures" },
  { key: "audience", label: "Collections" },
  { key: "warranty", label: "Garantie" },
];

function formatValue(value: string | string[]): string {
  return Array.isArray(value) ? value.join(", ") : value;
}

export default function BrandSpecsTable({ specs }: { specs: BrandSpecs }) {
  const rows = LABELS.map(({ key, label }) => ({ label, value: specs[key] })).filter(
    (row): row is { label: string; value: string | string[] } =>
      Array.isArray(row.value) ? row.value.length > 0 : Boolean(row.value)
  );

  if (rows.length === 0) return null;

  return (
    <dl
      data-testid="brand-specs"
      className="mt-12 grid gap-x-8 gap-y-0 border-t border-gray-200 sm:grid-cols-2"
    >
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-baseline justify-between gap-4 border-b border-gray-200 py-4"
        >
          <dt className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
            {row.label}
          </dt>
          <dd className="text-right text-sm font-medium text-foreground">
            {formatValue(row.value)}
          </dd>
        </div>
      ))}
    </dl>
  );
}
```

- [ ] **Step 4 : Brancher dans la page**

Dans `src/app/marques/[slug]/page.tsx`, ajouter l'import :

```ts
import BrandSpecsTable from "./BrandSpecsTable";
```

Puis, dans la section « Fiche marque », juste après le bloc `story`/`description` et **avant** le bloc `website` :

```tsx
              {detail?.specs && <BrandSpecsTable specs={detail.specs} />}
```

- [ ] **Step 5 : Lancer les vérifications**

Run: `npm run verify:brands`
Expected: les 3 checks en `OK`

Run: `npx tsc --noEmit`
Expected: aucune erreur

- [ ] **Step 6 : Commit**

```bash
git add src/app/marques/\[slug\]/ scripts/verify-brand-pages.mjs
git commit -m "feat(marques): tableau de caracteristiques techniques par marque"
```

---

### Task 4 : Points signature et savoir-faire

**Files:**
- Modify: `src/app/marques/[slug]/page.tsx`
- Modify: `src/app/marques/brands-details.ts`
- Modify: `scripts/verify-brand-pages.mjs`

**Interfaces:**
- Consumes: `detail.signature`, `detail.savoirFaire` (Task 1)
- Produces: aucun export nouveau — deux blocs rendus dans la page.

Ces deux blocs sont de simples listes de texte : ils restent dans `page.tsx` plutôt que d'être extraits en composants, contrairement au tableau et à la galerie qui portent de la logique.

- [ ] **Step 1 : Écrire le test qui échoue**

Ajouter au tableau `checks` de `scripts/verify-brand-pages.mjs` :

```js
  {
    url: `${BASE}/marques/persol`,
    label: "Persol — signature et savoir-faire",
    assert: async (page) => {
      const items = page.locator("[data-testid='brand-signature'] li");
      if ((await items.count()) < 3) throw new Error("moins de 3 points signature");
      const savoir = page.locator("[data-testid='brand-savoirfaire']");
      if ((await savoir.count()) !== 1) throw new Error("bloc savoir-faire absent");
      if (!(await savoir.textContent()).includes("Meflecto")) {
        throw new Error("le savoir-faire Persol ne mentionne pas la branche Meflecto");
      }
    },
  },
  {
    url: `${BASE}/marques/chloe`,
    label: "Chloé — pas de bloc signature vide",
    assert: async (page) => {
      if ((await page.locator("[data-testid='brand-signature']").count()) !== 0) {
        throw new Error("bloc signature rendu sans données");
      }
      if ((await page.locator("[data-testid='brand-savoirfaire']").count()) !== 0) {
        throw new Error("bloc savoir-faire rendu sans données");
      }
    },
  },
```

- [ ] **Step 2 : Lancer le test pour vérifier qu'il échoue**

Run: `npm run verify:brands`
Expected: `FAIL Persol — signature et savoir-faire — moins de 3 points signature`

- [ ] **Step 3 : Compléter la fiche Persol**

Dans `src/app/marques/brands-details.ts`, ajouter à l'objet `persol`, entre `story` et `specs` :

```ts
    savoirFaire: [
      "Trois signes distinctifs identifient une Persol : la flèche argentée qui prolonge la charnière, la branche Meflecto à lamelles souples qui épouse la tête, et les verres minéraux Crystal polis à la main.",
      "Les montures sont assemblées en Italie, en acétate ou en métal, et les verres solaires reçoivent un traitement anti-reflet appliqué en usine.",
    ],
    signature: [
      "Flèche Supreme Arrow sur la charnière",
      "Branches Meflecto à lamelles souples",
      "Verres minéraux Crystal polis à la main",
      "Modèle 649, dessiné en 1957 pour les conducteurs de tram turinois",
    ],
```

Ajouter aussi `"https://www.persol.com/fr-fr/histoire"` au tableau `sources`.

- [ ] **Step 4 : Rendre les deux blocs**

Dans `src/app/marques/[slug]/page.tsx`, section « Fiche marque », juste après le `BrandSpecsTable` :

```tsx
              {detail?.signature?.length ? (
                <div className="mt-12">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Ce qui distingue {brand.name}
                  </h2>
                  <ul
                    data-testid="brand-signature"
                    className="mt-5 space-y-3"
                  >
                    {detail.signature.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {detail?.savoirFaire?.length ? (
                <div data-testid="brand-savoirfaire" className="mt-12">
                  <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Savoir-faire
                  </h2>
                  <div className="mt-5 space-y-5">
                    {detail.savoirFaire.map((paragraph, index) => (
                      <p key={index} className="text-base leading-relaxed text-foreground/85">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ) : null}
```

- [ ] **Step 5 : Lancer les vérifications**

Run: `npm run verify:brands`
Expected: les 5 checks en `OK`

Run: `npm run check:brands` puis `npx tsc --noEmit`
Expected: OK, aucune erreur

- [ ] **Step 6 : Commit**

```bash
git add src/app/marques scripts/verify-brand-pages.mjs
git commit -m "feat(marques): blocs signature et savoir-faire"
```

---

### Task 5 : Galerie d'images

**Files:**
- Create: `src/app/marques/[slug]/BrandGallery.tsx`
- Modify: `src/app/marques/[slug]/page.tsx`
- Modify: `src/app/marques/brands-details.ts`
- Modify: `scripts/verify-brand-pages.mjs`

**Interfaces:**
- Consumes: `BrandGalleryImage` (Task 1)
- Produces: `export default function BrandGallery({ images, brandName }: { images: BrandGalleryImage[]; brandName: string }): JSX.Element | null`

Cette tâche utilise **uniquement des images déjà présentes dans `public/images/`**. Le téléchargement de visuels officiels est traité en Task 8.

- [ ] **Step 1 : Écrire le test qui échoue**

Ajouter au tableau `checks` :

```js
  {
    url: `${BASE}/marques/persol`,
    label: "Persol — galerie",
    assert: async (page) => {
      const images = page.locator("[data-testid='brand-gallery'] img");
      const count = await images.count();
      if (count < 1) throw new Error("aucune image de galerie");
      for (let i = 0; i < count; i += 1) {
        const alt = await images.nth(i).getAttribute("alt");
        if (!alt) throw new Error(`image ${i} sans attribut alt`);
      }
    },
  },
  {
    url: `${BASE}/marques/chloe`,
    label: "Chloé — pas de galerie vide",
    assert: async (page) => {
      if ((await page.locator("[data-testid='brand-gallery']").count()) !== 0) {
        throw new Error("galerie rendue sans images");
      }
    },
  },
```

- [ ] **Step 2 : Lancer le test pour vérifier qu'il échoue**

Run: `npm run verify:brands`
Expected: `FAIL Persol — galerie — aucune image de galerie`

- [ ] **Step 3 : Créer le composant**

Créer `src/app/marques/[slug]/BrandGallery.tsx` :

```tsx
import Image from "next/image";
import type { BrandGalleryImage } from "../brands-details";

export default function BrandGallery({
  images,
  brandName,
}: {
  images: BrandGalleryImage[];
  brandName: string;
}) {
  if (images.length === 0) return null;

  return (
    <section className="bg-muted py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          La collection {brandName}
        </h2>
        <div
          data-testid="brand-gallery"
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {images.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              {image.caption && (
                <figcaption className="px-4 py-3 text-xs text-muted-foreground">
                  {image.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4 : Renseigner la galerie Persol avec l'existant**

Run: `ls public/images/produits | grep -i persol; ls public/images/marques | grep -i persol`

Ajouter à l'objet `persol` de `brands-details.ts`, après `specs`, une entrée par fichier **réellement listé par la commande ci-dessus** (ne pas inventer de chemin). Format :

```ts
    gallery: [
      { src: "/images/marques/persol.webp", alt: "Monture Persol chez Optique Queuleu à Metz" },
    ],
```

Si la commande ne remonte qu'un seul fichier, la galerie n'a qu'une entrée : c'est acceptable, Task 8 la complètera.

- [ ] **Step 5 : Brancher dans la page**

Dans `src/app/marques/[slug]/page.tsx`, ajouter l'import :

```ts
import BrandGallery from "./BrandGallery";
```

Puis, entre la fermeture de la section « Fiche marque » (`</section>`) et l'ouverture de la section « CTA Doctolib » :

```tsx
      {detail?.gallery?.length ? (
        <BrandGallery images={detail.gallery} brandName={brand.name} />
      ) : null}
```

- [ ] **Step 6 : Lancer les vérifications**

Run: `npm run verify:brands`
Expected: les 7 checks en `OK`

Run: `npm run check:brands`
Expected: OK — le validateur confirme que chaque `gallery.src` existe sur disque

Run: `npx tsc --noEmit`
Expected: aucune erreur

- [ ] **Step 7 : Commit**

```bash
git add src/app/marques scripts/verify-brand-pages.mjs
git commit -m "feat(marques): galerie d'images par marque"
```

---

### Task 6 : Formulaire de contact contextualisé par marque

**Files:**
- Modify: `src/components/ContactForm.tsx`
- Create: `src/app/marques/[slug]/BrandContactSection.tsx`
- Modify: `src/app/marques/[slug]/page.tsx` (remplace la section « CTA Doctolib »)
- Modify: `scripts/verify-brand-pages.mjs`

**Interfaces:**
- Consumes: `ContactForm` existant
- Produces:
  - `ContactForm` accepte `{ brand?: string }` — comportement actuel strictement inchangé quand `brand` est absent
  - `export default function BrandContactSection({ brandName }: { brandName: string }): JSX.Element`

- [ ] **Step 1 : Vérifier le template EmailJS avant de coder**

Ouvrir le dashboard EmailJS, template référencé par `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, et noter si une variable de sujet (`{{subject}}` ou équivalent) y est déjà déclarée.

- Si **oui** : le payload gagnera `subject`.
- Si **non** : ne rien créer côté EmailJS. La marque sera uniquement préfixée dans le corps du message. Adapter l'étape 4 en conséquence et noter la décision dans le message de commit.

- [ ] **Step 2 : Écrire le test qui échoue**

Ajouter au tableau `checks` de `scripts/verify-brand-pages.mjs` :

```js
  {
    url: `${BASE}/marques/persol`,
    label: "Persol — formulaire contextualisé",
    assert: async (page) => {
      const form = page.locator("[data-testid='brand-contact']");
      if ((await form.count()) !== 1) throw new Error("section contact marque absente");
      const message = await page.locator("#contact-message").inputValue();
      if (!message.includes("Persol")) throw new Error(`message non pré-rempli : "${message}"`);
      const doctolib = page.locator("[data-testid='brand-contact'] a[href*='doctolib']");
      if ((await doctolib.count()) !== 1) throw new Error("lien Doctolib absent de la section contact");
    },
  },
  {
    url: `${BASE}/contact`,
    label: "Contact générique — message vide",
    assert: async (page) => {
      const message = await page.locator("#contact-message").inputValue();
      if (message !== "") throw new Error(`le formulaire générique est pré-rempli : "${message}"`);
    },
  },
```

- [ ] **Step 3 : Lancer le test pour vérifier qu'il échoue**

Run: `npm run verify:brands`
Expected: `FAIL Persol — formulaire contextualisé — section contact marque absente`

- [ ] **Step 4 : Ajouter la prop `brand` à ContactForm**

Dans `src/components/ContactForm.tsx` :

Remplacer la signature :

```tsx
export default function ContactForm() {
```

par :

```tsx
export default function ContactForm({ brand }: { brand?: string }) {
```

Aucun appelant existant ne casse : `brand` est optionnel, et `src/app/contact/page.tsx` continue d'appeler `<ContactForm />`.

Remplacer l'initialisation de l'état :

```tsx
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
```

par :

```tsx
  const defaultMessage = brand
    ? `Bonjour, je suis intéressé(e) par les lunettes ${brand}.`
    : "";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: defaultMessage,
  });
```

Dans `handleSubmit`, remplacer l'objet de paramètres EmailJS :

```tsx
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        },
```

par (variante **template avec variable de sujet**, cf. Step 1) :

```tsx
        {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          subject: brand
            ? `Demande marque — ${brand}`
            : "Demande de contact — site web",
        },
```

Variante **template sans variable de sujet** : laisser l'objet inchangé et préfixer le corps :

```tsx
          message: brand
            ? `[Marque : ${brand}]\n\n${formData.message}`
            : formData.message,
```

Enfin, dans le `.then()` de succès, remplacer la réinitialisation :

```tsx
        setFormData({ name: "", phone: "", email: "", message: "" });
```

par :

```tsx
        setFormData({ name: "", phone: "", email: "", message: defaultMessage });
```

- [ ] **Step 5 : Créer la section contact marque**

Créer `src/app/marques/[slug]/BrandContactSection.tsx` :

```tsx
import ContactForm from "@/components/ContactForm";

export default function BrandContactSection({ brandName }: { brandName: string }) {
  return (
    <section
      data-testid="brand-contact"
      className="bg-white py-14 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Essayer en boutique
            </span>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Une question sur {brandName} ?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Dites-nous ce que vous cherchez : nous vérifions la disponibilité du
              modèle et préparons votre essayage au 28 rue de Queuleu à Metz.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="https://www.doctolib.fr/opticien/metz/optique-queuleu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
              >
                Prendre rendez-vous
              </a>
              <p className="text-sm text-muted-foreground">
                Ou par téléphone au{" "}
                <a
                  href="tel:+33387373036"
                  className="font-semibold text-primary hover:underline"
                >
                  03 87 37 30 36
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-gray-200 p-6 sm:p-8">
            <ContactForm brand={brandName} />
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6 : Remplacer la section CTA Doctolib de la page**

Dans `src/app/marques/[slug]/page.tsx`, ajouter l'import :

```ts
import BrandContactSection from "./BrandContactSection";
```

Puis supprimer intégralement la section commentée `{/* CTA Doctolib */}` (du `<section className="bg-gradient-to-r from-primary to-primary-light py-14 sm:py-16">` jusqu'à son `</section>` fermant) et la remplacer par :

```tsx
      <BrandContactSection brandName={brand.name} />
```

- [ ] **Step 7 : Lancer les vérifications**

Run: `npm run verify:brands`
Expected: les 9 checks en `OK`

Run: `npx tsc --noEmit` puis `npm run lint`
Expected: aucune erreur

- [ ] **Step 8 : Tester un envoi réel**

Depuis `http://localhost:3000/marques/persol`, remplir le formulaire avec une adresse de test et envoyer.
Expected: message de confirmation affiché, et le mail reçu identifie clairement la marque Persol.

- [ ] **Step 9 : Commit**

```bash
git add src/components/ContactForm.tsx src/app/marques scripts/verify-brand-pages.mjs
git commit -m "feat(marques): formulaire de contact contextualise par marque"
```

---

### Task 7 : JSON-LD enrichi

**Files:**
- Modify: `src/app/marques/[slug]/page.tsx` (objet `jsonLd`)
- Modify: `scripts/verify-brand-pages.mjs`

**Interfaces:**
- Consumes: `detail.specs`, `detail.website` (Task 1)
- Produces: aucun export nouveau.

- [ ] **Step 1 : Écrire le test qui échoue**

Ajouter au tableau `checks` :

```js
  {
    url: `${BASE}/marques/persol`,
    label: "Persol — JSON-LD enrichi",
    assert: async (page) => {
      const raw = await page.locator("script[type='application/ld+json']").first().textContent();
      const data = JSON.parse(raw);
      if (data.foundingDate !== "1917") throw new Error("foundingDate absent ou incorrect");
      if (data.parentOrganization?.name !== "EssilorLuxottica") {
        throw new Error("parentOrganization absent");
      }
      if (data.sameAs?.[0] !== "https://www.persol.com/") throw new Error("sameAs absent");
      if (JSON.stringify(data).includes("undefined")) throw new Error("valeur undefined sérialisée");
    },
  },
```

- [ ] **Step 2 : Lancer le test pour vérifier qu'il échoue**

Run: `npm run verify:brands`
Expected: `FAIL Persol — JSON-LD enrichi — foundingDate absent ou incorrect`

- [ ] **Step 3 : Enrichir le JSON-LD**

Dans `src/app/marques/[slug]/page.tsx`, remplacer la construction de `jsonLd` par :

```tsx
  const site = "https://www.optiquequeuleu.com";
  const specs = detail?.specs;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Brand",
    name: brand.name,
    description: detail?.story?.[0] ?? brand.description,
    url: `${site}/marques/${brand.slug}`,
    image: brand.heroImage ? `${site}${brand.heroImage}` : undefined,
    logo: brand.image ? `${site}${brand.image}` : undefined,
    foundingDate: specs?.founded,
    material: specs?.materials?.length ? specs.materials : undefined,
    parentOrganization: specs?.group
      ? { "@type": "Organization", name: specs.group }
      : undefined,
    sameAs: detail?.website ? [detail.website] : undefined,
    provider: {
      "@type": "LocalBusiness",
      name: "Optique Queuleu",
      url: site,
      telephone: "+33387373036",
      address: {
        "@type": "PostalAddress",
        streetAddress: "28 rue de Queuleu",
        addressLocality: "Metz",
        postalCode: "57070",
        addressCountry: "FR",
      },
    },
  };
```

`JSON.stringify` omet automatiquement les clés valant `undefined` : aucun nettoyage supplémentaire n'est nécessaire.

- [ ] **Step 4 : Lancer les vérifications**

Run: `npm run verify:brands`
Expected: les 10 checks en `OK`

Run: `npx tsc --noEmit`
Expected: aucune erreur

- [ ] **Step 5 : Valider le balisage**

Copier le contenu du `<script type="application/ld+json">` de `/marques/persol` dans https://validator.schema.org/
Expected: aucune erreur, aucun avertissement bloquant

- [ ] **Step 6 : Commit**

```bash
git add src/app/marques scripts/verify-brand-pages.mjs
git commit -m "feat(marques): donnees structurees Brand enrichies"
```

---

### Task 8 : Collecte des 4 marques pilotes restantes, images et rapports

**Files:**
- Modify: `src/app/marques/brands-details.ts`
- Create: `public/images/marques/<slug>/NN.webp` (visuels téléchargés)
- Create: `reports/marques-a-verifier.md`
- Create: `reports/marques-images.md`

**Interfaces:**
- Consumes: tout ce qui précède
- Produces: `brandDetails.gucci`, `brandDetails["ancet-fayolle"]`, `brandDetails.bolle`, `brandDetails.komono`

- [ ] **Step 1 : Rechercher les informations, marque par marque**

Pour chacune de `gucci`, `ancet-fayolle`, `bolle`, `komono` :
- consulter le site officiel de la marque, la presse optique française (Acuité, L'Opticien Lunetier, Silmo) et la fiche du distributeur ;
- noter chaque fait avec l'URL qui l'atteste ;
- **ne rien écrire qui ne soit attesté par une source.** Un champ sans source reste absent de la fiche et part au Step 3.

`ancet-fayolle` est un atelier français : la recherche doit établir le lieu de fabrication et le savoir-faire, ce sont les arguments de vente en boutique.
`komono` n'a pas de logo dans `public/images` (`image: null` dans `brands-data.ts`) : cette fiche vérifie le rendu d'une page sans visuel de marque.

- [ ] **Step 2 : Écrire les 4 fiches**

Ajouter les 4 objets à `brandDetails` dans `src/app/marques/brands-details.ts`, en suivant exactement la forme de l'objet `persol` : `slug`, `tagline`, `story`, `savoirFaire`, `signature`, `specs`, `gallery`, `website`, `sources`, `verified: false`.

Omettre toute clé sans donnée sourcée. Ne jamais écrire de tableau vide ni de chaîne vide.

- [ ] **Step 3 : Écrire le rapport de relecture**

Créer `reports/marques-a-verifier.md` :

```markdown
# Marques — points à vérifier

Chaque ligne est une information que la recherche web n'a pas permis de confirmer.
Le champ correspondant est **absent** de la fiche tant qu'elle n'est pas tranchée.

| Marque | Champ | Valeur trouvée | Source | Question |
|---|---|---|---|---|
```

Ajouter une ligne par incertitude rencontrée au Step 1. Terminer par une section :

```markdown
## Fiches en attente de relecture

Les fiches suivantes sont publiées avec `verified: false`. Passer le champ à `true`
après relecture.

- [ ] persol
- [ ] gucci
- [ ] ancet-fayolle
- [ ] bolle
- [ ] komono
```

- [ ] **Step 4 : Compléter les galeries avec l'existant**

Run: `ls public/images/produits public/images/marques`

Pour chaque marque pilote, ajouter à sa `gallery` les fichiers existants qui la concernent. Renseigner un `alt` descriptif incluant le nom de la marque et « Metz » ou « Optique Queuleu » quand c'est naturel — pas de bourrage de mots-clés.

Run: `npm run check:brands`
Expected: OK, aucune image introuvable

- [ ] **Step 5 : Télécharger les visuels officiels manquants**

Pour toute marque pilote dont la galerie compte moins de 3 visuels, télécharger depuis l'espace presse / media kit du site officiel (à défaut, la page collection) vers `public/images/marques/<slug>/`, converti en WebP et redimensionné à 1600 px de large maximum :

```bash
mkdir -p public/images/marques/<slug>
# télécharger le fichier source, puis :
npx sharp-cli --input <source> --output public/images/marques/<slug>/01.webp resize 1600 --format webp
```

Si `sharp-cli` n'est pas disponible, utiliser `sips` (macOS) puis `cwebp`, ou tout outil équivalent. Ne pas ajouter `sharp` aux dépendances du projet : c'est un outil de préparation d'actifs, pas une dépendance d'exécution.

- [ ] **Step 6 : Tracer l'origine des visuels**

Créer `reports/marques-images.md` :

```markdown
# Marques — traçabilité des visuels téléchargés

Les visuels ci-dessous ont été récupérés depuis les sites officiels des marques.
Diffuser un visuel de marque sur un site commercial sans accord du distributeur
est un risque juridique : ce tableau permet de retirer en bloc ce qui ne doit pas
être conservé.

| Fichier | Marque | URL source | Date |
|---|---|---|---|
```

Une ligne par fichier téléchargé au Step 5. Les images déjà présentes dans le dépôt avant cette tâche ne figurent pas dans ce tableau.

- [ ] **Step 7 : Étendre les vérifications aux 5 marques**

Dans `scripts/verify-brand-pages.mjs`, ajouter en fin de tableau `checks` :

```js
  ...["gucci", "ancet-fayolle", "bolle", "komono"].map((slug) => ({
    url: `${BASE}/marques/${slug}`,
    label: `${slug} — fiche complète`,
    assert: async (page) => {
      for (const testid of ["brand-tagline", "brand-specs", "brand-contact"]) {
        if ((await page.locator(`[data-testid='${testid}']`).count()) !== 1) {
          throw new Error(`${testid} absent`);
        }
      }
      const body = await page.textContent("body");
      for (const forbidden of ["N/A", "Non communiqué", "undefined", "TODO"]) {
        if (body.includes(forbidden)) throw new Error(`"${forbidden}" présent dans la page`);
      }
    },
  })),
```

Run: `npm run verify:brands`
Expected: les 14 checks en `OK`

- [ ] **Step 8 : Commit**

```bash
git add src/app/marques/brands-details.ts public/images reports scripts/verify-brand-pages.mjs
git commit -m "feat(marques): fiches detaillees Gucci, Ancet Fayolle, Bolle, Komono + rapports"
```

---

### Task 9 : Vérification finale de la phase 1

**Files:**
- Create: `screenshots/marque-persol-desktop.png`, `screenshots/marque-komono-desktop.png`, `screenshots/marque-chloe-desktop.png`
- Modify: `scripts/verify-brand-pages.mjs` (capture d'écran)

**Interfaces:**
- Consumes: l'ensemble des tâches précédentes.
- Produces: la preuve que la phase 1 est livrable.

- [ ] **Step 1 : Ajouter la capture d'écran au script de vérification**

Dans `scripts/verify-brand-pages.mjs`, juste avant `await browser.close();` :

```js
import { mkdirSync } from "node:fs";

mkdirSync("screenshots", { recursive: true });
for (const slug of ["persol", "komono", "chloe"]) {
  await page.goto(`${BASE}/marques/${slug}`, { waitUntil: "networkidle", timeout: 30000 });
  await page.screenshot({ path: `screenshots/marque-${slug}-desktop.png`, fullPage: true });
  console.log(`Capture screenshots/marque-${slug}-desktop.png`);
}
```

Déplacer l'import `mkdirSync` en haut du fichier avec les autres imports.

- [ ] **Step 2 : Lancer la suite complète**

```bash
npm test
npm run check:brands
npx tsc --noEmit
npm run lint
npm run build
```

Expected: tout passe. Le build doit générer les 55 routes `/marques/[slug]` en statique — vérifier la présence de `● /marques/[slug]` avec `55` dans la sortie de `next build`.

- [ ] **Step 3 : Lancer les vérifications de rendu sur le build de production**

```bash
npm run start &
BASE_URL=http://localhost:3000 npm run verify:brands
```

Expected: 14 checks en `OK`, 3 captures écrites.

- [ ] **Step 4 : Inspecter les captures**

Ouvrir les 3 captures. Vérifier :
- `persol` : accroche, récit, tableau de specs, signature, savoir-faire, galerie, formulaire pré-rempli — aucun blanc anormal entre les blocs
- `komono` : la page tient debout sans logo de marque, le hero de repli s'affiche correctement
- `chloe` : la page est identique à l'état d'avant la phase 1, aucun bloc vide n'est apparu

- [ ] **Step 5 : Commit**

```bash
git add scripts/verify-brand-pages.mjs screenshots
git commit -m "chore(marques): verification de rendu et captures phase 1"
```

- [ ] **Step 6 : Point d'arrêt — validation du gérant**

Présenter les 3 captures et `reports/marques-a-verifier.md`. **La phase 2 (les 50 marques restantes) ne démarre qu'après validation explicite du format et du niveau de détail.**

---

## Ce que la phase 1 ne fait pas

- Les 50 marques restantes n'ont pas de fiche détaillée : leur page rend le `description` existant, plus le formulaire contextualisé. C'est un état stable et publiable.
- Aucun `verified: true` n'est posé : c'est au gérant de le faire après relecture.
