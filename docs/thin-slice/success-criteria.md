---
title: Thin Slice Success Criteria
description: How to know the first slice is complete.
---

# Thin Slice Success Criteria

## Purpose

This page defines what must be true before the thin slice is considered complete.

## Overview

The thin slice succeeds when the system can tell one coherent story about a payout from request to ledger entry using the agreed domain language.

## Success Criteria

- A Tenant can own a Wallet.
- A Wallet can contain an Asset Account.
- A Payout Intent can reference the Asset Account.
- The Fake Provider can accept the payout instruction.
- A Webhook can be received and matched to the fake provider execution.
- The Payout Intent can reach a terminal state.
- A Ledger Entry can explain the financial effect.
- The flow is traceable through identifiers and domain events.
- The documentation remains accurate after implementation.

## Non-Success Criteria

- Real money movement.
- Multiple providers.
- Production-grade API contracts.
- Full reconciliation.
- Operational dashboards.

## Future Improvements

- Convert success criteria into acceptance tests during implementation planning.
- Add failure-path criteria.
- Add observability criteria after architecture decisions are accepted.

## Open Questions

- Which failure path is mandatory for the first slice?
- Is double-entry accounting mandatory for success?
- What minimum documentation must accompany the implementation?

## Related Documentation

- [Thin Slice Vision](./vision.md)
- [Thin Slice Sequence](./sequence.md)
- [Product Vision](../product-vision.md)
