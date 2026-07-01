---
title: Tenant Model
description: Tenant isolation and configuration concepts.
---

# Tenant Model

A tenant is the primary isolation boundary for product configuration, balances, policy, reporting, and operational visibility.

## Tenant-Owned Data

- Payment products and enabled flows.
- Wallets, accounts, and ledger views.
- Routing policy.
- Provider credentials or provider account mappings.
- Limits, fees, and compliance controls.
- Operational roles and audit trails.

## Tenant Configuration

Tenant configuration should be explicit and inspectable. Defaults can exist, but the active effective configuration for a payment should be reconstructable.

## Isolation Principles

- A tenant cannot see another tenant's payments, balances, accounts, or provider configuration.
- Tenant policy participates in route eligibility.
- Tenant reporting is derived from tenant-scoped ledger and payment facts.
- Shared platform capabilities must not leak tenant-specific assumptions.

## Open Questions

- Whether tenants can have child tenants or sub-accounts.
- Whether provider credentials are always tenant-owned or can be platform-pooled.
- How tenant policy inheritance should work when defaults are introduced.
