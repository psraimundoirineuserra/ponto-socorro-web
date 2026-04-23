# Design: Video Hero - Protosocorro

## Technical Approach

Create `VideoHero.astro` component with YouTube iframe background using Studio Minimal aesthetic:
- Video background with adaptive overlay
- Sound toggle button with focalized glassmorphism
- No tag, title, or CTAs (minimal approach)

## Architecture Decisions

### Decision: Video Background Implementation

**Choice**: Use YouTube iframe API with 16:9 aspect ratio trick
**Why**: Reliable cross-browser video background without external libraries
**Pattern**: `min-width: 177.77vh; min-height: 56.25vw` centered with transform

### Decision: Glassmorphism Only for Sound Button

**Choice**: Apply glass effect ONLY to sound toggle button
**Why**: Focalized glassmorphism maintains Protosocorro's transparency without contaminating the minimal aesthetic
**Alternative considered**: Glass overlay on entire hero → rejected to keep UI clean

### Decision: Studio Minimal Aesthetic

**Choice**: Single-digit shadows, "invisible" borders, tracking-tight typography
**Why**: Follows Protosocorro design evolution toward editorial boutique feel
**Tokens**:
- Borders: `rgba(0,0,0,0.05)` (invisible until sought)
- Shadows: `shadow-sm` (not heavy borders)
- Text: `tracking-tight` for editorial impact

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/components/home/VideoHero.astro` | Create | Video hero component |
| `src/pages/[lang]/index.astro` | Modify | Replace Hero with VideoHero |

## Component Interface

```astro
---
interface Props {
  videoId?: string;
}

const { videoId = 'CYlTJPG2vK0' } = Astro.props;
---

<VideoHero videoId={videoId} />
```

## Visual Design

### Video Section
- Height: `80vh` (matching current hero)
- Background: `#000` (fallback while loading)
- Overlay: Gradient `rgba(0,0,0,0.1)` → `rgba(0,0,0,0.3)`

### Sound Toggle Button
- Position: `top-6 right-6` (desktop), `top-5 right-5` (mobile)
- Size: `w-12 h-12` (48px)
- Style:
  - `backdrop-blur-md`
  - `bg-white/40`
  - `border border-white/20`
  - `text-primary` (#1A1A1A)
  - `rounded-full`
  - `shadow-sm`
- Hover: `scale-[1.02]`
- Transition: `duration-300`

### Icon States
- Muted: Speaker with X line (default on load)
- Unmuted: Speaker with waves

## Overlay Gradient

```css
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.1) 0%,
  rgba(0, 0, 0, 0.3) 100%
);
```

Ensures button contrast without heavy dark overlay.

## Animation

| Animation | Duration | Easing |
|-----------|----------|--------|
| Video fade-in | 1000ms | ease-in-out |
| Button hover | 300ms | cubic-bezier(0.16, 1, 0.3, 1) |
| Icon toggle | instant | none |

## Responsive Behavior

| Breakpoint | Button Position | Notes |
|------------|-----------------|-------|
| Mobile (<768px) | top-5 right-5 | 20px from edges |
| Desktop (≥768px) | top-6 right-6 | 24px from edges |