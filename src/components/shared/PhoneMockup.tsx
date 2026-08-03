import { Bell, Camera, Moon, UtensilsCrossed, Wifi, Signal, BatteryFull } from "lucide-react";

/**
 * A CSS-drawn phone frame illustrating what the Lillio family app looks
 * like day-to-day. Purely illustrative — swap for real product screenshots
 * when available.
 */
export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px]">
      <div className="rounded-[2.75rem] border-[10px] border-ink-900 bg-ink-900 shadow-soft-lg">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-cream-100">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] font-semibold text-ink-900">
            <span>9:41</span>
            <div className="flex items-center gap-1">
              <Signal className="h-3 w-3" />
              <Wifi className="h-3 w-3" />
              <BatteryFull className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Notch */}
          <div className="absolute top-0 left-1/2 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-ink-900" />

          {/* App header */}
          <div className="flex items-center justify-between px-5 pt-3 pb-4">
            <div>
              <p className="text-[10px] font-medium text-ink-500">Good afternoon</p>
              <p className="font-display text-sm font-semibold text-ink-900">Mila&apos;s Day</p>
            </div>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-100 text-brand-600">
              <Bell className="h-4 w-4" />
            </span>
          </div>

          {/* App content cards */}
          <div className="space-y-3 px-4 pb-6">
            <div className="rounded-2xl bg-white p-3 shadow-soft">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-sun-100 text-sun-600">
                  <Camera className="h-4 w-4" />
                </span>
                <div className="flex-1">
                  <p className="text-xs font-semibold text-ink-900">New photo shared</p>
                  <p className="text-[10px] text-ink-500">Art time &middot; 2 min ago</p>
                </div>
              </div>
              <div className="mt-2 aspect-video w-full rounded-xl bg-gradient-to-br from-sun-200 via-brand-100 to-teal-100" />
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-white p-3 shadow-soft">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                <UtensilsCrossed className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold text-ink-900">Lunch: Ate well</p>
                <p className="text-[10px] text-ink-500">12:15 PM</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-teal-400" />
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-white p-3 shadow-soft">
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-lav-100 text-lav-500">
                <Moon className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold text-ink-900">Nap time started</p>
                <p className="text-[10px] text-ink-500">1:05 PM</p>
              </div>
              <span className="h-2 w-2 rounded-full bg-lav-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
