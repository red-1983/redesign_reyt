"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { MyButton } from "@/components/ui";
import { useCookieSettings } from "@/context/CookieContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export const CookieConsent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { consentGiven, acceptAll, isInitialized } = useCookieSettings();

  // Не показываем диалог, если: 1. Контекст не загружен, 2. Согласие дано, 3. Мы на странице настроек
  if (consentGiven || !isInitialized || pathname === "/cookie") {
    return null;
  }

  const handleCustomize = () => {
    router.push("/cookie");
  };

  return (
    // `open`={true} означает, что диалог будет открыт, пока компонент рендерится
    // `onOpenChange` с `(open) => !open && acceptAll()` можно использовать,
    // если нужно принять cookie при закрытии по крестику или клику вне диалога.
    // Пока оставим явное принятие.
    <Dialog open={true}>
      <DialogContent showCloseButton={false} className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Наш сайт использует файлы cookie</DialogTitle>
          <DialogDescription>
            Мы используем файлы cookie, чтобы улучшить ваш опыт взаимодействия с
            сайтом. Нажимая «Принять», вы соглашаетесь на использование всех
            файлов cookie. Вы также можете настроить их самостоятельно.{" "}
            <Link href="/cookie" className="underline">
              Подробнее
            </Link>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-15 sm:justify-start">
          <MyButton
            onClick={acceptAll}
            variant="secondary"
            className="bg-brand-components h-[35px] w-[100px] text-[0.8rem]"
          >
            Принять
          </MyButton>
          <MyButton
            onClick={handleCustomize}
            variant="secondary"
            className="h-[35px] w-[100px] bg-[#000]/70 text-[0.8rem]"
          >
            Настроить
          </MyButton>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
