export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "РеутБай",
  url: "https://reyt.by/",
  logo: "https://reyt.by/assets/icon/logo.svg",
  telephone: [
    "+375 (29) 235-85-97",
    "+375 (033) 650-86-32",
    "+375 (029) 236-36-44",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "1-ый пер. Малинина, 6Б",
    addressLocality: "Мозырь",
    addressCountry: "BY",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};
