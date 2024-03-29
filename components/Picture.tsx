import { useState } from "react";

interface Props {
  src: string;
  srcX2?: string;
  alt: string;
  width: number;
  height: number;
}

export default function Picture({ src, srcX2, alt, width, height }: Props) {
  const [loaded, setLoaded] = useState(false);

  const srcSet = src + (srcX2 ? `, ${srcX2} 2x` : "");

  return (
    <div style={!loaded ? { backgroundColor: "#f4f4f4" } : {}}>
      <picture>
        <source srcSet={srcSet}></source>
        <img
          onLoad={() => setLoaded(true)}
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </picture>
    </div>
  );
}
