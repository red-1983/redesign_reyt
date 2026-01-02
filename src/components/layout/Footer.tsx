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
            <BlockContact className="text-fontSize-18-20 flex flex-col gap-3 sm:items-start md:w-full" />
          </div>
          <div className="flex w-full max-w-[250px] flex-col items-center justify-start gap-4 sm:items-start lg:justify-between">
            <h3 className="text-[clamp(1rem,2.5vw,1.4rem)] uppercase">
              Время работы
            </h3>
            <BlockWorkTime className="text-fontSize-18-20" />
          </div>

          <div className="mb-4 flex w-[250px] flex-col items-center justify-between gap-4 sm:w-full sm:items-start">
            <h3 className="text-[clamp(1rem,2.5vw,1.4rem)] uppercase">
              Реквизиты
            </h3>
            <p className="text-fontSize-18-20 self-start">
              ЧУП &laquo;РеутБай&raquo; <br />
              УНП 491575613 <br />
              Р&#47;c&nbsp;
              <span className="font-semibold tracking-wide uppercase">
                BY48&nbsp;BPSB&nbsp;3012&nbsp;3515&nbsp;8101&nbsp;8933&nbsp;0000{" "}
              </span>
              &nbsp;в ОАО &laquo;Сбер Банк&raquo; г.Минск <br />
              BIC&nbsp;BPSBBY2X
            </p>
            <p className="flex flex-col gap-5">
              {" "}
              <a
                href="/docs/certificate.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-components hover:text-brand-components/80 uppercase"
                aria-label="Скачать свидетельство о государственной регистрации"
              >
                свидетельство о государственной регистрации
              </a>
              <a
                href="/docs/certificateOfConformity.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-components hover:text-brand-components/80 uppercase"
                aria-label="Скачать сертификат соответствия"
              >
                сертификат соответствия
              </a>
            </p>
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
