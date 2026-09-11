"use client";

import { useSyncExternalStore } from "react";

const getMediaQuery = () => {
  if (typeof window === "undefined") {
    return null;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)");
};

const subscribe = (onStoreChange: () => void) => {
  const mediaQuery = getMediaQuery();

  if (!mediaQuery) {
    return () => {};
  }

  mediaQuery.addEventListener("change", onStoreChange);

  return () => {
    mediaQuery.removeEventListener("change", onStoreChange);
  };
};

const getSnapshot = () => getMediaQuery()?.matches ?? false;

const getServerSnapshot = () => false;

export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
