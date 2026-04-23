# Design: i18n-paths-fix

## File Changes

### Coordinates.astro

**Before (line 31):**
```astro
{t.coordinates.languages}
```

**After:**
```astro
{t.home.coordinates.languages}
```

### Manifesto.astro

**Before (line 11):**
```astro
const content = await import(`../i18n/content/home/content-${locale}.json`)
```

**After:**
```astro
const content = await import(`../../i18n/content/home/content-${locale}.json`)
```