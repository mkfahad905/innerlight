import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

const AboutSection = dynamic(() =>
  import("@/components/sections/AboutSection").then((mod) => mod.AboutSection),
);
const ServicesSection = dynamic(() =>
  import("@/components/sections/ServicesSection").then((mod) => mod.ServicesSection),
);
const JourneyStepsSection = dynamic(() =>
  import("@/components/sections/JourneyStepsSection").then((mod) => mod.JourneyStepsSection),
);
const WhyUsSection = dynamic(() =>
  import("@/components/sections/WhyUsSection").then((mod) => mod.WhyUsSection),
);
const TestimonialsSection = dynamic(() =>
  import("@/components/sections/TestimonialsSection").then((mod) => mod.TestimonialsSection),
);
const FAQSection = dynamic(() =>
  import("@/components/sections/FAQSection").then((mod) => mod.FAQSection),
);
const CTASection = dynamic(() =>
  import("@/components/sections/CTASection").then((mod) => mod.CTASection),
);
const Footer = dynamic(() =>
  import("@/components/layout/Footer").then((mod) => mod.Footer),
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <JourneyStepsSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
