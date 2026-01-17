"use client";

import Script from "next/script";
import { useCookieSettings } from "@/context/CookieContext";
import { useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";

export const YandexMetrika = () => {
  const yandexId = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;
  const { settings, isInitialized } = useCookieSettings();
  const pathname = usePathname();

  // Отслеживаем изменения URL и отправляем просмотры страниц в Метрику
  useEffect(() => {
    if (
      isInitialized &&
      settings.statistical &&
      typeof window.ym !== "undefined"
    ) {
      window.ym(Number(yandexId), "hit", window.location.href);
    }
  }, [pathname, isInitialized, settings.statistical, yandexId]);

  // Не рендерим скрипт в режиме разработки, если нет ID или согласия
  if (
    process.env.NODE_ENV !== "production" ||
    !yandexId ||
    !isInitialized ||
    !settings.statistical
  ) {
    return null;
  }

  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
          ym(${yandexId}, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true,
               webvisor:true
          });
        `}
      </Script>
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${yandexId}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
};
