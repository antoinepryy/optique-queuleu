import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Actualités, nouveautés et conseils optiques d'Optique Queuleu, votre opticien à Metz.",
};

const articles = [
  {
    title:
      "Nouvelle façade, nouvelles collections : découvrez Optique Queuleu autrement",
    date: "11 septembre 2025",
    excerpt:
      "Optique Queuleu fait peau neuve ! Nouvelle façade, nouvel accès… et surtout de nouvelles collections exclusives : Eleven Paris pour les ados, Star Wars, Barbie et Tête à Lunettes pour les enfants...",
    image: "/images/boutique/facade.jpg",
  },
  {
    title: "Vos ordonnances en 48h avec Lyleoo",
    date: "30 juin 2025",
    excerpt:
      "Vous avez besoin de lunettes ou de lentilles, mais pas de rendez-vous chez l'ophtalmo avant des semaines ? Avec Lyleoo, notre partenaire télé-ophtalmologie, obtenez votre prescription en 48h.",
    image: "/images/boutique/optique.jpg",
  },
  {
    title: "Soldes d'été 2025",
    date: "25 juin 2025",
    excerpt:
      "Semaines privilèges chez Optique Queuleu ! Du 25 juin au 22 juillet 2025 : jusqu'à -50% sur une sélection de montures, 2e paire à -50% ou offerte, examen de vue offert...",
    image: "/images/produits/collection.jpg",
  },
  {
    title:
      "Impression 3D de pièces de lunettes à Metz – Optique Queuleu innove avec OOMADE",
    date: "23 juin 2025",
    excerpt:
      "Une branche cassée ? Une pièce introuvable ? Ce n'est plus une fatalité. On recrée la pièce manquante en boutique grâce à l'impression 3D, en moins de 15 minutes.",
    image: "/images/boutique/interieur-4.jpg",
  },
  {
    title: "Découvrez nos dernières collections",
    date: "6 décembre 2024",
    excerpt:
      "TALLA : la perfection du design minimaliste. La marque TALLA se distingue par ses designs épurés et modernes. Conçues pour ceux qui recherchent des lunettes élégantes et fonctionnelles...",
    image: "/images/produits/talla.jpg",
  },
  {
    title:
      "Le masque de ski Izipizi : l'accessoire mode incontournable",
    date: "6 décembre 2024",
    excerpt:
      "Les fêtes de Noël approchent, et si vous cherchez le cadeau parfait pour un amateur de ski, nous avons la solution ! Le masque de ski Izipizi allie style et performance.",
    image: "/images/produits/izipizi-ski.jpg",
  },
  {
    title: "Où trouver des lunettes Moscot à Metz ?",
    date: "6 décembre 2024",
    excerpt:
      "Les lunettes sont bien plus qu'un simple accessoire. Si vous êtes à la recherche d'une paire intemporelle, les lunettes Moscot sont le choix idéal.",
    image: "/images/produits/moscot-miltzen.jpg",
  },
  {
    title: "Découvrez Kaleos : L'Essence de l'Art Lunetier",
    date: "22 mai 2024",
    excerpt:
      "Bienvenue chez Kaleos, la marque espagnole qui révolutionne l'univers de la lunetterie avec des créations où l'art, la mode et la qualité se rencontrent.",
    image: "/images/produits/galerie.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex h-64 items-center pt-20 sm:h-80">
        <Image
          src="/images/boutique/interieur-1.jpg"
          alt="Actualités Optique Queuleu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold uppercase tracking-[0.15em] text-white sm:text-5xl">
            Actualités
          </h1>
          <nav className="mt-4 text-sm text-white/70">
            <Link href="/" className="hover:text-white">
              Accueil
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">Blog</span>
          </nav>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal className="stagger-children">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <article
                  key={article.title}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-wider text-primary">
                      {article.date}
                    </p>
                    <h2 className="mt-2 text-lg font-semibold leading-snug text-foreground">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
