import { HighlightQuote } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CAL_DISCOVERY_URL } from "@/lib/constants";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section id="section_testimonials" className="py-16 md:py-24">
      <div className="padding-global">
        <div className="container-large">
          <div className="mb-12 max-w-3xl">
            <SectionHeader title="Client" highlight="Testimonials" />
            <p className="mt-4 text-lg text-grey-2">
              Hear from their experience
            </p>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                data-card-reveal
                className="mb-4 break-inside-avoid rounded-lg border border-border bg-gradient-to-b from-surface-elevated to-background p-6"
              >
                <p className="text-base leading-relaxed">
                  <HighlightQuote
                    quote={item.quote}
                    highlight={item.highlight}
                    highlightClass={item.highlightClass}
                  />
                </p>
                <div className="mt-4">
                  <p className="font-semibold">{item.name}</p>
                  {item.role ? (
                    <p className="text-sm text-grey-2">{item.role}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button href={CAL_DISCOVERY_URL} external>
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
