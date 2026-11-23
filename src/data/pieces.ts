import type { ImageMetadata } from "astro";

export interface Piece {
  title: string;
  description: string;
  /** One or more photos. Pieces with two photos cross-fade between them (e.g. closed / open). */
  images: ImageMetadata[];
}

type ImageModule = { default: ImageMetadata };
const galleryFiles = import.meta.glob<ImageModule>("../assets/images/*.{png,jpg,jpeg}", { eager: true });
const inventoryFiles = import.meta.glob<ImageModule>("../assets/images/inventory/*.{png,jpg,jpeg}", { eager: true });

/** Look up an image by file name; fails the build loudly if the file is missing. */
function pick(files: Record<string, ImageModule>, path: string): ImageMetadata {
  const mod = files[path];
  if (!mod) throw new Error(`Image not found: ${path}`);
  return mod.default;
}
const gallery = (file: string) => pick(galleryFiles, `../assets/images/${file}`);
const stock = (file: string) => pick(inventoryFiles, `../assets/images/inventory/${file}`);

/** Restoration work shown on /gallery. */
export const galleryPieces: Piece[] = [
  {
    title: "Commode Louis XVI Sorrento",
    description:
      "Period late 18th century. With marquetry in walnut, rosewood, bois de rose, maple and olive, the rectangular top above a conforming case enclosing three full drawers, raised on straight tapering legs, the whole elaborately decorated with scrolling leafage.",
    images: [gallery("Case_1.png")],
  },
  {
    title: "Walnut Writing Desk",
    description: "Period 18th century, Tuscany-Lucca.",
    images: [gallery("Case_2.png")],
  },
  {
    title: "Neapolitan Louis XV Writing Desk",
    description:
      "Period mid-18th century, walnut-plated, with bois de rose marquetry, and purple ebony sliding top.",
    images: [gallery("Case_3.png")],
  },
  {
    title: "Neapolitan Louis Philippe Coffee Table",
    description: "Period early 19th century, octagonal top with boxwood marquetry.",
    images: [gallery("Case_4.png")],
  },
  {
    title: "Napoleone III Chest with 3 Drawers",
    description:
      "Period mid-19th century chest in bois de rose wood, decorated with rich marquetry of different fruitwoods with musical motifs.",
    images: [gallery("Case_5.png")],
  },
  {
    title: "Charles X Smith Console",
    description: "Period mid-19th century. Feather mahogany with fine maple wood inlay.",
    images: [gallery("Case_6.png")],
  },
  {
    title: "Jardinière Napoleon III",
    description:
      "Period mid-19th century. In bois de rose, mahogany and rosewood, elegantly inlaid and threaded in various precious woods. Original gilded bronze.",
    images: [gallery("Case_7.png")],
  },
  {
    title: "Italian Armchairs",
    description: "Pair of armchairs from the residence of the Italian Embassy in Washington, D.C.",
    images: [gallery("Case_8.png")],
  },
  {
    title: "Neapolitan Louis XVI Bedside Table",
    description: "Period mid-18th century. In bois de rose, yellow Siena marble, with two drawers.",
    images: [gallery("Case_9.png")],
  },
  {
    title: "Shaped Jewelry Box",
    description: "In bois de rose and walnut.",
    images: [gallery("Case_10.png")],
  },
  {
    title: "Charles X Dourmosa",
    description: "In rosewood and maple inlay.",
    images: [gallery("Case_11.png")],
  },
];

