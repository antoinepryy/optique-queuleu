"use client";

import { useEffect } from "react";
import { trackConversion, trackGa4Event } from "@/lib/gtag";
import { GOOGLE_MAPS_DIRECTIONS_URL, GOOGLE_REVIEWS_URL } from "@/lib/social";
import { trackMetaEvent } from "@/lib/meta";

// Écouteur de clic unique monté dans le layout. Capte tous les liens sortants
// Doctolib, les liens tel:, l'itinéraire et les avis Google où qu'ils soient (y compris dans des Server
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
        trackMetaEvent("phone");
        return;
      }

      // Doctolib : matching sur le domaine (le blog utilise un chemin différent).
      if (/^https?:\/\/(www\.)?doctolib\.fr\//i.test(href)) {
        trackConversion("doctolib");
        trackMetaEvent("doctolib");
        return;
      }

      // Itinéraire et avis Google : GA4 seul (voir trackGa4Event).
      if (href === GOOGLE_MAPS_DIRECTIONS_URL) {
        trackGa4Event("itinerary");
        return;
      }
      if (href === GOOGLE_REVIEWS_URL) {
        trackGa4Event("reviews");
      }
    };

    // capture:true → on voit le clic même si un handler enfant fait stopPropagation.
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
