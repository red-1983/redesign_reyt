export type NavItem = {
  title: string;
  href: string;
  description?: string;
};
const servicesComponents: NavItem[] = [
  {
    title: "Замена стекла",
    href: "/services/glass-replacement",
    description: "Профессиональная замена лобовых, боковых и задних стекол.",
  },
  {
    title: "Ремонт сколов и трещин",
    href: "/services/chip-repair",
    description: "Восстановление стекол после повреждений.",
  },
  {
    title: "Полировка фар",
    href: "/services/headlight-polishing",
    description: "Возвращаем фарам прозрачность и яркость.",
  },
  {
    title: "Заправка кондиционера автомобиля",
    href: "/services/refueling-conditioner",
    description: "Заправка кондиционера автомобиля.",
  },
];
const contactComponents: NavItem[] = [
  {
    title: "Адрес",
    href: "https://yandex.by/maps/org/avtostyokla/1264499678/",
    description: "г. Мозырь, 1-ый пер. Малинина, 6Б",
  },
  {
    title: "Телефон (МТС)",
    href: "tel:80292358597",
    description: "8 029 235-85-97",
  },
  {
    title: "Телефон (A1)",
    href: "tel:80336508632",
    description: "8 033 650-86-32",
  },
];

const navMenu = { servicesComponents, contactComponents };
export default navMenu;
