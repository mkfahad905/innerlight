import Image from "next/image";
import { Button } from "@/components/ui/Button";

// ─── Decorative floating background shapes (unchanged) ───────────────────────
function FloatingShapes() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Large circle top-right — opacity reduced ~15% */}
      <div
        className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full animate-float"
        style={{ background: "rgba(255,255,255,0.034)" }}
      />
      {/* Medium circle bottom-left — opacity reduced ~15% */}
      <div
        className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full animate-float-reverse"
        style={{ background: "rgba(255,255,255,0.051)" }}
      />
      {/* Small circle mid-right — opacity reduced ~15% */}
      <div
        className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full animate-float"
        style={{ background: "rgba(255,255,255,0.043)", animationDelay: "2s" }}
      />
      {/* Leaf shape 1 — opacity reduced ~15% */}
      <div
        className="absolute top-20 left-1/3 w-24 h-32 animate-float-reverse"
        style={{
          background: "rgba(255,255,255,0.051)",
          borderRadius: "60% 40% 70% 30% / 50% 50% 50% 50%",
          animationDelay: "1s",
        }}
      />
      {/* Leaf shape 2 — opacity reduced ~15% */}
      <div
        className="absolute bottom-32 right-12 w-20 h-28 animate-float"
        style={{
          background: "rgba(255,255,255,0.034)",
          borderRadius: "40% 60% 30% 70% / 50% 50% 50% 50%",
          animationDelay: "3s",
        }}
      />
    </div>
  );
}

// ─── Therapist portrait + info card ──────────────────────────────────────────
function TherapistCard() {
  const badges = ["Online Sessions", "Confidential", "Evidence-Based"];

  return (
    // Outer wrapper — no gap; card will overlap portrait via negative margin
    <div className="flex flex-col items-center w-full max-w-xs mx-auto lg:mx-0">
      {/* Portrait — deepened gradient so card blends naturally */}
      <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/20">
        <Image
          src="/img1.jpeg"
          alt="InnerLight Counselling therapist portrait"
          fill
          sizes="(max-width: 1024px) 80vw, 288px"
          className="object-cover object-top"
          priority
        />
        {/* Gradient overlay — deeper so the card sits flush against it */}
        <div
          className="absolute bottom-0 left-0 right-0 h-2/5"
          style={{
            background:
              "linear-gradient(to top, rgba(30,55,45,0.80) 0%, rgba(30,55,45,0.30) 60%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Info card — overlaps portrait by 24px via negative top margin */}
      <div className="-mt-6 w-[92%] bg-white/12 backdrop-blur-lg border border-white/25 rounded-2xl px-6 py-5 flex flex-col gap-3.5 shadow-xl">
        {/* Name + title row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-0.5">
            <p className="font-display font-semibold text-white text-[1.05rem] leading-snug">
              [Safana Sabeer]
            </p>
            <p className="text-sage-200 text-xs tracking-wide">M.A. Clinical Psychology</p>
          </div>
          <span className="flex-shrink-0 bg-sage-500/75 border border-sage-300/30 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Psychologist
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/15" aria-hidden="true" />

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1 text-xs text-white/85"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-sage-300 flex-shrink-0"
                aria-hidden="true"
              />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Background gradient (unchanged) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #2D4A3E 0%, #4E6A5E 35%, #7A9E87 65%, #A8C5B0 100%)",
        }}
        aria-hidden="true"
      />

      <FloatingShapes />

      {/* Main content */}
      <div className="container-custom relative z-10 py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Headline + copy + CTAs */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-7">
          {/* Eyebrow badge (unchanged) */}
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm text-white font-medium">
            <span
              className="w-2 h-2 rounded-full bg-sage-300 animate-pulse"
              aria-hidden="true"
            />
            Welcoming New Clients
          </span>

          {/* Headline — brand identity restored */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-semibold text-white leading-tight">
            Find Your{" "}
            <span className="italic text-sage-200">Inner Light</span>,{" "}
            <br className="hidden sm:block" />
            Begin to Heal
          </h1>

          {/* Subtitle — warm, empathetic, professional */}
          <p className="text-lg sm:text-xl text-white/80 max-w-lg leading-relaxed">
            Whether you&rsquo;re feeling overwhelmed, anxious, emotionally
            exhausted, or simply need someone to talk to — you&rsquo;re welcome
            here. Together, we&rsquo;ll work toward clarity, resilience, and
            lasting emotional wellbeing.
          </p>

          {/* CTAs (unchanged markup, same classes) */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              as="a"
              href="https://docs.google.com/forms/d/e/1FAIpQLSefziIgLIwbiAeNkwEi6bc5EppfXVfGtskrEt_hi6CGMt1TqQ/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto bg-white! text-sage-900! hover:bg-beige-100!"
            >
              Start Your Journey
              <svg
                className="w-5 h-5"
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
            <Button
              as="a"
              href="#about"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white! text-white! hover:bg-white! hover:text-sage-900!"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Right: Therapist portrait + info card */}
        <div className="flex-shrink-0 w-full lg:w-72 xl:w-80">
          <TherapistCard />
        </div>
      </div>

      {/* Bottom wave (unchanged) */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,0 1080,80 1440,40 L1440,80 L0,80 Z"
            fill="#F5F0E8"
          />
        </svg>
      </div>
    </section>
  );
}
