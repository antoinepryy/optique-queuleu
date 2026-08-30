"use client";

import Script from "next/script";
import { META_PIXEL_ID, META_ENABLED } from "@/lib/meta";

// Charge le Pixel Meta avec le consentement RÉVOQUÉ par défaut, en miroir du
// Consent Mode v2 de GoogleAdsScripts.
//
// L'ordre est ce qui rend l'ensemble conforme : `fbq('consent', 'revoke')` est
// appelé AVANT `init` et `track`. Tant que l'utilisateur n'a pas accepté, fbq
// met les appels en file d'attente sans rien envoyer à Meta ; un refus les y
// laisse indéfiniment. Le PageView est donc armé ici mais ne part qu'au
// « Accepter » de la bannière, qui appelle updateMetaConsent('granted').
//
// beforeInteractive, comme le snippet gtag : le stub doit exister avant
// l'hydratation, sinon le rejeu du consentement au montage de ConsentBanner
// arriverait avant fbq et serait perdu.
export default function MetaPixelScripts() {
  if (!META_ENABLED) return null;

  return (
    <>
      <Script id="meta-pixel-init" strategy="beforeInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('consent', 'revoke');
          fbq('init', '${META_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      {/*
        Pas de <noscript><img src="facebook.com/tr?..."></noscript> : ce pixel
        image part au premier rendu, sans passer par fbq, donc sans respecter le
        consentement révoqué. Il ne concerne que les visiteurs sans JavaScript,
        chez qui la bannière ne peut de toute façon pas s'afficher.
      */}
    </>
  );
}
