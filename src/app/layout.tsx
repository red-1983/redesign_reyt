import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";
import { MainNavigation } from "@/components/layout/MainNavigation";
import { Footer } from "@/components";
import { cn } from "@/lib/utils";
import { ButtonUp } from "@/components/ui";
import { Toaster } from "@/components/ui/sonner";
const RobotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
});

const RobotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Автомастерская в Мозыре | Reyt.by",
  description:
    "Автостекла в Мозыре, замена стекла, ремонт сколов и трещин. Заправка автокондиционера. Полировка фар. - reyt.by",
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
        <div className="mx-auto grid min-h-screen max-w-[1920px] grid-rows-[min-content_1fr_min-content]">
          <Header className="bg-brand-body mx-auto w-full text-white" />
          <main className="text-brandText bg-brand-body relative">
            <MainNavigation className="absolute z-20 w-full pt-4 text-black" />
            {children}
          </main>
          <Footer />
          <ButtonUp />
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
