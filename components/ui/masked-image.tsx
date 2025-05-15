import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export type MaskedImageVariant =
  | "shape1"
  | "shape2"
  | "shape3"
  | "shape4"
  | "shape5"
  | "shape6";

interface MaskedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  variant?: MaskedImageVariant;
  className?: string;
  fill?: boolean; // use layout fill for flipping image overlays
}

const getMaskUrl = (variant: MaskedImageVariant): string => {
  const maskMap: Record<MaskedImageVariant, string> = {
    shape1: "/mask-shape-1.svg",
    shape2: "/mask-shape-2.svg",
    shape3: "/mask-shape-3.svg",
    shape4: "/mask-shape-4.svg",
    shape5: "/mask-shape-5.svg",
    shape6: "/mask-shape-6.svg",
  };

  return maskMap[variant];
};

export const MaskedImage: React.FC<MaskedImageProps> = ({
  src,
  alt,
  width,
  height,
  variant = "shape1",
  className = "",
  fill = false,
}) => {
  const maskUrl = getMaskUrl(variant);

  return (
    <div className={cn(fill ? "relative w-full h-full" : "")}>
      <Image
        src={src}
        alt={alt}
        priority
        {...(fill
          ? { fill: true, sizes: "(min-width: 1024px) 500px, 100vw" }
          : { width: width ?? 600, height: height ?? 1000 })}
        className={cn(
          "object-cover mask-no-repeat mask-center mask-size-[100%_100%]",
          fill ? "object-top" : "",
          className
        )}
        style={{ maskImage: `url(${maskUrl})` }}
      />
    </div>
  );
};
