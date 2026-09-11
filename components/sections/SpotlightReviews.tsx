import { spotlightReviews } from "@/lib/content";

export function SpotlightReviews() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/6778043699a2f913f47628dd/68ce5f7fbf72d4300ecf5d59_Clip path group (1).avif')",
        }}
      />

      <div className="padding-global relative">
        <div className="container-large">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {spotlightReviews.map((review, index) => (
              <div
                key={review.name}
                data-card-reveal
                className={
                  index === 0
                    ? "-rotate-[10deg]"
                    : index === 1
                      ? "-translate-y-12"
                      : "rotate-[10deg]"
                }
              >
                <div
                  className={`rounded-lg p-6 ${review.bgClass} ${review.textClass}`}
                >
                  <p className="text-base leading-relaxed md:text-lg">
                    {review.quote}
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm opacity-80">{review.role}</p>
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
