import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sunspectrumenterprises.in"),

  title: {
    default: "Sunspectrum Enterprises | Solar, Water & EPC",
    template: "%s | Sunspectrum Enterprises",
  },

  description:
    "Solar, water treatment, pumping, electrical and EPC solutions across Karnataka.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Sunspectrum Enterprises",
    description:
      "Solar, water treatment, pumping, electrical and EPC solutions across Karnataka.",
    type: "website",
    url: "https://sunspectrumenterprises.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Sunspectrum Enterprises",
    url: "https://sunspectrumenterprises.in",
    telephone: "+918329298004",
    email: "sunspectrum01@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "No.124, Kasaba Hobli, Rayankere Post, Kote Hundi",
      addressLocality: "Mysuru",
      addressRegion: "Karnataka",
      postalCode: "570008",
      addressCountry: "IN",
    },

    openingHours: "Mo-Sa 09:00-20:00",
    areaServed: "Karnataka",
  };

  return (
    <html lang="en" className={`${manrope.variable} scroll-smooth`}>
      <body
        className={`${manrope.className} antialiased bg-[#f8f8f4] text-[#11211a]`}
      >
        <Header />

        {children}

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}