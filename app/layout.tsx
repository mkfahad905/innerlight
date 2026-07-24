import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import {
  instagramUrl,
  siteDescription,
  siteKeywords,
  siteLogo,
  siteName,
  siteOgImage,
  siteUrl,
} from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "InnerLight Counselling | Compassionate Mental Health Support",
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: "InnerLight Counselling | Compassionate Mental Health Support",
    description: siteDescription,
    ...(siteUrl ? { url: "/" } : {}),
    siteName,
    type: "website",
    locale: "en_IN",
    images: siteUrl
      ? [
          {
            url: siteOgImage,
            width: 1200,
            height: 630,
            alt: "InnerLight Counselling",
          },
        ]
      : undefined,
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: siteDescription,
    images: siteUrl ? [siteOgImage] : undefined,
  },
  icons: {
    icon: "/innerlight-logo-2-icon.svg",
    apple: "/innerlight-logo-2-icon.svg",
  },
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteName,
      description: siteDescription,
      inLanguage: "en-IN",
      ...(siteUrl
        ? {
            "@id": `${siteUrl}/#website`,
            url: siteUrl,
          }
        : {}),
    },
    {
      "@type": "Organization",
      name: siteName,
      sameAs: [instagramUrl],
      knowsAbout: [
        "Clinical Psychology",
        "Counselling",
        "Anxiety Support",
        "Depression Support",
        "Trauma Recovery",
        "Life Transitions",
      ],
      ...(siteUrl
        ? {
            "@id": `${siteUrl}/#organization`,
            url: siteUrl,
            logo: `${siteUrl}${siteLogo}`,
          }
        : {}),
      founder: {
        ...(siteUrl ? { "@id": `${siteUrl}/#safana-sabeer` } : {}),
        name: "Safana Sabeer",
      },
    },
    {
      "@type": "Person",
      name: "Safana Sabeer",
      jobTitle: "Psychologist",
      ...(siteUrl ? { "@id": `${siteUrl}/#safana-sabeer` } : {}),
      worksFor: {
        ...(siteUrl ? { "@id": `${siteUrl}/#organization` } : {}),
        name: siteName,
      },
      alumniOf: [
        "Master of Arts in Clinical Psychology",
        "Bachelor of Science in Psychology",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
