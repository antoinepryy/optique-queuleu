import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // WP "Collections" (portfolio) → /marques
      { source: "/collections", destination: "/marques", permanent: true },
      { source: "/collections/:path*", destination: "/marques", permanent: true },

      // WP "Boutique" (shop) → /marques
      { source: "/boutique", destination: "/marques", permanent: true },
      { source: "/boutique/:path*", destination: "/marques", permanent: true },

      // WP product pages
      { source: "/produit/:path*", destination: "/marques", permanent: true },
      { source: "/shopdetail/:path*", destination: "/marques", permanent: true },
      { source: "/category/:path*", destination: "/marques", permanent: true },

      // Old WP brand slugs that differ from new slugs
      { source: "/marques/isabelle-marant", destination: "/marques/isabel-marant", permanent: true },
      { source: "/marques/olivier-peoples", destination: "/marques/oliver-peoples", permanent: true },
      { source: "/marques/rousshile", destination: "/marques/roussilhe", permanent: true },
      { source: "/marques/julbo-2", destination: "/marques/julbo", permanent: true },
      { source: "/marques/lookino", destination: "/marques/lookkino", permanent: true },
      { source: "/marques/jos-eschanbash", destination: "/marques/jos-eschenbach", permanent: true },
      { source: "/marques/ancet-fayolle-a-metz-elegance-et-artisanat-en-lunetterie-de-luxe", destination: "/marques/ancet-fayolle", permanent: true },
      { source: "/marques/la-brique-la-violette", destination: "/marques/la-brique-et-la-violette", permanent: true },
      { source: "/marques/charles-stone-william-morris", destination: "/marques", permanent: true },

      // Brands removed from catalogue -> back to the marques index
      { source: "/marques/francois-pinton", destination: "/marques", permanent: true },
      { source: "/marques/volte-face", destination: "/marques", permanent: true },
      { source: "/marques/freakshow", destination: "/marques", permanent: true },
      { source: "/marques/mazette", destination: "/marques", permanent: true },
      { source: "/marques/lou-creation", destination: "/marques", permanent: true },
      { source: "/marques/charles-stone", destination: "/marques", permanent: true },
      { source: "/marques/kyme", destination: "/marques", permanent: true },
      { source: "/marques/carrera", destination: "/marques", permanent: true },
      { source: "/marques/eyewear-by-david-beckham", destination: "/marques", permanent: true },
      { source: "/marques/cebe", destination: "/marques", permanent: true },
      { source: "/marques/nike", destination: "/marques", permanent: true },
      { source: "/marques/brouillon-auto", destination: "/marques", permanent: true },

      // WP "Actualités" → /blog
      { source: "/actualites", destination: "/blog", permanent: true },
      {
        source: "/actualites/impression-3d-lunettes-oomade",
        destination: "/blog/impression-3d-lunettes-oomade",
        permanent: true,
      },
      {
        source: "/actualites/nouvelle-facade-nouvelles-collections",
        destination: "/blog/nouvelle-facade-nouvelles-collections",
        permanent: true,
      },
      { source: "/actualites/:path*", destination: "/blog", permanent: true },

      // Standalone WP article URLs → /blog/[matching-slug]
      {
        source: "/reparation-lunettes-impression-3d-metz",
        destination: "/blog/impression-3d-lunettes-oomade",
        permanent: true,
      },

      // WP-specific standalone pages
      { source: "/vision-minute-par-oomade", destination: "/vision-minute", permanent: true },
      // OOMADE merged into Vision Minute (same service)
      { source: "/oomade", destination: "/vision-minute", permanent: true },
      { source: "/precommande-lentilles", destination: "/lentilles", permanent: true },
      { source: "/paiement-flexible-alma", destination: "/", permanent: true },

      // WP author archives
      { source: "/author/:path*", destination: "/", permanent: true },

      // /wper.php handled by middleware.ts (strips injected query string)
    ];
  },
};

export default nextConfig;
