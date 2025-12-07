"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MyButton } from "../button/MyButton";
import { usePopupLogic } from "@/hooks/usePopupLogic";

interface PopoverCallbackProps {
  children?: React.ReactNode | ((close: () => void) => React.ReactNode);
  className?: string;
}
export const PopoverCallback = ({
  children,
  className,
}: PopoverCallbackProps) => {
  const { open, setOpen, renderChildren } = usePopupLogic(children);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <MyButton
          variant="secondary"
          className="bg-brand-components hidden w-full border-none p-4 sm:h-[40px] sm:max-w-[200px] xl:flex"
        >
          Заказать звонок
        </MyButton>
      </PopoverTrigger>
      <PopoverContent>{renderChildren()}</PopoverContent>
    </Popover>
  );
};
