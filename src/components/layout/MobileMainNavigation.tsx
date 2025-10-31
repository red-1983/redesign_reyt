"use client";
import React, { useState } from "react";
import { IconMenu, MobileNav } from "@/components/ui";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
type MobileMainNavigationProps = React.HTMLAttributes<HTMLDivElement>;

export const MobileMainNavigation = ({
  className,
  ...props
}: MobileMainNavigationProps) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={className} {...props}>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <IconMenu
            className="hover:text-brand-components h-13 w-13 cursor-pointer text-white"
            strokeWidth={1.5}
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Меню</SheetTitle>
          </SheetHeader>
          <MobileNav setOpen={setOpen} />
        </SheetContent>
      </Sheet>
    </div>
  );
};

MobileMainNavigation.propTypes = {};

export default MobileMainNavigation;
