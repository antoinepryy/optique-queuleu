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

      // Individual brand pages (izipizi, minima, modo, nike, noego, osmose, brett-eyewear, caroline-abram, clement-lunetier, olivier-peoples, …)
      { source: "/marques/:slug+", destination: "/marques", permanent: true },

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
      { source: "/precommande-lentilles", destination: "/lentilles", permanent: true },
      { source: "/paiement-flexible-alma", destination: "/", permanent: true },

      // WP author archives
      { source: "/author/:path*", destination: "/", permanent: true },

      // /wper.php handled by middleware.ts (strips injected query string)
    ];
  },
};

export default nextConfig;
