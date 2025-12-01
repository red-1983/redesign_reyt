import type { Metadata } from "next";
import { DivBackground, BlockWorkTime } from "@/components/ui";
import bgImage from "../../../public/images/nav/bg_navigation.webp";
import { FormContact, CopyButton, BlockTelephone } from "@/components/ui";
import Link from "next/link";
import { Geo, IconInstagram } from "@/assets";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты | Reyt.by",
  description:
    "Автостекла в Мозыре, контакты, как проехать, как с нами связаться - reyt.by",
};
function Contacts() {
  const coordinates = "52.038667, 29.192";
  return (
    <>
      <DivBackground
        imageSRC={bgImage}
        imageALT="bgImage"
        className="hidden h-17 md:block"
      />
      <section className="mx-auto flex max-w-[1350px] flex-wrap items-center justify-around gap-10 px-4 pt-15 pb-20">
        <div className="w-full max-w-[500px]">
          <h2 className="mt-0">Написать нам</h2>
          <FormContact />
        </div>
        <div className="flex w-full max-w-[450px] flex-col gap-3">
          <h3 className="xmd:text-left text-center">Как проехать</h3>
          <ul className="flex flex-col gap-2 text-[16px] md:text-[18px]">
            <li className="hover:text-brand-components items-center transition-all duration-500">
              <Link
                href="https://yandex.by/maps/21274/mozyr/?display-text=%D0%90%D0%B2%D1%82%D0%BE%D1%81%D1%82%D1%91%D0%BA%D0%BB%D0%B0&ll=29.202926%2C52.035487&mode=search&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1264499678&sctx=ZAAAAAgBEAAaKAoSCUPyIeo2MT1AEc%2FY%2Bpb3BEpAEhIJdalKPleIqj8ReH2iMKaFkD8iBgABAgMEBSgKOABAmqYBSAFiOHJlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfc2VycF9mb3JtdWxhPTAuNjA6bDNfZm1sODUxMjUxYjhyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X21hcHNfZm9ybXVsYT0wLjYwOmwzX2ZtbDg1MTI1MWoCdWGdAc3MTD2gAQCoAQC9AfycorPCAQve9%2FraBP721J7tAeoBAPIBAPgBAIICGygoY2F0ZWdvcnlfaWQ6KDE4NDEwNTMxMCkpKYoCCTE4NDEwNTMxMJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=29.202926%2C52.035487&sspn=0.067906%2C0.021145&text=%7B%22text%22%3A%22%D0%90%D0%B2%D1%82%D0%BE%D1%81%D1%82%D1%91%D0%BA%D0%BB%D0%B0%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184105310%22%5D%7D%5D%7D&z=14"
                className="flex gap-2"
              >
                <Geo className="fill-brand-components" /> Адрес: 1-ый переулок
                Малинина, 6 Б (Авторынок)
              </Link>
            </li>
            <li className="flex items-center gap-2 transition-all duration-500 md:gap-4">
              <span className="xs:max-w-[300px] w-full max-w-[220px] md:max-w-[400px]">
                Координаты для навигации: {coordinates}
              </span>

              <CopyButton
                textToCopy={coordinates}
                title="Скопировать координаты"
                className="hover:text-brand-components hover:cursor-pointer"
              />
            </li>
          </ul>
          <div className="flex flex-col gap-3 text-[16px] md:text-[18px]">
            <h3 className="xmd:text-left text-center">Телефоны:</h3>
            <BlockTelephone className="flex flex-col gap-1.5" />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="xmd:text-left text-center">Режим работы:</h3>
            <BlockWorkTime className="text-[16px] md:text-[18px]" />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="xmd:text-left text-center">Email:</h3>

            <a
              href="mailto:info@reyt.by"
              className="hover:text-brand-components flex items-center gap-2 text-[16px] transition-colors md:text-[18px]"
            >
              <Mail className="text-brand-components" />
              info@reyt.by
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="xmd:text-left text-center">Социальные сети:</h3>
            <a
              href="https://www.instagram.com/avtoglass_mozyr/?igshid=17fiuxybtx69m"
              className="hover:text-brand-components flex items-center gap-2 text-[16px] transition-colors md:text-[18px]"
            >
              <IconInstagram className="fill-brand-components" />
              avtoglass_mozyr
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
