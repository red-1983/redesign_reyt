import type { Metadata } from "next";
import { OctagonAlert, Frown, Bandage, ThumbsUp } from "lucide-react";
import {
  Breadcrumbs,
  SectionMain,
  Popap,
  FormContact,
  Card,
  IconCard,
  MotionString,
  VideoPlayer,
} from "@/components/ui";
import {
  repairSectionMainImages,
  imageRepairCard1,
  imageRepairCard2,
  imageRepairCard3,
  imageRepairCard4,
} from "@/data/image-sets";
import { advantageRepair } from "@/data/advantageRepair";
export const metadata: Metadata = {
  title: "Ремонт трещин и сколов автомобильных стекол в Мозыре | Reyt.by",
  description:
    "Aвтостекло Мозырь, ремонт трещин и сколов автостекла с выездом, быстро, качественно, недорого  - reyt.by",
};
const ChipRepair = () => {
  return (
    <>
      <SectionMain
        h1="Aвтостекло Мозырь, ремонт трещин и сколов автостекла с выездом, быстро, качественно, недорого  - reyt.by"
        imageSRC={repairSectionMainImages}
        imageALT="Фоновое изображение навигационной секции"
        mainText={
          <>
            Профессиональный ремонт <br />
            трещин и сколов автомобильного стекла
          </>
        }
        text="Поможем уберечь стекло Вашего автомобиля от дорогостоящей замены. Быстро, качественно, недорого"
      >
        <Popap className="hidden sm:flex">
          <FormContact />
        </Popap>
      </SectionMain>
      <Breadcrumbs className="mx-auto flex w-full max-w-[1350px] [&_[data-slot=breadcrumb-list]]:text-[#bebebe]" />
      <div className="mx-auto max-w-[1350px] px-4">
        <section className="flex h-[min-content] w-full flex-col items-center justify-center pt-10 sm:pt-0 md:mb-30">
          <Popap className="flex sm:hidden">
            <FormContact />
          </Popap>
          <h2 className="">Предлагаем</h2>
          <ul className="flex flex-wrap justify-center gap-5 sm:justify-around">
            <Card
              imageSRC={imageRepairCard1}
              imageALT="Изображение-бесплатная консультация по поврежденному автомобильному стеклу"
              h3="Бесплатную консультацию по поврежденному автомобильному стеклу Вашего автомобиля"
            ></Card>
            <Card
              imageSRC={imageRepairCard4}
              imageALT="Изображение-качественный ремонт трещин и сколов опытным персоналом"
              h3="Качественный ремонт трещин и сколов опытным персоналом, с использованием специализированного инструмента и применением профессиональных материалов."
            ></Card>
            <Card
              imageSRC={imageRepairCard3}
              imageALT="Изображение-"
              h3="В случае невозможности ремонта автомобильного стекла (в виду сильного повреждения или уменьшению прочности стекла при ремонте), мы предложим Вам новое стекло в наличии или под заказ."
            ></Card>
            <Card
              imageSRC={imageRepairCard2}
              imageALT="Изображение-замена панорамного стекла автомобиля"
              h3="Ремонт трещин и сколов автомобильного стекла с выездом нашего мастера. Выезд мастера по Мозырю и Мозырскому району."
            ></Card>
          </ul>
        </section>
        <section className="bg-brand-body mb-15 flex flex-col items-center pt-0.5 md:mb-30">
          <h2 className="self-start">Наши преимущества</h2>
          <MotionString array={advantageRepair} />
        </section>
      </div>

      <section className="bg-brand-footer xs:px-0 flex flex-col items-center px-2 pb-30">
        <h2 className="text-center">
          Памятка на случай повреждения автомобильного стекла
        </h2>
        <ul className="xs:flex-row xs:gap-5 xs:items-start flex w-full max-w-[1350px] flex-col flex-wrap items-center justify-center gap-10 md:justify-around 2xl:justify-between">
          <IconCard
            className="max-w-[300px]"
            title="В случае образования на автомобильном стекле скола или трещины, следует немедленно защитить место повреждения от попадания в него влаги, пыли или грязи "
          >
            <Frown />
          </IconCard>
          <IconCard
            className="max-w-[300px]"
            title="Заклеить  подручными средствами место повреждения подручными средствами: наклейка, скотч, лейкопластырь"
          >
            <Bandage />
          </IconCard>
          <IconCard
            className="max-w-[300px]"
            title="Не стоит выполнять ремонт стекла самостоятельно. Своими действиями вы можете усугубить ситуацию с поврежденным стеклом и в последствии Вам понадобиться не ремонт а замена всего стекла."
          >
            <OctagonAlert />
          </IconCard>
          <IconCard
            className="max-w-[300px]"
            title="По возможности как можно быстрее навестите специализированную мастерскую для устранения скола или трещины"
          >
            <ThumbsUp />
          </IconCard>
        </ul>
      </section>

      <section className="bg-brand-body mx-auto mt-15 flex w-full max-w-[1350px] flex-col items-center pt-0.5 md:mb-30">
        <h3 className="self-start">
          Предлагаем ознакомится с дефектами и их последствиями для
          автомобильных стекол. Данное видео созданно от аттестованных
          профеcсионалов НТВ+ передача “Главная дорога”.
        </h3>
        <VideoPlayer
          src="/video/road.mp4"
          title="Познавательный видеоролик о дефектах автомобильного стекла"
          poster="/video/road.webp"
          className="max-w-[85%] md:max-w-[70%]"
        />
      </section>
    </>
  );
};
export default ChipRepair;
