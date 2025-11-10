import React from "react";
import Image from "next/image";
import { carouselImage1 } from "@/assets";
import Img2 from "@/assets/img/services/2.webp";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export const CarouselImage = () => {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem className="relative aspect-[1310/873]">
          <Image
            src={carouselImage1}
            alt="Пример работы 1"
            fill
            sizes="100vw"
          />
        </CarouselItem>
        <CarouselItem className="relative aspect-[1310/873]">
          <Image src={Img2} alt="Пример работы 2" fill sizes="100vw" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default CarouselImage;
