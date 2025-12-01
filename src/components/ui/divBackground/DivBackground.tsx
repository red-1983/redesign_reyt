import React from "react";
import Image, { type StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface DivBackgroundProps extends React.ComponentProps<"div"> {
  className?: string;
  children?: React.ReactNode;
  imageSRC: string | StaticImageData;
  imageALT: string;
}
export const DivBackground = ({
  className,
  children,
  imageSRC,
  imageALT,
  ...props
}: DivBackgroundProps) => {
  return (
    <div className={cn("relative w-full", className)} {...props}>
      <Image
        src={imageSRC}
        alt={imageALT}
        fill
        sizes="100vw"
        quality={100}
        style={{ objectFit: "cover" }}
        placeholder="blur"
        className="z-0"
      />
      {children}
    </div>
  );
};
