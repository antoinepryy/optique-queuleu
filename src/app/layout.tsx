import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
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
    icon: "/images/logo/favicon.png",
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
        <Header />
        <main>{children}</main>
        <Footer />
        <PromoBanner />
      </body>
    </html>
  );
}
