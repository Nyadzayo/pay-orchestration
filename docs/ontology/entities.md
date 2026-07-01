---
title: Entities
description: Core domain entities and why they exist.
---

# Entities

## Purpose

This page defines the major domain entities that have identity and lifecycle in pay-orchestration.

## Overview

Entities are concepts that must be tracked over time. Their attributes may change, but their identity remains stable.

## Tenant

Definition: The isolation boundary for configuration, ownership, reporting, and operational visibility.

Why it exists: Payment infrastructure is rarely single-tenant. Tenants need separate policies, wallets, provider configurations, and audit trails.

Examples: A merchant, platform customer, business unit, or marketplace operator.

Relationships: Owns Parties, Wallets, routing policy, provider configuration, and reporting views.

Open questions: Can tenants be nested? Can a provider account be shared across tenants?

## Party

Definition: A person, business, system, or counterparty participating in value movement.

Why it exists: Payments involve actors with roles. Party separates actor identity from wallets and accounts.

Examples: Merchant, beneficiary, platform operator, settlement partner.

Relationships: Belongs to a Tenant or external ecosystem; may own Wallets or receive Transfers.

Open questions: How much verification or compliance state belongs to Party versus Identity context?

## Wallet

Definition: A logical container for balances held for a Party or Tenant.

Why it exists: Wallets organize value by owner, purpose, and asset without exposing ledger mechanics to product workflows.

Examples: Merchant settlement wallet, platform fee wallet, beneficiary stored-value wallet.

Relationships: Contains Asset Accounts; balance is derived from Ledger Entries.

Open questions: Are wallets custodial, non-custodial, or both?

## Asset Account

Definition: An account within a Wallet for a specific Asset.

Why it exists: A wallet can hold multiple assets, but accounting and settlement are asset-specific.

Examples: USD asset account, ZAR asset account, USDC asset account.

Relationships: Belongs to Wallet; has Balances; participates in Ledger Entries.

Open questions: Can an Asset Account have multiple balance dimensions such as available, pending, and reserved?

## Ledger

Definition: The authoritative record of financial movements.

Why it exists: Provider status is not enough to explain money movement. The ledger provides auditability and balance derivation.

Examples: Journal for payout debit, fee credit, settlement adjustment, reversal.

Relationships: Receives entries related to Transfers, Wallets, Asset Accounts, and Settlements.

Open questions: Should the ledger be single global ledger, tenant-partitioned ledger, or ledger-per-tenant?

## Payment Intent

Definition: A request to move value according to a desired business outcome.

Why it exists: Intent separates the requested outcome from execution mechanics and provider details.

Examples: Collect funds from a payer, move funds between internal accounts, fund a payout.

Relationships: May produce Execution Plans, Transfers, Ledger Entries, and Notifications.

Open questions: Is Payment Intent an umbrella concept or should pay-in, payout, and transfer intents remain separate?

## Payout Intent

Definition: A request to send value from an internal source to an external or internal destination.

Why it exists: Payouts have distinct validation, routing, provider, and settlement concerns.

Examples: Merchant withdrawal, marketplace seller payout, refund payout.

Relationships: Belongs to Tenant; references Party, Asset Account, Provider Capability, Execution Plan, Transfer, and Ledger Entries.

Open questions: Should destination details be modeled as Party attributes, account references, or payout-specific data?

## Transfer

Definition: A concrete movement attempt or completed movement of value.

Why it exists: Transfer captures execution reality after an intent is planned or submitted.

Examples: Internal ledger transfer, provider payout transfer, settlement transfer.

Relationships: Derived from an Intent and Execution Plan; may produce Settlement and Ledger Entries.

Open questions: Can one intent create multiple transfers due to retries, splits, or fallback routing?

## Settlement

Definition: The clearing or finalization of value movement across a rail, provider, or internal account boundary.

Why it exists: Execution success and settlement finality are not always the same thing.

Examples: Provider marks payout paid; bank network settles; stablecoin transaction reaches confirmation threshold.

Relationships: Associated with Transfer, Provider, Settlement Rail, Settlement Network, and Ledger adjustments.

Open questions: What settlement finality model is required per rail type?

## Provider

Definition: An external or internal execution party that can perform payment operations.

Why it exists: Routing and execution require explicit modeling of who can perform which capabilities.

Examples: Bank payout provider, mobile money provider, stablecoin on-ramp, fake provider.

Relationships: Owns Provider Capabilities; sends Webhooks; participates in Execution Plans.

Open questions: Can internal modules be modeled as Providers for consistency?

## Provider Capability

Definition: A specific operation a Provider can perform under defined conditions.

Why it exists: Routing should select capabilities, not provider names.

Examples: USD bank payout to US, ZAR bank payout to South Africa, USDC transfer on a network.

Relationships: References Provider, Asset, Settlement Rail, Settlement Network, limits, and required fields.

Open questions: How dynamic should capability availability be?

## Webhook

Definition: Provider-originated evidence delivered asynchronously.

Why it exists: Providers often report execution and settlement state after initial submission.

Examples: Payout paid, payout failed, settlement completed, compliance review required.

Relationships: Received by Webhooks context; may affect Payments, Providers, Ledger, Notifications, or Audit.

Open questions: What evidence is strong enough to change terminal state?

## Notification

Definition: A message emitted to humans or systems about a relevant domain event.

Why it exists: Operators, tenants, and systems need controlled visibility into important changes.

Examples: Payout failed, webhook unmatched, settlement delayed.

Relationships: Consumes domain events; references Tenant, Party, Intent, Transfer, or Settlement.

Open questions: Which notifications are product commitments versus operational conveniences?

## Future Improvements

- Add lifecycle diagrams for each entity that has meaningful state.
- Add invariants for entity creation and mutation.
- Separate canonical entities from candidate entities after implementation learning.

## Open Questions

- Which entities are aggregates in the first implementation?
- Which entities need globally unique identifiers?
- Which entity relationships must be tenant-scoped from day one?

## Related Documentation

- [Value Objects](./value-objects.md)
- [Relationships](./relationships.md)
- [Domain Contexts](../domain/identity.md)
