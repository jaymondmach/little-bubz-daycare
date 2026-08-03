import { Users, MessageSquareText, Trees, HandCoins, type LucideIcon } from "lucide-react";

export type TrustSplitPoint = {
  icon: LucideIcon;
  text: string;
};

// Points drawn directly from the daycare's existing written content.
export const trustSplitPoints: TrustSplitPoint[] = [
  {
    icon: Users,
    text: "A maximum of 8 children, so every child gets a close-knit bond with their teachers.",
  },
  {
    icon: MessageSquareText,
    text: "Daily reports, photos, and updates sent through the Lillio app.",
  },
  {
    icon: Trees,
    text: "A spacious backyard with ample room for children to explore and play.",
  },
  {
    icon: HandCoins,
    text: "Approved for government subsidies and funding.",
  },
];
