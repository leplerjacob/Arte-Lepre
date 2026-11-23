/** Business details used across the site. Edit here, not in the pages. */
export const site = {
  name: "Arte Lepre",
  tagline: "Antique Furniture Restoration & Conservation",
  url: "https://www.artelepre.com",
  since: 1959,
  phone: {
    display: "(202) 550-5312",
    href: "tel:+12025505312",
  },
  email: "artelepre@gmail.com",
  mapsUrl: "https://g.page/ArteLepre?share",
  contactName: "Fabio Lepre",
  address: {
    street: "4130 Howard Avenue",
    city: "Kensington",
    region: "MD",
    postalCode: "20895",
    country: "US",
  },
} as const;

/** Workshops listed in the footer. */
export const locations = [
  { label: "Washington, DC", address: "4130 Howard Ave, Kensington, MD 20895", person: "Fabio Lepre" },
  { label: "Napoli", address: "Via Carlo Poerio 80 - 80121 Napoli, Italy", person: "Raffaele Lepre" },
  { label: "Napoli", address: "Vico Santa Maria a Cappella Vecchia, 12 - 80132 Napoli, Italy", person: "Alfredo Lepre" },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/gallery/", label: "Gallery" },
  { href: "/inventory/", label: "For Sale" },
  { href: "/history/", label: "Our History" },
  { href: "/contact/", label: "Contact" },
] as const;
