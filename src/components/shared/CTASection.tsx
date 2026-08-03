import type { ReactNode } from "react";
import BackgroundBlobs from "@/components/ui/BackgroundBlobs";
import Button from "@/components/ui/Button";
import { ArrowRight, ExternalLink, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

type CTASectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  showCallButton?: boolean;
  // Generic secondary link button, shown instead of the phone button when provided.
  secondaryLabel?: string;
  secondaryHref?: string;
  // Set when secondaryHref points off-site (opens in a new tab).
  secondaryExternal?: boolean;
  children?: ReactNode;
};

export default function CTASection({
  eyebrow = "Ready when you are",
  title,
  description,
  primaryLabel = "Schedule a Visit",
  primaryHref = "/contact",
  showCallButton = true,
  secondaryLabel,
  secondaryHref,
  secondaryExternal = false,
  children,
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-brand-500 py-20 sm:py-24">
      <BackgroundBlobs variant="dark" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {eyebrow && (
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase backdrop-blur-sm">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-pretty text-white/90">
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            href={primaryHref}
            size="lg"
            className="bg-white text-brand-600 hover:bg-cream-100 hover:text-brand-700"
            icon={<ArrowRight className="h-5 w-5" />}
          >
            {primaryLabel}
          </Button>
          {secondaryLabel && secondaryHref ? (
            <Button
              href={secondaryHref}
              size="lg"
              variant="ghost"
              className="text-white hover:bg-white/15 hover:text-white"
              {...(secondaryExternal
                ? { target: "_blank", rel: "noopener noreferrer", icon: <ExternalLink className="h-4 w-4" /> }
                : {})}
            >
              {secondaryLabel}
            </Button>
          ) : (
            showCallButton && (
              <Button
                href={siteConfig.contact.phoneHref}
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/15 hover:text-white"
                icon={<Phone className="h-5 w-5" />}
                iconPosition="left"
              >
                {siteConfig.contact.phone}
              </Button>
            )
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
