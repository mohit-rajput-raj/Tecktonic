import { HeroSection } from "@/components/landing/hero-section";
import { ShowcaseBar } from "@/components/landing/showcase-bar";
import { FeaturesSection } from "@/components/landing/features-section";
import { StatsSection } from "@/components/landing/stats-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ShowcaseBar />
      <FeaturesSection />
      <StatsSection />
      <CtaSection />
      <Footer />
    </>
  );
}
