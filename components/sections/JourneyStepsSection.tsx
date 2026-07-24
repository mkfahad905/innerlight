import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionDiv, MotionSection, MotionStagger, MotionStaggerItem } from "@/components/ui/Motion";

const steps = [
  {
    number: "01",
    title: "Complete the Confidential Intake Form",
    description:
      "A short, private form that helps me understand what you're going through — at your own pace, in your own words.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "We'll Carefully Review Your Responses",
    description:
      "I personally read every intake form to make sure I understand your unique situation before we connect.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Receive a WhatsApp Message",
    description:
      "You'll hear from me directly on WhatsApp — a warm, personal message to confirm we're a good fit and answer any initial questions.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Choose Your Session Time",
    description:
      "Pick a date and time that works for your schedule. Morning, afternoon, or evening — I offer flexible slots to suit your life.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Receive UPI Payment Details",
    description:
      "I'll share secure UPI payment details. Once confirmed, your session is officially booked — simple, safe, and straightforward.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Begin Your Counselling Journey",
    description:
      "Your first session is a calm, judgment-free space to be heard. This is where healing begins — at your own pace, on your own terms.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

export function JourneyStepsSection() {
  return (
    <MotionSection
      id="journey"
      aria-label="How Your Journey Begins"
      className="py-20 lg:py-32 bg-beige-50"
    >
      <div className="container-custom flex flex-col gap-16">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Your Journey"
            title="How Your Journey Begins"
            subtitle="A simple, supportive process designed to make getting help feel easy and comfortable."
          />
        </div>

        {/* Steps grid — 2 columns on md, 3 on lg */}
        <MotionStagger className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <MotionStaggerItem
                key={step.number}
                className="relative flex flex-col gap-5 group"
              >
                {/* Connector line — visible on lg between columns, hidden on last of each row */}
                {!isLast && (
                  <span
                    className={`hidden lg:block absolute top-[30px] left-[calc(100%+0px)] w-8 border-t border-dashed border-sage-200/70 pointer-events-none ${
                      // hide on every 3rd item (last in each row)
                      (idx + 1) % 3 === 0 ? "!hidden" : ""
                    }`}
                    aria-hidden="true"
                  />
                )}

                {/* Card */}
                <div className="flex h-full flex-col gap-5 rounded-3xl border border-sage-200/70 bg-beige-50/95 p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sage-900 hover:shadow-[var(--shadow-card-hover)]">
                  {/* Icon + step number row */}
                  <div className="flex items-center justify-between gap-4">
                    {/* Icon circle */}
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-sage-200/70 bg-sage-50 text-sage-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-colors duration-300 group-hover:bg-sage-100">
                      {step.icon}
                    </div>
                    {/* Step number badge */}
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-sage-200/80 bg-sage-50/80 font-mono text-xs font-semibold text-sage-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] select-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-semibold text-lg text-sage-900 leading-snug">
                      {step.title}
                    </h3>
                    <p className="max-w-[34ch] text-sm leading-7 text-muted">
                      {step.description}
                    </p>
                  </div>

                  {/* Bottom accent line on hover */}
                  <div
                    className="mt-auto h-px origin-left scale-x-0 rounded-full bg-sage-900/30 transition-transform duration-300 group-hover:scale-x-100"
                    aria-hidden="true"
                  />
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStagger>

        {/* Reassurance strip */}
        <MotionDiv
          className="rounded-3xl px-8 py-7 flex flex-col sm:flex-row items-center gap-5 sm:gap-8"
          style={{ background: "linear-gradient(135deg, #2D4A3E 0%, #4E6A5E 100%)" }}
        >
          <span className="text-4xl flex-shrink-0" aria-hidden="true">🌿</span>
          <div className="text-center sm:text-left">
            <p className="font-display font-semibold text-white text-xl leading-snug">
              You don&rsquo;t have to have it all figured out before reaching out.
            </p>
            <p className="text-sage-200 text-sm mt-1 leading-relaxed">
              The intake form takes just a few minutes — and it&rsquo;s the only step you need to take today.
            </p>
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
