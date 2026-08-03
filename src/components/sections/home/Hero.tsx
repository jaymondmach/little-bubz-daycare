import Image from "next/image";
import { ArrowRight, Compass, Trees, Puzzle, MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import BackgroundBlobs from "@/components/ui/BackgroundBlobs";
import TrustBadge from "@/components/ui/TrustBadge";
import { heroTrustBadges } from "@/data/trust-badges";

// Small decorative motifs orbiting the hero illustration.
const motifs = [
  { icon: Trees, label: "Big Backyard", tone: "bg-teal-100 text-teal-600", position: "-top-4 -left-4 sm:-left-8" },
  { icon: Puzzle, label: "Learning Through Play", tone: "bg-sun-100 text-sun-600", position: "top-1/4 -right-6 sm:-right-10" },
  { icon: MessageCircle, label: "Daily Updates", tone: "bg-pink-100 text-pink-600", position: "bottom-8 -left-6 sm:-left-10" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-sky-100 to-cream-100 pt-32 pb-20 sm:pt-40 sm:pb-64 lg:pb-44">
      <BackgroundBlobs />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div className="animate-fade-up text-center lg:text-left">
          <h1 className="font-display text-4xl leading-tight font-semibold tracking-tight text-balance text-ink-900 sm:text-5xl lg:text-6xl">
            Little Bubz Daycare
          </h1>
          <p className="font-display mt-3 text-xl text-brand-600 italic">
            &ldquo;A Home Away From Home&rdquo;
          </p>

          {/* Exact body copy from the daycare's existing website */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-pretty text-ink-500 sm:text-lg lg:mx-0">
            Welcome to Little Bubz Daycare, where we provide in-home infant and toddler care for
            ages 0 to 36 months. Our hours are Monday to Friday from 8 am to 5:30 pm, and we are
            closed on statutory holidays. Our spacious backyard offers ample room for children to
            explore and play. We are approved for government subsidies and funding. With a
            maximum of 8 children, we ensure a close-knit bond between children and teachers.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button href="/contact" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Contact Us
            </Button>
            <Button
              href="#services"
              size="lg"
              variant="outline"
              icon={<Compass className="h-5 w-5" />}
              iconPosition="left"
            >
              View Our Programs
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {heroTrustBadges.map((badge) => (
              <TrustBadge key={badge.label} icon={badge.icon} label={badge.label} />
            ))}
          </div>
        </div>

        {/* TODO: Swap /public/home-playground-upscaled.jpg for real daycare photography when available */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-sm sm:block">
          <div className="animate-blob absolute inset-6 overflow-hidden shadow-soft-lg">
            <Image
              src="/home-playground-upscaled.jpg"
              alt="Illustration of a daycare playground with a slide, swings, and trees"
              fill
              priority
              sizes="(min-width: 640px) 24rem, 0px"
              className="object-cover"
            />
          </div>

          {motifs.map(({ icon: Icon, label, tone, position }, index) => (
            <div
              key={label}
              aria-hidden="true"
              className={`absolute ${position} ${
                index % 2 === 0 ? "animate-float" : "animate-float-slow"
              } flex items-center gap-2 rounded-2xl bg-white px-3 py-2.5 shadow-soft-lg`}
            >
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${tone}`}>
                <Icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="text-xs font-semibold whitespace-nowrap text-ink-900">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
