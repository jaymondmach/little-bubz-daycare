import { Puzzle, Trees, ShieldCheck, Heart, Smartphone, HandCoins, type LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Services derived only from the daycare's existing written content.
export const services: Service[] = [
  {
    icon: Puzzle,
    title: "Learning Through Play",
    description: "Age-appropriate activities that make learning fun and hands-on every day.",
  },
  {
    icon: Trees,
    title: "Big Backyard to Explore",
    description: "A spacious backyard offers ample room for children to explore and play outdoors.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure Environment",
    description: "A supportive, secure space where your child can explore with confidence.",
  },
  {
    icon: Heart,
    title: "Enrichment Programs",
    description: "A range of enriching activities tailored to meet the unique needs of each child.",
  },
  {
    icon: Smartphone,
    title: "Lillio App for Daily Reports",
    description: "Daily reports, photos, and updates delivered straight to your phone through Lillio.",
  },
  {
    icon: HandCoins,
    title: "Government Programs and Subsidies Accepted",
    description: "We are approved for government subsidies and funding to help support your family.",
  },
];
