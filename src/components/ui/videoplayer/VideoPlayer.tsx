"use client";
import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
interface VideoPlayerProps {
  src: string;
  srcWebM?: string;
  poster?: string;
  title: string;
  autoplay?: boolean;
  muted?: boolean;
  controls?: boolean;
  loop?: boolean;
  className?: string;
  lazy?: boolean;
}
export const VideoPlayer = ({
  src,
  srcWebM,
  poster,
  title,
  autoplay = false,
  muted = true,
  controls = true,
  loop = false,
  className,
  lazy = true,
}: VideoPlayerProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(!lazy);
  useEffect(() => {
    if (!lazy || !containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [lazy]);
  return (
    <div
      ref={containerRef}
      className={cn("relative w-full bg-black", "aspect-video", className)}
    >
      {isVisible ? (
        <video
          controls={controls}
          autoPlay={autoplay}
          muted={muted}
          loop={loop}
          poster={poster}
          className="h-full w-full object-cover"
          title={title}
          preload="metadata"
        >
          {/* WebM - лучшее сжатие */}
          {srcWebM && <source src={srcWebM} type="video/webm" />}
          {/* MP4 - совместимость со всеми браузерами */}
          <source src={src} type="video/mp4" />
          Ваш браузер не поддерживает видео HTML5.
        </video>
      ) : (
        poster && (
          <Image src={poster} alt={title} fill style={{ objectFit: "cover" }} />
        )
      )}
    </div>
  );
};
