import { Quote, Star } from "lucide-react";
import Card from "@/components/ui/Card";
import type { Testimonial } from "@/data/testimonials";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card hoverable className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-sun-400 text-sun-400" aria-hidden="true" />
          ))}
        </div>
        <Quote className="h-7 w-7 text-brand-200" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <p className="mt-4 flex-1 text-base leading-relaxed text-ink-700 text-pretty">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal-100 font-display text-sm font-semibold text-teal-700"
        >
          {testimonial.initials}
        </div>
        <p className="text-sm font-semibold text-ink-900">{testimonial.name}</p>
      </div>
    </Card>
  );
}
