import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Mail, CalendarClock } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import InstagramIcon from "@/components/ui/InstagramIcon";
import CTASection from "@/components/shared/CTASection";
import { explorersLocation } from "@/data/explorers";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Little Bubz Explorers",
  description:
    "Little Bubz Explorers is our Fraser Heights location, offering the same trusted infant and toddler care with weekend hours.",
};

export default function ExplorersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Second Location"
        title="Little Bubz Explorers"
        description="Weekend care in Fraser Heights — the same trusted infant & toddler care as our main location, open Saturdays and Sundays."
      />

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="mx-auto max-w-sm overflow-hidden rounded-[2rem] shadow-soft-lg">
              <Image
                src={explorersLocation.image}
                alt={`${explorersLocation.name} flyer`}
                width={1024}
                height={1536}
                className="h-auto w-full"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display text-2xl font-semibold text-ink-900 sm:text-3xl">
              {explorersLocation.name}
            </h2>
            <p className="mt-2 text-base text-ink-500">{explorersLocation.careType}</p>

            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="mt-2 text-sm text-ink-700 sm:text-base">
                  {explorersLocation.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <CalendarClock className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="mt-2 text-sm text-ink-700 sm:text-base">
                  {explorersLocation.weekendHours.days}: {explorersLocation.weekendHours.time}
                  <span className="mt-1 block text-xs text-ink-500">
                    {explorersLocation.weekendNote}
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <a
                  href={`mailto:${explorersLocation.email}`}
                  className="mt-2 text-sm font-semibold text-ink-700 hover:text-brand-600 sm:text-base"
                >
                  {explorersLocation.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <a
                  href={explorersLocation.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm font-semibold text-brand-600 hover:text-brand-700 sm:text-base"
                >
                  @littlebubzexplorers
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Spots Are Limited"
        title="Book a weekend tour today"
        description="Reach out to ask about weekend availability at our Fraser Heights location, or apply online to get started."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Apply Online"
        secondaryHref={siteConfig.lillioRegistrationUrl}
        secondaryExternal
      />
    </>
  );
}
