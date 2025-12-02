import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MyButton } from "../button/MyButton";

interface PopoverCallbackProps {
  children?: React.ReactNode;
}
export const PopoverCallback = ({ children }: PopoverCallbackProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <MyButton
          variant="secondary"
          className="bg-brand-components hidden w-full border-none p-4 sm:h-[40px] sm:max-w-[200px] xl:flex"
        >
          Заказать звонок
        </MyButton>
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};
