# Proposal: Video Hero - Protosocorro

## Intent

Reemplazar el Hero estático por un video hero inmersivo que muestre el video "Histórias de Papai (PD Wilson Carneiro)" de Canal Jagube. Mantener la estética Protosocorro (Studio Minimal boutique) con glassmorphism focalizado en el botón de audio.

## Scope

### In Scope
- Crear componente `VideoHero.astro` con YouTube iframe background
- Botón de audio con glass focalizado (`backdrop-blur-md` + `bg-white/40`)
- Overlay adaptativo (gradiente de `rgba(0,0,0,0.1)` → `rgba(0,0,0,0.3)`)
- Auto-play muted, loop, fade-in transition 1s
- Responsive design
- Adaptación Studio Minimal: sombras single-digit, bordes "aire", tracking-tight

### Out of Scope
- Tag, título, CTAs sobre el video (clean minimal solo video + audio button)
- Cambios en otras páginas o componentes

## Approach

1. Crear `src/components/home/VideoHero.astro` basado en referencia
2. Video ID: `CYlTJPG2vK0` (Centenario Padrinho Wilson)
3. Sound toggle button con glass boutique
4. Integrar en `[lang]/index.astro`
5. Test en dev server

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| Base canvas | `#FAFAFA` | Background Protosocorro |
| Ink black | `#1A1A1A` | Texto sobre video |
| Shadows | `shadow-sm` | Single-digit, no bordes |
| Borders | `rgba(0,0,0,0.05)` | "Aire invisible" |
| Glass button | `backdrop-blur-md bg-white/40` | Sound toggle |
| Hover | `scale-[1.02]` | Orgánico, sutil |

## Affected Areas

| File | Impact | Description |
|------|--------|-------------|
| `src/components/home/VideoHero.astro` | Create | Nuevo componente |
| `src/pages/[lang]/index.astro` | Modify | Reemplazar Hero |

## Rollback Plan

Si el video hero falla, restaurar `Hero.astro` original en `index.astro`.

## Success Criteria

- [ ] Video plays as background (muted, loop)
- [ ] Sound toggle button works (mute/unmute with glass style)
- [ ] Fade-in transition smooth (1s)
- [ ] Mobile responsive
- [ ] Estética Studio Minimal (no compete con video)
- [ ] Overlay garantiza contraste sin ensuciar