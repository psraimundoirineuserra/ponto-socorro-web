# Proposal: Video Hero CSS-Driven State Fix

## Intent

Fix the icon toggle bug where cloned button elements caused stale DOM references. Replace JavaScript style manipulation with CSS-driven state using class toggling for cleaner, more reliable icon transitions.

## Scope

- Update CSS to use opacity/transform transitions instead of display:none
- Update JS to use classList.toggle instead of direct style manipulation
- Remove inline style="display:none" from HTML

## Approach

1. Update CSS with .is-active class states
2. Update JS to toggle .is-active class
3. Remove inline styles from HTML

## Success Criteria

- [ ] Icon transitions smoothly with opacity/transform
- [ ] No stale DOM references after cloneNode
- [ ] Click toggles sound correctly