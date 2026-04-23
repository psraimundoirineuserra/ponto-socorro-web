# Specs: Video Hero Audio Fix

## Requirements

### Requirement: Manual State Tracking

- GIVEN user clicks sound toggle button
- WHEN button is clicked
- THEN component must track mute state manually with a boolean variable
- AND NOT rely on `player.isMuted()` which is unreliable

### Requirement: Forced Volume on Unmute

- GIVEN user clicks to unmute
- WHEN `unMute()` is called
- THEN `setVolume(80)` must also be called to force audio output
- AND prevent silent failure in iframe

### Requirement: Icon State Synchronization

- GIVEN user clicks mute/unmute
- WHEN state changes
- THEN icon must update to show correct audio state
- AND visual feedback must match actual audio state

## Test Scenarios

| Scenario | Expected |
|----------|----------|
| Page load | Button shows muted icon (speaker with X) |
| Click unmute | Icon changes to speaker with waves, audio plays |
| Click mute again | Icon changes back to muted, audio stops |