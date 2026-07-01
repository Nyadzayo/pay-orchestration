---
title: Value Objects
description: Immutable descriptive concepts used across the domain.
---

# Value Objects

## Purpose

This page defines value objects: concepts identified by their value rather than by lifecycle identity.

## Overview

Value objects should be precise and small. They protect the domain from ambiguous primitive values such as raw strings for currency, money, network, status, or provider references.

## Asset

Definition: A unit of value that can be held, moved, or settled.

Why it exists: Money movement is asset-specific. USD, ZAR, and USDC are not interchangeable.

Examples: USD, EUR, ZAR, USDC, BTC if future scope expands.

Relationships: Used by Wallets, Asset Accounts, Balances, Provider Capabilities, Transfers, and Settlements.

Open questions: Should Asset include issuer and network for stablecoins?

## Balance

Definition: A computed or represented amount for an Asset Account.

Why it exists: Product workflows need available, pending, reserved, or settled values.

Examples: Available USD 100.00, pending ZAR 500.00, reserved USDC 25.00.

Relationships: Derived from Ledger Entries; exposed through Wallets and Asset Accounts.

Open questions: Which balance dimensions are required in the thin slice?

## Settlement Rail

Definition: The method or rail used to settle value.

Why it exists: Rail semantics affect speed, finality, failure handling, and provider eligibility.

Examples: Bank transfer, card network, mobile money, stablecoin transfer.

Relationships: Used by Provider Capabilities, Settlement Networks, Execution Plans, and Settlements.

Open questions: Should rail be generic or country-specific?

## Settlement Network

Definition: A named network or system that carries settlement over a rail.

Why it exists: The same rail class can have different networks with different behavior.

Examples: ACH, SEPA, FPS, SWIFT, a mobile money scheme, a blockchain network.

Relationships: Associated with Settlement Rail and Provider Capability.

Open questions: How should network finality and cutoff times be modeled?

## Execution Plan

Definition: The selected plan for executing an intent.

Why it exists: The system must explain why a provider capability was chosen and what execution path was attempted.

Examples: Use fake provider for tenant sandbox payout; use provider A for USD bank payout.

Relationships: References Intent, Provider Capability, Transfer, routing policy, and decision evidence.

Open questions: Does an execution plan become immutable after submission?

## Provider Reference

Definition: A provider-assigned identifier for an external operation.

Why it exists: Provider interactions must be correlated without letting provider identifiers become domain identity.

Examples: Provider payout ID, transaction reference, settlement batch ID.

Relationships: Attached to Transfers, Webhooks, Settlements, and Audit records.

Open questions: How should duplicate or reused provider references be handled?

## Future Improvements

- Define precision and rounding rules for asset amounts.
- Add canonical value object names once implementation begins.
- Document which value objects are safe to expose externally.

## Open Questions

- Which value objects require strict validation in the thin slice?
- Which value objects can remain conceptual until real providers are introduced?
- How should asset precision and rounding rules be documented before implementation?

## Related Documentation

- [Entities](./entities.md)
- [Relationships](./relationships.md)
- [Ledger Systems Research](../research/ledger-systems.md)
