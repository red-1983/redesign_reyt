import Image from "next/image";
import imageSectionNav from "@/assets/img/imageSectionNav.jpg";
import imageSectionAbout from "@/assets/img/imageSectionAbout.webp";
import {
  servicesImage1,
  servicesImage2,
  servicesImage3,
  servicesImage4,
  Car,
  CarRepair,
  CarSecurity,
  List,
  Quality,
} from "@/assets";
import { Card } from "@/components/ui/card/Card";
import { Button, IconCard } from "@/components/ui";

export default function Home() {
  return (
    <>
      <section className="relative flex aspect-[1920/820] md:mb-30 lg:flex-col lg:justify-center">
        <h1 className="sr-only">
          {" "}
          Aвтостекла Мозырь, замена автостекол, установка автостекол, ремонт
          трещин автостекла, полировка фар, заправка автокондиционера - reyt.by
        </h1>
        <Image
          src={imageSectionNav}
          alt="Фоновое изображение навигационной секции"
          fill
          sizes="100vw"
          quality={100}
          style={{ objectFit: "cover" }}
          placeholder="blur"
          className="z-10"
          priority
        />
        <div className="xmd:flex-col xs:justify-end xmd:justify-start xs:px-10 z-10 flex px-2 pt-6 sm:justify-around md:w-[70%] lg:h-[600px]">
          <p className="xs:leading-snug text-[clamp(1rem,3.3vw,2.5rem)] leading-[1.5rem] font-bold tracking-wide text-[#000000c7] lowercase first-letter:uppercase">
            Комплексный уход <br className="md:hidden" />
            за Вашим авто: <br />
            от стекол <br className="md:hidden" />
            до кондиционера
          </p>
          <p className="hidden text-[clamp(1rem,2.5vw,1.4rem)] lg:block lg:w-[500px]">
            Полный цикл заботы о вашем автомобиле: от треснувшего стекла до
            полутневшей фары. Работаем качественно, оперативно, даем гарантию.
            Вернем прозрачность, яркость и прохладу!
          </p>
          <Button
            variant="secondary"
            className="bg-brand-components xs:h-[45px] xs:w-[185px] hidden h-[40px] w-[160px] sm:flex sm:h-[60px] sm:w-[250px]"
          >
            Оставить заявку
          </Button>
        </div>
      </section>
      <div className="mx-auto max-w-[1350px] px-4">
        <section className="flex h-[min-content] w-full flex-col items-center justify-center pt-10 sm:pt-0 md:mb-30">
          <Button
            variant="secondary"
            className="bg-brand-components flex h-[45px] w-[250px] sm:hidden"
          >
            Оставить заявку
          </Button>
          <div className="flex h-[min-content] flex-col items-center justify-between">
            <h2 className="self-start">О компании</h2>
            <div className="flex h-[min-content] w-full items-center justify-between gap-[1%]">
              <p className="w-full text-justify text-[clamp(1rem,2.5vw,1.5rem)] sm:w-[50%]">
                Наша команда - эксперты с многолетним опытом, для которых
                безупречная видимость и комфорт в вашем автомобиле - главный
                приоритет. Мы не просто меняем стекла и заправляем кондиционеры.
                Мы восстанавливаем безопасность, обеспечиваем кристальную
                чистоту обзора и идеальный микроклимат в салоне. Используем
                профессиональное оборудование и сертифицированные материалы,
                чтобы каждая работа служила вам долгие годы. Ваше спокойствие на
                дороге - наша награда!
              </p>

              <div className="relative hidden aspect-[630/420] w-[47%] max-w-[630px] sm:block">
                <Image
                  src={imageSectionAbout}
                  alt="Фоновое изображение "
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-brand-body mb-30 pt-0.5">
          <h2 className="">Каталог услуг</h2>
          <ul className="flex flex-wrap justify-center gap-5 sm:justify-around">
            <Card
              image={servicesImage1}
              altImage="Изображение-замена автомобильных стекол"
              h3="Замена автомобильных стекол"
              href="/services/glass-replacement"
            />
            <Card
              image={servicesImage2}
              altImage="Изображение-полировка фар"
              h3="Полировка фар"
              href="/services/glass-replacement"
            />
            <Card
              image={servicesImage3}
              altImage="Изображение-замена автомобильных стекол"
              h3="Ремонт сколов и трещин"
              href="/services/glass-replacement"
            />
            <Card
              image={servicesImage4}
              altImage="Изображение-замена автомобильных стекол"
              h3="Заправка кондиционера автомобиля"
              href="/services/glass-replacement"
            />
          </ul>
        </section>
      </div>
      <section className="bg-brand-footer flex flex-col items-center pb-30">
        <h2 className="text-center">Почему клиенты выбирают нас?</h2>
        <ul className="flex w-[1350px] flex-wrap justify-between gap-5">
          <IconCard title="20 лет решаем задачи наших клиентов ">
            <Car className="h-38 w-38 fill-white transition-all duration-300 ease-in-out group-hover:fill-[yellow] group-hover:drop-shadow-[0_5px_15px_rgba(255,255,0,0.4)]" />
          </IconCard>
          <IconCard
            title="Сотрудничаем 
с самыми 
надежными производителями
автостекол"
          >
            <List className="h-38 w-38 fill-white text-green-500 group-hover:[&>.list-item-1]:fill-current group-hover:[&>.list-item-2]:fill-current group-hover:[&>.list-item-2]:delay-100 group-hover:[&>.list-item-3]:fill-current group-hover:[&>.list-item-3]:delay-300 group-hover:[&>.list-item-4]:fill-current group-hover:[&>.list-item-4]:delay-500 [&>g]:transition-all [&>g]:duration-200" />
          </IconCard>
          <IconCard
            title="Работаем 
со страховыми 
случаями"
          >
            <CarSecurity className="h-38 w-38" />
          </IconCard>
          <IconCard title="Выездной сервис">
            <CarRepair className="h-38 w-38" />
          </IconCard>
          <IconCard
            title="Гарантия на 
герметичность 
стекла: 
12 месяцев - 
для автомобилей
 до 2018"
          >
            <Quality className="h-38 w-38" />
          </IconCard>
        </ul>
      </section>
    </>
  );
}
