---
title: Providers Context
description: Ownership boundary for providers, capabilities, webhooks, and execution evidence.
---

# Providers Context

## Purpose

The Providers context models external execution parties and isolates provider-specific behavior from the domain core.

## Overview

Providers are not the payment domain. They are execution mechanisms with capabilities, references, status evidence, and failure modes.

## Responsibilities

- Define Provider and Provider Capability records.
- Normalize provider evidence into domain events.
- Track provider references and execution attempts.
- Own provider-specific constraints and status mapping.

## Owns

- Provider identity.
- Provider Capability lifecycle.
- Provider reference correlation.
- Provider status evidence.

## Does Not Own

- Payment intent lifecycle.
- Ledger financial truth.
- Routing policy decisions.
- Tenant ownership.

## Published Events

- `ProviderCapabilityEnabled`
- `ProviderCapabilityDisabled`
- `ProviderTransferAccepted`
- `ProviderTransferFailed`
- `ProviderWebhookReceived`

## Consumed Events

- `ExecutionPlanSelected`
- `PayoutIntentSubmitted`
- `ProviderHealthProbeCompleted`

## Dependencies

Providers depends on Routing for selected plans and Webhooks for inbound evidence. Payments and Settlement depend on normalized provider events.

## Future Extraction Considerations

Providers may eventually extract into plugin modules or separate runtime components. The first design should use ports and adapters inside a modular monolith.

## Future Improvements

- Define fake provider behavior for thin slice.
- Add provider capability versioning.
- Add provider error taxonomy.

## Open Questions

- How much provider state should be persisted?
- Can provider capabilities be tenant-specific?
- How are provider credentials modeled without leaking security concerns into the domain?

## Related Documentation

- [Provider Plugin Model](../architecture/provider-plugin-model.md)
- [Routing Context](./routing.md)
- [Webhooks Context](./webhooks.md)
