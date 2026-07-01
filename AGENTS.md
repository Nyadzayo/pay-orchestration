# Repository Instructions

This repository is currently a docs-only Docusaurus site for PayRail.

## Scope

- Keep content documentation-only.
- Do not add application code, provider runtime integrations, service scaffolding, deployment manifests, or infrastructure configuration unless the user explicitly asks for that phase.
- GitHub Pages deployment workflow is allowed because it publishes the documentation site.

## Documentation Structure

- `docs/index.mdx`: docs landing page.
- `docs/product/`: product vision, phases, and MVP scope.
- `docs/ontology/`: domain vocabulary and models.
- `docs/architecture/`: architecture explanations and diagrams.
- `docs/adrs/`: architecture decision records.
- `docs/api/`: API direction and contract sketches.
- `blog/`: build-in-public and documentation updates.

## Conventions

- Add front matter with `title` and `description` to docs pages.
- Update `sidebars.ts` when adding a page to the primary reading path.
- Use Mermaid for simple diagrams.
- Add significant decisions to `docs/adrs/` and update the ADR index.
- Define new domain terms in `docs/glossary.md`.

## Verification

Run these before claiming the repository is ready:

```bash
npm run typecheck
npm run build
```
