import { Baby, Users, HandCoins, CalendarDays, type LucideIcon } from "lucide-react";

export type TrustBadgeItem = {
  icon: LucideIcon;
  label: string;
};

// Short factual highlights, drawn directly from the daycare's existing
// written content — shown as small badges in the hero section.
export const heroTrustBadges: TrustBadgeItem[] = [
  { icon: Baby, label: "Ages 0–36 Months" },
  { icon: Users, label: "Max 8 Children" },
  { icon: HandCoins, label: "Government Subsidies Accepted" },
  { icon: CalendarDays, label: "Monday–Friday Care" },
];
