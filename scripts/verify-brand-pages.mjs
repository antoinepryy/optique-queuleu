import { mkdirSync } from "node:fs";
import { chromium } from "playwright";
import { brands } from "../src/app/marques/brands-data";
import { brandDetails } from "../src/app/marques/brands-details";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";

// Slugs dérivés des données plutôt qu'écrits en dur : quand une nouvelle marque
// reçoit sa fiche détaillée, le harnais suit automatiquement sans édition manuelle.
const documentedSlugs = Object.keys(brandDetails);
// Témoin représentant l'état « marque sans fiche détaillée » : la première marque
// du catalogue qui n'a pas d'entrée dans brandDetails. Devient undefined le jour où
// toutes les marques sont documentées — les checks qui en dépendent sont alors
// sautés explicitement plutôt que de se mettre à échouer pour la mauvaise raison.
const witnessSlug = brands.find((b) => !brandDetails[b.slug])?.slug;
// Marque documentée qui a encore une galerie, pour le check dédié à la galerie
// (Persol n'en a plus, cf. correction n°1).
const gallerySlug = documentedSlugs.find((slug) => (brandDetails[slug].gallery?.length ?? 0) > 0);

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
  // Les fiches détaillées ne valent que si un visiteur peut y arriver. Tous les
  // autres contrôles de ce harnais naviguent par URL directe : ils passaient
  // alors que la grille de /marques ne comportait aucun lien vers les fiches.
  {
    url: `${BASE}/marques`,
    label: "/marques — les cartes mènent aux fiches",
    assert: async (page) => {
      const liens = page.locator('a[href^="/marques/"]');
      const total = await liens.count();
      if (total < brands.length) {
        throw new Error(
          `${total} lien(s) vers une fiche marque pour ${brands.length} marques au catalogue`
        );
      }
      // Un lien présent dans le DOM peut rester inatteignable (recouvert, masqué).
      // On vérifie donc une navigation réelle, pas seulement la présence du href.
      const premier = liens.first();
      const cible = await premier.getAttribute("href");
      await premier.click();
      await page.waitForURL(`**${cible}`, { timeout: 10000 });
      if ((await page.locator("h1").first().textContent())?.trim().length === 0) {
        throw new Error(`la fiche ${cible} s'affiche sans titre`);
      }
    },
  },
  {
    url: `${BASE}/marques/persol`,
    label: "Persol — accroche et histoire",
    assert: async (page) => {
      const main = await page.textContent("body");
      if (!main.includes("per il sole")) throw new Error("le récit Persol est absent");
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
      for (const expected of ["Création", "1917", "Origine de la marque", "Turin, Italie", "Fabrication", "Italie"]) {
        if (!text.includes(expected)) throw new Error(`"${expected}" absent du tableau`);
      }
      for (const absent of ["Groupe", "EssilorLuxottica", "Matériaux", "Garantie", "N/A", "Non communiqué"]) {
        if (text.includes(absent)) throw new Error(`"${absent}" ne devrait pas être rendu`);
      }
    },
  },
  ...(witnessSlug
    ? [
        {
          url: `${BASE}/marques/${witnessSlug}`,
          label: `${witnessSlug} — pas de tableau sans données (témoin sans fiche détaillée)`,
          assert: async (page) => {
            if ((await page.locator("[data-testid='brand-specs']").count()) !== 0) {
              throw new Error("un tableau de specs vide est rendu");
            }
          },
        },
      ]
    : []),
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
  ...(witnessSlug
    ? [
        {
          url: `${BASE}/marques/${witnessSlug}`,
          label: `${witnessSlug} — pas de bloc signature vide (témoin sans fiche détaillée)`,
          assert: async (page) => {
            if ((await page.locator("[data-testid='brand-signature']").count()) !== 0) {
              throw new Error("bloc signature rendu sans données");
            }
            if ((await page.locator("[data-testid='brand-savoirfaire']").count()) !== 0) {
              throw new Error("bloc savoir-faire rendu sans données");
            }
          },
        },
      ]
    : []),
  ...(gallerySlug
    ? [
        {
          url: `${BASE}/marques/${gallerySlug}`,
          label: `${gallerySlug} — galerie`,
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
      ]
    : []),
  ...(witnessSlug
    ? [
        {
          url: `${BASE}/marques/${witnessSlug}`,
          label: `${witnessSlug} — pas de galerie vide (témoin sans fiche détaillée)`,
          assert: async (page) => {
            if ((await page.locator("[data-testid='brand-gallery']").count()) !== 0) {
              throw new Error("galerie rendue sans images");
            }
          },
        },
      ]
    : []),
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
    },
  },
  ...(witnessSlug
    ? [
        {
          url: `${BASE}/marques/${witnessSlug}`,
          label: `${witnessSlug} — JSON-LD sans fiche détaillée (non-régression, témoin sans fiche détaillée)`,
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
          },
        },
      ]
    : []),
  ...documentedSlugs.map(ficheDetaillee),
];

