import React, { Children, cloneElement, isValidElement } from "react";
import clsx from "clsx";

interface IconCardProps extends React.ComponentProps<"li"> {
  className?: string;
  children: React.ReactNode;
  title: string;
}

export const IconCard = ({
  className,
  children,
  title,
  ...props
}: IconCardProps) => {
  const iconWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child as React.ReactElement<{ className?: string }>, {
        className: clsx(
          "w-20 h-20 mb-4 ",
          (child.props as { className?: string }).className
        ),
      });
    }
    return child;
  });

  return (
    <li
      className={clsx(
        "group flex h-[min-content] max-w-[200px] flex-col items-center gap-5",
        className
      )}
      {...props}
    >
      {iconWithProps}
      <p className="text-fontSize-18-24 w-full text-center">{title}</p>
    </li>
  );
};
