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
      label: 'Foundation',
      collapsed: false,
      items: [
        'index',
        'contributing',
        'documentation-conventions',
        'adrs/index',
      ],
    },
    {
      type: 'category',
      label: 'Product',
      collapsed: false,
      items: ['product-vision'],
    },
    {
      type: 'category',
      label: 'Ontology',
      collapsed: false,
      items: [
        'ontology/overview',
        'ontology/entities',
        'ontology/value-objects',
        'ontology/relationships',
        'ontology/payment-lifecycle',
        'ontology/state-machines',
        'ontology/glossary',
      ],
    },
    {
      type: 'category',
      label: 'Domain',
      collapsed: false,
      items: [
        'domain/identity',
        'domain/wallets',
        'domain/ledger',
        'domain/payments',
        'domain/routing',
        'domain/providers',
        'domain/settlement',
        'domain/fx',
        'domain/notifications',
        'domain/webhooks',
        'domain/reporting',
        'domain/audit',
      ],
    },
    {
      type: 'category',
      label: 'Architecture',
      collapsed: false,
      items: [
        'architecture/overview',
        'architecture/system-context',
        'architecture/modular-monolith',
        'architecture/hexagonal-architecture',
        'architecture/event-driven',
        'architecture/multi-tenancy',
        'architecture/provider-plugin-model',
        'architecture/routing-overview',
      ],
    },
    {
      type: 'category',
      label: 'Thin Slice',
      collapsed: false,
      items: [
        'thin-slice/vision',
        'thin-slice/scope',
        'thin-slice/sequence',
        'thin-slice/database',
        'thin-slice/api',
        'thin-slice/events',
        'thin-slice/success-criteria',
      ],
    },
    {
      type: 'category',
      label: 'Research',
      collapsed: false,
      items: [
        'research/iso-20022',
        'research/fibo',
        'research/ddd',
        'research/hexagonal-architecture',
        'research/event-driven-architecture',
        'research/payment-orchestration',
        'research/ledger-systems',
        'research/wallet-systems',
        'research/stablecoins',
        'research/cross-border-payments',
      ],
    },
  ],
};

export default sidebars;
