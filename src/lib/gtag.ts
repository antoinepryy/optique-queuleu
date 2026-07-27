// Couche unique d'accès à Google Ads (gtag.js).
// AUCUN composant ne doit appeler window.gtag directement : tout passe ici.
//
// Compte Google Ads : AW-489386530
// Les libellés de conversion sont configurables par env (NEXT_PUBLIC_*),
// avec repli sur les valeurs réelles vérifiées via l'API Google Ads.

export const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-489386530";

// send_to = `${GOOGLE_ADS_ID}/${label}`
export const CONVERSION_LABELS = {
  doctolib:
    process.env.NEXT_PUBLIC_GADS_LABEL_DOCTOLIB || "vv2rCMX0zqUZEKLkrekB",
  form: process.env.NEXT_PUBLIC_GADS_LABEL_FORM || "B7wACIrTz6UZEKLkrekB",
  phone: process.env.NEXT_PUBLIC_GADS_LABEL_PHONE || "QeBlCO2M0KUZEKLkrekB",
} as const;

export type ConversionKind = keyof typeof CONVERSION_LABELS;

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

/**
 * Envoie une conversion Google Ads.
 * @param kind      doctolib | form | phone
 * @param onComplete callback exécuté APRÈS l'envoi (ou immédiatement si tracking
 *                   indisponible). Toujours appelé une seule fois — utile pour
 *                   enchaîner une navigation sans jamais bloquer l'UX.
 */
export function trackConversion(kind: ConversionKind, onComplete?: () => void) {
  if (!canTrack()) {
    onComplete?.();
    return;
  }

  let done = false;
  const fireOnce = () => {
    if (done) return;
    done = true;
    onComplete?.();
  };

  window.gtag("event", "conversion", {
    send_to: `${GOOGLE_ADS_ID}/${CONVERSION_LABELS[kind]}`,
    event_callback: fireOnce,
  });

  // Filet de sécurité : si le hit réseau échoue/traîne, on n'attend pas.
  setTimeout(fireOnce, 1200);
}
