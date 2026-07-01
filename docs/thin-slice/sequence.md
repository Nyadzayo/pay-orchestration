---
title: Thin Slice Sequence
description: Conceptual sequence for the first payout flow.
---

# Thin Slice Sequence

## Purpose

This page shows the order of domain interactions for the first payout flow.

## Overview

The sequence is intentionally small. It is not a public API contract or implementation trace.

```mermaid
sequenceDiagram
  participant Tenant
  participant Wallet
  participant Payment as Payout Intent
  participant Provider as Fake Provider
  participant Webhook
  participant Ledger

  Tenant->>Wallet: Owns wallet and asset account
  Tenant->>Payment: Requests payout
  Payment->>Payment: Validate tenant, wallet, asset account
  Payment->>Provider: Submit fake payout instruction
  Provider-->>Payment: Accept fake payout
  Provider-->>Webhook: Emit completion evidence
  Webhook-->>Payment: Normalize completion event
  Payment->>Ledger: Record ledger entry
  Payment-->>Tenant: Payout complete
```

## Expected Outcomes

- The payout intent reaches a terminal success or failure state.
- The fake provider reference is traceable.
- The webhook can be matched to the payout.
- The ledger entry explains the financial effect.

## Future Improvements

- Add retry and duplicate webhook scenarios.
- Add failure sequence.
- Add audit recording once audit enters the implementation slice.

## Open Questions

- Does ledger recording happen before or after webhook completion?
- Should provider acceptance create a pending ledger entry?
- How should webhook evidence be stored in the first slice?

## Related Documentation

- [Thin Slice Events](./events.md)
- [Payment Lifecycle](../ontology/payment-lifecycle.md)
- [Webhooks Context](../domain/webhooks.md)
