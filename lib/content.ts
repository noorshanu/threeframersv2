import { CDN_BASE } from "./constants";
import { FLYWHEEL_RING } from "./flywheel-assets";

export const heroContent = {
  headlineBefore: "The content and distribution system for the",
  headlineHighlight: "leaders in tech and media",
  description:
    "Content infrastructure for the companies that define their space. We build and run the machine that earns attention, from production to distribution, across every platform you need to win.",
  ctaLabel: "Apply to Work With Us",
} as const;

export const stats = [
  {
    icon: `${CDN_BASE}/68ce5f7fbf72d4300ecf5d51_stats-03.svg`,
    label: "1B+ views generated",
  },
  {
    icon: `${CDN_BASE}/68ce5f7fbf72d4300ecf5d4f_stats-02.svg`,
    label: "4 years of brand",
  },
  {
    icon: `${CDN_BASE}/68ce5f7fbf72d4300ecf5d50_stats-01.svg`,
    label: "8,000 + videos created",
  },
] as const;

export const clientLogos = [
  `${CDN_BASE}/6a451dac86c45a48f3f070a5_study_fetch-removebg-preview.png`,
  `${CDN_BASE}/6a451e382b80f8bc9ebe63af_maple%20logo.png`,
  `${CDN_BASE}/6a451d327316606c592c6a07_white%20now.png`,
  `${CDN_BASE}/68cf67749b59179f7b4a8ce6_stabledash.png`,
  `${CDN_BASE}/68f8d5e330bb510146f0f15a_mimos.avif`,
  `${CDN_BASE}/68cf93e4f6cbe30b172356bc_barebone.avif`,
  `${CDN_BASE}/6a451da3bcf100263dfe9904_emirates%20white.png`,
  `${CDN_BASE}/68cf9e080a08b5611b0fbd6e_brand-logo-103.svg`,
] as const;

export const trustedReviews = [
  {
    quote:
      "Very receptive to feedback, quick to adapt, and genuinely collaborative. Their editing always captures the tone and story we're trying to tell, and they deliver with care and attention to detail.",
    highlight: "Their editing always captures the tone and story we're trying to tell, and they deliver with care and attention to detail.",
    highlightClass: "text-accent",
    name: "Liah Yoo",
    role: "Founder, Krave Beauty",
    rotation: "-rotate-[10deg]",
  },
  {
    quote:
      "Working with Thr33 Frames has been a game-changer for our paid media performance. Since partnering with them, we've seen our CPAs drop by 33%. Their creative work has been outperforming what we were running before, and they've become an essential part of our growth stack.",
    highlight: "we've seen our CPAs drop by 33%.",
    highlightClass: "text-accent-purple",
    name: "Aryan Arora",
    role: "Head of Growth & Advertising, Maple Inc",
    rotation: "-translate-y-12",
  },
  {
    quote:
      "The edits are genuinely great - they deeply understand pacing, hooks and storytelling - and they are always willing to agonise over the tiny details that makes a clip actually land.",
    highlight: "they deeply understand pacing, hooks and storytelling",
    highlightClass: "text-accent-green",
    name: "Zara Jarvis",
    role: "Content Manager, Steven Bartlett",
    rotation: "rotate-[10deg]",
  },
] as const;

export const workSection = {
  title: "Chaos In.",
  titleHighlight: "Cinema Out.",
  description:
    "Great content doesn't happen by accident. We turn raw footage, rough ideas, and ambitious concepts into a production machine built for consistency, crafted for attention, and designed to keep your brand one step ahead.",
  closing: "Less chaos. Better cuts. Bigger impact.",
  videos: [
    "https://play.gumlet.io/embed/6a6b877c921259f4eaf050ca?background=false&autoplay=true&loop=true&disableControls=false",
    "https://play.gumlet.io/embed/6a6b877c88fd78cc8e3a6f0f?background=false&autoplay=true&loop=true&disableControls=false",
    "https://play.gumlet.io/embed/6a6b877c88fd78cc8e3a6f0b?background=false&autoplay=true&loop=true&disableControls=false",
    "https://play.gumlet.io/embed/6a6b877c88fd78cc8e3a6f05?background=false&autoplay=true&loop=true&disableControls=false",
  ],
} as const;

