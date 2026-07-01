---
title: "ADR-0003: Define events before choosing event infrastructure"
id: 0003-event-driven-architecture
description: Decision to model domain and integration events before selecting transport.
---

# ADR-0003: Define Events Before Choosing Event Infrastructure

## Purpose

Record the decision to model event meaning before selecting event infrastructure.

## Overview

Payment orchestration depends on asynchronous evidence and cross-context reactions. Event language should be stable before infrastructure is selected.

## Status

Proposed

## Context

Payments are lifecycle-heavy. Routing, provider evidence, ledger posting, settlement, reconciliation, and operations all need durable facts. However, choosing transport infrastructure before event semantics would create accidental coupling.

## Decision

Define event names, payload intent, idempotency expectations, and ownership boundaries before selecting event transport or runtime infrastructure.

## Consequences

- Events remain domain artifacts rather than infrastructure artifacts.
- Consumers can be designed around stable facts.
- The platform avoids premature commitment to a broker or deployment model.
- A later ADR must select transport once implementation requirements are clearer.

## Alternatives Considered

- Choose event infrastructure immediately: rejected as premature.
- Avoid events until after the MVP: rejected because lifecycle and audit semantics are central to the domain.

## Future Improvements

- Define candidate event envelopes.
- Decide whether an outbox is required in the first implementation.
- Add event retention guidance.

## Open Questions

- Which thin-slice events must be durable?
- Which events are internal only?
- When does an event become an integration contract?

## Related Documentation

- [Event Driven Architecture](../architecture/event-driven.md)
- [Thin Slice Events](../thin-slice/events.md)
- [Audit Context](../domain/audit.md)
