export const SITE_NAME = "THR33 Frames";

export const SITE_DESCRIPTION =
  "Scaling brands for niche authorities with world class organic content. Currently working with personal brands, funded startups, Crypto/trading ventures and much more.";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.metromediahouse.co";

export const CAL_DISCOVERY_URL = "https://cal.com/metro-media-house/discovery";
export const CDN_BASE =
  "https://cdn.prod.website-files.com/6778043699a2f913f47628dd";

export const ASSETS = {
  logo: "/logo.jpg",
  heroGradient: `${CDN_BASE}/68ce5f7fbf72d4300ecf5d59_Clip path group (1).avif`,
  heroSticker: `${CDN_BASE}/68cf96eb31e835d7e29dc66b_sketch purple.svg`,
  favicon: `${CDN_BASE}/67b4cfb60ec983738f3e3d9c_favicon.png`,
  webclip: `${CDN_BASE}/69fcd5a6893466cc76fa8abf_MMH Webclip.avif`,
  stickerGreen: `${CDN_BASE}/68cf96eb6ef7b334f3a6e29c_sketch green.svg`,
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
    href: "https://www.instagram.com/metromedia.house/",
  },
  {
    label: "X",
    href: "https://x.com/metromediahouse",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/metro-media-house/",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@metromediahouse",
  },
] as const;