/** Platforms on the flywheel orbit (clockwise from top). */
export const flywheelPlatforms = [
  {
    id: "10",
    label: "LinkedIn Posts",
    icon: "linkedin",
    angleDeg: 0,
  },
  {
    id: "3",
    label: "Instagram reels",
    icon: "instagram",
    angleDeg: 51,
  },
  {
    id: "1",
    label: "Youtube Shorts",
    icon: "youtube",
    angleDeg: 103,
  },
  {
    id: "6",
    label: "Instagram Carousels",
    icon: "instagram",
    angleDeg: 122,
  },
  {
    id: "4",
    label: "TikTok Videos",
    icon: "tiktok",
    angleDeg: 178,
  },
  {
    id: "8",
    label: "LinkedIn Carousels",
    icon: "linkedin",
    angleDeg: 228,
  },
  {
    id: "2",
    label: "Youtube Long form",
    icon: "youtube",
    angleDeg: 292,
  },
] as const;

/** Scroll-driven reveal order (Webflow a-24 timing). */
export const flywheelPlatformKeyframes: Record<
  (typeof flywheelPlatforms)[number]["id"],
  { fadeStart: number; fadeEnd: number }
> = {
  "10": { fadeStart: 0.12, fadeEnd: 0.14 },
  "3": { fadeStart: 0.26, fadeEnd: 0.28 },
  "1": { fadeStart: 0.4, fadeEnd: 0.42 },
  "6": { fadeStart: 0.54, fadeEnd: 0.56 },
  "4": { fadeStart: 0.68, fadeEnd: 0.7 },
  "8": { fadeStart: 0.72, fadeEnd: 0.74 },
  "2": { fadeStart: 0.96, fadeEnd: 0.98 },
};

export const repurposingSection = {
  title: "Content that goes",
  titleHighlight: "everywhere.",
  description:
    "We turn one piece of content into a high-volume, multi-platform engine for personal brands—built to expand your reach without multiplying your workload.",
  closing:
    "Content Repurposing. Platform Distribution. Personal Brand Growth.",
  ringImage: FLYWHEEL_RING,
  platforms: flywheelPlatforms,
} as const;

export const viralSection = {
  title: "Your footage into world class",
  titleHighlight: "edits that go viral",
  description:
    "The unparalleled production standard behind the biggest names in media. Podcasts. Shows. Long form. We got it all. Built for the big picture.\n\nHigh-retention YouTube videos, cinematic brand films, podcast edits and B2B content built to make an impact.",
  videos: [
    "https://play.gumlet.io/embed/69f733741dfaccdc957ab32f?background=false&autoplay=true&loop=true&disable_player_controls=false",
    "https://play.gumlet.io/embed/698b8d45873071aec5f38ae9?background=false&autoplay=true&loop=true&disable_player_controls=false",
    "https://play.gumlet.io/embed/69f733741dfaccdc957ab331?background=false&autoplay=true&loop=true&disable_player_controls=false",
    "https://play.gumlet.io/embed/69c250aac98b51e9c56f927e?background=false&autoplay=true&loop=true&disable_player_controls=false",
  ],
} as const;

export const longFormSection = {
  title: "Long form that sets",
  titleHighlight: "the standard",
  description: "Podcast trailers. YouTube Edits. B2B videos. Brand Films.",
  videos: [
    "https://play.gumlet.io/embed/68f85abb2bf0beb9829a7edd?background=false&autoplay=true&loop=true&disableControls=false",
    "https://play.gumlet.io/embed/68f85abb368a81dfff8d0f88?background=false&autoplay=true&loop=true&disableControls=false",
    "https://play.gumlet.io/embed/698b8f4e873071aec5f3dd7d?background=false&autoplay=true&loop=true&disable_player_controls=false",
  ],
} as const;

export const spotlightSection = {
  title: "Thr33 Frames",
  titleHighlight: "Spotlight",
  description:
    "We produce high grade launch videos for funded startups and media businesses.",
  subtext: "More proof of work in stealth. Reach out for info.",
  video:
    "https://play.gumlet.io/embed/68f85afe24f455e32d0dbc20?background=false&autoplay=true&loop=true&disableControls=false",
} as const;

export const spotlightReviews = [
  {
    quote: "The videos are fantastic. Very happy with what's happening.",
    name: "Andrew Ross Sorkin",
    role: "American Journalist and Author",
    accentClass: "bg-accent",
  },
  {
    quote:
      "During our YC period, the launch video drove a lot of hype and customers inbound. Super responsive and proactive team.",
    name: "Rohit Sirosh",
    role: "Founder, Mimos AI",
    accentClass: "bg-accent-purple",
  },
  {
    quote:
      "The edits have been amazing, the team does a great job operationally too!",
    name: "Daniel Del carmen",
    role: "Creative director, Mike Posner",
    accentClass: "bg-accent-green",
  },
] as const;

