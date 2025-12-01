import React from "react";
import Link from "next/link";
import { Tel } from "@/assets";
import { cn } from "@/lib/utils";
interface BlockTelephoneProps extends React.HTMLAttributes<HTMLUListElement> {
  className?: string;
}
export const BlockTelephone = ({
  className,
  ...props
}: BlockTelephoneProps) => {
  return (
    <ul className={cn(className)}>
      <li>
        <Link href="tel:8 029 235-85-97" className="hover-link flex gap-2">
          <Tel className="fill-[#FC3532]" />
          <span>8 029 235-85-97</span>
        </Link>
      </li>
      <li>
        <Link href="tel:8 033 650-86-32" className="hover-link pl-6">
          {" "}
          8 033 650-86-32
        </Link>
      </li>
      <li>
        <Link href="tel:8 029 2356-36-44" className="hover-link pl-6">
          {" "}
          8 029 2356-36-44
        </Link>
      </li>
    </ul>
  );
};
