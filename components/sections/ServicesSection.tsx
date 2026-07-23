import { services } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Our Counselling Services"
      className="py-24 lg:py-32 bg-beige-50"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <article
              key={service.id}
              className="group bg-white rounded-3xl overflow-hidden border border-beige-200 hover:border-sage-300 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              {/* Card header */}
              <div className={`${service.color} px-6 pt-6 pb-4`}>
                <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center shadow-sm mb-4">
                  <svg
                    className="w-6 h-6 text-sage-600"
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
              <div className="px-6 pb-6 flex flex-col gap-4 flex-1">
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>

                {/* Approach tags */}
                <div className="flex flex-col gap-1.5 mt-auto">
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
                  href="https://docs.google.com/forms/d/e/1FAIpQLSefziIgLIwbiAeNkwEi6bc5EppfXVfGtskrEt_hi6CGMt1TqQ/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sage-600 text-sm font-semibold mt-2 group-hover:text-sage-700 transition-colors duration-200"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <Button as="a" href="https://docs.google.com/forms/d/e/1FAIpQLSefziIgLIwbiAeNkwEi6bc5EppfXVfGtskrEt_hi6CGMt1TqQ/viewform?usp=publish-editor" target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
            Not sure which service? Let&rsquo;s talk
          </Button>
        </div>
      </div>
    </section>
  );
}
