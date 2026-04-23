# Design: locale-routing-fixes

## Fix 1: shop/[product].astro

```astro
---
import { products } from '@/data/products';

export function getStaticPaths() {
  return products.map(p => ({ params: { product: p.slug } }));
}

return Astro.redirect(`/pt/shop/${Astro.params.product}`, 301);
---
```

## Fix 2: library/[slug].astro

```astro
---
import { hymns } from '@/data/hymns';

export function getStaticPaths() {
  return hymns.map(h => ({ params: { slug: h.slug } }));
}

return Astro.redirect(`/pt/library/${Astro.params.slug}`, 301);
---
```