---
title: Routing Context
description: Ownership boundary for provider capability selection and execution planning.
---

# Routing Context

## Purpose

The Routing context decides how an intent should be executed using available provider capabilities and tenant policy.

## Overview

Routing should produce explainable execution plans. It should not submit to providers or mutate payment state directly.

## Responsibilities

- Evaluate provider capabilities.
- Apply tenant policy and eligibility rules.
- Select or reject execution paths.
- Record decision evidence for audit and debugging.

## Owns

- Execution Plan.
- Routing decision evidence.
- Eligibility evaluation result.
- Routing policy interpretation.

## Does Not Own

- Provider connectivity.
- Provider capability source of truth if owned by Providers context.
- Payment lifecycle state.
- Ledger entries.

## Published Events

- `ExecutionPlanSelected`
- `ExecutionPlanRejected`
- `RoutingPolicyChanged`

## Consumed Events

- `PayoutIntentValidated`
- `ProviderCapabilityEnabled`
- `ProviderCapabilityDisabled`
- `ProviderHealthChanged`

## Dependencies

Routing depends on Payments for intent requirements, Providers for capability data, Identity for tenant policy, and potentially FX for asset conversion eligibility.

## Future Extraction Considerations

Routing may become independently complex as providers and rails grow. Until then it should remain a module to keep policy, capability, and payment learning close.

## Future Improvements

- Define deterministic routing explanation format.
- Add fallback routing scenarios.
- Add provider health and cost inputs.

## Open Questions

- Should routing optimize for reliability, cost, speed, or tenant preference first?
- Are routing decisions immutable after selection?
- How are manual overrides represented?

## Related Documentation

- [Routing Overview](../architecture/routing-overview.md)
- [Provider Capability Model](../ontology/entities.md#provider-capability)
- [Providers Context](./providers.md)
