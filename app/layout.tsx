import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { ModeProvider } from "./context/mode-context";
import { LensProvider } from "./context/lens-context";
import { SITE, SITE_URL } from "./site-config";


const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.title, template: "%s | Sudip Mishra" },
  description: SITE.description,
  keywords: SITE.keywords,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    creator: "@mishrasudip23",
  },
  robots: { index: true, follow: true },
};

// Structured data so Google can show a rich "Person" result.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  alternateName: SITE.alternateNames,
  url: SITE_URL,
  jobTitle: "Frontend Engineer",
  description: SITE.description,
  worksFor: { "@type": "Organization", name: "Credit Nirvana" },
  address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
  knowsAbout: ["React", "Next.js", "Angular", "TypeScript", "Generative AI", "Frontend Architecture"],
  sameAs: SITE.sameAs,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${ptSans.variable} antialiased relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c") }}
        />
        <ModeProvider>
        <LensProvider>
        <div className="texture" />
        {children}
        </LensProvider>
        </ModeProvider>
      </body>
    </html>
  );
}
