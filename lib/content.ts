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
      "Working with THR33 Frames has been a game-changer for our paid media performance. Since partnering with them, we've seen our CPAs drop by 33%. Their creative work has been outperforming what we were running before, and they've become an essential part of our growth stack.",
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
  title: "THR33 Frames",
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
      badge: "MOST VERSATILE",
      eyebrow: "02 / CONTENT OPERATIONS",
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
      eyebrow: "03 / AI SYSTEMS",
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
      "THR33 Frames helped me rapidly build my personal brand online. Saksham is more than a supplier — he's a true partner with vision, strategy, and 24/7 support",
    highlight: "true partner with vision, strategy, and 24/7 support",
    highlightClass: "text-accent",
    name: "Christian Schute",
    role: "8 fig serial entrepreneur and investor. Built ticketing software for F1",
  },
  {
    quote:
      "Working with THR33 Frames has been an absolute pleasure. They produced several videos for Fluid Focus, and we were genuinely impressed by the creativity they brought to each concept. Their modern editing style gave our content a fresh, engaging feel that really captured our brand. Professional, imaginative, and easy to collaborate with - we couldn't be happier with the results.",
    highlight:
      "Their modern editing style gave our content a fresh, engaging feel that really captured our brand.",
    highlightClass: "text-accent-green",
    name: "Fluid Focus",
    role: "",
  },
  {
    quote:
      "Holy F*cking shit. Excuse my language but I took a sneak peek at the edits and they are unreal. So stoked about this.",
    highlight: "I took a sneak peek at the edits and they are unreal.",
    highlightClass: "text-accent",
    name: "George Munguia",
    role: "Founder, Tryharmony.ai",
  },
  {
    quote:
      "By far the best video editing team we have ever worked with - quick, communicative, and diligent with the highest quality videos. Will be using again and have recommended to many friends!",
    highlight: "By far the best video editing team we have ever worked with",
    highlightClass: "text-accent-purple",
    name: "Tristan Barrett",
    role: "Creative Director @ SpaceGod Studios",
  },
  {
    quote:
      "Working with THR33 Frames was a seamless experience. Their video quality is top-tier, and the content they produced consistently met our performance benchmarks. On the creative side, the team was always receptive to our feedback and willing to iterate to get the visual style just right. Their ability to take our vision and turn it into polished, high-caliber content was a big plus for our brand. I'd recommend them to anyone looking for a team that wants to make high quality videos.",
    highlight: "",
    highlightClass: "",
    name: "Brian Tam",
    role: "Barebone AI",
  },
  {
    quote:
      "THR33 Frames helped me grow to 50K in just 2 months with constant support, strategy, and dedication. Their consistency made all the difference",
    highlight: "",
    highlightClass: "",
    name: "Zeel Mehta",
    role: "Jain AI Entrepreneur",
  },
  {
    quote:
      "We've had very good results. The team is very fast at feedback and their editing skills are top notch too. We have multiple millions of views through Saksham's team on the B-roll side of things which help with the strategy and the content that we already put out.",
    highlight: "",
    highlightClass: "",
    name: "Lewy",
    role: "Creative & Marketing, Arthur Brooks",
  },
  {
    quote:
      "Love the vibe and overall execution. Edits are crisp, song choice & energy is a vibe,, broll is on point, fonts are awesome. Great work!",
    highlight: "",
    highlightClass: "",
    name: "Drew Rogers",
    role: "Founder, Stabledash Studios",
  },
] as const;

export const testimonialScreenshots = [
  `${CDN_BASE}/68cf9b92bc819f84de25316c_take a look.avif`,
  `${CDN_BASE}/68cf9b9275ef0d388ab59753_solid script.avif`,
  `${CDN_BASE}/68cf9b92e8c11d8273adc702_smashed it.avif`,
  `${CDN_BASE}/68cf9b916ef7b334f3a739f1_shelen.avif`,
  `${CDN_BASE}/68cf9b91b5282a205b3b120c_short one.avif`,
  `${CDN_BASE}/68cf9b906230ee889235b1c5_sedona.avif`,
  `${CDN_BASE}/68cf9b90fe9ff61a7b8f7ccc_Screenshot 2025-08-18 at 8.04.06 PM.avif`,
  `${CDN_BASE}/68cf9b8fa5d5208518ea0a8c_Screenshot 2025-05-16 011807.avif`,
  `${CDN_BASE}/68cf9b8a6ad5e1ebc368877d_back and forth.avif`,
  `${CDN_BASE}/68cf9b8ef29107a689d83d0d_human and mind 9k.avif`,
  `${CDN_BASE}/68cf9b8c46ec38ff178a1d9e_great work.avif`,
  `${CDN_BASE}/68cf9b8fe8c11d8273adc6c1_Screenshot 2025-02-14 143314.avif`,
  `${CDN_BASE}/68cf9b8c5b1d9dea0832d4dc_holy shit.avif`,
  `${CDN_BASE}/68cf9b8cb7c12bfd836533c5_blacnk ink.avif`,
  `${CDN_BASE}/68cf9b8c5873a58c1b56489c_design amazing.avif`,
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
    question: "What makes THR33 Frames different?",
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
