import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionAnchor, MotionDiv, MotionSection, MotionStagger, MotionStaggerItem } from "@/components/ui/Motion";

const reasons = [
  {
    emoji: "🎓",
    title: "Fully Qualified & Experienced",
    description:
      "Holding Masters-level qualifications with years of hands-on clinical experience. Rigorous standards of ongoing professional development ensure you always receive the best evidence-based care.",
  },
  {
    emoji: "🔒",
    title: "Safe & Confidential",
    description:
      "Your privacy is our highest priority. All sessions are strictly confidential within the bounds of professional ethical requirements. We explain all limits of confidentiality upfront.",
  },
  {
    emoji: "📅",
    title: "Flexible Scheduling",
    description:
      "Sessions available across a wide range of time slots to fit your life. Easy to get started — no long waitlists, no complicated processes.",
  },
  {
    emoji: "💻",
    title: "Online Sessions — Anywhere",
    description:
      "Access support from the comfort of your own home via secure video sessions. All you need is a quiet space and a device with a camera. Just as effective as in-person therapy.",
  },
  {
    emoji: "🤝",
    title: "A Genuine Human Connection",
    description:
      "Clients find their way here through Instagram because they already feel a sense of trust. That real connection is at the heart of every session — you\'re not just another appointment.",
  },
  {
    emoji: "🌿",
    title: "Genuinely Individualised Care",
    description:
      "No cookie-cutter treatment plans. I take the time to understand you as a whole person and draw from multiple evidence-based modalities to create a plan that truly fits.",
  },
];

export function WhyUsSection() {
  return (
    <MotionSection
      id="why-us"
      aria-label="Why Choose InnerLight Counselling"
      className="py-20 lg:py-32"
      style={{ background: "linear-gradient(180deg, #F5F0E8 0%, #EDE8DC 100%)" }}
    >
      <div className="container-custom flex flex-col gap-16">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Care You Can Trust"
            subtitle="Choosing a therapist is one of the most personal decisions you&rsquo;ll make. Here&rsquo;s what sets InnerLight Counselling apart."
          />
        </div>

        {/* Reasons grid */}
        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <MotionStaggerItem
              key={reason.title}
              className="group relative flex flex-col gap-5 overflow-hidden rounded-3xl border border-sage-200/70 bg-beige-50/95 p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sage-900 hover:shadow-[var(--shadow-card-hover)]"
            >
              <div
                className="absolute left-8 right-8 top-0 h-px bg-sage-900/35"
                aria-hidden="true"
              />

              {/* Number badge */}
              <span
                className="absolute top-6 right-6 text-xs font-mono text-sage-300"
                aria-hidden="true"
              >
                0{idx + 1}
              </span>

              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-sage-200/70 bg-sage-50 text-2xl text-sage-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-colors duration-300 group-hover:bg-sage-100">
                {reason.emoji}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-display font-semibold text-lg text-sage-900 leading-snug">
                  {reason.title}
                </h3>
                <p className="max-w-[34ch] text-sm leading-7 text-muted">{reason.description}</p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 rounded-full bg-sage-900/30 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* Bottom strip */}
        <MotionDiv className="bg-sage-900 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-2xl font-semibold text-white">
              Ready to take the first step?
            </p>
            <p className="text-sage-300 mt-1 text-sm">
              Take the first step toward emotional well-being. Complete the appointment request form to begin your counselling journey.
            </p>
          </div>
          <MotionAnchor
            href="/start-your-journey"
            className="group inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-sage-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige-100 hover:shadow-lg"
          >
            Start Your Journey
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </MotionAnchor>
        </MotionDiv>
      </div>
    </MotionSection>
  );
}
