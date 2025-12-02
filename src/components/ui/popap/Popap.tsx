import React from "react";
import { MyButton } from "../button/MyButton";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PopapProps {
  children?: React.ReactNode;
  className?: string;
}

export const Popap = ({ children, className }: PopapProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <MyButton
          variant="secondary"
          className={cn(
            "bg-brand-components hidden h-[50px] w-[300px] text-[clamp(1rem,1.5vw,1.2rem)] text-white sm:flex",
            className
          )}
        >
          Оставить заявку
        </MyButton>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] max-w-[max-content] overflow-y-auto sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="mt-5 mb-5">
            Оставьте пожалуйста заявку
          </DialogTitle>
          <DialogDescription>
            Наш менеджер свяжется с Вами в ближайшее время
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};
