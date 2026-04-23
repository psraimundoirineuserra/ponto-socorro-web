# Design: Video Hero CSS-Driven State Fix

## Changes

### CSS Update
```css
.sound-toggle-btn svg {
  position: absolute;
  transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1),
              transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

.icon-audio-on {
  opacity: 0;
  transform: scale(0.8);
}

.icon-audio-muted {
  opacity: 1;
  transform: scale(1);
}

.sound-toggle-btn.is-active .icon-audio-on {
  opacity: 1;
  transform: scale(1);
}

.sound-toggle-btn.is-active .icon-audio-muted {
  opacity: 0;
  transform: scale(0.8);
}
```

### JS Update
```javascript
newBtn.addEventListener('click', () => {
  if (isMuted) {
    player.unMute();
    player.setVolume(80);
    newBtn.classList.add('is-active');
    isMuted = false;
  } else {
    player.mute();
    newBtn.classList.remove('is-active');
    isMuted = true;
  }
});
```

### HTML Update
- Remove `style="display: none;"` from icon-audio-on SVG