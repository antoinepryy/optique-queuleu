import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";
import SummerSaleStrip from "@/components/SummerSaleStrip";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.optiquequeuleu.com"),
  title: {
    default: "Optique Queuleu | Votre Opticien à Metz",
    template: "%s | Optique Queuleu",
  },
  description:
    "Optique Queuleu, votre opticien à Metz. Expertise, conseils personnalisés et large choix de montures pour toute la famille.",
  keywords: [
    "opticien",
    "Metz",
    "lunettes",
    "lentilles",
    "Queuleu",
    "optique",
    "montures",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: "LtwDrlDIo4qHGtn7YZXH3u9c1ROcNgKdGIQbKxDFtAg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} antialiased`}>
        {/* Pose `js` sur <html> avant tout rendu. Les animations de révélation
            au défilement ne masquent leur contenu que sous cette classe : si ce
            script ne s'exécute pas, la page reste lisible au lieu de rester
            vide. Doit demeurer le premier élément du body. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add("js")`,
          }}
        />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-primary">Aller au contenu</a>
        <SummerSaleStrip />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <PromoBanner />
      </body>
    </html>
  );
}
