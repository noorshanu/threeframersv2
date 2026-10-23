type VideoEmbedProps = {
  src: string;
  aspectRatio?: "16/9" | "9/16";
  title?: string;
};

export function VideoEmbed({
  src,
  aspectRatio = "16/9",
  title = "Thr33 Frames portfolio video",
}: VideoEmbedProps) {
  return (
    <div
      className="relative overflow-hidden rounded-xl bg-black"
      style={{ aspectRatio }}
    >
      <iframe
        src={src}
        title={title}
        loading="lazy"
        referrerPolicy="origin"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
