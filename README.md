# Arte Lepre

Website for Arte Lepre, a Lepre family antique furniture restoration workshop (Naples since 1959, and Kensington, MD).

Built with [Astro](https://astro.build): every page is plain HTML and CSS, with a few small scripts for the slideshow, photo lightbox and mobile menu.

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
| Colors, fonts, buttons | `src/styles/global.css` |

To add a piece: put the photo in `src/assets/images/` (gallery) or `src/assets/images/inventory/` (for sale), then add an entry to `src/data/pieces.ts`. Give a piece two photos (e.g. closed and open) and they will cross-fade. Photos can be any size; the build resizes and compresses them.

## Deploy to HostGator

```bash
npm run build
```

Upload the **contents** of the `dist/` folder to `public_html` (File Manager or FTP), replacing the old files. Each page is its own folder (`/gallery/index.html` and so on), so clean URLs like `artelepre.com/gallery` work without any server configuration. Old links such as `artelepre.com/#/gallery` are redirected to the new pages automatically.

## Project layout

```
public/            files copied as-is (favicon, manifest, background pattern)
src/assets/images/ photos, optimized at build time
src/components/    Header, Footer, Splash, Slideshow, PieceList, Lightbox
src/data/          site details and the gallery / inventory lists
src/layouts/       BaseLayout (page shell, SEO tags)
src/pages/         one file per page
src/styles/        global.css (design tokens and shared styles)
```
