# Spec: Redirect 301 Fix

## Requirements

| Domain | Type | Requirement | Scenario |
|--------|------|-------------|----------|
| Redirect | Functional | Root URL returns 301 to /pt/ | HTTP response check |
| SEO | Non-functional | No "noindex" in GSC | GSC verification |

## Test Scenarios

1. HTTP response on / is 301
2. Location header points to /pt/
3. No HTML body in response (or minimal)