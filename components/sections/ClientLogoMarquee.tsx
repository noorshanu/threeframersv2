"use client";

import Image from "next/image";

import { clientLogos } from "@/lib/content";

type ClientLogoMarqueeProps = {
  className?: string;
};

export function ClientLogoMarquee({ className = "" }: ClientLogoMarqueeProps) {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <div className={`group overflow-hidden py-8 ${className}`}>
      <div className="animate-marquee flex w-max items-center gap-8 group-hover:[animation-play-state:paused]">
        {logos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex h-12 shrink-0 items-center px-4"
          >
            <Image
              src={logo}
              alt="Client logo"
              width={200}
              height={48}
              sizes="(max-width: 768px) 120px, 200px"
              className="h-10 w-auto max-w-[12rem] object-contain opacity-90 transition-opacity hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
