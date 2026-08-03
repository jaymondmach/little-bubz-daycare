import type { Metadata } from "next";
import { ExternalLink, Play, ShieldCheck, Smartphone, ClipboardCheck } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CTASection from "@/components/shared/CTASection";
import PhoneMockup from "@/components/shared/PhoneMockup";
import { lillioFeatures } from "@/data/lillio";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Lillio Family App",
  description:
    "Learn how we use Lillio to keep families connected with daily updates, photos, meals, naps, activities, attendance, and messaging.",
};

export default function LillioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Family Communication"
        title="Stay close to your child's day with Lillio"
        description="We partner with Lillio, a trusted childcare app, so you can see and feel connected to your child's day — even while you're at work or on the go."
      >
        <Button
          href={siteConfig.lillioUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="bg-white text-teal-700 hover:bg-cream-100 hover:text-teal-800"
          icon={<ExternalLink className="h-5 w-5" />}
        >
          Open Lillio Family Portal
        </Button>
      </PageHeader>

      {/* Intro / explanation */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="mb-3 inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold tracking-wide text-teal-700 uppercase">
              What is Lillio?
            </span>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl">
              One simple app that keeps you in the loop
            </h2>
            <p className="mt-5 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
              At Little Bubz, we utilize the Lillio app for seamless communication between
              teachers and families and daily updates on your child&apos;s activities. The app
              includes photos and videos that showcase children&apos;s development and keep
              parents informed and engaged. It&apos;s an excellent way for parents to stay
              connected and follow their child&apos;s day even when they are apart.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink-700 sm:text-base">
              <li className="flex items-start gap-3">
                <Smartphone className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" aria-hidden="true" />
                Available on iOS, Android, and desktop
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" aria-hidden="true" />
                Private and secure — only your family sees your child&apos;s updates
              </li>
            </ul>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
              <Button
                href={siteConfig.lillioRegistrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={<ExternalLink className="h-5 w-5" />}
              >
                Enroll Now
              </Button>
              <Button
                href="https://www.youtube.com/watch?v=rKYF75D87BA"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                icon={<Play className="h-5 w-5" />}
                iconPosition="left"
              >
                Lillio Video
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex justify-center">
            <PhoneMockup />
          </Reveal>
        </div>
      </section>

      {/* Feature grid */}
      <section className="bg-cream-100 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Everything in One Place"
              title="What you'll find in the app"
              description="Every classroom updates Lillio throughout the day, so you always have an accurate picture of how your child is doing."
            />
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {lillioFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 80}>
                  <Card hoverable className="h-full">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="font-display mt-4 text-lg font-semibold text-ink-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      {feature.description}
                    </p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enrollment */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Card className="text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                <ClipboardCheck className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className="font-display mt-5 text-2xl font-semibold text-ink-900 sm:text-3xl">
                Register your child today through Lillio App
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-ink-500 sm:text-base">
                New families can apply online in minutes. Already enrolled? Use the family
                portal to view your child&apos;s daily updates.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  href={siteConfig.lillioRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<ExternalLink className="h-5 w-5" />}
                >
                  Enroll Now
                </Button>
                <Button
                  href={siteConfig.lillioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                >
                  Open Lillio Family Portal
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Questions About Lillio?"
        title="We're happy to walk you through it"
        description="Whether you're a tech pro or brand new to apps, our staff can help you get set up in minutes."
        primaryLabel="Contact Us"
      />
    </>
  );
}
