"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });
import type { StaticImageData } from "next/image";
import { MarqueeItem } from "./MarqueeItem";

interface MarqueeDataType {
  href: string;
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imageClassName?: string;
}

interface MovingStripProps {
  items: MarqueeDataType[];
}

export const MovingStrip = ({ items }: MovingStripProps) => {
  const marqueeItems = useMemo(
    () =>
      items.map((item, index) => (
        <MarqueeItem
          key={index}
          href={item.href}
          src={item.src}
          alt={item.alt}
          className={item.className}
          imageClassName={item.imageClassName}
        />
      )),
    [items]
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
