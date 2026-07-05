import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://www.solvexengineering.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SOLVEX Engineering FZ LLC | MEP & Smart Infrastructure Engineering, UAE",
    template: "%s | SOLVEX Engineering FZ LLC",
  },
  description:
    "SOLVEX Engineering FZ LLC delivers premium Mechanical, Electrical & Plumbing (MEP), smart building technologies, energy management, testing & commissioning, and predictive maintenance solutions across the UAE and international markets.",
  keywords: [
    "MEP engineering UAE",
    "smart building systems Dubai",
    "testing and commissioning UAE",
    "energy management engineering",
    "predictive maintenance UAE",
    "industrial engineering Dubai",
    "engineering consultancy UAE",
  ],
  openGraph: {
    title: "SOLVEX Engineering FZ LLC | Engineering Smarter. Building Better.",
    description:
      "Premium MEP, smart infrastructure, energy management, and technical consulting across the UAE and international markets.",
    url: siteUrl,
    siteName: "SOLVEX Engineering FZ LLC",
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLVEX Engineering FZ LLC",
    description:
      "Premium MEP, smart infrastructure, and technical engineering consultancy in the UAE.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SOLVEX Engineering FZ LLC",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "SOLVEX Engineering FZ LLC delivers Mechanical, Electrical & Plumbing (MEP), smart building technologies, energy management, testing & commissioning, and predictive maintenance solutions across the UAE and international markets.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
