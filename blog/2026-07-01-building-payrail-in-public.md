---
slug: building-payrail-in-public
title: Building PayRail in Public
authors: [team]
tags: [docs, architecture]
---

PayRail is starting as an engineering documentation portal before it becomes an implementation project.

{/* truncate */}

That choice is intentional. Payment orchestration has a lot of hidden complexity: tenant isolation, provider capability differences, ledger correctness, payment lifecycle semantics, and operational recovery. If those ideas are unclear, code tends to preserve the confusion.

The first public milestone is therefore a docs-only foundation:

- a product vision,
- a shared ontology,
- architecture diagrams,
- ADRs,
- a glossary,
- contribution rules,
- and documentation conventions.

The next useful milestone is a thin-slice MVP specification that is precise enough to implement without guessing at the domain model.
