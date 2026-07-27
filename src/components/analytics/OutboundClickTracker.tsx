"use client";

import { useEffect } from "react";
import { trackConversion } from "@/lib/gtag";

// Écouteur de clic unique monté dans le layout. Capte tous les liens sortants
// Doctolib et les liens tel: où qu'ils soient (y compris dans des Server
// Components), sans avoir à réécrire chaque page.
export default function OutboundClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // Clic gauche seul (ignore clic milieu / modificateurs = comportement natif).
      if (e.button !== 0) return;

      const target = e.target as Element | null;
      const anchor = target?.closest?.("a") as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";
      if (!href) return;

      if (href.startsWith("tel:")) {
        trackConversion("phone");
        return;
      }

      // Doctolib : matching sur le domaine (le blog utilise un chemin différent).
      if (/^https?:\/\/(www\.)?doctolib\.fr\//i.test(href)) {
        trackConversion("doctolib");
      }
    };

    // capture:true → on voit le clic même si un handler enfant fait stopPropagation.
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
