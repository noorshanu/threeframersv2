import Image from "next/image";

import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/CheckIcon";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CAL_DISCOVERY_URL } from "@/lib/constants";
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
                <div className="flex h-full flex-col rounded-[0.7rem] bg-gradient-to-br from-surface-elevated to-background p-8">
                  <div className="mb-4 flex justify-center">
                    <Image
                      src={tier.frameImage}
                      alt=""
                      width={160}
                      height={100}
                      className="h-14 w-auto object-contain md:h-16"
                    />
                  </div>

                  <div>
                    {"badge" in tier && tier.badge ? (
                      <span className="mb-3 inline-block rounded-md bg-accent-green/15 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-accent-green">
                        {tier.badge}
                      </span>
                    ) : null}
                    <h3 className="font-heading text-xl font-semibold">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-base font-medium leading-snug text-foreground">
                      {tier.tagline}
                    </p>
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

                  <div className="mt-8 flex justify-center">
                    <Button
                      href={CAL_DISCOVERY_URL}
                      external
                      className="w-full max-w-xs"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
