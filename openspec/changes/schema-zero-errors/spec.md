# Spec: Schema Zero Errors

## Requirements

| Domain | Type | Requirement |
|--------|------|-------------|
| @id | String | No double slash (https://cepseris.org/#organization) |
| @type | Array | ["Organization", "Church"] |
| All fields | Valid | Schema.org compliant |

## Test Scenarios

1. Validate at validator.schema.org - expect 0 errors
2. Check @id has no double slash