export const pricingSection = {
  title: "Three ways to",
  titleHighlight: "work with us",
  description:
    "Every engagement starts with a 3-month commitment. We take on 2-3 new clients per quarter.",
  tiers: [
    {
      frameImage: "/frame1.png",
      name: "The Content Studio",
      tagline: "You bring the idea. We make people stop scrolling.",
      description:
        "Professional video editing, UGC-style creatives, and platform-ready content built around your brand and audience.",
      features: [
        "Short-form video editing & repurposing",
        "UGC videos and creator-style ads",
        "YouTube long-form editing & thumbnails",
        "Motion graphics, captions & visual effects",
        "Custom editing styles for your brand",
        "Content assets for ads and social media",
        "Best for brands, creators & agencies",
      ],
    },
    {
      frameImage: "/frame2.png",
      badge: "MOST VERSATILE",
      name: "The Content Engine",
      tagline: "Not just videos. A system that keeps your brand moving.",
      description:
        "We manage the process from ideas and scripts to production, editing, and publishing—so your content doesn't depend on last-minute effort.",
      features: [
        "Content strategy & creative direction",
        "UGC and performance-ad creatives",
        "Scripting, hooks & storyboarding",
        "YouTube automation & channel operations",
        "Multi-platform content repurposing",
        "Production calendars & quality control",
        "Scalable editing and creative teams",
        "Best for growing brands & busy creators",
      ],
    },
    {
      frameImage: "/frame3.png",
      name: "The Growth Systems Lab",
      tagline: "Less manual work. Faster responses. More opportunities captured.",
      description:
        "We build AI-powered workflows that help businesses handle enquiries, follow up with leads, and automate repetitive operations.",
      features: [
        "AI voice agents that can call leads",
        "Automated appointment booking & reminders",
        "AI reception and enquiry handling for clinics",
        "Lead qualification & follow-up workflows",
        "CRM integrations and workflow automation",
        "AI-assisted content production systems",
        "Best for clinics, service businesses & growing teams",
      ],
    },
  ],
} as const;

export const problemsSection = {
  title: "Problems",
  titleHighlight: "we solve",
  description: "We become your in house team, that you don't have to manage.",
  roles: [
    {
      label: "Lead Creatives",
      blurb: "Direction, hooks, and narrative that actually convert.",
      icon: `${CDN_BASE}/68cfb186a8c48a6612217200_problem06.svg`,
    },
    {
      label: "Content Writers",
      blurb: "Scripts and captions tuned to your voice.",
      icon: `${CDN_BASE}/68cfb186c01ec8cccf53ed57_problem02.svg`,
    },
    {
      label: "Designers",
      blurb: "Motion graphics and covers that stop the scroll.",
      icon: `${CDN_BASE}/68cfb186ecf408940f25ab2f_problem03.svg`,
    },
    {
      label: "World-class Editors",
      blurb: "Cuts, pacing, and polish at production speed.",
      icon: `${CDN_BASE}/68cfb18686812e6eca393fd2_problem05.svg`,
    },
    {
      label: "Project Managers",
      blurb: "Deadlines hit. Feedback handled. Zero chaos.",
      icon: `${CDN_BASE}/68cfb18680b02ad315277468_problem04.svg`,
    },
  ],
} as const;

export const goalSection = {
  title: "The",
  titleHighlight: "Vision",
  description: "We become the team behind your next big thing.",
  body: "From the first frame to the final export, we build a production engine around your brand. Your workflow, your standards, your creative vision — backed by a team built to deliver at scale.\n\nEvery project gets a system of its own. Every piece of content has a purpose. And every frame moves your brand forward.\n\nWe work as an extension of your team, handling the creative heavy lifting across 10 to 100+ videos per month, depending on your needs.",
  closing: "A few partnerships. Built to go far.",
} as const;

