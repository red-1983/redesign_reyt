import React from "react";
import clsx from "clsx";
import { SectionHeader } from "./SectionHeader";
import Image from "next/image";
import logo from "@/assets/icon/logo.webp";
import { Button } from "@/components/ui";
import MobileMainNavigation from "./MobileMainNavigation";

import Link from "next/link";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement> {
  className?: string;
}
const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={clsx(
        "align-center flex w-full items-center justify-center",
        className
      )}
    >
      <div className="flex w-full max-w-[1292px] items-center justify-between px-8 py-2 md:px-6 md:py-5 xl:px-0">
        <Link
          aria-label="logo"
          href="/"
          className="flex h-[80px] w-[80px] items-center justify-center md:h-[120px] md:w-[120px]"
        >
          {" "}
          <Image src={logo} alt="logo" width={120} height={120} />
        </Link>
        <div className="hidden w-full max-w-[1052px] items-center justify-end md:flex xl:justify-between">
          <SectionHeader />
          <Button
            variant="secondary"
            className="bg-brand-components hidden w-full border-none sm:min-h-[45px] sm:max-w-[190px] xl:flex"
          >
            Заказать звонок
          </Button>
        </div>

        <MobileMainNavigation className="md:hidden" />
      </div>
    </header>
  );
};
export default Header;
