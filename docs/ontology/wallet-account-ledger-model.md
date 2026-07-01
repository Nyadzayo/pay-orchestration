---
title: Wallet, Account, and Ledger Model
description: How balance containers, endpoints, and ledger records relate.
---

# Wallet, Account, and Ledger Model

Wallets, accounts, and ledgers solve different problems and should not be collapsed into one concept.

## Wallet

A wallet is a tenant-scoped balance container. It represents value held or managed by the platform for a specific purpose, currency, and owner.

Examples:

- Tenant operating wallet.
- Customer stored-value wallet.
- Settlement suspense wallet.
- Fee collection wallet.

## Account

An account is an addressable endpoint for funding or receiving value. It may be internal or external.

Examples:

- Internal wallet account.
- Bank account destination.
- Mobile money destination.
- Provider settlement account.

## Ledger

The ledger is the authoritative record of financial facts. It records balanced journal entries that explain how value moved between accounts.

## Model

```mermaid
flowchart LR
  Tenant[Tenant] --> Wallet[Wallet]
  Wallet --> Account[Account]

  Payout[Payout Intent] --> Journal[Ledger Journal]
  Journal --> Debit[Debit Entry]
  Journal --> Credit[Credit Entry]

  Debit --> Source[Source Account]
  Credit --> Destination[Destination Account]
  Source --> Wallet
  Destination --> External[External Beneficiary]
```

## Invariants

- A wallet balance is derived from ledger entries, not manually adjusted.
- Every ledger journal balances by currency.
- Accounts identify where value is debited or credited.
- Provider references can annotate ledger entries but do not replace them.
