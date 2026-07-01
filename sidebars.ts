import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        'index',
        'glossary',
        'contributing',
        'documentation-conventions',
      ],
    },
    {
      type: 'category',
      label: 'Product',
      collapsed: false,
      items: [
        'product/vision',
        'product/build-phases',
        'product/thin-slice-mvp',
      ],
    },
    {
      type: 'category',
      label: 'Ontology',
      collapsed: false,
      items: [
        'ontology/overview',
        'ontology/wallet-account-ledger-model',
        'ontology/payment-state-ontology',
        'ontology/tenant-model',
        'ontology/provider-capability-model',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'architecture/bounded-contexts',
        'architecture/hexagonal-architecture',
        'architecture/event-driven-architecture',
      ],
    },
    {
      type: 'category',
      label: 'ADRs',
      collapsed: false,
      items: [
        'adrs/index',
        'adrs/0001-docs-first-knowledge-base',
        'adrs/0002-hexagonal-architecture',
        'adrs/0003-event-driven-architecture',
      ],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: ['api/index'],
    },
  ],
};

export default sidebars;
