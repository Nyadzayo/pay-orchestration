---
title: Payments Context
description: Ownership boundary for payment and payout intent lifecycle.
---

# Payments Context

## Purpose

The Payments context owns business intent and lifecycle state for value movement requests.

## Overview

Payments is the coordination context for intents. It should not perform provider-specific work, own ledger truth, or decide every routing detail. It owns the normalized lifecycle of an intent.

## Responsibilities

- Define Payment Intent and Payout Intent lifecycle.
- Validate intent against domain rules.
- Coordinate routing, provider execution, ledger posting, and notification.
- Publish intent lifecycle events.

## Owns

- Payment Intent identity.
- Payout Intent identity.
- Normalized intent state.
- Intent-to-transfer correlation.

## Does Not Own

- Provider capability definitions.
- Ledger entry posting rules.
- Settlement network semantics.
- Notification delivery mechanics.

## Published Events

- `PayoutIntentCreated`
- `PayoutIntentValidated`
- `PayoutIntentSubmitted`
- `PayoutIntentSucceeded`
- `PayoutIntentFailed`
- `PayoutIntentCancelled`

## Consumed Events

- `ExecutionPlanSelected`
- `ProviderTransferAccepted`
- `ProviderTransferFailed`
- `LedgerJournalPosted`
- `SettlementRecorded`

## Dependencies

Payments depends on Identity, Wallets, Routing, Providers, Ledger, Settlement, and Notifications. Dependencies should be expressed through ports in future implementation.

## Future Extraction Considerations

Payments should stay central in the modular monolith until intent lifecycle and event contracts stabilize. Extraction before that would turn domain uncertainty into distributed coupling.

## Future Improvements

- Define lifecycle invariants.
- Separate payout-specific rules from generic payment intent rules if needed.
- Add failure classification taxonomy.

## Open Questions

- Should payout be a specialized intent type or a separate aggregate?
- Which states are externally visible?
- How should idempotency be represented in the domain?

## Related Documentation

- [Payment Lifecycle](../ontology/payment-lifecycle.md)
- [State Machines](../ontology/state-machines.md)
- [Thin Slice Sequence](../thin-slice/sequence.md)
