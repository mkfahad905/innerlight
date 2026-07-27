import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MotionDiv, MotionSection, MotionStagger, MotionStaggerItem } from "@/components/ui/Motion";

const values = [
  {
    icon: "❤️",
    title: "Empathy",
  },
  {
    icon: "🔒",
    title: "Confidentiality",
  },
  {
    icon: "🔬",
    title: "Evidence-Based",
  },
  {
    icon: "🌍",
    title: "Inclusive",
  },
];

export function AboutSection() {
  return (
    <MotionSection
      id="about"
      aria-label="About InnerLight Counselling"
      className="bg-beige-100 py-14 md:py-16 lg:py-32"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left: Image */}
          <MotionDiv className="relative order-2 lg:order-1">
            <div className="relative mx-auto h-[20rem] max-w-md overflow-hidden rounded-3xl shadow-[var(--shadow-card-hover)] sm:h-[24rem] lg:mx-0 lg:h-auto lg:aspect-[4/5]">
              <Image
                src="/img1.jpeg"
                alt="Safana Sabeer, Psychologist at InnerLight Counselling, smiling warmly in her office"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 448px, 448px"
                className="object-cover"
              />
              {/* Decorative border frame */}
              <div
                className="absolute inset-0 rounded-3xl ring-1 ring-sage-200/40"
                aria-hidden="true"
              />
            </div>

            {/* Floating credentials card */}
            <div
              className="absolute -bottom-4 right-0 max-w-[190px] rounded-2xl border border-white/55 bg-white/72 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl lg:-bottom-6 lg:-right-8 lg:max-w-[200px] lg:rounded-3xl lg:p-5"
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
          <MotionDiv className="order-1 flex flex-col gap-6 lg:order-2 lg:gap-8">
            <SectionHeading
              eyebrow="About"
              title="About Your Psychologist"
              subtitle="InnerLight Counselling was founded with a single mission: to provide a safe, warm, and professional space where every person can explore their inner world and move toward a life of greater wellbeing."
              align="left"
            />

            <div className="prose prose-neutral max-w-none space-y-3 text-muted leading-7 lg:space-y-4 lg:leading-relaxed">
              <p>
                I hold a Master of Arts (M.A.) in Clinical Psychology and a Bachelor of Science (B.Sc.) in Psychology. My academic training has provided me with a strong foundation in psychology, counseling skills, and evidence-based therapeutic approaches. I am committed to providing ethical, empathetic, and client-centered psychological support while continually enhancing my knowledge and professional skills through ongoing learning and professional development.
              </p>
              <p>
                Seeking support is an act of courage, not weakness. With a warm, empathetic approach and a commitment to ongoing learning, I&rsquo;m honoured to walk alongside you on your unique path to healing.
              </p>
            </div>

            {/* Values grid */}
            <MotionStagger className="grid w-fit max-w-full grid-cols-2 gap-2 sm:gap-3">
              {values.map((v) => (
                <MotionStaggerItem
                  key={v.title}
                  className="group flex min-h-14 w-fit min-w-0 max-w-full items-center gap-2 rounded-xl border border-sage-200/70 bg-white px-3 py-2 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1.5 hover:border-sage-900 hover:shadow-[var(--shadow-card-hover)] sm:gap-3 sm:px-4"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-200/70 bg-sage-50 text-lg shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-colors duration-300 group-hover:bg-sage-100 lg:h-11 lg:w-11 lg:text-xl" aria-hidden="true">
                    {v.icon}
                  </span>
                  <h3 className="min-w-0 break-words font-semibold text-sage-900 text-sm">{v.title}</h3>
                </MotionStaggerItem>
              ))}
            </MotionStagger>

            <div>
              <Button as="a" href="/start-your-journey" variant="primary" size="md">
                Book Your Session
              </Button>
            </div>
          </MotionDiv>
        </div>
      </div>
    </MotionSection>
  );
}
