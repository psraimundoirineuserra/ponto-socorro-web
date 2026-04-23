# Design: Schema Zero Errors

## Changes

| File | Change |
|------|--------|
| ReligiousOrganizationSchema.astro | Simplified @type, robust URL cleaning |

## Technical Decisions

1. @type: ["Organization", "Church"] - removes ReligiousOrganization
2. URL cleaning: .slice(0, -1) instead of .replace()
3. Simplified description