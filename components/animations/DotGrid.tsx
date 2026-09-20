"use client";

import React, { useRef, useLayoutEffect, useEffect, useCallback } from "react";
import { InertiaPlugin } from "gsap/InertiaPlugin";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { gsap } from "@/lib/gsap";

gsap.registerPlugin(InertiaPlugin);

function throttle<T extends (...args: never[]) => void>(func: T, limit: number) {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = performance.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

interface Dot {
  cx: number;
  cy: number;
  xOffset: number;
  yOffset: number;
  _inertiaApplied: boolean;
}

export interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  proximity?: number;
  speedTrigger?: number;
  shockRadius?: number;
  shockStrength?: number;
  maxSpeed?: number;
  resistance?: number;
  returnDuration?: number;
  /** 0–1 opacity for all dots (default 1). */
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
  static?: boolean;
}

function hexToRgb(hex: string) {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return { r: 0, g: 0, b: 0 };
  return {
    r: parseInt(m[1], 16),
    g: parseInt(m[2], 16),
    b: parseInt(m[3], 16),
  };
}

export function DotGrid({
  dotSize = 16,
  gap = 32,
  baseColor = "#5227FF",
  activeColor = "#5227FF",
  proximity = 150,
  speedTrigger = 100,
  shockRadius = 250,
  shockStrength = 5,
  maxSpeed = 5000,
  resistance = 750,
  returnDuration = 1.5,
  opacity = 1,
  className = "",
  style,
  static: staticGrid = false,
}: DotGridProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const motionEnabled = !staticGrid && !prefersReducedMotion;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const circlePathRef = useRef<Path2D | null>(null);
  const sizeRef = useRef({ width: 0, height: 0 });
  const dotsRef = useRef<Dot[]>([]);
  const pointerRef = useRef({
    x: -9999,
    y: -9999,
    vx: 0,
    vy: 0,
    speed: 0,
    lastTime: 0,
    lastX: 0,
    lastY: 0,
  });

  const paintRef = useRef({
    proximity,
    baseColor,
    baseRgb: hexToRgb(baseColor),
    activeRgb: hexToRgb(activeColor),
    opacity,
  });

  paintRef.current = {
    proximity,
    baseColor,
    baseRgb: hexToRgb(baseColor),
    activeRgb: hexToRgb(activeColor),
    opacity,
  };

  const buildGrid = useCallback(() => {
    const wrap = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return false;

    const { width, height } = wrap.getBoundingClientRect();
    if (width <= 0 || height <= 0) return false;

    for (const dot of dotsRef.current) {
      gsap.killTweensOf(dot);
    }

    sizeRef.current = { width, height };
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const path = new Path2D();
    path.arc(0, 0, dotSize / 2, 0, Math.PI * 2);
    circlePathRef.current = path;

    const cols = Math.floor((width + gap) / (dotSize + gap));
    const rows = Math.floor((height + gap) / (dotSize + gap));
    const cell = dotSize + gap;
    const gridW = cell * cols - gap;
    const gridH = cell * rows - gap;
    const startX = (width - gridW) / 2 + dotSize / 2;
    const startY = (height - gridH) / 2 + dotSize / 2;

    const dots: Dot[] = [];
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        dots.push({
          cx: startX + x * cell,
          cy: startY + y * cell,
          xOffset: 0,
          yOffset: 0,
          _inertiaApplied: false,
        });
      }
    }
    dotsRef.current = dots;
    return true;
  }, [dotSize, gap]);

  useLayoutEffect(() => {
    let rafId = 0;
    let alive = true;

    const frame = () => {
      if (!alive) return;

      const canvas = canvasRef.current;
      const circlePath = circlePathRef.current;
      if (!canvas || !circlePath || dotsRef.current.length === 0) {
        buildGrid();
        rafId = requestAnimationFrame(frame);
        return;
      }

      const { width, height } = sizeRef.current;
      if (width <= 0 || height <= 0) {
        buildGrid();
        rafId = requestAnimationFrame(frame);
        return;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) {
        rafId = requestAnimationFrame(frame);
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      const {
        proximity: prox,
        baseColor: base,
        baseRgb,
        activeRgb,
        opacity: dotOpacity,
      } = paintRef.current;
      const proxSq = prox * prox;
      const { x: px, y: py } = pointerRef.current;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = dotOpacity;

      for (const dot of dotsRef.current) {
        const ox = dot.cx + dot.xOffset;
        const oy = dot.cy + dot.yOffset;
        const dx = dot.cx - px;
        const dy = dot.cy - py;
        const dsq = dx * dx + dy * dy;

        let style = base;
        if (dsq <= proxSq) {
          const dist = Math.sqrt(dsq);
          const t = 1 - dist / prox;
          const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
          const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
          const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
          style = `rgb(${r},${g},${b})`;
        }

        ctx.save();
        ctx.translate(ox, oy);
        ctx.fillStyle = style;
        ctx.fill(circlePath);
        ctx.restore();
      }

      rafId = requestAnimationFrame(frame);
    };

    buildGrid();
    const wrap = wrapperRef.current;
    const ro =
      wrap &&
      new ResizeObserver(() => {
        buildGrid();
      });
    if (wrap && ro) ro.observe(wrap);

    rafId = requestAnimationFrame(frame);

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      ro?.disconnect();
      for (const dot of dotsRef.current) {
        gsap.killTweensOf(dot);
      }
    };
  }, [buildGrid]);

  useEffect(() => {
    if (!motionEnabled) return;

    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      const pr = pointerRef.current;
      const dt = pr.lastTime ? now - pr.lastTime : 16;
      const dx = e.clientX - pr.lastX;
      const dy = e.clientY - pr.lastY;
      let vx = (dx / dt) * 1000;
      let vy = (dy / dt) * 1000;
      let speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) {
        const scale = maxSpeed / speed;
        vx *= scale;
        vy *= scale;
        speed = maxSpeed;
      }
      pr.lastTime = now;
      pr.lastX = e.clientX;
      pr.lastY = e.clientY;
      pr.vx = vx;
      pr.vy = vy;
      pr.speed = speed;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      pr.x = e.clientX - rect.left;
      pr.y = e.clientY - rect.top;

      const prox = paintRef.current.proximity;

      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);
        if (speed > speedTrigger && dist < prox && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const pushX = dot.cx - pr.x + vx * 0.005;
          const pushY = dot.cy - pr.y + vy * 0.005;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const onClick = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      for (const dot of dotsRef.current) {
        const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
        if (dist < shockRadius && !dot._inertiaApplied) {
          dot._inertiaApplied = true;
          gsap.killTweensOf(dot);
          const falloff = Math.max(0, 1 - dist / shockRadius);
          const pushX = (dot.cx - cx) * shockStrength * falloff;
          const pushY = (dot.cy - cy) * shockStrength * falloff;
          gsap.to(dot, {
            inertia: { xOffset: pushX, yOffset: pushY, resistance },
            onComplete: () => {
              gsap.to(dot, {
                xOffset: 0,
                yOffset: 0,
                duration: returnDuration,
                ease: "elastic.out(1,0.75)",
              });
              dot._inertiaApplied = false;
            },
          });
        }
      }
    };

    const throttledMove = throttle(onMove, 50);
    window.addEventListener("mousemove", throttledMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("mousemove", throttledMove);
      window.removeEventListener("click", onClick);
    };
  }, [
    motionEnabled,
    maxSpeed,
    speedTrigger,
    resistance,
    returnDuration,
    shockRadius,
    shockStrength,
  ]);

  return (
    <div
      className={`relative h-full min-h-[inherit] w-full ${className}`}
      style={style}
      aria-hidden
    >
      <div ref={wrapperRef} className="relative h-full min-h-[inherit] w-full">
        <canvas
          ref={canvasRef}
          className="pointer-events-none absolute inset-0 h-full w-full"
        />
      </div>
    </div>
  );
}
