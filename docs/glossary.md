---
title: Glossary
description: Shared PayRail terms and definitions.
---

# Glossary

This glossary keeps product, engineering, finance, and operations aligned on domain language. Prefer these terms in docs, ADRs, diagrams, and future API contracts.

## Account

An addressable financial endpoint used to debit or credit value. An account can represent an internal wallet account, a bank destination, a mobile money destination, or a provider settlement endpoint.

## ADR

Architecture Decision Record. A short document that captures a significant technical or product-architecture decision, the context behind it, and the consequences.

## Capability

A provider's declared ability to perform a payment action under specific conditions, such as country, currency, rail, direction, amount range, and destination type.

## Domain Event

A durable fact that something meaningful happened in the domain, such as a payout being submitted or a ledger journal being posted.

## Ledger

The authoritative financial record. Ledger journals and entries explain money movement and provide the basis for balances and reconciliation.

## Payment

A requested movement of value from a source to a destination. Payment is a broad term; use payout, pay-in, transfer, or refund when a more specific term is known.

## Payout Intent

The platform's representation of an intended outbound movement of funds. A payout intent can be validated, routed, submitted, paid, failed, cancelled, or reversed.

## Provider

An external party or platform capability that executes a payment instruction or provides payment status evidence.

## Rail

The payment network or method used to move value, such as bank transfer, card, or mobile money.

## Route

The selected execution path for a payment, including the provider capability chosen and the decision context used to choose it.

## Tenant

The primary isolation boundary for configuration, balances, policy, reporting, and operational visibility.

## Wallet

A tenant-scoped balance container. Wallet balances should be derived from ledger activity rather than manually mutated.
