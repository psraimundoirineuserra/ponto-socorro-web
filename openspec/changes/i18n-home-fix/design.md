# Design: i18n-home-fix

## Technical Approach

1. **Update `[lang]/index.astro`** to pass `locale` prop to all child components
2. **Update each component** to accept `locale` prop and use it in `useTranslations()`
3. **Fix Manifesto.astro** to load full content from JSON
4. **Update JSON files** with missing keys (languages, seeAll, full manifesto body)
5. **Re-translate** with DeepSeek

## File Changes

### Phase 1: index.astro

```astro
<Layout locale={lang}>
  <Hero locale={lang} />
  <Manifesto locale={lang} />
  <Coordinates locale={lang} />
  <HinarioPreview locale={lang} />
</Layout>
```

### Phase 2: Component updates

**Hero.astro:**
```astro
---
interface Props {
  locale: 'pt' | 'es' | 'en';
}
const { locale } = Astro.props;
const t = useTranslations(locale);
---
```

**Coordinates.astro:**
- Accept `locale` prop
- Replace hardcoded "Idiomas" with `t.coordinates.languages`

**HinarioPreview.astro:**
- Accept `locale` prop
- Replace hardcoded "Ver todos →" with `t.home.preview.seeAll`

**Manifesto.astro:**
- Accept `locale` prop
- Load from JSON with fallback to PT
- Render `manifesto.title` and `manifesto.body`

### Phase 3: JSON updates

Update all 3 locale JSON files:
```json
{
  "home": {
    "preview": {
      "seeAll": "Ver todos →"
    }
  },
  "coordinates": {
    "languages": "Idiomas"
  },
  "manifesto": {
    "title": "...",
    "body": "<p>...</p><p>...</p><p>...</p>"
  }
}
```

## Data Flow

```
User visits /es/
  → [lang]/index.astro gets lang='es'
  → Layout receives locale='es'
  → Components receive locale='es'
  → Hero: useTranslations('es') → t.home.hero.title
  → Coordinates: useTranslations('es') → t.coordinates.title
  → Manifesto: import content-es.json → render body
```