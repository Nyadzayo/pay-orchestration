---
title: Documentation Conventions
description: Writing and structure rules for pay-orchestration documentation.
---

# Documentation Conventions

## Purpose

This page defines the writing and structure rules for the documentation handbook.

## Overview

The documentation portal is an engineering artifact. Pages should be precise, navigable, and useful during design review.

## Structure

- Put product direction in `docs/product-vision.md` until product scope justifies a larger section.
- Put domain language and models in `docs/ontology/`.
- Put bounded context ownership in `docs/domain/`.
- Put architecture explanations in `docs/architecture/`.
- Put first-slice scope in `docs/thin-slice/`.
- Put expandable research notes in `docs/research/`.
- Put decisions in `docs/adrs/`.
- Put implementation-era API direction in the relevant milestone section when API design begins.
- Put cross-cutting reference material at the docs root.

## Page Format

Every doc page should include:

```md
---
title: Page Title
description: One sentence describing the page.
---
```

Open with a short paragraph that explains the page's purpose. Prefer short sections with descriptive headings.

## Language

- Use pay-orchestration domain terms consistently.
- Prefer concrete nouns over vague platform language.
- Define new terms in the glossary.
- Distinguish facts, decisions, open questions, and deferred work.

## Diagrams

Use Mermaid for diagrams that clarify relationships, state, or flow. Keep diagrams readable:

- Use fewer than ten nodes when possible.
- Prefer domain labels over implementation labels.
- Avoid provider-specific details unless the page is about providers.
- Put explanatory text before or after the diagram.

## ADRs

ADRs should record decisions, not meeting notes. If a decision changes, add a new ADR and mark the previous one as superseded rather than rewriting history.

## Links

Use relative links between docs pages. When adding a page, update the sidebar if the page is part of the primary reading path.

## Future Improvements

- Add examples of strong and weak documentation changes.
- Add naming conventions for diagrams.
- Add a style guide for ADR titles.

## Open Questions

- Should every research note have an owner?
- Should large pages be split by concept or by reader journey?
- How should deprecated domain terms be recorded?

## Related Documentation

- [Contribution Guide](./contributing.md)
- [Ontology Glossary](./ontology/glossary.md)
- [ADR Index](./adrs/index.md)
