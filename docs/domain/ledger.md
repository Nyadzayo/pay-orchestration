---
title: Ledger Context
description: Ownership boundary for financial truth, journals, and ledger entries.
---

# Ledger Context

## Purpose

The Ledger context owns financial truth. It records why balances change and provides the audit trail for value movement.

## Overview

Provider state, payment state, and wallet balance state are not substitutes for the ledger. The ledger records balanced financial facts tied to business activity.

## Responsibilities

- Define journals and ledger entries.
- Enforce balancing rules per asset.
- Provide source data for balance derivation.
- Preserve traceability between intents, transfers, settlements, and entries.

## Owns

- Ledger journal identity.
- Ledger entry identity.
- Posting rules.
- Financial invariants.

## Does Not Own

- Payment routing decisions.
- Provider submission.
- Tenant identity.
- Notification delivery.

## Published Events

- `LedgerJournalPosted`
- `LedgerEntryPosted`
- `LedgerPostingRejected`

## Consumed Events

- `PayoutIntentSubmitted`
- `PayoutIntentSucceeded`
- `SettlementRecorded`
- `TransferReversed`

## Dependencies

Ledger depends on stable references from Identity, Wallets, and Payments. Other contexts should not mutate ledger data directly.

## Future Extraction Considerations

Ledger is a strong extraction candidate only after journal semantics, idempotency, and balance derivation are stable. Premature extraction risks distributed financial inconsistency.

## Future Improvements

- Define journal templates for payout submission, success, failure, and reversal.
- Decide whether pending movements are ledgered or represented separately.
- Add reconciliation evidence relationships.

## Open Questions

- Is double-entry required from the first implementation?
- How are fees represented?
- What is the minimum viable audit trail for the thin slice?

## Related Documentation

- [Ledger Systems Research](../research/ledger-systems.md)
- [Wallets Context](./wallets.md)
- [Thin Slice Database](../thin-slice/database.md)
