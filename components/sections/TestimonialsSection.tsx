import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionSection, MotionStagger, MotionStaggerItem } from "@/components/ui/Motion";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-amber-400" : "text-beige-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <MotionSection
      id="testimonials"
      aria-label="Client Testimonials"
      className="py-20 lg:py-32 bg-beige-50 overflow-hidden"
    >
      <div className="container-custom flex flex-col gap-14">
        {/* Heading */}
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Testimonials"
            title="Voices of Healing"
            subtitle="The greatest measure of my work is the transformation I witness in my clients. Here&rsquo;s what some of them have shared."
          />
        </div>

        {/* Two-row masonry-style grid */}
        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, idx) => (
            <MotionStaggerItem key={testimonial.id}>
            <article
              className={`group relative flex flex-col gap-6 overflow-hidden rounded-3xl border border-sage-200/70 bg-beige-50/95 p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sage-900 hover:shadow-[var(--shadow-card-hover)] ${
                // Offset every other card slightly for visual interest
                idx % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <div
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white/80"
                aria-hidden="true"
              />

              {/* Quote mark */}
              <div
                className="-mb-5 font-display text-8xl leading-none text-sage-200/80 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <blockquote className="flex-1 text-[0.95rem] leading-7 text-sage-800/90">
                {testimonial.quote}
              </blockquote>

              {/* Footer */}
              <footer className="flex items-center gap-3 border-t border-sage-100 pt-5">
                {/* Avatar */}
                <div
                  className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-sage-200/70 bg-sage-100 text-sm font-semibold text-sage-900 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
                  aria-hidden="true"
                >
                  {testimonial.initials}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="font-semibold text-sage-900 text-sm truncate">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-muted truncate">{testimonial.sessionType}</span>
                </div>
                <div className="ml-auto flex-shrink-0">
                  <StarRating rating={testimonial.rating} />
                </div>
              </footer>
            </article>
            </MotionStaggerItem>
          ))}
        </MotionStagger>

        {/* Trust summary bar */}
        <MotionStagger className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 py-6 border-y border-beige-200">
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "100+", label: "Clients Supported" },
            { value: "4.9★", label: "Average Rating" },
          ].map((item) => (
            <MotionStaggerItem key={item.label} className="flex flex-col items-center">
              <span className="font-display text-3xl font-semibold text-sage-900">{item.value}</span>
              <span className="text-muted text-sm mt-0.5">{item.label}</span>
            </MotionStaggerItem>
          ))}
        </MotionStagger>
      </div>
    </MotionSection>
  );
}
