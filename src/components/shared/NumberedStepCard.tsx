import { ExternalLink } from "lucide-react";
import Card from "@/components/ui/Card";
import type { SubsidyProgram } from "@/data/subsidies";

export default function NumberedStepCard({ step }: { step: SubsidyProgram }) {
  const Icon = step.icon;

  return (
    <Card hoverable className="relative flex h-full flex-col pt-10">
      <span
        aria-hidden="true"
        className="font-display absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500 text-lg font-bold text-white shadow-soft"
      >
        {step.step}
      </span>
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <h3 className="font-display mt-4 text-lg font-semibold text-ink-900">{step.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">{step.description}</p>
      {step.links && step.links.length > 0 && (
        <ul className="mt-4 space-y-1.5 border-t border-cream-200 pt-4">
          {step.links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600 hover:text-brand-700"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
