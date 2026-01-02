// src/components/ui/CookieConsent.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MyButton } from "../button/MyButton"; // Предполагая, что у тебя есть компонент кнопки

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Проверяем, было ли уже дано согласие
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
    // Здесь можно добавить логику для инициализации скриптов аналитики
    // например, window.gtag('consent', 'update', { 'analytics_storage': 'granted' });
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "false");
    setShowBanner(false);
    // Здесь можно добавить логику для отказа
    // например, window.gtag('consent', 'update', { 'analytics_storage': 'denied' });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 flex items-center justify-between bg-gray-800 p-4 text-white">
      <p className="text-sm">
        Мы используем файлы cookie для улучшения вашего опыта.
        <Link
          href="/privacy-policy"
          className="hover:text-brand-components ml-1 underline"
        >
          Политика конфиденциальности
        </Link>
      </p>
      <div className="flex gap-4">
        <MyButton onClick={handleDecline} variant="secondary">
          Отклонить
        </MyButton>
        <MyButton onClick={handleAccept} variant="secondary">
          Принять
        </MyButton>
      </div>
    </div>
  );
};
