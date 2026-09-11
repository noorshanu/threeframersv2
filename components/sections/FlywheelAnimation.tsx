"use client";

import { useRef } from "react";

import { FlywheelVisual } from "@/components/sections/FlywheelVisual";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { flywheelStickerKeyframes } from "@/lib/content";
import { gsap, registerGsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const getStickerPosition = (element: HTMLElement) => {
  const match = element.className.match(/(?:^|\s)_(\d+)(?:\s|$)/);
  return match?.[1] ?? null;
};

const buildFlywheelTimeline = (
  wrapperEl: HTMLElement,
  prefersReducedMotion: boolean
) => {
  const stageEl = wrapperEl.querySelector<HTMLElement>(".social-animation");
  const ringEl = wrapperEl.querySelector<HTMLImageElement>(".animation-circle");

  if (!stageEl || !ringEl) {
    return;
  }

  const stickerEls = gsap.utils.toArray<HTMLImageElement>(
    ".social-media-sticker",
    stageEl
  );

  if (stickerEls.length === 0) {
    return;
  }

  if (prefersReducedMotion) {
    gsap.set(stickerEls, { opacity: 1 });
    return;
  }

  gsap.set(stickerEls, { opacity: 0, willChange: "opacity" });
  gsap.set(ringEl, {
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

  stickerEls.forEach((stickerEl) => {
    const position = getStickerPosition(stickerEl);

    if (!position || !(position in flywheelStickerKeyframes)) {
      return;
    }

    const { fadeStart, fadeEnd } =
      flywheelStickerKeyframes[
        position as keyof typeof flywheelStickerKeyframes
      ];

    timeline.fromTo(
      stickerEl,
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

      const images = wrapperEl.querySelectorAll("img");

      images.forEach((image) => {
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
