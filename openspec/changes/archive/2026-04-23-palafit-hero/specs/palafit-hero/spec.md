# Delta for Video Hero - Protosocorro

## ADDED Requirements

### Requirement: Video Background with YouTube

The VideoHero component MUST render a YouTube video as background using the iframe API.

- GIVEN user visits home page
- WHEN page loads
- THEN YouTube video `CYlTJPG2vK0` should start playing muted in background
- AND video should loop continuously
- AND iframe should have pointer-events: none (non-interactive)

### Requirement: Sound Toggle Button with Glass Style

The sound toggle button MUST use the Studio Minimal glassmorphism approach.

- GIVEN video is playing muted
- WHEN user clicks sound toggle button
- THEN video should unmute
- AND button icon should change from muted to audio-on

- GIVEN video is playing with sound
- WHEN user clicks sound toggle button
- THEN video should mute
- AND button icon should change from audio-on to muted

Button style requirements:
- `backdrop-blur-md` for glass effect
- `bg-white/40` for subtle glass background
- `border border-white/20` for subtle border
- `text-primary` (#1A1A1A) for icon color
- `scale-[1.02]` on hover for organic feel

### Requirement: Smooth Fade-in Transition

- GIVEN video is loading
- WHEN video is ready (onReady event)
- THEN iframe opacity should transition from 0 to 1
- AND transition duration should be 1 second (ease-in-out)

### Requirement: Adaptive Overlay

- GIVEN video is playing
- THEN an overlay should cover the video with gradient:
  - Top: `rgba(0,0,0,0.1)` (subtle)
  - Bottom: `rgba(0,0,0,0.3)` (darker for contrast)

### Requirement: Mobile Responsive

- GIVEN viewport is < 768px
- WHEN component renders
- THEN sound toggle button should reposition to top-right corner (20px)
- AND all elements should remain visible and usable

### Requirement: Minimal UI (No Tag/Title/CTA)

The component MUST NOT include:
- Glass tag above video
- Title text
- CTA buttons

Only video background + sound toggle button.

## Scenarios

### Scenario: Page Load with Video

- GIVEN user visits home page
- WHEN page loads
- THEN video starts playing muted automatically
- AND fade-in transition begins
- AND sound toggle button appears in top-right

### Scenario: Toggle Sound On

- GIVEN video is muted (default)
- WHEN user clicks sound toggle button
- THEN video audio plays
- AND icon changes to audio-on
- AND button maintains glass style

### Scenario: Toggle Sound Off

- GIVEN video has audio playing
- WHEN user clicks sound toggle button
- THEN video mutes
- AND icon changes to muted
- AND button maintains glass style

### Scenario: Mobile View

- GIVEN user is on mobile viewport (<768px)
- WHEN page renders
- THEN sound toggle button is in top-right corner (20px from edges)
- AND button size remains usable (touch-friendly)