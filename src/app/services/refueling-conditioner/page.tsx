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
  conditionerSectionMainImages,
  imageConditionerCard1,
  imageConditionerCard2,
  imageConditionerCard3,
  imageConditionerCard4,
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
import { polishingFeatures } from "@/data/polishingFeatures";
export const metadata: Metadata = {
  title: "Профессиональная заправка и обслуживание автокондиционеров | Reyt.by",
  description:
    " Профессиональная заправка и обслуживание автокондиционеров в Мозыре, быстро, качественно, недорого.   - reyt.by",
};

const RefulingConditioner = () => {
  return (
    <>
      <SectionMain
        h1="Профессиональная заправка и обслуживание автокондиционеров в Мозыре, быстро, качественно, недорого.   - reyt.by"
        imageSRC={conditionerSectionMainImages}
        imageALT="Фоновое изображение навигационной секции"
        mainText={
          <>Профессиональная заправка и обслуживание автокондиционеров</>
        }
        text="Не ждите, пока жара застанет Вас врасплох! Обеспечьте комфорт и безопасность в своих поездках. Запишитесь на диагностику и заправку кондиционера прямо сейчас!"
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
          <p>
            Комфортная температура в салоне автомобиля — это не роскошь, а
            необходимость, особенно в жаркое летнее время. Система
            кондиционирования не только охлаждает воздух, но и очищает его от
            пыли и излишней влаги. Чтобы кондиционер работал эффективно и без
            сбоев, он требует регулярного обслуживания. Со временем количество
            фреона в системе уменьшается, что приводит к снижению
            производительности. Мы предлагаем профессиональные услуги по
            заправке и диагностике автомобильных кондиционеров, чтобы вы всегда
            наслаждались прохладой в пути.
          </p>
          <p>
            Мы предоставляем полный комплекс услуг для поддержания идеального
            климата в вашем автомобиле.
          </p>
          <ul className="flex flex-wrap justify-center gap-5 sm:justify-around">
            <Card
              imageSRC={imageConditionerCard1}
              imageALT="Изображение-комплексная диагностика системы"
              h3="Комплексная диагностика системы. Перед заправкой мы проводим полную проверку системы на герметичность, оцениваем работоспособность компрессора и других ключевых узлов."
            ></Card>
            <Card
              imageSRC={imageConditionerCard2}
              imageALT="Изображение-заправка фреоном"
              h3="Заправка качественным фреоном. Мы используем только сертифицированный хладагент, соответствующий требованиям производителя вашего автомобиля, и заправляем систему строго по нормативам."
            ></Card>
            <Card
              imageSRC={imageConditionerCard3}
              imageALT="Изображение-добавление компрессорного масла и УФ-красителя"
              h3="Добавление компрессорного масла и УФ-красителя. Вместе с фреоном мы добавляем специальное масло для смазки компрессора и ультрафиолетовый краситель, который поможет быстро обнаружить утечки в будущем."
            ></Card>
            <Card
              imageSRC={imageConditionerCard4}
              imageALT="Изображение-вакуумирование системы"
              h3="Вакуумирование системы. Эта обязательная процедура позволяет удалить из системы воздух и влагу, которые могут привести к коррозии и серьезным поломкам."
            ></Card>
          </ul>
        </section>
        <section className="bg-brand-body mb-15 pt-0.5 md:mb-30">
          <h2 className="">Наши преимущества</h2>
          <ul className="xs:flex-row xs:gap-5 xs:items-start flex w-full max-w-[1350px] flex-col flex-wrap items-center justify-center gap-10 md:justify-around 2xl:justify-between">
            <IconCard
              className="max-w-[310px]"
              title="Опытные мастера. Наши специалисты обладают многолетним опытом работы с климатическими системами автомобилей всех марок и моделей."
            >
              <Worker className="h-38 w-38 fill-white" />
            </IconCard>
            <IconCard
              className="max-w-[310px]"
              title="Современное оборудование. Мы используем автоматические станции для заправки кондиционеров, которые гарантируют высокую точность и соблюдение всех технологических норм."
            >
              <EEClogo className="h-38 w-70" />
            </IconCard>
            <IconCard
              className="max-w-[310px]"
              title=" Прозрачные цены. Вы всегда знаете, за что платите. Мы озвучиваем стоимость работ до их начала, без скрытых платежей и наценок."
            >
              <Consultation className="h-38 w-38" />
            </IconCard>
            <IconCard
              className="max-w-[310px]"
              title=" Гарантия на выполненные работы. Мы уверены в качестве наших услуг и предоставляем гарантию на заправку и все сопутствующие работы."
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
      </div>
      <section className="bg-brand-footer xs:px-0 flex flex-col items-center px-2 pb-30">
        <h2 className="text-center">
          Как понять, что кондиционер пора заправлять?
        </h2>
        <ul className="xs:flex-row xs:gap-5 xs:items-start flex w-full max-w-[1350px] flex-col flex-wrap items-center justify-center gap-10 md:justify-around 2xl:justify-between">
          <IconCard title="Слабое охлаждение: Воздух из дефлекторов стал заметно теплее, чем раньше. ">
            <Car2 className="h-38 w-38 fill-white transition-all duration-300 ease-in-out group-hover:fill-[yellow] group-hover:drop-shadow-[0_5px_15px_rgba(255,255,0,0.4)] group-active:fill-[yellow]" />
          </IconCard>
          <IconCard title="Кондиционер не включается: Компрессор может не запускаться из-за недостаточного давления в системе.">
            <Bus className="h-30 w-30 fill-white text-[green] group-hover:[&>.list-item-1]:fill-current group-active:[&>.list-item-1]:fill-current group-hover:[&>.list-item-2]:fill-current group-hover:[&>.list-item-2]:delay-100 group-active:[&>.list-item-2]:fill-current group-active:[&>.list-item-2]:delay-100 group-hover:[&>.list-item-3]:fill-current group-hover:[&>.list-item-3]:delay-300 group-active:[&>.list-item-3]:fill-current group-active:[&>.list-item-3]:delay-300 group-hover:[&>.list-item-4]:fill-current group-hover:[&>.list-item-4]:delay-500 group-active:[&>.list-item-4]:fill-current group-active:[&>.list-item-4]:delay-500 [&>g]:transition-all [&>g]:duration-200" />
          </IconCard>
          <IconCard title="Посторонние шумы: Шипение или гул при работе кондиционера могут говорить об утечках.">
            <Truck className="group-hover:[&>.shield]:stroke-brand-components group-active:[&>.shield]:stroke-brand-components h-30 w-30 group-hover:[&>.check]:fill-[green] group-active:[&>.check]:fill-[green] [&>.shield]:origin-center [&>.shield]:fill-none [&>.shield]:stroke-white [&>.shield]:transition-transform [&>.shield]:duration-1000 group-hover:[&>.shield]:rotate-y-[360deg]" />
          </IconCard>
          <IconCard title="Запотевание стекол: Если система не справляется с осушением воздуха, окна в салоне начинают запотевать.">
            <Tractor className="h-30 w-30 fill-white" />
          </IconCard>
        </ul>
      </section>
      <section className="bg-brand-body mb-15 flex flex-col pt-0.5 md:mb-30">
        <h2 className="self-start">Как часто нужно заправлять кондиционер</h2>
        <MotionString array={polishingFeatures} />
        <p>
          Даже в полностью исправной системе происходит естественная утечка
          фреона — до 10-15% в год. Поэтому производители рекомендуют проводить
          диагностику и дозаправку кондиционера: Для автомобилей младше 5 лет —
          каждые 2-3 года. Для автомобилей старше 5 лет — каждый год.
        </p>
      </section>
    </>
  );
};
export default RefulingConditioner;
