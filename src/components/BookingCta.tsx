// Barre « Prendre rendez-vous » fixée en bas d'écran, sur mobile et tablette
// uniquement (le header desktop affiche déjà son propre bouton à partir de lg).
//
// Empilement en bas d'écran :
// - PromoBanner (z-40) reste collé au bas de l'écran ; la barre se pose juste
//   au-dessus grâce à `bottom: var(--promo-banner-height)`, variable que
//   PromoBanner publie déjà sur <body> (0px quand il est fermé).
// - ConsentBanner (z-[60]) passe au-dessus de la barre (z-40) : tant qu'il est
//   affiché, il recouvre la barre et reste entièrement lisible et cliquable.
// - Un espaceur est rendu dans le flux, après le footer, pour que la barre ne
//   masque jamais le bas du footer. Sous 640px, <body> réserve déjà la hauteur
//   de PromoBanner (globals.css) : l'espaceur ne réserve que la barre. De 640px
//   à lg, <body> ne réserve rien : l'espaceur réserve la barre + PromoBanner.
//
// Le lien est un vrai <a href="https://www.doctolib.fr/..."> : l'écouteur
// global OutboundClickTracker le reconnaît et déclenche la conversion Doctolib
// (derrière le consentement), sans code de suivi ici.

export const DOCTOLIB_URL = "https://www.doctolib.fr/opticien/metz/optique-queuleu";

export default function BookingCta() {
  return (
    <>
      <div
        aria-hidden="true"
        className="h-16 sm:h-[calc(4rem+var(--promo-banner-height,0px))] lg:hidden"
      />
      <div
        style={{ bottom: "var(--promo-banner-height, 0px)" }}
        className="fixed inset-x-0 z-40 flex h-16 items-center border-t border-gray-200 bg-white px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden"
      >
        <a
          href={DOCTOLIB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          Prendre rendez-vous
        </a>
      </div>
    </>
  );
}
