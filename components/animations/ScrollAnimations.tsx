"use client";

import { useRef } from "react";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { gsap, registerGsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

export function ScrollAnimations() {
  const scopeRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      registerGsap();

      if (prefersReducedMotion) {
        return;
      }

      gsap.set("[data-card-reveal]", { autoAlpha: 0, y: 36 });
      gsap.set("main > section:not(:first-child):not(#flywheel-section)", {
        autoAlpha: 0,
        y: 48,
      });

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

      ScrollTrigger.batch("main > section:not(:first-child):not(#flywheel-section)", {
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
      });
    },
    { scope: scopeRef, dependencies: [prefersReducedMotion] }
  );

  return <div ref={scopeRef} className="hidden" aria-hidden />;
}
