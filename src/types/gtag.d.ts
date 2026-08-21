// Typage global de gtag.js / dataLayer pour Google Ads.
// Volontairement tolérant sur les args, mais tous les appels réels
// passent par src/lib/gtag.ts (fortement typé) — jamais window.gtag en direct.

export {};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
