import React from "react";
import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import { photos } from "../../../data/photos";
export const PortfolioGallery = () => {
  return <RowsPhotoAlbum photos={photos} />;
};

// export default PortfolioGallery;
// "use client";

// import React, { useState } from "react";
// import PhotoAlbum from "react-photo-album";
// import Lightbox from "yet-another-react-lightbox";
// import "yet-another-react-lightbox/styles.css";

// // Опционально: импортируем плагины для лайтбокса
// import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
// import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// import "yet-another-react-lightbox/plugins/thumbnails.css";

// type Photo = {
//   src: string;
//   width: number;
//   height: number;
// };

// export function PortfolioGallery({ photos }: { photos: Photo[] }) {
//   const [index, setIndex] = useState(-1);

//   return (
//     <>
//       <PhotoAlbum
//         photos={photos}
//         layout="rows"
//         targetRowHeight={250}
//         onClick={({ index }) => setIndex(index)}
//       />

//       <Lightbox
//         slides={photos}
//         open={index >= 0}
//         index={index}
//         close={() => setIndex(-1)}
//         plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
//       />
//     </>
//   );
// }
