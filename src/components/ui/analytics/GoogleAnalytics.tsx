"use client";

import Script from "next/script";
import { useCookieSettings } from "@/context/CookieContext";

export const GoogleAnalytics = () => {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const { settings, isInitialized } = useCookieSettings();

  // Не рендерим скрипт в режиме разработки, если нет ID или согласия
  if (
    process.env.NODE_ENV !== "production" ||
    !gaId ||
    !isInitialized ||
    !settings.statistical
  ) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
};
