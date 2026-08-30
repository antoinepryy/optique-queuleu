// Typage global de fbq (Meta Pixel).
// Volontairement tolérant sur les args, mais tous les appels réels passent par
// src/lib/meta.ts (fortement typé) — jamais window.fbq en direct.

export {};

declare global {
  interface Window {
    fbq: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
      push?: unknown;
    };
    _fbq?: unknown;
  }
}
