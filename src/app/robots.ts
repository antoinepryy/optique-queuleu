import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/wper.php",
          "/shopdetail/",
          "/produit/",
          "/category/",
          "/boutique/",
          "/collections/",
          "/actualites/",
          "/author/",
        ],
      },
    ],
    sitemap: "https://www.optiquequeuleu.com/sitemap.xml",
    host: "https://www.optiquequeuleu.com",
  };
}
