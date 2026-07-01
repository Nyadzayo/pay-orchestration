---
title: Thin Slice Vision
description: The smallest coherent implementation target for pay-orchestration.
---

# Thin Slice Vision

## Purpose

This page defines the first buildable slice. It narrows the project to the smallest useful domain flow without pretending to solve payment orchestration broadly.

## Overview

The thin slice proves that one tenant can initiate one payout intent from one wallet asset account, route it to a fake provider, receive a webhook, and record a ledger entry.

```mermaid
flowchart LR
  Tenant --> Wallet
  Wallet --> AssetAccount[Asset Account]
  AssetAccount --> PayoutIntent[Payout Intent]
  PayoutIntent --> FakeProvider[Fake Provider]
  FakeProvider --> Webhook
  Webhook --> LedgerEntry[Ledger Entry]
```

## Included Concepts

- Tenant.
- Wallet.
- Asset Account.
- Payout Intent.
- Fake Provider.
- Webhook.
- Ledger Entry.

## Excluded Concepts

- Real provider integrations.
- FX.
- Multi-provider routing.
- Settlement batching.
- Reconciliation workflows.
- Public API stability.
- Microservices.

## Future Improvements

- Convert this vision into an implementation plan after Milestone v0.1 is accepted.
- Add acceptance tests when code exists.
- Add ADRs for state and ledger decisions.

## Open Questions

- Should the fake provider always succeed, or support deterministic failure modes?
- Which ledger entry is required at submission versus completion?
- Should webhook processing be synchronous in the first slice?

## Related Documentation

- [Thin Slice Scope](./scope.md)
- [Thin Slice Sequence](./sequence.md)
- [Product Vision](../product-vision.md)
