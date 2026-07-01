---
title: "ADR-0002: Use hexagonal architecture as the default boundary style"
id: 0002-hexagonal-architecture
description: Decision to separate domain core from external adapters.
---

# ADR-0002: Use Hexagonal Architecture as the Default Boundary Style

## Status

Proposed

## Context

Payment orchestration depends on external providers, persistence, client APIs, event publication, and operational tooling. These concerns change at different speeds and should not define the core payment model.

## Decision

Use ports and adapters as the default boundary style. Domain use cases own payment, routing, and ledger behavior. Adapters translate between the domain and external systems.

## Consequences

- Provider differences stay outside the domain core.
- Use cases can be tested independently of external systems.
- Ports need careful naming so they express domain needs instead of adapter mechanics.
- More upfront boundary design is required.

## Alternatives Considered

- Provider-first integration design: rejected because provider semantics would leak into core payment state.
- Database-first model design: rejected because persistence shape should not define domain behavior.
