# Proposal: video-hd-quality-push

## Intent

Forzar calidad HD 1080p en el video hero de YouTube. El reproductor actualmente usa calidad automática (buffer bajo inicial = video pixelado los primeros segundos). El algoritmo de YouTube no prioriza HD si no lo pedimos explícitamente.

## Scope

### In Scope
- Modificar `src/components/home/VideoHero.astro` script JS
- Agregar `setPlaybackQuality('hd1080')` en evento `onReady`
- Agregar `setPlaybackQuality('hd1080')` en evento `onStateChange` cuando estado = PLAYING
- Verificar que calidad actual no sea ya HD antes de pedirla (evitar peticiones innecesarias)

### Out of Scope
- Cambiar estructura HTML o CSS
- Cambiar video ID o fuente
- Implementar video nativo (Handbrake/Vercel Blob) — queda para futura iteración
- Touch other components

## Approach

Modificar el objeto `events` del YouTube Player API:

```javascript
events: {
  onReady: (event) => {
    event.target.setPlaybackQuality('hd1080'); // ← AGREGAR
    // ... existente
  },
  onStateChange: (event) => {
    if (event.data === YT.PlayerState.PLAYING) { // ← AGREGAR
      const currentQuality = event.target.getPlaybackQuality();
      if (currentQuality !== 'hd1080') {
        event.target.setPlaybackQuality('hd1080');
      }
    }
  }
}
```

**Fallback nativo**: YouTube Adaptive Bitrate bajará automáticamente si el ancho de banda no soporta 1080p. No necesitamos escribir condicionales.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/home/VideoHero.astro` | Modified | Solo script JS, 10 líneas max |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| YouTube ignora setPlaybackQuality en algunos dispositivos | Low | Fallback nativo ya existe, video seguirá funcionando |
| Efecto visual no perceptible en conexiones lentas | Low | Por diseño, el buffer inicial siempre será menor |

## Rollback Plan

Revertir cambios en `VideoHero.astro` - eliminar las 3 líneas agregadas. El archivo tiene control de versión.

## Dependencies

- YouTube IFrame API (ya en uso)
- Video ID existente: `CYlTJPG2vK0`

## Success Criteria

- [ ] Video hero solicita calidad hd1080 al cargar
- [ ] Refuerza petición cuando pasa a estado PLAYING
- [ ] No hay errores en consola del navegador
- [ ] Estilo visual sin cambios (CSS intacto)

---

# Proposal: fundacao-content-pt

## Intent

Actualizar contenido de la página `/fundacao` (Fundación) con el texto completo de `fundacao_cepseris.md` (~4000 palabras). Contenido actual está hardcodeado en componente y usa texto incompleto/mixto PT-ES.

## Scope

### In Scope
- Actualizar `src/i18n/content/foundation/content-pt.json` con contenido completo de `fundacao_cepseris.md`
- Mantener estructura JSON existente (sections con type + content)
- Agregar quotes, paragraphs según el documento fuente
- Mantener diseño/estilo existente del componente

### Out of Scope
- Traducciones ES/EN (se hará después si aplica)
- Cambios en estructura HTML o CSS
- Modificar componentes de layout

## Approach

**Fuente**: `/Users/calderonjosue_/Downloads/fundacao_cepseris.md`

**Estructura JSON destino**:
```json
{
  "title": "...",
  "sections": [
    { "type": "paragraph", "content": "..." },
    { "type": "quote", "content": "...", "author": "..." }
  ]
}
```

**Mapeo de contenido**:
- Título principal → `"title"`
- "O Mandato Originário" → section paragraph
- Quotes de Mestre Irineu/Padrinho Wilson → sections quote
- "Padrinho Wilson: O Guardião da Linha" → section paragraph
- "Padrinho Nonato: A Continuidade da Missão" → section paragraph
- "Hoje: Um Território de Memória e Cura" → section paragraph

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/i18n/content/foundation/content-pt.json` | Modified | Reemplazo completo con ~4000 palabras |
| `src/pages/[lang]/foundation.astro` | No changes | Ya usa el JSON correctamente |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Contenido demasiado largo para la página | Low | Diseño ya tiene scroll, es esperado |
| HTML en el contenido no renderiza bien | Low | Revisar que tags HTML sean válidos |

## Rollback Plan

Restaurar el archivo `content-pt.json` desde git. El archivo tiene control de versión.

## Dependencies

- Fuente: `/Users/calderonjosue_/Downloads/fundacao_cepseris.md`

## Success Criteria

- [ ] JSON de PT tiene todos los párrafos del documento fuente
- [ ] Quotes preserved con author attribution
- [ ] Página carga sin errores
- [ ] Contenido visible en `/pt/fundacao`

---

**Mode**: openspec
**Project**: protosocorro
**Date**: 2026-04-24