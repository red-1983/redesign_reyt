import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui";
import clsx from "clsx";

interface CardProps {
  className?: string;
  h3?: string;
  image?: string | StaticImageData;
  altImage?: string;
  href?: string;
}
export const Card = ({
  className,
  h3,
  image,
  altImage,
  href = "#",
  ...props
}: CardProps) => {
  return (
    <li
      className={clsx(
        `${className} group`,
        "mb-15 flex h-[310px] w-[310px] cursor-pointer flex-col items-center justify-between sm:h-[325px]",
        className
      )}
      {...props}
    >
      <div className="flex w-full flex-col items-center gap-2">
        {" "}
        <Link href={href} className="w-full overflow-hidden">
          {image && altImage && (
            <Image
              src={image}
              alt={altImage}
              className="min-h-[200px] w-[300px] transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
          )}
        </Link>
        {h3 && <h3 className="text-center">{h3}</h3>}
      </div>
      <Button
        variant="secondary"
        className="bg-brand-components h-[50px] w-[300px]"
      >
        Подробнее
      </Button>
    </li>
  );
};
