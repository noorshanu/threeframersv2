type SectionHeaderProps = {
  title: string;
  highlight?: string;
  className?: string;
};

export function SectionHeader({
  title,
  highlight,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`relative inline-flex ${className}`}>
      <h2 className="font-heading text-3xl font-semibold tracking-tight md:text-[3.25rem] md:leading-tight">
        {title}{" "}
        {highlight ? <span className="text-accent">{highlight}</span> : null}
      </h2>
    </div>
  );
}
