import React from "react";
import type { Metadata } from "next";
import { PortfolioGallery } from "@/components/ui";
export const metadata: Metadata = {
  title: "Фотогалерея | Reyt.by",
  description:
    "Автостекла в Мозыре, фотографии наших работ, качество наших работ. - reyt.by",
};
export default function Page() {
  return (
    <section className="m-auto w-full">
      <div className="mx-auto bg-black">
        <h2 className="text-black">Наши работы</h2>
        <PortfolioGallery />
      </div>
    </section>
  );
}
// import type { Metadata } from "next";
// import PortfolioGallery from "@/components/PortfolioGallery";
// import { photos } from "@/data/photos";

// export const metadata: Metadata = {
//   title: "Фотогалерея | Reyt.by",
//   description:
//     "Автостекла в Мозыре, фотографии наших работ, качество наших работ. - reyt.by",
// };

// export default function Page() {
//   return (
//     <div className="mx-auto max-w-[1350px] bg-white px-4 py-8">
//       <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl">
//         Наши работы
//       </h1>
//       {/* Не забудьте создать файлы PortfolioGallery.tsx и photos.ts,
//           как мы обсуждали в прошлый раз */}
//       <PortfolioGallery photos={photos} />
//     </div>
//   );
// }
