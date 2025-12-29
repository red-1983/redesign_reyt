"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });
import { MarqueeItem } from "./MarqueeItem";
import { marqueeGlassReplacement } from "@/data/marqueeGlassReplacement";

export const MovingStrip = () => {
  const marqueeItems = useMemo(
    () =>
      marqueeGlassReplacement.map((item, index) => (
        <MarqueeItem
          key={index}
          href={item.href}
          src={item.src}
          alt={item.alt}
          className={item.className}
          imageClassName={item.imageClassName}
        />
      )),
    []
  );

  return (
    <Marquee
      pauseOnHover={true} // Останавливать при наведении
      speed={30} // Скорость (можно подобрать)
      gradient={true} // Включить градиент по краям
      gradientColor={"#014bae"}
      gradientWidth={"15%"}
    >
      {marqueeItems}
    </Marquee>
  );
};
