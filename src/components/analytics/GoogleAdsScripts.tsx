"use client";

import Script from "next/script";
import { GOOGLE_ADS_ID, ANALYTICS_ENABLED } from "@/lib/gtag";

// Charge gtag.js et initialise le Consent Mode v2 en "denied" par défaut
// (advanced mode) AVANT le gtag('config', ...). Le snippet d'init est en
// beforeInteractive : il s'exécute avant l'hydratation et donc avant tout
// useEffect (dont le rejeu du consentement), ce qui garantit l'ordre
// default(denied) -> update. La lib externe reste en afterInteractive : le
// stub dataLayer met les appels en file d'attente en attendant.
export default function GoogleAdsScripts() {
  if (!ANALYTICS_ENABLED) return null;

  return (
    <>
      <Script id="gtag-init" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = window.gtag || gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
          // Sans consentement : pas d'identifiants publicitaires dans les hits
          // (ads_data_redaction) et le gclid est propage via l'URL plutot que
          // par un cookie (url_passthrough) -> l'attribution reste possible.
          gtag('set', 'ads_data_redaction', true);
          gtag('set', 'url_passthrough', true);
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}', { send_page_view: false });
        `}
      </Script>
      <Script
        id="gtag-lib"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
    </>
  );
}
