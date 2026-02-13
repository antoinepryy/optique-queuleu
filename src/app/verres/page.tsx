import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Verres",
  description:
    "Chez Optique Queuleu, nous mettons notre vision au service de la vôtre en vous proposant des verres Essilor, Zeiss, Seiko et Novacel d'une qualité supérieure.",
};

export default function VerresPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-64 items-center pt-20 sm:h-80">
        <Image
          src="/images/verriers/bandeau-marque.webp"
          alt="Nos verres"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            Nos verres
          </h1>
          <nav className="mt-4 text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Verres</span>
          </nav>
        </div>
      </section>

      {/* ZEISS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle>Le choix ZEISS</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Chez Optique Queuleu, notre priorité absolue est de vous offrir
                une vision exceptionnelle et une expérience client inégalée.
                C&apos;est pourquoi nous sommes ravis de vous annoncer notre
                partenariat avec ZEISS, un leader mondial reconnu.
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Innovation et Expertise
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    ZEISS est à la pointe de l&apos;innovation depuis plus de
                    170 ans. Leur engagement envers la recherche et le
                    développement se traduit par des produits de haute
                    technologie qui répondent aux besoins spécifiques de chaque
                    porteur de lunettes.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Qualité et Précision
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Les verres ZEISS sont synonymes de précision et de qualité.
                    Grâce à des technologies de pointe, ils offrent une clarté et
                    une netteté inégalées, vous permettant de profiter d&apos;une
                    vision parfaite dans toutes les situations.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Confort et Personnalisation
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    ZEISS propose des solutions personnalisées adaptées à votre
                    style de vie. Que vous ayez besoin de verres pour la
                    conduite, le travail sur ordinateur, ou des activités en
                    extérieur, nous avons les produits qu&apos;il vous faut.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="flex items-center justify-center rounded-2xl bg-muted p-12">
                <Image
                  src="/images/verriers/zeiss.jpg"
                  alt="ZEISS"
                  width={300}
                  height={150}
                  className="h-auto w-full max-w-[300px] object-contain"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Essilor */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <div className="flex items-center justify-center rounded-2xl bg-white p-12 lg:order-first">
                <Image
                  src="/images/verriers/essilor-logo.png"
                  alt="Essilor"
                  width={300}
                  height={150}
                  className="h-auto w-full max-w-[300px] object-contain"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <SectionTitle>Le choix Essilor</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Leader dans la production de verres par sa qualité et sa
                technique constamment en avance sur son temps, Essilor est un
                partenaire de choix pour la qualité de leurs verres. Optique
                Queuleu est fier de vous faire découvrir ses spécificités.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Faire le choix des solutions Essilor, ce n&apos;est pas
                seulement choisir le leader mondial des verres de lunettes.
                C&apos;est aussi choisir les verres d&apos;une entreprise
                engagée et porteuse d&apos;une mission : améliorer la vue pour
                améliorer la vie. De notre département Recherche et
                Développement, qui s&apos;évertue à améliorer la correction
                visuelle et la protection de votre vue par ses innovations
                constantes, aux services dédiés qui vous conseillent et vous
                accompagnent jour après jour pour trouver la solution qui vous
                conviendra le mieux&hellip; C&apos;est le tout Essilor qui
                s&apos;engage en faveur de votre santé visuelle.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Seiko */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <ScrollReveal className="reveal-left">
              <SectionTitle>Le choix Seiko</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Nos yeux subissent de plus en plus l&apos;exposition aux outils
                digitaux. C&apos;est pourquoi Seiko a décidé de repenser les
                verres progressifs pour qu&apos;ils s&apos;adaptent au mieux à
                nos styles de vie. Il renforce son intérêt pour
                l&apos;éco-responsabilité et la qualité de ses services, en
                proposant des verres disponibles en fabrication française et en
                obtenant la certification Origine France Garantie.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Il place la précision au c&oelig;ur de sa stratégie, c&apos;est
                pourquoi il offre 3 ans de garantie sur tous les types de
                verre*. Faire le choix Seiko, c&apos;est faire confiance aux 95%
                des 3,5 millions de Français(es) ayant déjà adopté ces verres.
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                *sous réserve de posséder la carte d&apos;authenticité.
              </p>
            </ScrollReveal>
            <ScrollReveal className="reveal-right">
              <div className="flex items-center justify-center rounded-2xl bg-muted p-12">
                <Image
                  src="/images/marques/seiko.png"
                  alt="Seiko"
                  width={300}
                  height={150}
                  className="h-auto w-full max-w-[300px] object-contain"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Novacel Mega Optic */}
      <section className="bg-muted py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="reveal-scale">
            <div className="mx-auto max-w-3xl text-center">
              <SectionTitle>Le choix Novacel Mega Optic</SectionTitle>
              <p className="mt-6 leading-relaxed text-muted-foreground">
                Mega Optic, c&apos;est avant tout une entreprise à taille humaine,
                qui place les valeurs de simplicité, de convivialité et de
                disponibilité au c&oelig;ur de son travail. En plus de proposer
                des verres qualitatifs, il dispose de la norme ISO 14001,
                témoignant d&apos;un engagement en faveur de l&apos;environnement
                et d&apos;actes d&apos;amélioration concernant celui-ci.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Parce que la qualité de la vue est primordiale, il était important
                pour nous de choisir un partenaire sérieux et fiable, tel que Mega
                Optic. Avec plus de 17 verres différents, il devient un
                laboratoire innovant dans la filière optique, et le premier à
                proposer un matériau recyclable à l&apos;infini.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
