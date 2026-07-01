---
title: Documentation Conventions
description: Writing and structure rules for PayRail documentation.
---

# Documentation Conventions

The documentation portal is an engineering artifact. Pages should be precise, navigable, and useful during design review.

## Structure

- Put product direction in `docs/product/`.
- Put domain language and models in `docs/ontology/`.
- Put architecture explanations in `docs/architecture/`.
- Put decisions in `docs/adrs/`.
- Put API direction in `docs/api/`.
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

- Use PayRail domain terms consistently.
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
