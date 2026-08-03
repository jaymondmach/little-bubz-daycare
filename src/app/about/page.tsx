import type { Metadata } from "next";
import Image from "next/image";
import { Quote } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import BackgroundBlobs from "@/components/ui/BackgroundBlobs";
import CTASection from "@/components/shared/CTASection";
import { founder } from "@/data/about";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Sophia, the founder and director of Little Bubz Daycare, and learn the story behind the name.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About Little Bubz Daycare"
        description="The story behind our home away from home."
      />

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-xs lg:max-w-none">
            <div className="relative mx-auto aspect-square w-full max-w-sm">
              <BackgroundBlobs className="opacity-70" />
              <div className="absolute inset-6 overflow-hidden rounded-full shadow-soft-lg ring-4 ring-white">
                <Image
                  src={founder.photo}
                  alt={`${founder.name}, ${founder.role} of ${siteConfig.name}`}
                  fill
                  sizes="(min-width: 1024px) 24rem, 20rem"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="mb-3 inline-block rounded-full bg-brand-100 px-4 py-1.5 text-xs font-bold tracking-wide text-brand-700 uppercase">
              Meet the Founder
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl">
              {founder.name}
            </h2>
            <p className="mt-1 text-sm font-semibold text-ink-500">{founder.role}</p>

            <div className="mt-6 space-y-5">
              {founder.bio.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-base leading-relaxed text-pretty text-ink-500 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-white p-8 text-center shadow-soft sm:p-12">
              <Quote
                className="mx-auto h-8 w-8 text-brand-300"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <p className="font-display mt-4 text-xl leading-relaxed text-balance text-ink-900 sm:text-2xl">
                &ldquo;The name &lsquo;Bubz&rsquo; comes from a childhood nickname, reflecting{" "}
                {founder.name}&apos;s personal connection to the children she cares for at the
                daycare.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Come Say Hello"
        title="Want to meet Sophia and see the space?"
        description="Reach out to ask questions, or apply online to get started."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Apply Online"
        secondaryHref={siteConfig.lillioRegistrationUrl}
        secondaryExternal
      />
    </>
  );
}
