import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Magasin",
  description:
    "Situé à Metz, votre magasin Optique Queuleu vous propose des services optiques sur mesure !",
};

const avantages = [
  "Examen de vue gratuit",
  "Opticien à domicile",
  "Conseils personnalisés",
  "Prise de rendez-vous adaptée aux travailleurs frontaliers",
  "Paiements en 3 fois sans frais !",
  "Tiers payant : simplifiez vos démarches administratives !",
  "Partenaires mutuelles",
  "Équipement de sport",
  "Verres fabriqués en France",
  "Produits certifiés",
  "Garantie adaptation",
];

export default function MagasinPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-64 items-center pt-20 sm:h-80">
        <Image
          src="/images/boutique/facade.jpg"
          alt="Magasin Optique Queuleu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            Notre magasin
          </h1>
          <nav className="mt-4 text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Magasin</span>
          </nav>
        </div>
      </section>

      {/* Presentation */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Vos spécialistes vous conseillent
              </p>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Découvrez Optique Queuleu, votre adresse incontournable pour
                tous vos besoins en matière de vision. Implantés au
                c&oelig;ur d&apos;un quartier dynamique, nous sommes fiers de
                vous offrir une expérience optique exceptionnelle.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Que vous cherchiez des lunettes de vue, des lentilles de
                contact, ou des lunettes de soleil tendance, notre équipe
                expérimentée est là pour vous guider à chaque étape. Nous
                mettons l&apos;accent sur le service personnalisé et la
                satisfaction du client, en combinant expertise technique avec une
                sélection diversifiée de montures de créateurs et de
                technologies de correction visuelle de pointe.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Explorez notre gamme de produits en ligne ou rendez-nous visite
                en magasin pour une expérience optique sur mesure. Bénéficiez de
                notre prise de rendez-vous simple et rapide, directement sur
                Doctolib. Choisissez un motif de consultation, une date, un
                horaire, et le tour est joué !
              </p>
              <p className="mt-4 font-semibold text-primary">
                Vous êtes frontalier ou travaillez tard le soir ? Nous nous
                adaptons à votre emploi du temps chargé en vous proposant des
                rendez-vous jusqu&apos;à 22h !
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src="/images/boutique/magasin.jpg" alt="Magasin" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src="/images/boutique/interieur-2.jpg" alt="Intérieur" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src="/images/boutique/interieur-3.jpg" alt="Conseil" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image src="/images/boutique/choix.jpg" alt="Choix" fill className="object-cover" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services & Avantages */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-accent">
                Des services optiques sur mesure !
              </p>
              <SectionTitle>Les avantages Optique Queuleu</SectionTitle>
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {avantages.map((avantage) => (
                <div
                  key={avantage}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-5"
                >
                  <svg
                    className="h-5 w-5 shrink-0 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium text-foreground">
                    {avantage}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal className="stagger-children">
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
                <p className="text-muted-foreground">
                  Chez Optique Queuleu, nous sommes fiers de vous proposer une
                  sélection exclusive de verres fabriqués en France, alliant
                  expertise artisanale et technologies de pointe pour une qualité
                  inégalée.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
                <p className="text-muted-foreground">
                  Profitez de nos examens de vue gratuits, réalisés par nos
                  opticiens expérimentés. Nous proposons également un service de
                  prêt de montures pour essayer plusieurs styles dans le confort de
                  votre foyer.
                </p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center">
                <p className="text-muted-foreground">
                  Une deuxième paire de lunettes à partir de seulement 1&euro;.
                  Nous vous offrons la possibilité de payer en 3 fois sans frais.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Parking */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle color="accent">Parking privé</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Nous disposons d&apos;un parking privé, totalement gratuit !
                Avancez jusqu&apos;à la porte de garage, ouverture automatique.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image src="/images/boutique/parking.jpg" alt="Parking privé" fill className="object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Doctolib CTA */}
      <section className="bg-muted py-24">
        <ScrollReveal className="reveal-scale">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
            <SectionTitle>Prendre rendez-vous</SectionTitle>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Prenez rendez-vous en toute simplicité sur Doctolib ! Choisissez
              l&apos;heure qui vous convient parmi nos créneaux disponibles et
              laissez-nous prendre soin de votre vision.
            </p>
            <p className="mt-4 font-semibold text-primary">
              On s&apos;occupe de vous jusqu&apos;à 22h !
            </p>
            <a
              href="https://www.doctolib.fr/opticien/metz/optique-queuleu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-light"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Prendre RDV sur Doctolib
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
