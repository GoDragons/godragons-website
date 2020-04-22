import servicesData from "./servicesData";

const headerData = [
  {
    label: "Case Studies",
    slug: "case-studies",
    children: [
      {
        label: "HIIT Tribe",
        slug: "hiit-tribe",
      },
    ],
  },
  {
    label: "Services & Pricing",
    slug: "services",
    children: servicesData.map((service) => ({
      label: service.name,
      slug: service.slug,
    })),
  },

  {
    label: "Team",
    slug: "team",
  },
  {
    label: "Contact",
    slug: "contact",
  },
  {
    label: "Blog",
    slug: "blog",
  },
];

export default headerData;
