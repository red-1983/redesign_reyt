import React from "react";
import {
  Breadcrumbs,
  SectionMain,
  Popap,
  FormContact,
  Card,
  IconCard,
} from "@/components/ui";
import {
  replacement1,
  replacement2,
  replacement3,
  replacement4,
  replacement5,
  Worker,
  Consultation,
  EEClogo,
  QualityMedal,
} from "@/assets";
const GlassReplacement = () => {
  return (
    <>
      <SectionMain
        h1="Aвтостекло Мозырь, замена автостекол, замена автостекла с выездом, быстро, качественно, недорого  - reyt.by"
        imageSRC={replacement1}
        imageALT="Фоновое изображение навигационной секции"
        mainText={
          <>
            Автостекла для Вашего автомобиля: <br />
            замена, продажа, консультация
          </>
        }
        text="Профессиональная замена автостекла на Вашем автомобиле, качественно, оперативно и с гарантией.
             Применяем только высококачественные материалы и профессиональный инструмент.
            Работаем с КАСКО и другими страховыми случаями. Выезжаем к клиенту на дом."
      >
        <Popap className="hidden sm:flex">
          <FormContact />
        </Popap>
      </SectionMain>
      <Breadcrumbs className="[&_[data-slot=breadcrumb-list]]:text-brand-components mx-auto flex w-full max-w-[1350px]" />
      <div className="mx-auto max-w-[1350px] px-4">
        <section className="bg-brand-body mb-15 pt-0.5 md:mb-30">
          <Popap className="flex sm:hidden">
            <FormContact />
          </Popap>
          <h2 className="">Предлагаем</h2>
          <ul className="flex flex-wrap justify-center gap-5 sm:justify-around">
            <Card
              image={replacement2}
              altImage="Изображение-замена бокового стекла автомобиля"
              h3="Замену бокового стекла автомобиля"
            ></Card>
            <Card
              image={replacement3}
              altImage="Изображение-замена лобового стекла автомобиля"
              h3="Замену лобового стекла автомобиля"
            ></Card>
            <Card
              image={replacement4}
              altImage="Изображение-замена заднего стекла автомобиля"
              h3="Замену заднего стекла автомобиля"
            ></Card>
            <Card
              image={replacement5}
              altImage="Изображение-замена панорамного стекла автомобиля"
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
        <div className="mt-10">
          <h3>
            Работаем с ведущими мировыми производителями автомобильных стекол
          </h3>
        </div>
      </div>
    </>
  );
};
export default GlassReplacement;
