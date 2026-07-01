# Repository Instructions

This repository is currently a docs-only Docusaurus site for pay-orchestration.

## Scope

- Keep content documentation-only.
- Do not add application code, provider runtime integrations, service scaffolding, deployment manifests, or infrastructure configuration unless the user explicitly asks for that phase.
- GitHub Pages deployment workflow is allowed because it publishes the documentation site.

## Documentation Structure

- `docs/index.mdx`: docs landing page.
- `docs/product-vision.md`: product vision, mission, goals, and non-goals.
- `docs/ontology/`: domain vocabulary and models.
- `docs/domain/`: bounded contexts and ownership boundaries.
- `docs/architecture/`: architecture explanations and diagrams.
- `docs/thin-slice/`: smallest implementation slice definition.
- `docs/research/`: structured research notes.
- `docs/adrs/`: architecture decision records.
- `blog/`: build-in-public and documentation updates.

## Conventions

- Add front matter with `title` and `description` to docs pages.
- Update `sidebars.ts` when adding a page to the primary reading path.
- Use Mermaid for simple diagrams.
- Add significant decisions to `docs/adrs/` and update the ADR index.
- Define new domain terms in `docs/ontology/glossary.md`.

## Verification

Run these before claiming the repository is ready:

```bash
npm run typecheck
npm run build
```
