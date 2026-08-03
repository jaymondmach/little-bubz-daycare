import type { LucideIcon } from "lucide-react";

type TrustBadgeProps = {
  icon: LucideIcon;
  label: string;
};

export default function TrustBadge({ icon: Icon, label }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-cream-200 bg-white px-4 py-2 shadow-soft transition-transform duration-200 hover:-translate-y-0.5">
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
        <Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
      </span>
      <span className="text-xs font-semibold text-ink-700 sm:text-sm">{label}</span>
    </div>
  );
}
