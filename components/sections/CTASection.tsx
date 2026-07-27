import { Button } from "@/components/ui/Button";
import { MotionDiv, MotionSection, MotionStagger, MotionStaggerItem } from "@/components/ui/Motion";

const trustBadges = [
  { label: "Confidential" },
  { label: "Personally Reviewed" },
  { label: "No Pressure" },
  { label: "WhatsApp Follow-up" },
];

export function CTASection() {
  return (
    <MotionSection
      id="start-journey"
      aria-label="Book Your Session"
      className="bg-beige-100 py-14 md:py-16 lg:py-32"
    >
      <div className="container-custom">
        <div
          className="relative flex flex-col items-center gap-7 overflow-hidden rounded-[2rem] border border-white/10 px-5 py-10 text-center shadow-[var(--shadow-card-hover)] md:px-10 md:py-12 lg:gap-10 lg:px-20 lg:py-20"
          style={{
            background:
              "linear-gradient(135deg, #2D4A3E 0%, #3D5E52 40%, #4E6A5E 75%, #5A7A6A 100%)",
          }}
        >
          {/* Decorative background shapes */}
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.04)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-12 -left-12 w-56 h-56 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.04)" }}
            aria-hidden="true"
          />
          <div
            className="absolute top-1/2 left-1/4 w-36 h-36 rounded-full pointer-events-none"
            style={{ background: "rgba(255,255,255,0.025)", transform: "translateY(-50%)" }}
            aria-hidden="true"
          />

          {/* Leaf icon */}
          <MotionDiv
            className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-sm lg:h-16 lg:w-16 lg:text-3xl"
            aria-hidden="true"
          >
            🌿
          </MotionDiv>

          {/* Heading */}
          <MotionDiv className="relative z-10 flex max-w-2xl flex-col items-center gap-3 lg:gap-5">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
              Ready to Take the{" "}
              <span className="italic text-sage-200">First Step?</span>
            </h2>
            <p className="max-w-xl text-base leading-7 text-white/75 lg:text-lg lg:leading-relaxed">
              Take the first step toward emotional well-being. Complete the appointment request form to begin your counselling journey.
            </p>
          </MotionDiv>

          {/* Trust badges */}
          <MotionStagger className="relative z-10 flex flex-wrap items-center justify-center gap-2 lg:gap-4">
            {trustBadges.map((badge) => (
              <MotionStaggerItem
                key={badge.label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm"
              >
                <svg
                  className="w-4 h-4 text-sage-300 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {badge.label}
              </MotionStaggerItem>
            ))}
          </MotionStagger>

          {/* CTA button */}
          <MotionDiv className="relative z-10 flex flex-col items-center gap-3">
            <Button
              as="a"
              href="/start-your-journey"
              variant="primary"
              size="lg"
              className="group !bg-white !px-10 !text-sage-900 hover:!bg-beige-100"
            >
              Book Your Session
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Button>
            <p className="text-sage-300 text-xs">
              Takes less than 5 minutes &middot; Completely private
            </p>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
