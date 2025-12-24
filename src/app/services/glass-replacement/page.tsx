import type { Metadata } from "next";
import {
  Breadcrumbs,
  SectionMain,
  Popap,
  FormContact,
  Card,
  IconCard,
  MovingStrip,
  MotionString,
} from "@/components/ui";
import {
  replacementSectionMainImages,
  imageReplacementCard1,
  imageReplacementCard2,
  imageReplacementCard3,
  imageReplacementCard4,
} from "@/data/image-sets";
import {
  serviceCar,
  Worker,
  Consultation,
  EEClogo,
  QualityMedal,
  Car2,
  Bus,
  Tractor,
  Truck,
} from "@/assets";
import Image from "next/image";
import { serviceFeatures } from "@/data/serviceFeatures";
export const metadata: Metadata = {
  title: "Замена автомобильных стекол в Мозыре | Reyt.by",
  description:
    "Aвтостекло Мозырь, замена автостекол, замена автостекла с выездом, быстро, качественно, недорого  - reyt.by",
};
const GlassReplacement = () => {
  return (
    <>
      <SectionMain
        h1="Aвтостекло Мозырь, замена автостекол, замена автостекла с выездом, быстро, качественно, недорого  - reyt.by"
        imageSRC={replacementSectionMainImages}
        imageALT="Фоновое изображение навигационной секции"
        mainText={
          <>
            Автостекла для Вашего автомобиля: <br />
            замена, продажа, консультация
          </>
        }
        text="Профессиональная замена автостекла на Вашем автомобиле, качественно, оперативно и с гарантией.
             Применяем только высококачественные материалы и профессиональный инструмент.
            "
      >
        <Popap className="hidden sm:flex">
          <FormContact />
        </Popap>
      </SectionMain>
      <Breadcrumbs className="mx-auto flex w-full max-w-[1350px] [&_[data-slot=breadcrumb-list]]:text-[#bebebe]" />
      <div className="mx-auto max-w-[1350px] px-4">
        <section className="flex h-[min-content] w-full flex-col items-center justify-center pt-10 sm:pt-0">
          <Popap className="flex sm:hidden">
            <FormContact />
          </Popap>
          <h2 className="self-start">Предлагаем</h2>
          <ul className="flex flex-wrap justify-center gap-5 sm:justify-around">
            <Card
              imageSRC={imageReplacementCard1}
              imageALT="Изображение-замена бокового стекла автомобиля"
              h3="Замену бокового стекла автомобиля"
            ></Card>
            <Card
              imageSRC={imageReplacementCard2}
              imageALT="Изображение-замена лобового стекла автомобиля"
              h3="Замену лобового стекла автомобиля"
            ></Card>
            <Card
              imageSRC={imageReplacementCard3}
              imageALT="Изображение-замена заднего стекла автомобиля"
              h3="Замену заднего стекла автомобиля"
            ></Card>
            <Card
              imageSRC={imageReplacementCard4}
              imageALT="Изображение-замена панорамного стекла автомобиля"
              h3="Замену панорамного стекла или люка автомобиля"
            ></Card>
          </ul>
        </section>
        <section className="bg-brand-body mb-15 pt-0.5 md:mb-30">
          <h2 className="">Наши преимущества</h2>
          <ul className="xs:flex-row xs:gap-5 xs:items-start flex w-full max-w-[1350px] flex-col flex-wrap items-center justify-center gap-10 md:justify-around 2xl:justify-between">
            <IconCard
              className="max-w-[310px]"
              title="Качественная замена автомобильных стекол опытным квалифицированным персоналом "
            >
              <Worker className="h-38 w-38 fill-white" />
            </IconCard>
            <IconCard
              className="max-w-[310px]"
              title="Каждое автомобильное стекло имеет сертификат соответствия ТР ТС 018/2011 “ О безопасности колесных транспортных средств” "
            >
              <EEClogo className="h-38 w-70" />
            </IconCard>
            <IconCard
              className="max-w-[310px]"
              title="Консультацию и подбор автомобильных стекол для Вашего автомобиля "
            >
              <Consultation className="h-38 w-38" />
            </IconCard>
            <IconCard
              className="max-w-[310px]"
              title="Применяем качественные материалы и профессиональный инструмент при замене стекла "
            >
              <QualityMedal className="h-38 w-38 fill-white" />
            </IconCard>
          </ul>
        </section>
        <div className="mt-10 w-full">
          <h3>
            Работаем с ведущими мировыми производителями автомобильных стекол
          </h3>
          <p>
            {" "}
            Работаем с КАСКО и другими страховыми случаями. Выезжаем к клиенту
            на дом.
          </p>
        </div>
      </div>
      <section className="bg-brand-footer xs:px-0 flex flex-col items-center px-2 pb-30">
        <h2 className="text-center">
          Выполняем замену стекол на любом типе автомобиля и спецтехники
        </h2>
        <ul className="xs:flex-row xs:gap-5 xs:items-start flex w-full max-w-[1350px] flex-col flex-wrap items-center justify-center gap-10 md:justify-around 2xl:justify-between">
          <IconCard title="Замена стекол легкового автомобиля ">
            <Car2 className="h-38 w-38 fill-white transition-all duration-300 ease-in-out group-hover:fill-[yellow] group-hover:drop-shadow-[0_5px_15px_rgba(255,255,0,0.4)] group-active:fill-[yellow]" />
          </IconCard>
          <IconCard title="Замена стекол автобуса и микроавтобуса">
            <Bus className="h-30 w-30 fill-white text-[green] group-hover:[&>.list-item-1]:fill-current group-active:[&>.list-item-1]:fill-current group-hover:[&>.list-item-2]:fill-current group-hover:[&>.list-item-2]:delay-100 group-active:[&>.list-item-2]:fill-current group-active:[&>.list-item-2]:delay-100 group-hover:[&>.list-item-3]:fill-current group-hover:[&>.list-item-3]:delay-300 group-active:[&>.list-item-3]:fill-current group-active:[&>.list-item-3]:delay-300 group-hover:[&>.list-item-4]:fill-current group-hover:[&>.list-item-4]:delay-500 group-active:[&>.list-item-4]:fill-current group-active:[&>.list-item-4]:delay-500 [&>g]:transition-all [&>g]:duration-200" />
          </IconCard>
          <IconCard title="Замена стекол грузового автомобиля">
            <Truck className="group-hover:[&>.shield]:stroke-brand-components group-active:[&>.shield]:stroke-brand-components h-30 w-30 group-hover:[&>.check]:fill-[green] group-active:[&>.check]:fill-[green] [&>.shield]:origin-center [&>.shield]:fill-none [&>.shield]:stroke-white [&>.shield]:transition-transform [&>.shield]:duration-1000 group-hover:[&>.shield]:rotate-y-[360deg]" />
          </IconCard>
          <IconCard title="Замена стекол спецтехники">
            <Tractor className="h-30 w-30 fill-white" />
          </IconCard>
        </ul>
      </section>
      <section className="bg-brand-body mx-auto mb-15 w-full max-w-[1350px] px-4 pt-0.5 md:mb-30 xl:px-0">
        <h2 className="">Выездная бригада</h2>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="xs:max-w-[60%] relative aspect-[956/636] w-full max-w-[80%] lg:max-w-[45%]">
            <Image
              src={serviceCar}
              alt="Выездной ремонт автостекол"
              fill
              style={{ objectFit: "cover" }}
              placeholder="blur"
            />
          </div>
          <MotionString array={serviceFeatures} />
        </div>
      </section>
    </>
  );
};
export default GlassReplacement;
