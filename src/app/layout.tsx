import { Suspense } from "react";
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import { MainNavigation } from "@/components/layout/MainNavigation";
import { Footer } from "@/components";
import { ButtonUp } from "@/components/ui";
import { Toaster } from "@/components/ui/sonner";
import { CookieConsent } from "@/components/ui/cookieConsent/CookieConsent";
import { YandexMetrika } from "@/components/ui/analytics/YandexMetrika";

import { CookieProvider } from "@/context/CookieContext";
const RobotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});
import { organizationSchema } from "@/config/schema";
const RobotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "lgLyaWlNCCRW1NUeMX0ZrfMdK-eo3FmiJIZxTWNn8Hg",
    yandex: "f11895c13f258138",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  other: {
    "application/ld+json": JSON.stringify(organizationSchema),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${RobotoSans.variable} ${RobotoMono.variable} antialiased`}
      >
        <CookieProvider>
          <Suspense>
            {" "}
            <YandexMetrika />
          </Suspense>
          <div className="mx-auto grid min-h-screen max-w-[1920px] grid-rows-[min-content_1fr_min-content]">
            <Header className="bg-brand-body mx-auto w-full text-white" />
            <main className="text-brandText bg-brand-body relative">
              <MainNavigation className="absolute z-20 w-full pt-4 text-black" />
              {children}
            </main>
            <Footer />
            <ButtonUp />
            <CookieConsent />
          </div>
          <Toaster position="top-center" />
        </CookieProvider>
      </body>
    </html>
  );
}
