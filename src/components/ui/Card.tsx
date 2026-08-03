import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type CardProps = ComponentPropsWithoutRef<"div"> & {
  hoverable?: boolean;
};

export default function Card({ hoverable = false, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-cream-200 bg-white p-6 shadow-soft sm:p-8",
        hoverable &&
          "transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-soft-lg hover:border-brand-200",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
