import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions Legales | Optique Queuleu",
  description:
    "Mentions legales du site Optique Queuleu, opticien a Metz. Informations sur l'editeur, l'hebergeur, la protection des donnees personnelles et les cookies.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mentions Legales - Optique Queuleu",
    description:
      "Mentions legales du site Optique Queuleu, opticien a Metz.",
    url: "https://www.optiquequeuleu.com/mentions-legales",
    publisher: {
      "@type": "Organization",
      name: "Optique Queuleu 2.0",
      url: "https://www.optiquequeuleu.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "28 Rue de Queuleu",
        addressLocality: "Metz",
        postalCode: "57070",
        addressCountry: "FR",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative flex h-48 items-center bg-primary pt-20 sm:h-56">
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-3xl font-bold uppercase tracking-[0.15em] text-white sm:text-4xl">
            Mentions l&eacute;gales
          </h1>
          <nav
            className="mt-4 text-sm text-white/70"
            aria-label="Fil d'Ariane"
          >
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2" aria-hidden="true">
              &gt;
            </span>
            <span className="text-white">Mentions l&eacute;gales</span>
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          {/* ---------------------------------------------------------------- */}
          {/* 1. Editeur du site */}
          {/* ---------------------------------------------------------------- */}
          <article aria-labelledby="editeur-heading">
            <h2
              id="editeur-heading"
              className="text-2xl font-bold uppercase tracking-wider text-primary"
            >
              1. &Eacute;diteur du site
            </h2>
            <div className="mt-6 space-y-1 text-sm leading-relaxed text-foreground">
              <p>
                Le site{" "}
                <strong className="text-primary">
                  www.optiquequeuleu.com
                </strong>{" "}
                est &eacute;dit&eacute; par&nbsp;:
              </p>
              <ul className="mt-4 list-none space-y-2 pl-0">
                <li>
                  <strong>Raison sociale&nbsp;:</strong> OPTIQUE QUEULEU 2.0
                </li>
                <li>
                  <strong>Forme juridique&nbsp;:</strong> Soci&eacute;t&eacute;
                  par actions simplifi&eacute;e (SAS)
                </li>
                <li>
                  <strong>Capital social&nbsp;:</strong> 5&nbsp;000&nbsp;&euro;
                </li>
                <li>
                  <strong>Si&egrave;ge social&nbsp;:</strong> 28 Rue de Queuleu,
                  57070 Metz, France
                </li>
                <li>
                  <strong>SIREN&nbsp;:</strong> 882 866 221
                </li>
                <li>
                  <strong>SIRET&nbsp;:</strong> 882 866 221 00014
                </li>
                <li>
                  <strong>RCS&nbsp;:</strong> Metz B 882 866 221
                </li>
                <li>
                  <strong>Code NAF / APE&nbsp;:</strong> 4778A &ndash; Commerce
                  de d&eacute;tail d&apos;articles d&apos;optique
                </li>
                <li>
                  <strong>
                    N&deg; TVA intracommunautaire&nbsp;:
                  </strong>{" "}
                  FR 95 882 866 221
                </li>
                <li>
                  <strong>Pr&eacute;sident&nbsp;:</strong> Romain FILIPETTO
                </li>
                <li>
                  <strong>Directeur g&eacute;n&eacute;ral&nbsp;:</strong>{" "}
                  Jean-Pierre FILIPETTO
                </li>
                <li>
                  <strong>T&eacute;l&eacute;phone&nbsp;:</strong>{" "}
                  <a
                    href="tel:+33387373036"
                    className="text-primary hover:underline"
                  >
                    03 87 37 30 36
                  </a>
                </li>
                <li>
                  <strong>Email&nbsp;:</strong>{" "}
                  <a
                    href="mailto:optique.queuleu@orange.fr"
                    className="text-primary hover:underline"
                  >
                    optique.queuleu@orange.fr
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <hr className="my-12 border-gray-200" />

          {/* ---------------------------------------------------------------- */}
          {/* 2. Hebergeur */}
          {/* ---------------------------------------------------------------- */}
          <article aria-labelledby="hebergeur-heading">
            <h2
              id="hebergeur-heading"
              className="text-2xl font-bold uppercase tracking-wider text-primary"
            >
              2. H&eacute;bergeur
            </h2>
            <div className="mt-6 space-y-1 text-sm leading-relaxed text-foreground">
              <p>Le site est h&eacute;berg&eacute; par&nbsp;:</p>
              <ul className="mt-4 list-none space-y-2 pl-0">
                <li>
                  <strong>Raison sociale&nbsp;:</strong> Vercel Inc.
                </li>
                <li>
                  <strong>Adresse&nbsp;:</strong> 650 California St, Floor 7,
                  Suite 06-104, San Francisco, CA 94108, &Eacute;tats-Unis
                </li>
                <li>
                  <strong>Contact&nbsp;:</strong>{" "}
                  <a
                    href="https://vercel.com/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    vercel.com/contact
                  </a>
                </li>
                <li>
                  <strong>Site web&nbsp;:</strong>{" "}
                  <a
                    href="https://vercel.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://vercel.com
                  </a>
                </li>
              </ul>
            </div>
          </article>

          <hr className="my-12 border-gray-200" />

          {/* ---------------------------------------------------------------- */}
          {/* 3. Directeur de la publication */}
          {/* ---------------------------------------------------------------- */}
          <article aria-labelledby="directeur-heading">
            <h2
              id="directeur-heading"
              className="text-2xl font-bold uppercase tracking-wider text-primary"
            >
              3. Directeur de la publication
            </h2>
            <div className="mt-6 text-sm leading-relaxed text-foreground">
              <p>
                Le directeur de la publication est{" "}
                <strong>Romain FILIPETTO</strong>, en qualit&eacute; de
                Pr&eacute;sident de la soci&eacute;t&eacute; OPTIQUE QUEULEU
                2.0.
              </p>
            </div>
          </article>

          <hr className="my-12 border-gray-200" />

          {/* ---------------------------------------------------------------- */}
          {/* 4. Propriete intellectuelle */}
          {/* ---------------------------------------------------------------- */}
          <article aria-labelledby="propriete-heading">
            <h2
              id="propriete-heading"
              className="text-2xl font-bold uppercase tracking-wider text-primary"
            >
              4. Propri&eacute;t&eacute; intellectuelle
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground">
              <p>
                L&apos;ensemble du contenu du site www.optiquequeuleu.com
                (textes, images, vid&eacute;os, logos, ic&ocirc;nes, sons,
                logiciels, mise en page, base de donn&eacute;es) est la
                propri&eacute;t&eacute; exclusive de la soci&eacute;t&eacute;
                OPTIQUE QUEULEU 2.0 ou de ses partenaires et est prot&eacute;g&eacute;
                par les lois fran&ccedil;aises et internationales relatives
                &agrave; la propri&eacute;t&eacute; intellectuelle.
              </p>
              <p>
                Toute reproduction, repr&eacute;sentation, modification,
                publication, adaptation, totale ou partielle, de l&apos;un
                quelconque de ces &eacute;l&eacute;ments, quel que soit le moyen
                ou le proc&eacute;d&eacute; utilis&eacute;, est interdite sans
                l&apos;autorisation &eacute;crite pr&eacute;alable de la
                soci&eacute;t&eacute; OPTIQUE QUEULEU 2.0.
              </p>
              <p>
                Toute exploitation non autoris&eacute;e du site ou de l&apos;un
                quelconque de ses &eacute;l&eacute;ments sera
                consid&eacute;r&eacute;e comme constitutive d&apos;une
                contrefa&ccedil;on et poursuivie conform&eacute;ment aux
                dispositions des articles L.335-2 et suivants du Code de la
                Propri&eacute;t&eacute; Intellectuelle.
              </p>
            </div>
          </article>

          <hr className="my-12 border-gray-200" />

          {/* ---------------------------------------------------------------- */}
          {/* 5. Protection des donnees personnelles (RGPD) */}
          {/* ---------------------------------------------------------------- */}
          <article aria-labelledby="rgpd-heading">
            <h2
              id="rgpd-heading"
              className="text-2xl font-bold uppercase tracking-wider text-primary"
            >
              5. Protection des donn&eacute;es personnelles
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground">
              <p>
                Conform&eacute;ment au R&egrave;glement G&eacute;n&eacute;ral
                sur la Protection des Donn&eacute;es (RGPD &ndash;
                R&egrave;glement UE 2016/679) et &agrave; la loi Informatique et
                Libert&eacute;s du 6 janvier 1978 modifi&eacute;e, la
                soci&eacute;t&eacute; OPTIQUE QUEULEU 2.0 s&apos;engage
                &agrave; prot&eacute;ger les donn&eacute;es personnelles de ses
                utilisateurs.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-accent">
                Responsable du traitement
              </h3>
              <p>
                Le responsable du traitement des donn&eacute;es est la
                soci&eacute;t&eacute; OPTIQUE QUEULEU 2.0, repr&eacute;sent&eacute;e
                par Romain FILIPETTO, Pr&eacute;sident.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-accent">
                Donn&eacute;es collect&eacute;es
              </h3>
              <p>
                Dans le cadre de l&apos;utilisation du site, les donn&eacute;es
                suivantes peuvent &ecirc;tre collect&eacute;es&nbsp;:
              </p>
              <ul className="ml-4 list-disc space-y-1 pl-4">
                <li>
                  <strong>Via le formulaire de contact&nbsp;:</strong> nom,
                  pr&eacute;nom, num&eacute;ro de t&eacute;l&eacute;phone,
                  adresse e-mail, message.
                </li>
                <li>
                  <strong>Via Google Maps&nbsp;:</strong> des donn&eacute;es de
                  navigation peuvent &ecirc;tre collect&eacute;es par Google lors
                  de l&apos;affichage de la carte int&eacute;gr&eacute;e
                  (iframe).
                </li>
              </ul>

              <h3 className="mt-6 text-lg font-semibold text-accent">
                Finalit&eacute; du traitement
              </h3>
              <p>
                Les donn&eacute;es collect&eacute;es via le formulaire de
                contact sont utilis&eacute;es uniquement pour r&eacute;pondre
                &agrave; votre demande et assurer le suivi de la relation
                commerciale qui peut en d&eacute;couler. La base l&eacute;gale
                du traitement est l&apos;ex&eacute;cution de mesures
                pr&eacute;contractuelles prises &agrave; votre demande
                (article 6.1.b du RGPD).
              </p>

              <h3 className="mt-6 text-lg font-semibold text-accent">
                Sous-traitants et transferts hors UE
              </h3>
              <p>
                L&apos;envoi des messages du formulaire de contact est
                assur&eacute; par le service{" "}
                <strong>EmailJS</strong> (EmailJS Inc., soci&eacute;t&eacute;
                am&eacute;ricaine). Les donn&eacute;es transitent donc par des
                serveurs situ&eacute;s aux &Eacute;tats-Unis, encadr&eacute;es
                par les clauses contractuelles types de la Commission
                europ&eacute;enne et le cadre{" "}
                <em>EU&ndash;US Data Privacy Framework</em>. Plus
                d&apos;informations&nbsp;:{" "}
                <a
                  href="https://www.emailjs.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  politique de confidentialit&eacute; EmailJS
                </a>
                .
              </p>
              <p>
                L&apos;h&eacute;bergement du site est assur&eacute; par{" "}
                <strong>Vercel Inc.</strong> (&Eacute;tats-Unis), dans les
                m&ecirc;mes conditions contractuelles de conformit&eacute;
                RGPD.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-accent">
                Dur&eacute;e de conservation
              </h3>
              <p>
                Les donn&eacute;es personnelles sont conserv&eacute;es pendant
                une dur&eacute;e maximale de 3 ans &agrave; compter du dernier
                contact avec l&apos;utilisateur, sauf obligation l&eacute;gale
                contraire.
              </p>

              <h3 className="mt-6 text-lg font-semibold text-accent">
                Vos droits
              </h3>
              <p>
                Conform&eacute;ment au RGPD, vous disposez des droits
                suivants&nbsp;:
              </p>
              <ul className="ml-4 list-disc space-y-1 pl-4">
                <li>Droit d&apos;acc&egrave;s &agrave; vos donn&eacute;es</li>
                <li>Droit de rectification</li>
                <li>
                  Droit &agrave; l&apos;effacement (&laquo;&nbsp;droit &agrave;
                  l&apos;oubli&nbsp;&raquo;)
                </li>
                <li>Droit &agrave; la limitation du traitement</li>
                <li>Droit &agrave; la portabilit&eacute;</li>
                <li>Droit d&apos;opposition</li>
              </ul>
              <p>
                Pour exercer ces droits, vous pouvez nous contacter par
                email &agrave;{" "}
                <a
                  href="mailto:optique.queuleu@orange.fr"
                  className="text-primary hover:underline"
                >
                  optique.queuleu@orange.fr
                </a>{" "}
                ou par courrier &agrave; l&apos;adresse du si&egrave;ge social.
              </p>
              <p>
                En cas de litige, vous pouvez &eacute;galement introduire une
                r&eacute;clamation aupr&egrave;s de la{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Commission Nationale de l&apos;Informatique et des
                  Libert&eacute;s (CNIL)
                </a>
                .
              </p>
            </div>
          </article>

          <hr className="my-12 border-gray-200" />

          {/* ---------------------------------------------------------------- */}
          {/* 6. Cookies */}
          {/* ---------------------------------------------------------------- */}
          <article aria-labelledby="cookies-heading">
            <h2
              id="cookies-heading"
              className="text-2xl font-bold uppercase tracking-wider text-primary"
            >
              6. Cookies
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground">
              <p>
                Le site www.optiquequeuleu.com peut utiliser des cookies
                techniques n&eacute;cessaires &agrave; son bon fonctionnement.
              </p>
              <p>
                Par ailleurs, l&apos;int&eacute;gration de la carte Google Maps
                (via iframe) est susceptible de d&eacute;poser des cookies tiers
                provenant de Google. Ces cookies sont soumis &agrave; la
                politique de confidentialit&eacute; de Google. Pour en savoir
                plus, consultez la{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  politique de confidentialit&eacute; de Google
                </a>
                .
              </p>
              <p>
                Vous pouvez &agrave; tout moment param&eacute;trer votre
                navigateur pour refuser ou supprimer les cookies. La
                d&eacute;sactivation des cookies peut toutefois limiter
                l&apos;acc&egrave;s &agrave; certaines fonctionnalit&eacute;s du
                site (notamment l&apos;affichage de la carte).
              </p>
            </div>
          </article>

          <hr className="my-12 border-gray-200" />

          {/* ---------------------------------------------------------------- */}
          {/* 7. Limitation de responsabilite */}
          {/* ---------------------------------------------------------------- */}
          <article aria-labelledby="responsabilite-heading">
            <h2
              id="responsabilite-heading"
              className="text-2xl font-bold uppercase tracking-wider text-primary"
            >
              7. Limitation de responsabilit&eacute;
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground">
              <p>
                La soci&eacute;t&eacute; OPTIQUE QUEULEU 2.0 s&apos;efforce
                d&apos;assurer l&apos;exactitude et la mise &agrave; jour des
                informations diffus&eacute;es sur le site, mais ne saurait
                &ecirc;tre tenue responsable des erreurs, omissions ou
                r&eacute;sultats obtenus suite &agrave; une mauvaise utilisation
                de ces informations.
              </p>
              <p>
                La soci&eacute;t&eacute; OPTIQUE QUEULEU 2.0 ne pourra
                &ecirc;tre tenue responsable des dommages directs ou indirects
                caus&eacute;s au mat&eacute;riel de l&apos;utilisateur lors de
                l&apos;acc&egrave;s au site.
              </p>
              <p>
                Le site peut contenir des liens hypertextes vers d&apos;autres
                sites. La soci&eacute;t&eacute; OPTIQUE QUEULEU 2.0 ne dispose
                d&apos;aucun moyen de contr&ocirc;ler le contenu de ces sites
                tiers et n&apos;assume aucune responsabilit&eacute; &agrave; cet
                &eacute;gard.
              </p>
            </div>
          </article>

          <hr className="my-12 border-gray-200" />

          {/* ---------------------------------------------------------------- */}
          {/* 8. Droit applicable */}
          {/* ---------------------------------------------------------------- */}
          <article aria-labelledby="droit-heading">
            <h2
              id="droit-heading"
              className="text-2xl font-bold uppercase tracking-wider text-primary"
            >
              8. Droit applicable
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground">
              <p>
                Les pr&eacute;sentes mentions l&eacute;gales sont r&eacute;gies
                par le droit fran&ccedil;ais. En cas de litige, les tribunaux
                comp&eacute;tents de Metz seront seuls comp&eacute;tents.
              </p>
            </div>
          </article>

          <hr className="my-12 border-gray-200" />

          {/* ---------------------------------------------------------------- */}
          {/* 9. Credits */}
          {/* ---------------------------------------------------------------- */}
          <article aria-labelledby="credits-heading">
            <h2
              id="credits-heading"
              className="text-2xl font-bold uppercase tracking-wider text-primary"
            >
              9. Cr&eacute;dits
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground">
              <p>
                <strong>Conception et d&eacute;veloppement du site&nbsp;:</strong>{" "}
                OPTIQUE QUEULEU 2.0
              </p>
              <p>
                <strong>Photographies&nbsp;:</strong> OPTIQUE QUEULEU 2.0 et
                marques partenaires. Tous droits r&eacute;serv&eacute;s.
              </p>
            </div>
          </article>

          {/* Back to top / contact CTA */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Derni&egrave;re mise &agrave; jour&nbsp;: Avril 2026
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
