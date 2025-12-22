import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { ResponsiveImageSources } from "@/types";

interface CardProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  h3?: string;
  imageSRC: string | ResponsiveImageSources;
  imageALT: string;
  children?: React.ReactNode;
}
export const Card = ({
  className,
  h3,
  imageSRC,
  imageALT,
  children,
  ...props
}: CardProps) => {
  return (
    <li
      className={cn(
        `${className} group`,
        "mb-15 flex min-h-[310px] w-[310px] cursor-pointer flex-col items-center justify-between sm:min-h-[325px]",
        className
      )}
      {...props}
    >
      <div className="flex w-full flex-col items-center gap-6">
        {" "}
        <div className="relative h-[230px] w-[280px] overflow-hidden rounded-md sm:h-[250px] sm:w-[300px]">
          {typeof imageSRC === "object" && "desktop" in imageSRC ? (
            <picture>
              <source
                media="(min-width:1024px) "
                srcSet={(imageSRC.desktop as StaticImageData).src}
              />
              <source
                media="(min-width: 768px)"
                srcSet={(imageSRC.tablet as StaticImageData).src}
              />
              <Image
                src={imageSRC.mobile}
                alt={imageALT}
                fill
                sizes="100vw"
                quality={100}
                style={{ objectFit: "cover" }}
                placeholder="blur"
                className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-active:scale-110"
              />
            </picture>
          ) : (
            <Image
              src={imageSRC as string | StaticImageData}
              alt={imageALT}
              fill
              sizes="100vw"
              quality={100}
              style={{ objectFit: "cover" }}
              placeholder="blur"
              className="z-0"
            />
          )}
        </div>
        {h3 && <h3 className="text-center">{h3}</h3>}
      </div>
      {children}
    </li>
  );
};