/** Pieces for sale on /inventory. */
export const inventoryPieces: Piece[] = [
  {
    title: "Dutch Baroque Satinwood Marquetry and Crossbanded Mahogany Bombé Bureau",
    description:
      "Early 19th century. The 'S' hinged writing lid opening to view a fitted interior with a central prospect door enclosing a shelf flanked by ormolu Doric-column mounted document drawers and a serpentine arrangement of two valanced drawers above two pigeonholes and six serpentine drawers. Scattered losses and repairs to veneer and marquetry. Height: 43-1/2 in (110.5 cm); Greatest width: 57 in (144.8 cm); Greatest depth: 27 in (68.6 cm). Property from the Colonel and Mrs. Arthur W.S. Herrington Trust.",
    images: [
      stock("Dutch-Baroque-Satinwood-Marquetry-and-Crossbanded-Mahogany-Bombe-Bureau-Closed.jpg"),
      stock("Dutch-Baroque-Satinwood-Marquetry-and-Crossbanded-Mahogany-Bombe-Bureau-Open.jpg"),
    ],
  },
  {
    title: "Anglo Dutch Marquetry Walnut Cabinet on Chest",
    description:
      "Early 19th century. In two parts: the upper section having two panel doors encasing an arrangement of niches and shelves above four drawers. Height: 57-3/4 in (146.7 cm); Width: 31-1/4 in (79.4 cm); Depth: 20 in (50.8 cm).",
    images: [stock("Anglo-Dutch-Marquetry-Walnut-Cabinet-on-Chest.jpg")],
  },
  {
    title: "South German Baroque Parquetry Walnut Slant Front Bureau SchreibSchrank Cabinet 18th Century",
    description:
      "In three parts: the upper section having a central panel door enclosing a niche flanked by an arrangement of seven short drawers over a tripartite long drawer; the middle section having a slanting hinged writing lid flanked by two short drawers and a green faux-leather lined interior with six niches; and the lower section having three concave long drawers. Height: 72 in (182.9 cm); Width: 46 in (116.8 cm); Depth: 26 in (66 cm).",
    images: [stock("South-German-Baroque-Parquetry-Walnut-Slant-Front-Bureau-SchreibSchrank-Cabinet-18th-Century.jpg")],
  },
  {
    title: "Italian Walnut Commode Late 18th Century",
    description:
      "The banded and shaped rectangular top centered by a panel scene of classical characters, flanked to either side by winged female warriors, above a conforming case fitted with two short drawers over two long drawers, all with foliate scrolling and mythical inlaid creatures, raised on cabriole legs ending in scrolled toes. h. 36\", w. 56\", d. 23\".",
    images: [stock("Italian-Walnut-Commode-late-18th-Century.jpg")],
  },
  {
    title: "Continental Ladies Inlaid Writing Desk",
    description:
      "Continental Neoclassical style ladies writing desk or bonheur du jour, comprised of mixed woods with satinwood and contrasting inlaid and marquetry decoration throughout, single part construction. Flat top over central doors flanked by a row of four stacked drawers opening to an interior with single shelf. Below the fold down hinged writing surface is a dovetailed drawer above two locking drawers, and a shaped kneehole skirt, all raised on square tapered legs terminating into balls. 48-1/2\" H x 32-5/8\" W x 17-3/8\" D.",
    images: [
      stock("Continental-Ladies-Inlaid-Writing-Closed.jpg"),
      stock("Continental-Ladies-Inlaid-Writing-Open.jpg"),
    ],
  },
  {
    title: "Continental Marquetry Inlaid Shaving Mirror",
    description:
      "A Continental marquetry inlaid shaving mirror, likely Dutch, 19th century. 30-1/2 in tall x 31 in wide x 13 in deep.",
    images: [
      stock("Continental-Marquetry-Inlaid-Shaving-Mirror-Closed.jpg"),
      stock("Continental-Marquetry-Inlaid-Shaving-Mirror-Open.jpg"),
    ],
  },
  {
    title: "Bird's Eye Maple Vanity 1930s",
    description:
      "A 1930s serpentine bird's eye maple veneered vanity or dressing table. Vanity features a large folding mirror over two drawers between two columnar cabinets on an open base.",
    images: [
      stock("Birds-eye-maple-vanity-1930s-Closed.jpg"),
      stock("Birds-eye-maple-vanity-1930s-Open.jpg"),
    ],
  },
];

/** URL-safe id for a piece, used for #anchors (e.g. /inventory/#italian-walnut-commode-late-18th-century). */
export function slugify(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Upper-case Roman numerals for catalogue plate and lot numbers. */
export function roman(n: number): string {
  const map: [number, string][] = [[10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]];
  let out = "";
  for (const [v, s] of map) while (n >= v) { out += s; n -= v; }
  return out;
}
