"use client";
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
import { useMediaQuery } from "@/hooks/use-media-query";
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
  const isMobile = useMediaQuery("(max-width: 640px)");
  return (
    <Carousel className={cn("w-full", className)} {...props}>
      <CarouselContent>
        {arryImage.map((item) => (
          <CarouselItem key={item.id} className="relative aspect-[1310/874]">
            <Image src={item.image} alt={item.alt} fill sizes="100vw" />
          </CarouselItem>
        ))}
      </CarouselContent>
      {isMobile ? (
        <div className="absolute top-[-40px] right-[20px] flex gap-x-10">
          <CarouselPrevious className="relative top-auto right-auto bottom-auto left-auto" />
          <CarouselNext className="relative top-auto right-auto bottom-auto left-auto" />
        </div>
      ) : (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
};
export default CarouselImage;
