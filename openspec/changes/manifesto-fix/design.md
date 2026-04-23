# Design: manifesto-fix

## Technical Approach

1. **Modify Manifesto.astro** to accept `locale` prop and load JSON content
2. **Update content-pt.json** with complete manifesto HTML (3 paragraphs)
3. **Re-translate** to ES and EN using DeepSeek

## Data Flow

```
index.astro (locale='es')
  → Layout locale='es'
    → [lang]/index.astro passes locale to components
      → Manifesto.astro receives locale='es'
        → import content-es.json
          → render manifesto.title + manifesto.body
```

## File Changes

| File | Action |
|------|--------|
| `src/components/home/Manifesto.astro` | Modify to accept locale prop, load from JSON |
| `src/i18n/content/home/content-pt.json` | Add full manifesto body (HTML) |
| `src/i18n/content/home/content-es.json` | Translate full body to ES |
| `src/i18n/content/home/content-en.json` | Translate full body to EN |

## Component Pattern

```astro
---
interface Props {
  locale: 'pt' | 'es' | 'en';
}

const { locale } = Astro.props;

const content = await import(`../i18n/content/home/content-${locale}.json`).catch(() => {
  return import(`../i18n/content/home/content-pt.json`);
});
---

<h2>{content.default.manifesto.title}</h2>
<div set:html={content.default.manifesto.body} />
```

## Translation Prompt for DeepSeek

```
Traduce el siguiente contenido de portugués a {idioma}.
El contenido es HTML con párrafos separados por <p></p>.
Mantén las etiquetas HTML.
Traduce TODO el texto - no dejes nada en portugués.

Contenido:
{powered-content}
```