import React from "react";
import Link from "next/link";
import { Geo, Tel, IconInstagram } from "@/assets";
import { cn } from "@/lib/utils";
interface BlockContactProps extends React.ComponentProps<"ul"> {
  className?: string;
}
export const BlockContact = ({ className, ...props }: BlockContactProps) => {
  return (
    <ul className={cn(className)} {...props}>
      <li className="hover:text-brand-components items-center transition-all duration-500">
        <Link
          href="https://yandex.by/maps/21274/mozyr/?display-text=%D0%90%D0%B2%D1%82%D0%BE%D1%81%D1%82%D1%91%D0%BA%D0%BB%D0%B0&ll=29.202926%2C52.035487&mode=search&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1264499678&sctx=ZAAAAAgBEAAaKAoSCUPyIeo2MT1AEc%2FY%2Bpb3BEpAEhIJdalKPleIqj8ReH2iMKaFkD8iBgABAgMEBSgKOABAmqYBSAFiOHJlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfc2VycF9mb3JtdWxhPTAuNjA6bDNfZm1sODUxMjUxYjhyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X21hcHNfZm9ybXVsYT0wLjYwOmwzX2ZtbDg1MTI1MWoCdWGdAc3MTD2gAQCoAQC9AfycorPCAQve9%2FraBP721J7tAeoBAPIBAPgBAIICGygoY2F0ZWdvcnlfaWQ6KDE4NDEwNTMxMCkpKYoCCTE4NDEwNTMxMJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=29.202926%2C52.035487&sspn=0.067906%2C0.021145&text=%7B%22text%22%3A%22%D0%90%D0%B2%D1%82%D0%BE%D1%81%D1%82%D1%91%D0%BA%D0%BB%D0%B0%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184105310%22%5D%7D%5D%7D&z=14"
          className="flex gap-2"
        >
          <Geo className="fill-brand-components" /> Адрес: 1-ый переулок
          Малинина, 6 Б (Авторынок)
        </Link>
      </li>
      <li className="hover:text-brand-components items-center transition-all duration-500">
        <Link href="tel: +375 29 236 36 44" className="flex items-center gap-2">
          <Tel className="fill-brand-components" />
          Телефон: +375 29 236 36 44
        </Link>
      </li>
      <li className="hover:text-brand-components transition-all duration-500">
        <Link
          href="tel: +375 33 650 86 32 "
          className="flex flex-wrap items-center gap-x-2"
        >
          <Tel className="fill-brand-components" />{" "}
          <span>Телефон: +375 33 650 86 32</span>{" "}
          <span>выездной специалист</span>
        </Link>
      </li>
      <li className="hover:text-brand-components transition-all duration-500">
        <Link
          href="https://www.instagram.com/avtoglass_mozyr/?igshid=17fiuxybtx69m "
          className="flex items-center gap-2"
        >
          <IconInstagram className="fill-brand-components" />
          avtoglass_mozyr
        </Link>
      </li>
    </ul>
  );
};
