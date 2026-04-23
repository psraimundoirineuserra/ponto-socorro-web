# Specs: Video Hero CSS-Driven State Fix

## Requirements

### Requirement: CSS-Driven Icon State

- GIVEN user clicks sound toggle button
- WHEN state changes to unmuted
- THEN toggle `.is-active` class on button
- AND CSS handles icon visibility with opacity/transform
- AND NOT rely on JS style.display manipulation

### Requirement: Smooth Icon Transitions

- GIVEN icon state changes
- WHEN class toggles
- THEN icon fades with 300ms transition
- AND has subtle scale animation

### Requirement: No Stale References

- GIVEN button is cloned to prevent duplicate listeners
- WHEN click handler runs
- THEN it toggles class on the correct (new) button element
- AND NOT on the old DOM element

## Test Scenarios

| Scenario | Expected |
|----------|----------|
| Click unmute | Icon fades in with scale, audio plays |
| Click mute | Icon fades out, audio stops |
| Multiple clicks | Each toggle works correctly |