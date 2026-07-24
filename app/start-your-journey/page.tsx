import type { Metadata } from "next";
import { AppointmentRequestForm } from "@/components/AppointmentRequestForm";
import { siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Appointment Request | InnerLight Counselling",
  },
  description:
    "Complete a confidential appointment request form for InnerLight Counselling.",
  alternates: { canonical: "/start-your-journey" },
  openGraph: {
    title: "Appointment Request | InnerLight Counselling",
    description:
      "Complete a confidential appointment request form for InnerLight Counselling.",
    ...(siteUrl ? { url: "/start-your-journey" } : {}),
    siteName,
  },
  twitter: {
    title: "Appointment Request | InnerLight Counselling",
    description:
      "Complete a confidential appointment request form for InnerLight Counselling.",
  },
  robots: { index: false, follow: false },
};

export default function StartYourJourneyPage() {
  return <AppointmentRequestForm />;
}
