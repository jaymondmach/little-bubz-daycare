import type { ReactNode } from "react";
import BackgroundBlobs from "@/components/ui/BackgroundBlobs";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-teal-700 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <BackgroundBlobs variant="dark" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {eyebrow && (
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold tracking-wide text-white uppercase backdrop-blur-sm">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-white/85">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
