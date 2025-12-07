import React from "react";
import {
  Breadcrumbs,
  SectionMain,
  Popap,
  FormContact,
  Card,
} from "@/components/ui";
import {
  replacement1,
  replacement2,
  replacement3,
  replacement4,
  replacement5,
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
              h3="Замена бокового стекла автомобиля"
            ></Card>
            <Card
              image={replacement3}
              altImage="Изображение-замена лобового стекла автомобиля"
              h3="Замена лобового стекла автомобиля"
            ></Card>
            <Card
              image={replacement4}
              altImage="Изображение-замена заднего стекла автомобиля"
              h3="Замена заднего стекла автомобиля"
            ></Card>
            <Card
              image={replacement5}
              altImage="Изображение-замена панорамного стекла автомобиля"
              h3="Замена панорамного стекла или люка автомобиля"
            ></Card>
          </ul>
        </section>
      </div>
    </>
  );
};
export default GlassReplacement;
