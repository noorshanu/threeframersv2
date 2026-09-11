"use client";

import Image from "next/image";

import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="padding-global py-12 md:py-16">
      <div className="container-large">
        <div className="grid gap-10 md:grid-cols-3 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} data-card-reveal className="text-center">
              <div className="mb-3 flex justify-center">
                <Image
                  src={stat.icon}
                  alt=""
                  width={80}
                  height={80}
                  className="h-20 w-20"
                />
              </div>
              <h2 className="font-heading text-2xl font-semibold tracking-tight">
                {stat.label}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
