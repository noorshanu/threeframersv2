"use client";

import Image from "next/image";
import type { CSSProperties, RefObject } from "react";

import { FlywheelPlatformIcon } from "@/components/sections/FlywheelPlatformIcon";
import { ASSETS, SITE_NAME } from "@/lib/constants";
import { flywheelPlatforms, repurposingSection } from "@/lib/content";
import { FLYWHEEL_RING } from "@/lib/flywheel-assets";

type FlywheelVisualProps = {
  wrapperRef?: RefObject<HTMLDivElement | null>;
};

export function FlywheelVisual({ wrapperRef }: FlywheelVisualProps) {
  const ringImage = repurposingSection.ringImage ?? FLYWHEEL_RING;
  const platforms = repurposingSection.platforms ?? flywheelPlatforms;

  return (
    <div ref={wrapperRef} className="flywheel-scroll">
      <div className="flywheel-stage">
        <div className="flywheel-hub">
          <div className="flywheel-hub__logo">
            <Image
              src={ASSETS.logo}
              alt={`${SITE_NAME} logo`}
              width={80}
              height={80}
              className="h-[clamp(3rem,11vw,5rem)] w-[clamp(3rem,11vw,5rem)] object-contain"
              sizes="80px"
            />
          </div>
          <div className="flywheel-ring-spin">
            <img
              src={ringImage}
              alt=""
              className="flywheel-ring"
              width={600}
              height={600}
              decoding="async"
              aria-hidden
            />
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="flywheel-node"
                data-flywheel-position={platform.id}
                style={
                  {
                    "--flywheel-angle": `${platform.angleDeg}deg`,
                  } as CSSProperties
                }
              >
                <div className="flywheel-node__pill">
                  <FlywheelPlatformIcon
                    icon={platform.icon}
                    className={`flywheel-node__icon flywheel-node__icon--${platform.icon}`}
                  />
                  <span className="flywheel-node__label">{platform.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
