---
title: "ADR-0001: Use a docs-first knowledge base"
id: 0001-docs-first-knowledge-base
description: Decision to begin the repository as a Docusaurus documentation site.
---

# ADR-0001: Use a Docs-First Knowledge Base

## Status

Accepted

## Context

The platform needs shared language and architectural direction before implementation choices harden. Starting with documentation reduces ambiguity across product, domain modeling, architecture, and API design.

## Decision

Use Docusaurus as the initial repository structure, with documentation available at the site root and organized around product, ontology, architecture, ADRs, and API.

## Consequences

- Product and architecture choices can be reviewed before application code exists.
- Mermaid diagrams can live alongside explanatory text.
- The repository can evolve into implementation work later without losing decision history.
- The docs structure must be maintained as product scope changes.

## Alternatives Considered

- Start with application scaffolding first: rejected because it would force framework and runtime decisions too early.
- Use plain Markdown only: rejected because navigation, diagrams, and publishing ergonomics matter from the start.
