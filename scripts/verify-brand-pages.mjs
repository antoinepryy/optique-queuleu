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
  {
    url: `${BASE}/marques/persol`,
    label: "Persol — tableau de caractéristiques",
    assert: async (page) => {
      const table = page.locator("[data-testid='brand-specs']");
      if ((await table.count()) !== 1) throw new Error("tableau de specs absent");
      const text = await table.textContent();
      for (const expected of ["Création", "1917", "Origine", "Turin, Italie", "Fabrication", "Italie"]) {
        if (!text.includes(expected)) throw new Error(`"${expected}" absent du tableau`);
      }
      for (const absent of ["Groupe", "EssilorLuxottica", "Matériaux", "Garantie", "N/A", "Non communiqué"]) {
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
