import { url } from "../lib/paths";

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
  /**
   * Where the estimate form sends submissions. Leave empty to have the form open the visitor's
   * email app with their details filled in (no sign-up needed). To switch to a form service later,
   * paste its endpoint here, e.g. "https://formsubmit.co/<your-id>", and photos will upload too.
   */
  estimateFormEndpoint: "",
  /** Areas Fabio covers for house calls, pickup and delivery. Empty = shown as a placeholder. */
  serviceArea: "",
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
  { href: url("/"), label: "Home" },
  { href: url("/services/"), label: "Services" },
  { href: url("/gallery/"), label: "Gallery" },
  { href: url("/history/"), label: "About" },
  { href: url("/inventory/"), label: "For Sale" },
  { href: url("/contact/"), label: "Contact" },
] as const;

/** Where every "Request an estimate" button points. */
export const estimateHref = url("/contact/#estimate");
