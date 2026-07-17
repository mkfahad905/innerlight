import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    emoji: "🎓",
    title: "Fully Qualified & Registered",
    description:
      "All our therapists hold Masters-level qualifications and are registered with the Australian Psychological Society (APS). We maintain rigorous standards of ongoing professional development.",
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
      "We offer morning, evening, and weekend appointments to fit around your life. Easy online booking lets you secure your session in minutes, with instant confirmation.",
  },
  {
    emoji: "💻",
    title: "Online & In-Person Sessions",
    description:
      "Access support from the comfort of your own home via secure video sessions, or visit our welcoming in-person practice. You choose what works best for you.",
  },
  {
    emoji: "💳",
    title: "Medicare & Insurance Rebates",
    description:
      "We're registered for Medicare rebates (with a GP referral) and are recognised by most major private health insurers, making quality mental health care more accessible.",
  },
  {
    emoji: "🌿",
    title: "Genuinely Individualised Care",
    description:
      "No cookie-cutter treatment plans. We take the time to understand you as a whole person and draw from multiple evidence-based modalities to create a plan that truly fits.",
  },
];

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      aria-label="Why Choose InnerLight Counselling"
      className="py-24 lg:py-32"
      style={{ background: "linear-gradient(180deg, #F5F0E8 0%, #EDE8DC 100%)" }}
    >
      <div className="container-custom flex flex-col gap-16">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Care You Can Trust"
            subtitle="We know that choosing a therapist is one of the most personal decisions you'll make. Here's what sets InnerLight Counselling apart."
          />
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => (
            <div
              key={reason.title}
              className="group relative bg-white rounded-3xl p-7 border border-beige-200 hover:border-sage-300 transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 flex flex-col gap-4"
            >
              {/* Number badge */}
              <span
                className="absolute top-5 right-5 text-xs font-mono text-beige-400"
                aria-hidden="true"
              >
                0{idx + 1}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-sage-50 border border-sage-100 flex items-center justify-center text-2xl group-hover:bg-sage-100 transition-colors duration-300">
                {reason.emoji}
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="font-display font-semibold text-lg text-sage-900 leading-snug">
                  {reason.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{reason.description}</p>
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-sage-300 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="bg-sage-900 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="font-display text-2xl font-semibold text-white">
              Ready to take the first step?
            </p>
            <p className="text-sage-300 mt-1 text-sm">
              Your free 20-minute consultation is just one click away.
            </p>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-sage-900 font-semibold px-7 py-3.5 rounded-full hover:bg-beige-100 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Book Free Consultation
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
