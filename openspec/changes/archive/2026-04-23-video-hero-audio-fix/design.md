# Design: Video Hero Audio Fix

## Technical Approach

Fix the audio toggle by implementing manual state tracking instead of relying on YouTube Player's `isMuted()` method.

## Changes to VideoHero.astro

### Script Changes

**Before (problematic):**
```javascript
let player;
let isMuted = true;

function setupSoundToggle() {
  btn.addEventListener('click', () => {
    if (player.isMuted()) {  // Unreliable
      player.unMute();
      // ...
    }
  });
}
```

**After (fixed):**
```javascript
let player;
let isMuted = true;  // Manual state tracking

function setupSoundToggle() {
  btn.addEventListener('click', () => {
    if (isMuted) {
      player.unMute();
      player.setVolume(80);  // Force audio output
      iconOn.style.display = 'block';
      iconMuted.style.display = 'none';
    } else {
      player.mute();
      iconOn.style.display = 'none';
      iconMuted.style.display = 'block';
    }
    isMuted = !isMuted;  // Toggle manual state
  });
}
```

## Why This Fix Works

| Issue | Solution |
|-------|----------|
| `isMuted()` unreliable | Manual boolean state |
| `unMute()` silently fails | Add `setVolume(80)` to force audio |
| User gesture required | Click event IS user gesture, so audio should enable |