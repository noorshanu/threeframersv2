import { SectionHeader } from "@/components/ui/SectionHeader";
import { goalSection } from "@/lib/content";

export function Goal() {
  return (
    <section className="bg-gradient-to-b from-surface-muted to-background py-16 md:py-24">
      <div className="padding-global">
        <div className="container-large">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                title={goalSection.title}
                highlight={goalSection.titleHighlight}
              />
              <p className="mt-4 text-lg italic">{goalSection.description}</p>
            </div>

            <div className="text-lg leading-relaxed text-grey-2 whitespace-pre-line">
              {goalSection.body}
              {goalSection.closing ? (
                <p className="mt-6 italic text-foreground">
                  {goalSection.closing}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
