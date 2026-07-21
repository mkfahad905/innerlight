import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You | InnerLight Counselling",
  description:
    "Your intake form has been received. I'll personally review your responses and reach out on WhatsApp within 24 hours.",
  robots: { index: false, follow: false },
};

const checklist = [
  { label: "Form received", done: true },
  { label: "Review in progress", done: true },
  { label: "WhatsApp follow-up", done: false },
  { label: "Session scheduling", done: false },
];

// Placeholder — replace with real WhatsApp link when ready
const WHATSAPP_URL = "https://wa.me/910000000000";

export default function ThankYouPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-5 py-16 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #F5F0E8 0%, #EDE8DC 50%, #E4DFCF 100%)",
      }}
    >
      {/* Decorative background circles */}
      <div
        className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: "rgba(122,158,135,0.10)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "rgba(122,158,135,0.08)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: "rgba(122,158,135,0.06)",
          transform: "translate(-50%, -50%)",
        }}
        aria-hidden="true"
      />

      {/* Card */}
      <main
        className="relative z-10 w-full max-w-lg bg-white rounded-[2rem] shadow-[0_8px_60px_-8px_rgba(45,74,62,0.18)] border border-beige-200 px-8 py-12 sm:px-12 flex flex-col items-center gap-10"
        aria-label="Thank you confirmation"
      >
        {/* Success illustration */}
        <div className="flex flex-col items-center gap-5">
          {/* Animated checkmark ring */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            {/* Outer pulse ring */}
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: "rgba(122,158,135,0.18)" }}
              aria-hidden="true"
            />
            {/* Main circle */}
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2D4A3E 0%, #7A9E87 100%)" }}
            >
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center flex flex-col gap-3">
            <h1
              className="font-display font-semibold text-3xl sm:text-4xl text-sage-900 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Thank You for{" "}
              <span className="italic text-sage-600">Reaching Out</span>
            </h1>
            <p className="text-muted text-base leading-relaxed max-w-sm mx-auto">
              Your responses have been received. I&rsquo;ll personally review
              your form and contact you on WhatsApp within{" "}
              <strong className="text-sage-800 font-semibold">24 hours</strong>.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-beige-200" aria-hidden="true" />

        {/* Checklist */}
        <div className="w-full flex flex-col gap-3" role="list" aria-label="Journey progress">
          {checklist.map((item, idx) => (
            <div
              key={item.label}
              role="listitem"
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 border transition-all duration-200 ${
                item.done
                  ? "bg-sage-50 border-sage-200"
                  : "bg-beige-50 border-beige-200"
              }`}
            >
              {/* Step icon */}
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.done
                    ? "bg-sage-500 text-white"
                    : "bg-beige-200 text-beige-400"
                }`}
              >
                {item.done ? (
                  <svg
                    className="w-4.5 h-4.5 w-[18px] h-[18px]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="text-xs font-mono font-semibold text-beige-400">
                    0{idx + 1}
                  </span>
                )}
              </div>

              {/* Label */}
              <span
                className={`text-sm font-medium leading-snug ${
                  item.done ? "text-sage-800" : "text-sage-400"
                }`}
              >
                {item.label}
              </span>

              {/* Status pill */}
              {item.done && (
                <span className="ml-auto text-xs font-semibold text-sage-600 bg-sage-100 rounded-full px-3 py-1 flex-shrink-0">
                  Done
                </span>
              )}
              {!item.done && (
                <span className="ml-auto text-xs font-medium text-beige-400 bg-beige-100 rounded-full px-3 py-1 flex-shrink-0">
                  Upcoming
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-beige-200" aria-hidden="true" />

        {/* WhatsApp CTA */}
        <div className="w-full flex flex-col items-center gap-4">
          <a
            id="whatsapp-cta"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-6px_rgba(37,211,102,0.45)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
            style={{
              background: "linear-gradient(135deg, #1BA843 0%, #25D366 100%)",
            }}
            aria-label="Continue on WhatsApp"
          >
            {/* WhatsApp icon */}
            <svg
              className="w-6 h-6 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Continue on WhatsApp
          </a>

          {/* Back to home */}
          <Link
            href="/"
            className="text-sm text-sage-500 hover:text-sage-700 transition-colors duration-200 underline underline-offset-2"
          >
            ← Back to home
          </Link>
        </div>
      </main>

      {/* Footer note */}
      <p className="relative z-10 mt-8 text-xs text-sage-400 text-center max-w-xs">
        Your information is completely private and will never be shared with
        third parties.
      </p>
    </div>
  );
}
