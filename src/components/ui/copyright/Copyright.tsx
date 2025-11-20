import React from "react";
import { Logo } from "@/assets";
import Link from "next/link";
import { cn } from "@/lib/utils";
interface CopyrightProps extends React.ComponentProps<"div"> {
  className?: string;
}
export const Copyright = ({ className, ...props }: CopyrightProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 md:flex-row",
        className
      )}
      {...props}
    >
      <p>Разработано в веб-студии</p>
      <Link href="https://www.skillnet.by/" target="_blank" rel="noreferrer">
        <Logo className="w-[100px] fill-white [&_.logo-bg]:fill-transparent [&_.net]:fill-[#009FE3]" />
      </Link>

      <p>&copy; 2025. Все права защищены.</p>
    </div>
  );
};
