"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

import { DotGrid } from "@/components/animations/DotGrid";
import { ClientLogoMarquee } from "@/components/sections/ClientLogoMarquee";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

type HeroProps = {
  children: ReactNode;
};

export function Hero({ children }: HeroProps) {
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
        .from(".hero-copy", { y: 32, autoAlpha: 0, duration: 0.8 }, "-=0.45")
        .from(".hero-cta", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.35")
        .from(
          ".hero-logos",
          { y: 24, autoAlpha: 0, duration: 0.7 },
          "-=0.2"
        );
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={containerRef}
      className="relative isolate min-h-[720px] overflow-hidden pt-[4.5rem] min-[1024px]:min-h-[780px]"
    >
      <div
        aria-hidden
        className="hero-blur pointer-events-none absolute right-0 top-0 z-0 hidden h-screen w-[50vw] bg-[#8b7cf633] blur-[400px] min-[768px]:block min-[1280px]:w-[55vw] min-[1280px]:rounded-full min-[1280px]:bg-[#8b7cf640] min-[1280px]:blur-[450px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] min-h-[inherit]"
      >
        <DotGrid
          dotSize={3.5}
          gap={15}
          baseColor="#6B6380"
          activeColor="#5227FF"
          opacity={0.2}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="container-large relative z-10">
        <div className="pt-12" aria-hidden />
        {children}
      </div>

      <div className="hero-logos relative z-10 pb-10 pt-2 md:pb-14">
        <p className="padding-global mb-2 text-center font-heading text-sm font-semibold tracking-[-0.03em] text-grey-2 min-[768px]:text-base">
          Trusted by{" "}
          <span className="text-accent">Industry Leaders</span>
        </p>
        <ClientLogoMarquee className="py-4 md:py-6" />
      </div>
    </section>
  );
}
