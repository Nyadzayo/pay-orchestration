---
title: Ontology Glossary
description: Canonical business terms for pay-orchestration.
---

# Ontology Glossary

## Purpose

This glossary defines canonical language. New documents should use these terms unless they intentionally propose a better term.

## Overview

The glossary is a living artifact. Definitions should be short enough to use in design discussion and precise enough to prevent accidental synonyms.

| Term | Definition | Notes |
| --- | --- | --- |
| Tenant | Isolation boundary for configuration, ownership, reporting, and operations. | Not necessarily a legal entity. |
| Party | Actor participating in value movement. | Person, business, system, or counterparty. |
| Wallet | Logical balance container owned by a Party or Tenant. | Contains Asset Accounts. |
| Asset | Unit of value that can be held or moved. | Fiat, stablecoin, or future asset class. |
| Asset Account | Wallet account for a specific Asset. | Accounting focus for balances and entries. |
| Balance | Amount associated with an Asset Account. | Should be derived from ledger activity. |
| Ledger | Authoritative financial record. | Records journals and entries. |
| Payment Intent | Desired movement of value. | Broad concept; specific intent types may emerge. |
| Payout Intent | Intent to send value out to a destination. | Thin slice focuses here. |
| Transfer | Concrete movement attempt or result. | May be internal or provider-backed. |
| Settlement | Finalization or clearing of value movement. | Not always equal to provider success. |
| Provider | Execution party or adapter target. | External or fake in thin slice. |
| Provider Capability | Specific operation a Provider can perform under constraints. | Input to routing. |
| Settlement Rail | Method used to settle value. | Bank, mobile money, stablecoin network, etc. |
| Settlement Network | Named network carrying settlement. | ACH, SEPA, SWIFT, network-specific examples. |
| Execution Plan | Selected path for executing an intent. | Captures routing decision. |
| Webhook | Asynchronous provider evidence. | Evidence, not truth by itself. |
| Notification | Controlled message about a domain event. | Human or system audience. |

## Future Improvements

- Add rejected terms and why they were rejected.
- Add examples for each term from the thin slice.
- Link glossary terms to owning bounded contexts.

## Open Questions

- Should "payment" remain a generic umbrella term or be avoided in favor of specific intent types?
- How should custody-specific terms be introduced?
- Which terms must be stable before public API design?

## Related Documentation

- [Ontology Overview](./overview.md)
- [Entities](./entities.md)
- [Relationships](./relationships.md)
