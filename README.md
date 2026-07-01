# pay-orchestration Engineering Docs

This repository contains the docs-first [Docusaurus](https://docusaurus.io/) site for pay-orchestration, a payment orchestration engineering knowledge base.

The site is designed to be the source of truth for product intent, domain ontology, bounded contexts, architecture decisions, thin-slice scope, research notes, contribution rules, and documentation conventions before application code is introduced.

## Repository Context

- Site framework: Docusaurus classic template with TypeScript config.
- Content model: docs-first, with documentation served at the site root.
- Diagrams: Mermaid is enabled through `@docusaurus/theme-mermaid`.
- Publishing: GitHub Pages via GitHub Actions.
- Scope: documentation only. Do not add application code, runtime services, provider integrations, or deployment infrastructure here yet.

## Installation

```bash
npm install
```

## Local Development

```bash
npm start
```

This command starts a local development server. Most changes are reflected live without restarting the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Serve the Production Build

```bash
npm run serve
```

## GitHub Pages

The site is configured for:

- Repository: `Nyadzayo/pay-orchestration`
- Pages URL: `https://nyadzayo.github.io/pay-orchestration/`
- Docusaurus `baseUrl`: `/pay-orchestration/`

The workflow in `.github/workflows/deploy-pages.yml` builds the site and deploys the generated `build/` directory using GitHub Pages actions.

In the GitHub repository settings, set Pages source to **GitHub Actions** if it is not already enabled.
