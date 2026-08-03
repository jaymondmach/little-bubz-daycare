import { trustIntroItems } from "@/data/trust-intro";
import Reveal from "@/components/ui/Reveal";

export default function TrustIntro() {
  return (
    // Zero-height anchor sitting exactly at the seam between the hero and
    // the next section. From sm: up, the card is taken out of flow and
    // shifted up by exactly half its own rendered height (-translate-y-1/2),
    // so it straddles that seam evenly no matter how tall it renders.
    <div className="relative sm:z-10">
      <div className="px-6 sm:absolute sm:inset-x-0 sm:top-0 sm:-translate-y-1/2">
        <div className="mx-auto max-w-6xl">
          <div className="mt-10 grid gap-4 rounded-[2rem] border border-cream-200 bg-white p-6 shadow-soft-lg sm:mt-0 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            {trustIntroItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 80}>
                  <div className="flex h-full flex-col items-center gap-3 rounded-2xl p-3 text-center transition-colors hover:bg-cream-50 sm:p-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink-900">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-ink-500">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
