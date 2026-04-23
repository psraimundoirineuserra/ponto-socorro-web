# Specs: i18n-home-fix

## Requirements

### Requirement: Components receive locale prop

- GIVEN `[lang]/index.astro` renders with `lang='es'`
- WHEN Hero, Manifesto, Coordinates, HinarioPreview render
- THEN each component receives `locale='es'` prop

### Requirement: Components use locale prop for translations

- GIVEN `Hero` receives `locale='es'`
- WHEN it calls `useTranslations()`
- THEN it should call `useTranslations('es')` using the prop

- GIVEN `Coordinates` receives `locale='pt'`
- THEN `t.coordinates.title` should be in Portuguese

### Requirement: Manifesto loads from JSON with full body

- GIVEN Manifesto receives `locale='es'`
- WHEN it renders
- THEN it loads from `content-es.json`
- AND renders `manifesto.title` and `manifesto.body` (3 paragraphs)

### Requirement: No hardcoded locale in components

- GIVEN any home component
- WHEN it renders
- THEN it should NOT have hardcoded `useTranslations('es')`
- AND should use the `locale` prop passed from parent

### Requirement: Hardcoded strings must be in JSON

- GIVEN `Coordinates` line 26 has `"Idiomas"` hardcoded
- THEN this should come from `t.coordinates.languages` in JSON

- GIVEN `HinarioPreview` line 17 has `"Ver todos →"` hardcoded
- THEN this should come from `t.home.preview.seeAll` in JSON

## Test Scenarios

| URL | Expected |
|-----|----------|
| /pt/ | Hero: "Fé, Música e Comunidade", Coordinates in PT, Manifesto in PT |
| /es/ | Hero: "Fe, Música y Comunidad", Coordinates in ES, Manifesto in ES |
| /en/ | Hero: "Faith, Music and Community", Coordinates in EN, Manifesto in EN |