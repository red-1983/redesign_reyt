import React from "react";
import { Geo } from "@/assets";
import clsx from "clsx";
import Link from "next/link";
import {
  BlockWorkTime,
  MyButton,
  BlockTelephone,
  FormCallback,
  PopoverCallback,
} from "../ui";

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}
export const SectionHeader = ({
  className,
  children,
  ...props
}: SectionHeaderProps) => {
  return (
    <div
      className={clsx(
        "flex w-full max-w-[1100px] items-center justify-around gap-2 text-[clamp(0.9rem,1.5vw,1.05rem)] xl:justify-between",
        className
      )}
      {...props}
    >
      <Link
        href="https://yandex.by/maps/org/avtostyokla/1264499678/?display-text=%D0%90%D0%B2%D1%82%D0%BE%D1%81%D1%82%D1%91%D0%BA%D0%BB%D0%B0&amp;ll=29.202926%2C52.035487&amp;mode=search&amp;sctx=ZAAAAAgBEAAaKAoSCUPyIeo2MT1AEc%2FY%2Bpb3BEpAEhIJdalKPleIqj8ReH2iMKaFkD8iBgABAgMEBSgKOABAmqYBSAFiOHJlbGV2X3JhbmtpbmdfaGVhdnlfcmVsZXZfc2VycF9mb3JtdWxhPTAuNjA6bDNfZm1sODUxMjUxYjhyZWxldl9yYW5raW5nX2hlYXZ5X3JlbGV2X21hcHNfZm9ybXVsYT0wLjYwOmwzX2ZtbDg1MTI1MWoCdWGdAc3MTD2gAQCoAQC9AfycorPCAQve9%2FraBP721J7tAeoBAPIBAPgBAIICGygoY2F0ZWdvcnlfaWQ6KDE4NDEwNTMxMCkpKYoCCTE4NDEwNTMxMJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&amp;sll=29.202926%2C52.035487&amp;sspn=0.067906%2C0.021145&amp;text=%7B%22text%22%3A%22%D0%90%D0%B2%D1%82%D0%BE%D1%81%D1%82%D1%91%D0%BA%D0%BB%D0%B0%22%2C%22what%22%3A%5B%7B%22attr_name%22%3A%22category_id%22%2C%22attr_values%22%3A%5B%22184105310%22%5D%7D%5D%7D&amp;z=14.86"
        className="hover-link hidden w-[max-content] items-center gap-2 md:flex"
      >
        <Geo className="fill-[#FC3532]" />
        <span>г. Мозырь, 1-ый пер. Малинина, 6Б</span>
      </Link>
      <BlockWorkTime className="hidden lg:flex" />
      <BlockTelephone className="hidden w-[max-content] gap-1.5 md:flex md:flex-col" />
      <PopoverCallback>
        <FormCallback />
      </PopoverCallback>
    </div>
  );
};
