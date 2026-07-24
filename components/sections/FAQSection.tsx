import { faqs } from "@/lib/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { MotionDiv, MotionSection } from "@/components/ui/Motion";

export function FAQSection() {
  return (
    <MotionSection
      id="faq"
      aria-label="Frequently Asked Questions"
      className="py-20 lg:py-32 bg-beige-100"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Left: Heading + contact nudge */}
          <div className="lg:sticky lg:top-28 flex flex-col gap-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions &amp; Answers"
              subtitle="Everything you need to know before your first session."
              align="left"
            />

            {/* Still have questions card */}
            <MotionDiv className="bg-sage-900 rounded-3xl p-6 flex flex-col gap-4">
              <div
                className="w-12 h-12 rounded-2xl bg-sage-700 flex items-center justify-center text-2xl"
                aria-hidden="true"
              >
                💬
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-lg">
                  Still have questions?
                </h3>
                <p className="text-sage-300 text-sm mt-1 leading-relaxed">
                  Feel free to reach out on Instagram — I&rsquo;m always happy to answer any questions before you start.
                </p>
              </div>
              <a
                href="https://instagram.com/[innerlight_counselling]"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-sage-900 font-semibold text-sm px-5 py-3 rounded-full hover:bg-beige-100 transition-all duration-300 hover:-translate-y-0.5"
              >
                Message on Instagram
                <svg
                  className="w-4 h-4"
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
              </a>
            </MotionDiv>
          </div>

          {/* Right: Accordion */}
          <div>
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
