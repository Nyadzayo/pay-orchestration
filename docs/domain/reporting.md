---
title: Reporting Context
description: Ownership boundary for read models, operational views, and historical analysis.
---

# Reporting Context

## Purpose

The Reporting context provides queryable views for tenants, finance teams, operators, and maintainers.

## Overview

Reporting is downstream of domain events and ledger facts. It should not own source-of-truth payment or financial state.

## Responsibilities

- Build read models from domain events.
- Provide tenant-scoped reporting views.
- Support operational visibility into payment and settlement outcomes.
- Preserve traceability to source facts.

## Owns

- Reporting read models.
- Report definitions.
- Aggregation semantics.
- Visibility-specific projections.

## Does Not Own

- Payment lifecycle state.
- Ledger journal posting.
- Provider execution.
- Audit log immutability.

## Published Events

- `ReportProjectionUpdated`
- `ReportGenerationFailed`

## Consumed Events

- `PayoutIntentSucceeded`
- `PayoutIntentFailed`
- `LedgerEntryPosted`
- `SettlementRecorded`
- `ProviderTransferFailed`

## Dependencies

Reporting depends on Payments, Ledger, Settlement, Providers, Identity, and Audit.

## Future Extraction Considerations

Reporting is a likely future extraction candidate because query load and data retention needs often diverge from transactional workflows.

## Future Improvements

- Define first tenant reporting view.
- Separate operational reporting from financial reporting.
- Define retention and export expectations.

## Open Questions

- Which reports are required for the thin slice?
- Can reporting lag behind transactional state?
- What evidence must be available for finance reconciliation?

## Related Documentation

- [Ledger Context](./ledger.md)
- [Audit Context](./audit.md)
- [Event Driven Architecture](../architecture/event-driven.md)
