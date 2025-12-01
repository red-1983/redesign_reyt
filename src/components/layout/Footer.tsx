import React from "react";
import {
  BlockContact,
  BlockWorkTime,
  Copyright,
  YandexMaps,
} from "@/components/ui";

const Footer = () => {
  return (
    <footer className="bg-brand-footer flex w-full flex-col items-center pt-15 pb-5 text-white lg:px-10 2xl:px-0">
      <div className="mb-20 flex w-full max-w-[1350px] flex-col-reverse items-center justify-around gap-15 lg:flex-row lg:gap-5 2xl:justify-between">
        <div className="flex flex-col gap-10 text-[clamp(0.9rem,2.5vw,1.1rem)] sm:flex-row sm:justify-center lg:flex-col">
          <div className="mb-4 flex w-[250px] flex-col items-center justify-between gap-4 sm:w-full sm:items-start">
            <h3 className="text-[clamp(1rem,2.5vw,1.4rem)] uppercase">
              Контакты
            </h3>
            <p className="self-start">
              ИП Реут Дмитрий Викторович <br />
              УНП 491185350
            </p>
            <BlockContact className="flex flex-col gap-3 sm:items-start md:w-full" />
          </div>
          <div className="flex w-full max-w-[250px] flex-col items-center justify-start gap-4 sm:items-start lg:justify-between">
            <h3 className="text-[clamp(1rem,2.5vw,1.4rem)] uppercase">
              Время работы
            </h3>
            <BlockWorkTime />
          </div>
        </div>

        <div className="xmd:max-w-[60%] aspect-[600/500] h-auto w-full max-w-[80%] md:max-w-[45%]">
          <YandexMaps />
        </div>
      </div>
      <Copyright className="" />
    </footer>
  );
};
export default Footer;
