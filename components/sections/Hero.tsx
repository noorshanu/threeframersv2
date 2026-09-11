"use client";

import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/Button";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { ASSETS, CAL_DISCOVERY_URL } from "@/lib/constants";
import { heroContent } from "@/lib/content";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      registerGsap();

      if (prefersReducedMotion) {
        return;
      }

      gsap.from(".hero-blur", {
        scale: 0.8,
        autoAlpha: 0,
        duration: 1.4,
        ease: "power2.out",
      });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-title", { y: 48, autoAlpha: 0, duration: 1 })
        .from(".hero-sticker", { scale: 0, rotate: -24, autoAlpha: 0, duration: 0.7 }, "-=0.55")
        .from(".hero-copy", { y: 32, autoAlpha: 0, duration: 0.8 }, "-=0.45")
        .from(".hero-cta", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.35");
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-28 md:pt-32">
      <div
        aria-hidden
        className="hero-blur pointer-events-none absolute right-0 top-0 h-screen w-[55vw] rounded-full bg-[#03a5f04d] blur-[450px]"
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10">
        <Image
          src={ASSETS.heroGradient}
          alt=""
          width={7364}
          height={1200}
          priority
          sizes="100vw"
          className="h-auto w-full object-cover opacity-80"
        />
      </div>

      <div className="padding-global">
        <div className="container-large">
          <div className="flex justify-center py-16 md:py-24 lg:py-28">
            <div className="flex max-w-4xl flex-col items-center text-center">
              <div className="relative mb-6 inline-flex">
                <h1 className="hero-title text-balance text-4xl leading-tight md:text-5xl lg:text-[3.25rem]">
                  {heroContent.headline}{" "}
                  <span className="text-accent">
                    {heroContent.headlineHighlight}
                  </span>
                </h1>
                <Image
                  src={ASSETS.heroSticker}
                  alt=""
                  width={56}
                  height={56}
                  className="hero-sticker absolute -right-8 -top-2 hidden h-14 w-14 md:block lg:-right-12"
                />
              </div>

              <div className="hero-copy max-w-2xl">
                <p className="text-lg text-grey-2 md:text-xl">
                  {heroContent.description}
                </p>
              </div>

              <div className="hero-cta mt-8">
                <Button href={CAL_DISCOVERY_URL} external>
                  {heroContent.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
