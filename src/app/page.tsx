import { HeroSection } from "@/components/home/hero-section";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhyUs } from "@/components/home/why-us";
import { CtaBanner } from "@/components/home/cta-banner";
import { Testimonials } from "@/components/home/testimonials";
import { FeaturedCars } from "@/components/home/featured-cars";
import { AboutSummary } from "@/components/home/about-summary";
import { VisionMission } from "@/components/home/vision-mission";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSummary />
      <WhyUs />
      <FeaturedCars />
      <Testimonials />
      <VisionMission />
      <CtaBanner />
    </>
  );
}
