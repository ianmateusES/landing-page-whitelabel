import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { brand } from "@/config";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://msworkout.com.br";

const pageTitle = brand.tagline?.trim()
  ? `${brand.name} — ${brand.tagline.trim()}`
  : brand.name;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s | ${brand.name}`,
  },
  description: `Consultoria Online de treino com ${brand.professionalName}. Planejamento 100% individualizado para hipertrofia, emagrecimento, performance e qualidade de vida. Suporte diário via WhatsApp.`,
  keywords: [
    brand.professionalName,
    brand.name,
    "consultoria online",
    "personal trainer online",
    "treino individualizado",
    "hipertrofia",
    "emagrecimento",
    "qualidade de vida",
    "musculação",
  ],
  openGraph: {
    title: pageTitle,
    description: `Consultoria Online com ${brand.professionalName}. Treino individualizado, suporte diário e resultados reais.`,
    images: [{ url: brand.images.og, width: 1200, height: 630 }],
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    images: [brand.images.og],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: `/brands/${brand.slug}/favicon.ico`, sizes: "any" },
      { url: `/brands/${brand.slug}/favicon.png`, type: "image/png", sizes: "32x32" },
      { url: `/brands/${brand.slug}/icon.png`, type: "image/png", sizes: "192x192" },
    ],
    apple: `/brands/${brand.slug}/apple-icon.png`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>
        <ThemeProvider colors={brand.colors} />
        {children}
      </body>
    </html>
  );
}
