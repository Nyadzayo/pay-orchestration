---
title: Wallets Context
description: Ownership boundary for wallets, asset accounts, and balance views.
---

# Wallets Context

## Purpose

The Wallets context provides the product-facing model for holding and viewing value by owner, purpose, and asset.

## Overview

Wallets are not the ledger. They are the domain model that product workflows use to reason about stored or managed value. Balances should be derived from ledger facts, even if cached for reads later.

## Responsibilities

- Define Wallet and Asset Account concepts.
- Associate wallets with Tenants and Parties.
- Expose balance views derived from Ledger activity.
- Define wallet-level constraints for payment and payout workflows.

## Owns

- Wallet identity.
- Asset Account identity.
- Wallet purpose and ownership metadata.
- Balance view semantics.

## Does Not Own

- Ledger journal posting.
- Provider execution.
- Payout lifecycle.
- Settlement finality.
- FX pricing.

## Published Events

- `WalletCreated`
- `AssetAccountOpened`
- `BalanceViewUpdated`

## Consumed Events

- `LedgerEntryPosted`
- `PartyRegistered`
- `TenantCreated`

## Dependencies

Wallets depends on Identity for ownership and Ledger for financial facts. Payments depends on Wallets to validate funding sources.

## Future Extraction Considerations

Wallets should remain in the modular monolith until balance read load, product velocity, or ownership complexity justifies extraction. Extraction before ledger invariants are stable would create avoidable risk.

## Future Improvements

- Define balance dimensions: available, pending, reserved, settled.
- Define wallet purpose taxonomy.
- Clarify whether wallet closure is supported.

## Open Questions

- Are balances eventually consistent views or strongly consistent reads?
- Can a Wallet hold multiple Assets?
- Which reservation model is needed for payouts?

## Related Documentation

- [Wallet Systems Research](../research/wallet-systems.md)
- [Ledger Context](./ledger.md)
- [Thin Slice Scope](../thin-slice/scope.md)
