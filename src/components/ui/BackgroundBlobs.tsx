import { cn } from "@/lib/utils";

type BackgroundBlobsProps = {
  variant?: "light" | "dark";
  className?: string;
};

/**
 * Decorative, purely aria-hidden background shapes. Reused across sections
 * to give the page a soft, playful backdrop without relying on imagery.
 */
export default function BackgroundBlobs({ variant = "light", className }: BackgroundBlobsProps) {
  const palette =
    variant === "light"
      ? { a: "bg-brand-200/50", b: "bg-teal-200/50", c: "bg-sun-200/50" }
      : { a: "bg-white/10", b: "bg-teal-400/25", c: "bg-sun-300/20" };

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div
        className={cn(
          "animate-blob animate-float-slow absolute -top-16 -left-16 h-72 w-72 blur-3xl",
          palette.a
        )}
      />
      <div
        className={cn(
          "animate-blob absolute top-1/3 -right-24 h-80 w-80 blur-3xl [animation-delay:-4s]",
          palette.b
        )}
      />
      <div
        className={cn(
          "animate-blob animate-float absolute -bottom-20 left-1/4 h-64 w-64 blur-3xl [animation-delay:-2s]",
          palette.c
        )}
      />
    </div>
  );
}
