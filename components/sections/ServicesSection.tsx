import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MotionArticle, MotionSection, MotionStagger } from "@/components/ui/Motion";

export function ServicesSection() {
  return (
    <MotionSection
      id="services"
      aria-label="Our Counselling Services"
      className="py-20 lg:py-32 bg-beige-50"
    >
      <div className="container-custom flex flex-col gap-14">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Services"
            title="How I Can Help You"
            subtitle="I offer a range of evidence-based therapeutic services tailored to meet your individual needs. Wherever you are in your journey, we will find a path forward together."
          />
        </div>

        {/* Services grid */}
        <MotionStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <MotionArticle
              key={service.id}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-sage-200/70 bg-beige-50/95 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sage-900 hover:shadow-[var(--shadow-card-hover)]"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Card header */}
              <div className={`${service.color} px-7 pt-7 pb-5`}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-sage-200/70 bg-sage-50 text-sage-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-colors duration-300 group-hover:bg-sage-100">
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
              <div className="flex flex-1 flex-col gap-5 px-7 pb-7 pt-5">
                <p className="max-w-[32ch] text-sm leading-7 text-muted">{service.description}</p>

                {/* Approach tags */}
                <div className="mt-auto flex flex-col gap-2.5">
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
                  className="inline-flex items-center gap-1.5 border-t border-sage-100 pt-4 text-sm font-semibold text-sage-700 transition-colors duration-300 group-hover:text-sage-900"
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
          <Button as="a" href="/start-your-journey" variant="outline" size="lg">
            Not sure which service? Let&rsquo;s talk
          </Button>
        </div>
      </div>
    </MotionSection>
  );
}
