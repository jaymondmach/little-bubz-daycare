import { testimonials } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/shared/TestimonialCard";
import Reveal from "@/components/ui/Reveal";

export default function TestimonialsSection() {
  return (
    <section className="bg-cream-100 px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Parents Say About Us"
            description="5 Star review on Google!"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 100}>
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
