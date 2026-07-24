import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MotionDiv, MotionSection, MotionStagger, MotionStaggerItem } from "@/components/ui/Motion";

const values = [
  {
    icon: "❤️",
    title: "Empathy",
    desc: "We listen deeply without judgment, honouring your unique experience.",
  },
  {
    icon: "🔒",
    title: "Confidentiality",
    desc: "Your privacy is paramount. Everything shared stays within our space.",
  },
  {
    icon: "🔬",
    title: "Evidence-Based",
    desc: "Our methods are grounded in the latest psychological research.",
  },
  {
    icon: "🌍",
    title: "Inclusive",
    desc: "Welcoming all backgrounds, identities, and life experiences.",
  },
];

export function AboutSection() {
  return (
    <MotionSection
      id="about"
      aria-label="About InnerLight Counselling"
      className="py-20 lg:py-32 bg-beige-100"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Image */}
          <MotionDiv className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 shadow-[var(--shadow-card-hover)]">
              <Image
                src="/img1.jpeg"
                alt="Safana Sabeer, Psychologist at InnerLight Counselling, smiling warmly in her office"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              {/* Decorative border frame */}
              <div
                className="absolute inset-0 rounded-3xl ring-1 ring-sage-200/40"
                aria-hidden="true"
              />
            </div>

            {/* Floating credentials card */}
            <div
              className="absolute -bottom-6 -right-4 max-w-[200px] rounded-3xl border border-white/55 bg-white/72 p-5 shadow-[var(--shadow-card)] backdrop-blur-xl lg:-right-8"
              aria-hidden="true"
            >
              <div className="absolute left-5 top-0 h-px w-16 bg-sage-900/35" aria-hidden="true" />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-200/70 bg-sage-50 text-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">🎓</span>
                  <span className="text-xs font-semibold text-sage-700 uppercase tracking-wider">
                    Qualifications
                  </span>
                </div>
                <p className="text-xs text-muted leading-relaxed">
                  M.A. Clinical Psychology · B.Sc. Psychology
                </p>
              </div>
            </div>

            {/* Decorative background shape */}
            <div
              className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-sage-100 -z-10"
              aria-hidden="true"
            />
          </MotionDiv>

          {/* Right: Text */}
          <MotionDiv className="order-1 lg:order-2 flex flex-col gap-8">
            <SectionHeading
              eyebrow="About"
              title="A Sanctuary for Growth & Healing"
              subtitle="InnerLight Counselling was founded with a single mission: to provide a safe, warm, and professional space where every person can explore their inner world and move toward a life of greater wellbeing."
              align="left"
            />

            <div className="prose prose-neutral max-w-none text-muted leading-relaxed space-y-4">
              <p>
                I hold a Master of Arts (M.A.) in Clinical Psychology and a Bachelor of Science (B.Sc.) in Psychology. My academic training has provided me with a strong foundation in psychology, counseling skills, and evidence-based therapeutic approaches. I am committed to providing ethical, empathetic, and client-centered psychological support while continually enhancing my knowledge and professional skills through ongoing learning and professional development.
              </p>
              <p>
                Seeking support is an act of courage, not weakness. With a warm, empathetic approach and a commitment to ongoing learning, I&rsquo;m honoured to walk alongside you on your unique path to healing.
              </p>
            </div>

            {/* Values grid */}
            <MotionStagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <MotionStaggerItem
                  key={v.title}
                  className="group flex flex-col gap-3 rounded-3xl border border-sage-200/70 bg-beige-50/95 p-5 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sage-900 hover:shadow-[var(--shadow-card-hover)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-sage-200/70 bg-sage-50 text-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-colors duration-300 group-hover:bg-sage-100" aria-hidden="true">
                    {v.icon}
                  </span>
                  <h3 className="font-semibold text-sage-900 text-sm">{v.title}</h3>
                  <p className="text-xs leading-6 text-muted">{v.desc}</p>
                </MotionStaggerItem>
              ))}
            </MotionStagger>

            <div>
              <Button as="a" href="/start-your-journey" variant="primary" size="md">
                Start Your Journey
              </Button>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
