import Card from "@/components/ui/Card";
import type { Service } from "@/data/services";

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <Card hoverable className="flex h-full flex-col items-start text-left">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="font-display mt-4 text-lg font-semibold text-ink-900">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.description}</p>
    </Card>
  );
}
