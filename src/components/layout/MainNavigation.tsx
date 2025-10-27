"use client";
import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import navMenu from "@/config/nav-menu";

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-[clamp(0.9rem,1.5vw,1.1rem)] leading-none font-medium">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
type MainNavigationProps = React.HTMLAttributes<HTMLElement>;
export function MainNavigation({ className, ...props }: MainNavigationProps) {
  return (
    <div className={className} {...props}>
      <NavigationMenu className="mx-auto hidden max-w-[1292px] md:flex">
        <NavigationMenuList className="">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                href="/"
                className="hover:text-brand-components bg-transparent hover:bg-transparent"
              >
                Главная
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:text-brand-components data-[state=open]:hover:text-brand-components cursor-pointer bg-transparent hover:bg-transparent">
              Услуги
            </NavigationMenuTrigger>
            <NavigationMenuContent asChild>
              <ul className="grid w-[400px] grid-cols-2 gap-3 p-4 md:w-[500px] lg:w-[600px]">
                {navMenu.servicesComponents.map((component) => (
                  <ListItem
                    className=""
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                href="/portfolio"
                className="hover:text-brand-components bg-transparent hover:bg-transparent"
              >
                Портфолио
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                href="/contacts"
                className="hover:text-brand-components bg-transparent hover:bg-transparent"
              >
                Контакты
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
