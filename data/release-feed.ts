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
  | 'portfolio'
  | 'crucible'
  | 'aiddocs';

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
  crucible: {
    key: 'crucible',
    displayName: 'Crucible',
    monogram: 'Cr',
    portfolioSlug: 'crucible-gladiator-coliseum',
  },
  aiddocs: {
    key: 'aiddocs',
    displayName: 'AidDocs',
    monogram: 'AD',
    portfolioSlug: 'aiddocs',
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
      'v2.7.0 complete (17 sprints): unified pipeline, Polymarket market-making, simulation/evaluation, probability model, regime/HRP allocation, cross-sectional fleet, wallet clustering. Wiring ranking/fleet APIs to live DB reads; Sprint 14 AC-9 tests open.',
  },
  {
    label: 'Viridian Vault',
    detail:
      'v1.6.x pipeline audit + resolution overhaul shipped (2026-04-17); v1.9.0 Resolve Items maintenance hub in progress; Show mode on `feature/show-mode`; sealed migration and hourly sync queued.',
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
    detail:
      'Wire simulation/evaluation/probability APIs to full persisted reads; land Sprint 14 AC-9 tests; extended Polymarket paper validation and out-of-sample ML metrics.',
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
    id: 'vv-1-6-x',
    projectKey: 'viridian-vault',
    version: 'v1.6.x',
    category: 'minor',
    title: 'Pipeline audit overhaul and resolution engine v2',
    summary:
      'Completed 7 pipeline audit fixes (atomic price writes, ≤3 bulk DB calls per refresh, quota tracking, thundering-herd guard, image fetch hardening, TTL centralization) and shipped PokeWallet resolution v2: restructured 4-stage fallback with set_code+number first, critical API corrections, card number normalization, and CardMarket pricing fallback.',
    completedDate: '2026-04-17',
    highlights: [
      'v1.6.0: Audit tickets A–L — atomic writes, quota guard, thundering-herd prevention, TTL centralization',
      'v1.6.1: 4-stage auto-resolve restructured (set_code+number first); post_filter_count in AttemptLog',
      'v1.6.2: Critical fix json.results (was json.data), X-API-Key header, pagination fallback, number normalization',
    ],
    tags: ['backend', 'API', 'performance'],
    sourceNote:
      'workflow-core/project-progress/viridian-vault-progress.md — Milestone v1.6.0, patches v1.6.1–v1.6.2 (completed 2026-04-17)',
  },
  {
    id: 'cal-sprints-15-17',
    projectKey: 'caliper',
    version: 'v2.5.x–v2.7.x',
    category: 'major',
    title: 'Regime allocation, cross-sectional fleet, and wallet intelligence',
    summary:
      'Shipped regime detection with HRP-style allocation APIs, a 5-factor cross-sectional ranker with cooldown selection and four paper fleet strategies, then reward-density metrics, KMeans wallet clustering (k=4), smart-money signal extraction, and composite aggregation with weight learning — 17 sprints through v2.7.0.',
    completedDate: '2026-04-12',
    highlights: [
      'Sprints 15–16: `/v1/regime/*`, `/v1/allocation/*`, ranker + fleet wiring',
      'Sprint 17: on-chain maker competition signals + wallet profiles + aggregated signals',
      'Dashboard expanded (10+ explorer routes, FeatureSnapshot inspector, responsive shell)',
    ],
    tags: ['ML', 'trading', 'infra', 'API'],
    sourceNote:
      'workflow-core/portfolio-extraction/quant/project.md — Results & Evaluation (2026-04-12); workflow-core/project-progress/quant-progress.md',
  },
  {
    id: 'crucible-s6-multiplayer',
    projectKey: 'crucible',
    version: 'v2.1.0',
    category: 'major',
    title: 'Real-time PvP — matchmaking, Redis-backed Socket.io, 60 Hz authority',
    summary:
      'Completed multiplayer sprint: FIFO matchmaking, friends and challenges, PvP over WebSocket with Redis adapter for horizontal scaling, input validation and rate limits, disconnect/reconnect — on top of shared isomorphic physics and progression systems.',
    completedDate: '2026-03-28',
    highlights: [
      '60 Hz server simulation / 20 Hz broadcast with client prediction',
      'Sprints 0–6 complete; Sprint 7 (polish, E2E, production deploy) next',
    ],
    tags: ['real-time', 'backend', 'Web3'],
    sourceNote: 'workflow-core/project-progress/crucible-progress.md — Milestone v2.1.0 (Sprint 6 — Multiplayer)',
  },
  {
    id: 'aiddocs-vault-tooling',
    projectKey: 'aiddocs',
    version: 'v1.0–v1.2',
    category: 'major',
    title: 'MDX knowledge vault, ingestion CLI, and visualization layer',
    summary:
      'Shipped Notes Vault with KaTeX + Shiki MDX, Cmd+K Fuse.js search, cross-link checker with backlinks, Zod frontmatter contracts, and diagram components (Mermaid, SVG registry). Optionalizer schema/UI scaffold in place; NextAuth + task CRUD on roadmap.',
    completedDate: '2026-02-10',
    highlights: [
      '222 MDX notes across 9 collections',
      'scaffold-note, validate-notes, batch frontmatter, cross-link-check scripts',
      'ISR for scale; ADR-documented architecture',
    ],
    tags: ['MDX', 'search', 'docs', 'tooling'],
    sourceNote:
      'workflow-core/portfolio-extraction/aiddocs/project.md; workflow-core/project-progress/aiddocs-progress.md — v1.2.0 Visualization',
  },
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
