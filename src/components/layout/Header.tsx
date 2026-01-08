import React from "react";
import clsx from "clsx";
import { SectionHeader } from "./SectionHeader";
import Image from "next/image";
import logo from "@/assets/icon/logo.webp";
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
      <div className="flex w-full max-w-[1350px] items-center justify-between px-8 md:px-6 md:py-4">
        <Link
          aria-label="logo"
          href="/"
          className="flex h-[100px] w-[100px] items-center justify-center md:h-[min-content] md:w-[120px] lg:h-[150px] lg:w-[150px]"
        >
          {" "}
          <Image src={logo} alt="logo" width={150} height={150} />
        </Link>

        <SectionHeader />

        <MobileMainNavigation className="md:hidden" />
      </div>
    </header>
  );
};
export default Header;
