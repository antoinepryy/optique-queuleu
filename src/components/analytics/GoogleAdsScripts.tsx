"use client";

import Script from "next/script";
import { GOOGLE_ADS_ID, ANALYTICS_ENABLED } from "@/lib/gtag";

// Charge gtag.js et initialise le Consent Mode v2 en "denied" par défaut
// (advanced mode) AVANT le gtag('config', ...). L'ordre est garanti par le
// dataLayer, même si la librairie externe se charge en async.
export default function GoogleAdsScripts() {
  if (!ANALYTICS_ENABLED) return null;

  return (
    <>
      <Script
        id="gtag-lib"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
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
          gtag('js', new Date());
          gtag('config', '${GOOGLE_ADS_ID}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}
