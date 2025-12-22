import Image from "next/image";
import imageSectionAbout from "@/assets/img/imageSectionAbout.webp";
import {
  responsiveSectionMainImages,
  imageHomeCardReplacement,
  imageHomeCardPolishing,
  imageHomeCardChipped,
  imageHomeCardConditioner,
} from "@/data/image-sets";
import {
  imgForm,
  Car,
  CarRepair,
  CarSecurity,
  List,
  Quality,
  certificate,
  certificate1,
} from "@/assets";
import {
  LinkService,
  IconCard,
  CarouselImage,
  FormaForConsultation,
  FormContact,
  CaruselReviews,
  SectionMain,
  Popap,
  Breadcrumbs,
  Card,
} from "@/components/ui";

export default function Home() {
  return (
    <>
      <SectionMain
        h1="Aвтостекла Мозырь, замена автостекол, установка автостекол, ремонт
          трещин автостекла, полировка фар, заправка автокондиционера - reyt.by"
        imageSRC={responsiveSectionMainImages}
        imageALT="Фоновое изображение навигационной секции"
        mainText={
          <>
            Комплексный уход за Вашим авто: <br /> от стекол до кондиционера
          </>
        }
        text="Полный цикл заботы о вашем автомобиле:  от треснувшего стекла до
            помутневшей фары. Работаем качественно, оперативно, даем гарантию.
            Вернем прозрачность, яркость и прохладу!"
      >
        <Popap className="hidden sm:flex">
          <FormContact />
        </Popap>
      </SectionMain>
      <Breadcrumbs className="mx-auto flex w-full max-w-[1350px] md:hidden [&_[data-slot=breadcrumb-list]]:text-[#bebebe]" />
      <div className="mx-auto max-w-[1350px] px-4">
        <section className="flex h-[min-content] w-full flex-col items-center justify-center pt-10 sm:pt-0 md:mb-30">
          <Popap className="flex sm:hidden">
            <FormContact />
          </Popap>

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
        <section className="bg-brand-body mb-15 pt-0.5 md:mb-30">
          <h2 className="">Каталог услуг</h2>
          <ul className="flex flex-wrap justify-center gap-5 sm:justify-around">
            <Card
              imageSRC={imageHomeCardReplacement}
              imageALT="Изображение-замена автомобильных стекол"
              h3="Замена автомобильных стекол"
            >
              <LinkService href="/services/glass-replacement">
                Подробнее
              </LinkService>
            </Card>
            <Card
              imageSRC={imageHomeCardPolishing}
              imageALT="Изображение-полировка фар"
              h3="Полировка фар"
            >
              <LinkService href="/services/headlight-polishing">
                Подробнее
              </LinkService>
            </Card>
            <Card
              imageSRC={imageHomeCardChipped}
              imageALT="Изображение-ремонт сколов и трещин"
              h3="Ремонт сколов и трещин"
            >
              <LinkService href="/services/chip-repair">Подробнее</LinkService>
            </Card>
            <Card
              imageSRC={imageHomeCardConditioner}
              imageALT="Изображение-заправка кондиционера автомобиля"
              h3="Заправка кондиционера автомобиля"
            >
              <LinkService href="/services/refueling-conditioner">
                Подробнее
              </LinkService>
            </Card>
          </ul>
        </section>
      </div>
      <section className="bg-brand-footer xs:px-0 flex flex-col items-center px-2 pb-30">
        <h2 className="text-center">Почему клиенты выбирают нас?</h2>
        <ul className="xs:flex-row xs:gap-5 xs:items-start flex w-full max-w-[1350px] flex-col flex-wrap items-center justify-center gap-10 md:justify-around 2xl:justify-between">
          <IconCard title="20 лет решаем задачи наших клиентов ">
            <Car className="h-38 w-38 fill-white transition-all duration-300 ease-in-out group-hover:fill-[yellow] group-hover:drop-shadow-[0_5px_15px_rgba(255,255,0,0.4)] group-active:fill-[yellow] group-active:drop-shadow-[0_5px_15px_rgba(255,255,0,0.4)]" />
          </IconCard>
          <IconCard
            title="Сотрудничаем 
с самыми 
надежными производителями
автостекол"
          >
            <List className="h-30 w-30 fill-white text-[green] group-hover:drop-shadow-[0_15px_15px_rgba(255,255,0,0.4)] group-hover:[&>.list-item-1]:fill-current group-active:[&>.list-item-1]:fill-current group-hover:[&>.list-item-2]:fill-current group-hover:[&>.list-item-2]:delay-100 group-active:[&>.list-item-2]:fill-current group-active:[&>.list-item-2]:delay-100 group-hover:[&>.list-item-3]:fill-current group-hover:[&>.list-item-3]:delay-300 group-active:[&>.list-item-3]:fill-current group-active:[&>.list-item-3]:delay-300 group-hover:[&>.list-item-4]:fill-current group-hover:[&>.list-item-4]:delay-500 group-active:[&>.list-item-4]:fill-current group-active:[&>.list-item-4]:delay-500 group-active:[&>.right-headlight]:fill-[yellow] [&>g]:transition-all [&>g]:duration-200" />
          </IconCard>
          <IconCard
            title="Работаем 
со страховыми 
случаями"
          >
            <CarSecurity className="group-hover:[&>.shield]:stroke-brand-components group-active:[&>.shield]:stroke-brand-components h-30 w-30 group-hover:drop-shadow-[0_15px_15px_rgba(255,255,0,0.4)] group-hover:[&>.check]:fill-[green] group-active:[&>.check]:fill-[green] group-active:[&>.right-headlight]:fill-[yellow] [&>.shield]:origin-center [&>.shield]:fill-none [&>.shield]:stroke-white [&>.shield]:transition-transform [&>.shield]:duration-1000 group-hover:[&>.shield]:rotate-y-[360deg]" />
          </IconCard>
          <IconCard title="Выездной сервис">
            <CarRepair className="group-hover:[&>.key]:fill-brand-components group-active:[&>.key]:fill-brand-components h-30 w-30 group-hover:drop-shadow-[0_15px_15px_rgba(255,255,0,0.4)] [&>.key]:origin-top group-hover:[&>.key]:[animation:wobble-key_1s_infinite_ease-in-out] group-hover:[&>.left-headlight]:animate-pulse group-hover:[&>.left-headlight]:fill-[yellow] group-hover:[&>.right-headlight]:animate-pulse group-hover:[&>.right-headlight]:fill-[yellow] group-active:[&>.right-headlight]:fill-[yellow]" />
          </IconCard>
          <IconCard
            title="Гарантия на 
герметичность 
стекла: 
12 месяцев - 
для автомобилей
 до 2018"
          >
            <Quality className="group-hover:[&>[data-name='path-3']]:fill-brand-components group-active:[&>[data-name='path-3']]:fill-brand-components h-30 w-30 transition-all duration-300 ease-in-out group-hover:drop-shadow-[0_15px_15px_rgba(255,255,0,0.4)] group-hover:[&>[data-name='path-6']]:fill-[green] group-active:[&>[data-name='path-6']]:fill-[green]" />
          </IconCard>
        </ul>
      </section>
      <section className="mx-auto flex w-full max-w-[1350px] flex-col items-center gap-10 px-4 pb-5 md:gap-15 md:pb-30">
        <h2 className="self-start">Портфолио</h2>
        <CarouselImage className="xmd:max-w-[80%] max-w-[95%] md:max-w-[60%]" />
        <LinkService href="/portfolio">Подробнее</LinkService>
      </section>
      <section className="bg-brand-footer mx-auto w-full px-4 pt-15 pb-10 md:pt-30 md:pb-15 2xl:px-0">
        <div className="mx-auto flex h-[min-content] w-full max-w-[1350px] flex-col items-center gap-5 md:flex-row">
          <div className="relative aspect-[740px/416px] h-auto max-w-[500px] min-w-[300px] md:max-w-[740px]">
            <Image src={imgForm} alt="imageSectionNav" />
          </div>
          <div className="flex w-full max-w-[520px] flex-col gap-4">
            <p className="flex flex-col gap-5">
              <span className="text-[clamp(1.1rem,2.5vw,1.8rem)] tracking-wider uppercase">
                Оставить заявку, чтобы получить бесплатную консультацию
              </span>{" "}
              <span>
                Наш менеджер свяжется с вами, чтобы обсудить все детали и
                предложит оптимальное решение для вашего автомобиля
              </span>
            </p>
            <FormaForConsultation />
          </div>
        </div>
      </section>
      <section className="bg-brand-body flex w-full justify-center pb-20 md:pb-30">
        <div className="max-w-[1350px] px-4 xl:px-0">
          <h2 className="md:30 mb-20">отзывы наших клиентов</h2>{" "}
          <CaruselReviews />
        </div>
      </section>
      <section className="bg-brand-body flex w-full justify-center pb-20 md:pb-30">
        <div className="w-full max-w-[1350px] px-4 xl:px-0">
          <h2 className="md:30 mb-20">Наши сертификаты и свидетельства</h2>
          <div className="flex w-full flex-wrap justify-around gap-10">
            <div className="relative aspect-[500/770] w-[47%] max-w-[400px] overflow-hidden rounded-md">
              <Image
                src={certificate}
                alt="Фоновое изображение "
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                placeholder="blur"
              />
            </div>
            <div className="relative aspect-[500/770] w-[47%] max-w-[400px] overflow-hidden rounded-md">
              <Image
                src={certificate1}
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
    </>
  );
}
