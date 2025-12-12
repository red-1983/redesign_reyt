import React from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLLIElement> {
  className?: string;
  h3?: string;
  image?: string | StaticImageData;
  altImage?: string;
  children?: React.ReactNode;
}
export const Card = ({
  className,
  h3,
  image,
  altImage,
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
        <div className="relative h-[250px] w-[300px] overflow-hidden rounded-md">
          {image && altImage && (
            <Image
              src={image}
              alt={altImage}
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
              className="transition-transform duration-300 ease-in-out group-hover:scale-110 group-active:scale-110"
            />
          )}
        </div>
        {h3 && <h3 className="text-center">{h3}</h3>}
      </div>
      {children}
    </li>
  );
};
