/**
 * Prefix an internal path with the site's base path, so links keep working when the site
 * is served from a sub-folder (e.g. the GitHub Pages preview at /Arte-Lepre/).
 * url("/gallery/") -> "/gallery/" normally, "/Arte-Lepre/gallery/" on the preview.
 */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return base + path;
}
