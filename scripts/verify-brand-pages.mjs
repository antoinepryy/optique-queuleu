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
