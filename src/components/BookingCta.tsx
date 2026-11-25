// Barre « Prendre rendez-vous » fixée en bas d'écran, sur mobile et tablette
// uniquement (le header desktop affiche déjà son propre bouton à partir de lg).
//
// Empilement en bas d'écran :
// - PromoBanner est masqué sous lg (une seule barre en bas sur mobile et
//   tablette) ; à partir de lg il reste collé au bas de l'écran. La barre se pose
//   au-dessus grâce à `bottom: var(--promo-banner-height)`, variable que
//   PromoBanner publie déjà sur <body> (0px quand il est fermé).
// - ConsentBanner (z-[60]) passe au-dessus de la barre (z-40) : tant qu'il est
//   affiché, il recouvre la barre et reste entièrement lisible et cliquable.
// - Un espaceur est rendu dans le flux, après le footer, pour que la barre ne
//   masque jamais le bas du footer (PromoBanner masqué : seule la barre).
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
        className="h-14 lg:hidden"
      />
      <div
        style={{ bottom: "var(--promo-banner-height, 0px)" }}
        className="fixed inset-x-0 z-40 flex h-14 items-center border-t border-white/10 bg-[#0b1d2c] px-4 lg:hidden"
      >
        <a
          href={DOCTOLIB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
