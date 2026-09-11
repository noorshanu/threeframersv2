import Image from "next/image";

import { ASSETS } from "@/lib/constants";

type SectionHeaderProps = {
  title: string;
  highlight?: string;
  sticker?: string | false;
  className?: string;
};

export function SectionHeader({
  title,
  highlight,
  sticker,
  className = "",
}: SectionHeaderProps) {
  const stickerSrc =
    sticker === false ? null : sticker ?? ASSETS.stickerGreen;

  return (
    <div className={`relative inline-flex ${className}`}>
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-[3.25rem] md:leading-tight">
        {title}{" "}
        {highlight ? <span className="text-accent">{highlight}</span> : null}
      </h2>
      {stickerSrc ? (
        <Image
          src={stickerSrc}
          alt=""
          width={56}
          height={56}
          className="absolute -right-10 -top-2 hidden h-14 w-14 md:block"
        />
      ) : null}
    </div>
  );
}
