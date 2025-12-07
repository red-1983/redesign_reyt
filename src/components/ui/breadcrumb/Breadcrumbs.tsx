"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const LABELS: Record<string, string> = {
  "/": "Главная",
  "/portfolio": "Наши работы",
  "/contacts": "Контакты",
  "/services": "Услуги",
  "/services/chip-repair": "Ремонт сколов",
  "/services/glass-replacement": "Замена стекла",
  "/services/headlight-polishing": "Полировка фар",
  "/services/refueling-conditioner": "Заправка кондиционера",
};

interface BreadcrumbsProps {
  className?: string;
}
export const Breadcrumbs = ({ className }: BreadcrumbsProps) => {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumb
      className={cn(
        "sticky top-0 z-10 bg-transparent px-4 py-2 xl:px-0",
        className
      )}
    >
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">{LABELS["/"] ?? "Главная"}</BreadcrumbLink>
        </BreadcrumbItem>

        {segments.map((seg, idx) => {
          const href = "/" + segments.slice(0, idx + 1).join("/");
          const label =
            LABELS[href] ?? decodeURIComponent(seg).replace(/-/g, " ");
          return (
            <React.Fragment key={href}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={href}
                  aria-current={
                    idx === segments.length - 1 ? "page" : undefined
                  }
                >
                  {label}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
