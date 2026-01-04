import React from "react";
import Link from "next/link";
import {
  BlockContact,
  BlockWorkTime,
  Copyright,
  YandexMaps,
} from "@/components/ui";
import { MailBox } from "@/assets";

const Footer = () => {
  return (
    <footer className="bg-brand-footer pt-15 pb-5 text-white lg:px-10 2xl:px-0">
      <div className="mx-auto flex w-full max-w-[1350px] flex-col">
        <div className="mb-20 flex flex-col-reverse items-center justify-around gap-10 lg:flex-row lg:gap-5 2xl:justify-between">
          <div className="flex w-full flex-row flex-wrap justify-center gap-5 lg:max-w-[50%] lg:flex-col">
            <div className="mb-4 flex w-full max-w-[350px] flex-col items-center gap-4 sm:items-start lg:max-w-full">
              <h3 className="text-[clamp(1rem,2.5vw,1.4rem)] uppercase">
                Контакты
              </h3>
              <BlockContact className="text-fontSize-18-20 flex w-full flex-col gap-3 sm:items-start" />
            </div>
            <div className="flex w-[350px] flex-col items-center justify-start gap-4 sm:w-[250px] sm:items-start lg:justify-between">
              <h3 className="text-[clamp(1rem,2.5vw,1.4rem)] uppercase">
                Время работы
              </h3>
              <BlockWorkTime className="text-fontSize-18-20 self-start" />
            </div>
          </div>

          <div className="xmd:max-w-[60%] aspect-[600/500] h-auto w-full max-w-[80%] md:max-w-[45%]">
            <YandexMaps />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 2xl:justify-between">
          <div className="mb-4 flex w-full max-w-[45%] min-w-[300px] flex-col items-center justify-between gap-4 sm:w-full sm:items-start">
            <h3 className="text-[clamp(1rem,2.5vw,1.4rem)] uppercase">
              Реквизиты
            </h3>
            <ul className="text-fontSize-18-20 flex flex-col gap-3">
              <li>ЧУП &laquo;РеутБай&raquo;</li>
              <li>УНП 491575613</li>
              <li>
                {" "}
                BY48&nbsp;BPSB&nbsp;3012&nbsp;3515&nbsp;8101&nbsp;8933&nbsp;0000
              </li>
              <li>BIC&nbsp;BPSBBY2X</li>
              <li className="hover:text-brand-components transition-all duration-500">
                <address className="flex items-center gap-2">
                  <MailBox className="stroke-brand-components size-8 self-start" />
                  247760, Гомельская область, г. Мозырь, ул. Иваненко А.С.,
                  д.14/1, комн.1
                </address>
              </li>
            </ul>
          </div>
          <div className="w-full max-w-[45%] min-w-[300px]">
            <h3 className="text-[clamp(1rem,2.5vw,1.4rem)] uppercase">
              Дополнительная информация
            </h3>
            <p className="flex flex-col gap-5">
              <Link
                href="/docs/certificate.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-components hover:text-brand-components/80 uppercase"
                aria-label="Скачать свидетельство о государственной регистрации"
              >
                свидетельство о государственной регистрации
              </Link>
              <Link
                href="/docs/certificateOfConformity.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-components hover:text-brand-components/80 uppercase"
                aria-label="Скачать сертификат соответствия"
              >
                сертификат соответствия
              </Link>
            </p>
            <p className="mt-5">
              Настройка файлов Cookie <br />
              <Link
                href="/cookie"
                className="text-brand-components hover:text-brand-components/80"
              >
                Перейти к настройкам
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Copyright className="mt-12" />
    </footer>
  );
};
export default Footer;
