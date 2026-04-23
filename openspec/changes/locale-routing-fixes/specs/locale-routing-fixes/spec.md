# Specs: locale-routing-fixes

## Requirements

### Requirement: shop/[product].astro generates paths

- GIVEN build runs
- WHEN shop/[product].astro is processed
- THEN getStaticPaths() returns all product slugs
- AND page redirects to /pt/shop/{product}

### Requirement: library/[slug].astro generates paths

- GIVEN build runs
- WHEN library/[slug].astro is processed
- THEN getStaticPaths() returns all hymn slugs
- AND page redirects to /pt/library/{slug}

## Test Scenarios

| Route | Expected |
|-------|----------|
| /shop/farda-banca | Redirect to /pt/shop/farda-banca |
| /library/gloria-a-ti | Redirect to /pt/library/gloria-a-ti |