import { Home, ShieldCheck, MessageCircle, Puzzle, type LucideIcon } from "lucide-react";

export type TrustIntroItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

// Short, factual reinforcement of the daycare's existing content — no
// unsupported claims, certifications, or statistics.
export const trustIntroItems: TrustIntroItem[] = [
  {
    icon: Home,
    title: "Home-Based & Close-Knit",
    description: "A small, in-home setting with a maximum of 8 children, for a close bond between kids and teachers.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description: "A spacious backyard and secure setting give children plenty of room to explore and play.",
  },
  {
    icon: MessageCircle,
    title: "Daily Parent Communication",
    description: "Stay in the loop with daily updates, photos, and reports sent through the Lillio app.",
  },
  {
    icon: Puzzle,
    title: "Learning Through Play",
    description: "Age-appropriate, play-based activities that support each child's growth every day.",
  },
];
