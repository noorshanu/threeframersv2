"use client";

import dynamic from "next/dynamic";

import { FlywheelVisual } from "@/components/sections/FlywheelVisual";

const FlywheelAnimation = dynamic(
  () =>
    import("@/components/sections/FlywheelAnimation").then(
      (module) => module.FlywheelAnimation
    ),
  {
    ssr: false,
    loading: () => <FlywheelVisual />,
  }
);

export function FlywheelClient() {
  return <FlywheelAnimation />;
}
