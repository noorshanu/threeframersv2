"use client";

import type { CSSProperties, RefObject } from "react";

import { FlywheelPlatformIcon } from "@/components/sections/FlywheelPlatformIcon";
import {
  flywheelPlatforms,
  repurposingSection,
} from "@/lib/content";
import { FLYWHEEL_RING } from "@/lib/flywheel-assets";

type FlywheelVisualProps = {
  wrapperRef?: RefObject<HTMLDivElement | null>;
};

export function FlywheelVisual({ wrapperRef }: FlywheelVisualProps) {
  const ringImage = repurposingSection.ringImage ?? FLYWHEEL_RING;
  const hubTitle = repurposingSection.hubTitle ?? {
    line1: "Content",
    line2: "Flywheel",
  };
  const platforms = repurposingSection.platforms ?? flywheelPlatforms;

  return (
    <div ref={wrapperRef} className="flywheel-scroll">
      <div className="flywheel-stage">
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

        <div className="flywheel-hub">
          <h3 className="flywheel-hub__title">
            <span>{hubTitle.line1}</span>
            <span>{hubTitle.line2}</span>
          </h3>
          <div className="flywheel-ring-spin" aria-hidden>
            <img
              src={ringImage}
              alt=""
              className="flywheel-ring"
              width={600}
              height={600}
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
