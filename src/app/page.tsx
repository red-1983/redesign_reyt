import Image from "next/image";
import imageSectionNav from "@/assets/img/imageSectionNav.webp";
import imageSectionAbout from "@/assets/img/imageSectionAbout.webp";
import { Button } from "@/components/ui";
export default function Home() {
  return (
    <div>
      <section className="relative flex aspect-[1920/943] pb-2 lg:flex-col lg:justify-center">
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
          quality={80}
          style={{ objectFit: "cover" }}
          placeholder="blur"
          className="-z-10"
          priority
        />
        <div className="xmd:flex-col xs:justify-end xmd:justify-start xs:px-10 flex px-2 pt-6 sm:justify-around md:w-[70%] lg:h-[600px]">
          <h2 className="xs:leading-snug text-[clamp(1rem,3.3vw,2.5rem)] leading-[1.5rem] font-bold tracking-wide text-[#000000c7] lowercase first-letter:uppercase">
            Комплексный уход <br className="md:hidden" />
            за Вашим авто: <br />
            от стекол <br className="md:hidden" />
            до кондиционера
          </h2>
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
      <section className="bg-brand-body text-brandText flex h-[min-content] w-full flex-col items-center justify-center px-4 pt-4">
        <Button
          variant="secondary"
          className="bg-brand-components flex h-[45px] w-[250px] sm:hidden"
        >
          Оставить заявку
        </Button>
        <div className="flex h-[min-content] w-full items-center justify-between pt-15">
          <div className="flex h-[min-content] flex-col sm:w-[50%]">
            <h2 className="mb-5">О компании</h2>
            <p className="mb-5 text-justify">
              Наша команда - эксперты с многолетним опытом, для которых
              безупречная видимость и комфорт в вашем автомобиле - главный
              приоритет. Мы не просто меняем стекла и заправляем кондиционеры.
              Мы восстанавливаем безопасность, обеспечиваем кристальную чистоту
              обзора и идеальный микроклимат в салоне. Используем
              профессиональное оборудование и сертифицированные материалы, чтобы
              каждая работа служила вам долгие годы. Ваше спокойствие на дороге
              - наша награда!
            </p>
          </div>
          <div className="relative hidden aspect-[630/420] h-auto max-w-[630px] sm:flex sm:w-[45%]">
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
      </section>
    </div>
  );
}
