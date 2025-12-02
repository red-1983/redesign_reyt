import React from "react";
import { cn } from "@/lib/utils";

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}
export const MyButton = ({
  children,
  className,
  variant = "primary",
  disabled,
  ...props
}: MyButtonProps) => {
  return (
    <button
      className={cn(
        "flex h-[50px] items-center justify-center rounded-md border-2 border-none font-semibold uppercase transition-all",

        {
          "cursor-pointer hover:opacity-80": !disabled,
          "cursor-not-allowed opacity-50": disabled,
        },
        {
          "text-black": variant === "primary",
          "text-white": variant === "secondary",
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
