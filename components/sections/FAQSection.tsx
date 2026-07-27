import { faqs } from "@/lib/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { MotionDiv, MotionSection } from "@/components/ui/Motion";

export function FAQSection() {
  return (
    <MotionSection
      id="faq"
      aria-label="Frequently Asked Questions"
      className="bg-beige-100 py-14 md:py-16 lg:py-32"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          {/* Left: Heading + contact nudge */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:gap-8">
            <SectionHeading
              eyebrow="FAQ"
              title="Questions &amp; Answers"
              subtitle="Everything you need to know before your first session."
              align="left"
            />

            {/* Still have questions card */}
            <MotionDiv className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-sage-900 p-5 shadow-[var(--shadow-card)] lg:gap-4 lg:p-7">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-sage-700 text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
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
                href="https://instagram.com/innerlight_counselling"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-sage-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-beige-100"
              >
                Message on Instagram
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
