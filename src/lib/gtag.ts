// Couche unique d'accès à Google Ads et Google Analytics 4 (gtag.js).
// AUCUN composant ne doit appeler window.gtag directement : tout passe ici.
//
// Compte Google Ads : AW-489386530
// Flux de données GA4 : G-PRJXWJVPJY
// Les libellés de conversion sont configurables par env (NEXT_PUBLIC_*),
// avec repli sur les valeurs réelles vérifiées via l'API Google Ads.

export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-489386530";

export const GA4_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID || "G-PRJXWJVPJY";

// send_to = `${GOOGLE_ADS_ID}/${label}`
export const CONVERSION_LABELS = {
  doctolib:
    process.env.NEXT_PUBLIC_GADS_LABEL_DOCTOLIB || "vv2rCMX0zqUZEKLkrekB",
  form: process.env.NEXT_PUBLIC_GADS_LABEL_FORM || "B7wACIrTz6UZEKLkrekB",
  phone: process.env.NEXT_PUBLIC_GADS_LABEL_PHONE || "QeBlCO2M0KUZEKLkrekB",
} as const;

export type ConversionKind = keyof typeof CONVERSION_LABELS;

// Événements GA4 envoyés en parallèle des conversions Google Ads.
// Ne pas les importer dans Google Ads : chaque contact y serait compté deux fois.
const GA4_EVENTS: Record<ConversionKind, string> = {
  doctolib: "click_doctolib",
  form: "generate_lead",
  phone: "click_phone",
};

// Kill-switch : le tracking est actif seulement si un ID est présent.
// (Permet de désactiver proprement en preview/staging via env si besoin.)
export const ANALYTICS_ENABLED =
  process.env.NEXT_PUBLIC_ANALYTICS_ENABLED !== "false" &&
  Boolean(GOOGLE_ADS_ID);

// Garde universelle : SSR-safe + gtag réellement chargé (consentement / bloqueur).
function canTrack(): boolean {
  return (
    ANALYTICS_ENABLED &&
    typeof window !== "undefined" &&
    typeof window.gtag === "function"
  );
}

// Page vue GA4 d'une navigation interne (App Router, sans rechargement).
// La page vue du chargement initial part du gtag('config', ...).
export function trackPageView() {
  if (!canTrack()) return;

  window.gtag("event", "page_view", {
    send_to: GA4_MEASUREMENT_ID,
    page_location: window.location.href,
    page_title: document.title,
  });
}

// Déduplication temporelle : un même type de conversion déclenché plusieurs
// fois en < DEDUP_MS (double-clic sur tel:, re-clic Doctolib) n'envoie qu'un
// seul hit. Protège la donnée indépendamment du réglage de comptage Google Ads.
const DEDUP_MS = 1500;
const lastSent: Partial<Record<ConversionKind, number>> = {};

/**
 * Envoie une conversion à Google Ads et l'événement correspondant à GA4.
 * @param kind  doctolib | form | phone
 */
export function trackConversion(kind: ConversionKind) {
  if (!canTrack()) return;

  const now = Date.now();
  const previous = lastSent[kind];
  if (previous !== undefined && now - previous < DEDUP_MS) return;
  lastSent[kind] = now;

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABELS[kind]}`,
  });
  window.gtag("event", GA4_EVENTS[kind], { send_to: GA4_MEASUREMENT_ID });
}
