// ---------------------------------------------------------------------------
// SITE / BUSINESS CONFIG
// Replace every value below with the real daycare's information.
// This file is the single source of truth for business info used across
// the navbar, footer, contact page, and CTA sections.
// ---------------------------------------------------------------------------

const LILLIO_REGISTRATION_URL =
  "https://app.lillio.com/online_registration/apply/little-bubz-daycare";

export const siteConfig = {
  name: "Little Bubz Daycare",
  shortName: "Little Bubz",
  tagline: "A Home Away From Home",

  // Used for metadata, the sitemap, and robots.txt. Set the
  // NEXT_PUBLIC_SITE_URL environment variable in Vercel once a real domain
  // is connected — falls back to localhost for local development.
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",

  description:
    "Little Bubz Daycare provides in-home infant and toddler care for ages 0 to 36 months, with a spacious backyard, a maximum of 8 children, and daily updates through the Lillio app.",

  contact: {
    phone: "(778) 792-2884",
    phoneHref: "tel:+17787922884",
    email: "Littlebubz.daycare@gmail.com",
    address: {
      line1: "11689 99a Ave",
      line2: "Surrey, BC V3V 7K5",
      full: "11689 99a Ave, Surrey, BC V3V 7K5",
    },
    // Opens Google Maps directly (not an embed URL — those only work inside an iframe)
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=11689+99a+Ave,+Surrey,+BC+V3V+7K5",
  },

  // Operating hours, as stated on the daycare's existing website
  hours: [{ days: "Monday – Friday", time: "8:00 AM – 5:30 PM" }],
  statutoryHolidayNote: "Closed on statutory holidays.",

  social: {
    instagram: "https://www.instagram.com/littlebubzdaycare",
  },

  // Lillio online registration form — how new families apply/enroll
  lillioRegistrationUrl: LILLIO_REGISTRATION_URL,

  // Family portal link (used once a family is already enrolled, to view
  // daily updates). Points at the registration form for now — update once
  // a dedicated family-login URL is available from Lillio.
  lillioUrl: LILLIO_REGISTRATION_URL,
};

export type SiteConfig = typeof siteConfig;
