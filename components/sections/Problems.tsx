"use client";

import Image from "next/image";
import { useRef } from "react";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { problemsSection } from "@/lib/content";
import { gsap, registerGsap, useGSAP } from "@/lib/gsap";

const ACCENTS = [
  "bg-accent",
  "bg-accent-purple",
  "bg-accent-green",
  "bg-accent",
  "bg-accent-purple",
] as const;

export function Problems() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useGSAP(
    () => {
      registerGsap();

      const section = sectionRef.current;
      if (!section) return;

      const header = section.querySelector<HTMLElement>("[data-problems-header]");
      const cards = gsap.utils.toArray<HTMLElement>("[data-problems-card]", section);

      if (prefersReducedMotion) {
        gsap.set([header, ...cards].filter(Boolean), { clearProps: "all" });
        return;
      }

      gsap.set(header, { autoAlpha: 0, y: 24 });
      gsap.set(cards, { autoAlpha: 0, y: 40, rotateX: 8 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          once: true,
        },
      });

      tl.to(header, {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      }).to(
        cards,
        {
          autoAlpha: 1,
          y: 0,
          rotateX: 0,
          duration: 0.65,
          stagger: 0.07,
          ease: "power3.out",
        },
        "-=0.35"
      );
    },
    { scope: sectionRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={sectionRef}
      id="section_solutions"
      className="relative overflow-hidden bg-surface py-20 md:py-28"
    >
      <div className="padding-global relative z-10">
        <div className="container-large">
          <div
            data-problems-header
            className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
          >
            <div className="max-w-xl">
              <SectionHeader
                title={problemsSection.title}
                highlight={problemsSection.titleHighlight}
              />
            </div>
            <p className="max-w-sm text-base leading-relaxed text-grey-2 md:text-right md:text-lg">
              {problemsSection.description}
            </p>
          </div>

          <div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6 lg:gap-5"
            style={{ perspective: "1200px" }}
          >
            {problemsSection.roles.map((role, index) => {
              const span =
                index < 3
                  ? "lg:col-span-2"
                  : "lg:col-span-3";

              return (
                <article
                  key={role.label}
                  data-problems-card
                  className={`group relative overflow-hidden rounded-2xl border border-border bg-background ${span}`}
                >
                  <span
                    aria-hidden
                    className={`absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 ${ACCENTS[index]}`}
                  />

                  <div className="relative flex h-full flex-col justify-between p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-elevated transition-colors duration-300 group-hover:border-white/15 group-hover:bg-surface-muted">
                        <Image
                          src={role.icon}
                          alt=""
                          width={40}
                          height={40}
                          className="h-7 w-7 object-contain"
                        />
                      </div>
                      <span className="font-heading text-sm font-medium tabular-nums text-white/25 transition-colors duration-300 group-hover:text-white/45">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-10 md:mt-14">
                      <h3 className="font-heading text-xl font-semibold tracking-tight text-white md:text-2xl">
                        {role.label}
                      </h3>
                      <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-grey-2">
                        {role.blurb}
                      </p>
                    </div>
                  </div>

                  <div
                    aria-hidden
                    className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-accent/0 blur-3xl transition-[background-color] duration-500 group-hover:bg-accent/15"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
