"use client";

import Image from "next/image";

import { HighlightQuote } from "@/components/ui/Accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { clientLogos, trustedReviews } from "@/lib/content";

function LogoMarquee() {
  const logos = [...clientLogos, ...clientLogos];

  return (
    <div className="group overflow-hidden py-8">
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

export function TrustedBy() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-surface to-black py-16 md:py-20">
      <div className="padding-global">
        <div className="container-large mb-10 max-w-3xl">
          <SectionHeader title="Trusted by" highlight="Industry Leaders" />
        </div>
      </div>

      <LogoMarquee />

      <div className="padding-global pt-12 md:pt-20">
        <div className="container-large">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {trustedReviews.map((review) => (
              <div
                key={review.name}
                data-card-reveal
                className={`transform ${review.rotation}`}
              >
                <div className="rounded-lg border border-[#373737] bg-gradient-to-b from-[#121212] to-[#050505] p-6">
                  <p className="text-lg leading-relaxed">
                    <HighlightQuote
                      quote={review.quote}
                      highlight={review.highlight}
                      highlightClass={review.highlightClass}
                    />
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-grey-2">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
