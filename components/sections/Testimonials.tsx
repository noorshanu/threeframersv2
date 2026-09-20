"use client";

import Image from "next/image";
import { useState } from "react";

import { HighlightQuote } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CAL_DISCOVERY_URL } from "@/lib/constants";
import { testimonialScreenshots, testimonials } from "@/lib/content";

export function Testimonials() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="section_testimonials" className="py-16 md:py-24">
      <div className="padding-global">
        <div className="container-large">
          <div className="mb-12 max-w-3xl">
            <SectionHeader title="Client" highlight="Testimonials" />
            <p className="mt-4 text-lg text-grey-2">
              Hear from their experience
            </p>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                data-card-reveal
                className="mb-4 break-inside-avoid rounded-lg border border-border bg-gradient-to-b from-surface-elevated to-background p-6"
              >
                <p className="text-base leading-relaxed">
                  <HighlightQuote
                    quote={item.quote}
                    highlight={item.highlight}
                    highlightClass={item.highlightClass}
                  />
                </p>
                <div className="mt-4">
                  <p className="font-semibold">{item.name}</p>
                  {item.role ? (
                    <p className="text-sm text-grey-2">{item.role}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {testimonialScreenshots.map((src) => (
              <button
                key={src}
                type="button"
                data-card-reveal
                className="mb-4 w-full break-inside-avoid overflow-hidden rounded-lg border border-border bg-surface-elevated text-left"
                onClick={() => setLightboxImage(src)}
              >
                <Image
                  src={src}
                  alt="Client testimonial screenshot"
                  width={800}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href={CAL_DISCOVERY_URL} external>
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>

      {lightboxImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 p-4"
          onClick={() => setLightboxImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightboxImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            className="absolute right-4 top-4 text-2xl text-white"
            onClick={() => setLightboxImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          <Image
            src={lightboxImage}
            alt="Testimonial screenshot enlarged"
            width={1200}
            height={900}
            className="max-h-[90vh] w-auto max-w-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      ) : null}
    </section>
  );
}
