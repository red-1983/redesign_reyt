import Link from "next/link";
import navMenu from "@/config/nav-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface MobileMainNavigationProps
  extends React.HTMLAttributes<HTMLDivElement> {
  setOpen: (open: boolean) => void;
}
export const MobileNav = ({ setOpen }: MobileMainNavigationProps) => {
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <nav className="grid gap-6 text-center text-lg font-medium">
      <Link
        href="/"
        className="hover:text-brand-components/80 py-2 transition-colors"
        onClick={closeMenu}
      >
        Главная
      </Link>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="hover:text-brand-components/80 cursor-pointer justify-center py-2 text-lg transition-colors hover:no-underline">
            Услуги
          </AccordionTrigger>
          <AccordionContent className="pt-2 pl-4">
            <div className="grid gap-5">
              {navMenu.servicesComponents.map((component) => (
                <Link
                  key={component.title}
                  href={component.href}
                  className="hover:text-brand-components/80 py-2 text-base transition-colors"
                  onClick={closeMenu}
                >
                  {component.title}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Link
        href="/portfolio"
        className="hover:text-brand-components/80 py-2 transition-colors"
        onClick={closeMenu}
      >
        Портфолио
      </Link>
      <Link
        href="/contacts"
        className="hover:text-brand-components/80 py-2 transition-colors"
        onClick={closeMenu}
      >
        Контакты
      </Link>
    </nav>
  );
};
