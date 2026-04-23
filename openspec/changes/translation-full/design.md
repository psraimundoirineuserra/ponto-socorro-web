# Design: translation-full

## Technical Approach

Implementar sistema de traducción usando archivos JSON para contenido de páginas y traducción automática con Gemini 2.0 Flash para crear las traducciones ES/EN desde el contenido PT original.

## Architecture Decisions

### Decision: JSON files for page content

**Choice**: Almacenar contenido de páginas en archivos JSON por idioma

**Alternatives considered**:
- MD files (requiere parsing adicional)
- Hardcoded en componentes (difícil mantener)
- Base de datos (overkill para contenido estático)

**Rationale**: Mantiene consistencia con UI labels (ya en JSON), fácil de importar, no requiere dependencias adicionales.

### Decision: DeepSeek for translation

**Choice**: Usar DeepSeek API (modelo `deepseek-chat`) para traducir contenido PT → ES/EN

**Alternatives considered**:
- Manual translation (toma mucho tiempo)
- Google Translate API (más caro, menos control)
- Gemini 2.0 Flash (cuota limitada, modelo más lento)

**Rationale**: API más económica ($0.14/1M tokens), mejor disponibilidad, calidad comparable para textos culturales/técnicos.

**Model Configuration**:
- Model: `deepseek-chat`
- Temperature: 0.3 (para traducciones consistentes)
- Max tokens: 4000

### Decision: Fallback a PT

**Choice**: Si traducción no existe, usar PT como fallback

**Rationale**: El contenido original está en PT, es la versión más completa. Mejor mostrar PT que English incompleto.

## Data Flow

```
Request: GET /es/foundation
    │
    ▼
getLocaleFromUrl() → 'es'
    │
    ▼
Layout(props.locale = 'es')
    │
    ▼
foundation.astro recibe locale='es'
    │
    ▼
import content from `@/i18n/content/foundation/content-es.json`
    │
    ▼
Render content.title, content.body
```

## File Structure

```
src/i18n/
├── index.ts              (no change)
├── es.json               (UI labels - existe)
├── en.json               (UI labels - existe)
├── pt.json               (UI labels - existe)
└── content/
    ├── foundation/
    │   ├── content-pt.json   ✅ (original - crear)
    │   ├── content-es.json   🔄 (Gemini traduce)
    │   └── content-en.json   🔄 (Gemini traduce)
    ├── home/
    │   ├── manifesto-pt.json
    │   ├── manifesto-es.json
    │   └── manifesto-en.json
    ├── archive/
    │   └── content-{pt|es|en}.json
    └── shop/
        └── products-{pt|es|en}.json

pages/
├── foundation.astro      (modificado - usar JSON)
├── archive.astro          (modificado - usar JSON)
├── index.astro            (modificado - usar JSON)
└── shop/
    └── index.astro        (modificado - usar JSON)
```

## Components

### PageContent Component

```astro
---
interface Props {
  page: 'foundation' | 'archive' | 'home';
  locale: 'pt' | 'es' | 'en';
}

const { page, locale } = Astro.props;

const content = await import(`@/i18n/content/${page}/content-${locale}.json`).catch(() => {
  // Fallback a PT
  return import(`@/i18n/content/${page}/content-pt.json`);
});
---

<div set:html={content.default.body} />
```

### Translation Service (para Gemini)

```typescript
// src/lib/translation.ts
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function translateContent(text: string, targetLang: 'es' | 'en'): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

  const prompt = `Traduce el siguiente contenido de portugués a ${targetLang === 'es' ? 'español' : 'inglés'}.
Mantén el formato HTML si existe. Preserve términos culturales como "Padrinho", "Daime", "Fardado".

Contenido:
${text}`;

  const result = await model.generateContent(prompt);
  return result.response.text();
}
```

## API Configuration

```typescript
// src/lib/translation.ts
const CONFIG = {
  model: 'gemini-2.0-flash',
  temperature: 0.3,
  maxTokens: 8192,
};
```

## Migration Plan

### Phase 1: Estructura base
- Crear `src/i18n/content/` estructura de carpetas
- Crear `content-pt.json` con contenido original (extraer de páginas actuales)
- Modificar páginas para importar desde JSON

### Phase 2: Traducción
- Crear script que usa Gemini para traducir
- Generar `content-es.json` y `content-en.json`
- Revisar traducciones manualmente

### Phase 3: Testing
- Probar todos los paths con los 3 idiomas
- Verificar fallback funciona
- Verificar himnos no se traducen

## Open Questions

- [ ] ¿Las páginas existentes (foundation, archive) tienen contenido listo para extraer como JSON?
- [ ] ¿Necesitamos mantener backwards compatibility con URLs sin prefijo de idioma?

## Rollback

```bash
git checkout -- src/i18n/
```

No requiere migración de datos - es contenido estático.