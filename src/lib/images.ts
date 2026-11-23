import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";

/** A large WebP for the lightbox (originals can be 3000px+ PNGs). */
export async function fullSize(src: ImageMetadata): Promise<string> {
  const img = await getImage({ src, width: Math.min(src.width, 1800), format: "webp", quality: 82 });
  return img.src;
}
