import {
  Bell,
  Camera,
  UtensilsCrossed,
  Moon,
  Puzzle,
  ClipboardCheck,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

export type LillioFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const lillioFeatures: LillioFeature[] = [
  {
    icon: Bell,
    title: "Daily Updates",
    description: "Get real-time notifications throughout the day so you're never left wondering how things are going.",
  },
  {
    icon: Camera,
    title: "Photos",
    description: "See candid photos of your child throughout the day, straight from their classroom.",
  },
  {
    icon: UtensilsCrossed,
    title: "Meals",
    description: "Track what and how much your child ate at each meal and snack time.",
  },
  {
    icon: Moon,
    title: "Naps",
    description: "Get notified when nap time starts and ends, so bedtime is never a surprise.",
  },
  {
    icon: Puzzle,
    title: "Activities",
    description: "Follow along with the day's learning activities, crafts, and milestones.",
  },
  {
    icon: ClipboardCheck,
    title: "Attendance",
    description: "Digital check-in and check-out keeps accurate, secure attendance records.",
  },
  {
    icon: MessageSquare,
    title: "Messaging",
    description: "Chat directly with your child's teacher for quick questions or updates.",
  },
];
