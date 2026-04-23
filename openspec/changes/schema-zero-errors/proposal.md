# Proposal: Schema Zero Errors Fix

## Intent

Fix remaining validation errors in ReligiousOrganizationSchema by simplifying @type and fixing URL construction.

## Scope

### In Scope
- Remove ReligiousOrganization from @type array
- Use .slice() method for robust URL cleaning
- Simplify schema structure

### Out of Scope
- Other SEO components

## Approach

Simplify to only Organization + Church types, use robust URL cleaning with .slice() instead of .replace().

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| None | Low | Simple schema simplification |

## Rollback Plan

Revert to previous schema version in git.

## Success Criteria

- [ ] Schema passes validator.schema.org with 0 errors
- [ ] No double slash in @id