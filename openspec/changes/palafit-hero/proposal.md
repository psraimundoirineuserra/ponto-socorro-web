# Proposal: palafit-hero

## Intent

Replace or enhance the current Hero component with an immersive video hero using a YouTube background. Create a visually impactful first impression for the Palafito project.

## Scope

### Included
- Create PalafitHero component with YouTube video background
- Add sound toggle button (mute/unmute)
- Glassmorphism UI elements (glass tags, buttons)
- Fade-in transition when video loads
- Mobile responsive design

### Excluded
- Video content (use existing YouTube ID or placeholder)
- Auto-play behavior (user controls)

## Approach

1. Create `src/components/home/PalafitHero.astro` based on reference design
2. Use YouTube iframe API for video control
3. Integrate into `[lang]/index.astro` as replacement or alongside existing Hero
4. Test in dev server

## Success Criteria

- Video plays as background when page loads
- Sound toggle button works (mute/unmute)
- Fade-in transition is smooth
- Mobile layout works correctly
- Glassmorphism style is consistent with existing design