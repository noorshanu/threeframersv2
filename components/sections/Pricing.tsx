import Image from "next/image";

import { CheckIcon } from "@/components/ui/CheckIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pricingSection } from "@/lib/content";

export function Pricing() {
  return (
    <section id="section_process" className="py-16 md:py-24">
      <div className="padding-global">
        <div className="container-large">
          <div className="mb-12 max-w-3xl">
            <SectionHeader
              title={pricingSection.title}
              highlight={pricingSection.titleHighlight}
            />
            <p className="mt-4 text-lg text-grey-2">
              {pricingSection.description}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {pricingSection.tiers.map((tier) => (
              <div
                key={tier.name}
                data-card-reveal
                className="rounded-xl bg-gradient-to-br from-neutral-dark to-background p-[1.5px]"
              >
                <div className="relative flex h-full flex-col rounded-[0.7rem] bg-gradient-to-br from-surface-elevated to-background p-8">
                  <Image
                    src={tier.sticker}
                    alt=""
                    width={64}
                    height={64}
                    className="absolute -top-6 left-6 h-16 w-16"
                  />

                  <div className="mt-6">
                    <h3 className="font-heading text-xl font-semibold">
                      {tier.name}
                    </h3>
                    <p className="mt-3 text-sm text-grey-2">{tier.description}</p>
                  </div>

                  <ul className="mt-8 flex flex-1 flex-col gap-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckIcon />
                        <span className="text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
