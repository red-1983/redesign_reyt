import React from "react";
import type { Metadata } from "next";
import { DivBackground, PortfolioGallery, Breadcrumbs } from "@/components/ui";
import { IconInstagram } from "@/assets";
import bgImage from "../../../public/images/nav/bg_navigation.webp";
import { photos } from "../../data/photos";

export const metadata: Metadata = {
  title: "Фотогалерея | Reyt.by",
  description:
    "Автостекла в Мозыре, фотографии наших работ, качество наших работ. - reyt.by",
};
export default function Page() {
  return (
    <>
      <DivBackground
        imageSRC={bgImage}
        imageALT="bgImage"
        className="hidden h-17 md:block"
      />
      <Breadcrumbs className="[&_[data-slot=breadcrumb-list]]:text-brand-components mx-auto flex w-full max-w-[1350px] md:hidden" />
      <section className="h-fullflex-wrap mx-auto flex max-w-[1350px] flex-col gap-10 px-4 pb-20">
        <h2 className="">Наши работы</h2>

        <PortfolioGallery photos={photos} />
        <ul>
          <li>
            <a
              href="https://www.instagram.com/avtoglass_mozyr/?igshid=17fiuxybtx69m"
              className="hover:text-brand-components flex items-center gap-2 text-[16px] transition-colors md:text-[18px]"
            >
              Еще больше наших работ в Instagram
              <IconInstagram className="fill-brand-components" />
              avtoglass_mozyr
            </a>
          </li>
        </ul>
      </section>
    </>
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
