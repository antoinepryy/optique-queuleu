import { GOOGLE_MAPS_DIRECTIONS_URL } from "@/lib/social";

// Bouton « Itinéraire » vers Google Maps. Vrai lien <a> : l'écouteur global
// OutboundClickTracker le reconnaît et envoie click_itinerary à GA4.
export default function ItineraryButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={GOOGLE_MAPS_DIRECTIONS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Itinéraire vers Optique Queuleu, 28 rue de Queuleu à Metz, sur Google Maps"
      className={`inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className}`}
    >
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      Itinéraire
    </a>
  );
}
