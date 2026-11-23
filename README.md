# Arte Lepre

Website for Arte Lepre, a Lepre family antique furniture restoration workshop (Naples since 1959, and Kensington, MD).

Built with [Astro](https://astro.build): every page is plain HTML and CSS, with a few small scripts for the photo lightbox, mobile menu and scroll effects.

## Design

The look borrows from antique catalogues and inlay work, in the brand's navy, gold and ivory:

- **Type:** Cormorant Garamond for headings, Lora for text, Open Sans for small-caps labels.
- **Ornament:** gold "stringing" lines and an eight-point marquetry star (`src/components/Ornament.astro`); a tumbling-blocks parquetry texture on navy sections (`public/patterns/parquetry.svg`).
- **Photos:** shown in cream "mats" like framed prints; gallery entries are numbered plates, pieces for sale are numbered lots.

Design tokens (colors, type scale, spacing, buttons) live at the top of `src/styles/global.css`.

## Run it locally

Requires Node 20 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
```

## Edit content

| What | Where |
| --- | --- |
| Phone, email, address, footer locations, menu links | `src/data/site.ts` |
| Gallery pieces and pieces for sale | `src/data/pieces.ts` |
| Page text | `src/pages/*.astro` |
| Colors, fonts, buttons, spacing | `src/styles/global.css` |

To add a piece: put the photo in `src/assets/images/` (gallery) or `src/assets/images/inventory/` (for sale), then add an entry to `src/data/pieces.ts`. Gallery photos are shown as before/after plates; a piece for sale with two photos (e.g. closed and open) cross-fades between them. Photos can be any size; the build resizes and compresses them.

## Deploy to HostGator

```bash
npm run build
```

Upload the **contents** of the `dist/` folder to `public_html` (File Manager or FTP), replacing the old files. Each page is its own folder (`/gallery/index.html` and so on), so clean URLs like `artelepre.com/gallery` work without any server configuration. Old links such as `artelepre.com/#/gallery` are redirected to the new pages automatically.

## Project layout

```
public/            files copied as-is (favicon, manifest, parquetry pattern)
src/assets/images/ photos, optimized at build time
src/components/    Header, Footer, PageHero, Ornament, GalleryPlates, Catalogue, Lightbox
src/lib/           image helpers
src/data/          site details and the gallery / inventory lists
src/layouts/       BaseLayout (page shell, SEO tags)
src/pages/         one file per page
src/styles/        global.css (design tokens and shared styles)
```
