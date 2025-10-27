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
        <div className="border-2p-5 absolute top-[25%] left-[10%] flex h-[400px] max-w-[40%] flex-col justify-between">
          <h2 className="text-[clamp(1.2rem,3.5vw,2.5rem)] font-bold">
            Комплексный уход за Вашим авто: от стекол до кондиционера
          </h2>
          <p className="text-[clamp(1rem,2.5vw,1.4rem)]">
            Полный цикл заботы о вашем автомобиле: от треснувшего стекла до
            полутневшей фары. Работаем качественно, оперативно, даем гарантию.
            Вернем прозрачность, яркость и прохладу!
          </p>
          <Button
            variant="secondary"
            className="bg-brand-components sm:h-[60px] sm:w-[250px]"
          >
            Оставить заявку
          </Button>
        </div>
      </section>
    </div>
  );
}
