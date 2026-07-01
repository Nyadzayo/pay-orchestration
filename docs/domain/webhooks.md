---
title: Webhooks Context
description: Ownership boundary for inbound provider evidence.
---

# Webhooks Context

## Purpose

The Webhooks context receives, records, validates, and normalizes asynchronous provider evidence.

## Overview

Webhooks are evidence, not truth. They must be correlated with provider references and translated before other contexts act on them.

## Responsibilities

- Receive provider webhook payloads.
- Record raw evidence for audit.
- Validate source and authenticity when implementation begins.
- Correlate webhooks with provider references.
- Publish normalized webhook events.

## Owns

- Webhook receipt identity.
- Raw provider evidence record.
- Correlation result.
- Webhook processing state.

## Does Not Own

- Payment lifecycle decisions.
- Ledger posting.
- Settlement finality by itself.
- Provider capability definitions.

## Published Events

- `WebhookReceived`
- `WebhookMatched`
- `WebhookUnmatched`
- `WebhookRejected`

## Consumed Events

- `ProviderTransferAccepted`
- `ProviderCapabilityEnabled`

## Dependencies

Webhooks depends on Providers for provider identity, references, and normalization rules. Payments and Settlement consume normalized evidence.

## Future Extraction Considerations

Webhook ingestion may need extraction if provider traffic, security requirements, or retry semantics become operationally independent.

## Future Improvements

- Define replay handling.
- Define webhook signature verification rules.
- Define dead-letter and manual review workflow.

## Open Questions

- Should raw webhook storage be append-only?
- How long should unmatched webhooks be retained?
- Which webhook failures require operator action?

## Related Documentation

- [Providers Context](./providers.md)
- [Audit Context](./audit.md)
- [Thin Slice Sequence](../thin-slice/sequence.md)
