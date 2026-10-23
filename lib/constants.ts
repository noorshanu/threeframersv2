export const SITE_NAME = "Thr33 Frames";

export const SITE_DESCRIPTION =
  "Scaling brands for niche authorities with world class organic content. Currently working with personal brands, funded startups, Crypto/trading ventures and much more.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thr33frames.com";

export const CAL_DISCOVERY_URL = "https://cal.com/harsh-mehta-wspfeh/30min";

export const CONTACT_EMAIL = "founder@thr33framess.com";
export const CONTACT_PHONE = "+919669223715";
export const CONTACT_PHONE_DISPLAY = "+91 96692 23715";
export const CDN_BASE =
  "https://cdn.prod.website-files.com/6778043699a2f913f47628dd";

export const ASSETS = {
  logo: "/logo.jpg",
  favicon: "/logo.jpg",
  webclip: "/logo.jpg",
  heroGradient: `${CDN_BASE}/68ce5f7fbf72d4300ecf5d59_Clip path group (1).avif`,
  reviewsBg: `${CDN_BASE}/68ce5f7fbf72d4300ecf5d59_Clip path group (1).avif`,
} as const;

export const NAV_LINKS = [
  { label: "Process", href: "#section_process" },
  { label: "Solutions", href: "#section_solutions" },
  { label: "Work", href: "#section_work" },
  { label: "Testimonials", href: "#section_testimonials" },
] as const;

export const FOOTER_LINKS = [
  { label: "Process", href: "#section_process" },
  { label: "Portfolio", href: "#section_work" },
  { label: "Testimonials", href: "#section_testimonials" },
  { label: "FAQs", href: "#section_faq" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thr33frames/",
  },
] as const;
