import type { Metadata } from "next";
import { ThankYouConfirmation } from "@/components/ThankYouConfirmation";

export const metadata: Metadata = {
  title: "Thank You | InnerLight Counselling",
  description:
    "Your intake form has been received. I'll personally review your responses and reach out on WhatsApp within 24 hours.",
  robots: { index: false, follow: false },
};

// WhatsApp follow-up link with prefilled post-form message
const WHATSAPP_URL =
  "https://wa.me/917994252084?text=Hello%20Safana,%20I%20have%20completed%20the%20appointment%20request%20form%20on%20your%20website.%20Looking%20forward%20to%20hearing%20from%20you.";

export default function ThankYouPage() {
  return <ThankYouConfirmation whatsappUrl={WHATSAPP_URL} />;
}
