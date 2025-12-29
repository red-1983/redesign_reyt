import React from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
interface MarqueeItemProps {
  href: string;
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imageClassName?: string;
}
export const MarqueeItem = ({
  href,
  src,
  alt,
  className,
  imageClassName,
}: MarqueeItemProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "mr-5 flex items-center justify-center rounded-md sm:mr-15",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        width={200}
        height={100}
        className={cn("object-contain", imageClassName)}
      />
    </Link>
  );
};
