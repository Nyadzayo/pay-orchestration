---
title: FX Context
description: Ownership boundary for asset conversion concepts and exchange-rate decisions.
---

# FX Context

## Purpose

The FX context models conversion between assets when a movement requires different source and destination assets.

## Overview

FX is not part of the thin slice, but the architecture must leave room for it. FX introduces pricing, rate validity, slippage, settlement asset differences, and accounting complexity.

## Responsibilities

- Represent conversion requirements.
- Capture exchange-rate decisions.
- Publish conversion events when introduced.
- Support routing decisions that depend on asset conversion.

## Owns

- FX quote concept.
- Exchange-rate decision evidence.
- Conversion lifecycle when implemented.

## Does Not Own

- Wallet ownership.
- Ledger posting rules.
- Provider payout execution.
- Settlement finality.

## Published Events

- `FxQuoteCreated`
- `FxQuoteAccepted`
- `FxConversionCompleted`
- `FxConversionFailed`

## Consumed Events

- `PayoutIntentValidated`
- `ExecutionPlanRequested`
- `SettlementRecorded`

## Dependencies

FX will depend on Assets, Providers, Routing, Ledger, and possibly external market data providers.

## Future Extraction Considerations

FX should not be extracted or implemented until asset conversion is required by a real product slice. Early extraction would introduce avoidable financial and operational complexity.

## Future Improvements

- Define quote validity and expiry.
- Define conversion ledger entries.
- Document stablecoin-to-fiat conversion scenarios.

## Open Questions

- Is FX in scope for v1?
- Are rates guaranteed, indicative, or provider-determined?
- How should spread and fees be represented?

## Related Documentation

- [Stablecoins Research](../research/stablecoins.md)
- [Cross-Border Payments Research](../research/cross-border-payments.md)
- [Routing Context](./routing.md)
