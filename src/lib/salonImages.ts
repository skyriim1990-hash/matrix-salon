import type { ImageMetadata } from 'astro';

// Eagerly import every optimized salon photo so components can look them up by
// name (e.g. salon['hero'], salon[`work-${n}`]). Astro processes these at build
// time to generate responsive AVIF/WebP with proper srcset + caching hashes.
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../images/salon/*.webp',
  { eager: true },
);

export const salon: Record<string, ImageMetadata> = {};
for (const path in files) {
  const name = path.split('/').pop()!.replace('.webp', '');
  salon[name] = files[path].default;
}
