/**
 * Restoration services, process and FAQ. Text is drawn from the current artelepre.com.
 * Any field set to null is shown as a "To be added" placeholder on the preview and hidden on the
 * real site until filled in.
 */

export interface Service {
  id: string;
  name: string;
  summary: string;
  details: string[];
}

export const services: Service[] = [
  {
    id: "refinishing",
    name: "Refinishing & French Polishing",
    summary: "Surfaces cleaned and brought back to life by hand, keeping the original patina wherever possible.",
    details: [
      "Removal of old paint and dirt only where necessary, avoiding abrasive or acidic products",
      "French polishing by hand with shellac dissolved in spirit",
      "Beeswax finishes for a uniform, protective patina",
    ],
  },
  {
    id: "veneer",
    name: "Veneer, Marquetry & Inlay Repair",
    summary: "Lifting, cracked or missing veneer re-laid, and losses in marquetry and inlay replaced to match.",
    details: [
      "Veneer re-laid with natural hot glue",
      "Missing marquetry and inlay rebuilt in period-matched woods",
      "Fillers made from colored earth pigments matched to the original tone",
    ],
  },
  {
    id: "structural",
    name: "Structural & Woodworm Repair",
    summary: "Loose joints, broken legs and missing parts rebuilt so the piece is sound and usable again.",
    details: [
      "Consolidation of worm-eaten, detached or degraded parts",
      "Missing parts reconstructed in antique wood",
      "Woodworm treated by injection with an odorless, colorless insecticide",
    ],
  },
  {
    id: "house-calls",
    name: "House Calls, Pickup & Delivery",
    summary: "Fabio can assess pieces in your home and arrange for them to be collected and returned.",
    details: [
      "In-home assessment of furniture that is hard to move",
      "Collection from and delivery back to your home",
      "Advice on care once your piece is back in place",
    ],
  },
];

/** The two kinds of intervention described on the original site. */
export const approaches = [
  {
    name: "Conservative Restoration",
    text: "Consolidation of the existing parts of the furniture — worm-eaten, detached or degraded — without necessarily returning it to its original condition.",
  },
  {
    name: "Integrative Restoration",
    text: "Reconstruction of furniture that is missing fundamental parts, returning it to its original structure.",
  },
];

export const stages = [
  { name: "Stripping", text: "Removal, if necessary, of old paint and dirt, preserving the original patina — the colour the piece has acquired over time — as much as possible. Only in integrative interventions, and never with abrasive or acidic substances." },
  { name: "Woodworm treatment", text: "Injection of anti-woodworm products into the holes in the wood, using permethrin, an odorless and colorless insecticide." },
  { name: "Restoration of the veneer", text: "Integration, where necessary, of ancient material using natural hot glue. The veneer is the finishing layer: a thin sheet of precious wood no more than one millimeter thick." },
  { name: "Reconstruction of missing parts", text: "In integrative restorations, the furniture is returned to its original structure." },
  { name: "Filler", text: "A mixture of colored earth pigments matched as closely as possible to the original tone of the wood." },
  { name: "Shellac finish", text: "Shellac, a natural resin dissolved in alcohol and mixed with other resins, is applied to smooth and polish the wood, restoring the patina of the past." },
  { name: "Beeswax coating", text: "A layer of beeswax gives a uniform patina that protects the surface of the wood." },
];

/** "How it works" for new clients. */
export const steps = [
  { name: "Send photos", text: "Use the estimate form or email a few photos of the piece and tell Fabio what needs attention." },
  { name: "Get an estimate", text: "Fabio reviews the photos and replies with his assessment. For larger pieces he can visit in person." },
  { name: "Restoration by hand", text: "Your piece is restored in the Kensington workshop using traditional methods and natural materials." },
  { name: "Back home", text: "Collect it from the workshop, or Fabio arranges delivery back to your home." },
];

export interface Faq {
  q: string;
  /** Known answer text. */
  a?: string;
  /** Information still needed from Fabio; shown as a placeholder after `a`. */
  todo?: string;
}

export const faqs: Faq[] = [
  {
    q: "How do I get an estimate?",
    a: "Send a few photos and a short description using the estimate form or by email, and Fabio will reply directly. You're also welcome to call.",
  },
  {
    q: "How much does restoration cost?",
    a: "Every piece is different: cost depends on its size, condition and the work it needs. Fabio gives you an estimate after seeing photos, before any work begins.",
    todo: "Are estimates free? Any typical price ranges or a minimum charge?",
  },
  {
    q: "How long does a restoration take?",
    todo: "Typical turnaround times, e.g. small repairs vs. a full French polish.",
  },
  {
    q: "Do you come to my home, or pick up and deliver?",
    a: "Yes. Fabio can assess pieces in your home and arrange pickup and delivery.",
    todo: "Which areas are covered, and is there a charge for pickup and delivery?",
  },
  {
    q: "What kinds of furniture do you work on?",
    a: "Antique furniture of every kind, with particular expertise in Italian, French and English pieces: commodes, desks, tables, chairs, cabinets, mirrors and boxes.",
    todo: "Does Fabio also take on modern or non-antique pieces?",
  },
  {
    q: "Will restoration affect my antique's value?",
    a: "Fabio's approach is to preserve original material and patina wherever possible, working by hand with traditional methods and natural materials such as shellac, beeswax and hot glue, and antique wood for any replacement parts.",
  },
  {
    q: "Can you help with insurance or moving-damage claims?",
    todo: "Does Fabio repair furniture damaged in moves or provide written assessments for insurance?",
  },
  {
    q: "Do you speak Italian?",
    a: "Sì — si parla italiano. Fabio is from Naples, where the Lepre family workshop has been restoring furniture since 1959.",
  },
];

/** Client quotes. Leave empty to show placeholders on the preview (hidden on the real site). */
export const testimonials: { quote: string; name: string; detail?: string }[] = [];
