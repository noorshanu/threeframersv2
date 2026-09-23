"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { gsap, registerGsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function ScrollAnimations() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      registerGsap();

      if (prefersReducedMotion) {
        return;
      }

      const cardEls = gsap.utils.toArray<HTMLElement>("[data-card-reveal]");
      const sectionEls = gsap.utils.toArray<HTMLElement>(
        "main > section:not(:first-child):not(#flywheel-section):not(#section_solutions)"
      );

      if (cardEls.length > 0) {
        gsap.set(cardEls, { autoAlpha: 0, y: 36 });
      }

      if (sectionEls.length > 0) {
        gsap.set(sectionEls, { autoAlpha: 0, y: 48 });
      }

      if (cardEls.length > 0) {
        ScrollTrigger.batch("[data-card-reveal]", {
          onEnter: (elements) => {
            gsap.fromTo(
              elements,
              { autoAlpha: 0, y: 36 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.75,
                stagger: 0.12,
                ease: "power3.out",
                overwrite: true,
              }
            );
          },
          start: "top 90%",
          once: true,
        });
      }

      if (sectionEls.length > 0) {
        ScrollTrigger.batch(
          "main > section:not(:first-child):not(#flywheel-section):not(#section_solutions)",
          {
            onEnter: (elements) => {
              gsap.fromTo(
                elements,
                { autoAlpha: 0, y: 48 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.85,
                  stagger: 0.08,
                  ease: "power2.out",
                  overwrite: true,
                }
              );
            },
            start: "top 92%",
            once: true,
          }
        );
      }
    },
    { dependencies: [prefersReducedMotion] }
  );

  return null;
}
