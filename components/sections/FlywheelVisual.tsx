import type { RefObject } from "react";

import { repurposingSection } from "@/lib/content";

type FlywheelVisualProps = {
  wrapperRef?: RefObject<HTMLDivElement | null>;
};

export function FlywheelVisual({ wrapperRef }: FlywheelVisualProps) {
  return (
    <div ref={wrapperRef} className="flywheeel-animation-wrapper">
      <div className="social-animation">
        {repurposingSection.stickers.map((sticker) => (
          <img
            key={sticker.src}
            loading="lazy"
            src={sticker.src}
            alt=""
            className={`social-media-sticker _${sticker.position}`}
          />
        ))}

        <div className="animation-circle_wrapper">
          <div className="circle-animation-text">
            Content <br />
            Flywheel
          </div>
          <img
            loading="lazy"
            src={repurposingSection.ringImage}
            alt=""
            sizes="(max-width: 600px) 100vw, 600px"
            className="animation-circle"
          />
        </div>
      </div>
    </div>
  );
}
