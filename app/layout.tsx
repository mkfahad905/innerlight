import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
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
  title: "InnerLight Counselling | Compassionate Mental Health Support",
  description:
    "InnerLight Counselling offers evidence-based therapy for individuals and couples. Specialising in anxiety, depression, trauma, and life transitions. Book a free consultation today.",
  keywords: [
    "counselling",
    "therapy",
    "mental health",
    "anxiety",
    "depression",
    "couples therapy",
    "trauma recovery",
    "online therapy",
  ],
  openGraph: {
    title: "InnerLight Counselling | Compassionate Mental Health Support",
    description:
      "Evidence-based therapy for individuals and couples. Specialising in anxiety, depression, trauma, and life transitions.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "InnerLight Counselling",
    description:
      "Compassionate, evidence-based counselling for individuals and couples.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
