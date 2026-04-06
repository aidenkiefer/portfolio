/**
 * Published “Release Feed” for the Experience page.
 *
 * Source of truth for site copy: curated, public-safe rows only.
 * Do not paste raw PROGRESS tables into the UI — agents update this file
 * using `docs/workflow/release-feed.md` after reviewing workflow-core progress docs.
 */

export type ReleaseCategory =
  | 'major'
  | 'minor'
  | 'patch'
  | 'docs'
  | 'infra'
  | 'research'
  | 'in-progress';

export type ReleaseProjectKey =
  | 'n2-water'
  | 'optionalizer'
  | 'viridian-vault'
  | 'caliper'
  | 'portfolio';

export interface ReleaseFeedProject {
  key: ReleaseProjectKey;
  displayName: string;
  /** Two-letter or short label for chips */
  monogram: string;
  /** If set, “View project” links to /projects/[slug] */
  portfolioSlug?: string;
  /** Optional outbound link when there is no case study yet */
  externalUrl?: string;
}

/** Registry: add projects here before referencing them in events */
export const releaseFeedProjects: Record<ReleaseProjectKey, ReleaseFeedProject> = {
  'n2-water': {
    key: 'n2-water',
    displayName: 'N-2 Water',
    monogram: 'N2',
    portfolioSlug: 'n2-water-ecommerce-storefront',
  },
  optionalizer: {
    key: 'optionalizer',
    displayName: 'Optionalizer',
    monogram: 'Op',
    portfolioSlug: 'optionalizer',
  },
  'viridian-vault': {
    key: 'viridian-vault',
    displayName: 'Viridian Vault',
    monogram: 'VV',
    portfolioSlug: 'viridian-vault',
  },
  caliper: {
    key: 'caliper',
    displayName: 'Caliper',
    monogram: 'Ca',
    portfolioSlug: 'caliper-quant-trading',
  },
  portfolio: {
    key: 'portfolio',
    displayName: 'This site',
    monogram: 'AK',
    portfolioSlug: 'personal-portfolio-website',
  },
};

export interface ReleaseFeedEvent {
  id: string;
  projectKey: ReleaseProjectKey;
  version: string;
  category: ReleaseCategory;
  /** Short headline (scannable) */
  title: string;
  /** One–two sentences, outcome-focused */
  summary: string;
  /** ISO date YYYY-MM-DD */
  completedDate: string;
  highlights?: string[];
  tags?: string[];
  /**
   * Provenance for refresh workflow — which workflow-core file (+ section) this was derived from.
   * Example: `workflow-core/project-progress/n-2-progress.md` § Milestones
   */
  sourceNote: string;
}

/** Short bullets for the “Now” strip — hand-curated; not auto-parsed from backlog */
export const releaseFeedNow: { label: string; detail: string }[] = [
  {
    label: 'Caliper',
    detail:
      'Sprints 11–14 in main: unified pipeline, live `pm.features` layer, offline CLOB simulation + evaluation, BTC probability stack (Sprint 14 AC-9 tests still open).',
  },
  {
    label: 'Viridian Vault',
    detail:
      'Show mode (dual search + 60s sale flow) in progress on `feature/show-mode`; pipeline audit, sealed migration, and hourly sync specs queued.',
  },
  {
    label: 'N-2 Water',
    detail: 'v2.4.0 copy + content QA shipped (incl. Instagram feed); v2.5.0 analytics next.',
  },
];

/** Curated “next up” — public-safe roadmap hints */
export const releaseFeedNext: { label: string; detail: string }[] = [
  {
    label: 'N-2 Water',
    detail: 'v2.5.0 analytics — GA4, Meta Pixel, consent/CMP, data layer, Vercel env wiring.',
  },
  {
    label: 'Caliper',
    detail: 'Wire simulation/evaluation/probability APIs to DB reads; Sprint 14 AC-9 tests; regime + fleet sprints (15–17) spec’d.',
  },
  {
    label: 'Optionalizer',
    detail: 'Recurring spawn v2, Today sidebar polish, assistant async follow-ups.',
  },
];

