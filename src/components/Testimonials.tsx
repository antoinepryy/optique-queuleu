import SectionTitle from "@/components/SectionTitle";
import ScrollReveal from "@/components/ScrollReveal";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Optique+Queuleu/@49.1053,6.1977,17z/";

const reviews = [
  {
    name: "Tony",
    rating: 5,
    text: "Excellente boutique ! Le personnel est à la fois agréable et de très bon conseil. On y trouve de superbes lunettes, difficiles à dénicher chez d'autres opticiens.",
    date: "Il y a 5 mois",
  },
  {
    name: "Quentin M.",
    rating: 5,
    text: "Je recommande vivement Romain pour son professionnalisme et son accueil chaleureux ! Il prend le temps d'écouter ses clients et de conseiller les meilleures options adaptées à leurs besoins.",
    date: "Il y a 1 an",
  },
  {
    name: "Noémie S.",
    rating: 5,
    text: "Un grand merci à Romain, à Eric et plus généralement à l'ensemble de cette super équipe pour leur avis, accompagnement et professionnalisme dans le choix de cette première monture !",
    date: "Il y a 1 an",
  },
  {
    name: "Morgane P.",
    rating: 5,
    text: "Cliente depuis plusieurs années je recommande Optique Queuleu à 100%. Service et conseil de qualité. Très beau choix de monture et avec des marques que l'on ne trouve pas partout.",
    date: "Il y a 1 an",
  },
  {
    name: "Quentin K.",
    rating: 5,
    text: "Boutique avec un large choix de montures variées et originales. L'équipe est au petit soin avec sa clientèle et est surtout d'excellent conseil. Je recommande très chaudement !",
    date: "Il y a 1 an",
  },
  {
    name: "Sarah G.",
    rating: 5,
    text: "Optique Queuleu bénéficie d'une équipe à la fois compétente et chaleureuse. J'ai choisi mes nouvelles montures avec plaisir, grâce à leur large sélection. Au plaisir de revenir !",
    date: "Il y a 1 an",
  },
];

const AVERAGE_RATING = 4.8;
const TOTAL_REVIEWS = 62;

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      className={`h-5 w-5 ${filled ? "text-accent" : "text-gray-200"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function Testimonials() {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Optique Queuleu",
    address: {
      "@type": "PostalAddress",
      streetAddress: "28 Rue de Queuleu",
      addressLocality: "Metz",
      postalCode: "57070",
      addressCountry: "FR",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: AVERAGE_RATING.toString(),
      bestRating: "5",
      worstRating: "1",
      reviewCount: TOTAL_REVIEWS.toString(),
    },
  };

  return (
    <section
      className="relative overflow-hidden bg-muted py-28"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingSchema),
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 shadow-sm">
              <GoogleIcon />
              <span className="text-sm font-semibold text-foreground">
                Avis Google
              </span>
              <span className="flex items-center gap-1">
                <span className="text-sm font-bold text-accent">
                  {AVERAGE_RATING.toFixed(1)}
                </span>
                <StarIcon filled />
              </span>
              <span className="text-sm text-muted-foreground">
                ({TOTAL_REVIEWS} avis)
              </span>
            </div>

            <SectionTitle id="testimonials-heading">
              Ce que disent nos clients
            </SectionTitle>
          </div>
        </ScrollReveal>

        {/* Reviews grid */}
        <ScrollReveal className="stagger-children">
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Stars */}
                <div className="flex gap-0.5" aria-label={`Note : ${review.rating} sur 5`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} filled={i < review.rating} />
                  ))}
                </div>

                {/* Review text */}
                <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Author & date */}
                <div className="mt-5 flex items-center justify-between border-t border-gray-50 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-accent/10 text-sm font-bold text-primary">
                      {review.name.charAt(0)}
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {review.name}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {review.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-12 text-center">
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full border-2 border-primary bg-white px-8 py-4 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25"
            >
              <GoogleIcon />
              <span>Voir tous les avis sur Google</span>
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
