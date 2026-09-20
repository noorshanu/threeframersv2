import { spotlightReviews } from "@/lib/content";

export function SpotlightReviews() {
  return (
    <section className="bg-gradient-to-b from-background to-surface-elevated py-16 md:py-24">
      <div className="padding-global">
        <div className="container-large">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {spotlightReviews.map((review) => (
              <article
                key={review.name}
                data-card-reveal
                className="flex h-full flex-col rounded-xl border border-border bg-surface-elevated p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] md:p-8"
              >
                <span
                  aria-hidden
                  className={`mb-6 block h-0.5 w-12 rounded-full ${review.accentClass}`}
                />
                <blockquote className="flex flex-1 flex-col">
                  <p className="text-base leading-relaxed md:text-lg">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <footer className="mt-auto pt-8">
                    <cite className="not-italic">
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="mt-1 text-sm text-grey-2">{review.role}</p>
                    </cite>
                  </footer>
                </blockquote>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
