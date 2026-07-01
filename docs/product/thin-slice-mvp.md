---
title: Thin-Slice MVP
description: The smallest useful payment orchestration workflow.
---

# Thin-Slice MVP

The MVP should prove one complete payment journey instead of many partial abstractions.

## Scope

The thin slice covers:

- One tenant.
- One payment product.
- One source wallet or account.
- One destination type.
- One provider capability.
- One normalized payment lifecycle.
- One ledger journal path.

## Workflow

```mermaid
sequenceDiagram
  participant Client
  participant Payments
  participant Routing
  participant Provider
  participant Ledger

  Client->>Payments: Create payment intent
  Payments->>Routing: Resolve eligible provider capability
  Routing-->>Payments: Selected route
  Payments->>Provider: Execute payment instruction
  Provider-->>Payments: Provider reference and status
  Payments->>Ledger: Record authorization and movement
  Payments-->>Client: Normalized payment state
```

## Success Criteria

- A payment can be requested, accepted, executed, tracked, and finalized.
- Internal state is expressed in platform terms, not provider-specific terms.
- Ledger entries can explain the money movement.
- The route decision can be inspected after the fact.
- Failures produce actionable classifications.

## Explicit Deferrals

- Multiple providers.
- Advanced retry orchestration.
- Multi-rail routing optimization.
- Settlement reconciliation.
- Manual operations workflows.
