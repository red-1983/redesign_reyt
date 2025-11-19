"use client";
import React from "react";
import { CardReview } from "../cardReview/CardReview";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@/hooks/use-media-query";

export const CaruselReviews = () => {
  const reviews = [
    {
      id: 1,
      fillStar: 3,
      avatarImage: "",
      title: "Дмитрий Саабов",
      review:
        "Делал скол. Практически не видно. Цены адекватны. Ремонтом доволен.",
    },
    {
      id: 2,
      fillStar: 5,
      avatarImage: "",
      title: "Burmistrov P.I.",
      review:
        "Отличные ребята! Качественно ставят стёкла, без косяков и стоимость отличная!",
    },
    {
      id: 3,
      fillStar: 5,
      avatarImage: "",
      title: "Юрий Бенза",
      review: "Быстро, качественно. Ребятам спасибо",
    },
    {
      id: 4,
      fillStar: 4,
      avatarImage: "",
      title: "Дима П.",
      review: "Отличный сервис",
    },
    {
      id: 5,
      fillStar: 4,
      avatarImage: "",
      title: "Олег Васильев",
      review: "Заказали стекло, пришло быстро. Заменили качественно",
    },
  ];
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Carousel
      orientation={isMobile ? "vertical" : "horizontal"}
      opts={{
        align: "start",
      }}
      className=""
    >
      <CarouselContent className={isMobile ? "h-[500px]" : "f-wull max-w-svw"}>
        {reviews.map((item) => (
          <CarouselItem
            key={item.id}
            className={isMobile ? "basis-1/2" : "md:basis-1/2 lg:basis-1/3"}
          >
            <CardReview
              avatarImage={item.avatarImage}
              title={item.title}
              review={item.review}
              fillStar={item.fillStar}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      {!isMobile ? (
        <div className="absolute top-[-60px] right-[50px] flex gap-x-10">
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
