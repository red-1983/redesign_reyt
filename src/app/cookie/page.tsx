"use client";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { MyButton } from "@/components/ui";
import { useCookieSettings } from "@/context/CookieContext";
import { toast } from "sonner";
import { DivBackground, Breadcrumbs } from "@/components/ui";
import bgImage from "../../../public/images/nav/bg_navigation.webp";
export default function Cookie() {
  const {
    settings,
    setStatistical,
    setFunctional,
    saveSettings,
    isInitialized,
    acceptAll,
  } = useCookieSettings();
  useEffect(() => {
    return () => {
      if (!localStorage.getItem("cookie_consent_given") && document.hidden) {
        acceptAll();
        toast.success(
          "Вы вышли из настроек. По умолчанию применены все настройки."
        );
      }
    };
  }, []);
  if (!isInitialized) {
    return <div>Загрузка настроек...</div>;
  }

  return (
    <>
      <DivBackground
        imageSRC={bgImage}
        imageALT="bgImage"
        className="hidden h-17 md:block"
      />
      <Breadcrumbs className="mx-auto flex w-full max-w-[1350px] md:hidden [&_[data-slot=breadcrumb-list]]:text-[#bebebe]" />
      <section className="mx-auto max-w-[1350px] px-4 py-10 text-justify text-[16px] md:text-[18px] [&_h3]:mt-6 [&_h3]:text-xl">
        <h2 className="text-center text-2xl">Политика в отношении cookie</h2>
        <p>
          Куки (англ. cookies) являются текстовым файлом, сохраненным в браузере
          компьютера (мобильного устройства) пользователя официального
          интернет-сайта «РеутБай» (далее – сайт) при его посещении
          пользователем для отражения совершенных им действий. Этот файл
          позволяет не вводить заново или выбирать те же параметры при повторном
          посещении сайта.
        </p>

        <h3>Цели обработки</h3>
        <p>
          Целью обработки файлов Cookie является обеспечение корректного и
          безопасного использования предлагаемых на сайте возможностей и услуг,
          удобства пользователей; повышение качества функционирования сайта,
          предложение персонализированного контента, а также сбор аналитической
          информации.
        </p>
        <p>
          Мы не передаем Cookiе третьим лицам и не используем их для
          идентификации субъектов персональных данных.
        </p>

        <h3>Обрабатываемые типы Cookiе </h3>
        <p>
          <strong>Технические (обязательные)</strong> – файлы cookie требуются
          для обеспечения правильного функционирования сайта, в том числе
          корректного использования предлагаемых на нем возможностей и услуг.
        </p>
        <p>
          <strong>Статистические</strong> – позволяют хранить историю посещений
          страниц сайта, последовательность перемещения пользователя по сайту;
          используются в целях улучшения производительности и функционирования
          сайта, а также необходимы для сервисов веб-аналитики (Google tag
          manager, Yandex Metrika, Google Analytycs). Отключение статистических
          Cookiе не позволяет определять предпочтения пользователей сайта и
          принимать меры по совершенствованию работы сайта, исходя из
          предпочтений пользователей.
        </p>
        <p>
          <strong>Функциональные</strong> – позволяют обеспечить индивидуальный
          опыт использования сайта и устанавливаются в ответ на действия
          субъекта персональных данных;
        </p>

        <h3>Управление файлами cookie</h3>
        <p>
          Субъекты персональных данных могут принять или отклонить сбор Cookiе
          на сайте или в настройках своего браузера. Субъект персональных данных
          может удалить ранее сохраненные Cookiе выбрав соответствующую опцию в
          истории браузера.
        </p>
        <p>
          Блокировка установки файлов Cookiе или их удаление может затруднить
          функционирование и просмотр сайта.
        </p>
        <div className="mt-10 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Switch checked={true} disabled={true} />
            <p className="text-fontSize-18-20">
              Технические (обязательные) Cookiе. Они включены по умолчанию их
              нельзя отключить.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Switch
              id="static-cookies"
              checked={settings.statistical}
              onCheckedChange={setStatistical}
            />
            <Label htmlFor="static-cookies" className="text-fontSize-18-20">
              Статистические Cookies, необходимые для корректной работы
              Yandex.Metrika и Google Analytics
            </Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch
              id="functional-cookies"
              checked={settings.functional}
              onCheckedChange={setFunctional}
            />
            <Label htmlFor="functional-cookies" className="text-fontSize-18-20">
              Функциональные Cookiе, сохраняют сведения о Ваших действиях в
              Интернете, в том числе о посещении нашего сайта
            </Label>
          </div>
          <MyButton
            onClick={saveSettings}
            variant="secondary"
            className="bg-brand-components mt-10 mb-10 h-[50px] w-[300px]"
          >
            Сохранить настройки
          </MyButton>
        </div>
      </section>
    </>
  );
}
