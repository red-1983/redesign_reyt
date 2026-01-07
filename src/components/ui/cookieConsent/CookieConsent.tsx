"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { MyButton } from "@/components/ui";
import { useCookieSettings } from "@/context/CookieContext";

export const CookieConsent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { consentGiven, acceptAll, isInitialized } = useCookieSettings();

  const shouldShow = isInitialized && !consentGiven && pathname !== "/cookie";

  // Эффект для блокировки прокрутки фона
  useEffect(() => {
    if (shouldShow) {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [shouldShow]);

  const handleCustomize = () => {
    router.push("/cookie");
  };

  if (!shouldShow) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-dialog-title"
      className="fixed z-50 flex h-[100vh] w-[100vw] items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
    >
      <div className="bg-background flex w-full max-w-lg flex-col gap-4 rounded-lg p-6 shadow-lg">
        <div className="flex flex-col text-center sm:text-left">
          <h3
            // id="cookie-dialog-title"
            className="text-lg leading-none font-semibold tracking-tight"
          >
            Наш сайт использует файлы cookie
          </h3>
          <p className="text-muted-foreground text-sm">
            Мы используем файлы cookie, чтобы улучшить ваш опыт взаимодействия с
            сайтом. Нажимая «Принять все», вы соглашаетесь на использование всех
            файлов cookie. Вы также можете настроить их самостоятельно.{" "}
            <Link href="/cookie" className="underline">
              Подробнее
            </Link>
          </p>
        </div>

        <div className="flex flex-wrap justify-around gap-2">
          <MyButton
            onClick={acceptAll}
            variant="secondary"
            className="bg-brand-components h-[35px] px-4 text-[0.8rem]"
          >
            Принять все
          </MyButton>
          <MyButton
            onClick={handleCustomize}
            variant="secondary"
            className="h-[35px] bg-[#000]/70 px-4 text-[0.8rem]"
          >
            Настроить
          </MyButton>
        </div>
      </div>
    </div>
  );
};
