"use client"

import Image from "next/image"
import { useRef } from "react"

import { Button } from "@/components/ui/Button"
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion"
import { ASSETS, CAL_DISCOVERY_URL } from "@/lib/constants"
import { heroContent, stats } from "@/lib/content"
import { gsap, registerGsap, useGSAP } from "@/lib/gsap"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useGSAP(
    () => {
      registerGsap()

      if (prefersReducedMotion) {
        return
      }

      gsap.from(".hero-blur", {
        scale: 0.8,
        autoAlpha: 0,
        duration: 1.4,
        ease: "power2.out",
      })

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from(".hero-title", { y: 48, autoAlpha: 0, duration: 1 })
        .from(
          ".hero-sticker",
          { scale: 0, rotate: -24, autoAlpha: 0, duration: 0.7 },
          "-=0.55"
        )
        .from(".hero-copy", { y: 32, autoAlpha: 0, duration: 0.8 }, "-=0.45")
        .from(".hero-cta", { y: 24, autoAlpha: 0, duration: 0.7 }, "-=0.35")
        .from(
          ".hero-stat",
          { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.12 },
          "-=0.2"
        )
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  )

  return (
    <section ref={containerRef} className="relative overflow-hidden pt-[4.5rem]">
      <div
        aria-hidden
        className="hero-blur pointer-events-none absolute right-0 top-0 z-0 hidden h-screen w-[50vw] bg-[#03a5f040] blur-[400px] min-[768px]:block min-[1280px]:w-[55vw] min-[1280px]:rounded-full min-[1280px]:bg-[#03a5f04d] min-[1280px]:blur-[450px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-0"
      >
        <Image
          src={ASSETS.heroGradient}
          alt=""
          width={7364}
          height={1200}
          priority
          sizes="100vw"
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="container-large relative z-10">
        <div className="pt-12" aria-hidden />

        <div className="flex justify-center">
          <div className="flex w-full max-w-[52rem] flex-col items-center px-[5%] py-16 text-center md:mr-8 md:py-20 lg:ml-[5vw] lg:py-28">
            <div className="relative mb-6 inline-block text-center">
              <h1 className="hero-title text-[1.875rem] font-semibold leading-[1.2] tracking-[-1px] min-[768px]:text-[2.25rem] min-[1024px]:text-[3.25rem] min-[1024px]:tracking-[-3px] min-[1440px]:text-[3.5rem]">
                {heroContent.headlineBefore}{" "}
                <span className="text-accent">{heroContent.headlineHighlight}</span>
              </h1>
              <Image
                src={ASSETS.heroSticker}
                alt=""
                width={56}
                height={56}
                className="hero-sticker absolute -right-6 top-[-9%] h-7 w-7 min-[768px]:-right-8 min-[768px]:h-9 min-[768px]:w-9 min-[1024px]:h-14 min-[1024px]:w-14"
              />
            </div>

            <div className="hero-copy max-w-[40rem]">
              <p className="text-base text-grey-2 min-[768px]:text-lg">
                {heroContent.description}
              </p>
            </div>

            <div className="hero-cta mt-8">
              <Button href={CAL_DISCOVERY_URL} external>
                {heroContent.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="padding-global relative z-10 py-12">
        <div className="container-large">
          <div className="grid grid-cols-1 place-items-center gap-8 min-[768px]:grid-cols-3 min-[768px]:gap-x-[20%]">
            {stats.map((stat) => (
              <div key={stat.label} className="hero-stat text-center">
                <div className="mb-2 flex justify-center">
                  <Image
                    src={stat.icon}
                    alt=""
                    width={80}
                    height={80}
                    className="h-14 w-14 min-[768px]:h-20 min-[768px]:w-20"
                  />
                </div>
                <h2 className="font-heading text-base font-semibold tracking-[-1px] min-[768px]:text-2xl">
                  {stat.label}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
