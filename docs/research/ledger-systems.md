---
title: Ledger Systems Research Notes
description: Expandable notes on ledger design and financial truth.
---

# Ledger Systems Research Notes

## Purpose

Track ledger concepts that matter for wallet balances, payouts, settlement, and auditability.

## Overview

The ledger is the financial source of truth. It should explain balance changes and preserve an audit trail for money movement.

## Concepts to Study

- Double-entry accounting.
- Journals and entries.
- Pending versus posted movements.
- Reversals and adjustments.
- Balance derivation.
- Idempotent posting.

## Relevance to pay-orchestration

- Wallet balances should derive from ledger entries.
- Payout success should have a financial explanation.
- Provider evidence should not replace ledger truth.

## Future Improvements

- Define minimum viable ledger semantics.
- Add sample payout journal.
- Decide whether pending entries are required in the thin slice.

## Open Questions

- Should the first ledger be fully double-entry?
- How are fees represented?
- How are failed and reversed payouts recorded?

## Related Documentation

- [Ledger Context](../domain/ledger.md)
- [Thin Slice Database](../thin-slice/database.md)
- [Wallet Systems](./wallet-systems.md)
