import React from "react";
import { MenuIcon as MenuIconLucide } from "lucide-react";

type IconMenuProps = React.ComponentProps<typeof MenuIconLucide>;

export const IconMenu = ({ className, ...props }: IconMenuProps) => {
  return <MenuIconLucide className={className} {...props} />;
};

