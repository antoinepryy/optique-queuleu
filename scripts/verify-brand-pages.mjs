import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";

/**
 * Contrôle générique d'une fiche détaillée, paramétré par slug : blocs obligatoires
 * présents une seule fois, et aucun placeholder rendu à l'écran.
 */
const ficheDetaillee = (slug) => ({
  url: `${BASE}/marques/${slug}`,
  label: `${slug} — fiche complète`,
  assert: async (page) => {
    for (const testid of ["brand-tagline", "brand-specs", "brand-contact"]) {
      if ((await page.locator(`[data-testid='${testid}']`).count()) !== 1) {
        throw new Error(`${testid} absent ou dupliqué`);
      }
    }
    // Sur serveur froid le DOM est présent — les count() ci-dessus passent — alors que
    // la page n'est pas encore peinte : innerText ne remonte alors que le header et le
    // balayage anti-placeholder ne voit qu'une fraction du contenu. On attend donc que
    // le dernier bloc de la page soit visible avant de lire.
    await page.locator("[data-testid='brand-contact']").waitFor({ state: "visible" });

    // innerText et non textContent : ce dernier remonte aussi le contenu des balises
    // <script>, où la charge utile RSC de Next contient légitimement "undefined".
    const visible = await page.locator("body").innerText();
    for (const forbidden of ["N/A", "Non communiqué", "undefined", "TODO"]) {
      if (visible.includes(forbidden)) throw new Error(`"${forbidden}" visible dans la page`);
    }
  },
});

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
  {
    url: `${BASE}/marques/persol`,
    label: "Persol — JSON-LD enrichi (@graph Brand+Organization / LocalBusiness)",
    assert: async (page) => {
      const raw = await page.locator("script[type='application/ld+json']").first().textContent();
      const data = JSON.parse(raw);
      if (!Array.isArray(data["@graph"])) throw new Error("@graph absent");

      const brandNode = data["@graph"].find(
        (n) => Array.isArray(n["@type"]) && n["@type"].includes("Brand")
      );
      if (!brandNode) throw new Error("noeud Brand absent du @graph");
      if (!brandNode["@type"].includes("Organization")) {
        throw new Error("le noeud Brand doit aussi être typé Organization (foundingDate n'est valide que sur Organization)");
      }
      if (brandNode.foundingDate !== "1917") throw new Error("foundingDate absent ou incorrect");
      if (brandNode.sameAs?.[0] !== "https://www.persol.com/") throw new Error("sameAs absent");
      if (brandNode.parentOrganization !== undefined) {
        throw new Error("parentOrganization ne devrait pas être rendu (specs.group absent)");
      }
      if (brandNode.material !== undefined) {
        throw new Error("material n'est valide ni sur Brand ni sur Organization, il ne doit pas être rendu");
      }

      const localNode = data["@graph"].find((n) => n["@type"] === "LocalBusiness");
      if (!localNode) throw new Error("noeud LocalBusiness absent du @graph");
      if (localNode.name !== "Optique Queuleu") throw new Error("nom du noeud local absent ou incorrect");
      if (localNode.telephone !== "+33387373036") throw new Error("téléphone absent du noeud local");
      if (localNode.address?.streetAddress !== "28 rue de Queuleu") {
        throw new Error("adresse absente ou incorrecte sur le noeud local");
      }
      if (localNode.brand?.["@id"] !== brandNode["@id"]) {
        throw new Error("relation brand -> LocalBusiness absente ou incorrecte");
      }

      if (JSON.stringify(data).includes("undefined")) throw new Error("valeur undefined sérialisée");
    },
  },
  {
    url: `${BASE}/marques/chloe`,
    label: "Chloé — JSON-LD sans fiche détaillée (non-régression)",
    assert: async (page) => {
      const raw = await page.locator("script[type='application/ld+json']").first().textContent();
      const data = JSON.parse(raw);
      if (!Array.isArray(data["@graph"])) throw new Error("@graph absent");

      const brandNode = data["@graph"].find(
        (n) => Array.isArray(n["@type"]) && n["@type"].includes("Brand")
      );
      if (!brandNode) throw new Error("noeud Brand absent du @graph");
      if (brandNode.foundingDate !== undefined) throw new Error("foundingDate ne devrait pas être rendu (pas de fiche detail)");
      if (brandNode.parentOrganization !== undefined) throw new Error("parentOrganization ne devrait pas être rendu");
      if (brandNode.material !== undefined) throw new Error("material ne devrait pas être rendu");
      if (brandNode.sameAs !== undefined) throw new Error("sameAs ne devrait pas être rendu (pas de website)");

      const localNode = data["@graph"].find((n) => n["@type"] === "LocalBusiness");
      if (!localNode) throw new Error("noeud LocalBusiness absent du @graph");
      if (localNode.telephone !== "+33387373036") throw new Error("téléphone absent du noeud local");
      if (localNode.address?.streetAddress !== "28 rue de Queuleu") {
        throw new Error("adresse absente ou incorrecte sur le noeud local");
      }
      if (localNode.brand?.["@id"] !== brandNode["@id"]) {
        throw new Error("relation brand -> LocalBusiness absente ou incorrecte");
      }

      if (JSON.stringify(data).includes("undefined")) throw new Error("valeur undefined sérialisée");
    },
  },
  ...["persol", "gucci", "ancet-fayolle", "bolle", "komono"].map(ficheDetaillee),
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
