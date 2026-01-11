import Link from "next/link";
import { DivBackground } from "@/components/ui";
import bgImage from "../../public/images/nav/bg_navigation.webp";

export default function NotFound() {
  return (
    <>
      <DivBackground
        imageSRC={bgImage}
        imageALT="bgImage"
        className="hidden h-17 md:block"
      />
      <section className="mx-auto flex h-full max-w-[1350px] flex-col items-center justify-center gap-8 px-4 py-20 text-center">
        <div className="mb-10 flex flex-col gap-4">
          <h1 className="text-brand-components text-8xl font-bold">404</h1>
          <h2 className="text-muted-foreground text-3xl font-semibold">
            Страница не найдена
          </h2>
          <p className="text-fontSize-18-24">
            Похоже, вы свернули не туда. Давайте вернемся на главную дорогу.
          </p>
        </div>

        <Link
          href="/"
          className="bg-brand-components flex min-h-[50px] w-full max-w-[280px] items-center justify-center rounded-md border-2 border-none font-semibold uppercase transition-all hover:opacity-80"
        >
          Вернуться на главную
        </Link>
      </section>
    </>
  );
}
