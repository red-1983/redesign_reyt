import React from "react";
import type { Metadata } from "next";
import { DivBackground, PortfolioGallery, Breadcrumbs } from "@/components/ui";
import { IconInstagram } from "@/assets";
import bgImage from "../../../public/images/nav/bg_navigation.webp";
import { photos } from "../../data/photos";
import { organizationSchema } from "@/config/schema";

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Портфолио наших работ",
  description:
    "Примеры выполненных работ по замене и ремонту автостекол, полировке фар и заправке кондиционеров.",
  url: "https://reyt.by/portfolio",
  image: [
    {
      "@type": "ImageObject",
      name: "Замена лобового стекла на автомобиле Citroen",
      contentUrl: "https://reyt.by/images/portfolio/portfolio1_400_500.jpg",
      description:
        "Профессиональная замена лобового стекла на автомобиле Citroen с использованием качественных материалов",
    },
    {
      "@type": "ImageObject",
      name: "Замена стекла задней двери на автомобиле Volkswagen Transporter",
      contentUrl: "https://reyt.by/images/portfolio/portfolio2_300_400.png",
      description:
        "Профессиональная замена стекла задней двери на автомобиле Volkswagen Transporter с использованием качественных материалов",
    },
    {
      "@type": "ImageObject",
      name: "Замена лобового стекла на автобусе МАЗ",
      contentUrl: "https://reyt.by/images/portfolio/portfolio4_300_400.png",
      description:
        "Профессиональная замена лобового стекла на автобусе МАЗ с использованием качественных материалов",
    },
    {
      "@type": "ImageObject",
      name: "Замена лобового стекла на грузовике Mercedes-Benz",
      contentUrl: "https://reyt.by/images/portfolio/portfolio5_450_600.png",
      description:
        "Профессиональная замена лобового стекла на грузовике Mercedes-Benz с использованием качественных материалов",
    },
    {
      "@type": "ImageObject",
      name: "Замена лобового стекла на автомобиле Audi",
      contentUrl: "https://reyt.by/images/portfolio/portfolio9_500_650.png",
      description:
        "Профессиональная замена лобового стекла на автомобиле Audi с использованием качественных материалов",
    },
    {
      "@type": "ImageObject",
      name: "Заправка кондиционера на автомобиле ",
      contentUrl: "https://reyt.by/images/portfolio/portfolio11_450_500.png",
      description:
        "Профессиональная заправка кондиционера на автомобиле с использованием качественных материалов",
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Главная",
      item: "https://reyt.by/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Портфолио",
      item: "https://reyt.by/portfolio",
    },
  ],
};

export const metadata: Metadata = {
  title: "Портфолио | Reyt.by",
  description:
    "Примеры наших работ по ремонту и обслуживанию автомобилей, качество наших работ в Мозыре - reyt.by",
  other: {
    "application/ld+json": JSON.stringify([
      organizationSchema,
      portfolioSchema,
      breadcrumbSchema,
    ]),
  },
};

export default function Page() {
  return (
    <>
      <DivBackground
        imageSRC={bgImage}
        imageALT="bgImage"
        className="hidden h-17 md:block"
      />
      <Breadcrumbs className="mx-auto flex w-full max-w-[1350px] md:hidden [&_[data-slot=breadcrumb-list]]:text-[#bebebe]" />
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
