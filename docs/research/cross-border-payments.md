---
title: Cross-Border Payments Research Notes
description: Expandable notes on cross-border payment complexity.
---

# Cross-Border Payments Research Notes

## Purpose

Track cross-border payment concepts that may influence future routing, settlement, FX, and compliance boundaries.

## Overview

Cross-border payments combine asset conversion, regulatory boundaries, correspondent networks, local rails, settlement timing, and operational exceptions. They should not be treated as ordinary domestic payouts with more fields.

## Concepts to Study

- Correspondent banking.
- Local payout rails.
- FX quote and settlement timing.
- Beneficiary information requirements.
- Compliance screening.
- Settlement delay and recall.

## Relevance to pay-orchestration

- Shapes Provider Capability dimensions.
- May require FX and Settlement contexts to become more explicit.
- Increases importance of audit and reporting.

## Future Improvements

- Add example corridor analysis.
- Identify which concepts apply to fake provider simulation.
- Document compliance boundaries as research, not implementation.

## Open Questions

- Which corridors should influence v1 design?
- How much compliance metadata belongs in the core domain?
- Should cross-border support be deferred until domestic payout is stable?

## Related Documentation

- [Settlement Context](../domain/settlement.md)
- [FX Context](../domain/fx.md)
- [ISO 20022](./iso-20022.md)
