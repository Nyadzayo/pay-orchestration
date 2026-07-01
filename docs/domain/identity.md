---
title: Identity Context
description: Ownership boundary for tenants, parties, and identity-related domain concepts.
---

# Identity Context

## Purpose

The Identity context defines who participates in the system and how participants are scoped to tenants. It is the anchor for multi-tenancy, ownership, and visibility.

## Overview

Identity does not mean authentication implementation in this milestone. It means domain identity: Tenant, Party, ownership relationships, and identity facts needed by other contexts.

## Responsibilities

- Define Tenant and Party identity.
- Maintain party-to-tenant relationships.
- Provide identity references to Wallets, Payments, Reporting, and Audit.
- Preserve the distinction between internal parties and external counterparties.

## Owns

- Tenant identity.
- Party identity.
- Party roles and high-level classification.
- Ownership relationships between Tenant, Party, and future account structures.

## Does Not Own

- Wallet balances.
- Ledger entries.
- Provider credentials.
- Authentication protocol details.
- Compliance workflow details unless later assigned by ADR.

## Published Events

- `TenantCreated`
- `TenantUpdated`
- `PartyRegistered`
- `PartyLinkedToTenant`

## Consumed Events

- None required for the initial model.

## Dependencies

Identity should be depended on by most contexts, but should depend on very few. This keeps identity stable and prevents financial contexts from mutating ownership semantics.

## Future Extraction Considerations

Identity is a candidate for later extraction only if authentication, verification, compliance, or tenant administration becomes operationally independent. Until then it should remain a module inside the modular monolith.

## Future Improvements

- Define party verification levels.
- Clarify whether tenant hierarchy is supported.
- Decide where authorization policy lives.

## Open Questions

- Can one Party belong to multiple Tenants?
- Is Tenant always a customer, or can it represent an internal business unit?
- Which identity attributes are required for the thin slice?

## Related Documentation

- [Ontology Entities](../ontology/entities.md)
- [Multi-Tenancy](../architecture/multi-tenancy.md)
- [Audit Context](./audit.md)
