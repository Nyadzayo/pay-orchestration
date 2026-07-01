---
title: Audit Context
description: Ownership boundary for immutable operational and domain evidence.
---

# Audit Context

## Purpose

The Audit context preserves evidence of important domain, operational, and integration activity.

## Overview

Payment infrastructure must explain what happened, when, why, and according to which evidence. Audit is not a replacement for the ledger; it records operational truth and decision history.

## Responsibilities

- Record significant domain events.
- Preserve routing and provider evidence.
- Track manual or operator actions when introduced.
- Support investigation and compliance review.

## Owns

- Audit record identity.
- Audit event classification.
- Evidence references.
- Actor and timestamp metadata.

## Does Not Own

- Ledger entries.
- Payment state transitions.
- Provider status normalization.
- Reporting aggregations.

## Published Events

- `AuditRecordWritten`
- `AuditRecordWriteFailed`

## Consumed Events

- `PayoutIntentCreated`
- `ExecutionPlanSelected`
- `ProviderWebhookReceived`
- `LedgerJournalPosted`
- `SettlementRecorded`
- `NotificationFailed`

## Dependencies

Audit depends on events from most contexts. Other contexts should not depend on Audit for critical command-path decisions.

## Future Extraction Considerations

Audit can remain a module until retention, search, compliance, or storage requirements demand independent scaling.

## Future Improvements

- Define immutable audit record shape conceptually.
- Decide retention and redaction policy.
- Add audit requirements for manual operations.

## Open Questions

- Which events are mandatory audit events?
- How should sensitive provider payloads be handled?
- What is the difference between audit log and event log in this project?

## Related Documentation

- [Event Driven Architecture](../architecture/event-driven.md)
- [Webhooks Context](./webhooks.md)
- [Ledger Context](./ledger.md)
