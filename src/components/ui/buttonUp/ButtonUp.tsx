"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
interface ButtonUPProps extends React.ComponentProps<"button"> {
  className?: string;
}
export const ButtonUp = ({ className, ...props }: ButtonUPProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      setIsVisible(window.scrollY > 300);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Вернуться в начало страницы"
          className={cn(
            "fixed right-8 bottom-8 z-40 flex items-center justify-center",
            "bg-brand-components/70 h-12 w-12 cursor-pointer rounded-full text-white",
            "hover:bg-opacity-80 transition-all duration-200",
            "shadow-lg hover:shadow-xl",
            "animate-fadeIn",
            className
          )}
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </>
  );
};
