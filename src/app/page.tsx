import Image from "next/image";
import imageSectionNav from "@/assets/img/imageSectionNav.webp";
import { Button } from "@/components/ui";
export default function Home() {
  return (
    <div>
      <section className="relative aspect-[1920/943]">
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
        <div className="xs:min-h-[90%] xs:bottom-[5%] absolute bottom-[0] left-[5%] flex min-h-[95%] max-w-[55%] flex-col justify-between sm:bottom-[10%] sm:min-h-[75%] md:left-[10%] md:min-h-[70%] md:p-5 lg:bottom-[30%] lg:max-w-[700px]">
          <h2 className="xs:leading-snug text-[clamp(0.95rem,3vw,2.5rem)] leading-tight font-bold">
            Комплексный уход за Вашим авто: от стекол до кондиционера
          </h2>
          <p className="hidden text-[clamp(1rem,2.5vw,1.4rem)] md:block">
            Полный цикл заботы о вашем автомобиле: от треснувшего стекла до
            полутневшей фары. Работаем качественно, оперативно, даем гарантию.
            Вернем прозрачность, яркость и прохладу!
          </p>
          <Button
            variant="secondary"
            className="bg-brand-components xs:h-[45px] xs:w-[185px] h-[40px] w-[160px] sm:h-[60px] sm:w-[250px]"
          >
            Оставить заявку
          </Button>
        </div>
      </section>
    </div>
  );
}
