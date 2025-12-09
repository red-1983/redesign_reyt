"use client";

import React, { useMemo, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

interface MovingStripProps {
  logos?: { src: string; alt?: string; width?: number; height?: number }[];
  speed?: number;
  pauseOnHover?: boolean;
  reverse?: boolean;
}
export const MovingStrip = ({
  logos = [],
  speed = 40,
  pauseOnHover = true,
  reverse = false,
}: MovingStripProps) => {
  // ключ для принудительного ремонта при изменении ширины окна
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const items = useMemo(() => {
    const list = logos.length
      ? logos
      : [
          {
            src: "/images/marquee/fyg.webp",
            alt: "Logo fyg",
            width: 200,
            height: 81,
          },
          {
            src: "/images/marquee/KMK_glass.webp",
            alt: "Logo KMK_glass",
            width: 200,
            height: 200,
          },
          {
            src: "/images/marquee/ogp.webp",
            alt: "Logo ogp",
            width: 200,
            height: 98,
          },
          {
            src: "/images/marquee/securit.webp",
            alt: "Logo securit",
            width: 200,
            height: 57,
          },
          {
            src: "/images/marquee/XYG-logo.webp",
            alt: "Logo XYG-logo",
            width: 200,
            height: 55,
          },
          {
            src: "/images/marquee/KMK_glass.webp",
            alt: "Logo KMK_glass",
            width: 200,
            height: 200,
          },
          {
            src: "/images/marquee/sekurit1",
            alt: "Logo sekurit1",
            width: 200,
            height: 75,
          },
        ];
    return [...list, ...list].map((logo, i) => (
      <div
        key={`${logo.src}-${i}`}
        className="flex flex-shrink-0 items-center justify-center px-4"
        // адаптивная ширина карточки логотипа
        style={{
          width:
            windowWidth < 480
              ? 64
              : windowWidth < 768
                ? 96
                : windowWidth < 1024
                  ? 128
                  : 160,
        }}
        aria-hidden
      >
        <Image
          src={logo.src}
          alt={logo.alt ?? ""}
          width={logo.width ?? 300}
          height={logo.height ?? 100}
          sizes="(max-width:480px) 64px, (max-width:768px) 96px, (max-width:1024px) 128px, 160px"
          style={{ objectFit: "contain", width: "100%", height: "auto" }}
        />
      </div>
    ));
  }, [logos, windowWidth]);

  // respects prefers-reduced-motion
  const play = (() => {
    if (typeof window === "undefined") return false;
    try {
      return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      return true;
    }
  })();

  return (
    <div className="relative w-full max-w-[1920px] overflow-hidden">
      {/* key заставляет Marquee пересоздаваться при resize */}
      <Marquee
        key={windowWidth}
        gradient={true}
        speed={speed}
        pauseOnHover={pauseOnHover}
        direction={reverse ? "right" : "left"}
        play={play}
      >
        {items}
      </Marquee>
    </div>
  );
};
