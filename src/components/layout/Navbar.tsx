"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Home } from "lucide-react";
import { navLinks } from "@/data/nav";
import { siteConfig } from "@/data/site";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  // Close the mobile menu on route change (adjusting state during render,
  // per https://react.dev/learn/you-might-not-need-an-effect)
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full border border-white/60 bg-white/85 px-4 py-2.5 shadow-soft backdrop-blur-md sm:px-6"
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full py-1 pr-2 font-display text-lg font-semibold text-ink-900 transition-colors hover:text-brand-600"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white">
            <Home className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <span>{siteConfig.shortName}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                    isActive ? "text-brand-600" : "text-ink-700 hover:text-brand-600"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button href="/contact" size="md">
            Schedule a Visit
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink-900 transition-colors hover:bg-cream-200 md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "mx-4 mt-2 origin-top overflow-hidden rounded-3xl border border-white/60 bg-white/95 shadow-soft-lg backdrop-blur-md transition-all duration-300 ease-out md:hidden",
          open ? "max-h-96 scale-100 opacity-100" : "pointer-events-none max-h-0 scale-95 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-base font-semibold transition-colors",
                    isActive ? "bg-brand-50 text-brand-600" : "text-ink-700 hover:bg-cream-200"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-2">
            <Button href="/contact" className="w-full">
              Schedule a Visit
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
