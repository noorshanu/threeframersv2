"use client";

import { ClientLogoMarquee } from "@/components/sections/ClientLogoMarquee";
import { HighlightQuote } from "@/components/ui/Accordion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { trustedReviews } from "@/lib/content";

type TrustedByProps = {
  showMarquee?: boolean;
};

export function TrustedBy({ showMarquee = true }: TrustedByProps) {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-surface-elevated to-background py-16 md:py-20">
      <div className="padding-global">
        <div className="container-large mb-10 max-w-3xl">
          <SectionHeader title="Trusted by" highlight="Industry Leaders" />
        </div>
      </div>

      {showMarquee ? <ClientLogoMarquee /> : null}

      <div className={`padding-global ${showMarquee ? "pt-12 md:pt-20" : "pt-0"}`}>
        <div className="container-large">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {trustedReviews.map((review) => (
              <div
                key={review.name}
                data-card-reveal
                className={`transform ${review.rotation}`}
              >
                <div className="rounded-lg border border-border bg-gradient-to-b from-surface-elevated to-background p-6">
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
