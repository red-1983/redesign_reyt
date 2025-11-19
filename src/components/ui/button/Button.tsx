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
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "cursor-pointer items-center justify-center rounded-md border-2 border-none font-semibold uppercase transition-all hover:opacity-80",
        {
          "text-black": variant === "primary",
          "text-white": variant === "secondary",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
