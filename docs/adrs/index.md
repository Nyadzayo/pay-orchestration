---
title: ADR Index
description: Architecture decision records for Pay Orchestration.
---

# Architecture Decision Records

Architecture Decision Records capture important choices, their context, and their consequences. They are the decision log for PayRail's product architecture.

Use ADRs for choices that affect boundaries, domain language, API shape, operational guarantees, or long-lived technical direction.

## Status Values

- Proposed: under discussion.
- Accepted: agreed and active.
- Superseded: replaced by a later ADR.
- Deprecated: no longer recommended.

## Decision Log

| ADR | Status | Decision |
| --- | --- | --- |
| [ADR-0001](./0001-docs-first-knowledge-base.md) | Accepted | Use a docs-first knowledge base. |
| [ADR-0002](./0002-hexagonal-architecture.md) | Proposed | Use hexagonal architecture as the default boundary style. |
| [ADR-0003](./0003-event-driven-architecture.md) | Proposed | Define events before choosing event infrastructure. |

## When to Add an ADR

Add an ADR when a decision:

- Changes a bounded context or ownership boundary.
- Introduces or removes a core domain concept.
- Defines an API contract direction.
- Selects a durable architecture pattern.
- Changes operational guarantees, consistency expectations, or reconciliation behavior.

## Template

New ADRs should include:

- Status.
- Context.
- Decision.
- Consequences.
- Alternatives considered.

## Naming

Use a four-digit sequence number and a short slug:

```text
docs/adrs/0004-short-decision-title.md
```

Set the same explicit ID in front matter:

```md
---
title: "ADR-0004: Short decision title"
id: 0004-short-decision-title
description: One sentence summary.
---
```
