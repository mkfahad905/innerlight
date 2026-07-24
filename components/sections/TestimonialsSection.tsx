import { testimonials } from "@/lib/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MotionSection, MotionStagger, MotionStaggerItem } from "@/components/ui/Motion";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-beige-300"}`}
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
              className={`group bg-white rounded-3xl p-7 border border-beige-200 hover:border-sage-300 hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 flex flex-col gap-5 ${
                // Offset every other card slightly for visual interest
                idx % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              {/* Quote mark */}
              <div
                className="text-sage-200 font-display text-7xl leading-none -mb-4 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote text */}
              <blockquote className="text-sage-800 leading-relaxed text-sm flex-1">
                {testimonial.quote}
              </blockquote>

              {/* Footer */}
              <footer className="flex items-center gap-3 pt-2 border-t border-beige-200">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full bg-sage-500 flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
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
