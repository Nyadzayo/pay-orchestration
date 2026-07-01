---
title: Stablecoins Research Notes
description: Expandable notes on stablecoins as future assets and settlement rails.
---

# Stablecoins Research Notes

## Purpose

Track stablecoin-related concepts without committing the project to stablecoin support in the first implementation.

## Overview

Stablecoins may act as assets, settlement instruments, or provider rails. They introduce issuer, network, finality, custody, compliance, and FX questions.

## Concepts to Study

- Token asset identity.
- Issuer and network distinction.
- On-chain transaction finality.
- Wallet custody models.
- Fiat on-ramp and off-ramp settlement.

## Relevance to pay-orchestration

- May influence Asset and Settlement Network modeling.
- May require provider capabilities tied to network and token issuer.
- May affect ledger and reconciliation semantics.

## Future Improvements

- Add asset identity model for issuer-backed tokens.
- Compare stablecoin settlement to bank settlement.
- Document custody assumptions.

## Open Questions

- Is USDC on one network the same Asset as USDC on another network?
- Does blockchain finality equal settlement finality?
- Should stablecoin support wait until fiat payout concepts are stable?

## Related Documentation

- [Asset](../ontology/value-objects.md#asset)
- [FX Context](../domain/fx.md)
- [Cross-Border Payments](./cross-border-payments.md)
