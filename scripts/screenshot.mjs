import { chromium } from "playwright";
import { mkdirSync } from "fs";

const SCREENSHOTS_DIR = "screenshots";
mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const pages = [
  { name: "accueil", url: "https://www.optiquequeuleu.com/" },
  { name: "nos-marques", url: "https://www.optiquequeuleu.com/nos-marques/" },
  { name: "contact", url: "https://www.optiquequeuleu.com/contact/" },
  {
    name: "nos-services",
    url: "https://www.optiquequeuleu.com/nos-services/",
  },
  {
    name: "nos-collections",
    url: "https://www.optiquequeuleu.com/nos-collections/",
  },
  { name: "le-magasin", url: "https://www.optiquequeuleu.com/le-magasin/" },
  { name: "blog", url: "https://www.optiquequeuleu.com/blog/" },
];

const browser = await chromium.launch();

// Desktop screenshots
for (const page of pages) {
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
  });
  const tab = await ctx.newPage();
  try {
    await tab.goto(page.url, { waitUntil: "networkidle", timeout: 30000 });
    // Wait for Divi to render
    await tab.waitForTimeout(3000);
    await tab.screenshot({
      path: `${SCREENSHOTS_DIR}/${page.name}-desktop.png`,
      fullPage: true,
    });
    console.log(`OK: ${page.name} (desktop)`);
  } catch (e) {
    console.log(`SKIP: ${page.name} (desktop) - ${e.message.slice(0, 80)}`);
  }
  await ctx.close();
}

// Mobile screenshots (accueil + contact only)
for (const page of [pages[0], pages[2]]) {
  const ctx = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
  });
  const tab = await ctx.newPage();
  try {
    await tab.goto(page.url, { waitUntil: "networkidle", timeout: 30000 });
    await tab.waitForTimeout(3000);
    await tab.screenshot({
      path: `${SCREENSHOTS_DIR}/${page.name}-mobile.png`,
      fullPage: true,
    });
    console.log(`OK: ${page.name} (mobile)`);
  } catch (e) {
    console.log(`SKIP: ${page.name} (mobile) - ${e.message.slice(0, 80)}`);
  }
  await ctx.close();
}

await browser.close();
console.log("Done!");
