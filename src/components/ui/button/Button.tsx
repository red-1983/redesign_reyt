import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}
export const Button = ({
  children,
  className,
  variant = "primary",
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center justify-center rounded-md border-2 border-none font-semibold uppercase transition-all",

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
