---
title: Notifications Context
description: Ownership boundary for outbound domain notifications.
---

# Notifications Context

## Purpose

The Notifications context decides what domain changes should be communicated to humans or systems.

## Overview

Notifications are downstream of domain facts. They should not be the source of truth for payment, ledger, or provider state.

## Responsibilities

- Subscribe to domain events.
- Decide notification audience and importance.
- Track delivery intent and outcome when delivery exists.
- Avoid leaking provider-specific terminology into user-facing messages.

## Owns

- Notification identity.
- Notification template concept.
- Notification delivery state.
- Audience targeting rules.

## Does Not Own

- Payment state.
- Webhook ingestion.
- Provider status normalization.
- Ledger entries.

## Published Events

- `NotificationRequested`
- `NotificationDelivered`
- `NotificationFailed`

## Consumed Events

- `PayoutIntentSucceeded`
- `PayoutIntentFailed`
- `SettlementDelayed`
- `WebhookUnmatched`

## Dependencies

Notifications depends on domain events from Payments, Settlement, Providers, Webhooks, and Audit.

## Future Extraction Considerations

Notifications can be extracted later if delivery channels, volume, or operational requirements justify it. It should start as a module.

## Future Improvements

- Define notification severity.
- Define tenant notification policy.
- Separate operational notifications from product notifications.

## Open Questions

- Which notifications are required in the thin slice?
- Are notifications synchronous product commitments or asynchronous best-effort signals?
- Should tenants configure notification rules?

## Related Documentation

- [Webhooks Context](./webhooks.md)
- [Event Driven Architecture](../architecture/event-driven.md)
- [Thin Slice Events](../thin-slice/events.md)
