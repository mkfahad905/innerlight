import type { Metadata } from "next";
import { AppointmentRequestForm } from "@/components/AppointmentRequestForm";

export const metadata: Metadata = {
  title: "Appointment Request | InnerLight Counselling",
  description:
    "Complete a confidential appointment request form for InnerLight Counselling.",
  robots: { index: false, follow: false },
};

export default function StartYourJourneyPage() {
  return <AppointmentRequestForm />;
}
