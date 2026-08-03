import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, ExternalLink, ClipboardCheck } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import InstagramIcon from "@/components/ui/InstagramIcon";
import FAQAccordion from "@/components/shared/FAQAccordion";
import CTASection from "@/components/shared/CTASection";
import { siteConfig } from "@/data/site";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch to ask about availability or apply online. Find our phone, email, location, and hours.",
};

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.contact.address.full,
    href: siteConfig.contact.mapUrl,
    external: true,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: "@littlebubzdaycare",
    href: siteConfig.social.instagram,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact Us"
        title="Let's start the conversation"
        description="Whether you're ready to apply or just have a few questions about availability, we'd love to hear from you."
      />

      <section className="px-6 pt-20 sm:pt-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-600 px-8 py-10 text-center shadow-soft-lg sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                  <ClipboardCheck className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-white sm:text-2xl">
                    Ready to enroll?
                  </h2>
                  <p className="mt-1 text-sm text-white/85 sm:text-base">
                    Apply online in minutes through our Lillio registration form.
                  </p>
                </div>
              </div>
              <Button
                href={siteConfig.lillioRegistrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-white text-brand-600 hover:bg-cream-100 hover:text-brand-700"
                icon={<ExternalLink className="h-5 w-5" />}
              >
                Apply Online
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactCards.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.label} hoverable className="p-5">
                    <a
                      href={item.href}
                      className="flex items-start gap-3"
                      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-bold tracking-wide text-ink-500 uppercase">
                          {item.label}
                        </span>
                        <span className="mt-1 block text-sm font-semibold break-words text-ink-900">
                          {item.value}
                        </span>
                      </span>
                    </a>
                  </Card>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-4">
            <Card className="p-5">
              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Clock className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <span className="block text-xs font-bold tracking-wide text-ink-500 uppercase">
                      Hours
                    </span>
                    <dl className="mt-1 space-y-1">
                      {siteConfig.hours.map((entry) => (
                        <div key={entry.days} className="flex gap-2 text-sm">
                          <dt className="text-ink-500">{entry.days}:</dt>
                          <dd className="font-semibold text-ink-900">{entry.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
                <p className="text-xs text-ink-500 sm:ml-4">{siteConfig.statutoryHolidayNote}</p>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream-100 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Frequently Asked Questions"
              title="Questions parents often ask"
              description="Can't find what you're looking for? Reach out and we'll be happy to help."
            />
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <FAQAccordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Let's Talk"
        title="Have a question about availability?"
        description="Give us a call or send an email — we'd love to hear from you and answer any questions."
        primaryLabel="Call Us"
        primaryHref={siteConfig.contact.phoneHref}
        secondaryLabel="Email Us"
        secondaryHref={`mailto:${siteConfig.contact.email}`}
      />
    </>
  );
}
