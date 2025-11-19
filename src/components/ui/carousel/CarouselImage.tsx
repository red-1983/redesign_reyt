import React from "react";
import Image from "next/image";
import { carouselImage1, carouselImage2, carouselImage3 } from "@/assets";

import { cn } from "@/lib/utils";

interface CarouselImageProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
  className?: string;
}
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const CarouselImage = ({
  children,
  className,
  ...props
}: CarouselImageProps) => {
  const arryImage = [
    {
      id: 1,
      image: carouselImage1,
      alt: "Пример работы 1",
    },
    {
      id: 2,
      image: carouselImage2,
      alt: "Пример работы 2",
    },
    {
      id: 3,
      image: carouselImage3,
      alt: "Пример работы 3",
    },
  ];
  return (
    <Carousel className={cn("w-full", className)} {...props}>
      <CarouselContent>
        {arryImage.map((item) => (
          <CarouselItem key={item.id} className="relative aspect-[1310/873]">
            <Image src={item.image} alt={item.alt} fill sizes="100vw" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default CarouselImage;
