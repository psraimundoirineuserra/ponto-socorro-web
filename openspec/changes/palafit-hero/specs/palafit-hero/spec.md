# Specs: palafit-hero

## Requirements

### Requirement: Video background loads and plays

- GIVEN user visits home page
- WHEN page loads
- THEN YouTube video should start playing in background
- AND video should be muted by default
- AND video should loop

### Requirement: Sound toggle button works

- GIVEN video is playing muted
- WHEN user clicks sound toggle
- THEN video should unmute
- AND icon should change from muted to on

- GIVEN video is playing with sound
- WHEN user clicks sound toggle
- THEN video should mute
- AND icon should change from on to muted

### Requirement: Smooth fade-in transition

- GIVEN video is loading
- WHEN video is ready
- THEN opacity should transition from 0 to 1
- AND transition should take 1 second

### Requirement: Mobile responsive

- GIVEN user is on mobile viewport
- WHEN page renders
- THEN layout should adapt (smaller text, adjusted positioning)
- AND all elements should be visible and usable

## Test Scenarios

| Scenario | Expected |
|---------|----------|
| Page load | Video starts playing muted |
| Click sound toggle | Video unmutes, icon changes |
| Click sound toggle again | Video mutes, icon changes |
| Resize to mobile | Layout adapts correctly |