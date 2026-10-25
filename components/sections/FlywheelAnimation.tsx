"use client";

import { useRef } from "react";

import { FlywheelVisual } from "@/components/sections/FlywheelVisual";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { flywheelPlatformKeyframes } from "@/lib/content";
import { gsap, registerGsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const buildFlywheelTimeline = (
  wrapperEl: HTMLElement,
  prefersReducedMotion: boolean
) => {
  const stageEl = wrapperEl.querySelector<HTMLElement>(".flywheel-stage");
  const ringEl = wrapperEl.querySelector<HTMLElement>(".flywheel-ring-spin");

  if (!stageEl || !ringEl) {
    return;
  }

  const nodeEls = gsap.utils.toArray<HTMLElement>(".flywheel-node", stageEl);
  const pillEls = gsap.utils.toArray<HTMLElement>(
    ".flywheel-node__pill",
    stageEl
  );

  if (prefersReducedMotion) {
    gsap.set(nodeEls, { opacity: 1 });
    return;
  }

  gsap.set(nodeEls, { opacity: 0, willChange: "opacity" });
  gsap.set(ringEl, {
    rotation: 0,
    transformOrigin: "50% 50%",
    force3D: true,
    willChange: "transform",
  });
  gsap.set(pillEls, {
    rotation: 0,
    transformOrigin: "50% 50%",
    force3D: true,
    willChange: "transform",
  });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: wrapperEl,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  timeline.to(
    ringEl,
    {
      rotation: 360,
      ease: "none",
      force3D: true,
      duration: 1,
    },
    0
  );

  timeline.to(
    pillEls,
    {
      rotation: -360,
      ease: "none",
      force3D: true,
      duration: 1,
    },
    0
  );

  nodeEls.forEach((nodeEl) => {
    const position = nodeEl.dataset.flywheelPosition;

    if (!position || !(position in flywheelPlatformKeyframes)) {
      return;
    }

    const { fadeStart, fadeEnd } =
      flywheelPlatformKeyframes[
        position as keyof typeof flywheelPlatformKeyframes
      ];

    timeline.fromTo(
      nodeEl,
      { opacity: 0 },
      {
        opacity: 1,
        ease: "none",
        duration: fadeEnd - fadeStart,
      },
      fadeStart
    );
  });
};

export function FlywheelAnimation() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      registerGsap();

      const wrapperEl = wrapperRef.current;

      if (!wrapperEl) {
        return;
      }

      buildFlywheelTimeline(wrapperEl, prefersReducedMotion);

      const handleRefresh = () => {
        ScrollTrigger.refresh();
      };

      wrapperEl.querySelectorAll("img").forEach((image) => {
        if (image.complete) {
          return;
        }

        image.addEventListener("load", handleRefresh, { once: true });
        image.addEventListener("error", handleRefresh, { once: true });
      });

      window.addEventListener("load", handleRefresh);
      handleRefresh();

      return () => {
        window.removeEventListener("load", handleRefresh);
      };
    },
    { scope: wrapperRef, dependencies: [prefersReducedMotion], revertOnUpdate: true }
  );

  return <FlywheelVisual wrapperRef={wrapperRef} />;
}
