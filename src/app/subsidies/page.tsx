import type { Metadata } from "next";
import { ExternalLink, AlertTriangle, Landmark, Wallet } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Reveal from "@/components/ui/Reveal";
import CTASection from "@/components/shared/CTASection";
import NumberedStepCard from "@/components/shared/NumberedStepCard";
import { subsidyPrograms, ccfriDetail, accbDetail } from "@/data/subsidies";

export const metadata: Metadata = {
  title: "Subsidies",
  description:
    "An overview of BC childcare subsidy programs — the Child Care Fee Reduction Initiative (CCFRI) and the Affordable Child Care Benefit (ACCB) — including eligibility and how to apply.",
};

export default function SubsidiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Financial Assistance"
        title="Subsidies"
        description="Subsidies and government programs are designed to reduce and stabilize child care costs for families. Your eligible subsidy amount is determined by the age of your child and whether they're in full or part time care, rather than your family household income."
      />

      {/* Program overview */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Available Programs"
              title="BC childcare subsidy programs"
              description="Here's a quick overview of the provincial programs that can help reduce your childcare costs."
            />
          </Reveal>

          <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {subsidyPrograms.map((program, index) => (
              <Reveal key={program.title} delay={index * 90}>
                <NumberedStepCard step={program} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CCFRI detail */}
      <section className="bg-cream-100 px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Card>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
                <Landmark className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className="font-display mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">
                {ccfriDetail.title}
              </h2>
              <div className="mt-4 space-y-4">
                {ccfriDetail.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-base leading-relaxed text-pretty text-ink-500"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <a
                href={ccfriDetail.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                For more details, visit {ccfriDetail.link.label}
              </a>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* ACCB detail + qualifications */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Card>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <Wallet className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h2 className="font-display mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">
                {accbDetail.title}
              </h2>
              <div className="mt-4 space-y-4">
                {accbDetail.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 24)}
                    className="text-base leading-relaxed text-pretty text-ink-500"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {accbDetail.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    Visit {link.label}
                  </a>
                ))}
              </div>

              <h3 className="font-display mt-10 text-xl font-semibold text-ink-900">
                Qualifications for Affordable Child Care Benefit
              </h3>
              <div className="mt-6 space-y-6 border-t border-cream-200 pt-6">
                {accbDetail.qualifications.map((group, index) => (
                  <div key={group.title}>
                    <h4 className="text-sm font-bold text-ink-900">
                      {index + 1}. {group.title}
                    </h4>
                    {group.intro && (
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{group.intro}</p>
                    )}
                    {group.items && (
                      <ul className="mt-2 space-y-1.5">
                        {group.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-700"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-6 pb-4">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="flex items-start gap-4 rounded-3xl border border-sun-200 bg-sun-50 p-6">
              <AlertTriangle
                className="mt-0.5 h-6 w-6 shrink-0 text-sun-600"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-ink-700">
                <strong className="font-semibold text-ink-900">Please note:</strong> Subsidy
                amounts, eligibility, and application steps are set by the Province of BC and can
                change over time. This page is provided as a general, informational overview
                only. Please confirm current amounts and requirements directly with the relevant
                BC government program before applying.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Need a Hand?"
        title="We're here to help with the process"
        description="Our team has helped many families navigate subsidy applications. Reach out and we'll point you in the right direction."
        primaryLabel="Get Help Now"
      />
    </>
  );
}