/**
 * Newest first. Keep roughly 12–24 items; collapse micro-patches in source PROGRESS
 * into one card before adding (see workflow doc).
 */
export const releaseFeedEvents: ReleaseFeedEvent[] = [
  {
    id: 'cal-sprints-11-14',
    projectKey: 'caliper',
    version: 'v2.1.x–v2.4.x',
    category: 'major',
    title: 'Unified pipeline, feature layer, simulation engine, and BTC probability model',
    summary:
      'After Polymarket Sprint 10: refactored to a unified signal→risk→adapter path; shipped live FeatureSnapshot collection into Timescale `pm.features`; built deterministic CLOB replay with evaluation metrics and baselines; added `services/ml/probability_model/` with migration `005` and `/v1/probability/*` (partial stubs; AC-9 tests pending).',
    completedDate: '2026-04-08',
    highlights: [
      'Sprints 11–12: `UnifiedSignal`, feature builder + store, `/v1/features/*`',
      'Sprint 13: SimulationRunner, FeeEngine, evaluation regime matrix + `/v1/simulation/*` / `/v1/evaluation/*`',
      'Sprint 14: calibration, lead-lag, fee-aware backtest hook, drift monitor — 500+ tests repo-wide',
    ],
    tags: ['ML', 'trading', 'infra', 'API'],
    sourceNote:
      'workflow-core/project-progress/quant-progress.md — milestones v2.1.0–v2.4.0 (last synced 2026-04-08)',
  },
  {
    id: 'n2-2-4-0',
    projectKey: 'n2-water',
    version: 'v2.4.0',
    category: 'minor',
    title: 'Copy + content QA polish across the storefront',
    summary:
      'Closed an 11-ticket batch: legal pages, science and About narratives, FAQ, benefits grid, ingredients, team stories, Terms of Use — plus Instagram Basic Display integration with ISR caching.',
    completedDate: '2026-04-04',
    highlights: [
      'Content and UX alignment after designer phases 1–8',
      'Instagram feed live with 1-hour revalidation',
      'Next focus: v2.5.0 analytics (GA4, Meta Pixel, CMP)',
    ],
    tags: ['UI', 'content', 'integrations'],
    sourceNote:
      'workflow-core/project-progress/n-2-progress.md + portfolio-extraction/n-2/project.md (v2.4.0 notes)',
  },
  {
    id: 'vv-1-5-0',
    projectKey: 'viridian-vault',
    version: 'v1.5.0',
    category: 'minor',
    title: 'Pricing pipeline redesign around PokeWallet',
    summary:
      'Redesigned the inventory pricing pipeline with a universal provider model, refreshed planning docs, and a clearer path for sealed-product and sync work.',
    completedDate: '2026-04-01',
    highlights: [
      'Provider strategy consolidated on PokeWallet',
      'Specs and guides brought in line with the new pipeline',
      'Coffee-tier and API reference documented for the next build phase',
    ],
    tags: ['backend', 'API', 'docs'],
    sourceNote: 'workflow-core/project-progress/viridian-vault-progress.md — Milestones v1.5.0',
  },
  {
    id: 'opt-gmail-cluster',
    projectKey: 'optionalizer',
    version: 'v2.1.x',
    category: 'minor',
    title: 'Job Hunt Gmail sync — scan, match, and review',
    summary:
      'Shipped end-to-end Gmail-powered evidence and review for job applications: OAuth, scan pipeline, conservative auto-apply rules, and an Email Review tab.',
    completedDate: '2026-03-25',
    highlights: [
      'Schema + services for evidence and sync candidates',
      'API routes for scan, candidates, accept / ignore / link',
      'Review UI with confidence signals and thread context',
    ],
    tags: ['backend', 'API', 'UI', 'integrations'],
    sourceNote:
      'workflow-core/project-progress/optionalizer-progress.md — Patch cluster v2.1.0–v2.1.5 (grouped for public feed)',
  },
  {
    id: 'cal-poly-2',
    projectKey: 'caliper',
    version: 'v2.0.0',
    category: 'major',
    title: 'Polymarket BTC market-making release',
    summary:
      'Completed a full execution slice for Polymarket BTC: infrastructure, data flow, risk logic, and operations tooling aligned to the trading spec.',
    completedDate: '2026-03-25',
    highlights: ['Sprint 10 scope closed', 'Execution + risk integrated with prior dashboard work'],
    tags: ['ML', 'trading', 'infra'],
    sourceNote: 'workflow-core/project-progress/quant-progress.md — Milestones v2.0.0',
  },
  {
    id: 'opt-2-0',
    projectKey: 'optionalizer',
    version: 'v2.0.0',
    category: 'major',
    title: 'Job Hunt + Budget — life-planning surface',
    summary:
      'Finished Job Hunt phases 1–2 alongside the Budget tool, expanding Optionalizer into coordinated life-planning workflows.',
    completedDate: '2026-03-24',
    tags: ['UI', 'backend', 'product'],
    sourceNote: 'workflow-core/project-progress/optionalizer-progress.md — Milestones v2.0.0',
  },
  {
    id: 'opt-today-1-9',
    projectKey: 'optionalizer',
    version: 'v1.9.0',
    category: 'minor',
    title: 'Today Command Center (phase 2)',
    summary:
      'Delivered Today overview APIs, add-to-today flows, shutdown v2, and management UX so daily planning stays in one place.',
    completedDate: '2026-03-24',
    tags: ['UI', 'backend'],
    sourceNote: 'workflow-core/project-progress/optionalizer-progress.md — Milestone v1.9.0',
  },
  {
    id: 'n2-2-3',
    projectKey: 'n2-water',
    version: 'v2.3.0',
    category: 'docs',
    title: 'Workflow alignment and documentation pass',
    summary:
      'Aligned the storefront repo to shared workflow-core patterns, consolidated docs, and added audit coverage alongside designer integration work.',
    completedDate: '2026-03-30',
    highlights: ['Mode A-style workflow docs', 'Repo audit and progress reconciliation'],
    tags: ['workflow', 'docs'],
    sourceNote: 'workflow-core/project-progress/n-2-progress.md — Milestone v2.3.0',
  },
  {
    id: 'n2-2-2',
    projectKey: 'n2-water',
    version: 'v2.2.0',
    category: 'minor',
    title: 'Image optimization across the storefront',
    summary:
      'Migrated key surfaces to next/image with a documented refactor plan, improving LCP and asset consistency on product and marketing pages.',
    completedDate: '2026-03-05',
    tags: ['UI', 'performance'],
    sourceNote: 'workflow-core/project-progress/n-2-progress.md — Milestone v2.2.0',
  },
  {
    id: 'vv-1-4',
    projectKey: 'viridian-vault',
    version: 'v1.4.0',
    category: 'minor',
    title: 'PokeWallet refactor for singles pricing',
    summary:
      'Refactored pricing around a singles provider model to simplify provider handling and prepare for later pipeline and sealed work.',
    completedDate: '2026-03-06',
    tags: ['backend', 'API'],
    sourceNote: 'workflow-core/project-progress/viridian-vault-progress.md — Milestone v1.4.0',
  },
  {
    id: 'port-workflow-2026-04',
    projectKey: 'portfolio',
    version: 'v1.0.1–v1.0.2',
    category: 'docs',
    title: 'Workflow bootstrap + Release Feed UI on Experience',
    summary:
      'Imported bounded-ticket workflow docs from workflow-core (Mode A), added `docs/plans/PROGRESS.md`, and shipped v1.0.2: three public Release Feed layouts (broadcast, command-room, matrix) with admin preview.',
    completedDate: '2026-04-02',
    tags: ['workflow', 'docs', 'UI'],
    sourceNote:
      'workflow-core/project-progress/portfolio-progress.md — patches v1.0.1, v1.0.2; portfolio `ReleaseFeed*` components',
  },
];
