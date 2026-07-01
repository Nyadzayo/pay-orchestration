---
title: "ADR-0002: Use hexagonal architecture as the default boundary style"
id: 0002-hexagonal-architecture
description: Decision to separate domain core from external adapters.
---

# ADR-0002: Use Hexagonal Architecture as the Default Boundary Style

## Purpose

Record the proposed boundary style for future implementation.

## Overview

Hexagonal architecture is proposed because the domain must remain independent of provider APIs, persistence choices, transport, and framework details.

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

## Future Improvements

- Accept, amend, or supersede this ADR when implementation planning starts.
- Add port naming conventions.
- Link concrete module examples once code exists.

## Open Questions

- Which ports are required in the thin slice?
- Should each bounded context expose separate ports?
- How should framework annotations be kept out of domain code?

## Related Documentation

- [Hexagonal Architecture](../architecture/hexagonal-architecture.md)
- [Architecture Overview](../architecture/overview.md)
- [Thin Slice Vision](../thin-slice/vision.md)
