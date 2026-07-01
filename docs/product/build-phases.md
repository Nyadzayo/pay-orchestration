---
title: Build Phases
description: A phased path from documentation to a production-grade orchestration platform.
---

# Build Phases

The platform should be built in phases that each prove a useful product capability and reduce the next phase's uncertainty.

## Phase 0: Shared Language

Establish the product vision, ontology, bounded contexts, and ADR process. This phase creates the vocabulary for later implementation.

Deliverables:

- Product and domain documentation.
- Initial architecture diagrams.
- Starter ADRs.
- API surface sketch.

## Phase 1: Thin-Slice MVP

Prove one end-to-end payment path for one tenant, one source of funds, one destination type, and one provider capability. The slice should include lifecycle tracking and ledger entries.

Deliverables:

- Payment request intake.
- Route eligibility decision.
- Provider handoff boundary.
- Normalized payment states.
- Ledger journal model.

## Phase 2: Multi-Tenant Controls

Add tenant-level policy, limits, configuration, reporting boundaries, and operational controls.

Deliverables:

- Tenant configuration model.
- Tenant-aware account and wallet views.
- Tenant route policy.
- Operational audit trail.

## Phase 3: Provider Capability Expansion

Support multiple providers, rails, currencies, and countries through explicit capability metadata.

Deliverables:

- Provider capability registry.
- Route selection rules.
- Provider health and availability signals.
- Failure classification and retry policy.

## Phase 4: Reconciliation and Operations

Close the operational loop with settlement tracking, reconciliation workflows, exception queues, and finance reporting.

Deliverables:

- Settlement status model.
- Reconciliation evidence capture.
- Exceptions and manual review queues.
- Finance exports and reports.
