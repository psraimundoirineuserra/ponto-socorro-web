# Design: palafit-hero

## Technical Approach

Create PalafitHero component using YouTube iframe API with:
- Video background using 16:9 aspect ratio trick
- Sound toggle button
- Glassmorphism UI elements
- Fade-in transition on load

## File Structure

```
src/components/home/PalafitHero.astro  (new)
```

## Component Interface

```astro
---
interface Props {
  videoId?: string;  // YouTube video ID, default provided
}

const { videoId = 'OVfZtrxdM-c' } = Astro.props;
---

<PalafitHero videoId={videoId} />
```

## Visual Design

- Full viewport hero (90vh)
- YouTube video as background (cover effect)
- Dark overlay gradient for text readability
- Glass tag showing project name
- Large title with accent color
- Two CTA buttons (secondary and primary glass style)
- Sound toggle button in top-right

## Implementation Pattern

See `reference/palafit-hero-astro.md` for complete implementation reference.