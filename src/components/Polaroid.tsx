import Image from "next/image";

type Props = {
  src: string | null;
  alt: string;
  placeholder: string;
  caption: string;
  aspect: "square" | "portrait";
  tilt?: number;
  preload?: boolean;
};

/** A tilted polaroid frame. Shows a labelled placeholder until a photo path is set. */
export function Polaroid({ src, alt, placeholder, caption, aspect, tilt = -4, preload }: Props) {
  return (
    <figure className="polaroid" style={{ transform: `rotate(${tilt}deg)` }}>
      <div className={`polaroid-photo polaroid-${aspect}`}>
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 80vw, 300px"
            style={{ objectFit: "cover" }}
            preload={preload}
          />
        ) : (
          <span className="mono">{placeholder}</span>
        )}
      </div>
      <figcaption className="mono">{caption}</figcaption>
    </figure>
  );
}
