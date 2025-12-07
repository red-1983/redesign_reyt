"use client";
import React, { useState } from "react";
import {
  RenderImageContext,
  RenderImageProps,
  RowsPhotoAlbum,
} from "react-photo-album";
import "react-photo-album/rows.css";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import dynamic from "next/dynamic";
const Lightbox = dynamic(() => import("yet-another-react-lightbox"), {
  ssr: false,
});
import Image from "next/image";
interface PhotoProps {
  src: string;
  width: number;
  height: number;
  alt?: string;
}
interface PortfolioGalleryProps {
  photos: PhotoProps[];
}

// const columns = (containerWidth: number) => {
//   if (containerWidth < 480) return 2;
//   if (containerWidth < 900) return 3;
//   return 4;
// };
function renderNextImage(
  { alt = "", title, sizes }: RenderImageProps,
  { photo, width, height }: RenderImageContext
) {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        aspectRatio: `${width} / ${height}`,
        overflow: "hidden",
      }}
    >
      <Image
        fill
        src={photo}
        alt={alt}
        title={title}
        sizes={sizes}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
      />
    </div>
  );
}
export const PortfolioGallery = ({ photos }: PortfolioGalleryProps) => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <RowsPhotoAlbum
        photos={photos}
        render={{ image: renderNextImage }}
        targetRowHeight={300}
        defaultContainerWidth={1350}
        sizes={{
          size: "1350px",
          sizes: [
            { viewport: "(max-width: 1200px)", size: "calc(100vw - 32px)" },
          ],
        }}
        padding={12}
        spacing={6}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails]}
      />
    </>
  );
};