if (!witnessSlug) {
  console.log(
    "SKIP toutes les marques ont désormais une fiche détaillée — les checks « témoin sans fiche » sont désactivés"
  );
}

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

// ── Contrôles de dégradation ──
// Les blocs animés au défilement partent à opacity 0. Deux situations doivent
// malgré tout afficher le contenu : l'absence de JavaScript, et la préférence
// système « mouvement réduit ». Ces deux cas exigent un contexte de navigateur
// dédié (options posées à la création du contexte), d'où cette boucle séparée.
const pagesDegradation = [`${BASE}/`, `${BASE}/marques/${documentedSlugs[0]}`];

const etatDesBlocsReveles = async (contextOptions, url) => {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    ...contextOptions,
  });
  const p = await context.newPage();
  try {
    await p.goto(url, { waitUntil: "load", timeout: 20000 });
    return await p.evaluate(() => {
      const blocs = Array.from(
        document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
      );
      const style = (el) => getComputedStyle(el);
      return {
        total: blocs.length,
        invisibles: blocs.filter((el) => Number(style(el).opacity) < 1).length,
        animes: blocs.filter((el) =>
          style(el)
            .transitionDuration.split(",")
            .some((d) => parseFloat(d) > 0)
        ).length,
      };
    });
  } finally {
    await context.close();
  }
};

for (const url of pagesDegradation) {
  for (const [label, options, sansTransition] of [
    ["sans JavaScript", { javaScriptEnabled: false }, false],
    // Sous mouvement réduit on vérifie aussi que la transition est neutralisée :
    // l'opacité seule serait sensible au minutage (une animation de 0,8 s peut
    // s'être achevée avant la mesure et masquer une régression), alors que la
    // durée de transition calculée est déterministe.
    ["mouvement réduit", { reducedMotion: "reduce" }, true],
  ]) {
    const nom = `${url.replace(BASE, "") || "/"} — contenu visible ${label}`;
    try {
      const { total, invisibles, animes } = await etatDesBlocsReveles(options, url);
      if (total === 0) {
        throw new Error(
          "aucun bloc .reveal trouvé — le contrôle ne teste rien, vérifier le sélecteur"
        );
      }
      if (invisibles > 0) {
        throw new Error(
          `${invisibles} bloc(s) sur ${total} restent à opacity < 1 : le contenu est invisible`
        );
      }
      if (sansTransition && animes > 0) {
        throw new Error(
          `${animes} bloc(s) sur ${total} conservent une transition alors que le mouvement réduit est demandé`
        );
      }
      console.log(`OK   ${nom} (${total} blocs)`);
    } catch (error) {
      failed += 1;
      console.error(`FAIL ${nom} — ${error.message}`);
    }
  }
}

// Échantillon de captures borné : la première et la dernière fiche documentée, plus
// le témoin sans fiche s'il existe encore — pas la liste complète, qui grossira avec
// le catalogue.
const screenshotSlugs = [...new Set(
  [documentedSlugs[0], documentedSlugs[documentedSlugs.length - 1], witnessSlug].filter(Boolean)
)];

mkdirSync("screenshots", { recursive: true });
for (const slug of screenshotSlugs) {
  // waitUntil: "networkidle" ne se stabilise jamais sur ces pages : la section
  // contact embarque une iframe Google Maps qui maintient du trafic réseau en
  // continu (tuiles, télémétrie), ce qui fait échouer page.goto par timeout.
  // On attend plutôt que le dernier bloc de la page soit visible.
  await page.goto(`${BASE}/marques/${slug}`, { waitUntil: "domcontentloaded", timeout: 30000 });
  await page.locator("[data-testid='brand-contact']").waitFor({ state: "visible", timeout: 30000 });
  // L'animation d'entrée (fondu) du bloc accroche/récit n'est pas terminée dès que
  // brand-contact devient visible : sans cette pause la capture fige le contenu
  // en cours de fondu, quasi invisible. Un court délai laisse la transition finir.
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `screenshots/marque-${slug}-desktop.png`, fullPage: true });
  console.log(`Capture screenshots/marque-${slug}-desktop.png`);
}

await browser.close();
process.exit(failed > 0 ? 1 : 0);
