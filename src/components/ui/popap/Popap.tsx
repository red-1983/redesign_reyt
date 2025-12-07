"use client";
import React, { useState, useCallback } from "react";
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
import { usePopupLogic } from "@/hooks/usePopupLogic";
interface PopapProps {
  children?: React.ReactNode | ((close: () => void) => React.ReactNode);
  className?: string;
}

export const Popap = ({ children, className }: PopapProps) => {
  const { open, setOpen, renderChildren } = usePopupLogic(children);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <MyButton
          variant="secondary"
          className={cn(
            "bg-brand-components h-[50px] w-[300px] text-[clamp(1rem,1.5vw,1.2rem)] text-white",
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
        {renderChildren()}
      </DialogContent>
    </Dialog>
  );
};
