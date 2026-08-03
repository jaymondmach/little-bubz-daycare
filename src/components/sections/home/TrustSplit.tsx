import Reveal from "@/components/ui/Reveal";
import BackgroundBlobs from "@/components/ui/BackgroundBlobs";
import { trustSplitPoints } from "@/data/trust-split";

export default function TrustSplit() {
  return (
    <section className="bg-cream-100 px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          {/* Decorative stat panel — this site doesn't use photography */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-teal-600 to-teal-800 px-8 py-14 text-center shadow-soft-lg sm:py-20">
            <BackgroundBlobs variant="dark" />
            <div className="relative">
              <p className="font-display text-8xl font-bold text-white sm:text-9xl">8</p>
              <p className="mt-2 text-sm font-bold tracking-[0.2em] text-teal-100 uppercase">
                Children Maximum
              </p>
              <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-teal-50/90">
                A small group size means every child gets a close, personal bond with their
                teachers.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <span className="mb-3 inline-block rounded-full bg-teal-100 px-4 py-1.5 text-xs font-bold tracking-wide text-teal-700 uppercase">
            Trust &amp; Communication
          </span>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl">
            A transparent, personal, close-knit daycare
          </h2>
          <p className="mt-5 text-base leading-relaxed text-pretty text-ink-500 sm:text-lg">
            We keep our group small and our communication open, so you always know how your
            child&apos;s day is going.
          </p>
          <ul className="mt-6 space-y-4">
            {trustSplitPoints.map((point) => {
              const Icon = point.icon;
              return (
                <li key={point.text} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="mt-1.5 text-sm text-ink-700 sm:text-base">{point.text}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
