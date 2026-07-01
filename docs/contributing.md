---
title: Contribution Guide
description: How to contribute to the PayRail documentation portal.
---

# Contribution Guide

PayRail is currently docs-only. Contributions should improve shared understanding without introducing application code, infrastructure manifests, or runtime implementation choices.

## What to Contribute

- Domain concepts and glossary updates.
- Product scope clarifications.
- Architecture diagrams and explanations.
- ADRs for meaningful decisions.
- API contract sketches and examples.
- Documentation conventions that improve consistency.

## Before You Edit

1. Check whether the topic already exists.
2. Link to the nearest related page instead of duplicating content.
3. Use existing domain terms from the [Glossary](./glossary.md).
4. Add an ADR when a change records a significant decision.

## Review Checklist

- The page has clear front matter with `title` and `description`.
- The first paragraph explains why the page exists.
- Diagrams are simple enough to read in light and dark themes.
- Links are relative and build cleanly.
- New terms are added to the glossary.
- No application code, framework setup, deployment manifests, or provider runtime code is introduced.

## Adding ADRs

Create ADRs under `docs/adrs/` using a numbered filename and explicit front matter `id`. Update the [ADR index](./adrs/index.md) in the same change.

Use this structure:

- Status.
- Context.
- Decision.
- Consequences.
- Alternatives considered.

## Local Verification

Run these checks before asking for review:

```bash
npm run typecheck
npm run build
```
