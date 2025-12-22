import type { Metadata } from "next";
import {
  Breadcrumbs,
  SectionMain,
  Popap,
  FormContact,
  Card,
  IconCard,
  CarouselImage,
  LinkService,
  MotionString,
} from "@/components/ui";
import {
  imageRepairCard1,
  polishingSectionMainImages,
  imagePolishingCard2,
  imagePolishingCard3,
  imagePolishingCard4,
} from "@/data/image-sets";
import {
  Worker,
  Consultation,
  EEClogo,
  QualityMedal,
  Car2,
  Bus,
  Tractor,
  Truck,
} from "@/assets";

import { polishingFeatures } from "@/data/polishingFeatures";
export const metadata: Metadata = {
  title: "Полировка фар в Мозыре | Reyt.by",
  description:
    "Полировка фар в Мозыре, быстро, качественно, недорого. Восстановление фар, восстановление прозрачности пластика фары, продажа фар  - reyt.by",
};

const HeadlightPolishing = () => {
  return (
    <>
      <SectionMain
        h1="Полировка фар в Мозыре, быстро, качественно, недорого. Восстановление фар, восстановление прозрачности пластика фары, продажа фар  - reyt.by"
        imageSRC={polishingSectionMainImages}
        imageALT="Фоновое изображение навигационной секции"
        mainText={
          <>
            Полировка фар, восстановление фар, <br />
            замена, продажа, консультация
          </>
        }
        text="Профессиональная полировка фар обеспечит качественное восстановление прозрачности стекла фары. Позволит отложить покупку новой фары.
             "
      >
        <Popap className="hidden sm:flex">
          <FormContact />
        </Popap>
      </SectionMain>
      <Breadcrumbs className="mx-auto flex w-full max-w-[1350px] [&_[data-slot=breadcrumb-list]]:text-[#bebebe]" />
      <div className="mx-auto max-w-[1350px] px-4">
        <section className="bg-brand-body pt-0.5">
          <Popap className="flex sm:hidden">
            <FormContact />
          </Popap>
          <h2 className="">Предлагаем</h2>
          <ul className="flex flex-wrap justify-center gap-5 sm:justify-around">
            <Card
              imageSRC={imageRepairCard1}
              imageALT="Изображение-консультация по полировке фар"
              h3="Бесплатную консультацию по полировке фар или их замене на Вашем автомобиле. Предложим Вам оптимальный вариант"
            ></Card>
            <Card
              imageSRC={imagePolishingCard2}
              imageALT="Изображение-квалифицированные специалисты"
              h3="Полировку фар квалифицированными опытными специалистами. Восстановим прозрачность фары. Нанесем защитную пленку или покрытие"
            ></Card>
            <Card
              imageSRC={imagePolishingCard3}
              imageALT="Изображение-подготовка фары к прохождению техосмотра"
              h3="Подготовку фар вашего автомобиля к прохождению техосмотра. Проверим и при необходимости отрегулируем потока света ваших фар"
            ></Card>
            <Card
              imageSRC={imagePolishingCard4}
              imageALT="Изображение-подбор фар в нашем магазине"
              h3="Предложим оптимальный вариант (цена-качество) при покупке фар в нашем магазине. Выполним замену"
            ></Card>
          </ul>
        </section>
        <section className="bg-brand-body mb-15 pt-0.5 md:mb-30">
          <h2 className="">Наши преимущества</h2>
          <ul className="xs:flex-row xs:gap-5 xs:items-start flex w-full max-w-[1350px] flex-col flex-wrap items-center justify-center gap-10 md:justify-around 2xl:justify-between">
            <IconCard
              className="max-w-[310px]"
              title="Ответственность и профессионализм. Мы аккуратно выполним демонтаж навесного оборудования, а также обеспечим сохранность деталей автомобиля"
            >
              <Worker className="h-38 w-38 fill-white" />
            </IconCard>
            <IconCard
              className="max-w-[310px]"
              title="Используем качественные наборы и материалы для палировки фар. Всегда применяем профессиональные пасты"
            >
              <EEClogo className="h-38 w-70" />
            </IconCard>
            <IconCard
              className="max-w-[310px]"
              title=" Выполним полировку фары Вашего автомобиля с учетом всех конструктивных особенностей. Быстро, профессионально и недорого"
            >
              <Consultation className="h-38 w-38" />
            </IconCard>
            <IconCard
              className="max-w-[310px]"
              title=" Подберем оптимальные фары для Вашего автомобиля и выполним замену. Сотрудничаем с ведущими мировыми производителями"
            >
              <QualityMedal className="h-38 w-38 fill-white" />
            </IconCard>
          </ul>
        </section>
        <div className="mt-10 w-full">
          <h3>
            Работаем с ведущими мировыми производителями автомобильных стекол
          </h3>
        </div>
        <section className="bg-brand-body mb-15 flex flex-col pt-0.5 md:mb-30">
          <h2 className="self-start">Зачем нужна полировка</h2>
          <MotionString array={polishingFeatures} />
        </section>
      </div>
      <section className="bg-brand-footer xs:px-0 flex flex-col items-center px-2 pb-30">
        <h2 className="text-center">
          Выполняем полировку фар на любом типе автомобиля и спецтехники
        </h2>
        <ul className="xs:flex-row xs:gap-5 xs:items-start flex w-full max-w-[1350px] flex-col flex-wrap items-center justify-center gap-10 md:justify-around 2xl:justify-between">
          <IconCard title="Полировка фары легкового автомобиля ">
            <Car2 className="h-38 w-38 fill-white transition-all duration-300 ease-in-out group-hover:fill-[yellow] group-hover:drop-shadow-[0_5px_15px_rgba(255,255,0,0.4)] group-active:fill-[yellow]" />
          </IconCard>
          <IconCard title="Полировка фар автобуса и микроавтобуса">
            <Bus className="h-30 w-30 fill-white text-[green] group-hover:[&>.list-item-1]:fill-current group-active:[&>.list-item-1]:fill-current group-hover:[&>.list-item-2]:fill-current group-hover:[&>.list-item-2]:delay-100 group-active:[&>.list-item-2]:fill-current group-active:[&>.list-item-2]:delay-100 group-hover:[&>.list-item-3]:fill-current group-hover:[&>.list-item-3]:delay-300 group-active:[&>.list-item-3]:fill-current group-active:[&>.list-item-3]:delay-300 group-hover:[&>.list-item-4]:fill-current group-hover:[&>.list-item-4]:delay-500 group-active:[&>.list-item-4]:fill-current group-active:[&>.list-item-4]:delay-500 [&>g]:transition-all [&>g]:duration-200" />
          </IconCard>
          <IconCard title="Полировка фар грузового автомобиля">
            <Truck className="group-hover:[&>.shield]:stroke-brand-components group-active:[&>.shield]:stroke-brand-components h-30 w-30 group-hover:[&>.check]:fill-[green] group-active:[&>.check]:fill-[green] [&>.shield]:origin-center [&>.shield]:fill-none [&>.shield]:stroke-white [&>.shield]:transition-transform [&>.shield]:duration-1000 group-hover:[&>.shield]:rotate-y-[360deg]" />
          </IconCard>
          <IconCard title="Полировка фар спецтехники">
            <Tractor className="h-30 w-30 fill-white" />
          </IconCard>
        </ul>
      </section>
      <section className="mx-auto flex w-full max-w-[1350px] flex-col items-center gap-10 px-4 pb-5 md:gap-15 md:pb-30">
        <h2 className="self-start">Наши работы</h2>
        <CarouselImage className="xmd:max-w-[80%] max-w-[95%] md:max-w-[60%]" />
        <LinkService href="/portfolio">Подробнее</LinkService>
      </section>
    </>
  );
};
export default HeadlightPolishing;
