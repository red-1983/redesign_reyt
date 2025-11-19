import React from "react";
import { YandexMaps, BlockContact, BlockWorkTime } from "@/components/ui";

const Footer = () => {
  return (
    <footer className="bg-brand-footer flex w-full justify-center py-15 text-white lg:px-10">
      <div className="flex w-full max-w-[1350px] flex-col-reverse items-center gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-[450px] pt-15 text-[clamp(0.9rem,2.5vw,1.1rem)]">
          <div className="mb-4 flex flex-col justify-between gap-4">
            <h3 className="text-[clamp(1rem,2.5vw,1.4rem)] uppercase">
              Контакты
            </h3>
            <p>
              ИП Реут Дмитрий Викторович <br />
              УНП 491185350
            </p>
            <BlockContact className="flex flex-col gap-3 transition-all duration-500" />
          </div>
          <div className="flex flex-col justify-between gap-4">
            <h3 className="text-[clamp(1rem,2.5vw,1.4rem)] uppercase">
              Время работы
            </h3>
            <BlockWorkTime />
          </div>
        </div>

        <div className="aspect-[600/500] h-auto w-full max-w-[50%]">
          <YandexMaps />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
