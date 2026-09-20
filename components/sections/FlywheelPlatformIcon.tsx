import type { IconType } from "react-icons";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";

export type FlywheelIconKey = "linkedin" | "instagram" | "youtube" | "tiktok";

const ICON_MAP: Record<FlywheelIconKey, IconType> = {
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  youtube: FaYoutube,
  tiktok: SiTiktok,
};

type FlywheelPlatformIconProps = {
  icon: FlywheelIconKey;
  className?: string;
};

export function FlywheelPlatformIcon({
  icon,
  className = "",
}: FlywheelPlatformIconProps) {
  const Icon = ICON_MAP[icon];
  return <Icon className={className} aria-hidden />;
}
