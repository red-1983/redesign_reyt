import React from "react";
import { Cloak } from "@/assets";
import { cn } from "@/lib/utils";
interface BlockWorkTimeProps extends React.ComponentProps<"ul"> {
  className?: string;
}
export const BlockWorkTime = ({ className, ...props }: BlockWorkTimeProps) => {
  return (
    <ul
      className={cn("w-[max-content] flex-col gap-1.5 lg:flex", className)}
      {...props}
    >
      <li className="flex items-center gap-2">
        <Cloak className="fill-[#FC3532]" />
        <span>Вт - Пт: 8:00 - 17:00</span>
      </li>
      <li className="pl-6">Cб: 8:00 - 16:00</li>
      <li className="pl-6">Вс-Пн: Выходной</li>
    </ul>
  );
};
