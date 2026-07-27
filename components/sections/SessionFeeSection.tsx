import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { MotionDiv, MotionSection } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const sessionDetails = [
  "One-to-one confidential online session",
  "Approximately 50–60 minutes",
  "Secure and supportive environment",
  "Flexible appointment scheduling",
];

export function SessionFeeSection() {
  return (
    <MotionSection
      id="session-fee"
      aria-label="Session Fee"
      className="bg-beige-100 py-14 md:py-16 lg:py-32"
    >
      <div className="container-custom flex flex-col items-center gap-8 md:gap-10 lg:gap-14">
        <SectionHeading
          eyebrow="Simple, Transparent Pricing"
          title="Session Fee"
          subtitle="Accessible, compassionate support designed to help you take the first step toward emotional well-being."
        />

        <div className="flex w-full max-w-3xl flex-col items-center gap-5 lg:gap-7">
          <MotionDiv className="w-full">
            <Card
              hover={false}
              className="flex flex-col gap-5 p-5 md:gap-6 md:p-7 lg:gap-8 lg:p-12"
            >
              <div className="flex flex-col items-center gap-2 text-center lg:gap-3">
                <h3 className="font-display text-xl font-semibold leading-snug text-sage-900 md:text-2xl lg:text-3xl">
                  Individual Counselling Session
                </h3>
                <div className="flex flex-col items-center gap-1">
                  <p className="font-display text-4xl font-semibold leading-none text-sage-900 md:text-5xl lg:text-6xl">
                    ₹499
                  </p>
                  <p className="text-sm font-medium text-muted sm:text-base">
                    Per online counselling session
                  </p>
                </div>
              </div>

              <div className="h-px w-full bg-sage-200/70" aria-hidden="true" />

              <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-x-6 md:gap-3 lg:gap-4 lg:gap-x-8">
                {sessionDetails.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-start gap-3 text-sm leading-6 text-sage-800 lg:leading-7"
                  >
                    <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                      <svg
                        className="h-3 w-3"
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
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div
                className="rounded-2xl border border-sage-200/70 bg-sage-50 px-4 py-3.5 text-sm leading-6 text-sage-800 md:px-5 lg:px-6 lg:py-4 lg:leading-7"
                role="note"
              >
                After submitting the appointment request form, you&rsquo;ll
                receive payment instructions via WhatsApp. Your session will be
                confirmed once payment is received.
              </div>

              <div className="flex justify-center">
                <Button
                  as="a"
                  href="/start-your-journey"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book Your Session
                </Button>
              </div>
            </Card>
          </MotionDiv>

          <div className="max-w-xl text-center text-sm leading-6 text-muted lg:leading-7">
            <p className="font-semibold text-sage-800">
              Questions before booking?
            </p>
            <p>
              Feel free to reach out through WhatsApp after submitting your
              appointment request.
            </p>
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
