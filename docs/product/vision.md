---
title: Product Vision
description: The product direction for Pay Orchestration.
---

# Product Vision

Pay Orchestration provides a consistent control plane for routing, executing, observing, and reconciling payments across tenants, countries, currencies, rails, and providers.

The platform should make payment operations predictable even when external providers differ in capability, reliability, settlement timing, and state semantics.

## Product Promise

Teams should be able to describe the payment outcome they need, and the platform should choose an eligible route, execute it through the right provider capability, track the lifecycle, expose clear state, and preserve an auditable ledger trail.

## Primary Users

- Product teams that need to launch payment experiences without integrating each provider directly.
- Operations teams that need visibility into payment failures, retries, reversals, and reconciliation.
- Finance teams that need ledger accuracy, settlement traceability, and tenant-level reporting.
- Platform engineers that need clear boundaries for adding rails and providers.

## Design Principles

- Domain language first: product, engineering, operations, and finance use the same terms.
- Capability-driven routing: providers are selected by explicit supported capabilities, not hardcoded preference.
- Ledger correctness over provider convenience: external provider states are normalized before they affect internal books.
- Tenant isolation by default: tenant policies, balances, limits, and reporting must be separable.
- Thin slices over broad scaffolding: each phase should produce a usable, observable payment path.

## Non-Goals for the Initial Knowledge Base

- Choosing a final application framework.
- Defining deployment infrastructure.
- Building provider runtime integrations.
- Committing to event transport, database, or container orchestration technology.
