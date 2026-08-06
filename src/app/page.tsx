import Hero from "@/components/sections/home/Hero";
import TrustIntro from "@/components/sections/home/TrustIntro";
import ServicesSection from "@/components/sections/home/ServicesSection";
import TrustSplit from "@/components/sections/home/TrustSplit";
import RoomGallery from "@/components/sections/home/RoomGallery";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import CTASection from "@/components/shared/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIntro />
      <ServicesSection />
      <TrustSplit />
      <RoomGallery />
      <TestimonialsSection />
      <CTASection
        eyebrow="Get in Touch"
        title="Looking for a warm and caring place for your child?"
        description="Contact Little Bubz Daycare to ask about availability, subsidies, or scheduling a visit."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Learn About Subsidies"
        secondaryHref="/subsidies"
      />
    </>
  );
}
