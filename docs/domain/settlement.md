---
title: Settlement Context
description: Ownership boundary for settlement finality, rail outcomes, and clearing evidence.
---

# Settlement Context

## Purpose

The Settlement context owns finality semantics for value movement across rails, networks, and providers.

## Overview

Payment execution and settlement are different concerns. A provider may accept an instruction before funds are final. Settlement documents when value movement is considered complete, delayed, failed, or reversed.

## Responsibilities

- Model Settlement lifecycle.
- Interpret rail and network finality signals.
- Publish settlement events for Ledger, Reporting, and Notifications.
- Preserve settlement evidence.

## Owns

- Settlement identity.
- Settlement state.
- Settlement evidence.
- Rail finality interpretation.

## Does Not Own

- Provider capability selection.
- Payment intent validation.
- Ledger journal rules.
- FX rate selection.

## Published Events

- `SettlementExpected`
- `SettlementPending`
- `SettlementRecorded`
- `SettlementDelayed`
- `SettlementFailed`

## Consumed Events

- `ProviderTransferAccepted`
- `ProviderWebhookReceived`
- `TransferCompleted`
- `TransferFailed`

## Dependencies

Settlement depends on Providers for evidence, Payments for intent context, and Ledger for financial consequences.

## Future Extraction Considerations

Settlement can become operationally complex when reconciliation, settlement files, and external networks are introduced. It should remain modular until those workflows are real.

## Future Improvements

- Define settlement finality by rail type.
- Add reconciliation relationship model.
- Add settlement batch concepts if needed.

## Open Questions

- Is provider success sufficient settlement evidence in the thin slice?
- How should delayed settlement be exposed to tenants?
- Should settlement be modeled before reconciliation?

## Related Documentation

- [Settlement Rail](../ontology/value-objects.md#settlement-rail)
- [Cross-Border Payments Research](../research/cross-border-payments.md)
- [Ledger Context](./ledger.md)