export const testimonials = [
  {
    quote:
      "Working with Thr33 Frames has been a fantastic experience. The team is creative, responsive, and genuinely understands what it takes to make content stand out. The edits are clean, the pacing is excellent, and every video feels thoughtfully crafted for our audience. They take feedback seriously and consistently deliver quality work.",
    highlight: "",
    highlightClass: "",
    name: "Oliver Bennett",
    role: "Founder, Apex Digital",
  },
  {
    quote:
      "Thr33 Frames has been one of the best creative teams we've worked with. Their ability to turn simple concepts into engaging videos is impressive. The communication is straightforward, revisions are handled quickly, and the final output always feels polished. Definitely a team we'd recommend to other brands.",
    highlight: "",
    highlightClass: "",
    name: "Nathan Brooks",
    role: "CEO, Elevate Media",
  },
  {
    quote:
      "The team at Thr33 Frames understands modern content better than most agencies we've worked with. From the storytelling to the sound design and visual transitions, every detail feels intentional. They've made our content more engaging and helped us maintain a consistent style across our videos.",
    highlight: "",
    highlightClass: "",
    name: "Sophia Mitchell",
    role: "Marketing Director, Nova Creative",
  },
  {
    quote:
      "We've had a great experience working with Thr33 Frames. They're reliable, quick to respond, and always open to new ideas. What stands out most is their attention to detail and willingness to keep improving until the content matches our vision. Looking forward to continuing the partnership.",
    highlight: "",
    highlightClass: "",
    name: "James Anderson",
    role: "Founder, ScaleUp Studios",
  },
  {
    quote:
      "Thr33 Frames has made our content production process significantly easier. We can share a concept, explain the direction, and trust the team to turn it into a compelling video. The editing quality is excellent, deadlines are respected, and the entire process feels smooth and professional.",
    highlight: "",
    highlightClass: "",
    name: "Liam Foster",
    role: "CEO, Momentum Labs",
  },
  {
    quote:
      "What impressed us most about Thr33 Frames was their consistency. Every project receives the same level of attention, whether it's a simple short-form video or a more complex edit. Their creative approach, fast turnaround, and understanding of audience retention make them a valuable partner.",
    highlight: "",
    highlightClass: "",
    name: "Isabella Reed",
    role: "Creative Director, Brightline Studio",
  },
  {
    quote:
      "Thr33 Frames brings a great mix of creativity and professionalism. They understand how to keep videos engaging without making them feel overproduced. The team communicates clearly, implements feedback efficiently, and delivers content that aligns with our brand identity.",
    highlight: "",
    highlightClass: "",
    name: "Ethan Walker",
    role: "Founder, Digital North",
  },
  {
    quote:
      "We needed a reliable team that could handle video editing without compromising quality, and Thr33 Frames delivered. Their workflow is efficient, their edits are engaging, and they consistently understand the direction we're aiming for. It's been a smooth collaboration from start to finish.",
    highlight: "",
    highlightClass: "",
    name: "Daniel Foster",
    role: "Operations Lead, Visionary Media",
  },
] as const;

export const faqs = [
  {
    question: "Who do we work with?",
    answer:
      "Brands, founders, creators, and businesses that take content seriously. From YouTube channels and podcasts to D2C brands and healthcare businesses, we partner with teams ready to turn creative into a competitive advantage. If you're looking for a long-term production partner, we're listening.",
  },
  {
    question: "Can we start with a trial?",
    answer:
      "We prefer building something that lasts. Our best work comes from understanding your brand, refining the workflow, and getting sharper with every delivery. We can discuss a scoped pilot where it makes sense, with ongoing partnerships designed around consistency and scale.",
  },
  {
    question: "What makes Thr33 Frames different?",
    answer:
      "We're not here to just push pixels on a timeline. We combine creative thinking, production systems, and platform-specific execution to help brands produce better content, more consistently. From the first concept to the final export, every detail has a purpose.",
  },
  {
    question: "How quickly can we expect results?",
    answer:
      "Good creative takes testing. We focus on strong hooks, thoughtful storytelling, consistent output, and continuous improvement. Timelines depend on your starting point, content strategy, and distribution. We build the process to improve performance over time, not promise overnight wins.",
  },
  {
    question: "Can you handle high-volume production?",
    answer:
      "That's where our systems come in. Whether you need a handful of polished videos or a recurring pipeline of short-form edits, long-form content, and UGC creatives, we build a workflow around your volume, quality standards, and deadlines.",
  },
  {
    question: "Do you offer AI automation beyond content?",
    answer:
      "Yes. We also build AI-powered workflows for businesses, including voice-calling systems for clinics, lead follow-ups, appointment workflows, and other automations tailored to your operations. Every solution starts with the actual problem you're trying to solve.",
  },
  {
    question: "What if we need more than editing?",
    answer:
      "That's exactly why we offer more than editing. We can support creative direction, scripting, UGC production, YouTube operations, content repurposing, and distribution workflows. You can engage us for a specific production need or build a broader partnership as you grow.",
  },
  {
    question: "How do we get started?",
    answer:
      "Tell us what you're building, what isn't working, and where you want to go. We'll understand your goals, identify the right services, and map out a production or automation plan that fits your business.",
  },
] as const;
