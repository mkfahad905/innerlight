import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MotionArticle, MotionSection, MotionStagger } from "@/components/ui/Motion";

export function ServicesSection() {
  return (
    <MotionSection
      id="services"
      aria-label="Our Counselling Services"
      className="bg-beige-50 py-14 md:py-16 lg:py-32"
    >
      <div className="container-custom flex flex-col gap-8 md:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Services"
            title="How I Can Help You"
            subtitle="I offer a range of evidence-based therapeutic services tailored to meet your individual needs. Wherever you are in your journey, we will find a path forward together."
          />
        </div>

        <p id="services-carousel-instructions" className="sr-only lg:hidden">
          Swipe horizontally or use the arrow keys to explore all counselling services.
        </p>

        {/* Swipe carousel on touch layouts; the original grid is retained on desktop. */}
        <MotionStagger
          className="mobile-snap-carousel -mx-5 grid snap-x snap-mandatory auto-cols-[minmax(84%,1fr)] grid-flow-col gap-4 overflow-x-auto px-5 pb-2 md:-mx-7 md:auto-cols-[minmax(44%,1fr)] md:gap-5 md:px-7 lg:mx-0 lg:grid-flow-row lg:auto-cols-auto lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 lg:snap-none"
          role="region"
          aria-label="Counselling services carousel"
          aria-describedby="services-carousel-instructions"
          tabIndex={0}
        >
          {services.map((service, idx) => (
            <MotionArticle
              key={service.id}
              className="group flex h-full snap-start flex-col overflow-hidden rounded-3xl border border-sage-200/70 bg-beige-50/95 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sage-900 hover:shadow-[var(--shadow-card-hover)] lg:snap-none"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Card header */}
              <div className={`${service.color} px-5 pb-4 pt-5 lg:px-7 lg:pb-5 lg:pt-7`}>
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-sage-200/70 bg-sage-50 text-sage-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-colors duration-300 group-hover:bg-sage-100 lg:mb-5 lg:h-12 lg:w-12">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={service.icon} />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-xl text-sage-900 leading-snug">
                  {service.title}
                </h3>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-4 lg:gap-5 lg:px-7 lg:pb-7 lg:pt-5">
                <p className="max-w-[32ch] text-sm leading-6 text-muted lg:leading-7">{service.description}</p>

                {/* Approach tags */}
                <div className="mt-auto flex flex-col gap-2 lg:gap-2.5">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-xs text-sage-700"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-sage-500 flex-shrink-0"
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
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Learn more link */}
                <a
                  href="/start-your-journey"
                  className="inline-flex min-h-11 items-center gap-1.5 border-t border-sage-100 pt-3 text-sm font-semibold text-sage-700 transition-colors duration-300 group-hover:text-sage-900 lg:pt-4"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </MotionArticle>
          ))}
        </MotionStagger>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <Button
            as="a"
            href="/start-your-journey"
            variant="outline"
            size="lg"
            className="w-full !px-5 !text-base sm:w-auto lg:!px-9 lg:!text-lg"
          >
            Not sure which service? Let&rsquo;s talk
          </Button>
        </div>
      </div>
    </MotionSection>
  );
}
