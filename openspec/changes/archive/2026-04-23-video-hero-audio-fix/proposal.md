# Proposal: Video Hero Audio Fix

## Intent

Fix the audio toggle functionality in VideoHero component. Currently when user clicks unmute, the video does not produce sound due to browser autoplay restrictions and unreliable `isMuted()` state tracking.

## Scope

### In Scope
- Fix sound toggle button logic
- Implement manual state tracking for mute status
- Add `setVolume(80)` after `unMute()` to force audio
- Ensure user gesture triggers audio properly

### Out of Scope
- No visual changes to button or hero
- No changes to video ID or overlay

## Approach

1. Update `VideoHero.astro` script section
2. Replace `player.isMuted()` with manual `isMuted` state variable
3. Add `player.setVolume(80)` after `unMute()` for forced audio output
4. Test in dev server

## Success Criteria

- [ ] Sound toggle button correctly shows mute/unmute state
- [ ] Clicking unmute produces audio from video
- [ ] Icon changes properly between states