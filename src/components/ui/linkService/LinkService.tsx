import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface LinkServiceProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

export const LinkService = ({
  href,
  className,
  children,
  ...props
}: LinkServiceProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "bg-brand-components flex h-[50px] w-[300px] cursor-pointer items-center justify-center rounded-md border-2 border-none font-semibold uppercase transition-all hover:opacity-80",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};
