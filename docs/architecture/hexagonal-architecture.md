---
title: Hexagonal Architecture
description: Ports and adapters as the default application boundary style.
---

# Hexagonal Architecture

Hexagonal architecture keeps domain behavior independent from external systems. The platform core should speak in domain terms, while adapters translate to providers, persistence, clients, and messaging.

## Shape

```mermaid
flowchart TB
  subgraph Core[Domain Core]
    Payments[Payment Use Cases]
    Routing[Routing Policy]
    Ledger[Ledger Rules]
  end

  API[Client API Adapter] --> Payments
  Payments --> ProviderPort[Provider Port]
  Payments --> LedgerPort[Ledger Port]
  Routing --> CapabilityPort[Capability Port]

  ProviderPort --> ProviderAdapter[Provider Adapter]
  LedgerPort --> PersistenceAdapter[Persistence Adapter]
  CapabilityPort --> CapabilityStore[Capability Store Adapter]
```

## Ports

- Payment intake port.
- Provider execution port.
- Provider status evidence port.
- Ledger journal port.
- Capability lookup port.
- Event publication port.

## Adapter Rules

- Adapters translate external representations into domain language.
- Domain use cases should not depend on provider response shapes.
- Persistence details should not define domain entities.
- External failures should be classified before crossing into the core.
