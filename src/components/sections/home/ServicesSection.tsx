import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-cream-100 px-6 pt-20 pb-20 sm:pt-64 sm:pb-28 lg:pt-44"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            description="At Little Bubz Daycare, we offer a range of services tailored to meet the unique needs of each child. From age-appropriate activities to exploring outside, we strive to create a supportive and enriching environment for your child to thrive."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            href={siteConfig.lillioRegistrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            Enroll Now
          </Button>
        </div>
      </div>
    </section>
  );
}
