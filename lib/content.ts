import { CDN_BASE } from "./constants";

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
  title: "Content Production,",
  titleHighlight: "Systematized",
  description:
    "We build the production system that lets you publish consistently at the quality level your brand demands. We own editing trends in the industry.",
  videos: [
    "https://play.gumlet.io/embed/6a6b877c921259f4eaf050ca?background=false&autoplay=true&loop=true&disableControls=false",
    "https://play.gumlet.io/embed/6a6b877c88fd78cc8e3a6f0f?background=false&autoplay=true&loop=true&disableControls=false",
    "https://play.gumlet.io/embed/6a6b877c88fd78cc8e3a6f0b?background=false&autoplay=true&loop=true&disableControls=false",
    "https://play.gumlet.io/embed/6a6b877c88fd78cc8e3a6f05?background=false&autoplay=true&loop=true&disableControls=false",
  ],
} as const;

export const flywheelStickers = [
  {
    src: "/68cf7451a6e940587e2c95d7_flywheel-logo03.avif",
    position: "1",
    label: "Youtube Shorts",
  },
  {
    src: "/68cf7451ab8eac4ad4126de4_flywheel-logo02.avif",
    position: "3",
    label: "Instagram reels",
  },
  {
    src: "/68cf74510a7ff0335708e7c2_flywheel-logo01.avif",
    position: "10",
    label: "LinkedIn Posts",
  },
  {
    src: "/68cf7451b0d64adae141479f_flywheel-logo07.avif",
    position: "2",
    label: "Youtube Long form",
  },
  {
    src: "/68cf74514ebc6e7085da8c2a_flywheel-logo06.avif",
    position: "8",
    label: "LinkedIn Carousels",
  },
  {
    src: "/68cf7451c0eabc8e2c65c3f1_flywheel-logo05.avif",
    position: "4",
    label: "TikTok Videos",
  },
  {
    src: "/68cf745146e749fd22638514_flywheel-logo04.avif",
    position: "6",
    label: "Instagram Carousels",
  },
] as const;

/** Scroll keyframes from Webflow action list a-24 (flywheel-animation). */
export const flywheelStickerKeyframes: Record<
  (typeof flywheelStickers)[number]["position"],
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
  title: "High Level",
  titleHighlight: "Repurposing",
  description:
    "We build bulletproof content flywheels for personal brands to grow on multiple platforms with high volume of content",
  ringImage: "/ring.avif",
  stickers: flywheelStickers,
} as const;

export const viralSection = {
  title: "Your footage into world class",
  titleHighlight: "edits that go viral",
  description:
    "The unparalleled production standard behind the biggest names in media. Podcasts. Shows. Long form. We got it all.",
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
  sticker: `${CDN_BASE}/68ce5f7fbf72d4300ecf5d64_Group (34).avif`,
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
    bgClass: "bg-accent",
    textClass: "text-black",
  },
  {
    quote:
      "During our YC period, the launch video drove a lot of hype and customers inbound. Super responsive and proactive team.",
    name: "Rohit Sirosh",
    role: "Founder, Mimos AI",
    bgClass: "bg-accent-purple",
    textClass: "text-black",
  },
  {
    quote:
      "The edits have been amazing, the team does a great job operationally too!",
    name: "Daniel Del carmen",
    role: "Creative director, Mike Posner",
    bgClass: "bg-accent-green",
    textClass: "text-black",
  },
] as const;

export const pricingSection = {
  title: "Three ways to",
  titleHighlight: "work with us",
  description:
    "Every engagement starts with a 3-month commitment. We take on 2-3 new clients per quarter.",
  tiers: [
    {
      name: "You create. We produce.",
      description:
        "You already have the footage. We turn it into polished, platform-ready content your brand can publish with confidence.",
      sticker: `${CDN_BASE}/69fcd200766f1a1c5687a8fb_Process-Level-2.svg`,
      features: [
        "Starting at 20 short-form videos per month",
        "5 carousels per month",
        "Custom editing style for your brand",
        "Thumbnails, captions, and design assets",
        "Platform-native formatting",
        "Dedicated team: editors, creatives, project manager, designer",
        "Bi-weekly check-ins",
        "Monthly performance report",
      ],
    },
    {
      name: "Your entire content operation. Run by us.",
      description:
        "You show up. We handle everything else. Strategy, scripting, creative direction, editing, and distribution. A full content department embedded in your workflow.",
      sticker: `${CDN_BASE}/69fcd200766f1a1c5687a8fc_Process-Level-3.svg`,
      features: [
        "Everything in Core",
        "Repeatable pre-production system",
        "Content strategy",
        "Creative direction",
        "Scripting",
        "Shoot direction",
        "Multi-platform distribution",
      ],
    },
    {
      name: "Full-scale production for brands operating at volume.",
      description:
        "Your scope. Our infrastructure. For brands that need scale without sacrificing quality. We build a dedicated production system around your requirements.",
      sticker: `${CDN_BASE}/69fcd200766f1a1c5687a8fd_Process-Level-4.svg`,
      features: [
        "Everything in OS",
        "Upwards of 100 curated videos a month",
        "Dedicated clipping team",
        "Best for enterprise projects",
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
      icon: `${CDN_BASE}/68cfb186a8c48a6612217200_problem06.svg`,
      rotation: "rotate-[6deg]",
    },
    {
      label: "Content Writers",
      icon: `${CDN_BASE}/68cfb186c01ec8cccf53ed57_problem02.svg`,
      rotation: "-translate-x-4 rotate-[3deg]",
    },
    {
      label: "Designers",
      icon: `${CDN_BASE}/68cfb186ecf408940f25ab2f_problem03.svg`,
      rotation: "-rotate-[6deg]",
    },
    {
      label: "World-class Editors",
      icon: `${CDN_BASE}/68cfb18686812e6eca393fd2_problem05.svg`,
      rotation: "-rotate-[9deg]",
    },
    {
      label: "Project Managers",
      icon: `${CDN_BASE}/68cfb18680b02ad315277468_problem04.svg`,
      rotation: "translate-x-4 -rotate-y-2",
    },
  ],
} as const;

export const goalSection = {
  title: "The",
  titleHighlight: "Goal",
  description: "We become your in-house production team.",
  body: "Portfolio of 20+ parallel projects with industry leaders. Completely custom workflows for each.\n\nWe integrate fully into your existing system. Producing anywhere from 10 to 100+ videos a month per project per month.\n\nTaking on a select few projects every quarter.",
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
    question: "Who is this for?",
    answer:
      "Companies, podcasts, and founders where content quality directly impacts the brand. We work across media, tech, SaaS, and D2C. We're selective about who we take on, and we don't work with everyone who applies.",
  },
  {
    question: "What's the minimum commitment? Can I start with a trial?",
    answer:
      "Three months. No trial months. Building a production system around your brand takes time and investment from both sides. One month isn't enough to learn your voice, refine the workflow, or deliver results worth measuring. Most clients stay well beyond three months because the system gets sharper the longer we work together.",
  },
  {
    question: "Is there any guarantee?",
    answer:
      "If you already have organic traction, we can amplify and predict results in a few weeks. If you're building from scratch, it takes longer to find the formula. That said, the majority of our clients see real results within the first two months. We can't guarantee the algorithm. We can guarantee the work that feeds it. Our quality of output with volume is unparalleled.",
  },
] as const;
