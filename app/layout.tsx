import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/data";

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
    telephone: [site.phone, site.secondaryPhone],
    email: "sunspectrum01@gmail.com",

    address: {
      "@type": "PostalAddress",
      streetAddress: "1088, 6th Main, E and F Block, Ramakrishna Nagar",
      addressLocality: "Mysore",
      addressRegion: "Karnataka",
      postalCode: "570022",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.2840129,
      longitude: 76.6166227,
    },
    hasMap:
      "https://maps.google.com/maps?q=12.2840129%2C76.6166227&z=17&hl=en",
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