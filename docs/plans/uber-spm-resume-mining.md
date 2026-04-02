# Uber SPM Resume Mining Document (Candidate: Aiden Kiefer)

> **Target Role:** Uber — Sales Performance Management (SPM) Application Developer (Sales Automation Engineering)
> **Date Generated:** 2026-02-19
> **Source:** Full portfolio codebase scan (source code, content, data, docs)

---

## 1. Position Fit Summary

- I have built production systems that model complex, multi-variable business logic — including a custom scoring algorithm (DataDuel) that normalizes performance across cohorts, directly analogous to quota attainment normalization across sales territories.
- I have measured and optimized sales/marketing performance metrics hands-on: ~189% ROAS improvement and ~76% traffic increase at N-2 Water; ~54% CTR improvement at Thrive Vineyard — I understand the outputs SPM systems are built to drive.
- I have built a complete multi-stage RAG pipeline in TypeScript with configurable thresholds, hybrid retrieval, reranking, versioned caching, and rate limiting — demonstrating engineering rigor (quality, velocity, security) applied to a complex system end-to-end.
- I have integrated multiple third-party APIs under production constraints: Strava OAuth 2.0 with token refresh, Shopify Storefront API, Google Maps Distance Matrix, OpenWeather, Supabase RPCs, Anthropic/OpenAI — the kind of cross-system wiring central to SPM application work.
- I have written and thought publicly about systems thinking, tradeoff analysis, and communication as core engineering practices — my blog post on codebase orientation and my Clifton Strengths reflection both demonstrate the cross-functional bridging Uber needs.
- I work actively with Claude and AI-assisted tooling as part of my daily development workflow, including prompt engineering, structured LLM output validation, and multi-provider abstraction.
- My gaps (Pigment/Anaplan/Jedox; Airflow) are platform-specific, not conceptual — my underlying competencies in business logic, data pipelines, integrations, and requirements translation are strongly demonstrated.

---

## 2. Requirements → Evidence Mapping

| Req | Label | My Evidence | Paths / References | Strength |
|-----|-------|-------------|-------------------|----------|
| A | Business requirements → planning + operational architecture | Chatbot v2 spec: translated latency/cost/quality goals into 11-ticket implementation plan with explicit ordering for dependencies. Caching design: evaluated 3 strategies with explicit ROI trade-off reasoning. Service pages: 8-section enrichment framework from conversion requirements. | `docs/plans/specs/chatbot-v2-spec.md`, `docs/plans/2026-02-13-chatbot-caching-design.md`, `docs/service-pages-enrichment.md`, `lib/chatbot/retrieve.ts` | Strong |
| B | Multi-app environments + permissions for sales planning / ICM / reporting | Session validation with DB check before message persistence; UUID regex whitelist; Supabase RLS for anon key; rate limiter keyed by session/IP; versioned environment variable config (CONTENT_VERSION, PROMPT_VERSION, VERCEL_ENV). | `app/api/chat/route.ts:20–87`, `lib/chatbot/rateLimit.ts`, `types/env.d.ts`, `docs/plans/specs/chatbot-feature-spec.md` (RLS section) | Medium (permissions light; config/env strong) |
| C | Engineering excellence: Quality, Efficiency, Velocity, Security, Growth | 11-metric evaluation harness (Context Found Rate ≥85%, Citation Precision ≥90%, Hallucination ≤5%, P95 latency ≤5s). Ticket-driven workflow with explicit scope constraints. Fail-open cache design. Typed error taxonomy. Performance logging with requestId. | `docs/chatbot-v2-eval-metrics.md`, `docs/plans/claude-workflow-opt.md`, `lib/chatbot/cache.ts`, `app/api/chat/route.ts` | Strong |
| D | Enterprise SPM platforms (Pigment / Anaplan / Jedox) | **Gap.** No direct exposure. Adjacent: business logic modeling (scoring, reranking, confidence thresholds), configuration versioning (CONTENT_VERSION → cache invalidation = formula versioning), data integrity (citation whitelist = calculation validation). | See Section 6 | Light |
| E | Communication / stakeholder bridging | Positioning doc defines 3 audience tiers with tone guidelines. Service pages enrichment: 8-section framework writing for non-technical founders first. N-2 Water/Thrive: measurable outcomes delivered to non-technical clients. Blog posts explain complex systems for general audiences. | `docs/positioning.md`, `docs/service-pages-enrichment.md`, `content/blogs/*.mdx`, `data/experience.ts` | Strong |
| F | Troubleshoot complex calculation logic | Chatbot v2 confidence logic: `(bestRerankScore >= rerankThreshold OR bestSimilarity >= simThreshold) AND (chunks.length >= min OR top score very high)`. Cache key 6-component hash with MD5-based auto-invalidation on config change. Search scoring with per-field weights. JSON repair retry on malformed LLM output. | `docs/plans/specs/chatbot-v2-spec.md` (confidence section), `lib/chatbot/cache.ts:60–80`, `lib/search.ts:15–100`, `lib/chatbot/llm.ts:186–232` | Strong |
| G | SQL / Python / TypeScript | SQL: pgvector + tsvector GIN index hybrid search; normalized chat schema with RLS; 3NF/BCNF hospital DB; Supabase RPC calls. TypeScript: 3000+ lines strict mode. Python: scikit-learn pipeline, pandas, ID3 from scratch. | `docs/plans/specs/chatbot-rag-ux-spec.md` (vector schema), `lib/chatbot/retrieve.ts:114–151`, `content/projects/relational-database-design-normalization.mdx` | Strong |
| H | AI-assisted dev tools (Cursor / Claude / Copilot) | Formal spec-driven + ticket-driven workflow documented in 260-line playbook. 8 absolute execution rules governing agent behavior. Skills system for specialized prompting. Dual-provider LLM abstraction built in production. Structured output validation + repair loop. | `docs/plans/claude-workflow-opt.md`, `CLAUDE.md`, `lib/chatbot/llm.ts`, `lib/chatbot/queryTransform.ts`, `lib/chatbot/rerank.ts` | Strong |
| I | REST API integrations | Strava OAuth 2.0 full flow + token refresh; Shopify Storefront API; Google Maps Distance Matrix; OpenWeather; Resend email; Supabase RPC (pgvector + tsvector); Anthropic + OpenAI dual-provider abstraction with fallback. | `app/api/contact/route.ts`, `lib/chatbot/llm.ts:60–142`, DataDuel project, `docs/plans/specs/chatbot-rag-ux-spec.md` | Strong |
| J | Orchestration tools (Airflow) | **Gap.** No Airflow. Adjacent: 8-stage retrieval pipeline with explicit stage sequencing and per-stage failure isolation; cache layer as orchestration optimization; request-level tracing with latency per stage; eval harness with benchmark refresh cadence. | `lib/chatbot/retrieve.ts`, `docs/chatbot-v2-eval-metrics.md`, `docs/chatbot-v2-implementation.md` | Light |

---

## 3. Best Resume Bullet Candidates

> Format: **Action + Impact + Tech**. Tagged: Strength • Evidence • Req(s) Supported • Safe / Needs Confirmation

---

### Tier 1: Strong

**1.** Engineered improvement-based performance scoring algorithm normalizing athlete metrics across fitness tiers, enabling fair cross-cohort competition for [metric needed] users
- Strength: **Strong** | Evidence: `content/projects/data-duel.mdx`, DataDuel project description | Reqs: A, F | **Safe**

**2.** Drove ~189% higher ROAS and ~76% traffic increase through search/shopping campaign optimization including keyword research, audience targeting, and A/B testing at N-2 Water
- Strength: **Strong** | Evidence: `data/experience.ts` (verbatim bullets) | Reqs: E, F | **Safe**

**3.** Drove ~54% higher CTR and increased conversions through Google Ads campaign management and SEO improvements at Thrive Vineyard Church
- Strength: **Strong** | Evidence: `data/experience.ts` (verbatim bullets) | Reqs: E | **Safe**

**4.** Built multi-stage RAG retrieval pipeline in TypeScript with configurable thresholds, hybrid semantic/keyword search, LLM-based reranking, versioned Redis caching, and automatic cache invalidation on config changes
- Strength: **Strong** | Evidence: `lib/chatbot/retrieve.ts`, `lib/chatbot/cache.ts` | Reqs: A, C, G | **Safe**

**5.** Implemented dual-provider LLM abstraction (Anthropic Claude + OpenAI GPT) with structured output validation, JSON repair fallback, and citation whitelist filtering — preventing hallucinated content in production
- Strength: **Strong** | Evidence: `lib/chatbot/llm.ts:24–232` | Reqs: C, H, I | **Safe**

**6.** Designed versioned Redis cache key system incorporating environment, content version, retrieval config hash, and model hash — ensuring automatic invalidation on any configuration change without manual intervention
- Strength: **Strong** | Evidence: `lib/chatbot/cache.ts:60–80` | Reqs: C, F | **Safe**

**7.** Built complete OAuth 2.0 flow with Strava API including automatic token refresh, secure session management, and backward-compatible PostgreSQL migration for [X] users
- Strength: **Strong** | Evidence: `content/projects/data-duel.mdx` | Reqs: I, B | **Needs confirmation** (user count)

**8.** Implemented multi-constraint route optimization system using 2-opt TSP and 0/1 Knapsack algorithms with real-time Google Maps traffic data, covering 600+ Divvy stations in Chicago
- Strength: **Strong** | Evidence: `content/projects/divvy-van.mdx` | Reqs: A, F | **Safe**

**9.** Designed and normalized relational hospital database schema to 3NF/BCNF eliminating data anomalies, with expressive SQL queries reflecting business rules and constraint logic
- Strength: **Strong** | Evidence: `content/projects/relational-database-design-normalization.mdx` | Reqs: G | **Safe**

**10.** Built end-to-end ML forecasting pipeline (scikit-learn, pandas) with temporal validation strategy — training on 1961–2005, validating on 2005–2024, projecting through 2050 with uncertainty quantification
- Strength: **Strong** | Evidence: `content/projects/tracking-shifts-climate-change-bird-migration.mdx` | Reqs: G, F | **Safe**

---

### Tier 2: Medium

**11.** Implemented sliding-window rate limiter with automatic cleanup of expired entries, keyed by session ID or IP address, handling [X] requests/hour in production
- Strength: **Medium** | Evidence: `lib/chatbot/rateLimit.ts` | Reqs: B, C | **Safe** (scale needs confirmation)

**12.** Built multi-field search relevance scoring engine with weighted field prioritization (title=50, company=40, excerpt=35) and deduplication — delivering ranked results across [project/experience/blog] content types
- Strength: **Medium** | Evidence: `lib/search.ts:15–100` | Reqs: F, G | **Safe**

**13.** Built serverless JAMstack architecture (Cloudflare Workers + Pages + R2) with client-side CMS, RESTful API with localStorage fallback, and cross-tab real-time synchronization for a live e-commerce client
- Strength: **Medium** | Evidence: `content/projects/tender-heart-vintage.mdx` | Reqs: A, I, C | **Safe**

**14.** Implemented LLM-based reranking pipeline scoring retrieval candidates on 0–100 relevance scale, reducing 30 candidates to 8 final chunks with threshold-gated high-confidence routing
- Strength: **Medium** | Evidence: `lib/chatbot/rerank.ts`, `lib/chatbot/retrieve.ts:196–200` | Reqs: F, H | **Safe**

**15.** Implemented typed discriminated union error taxonomy (CONFIG_ERROR / RETRIEVAL_ERROR / LLM_ERROR / RATE_LIMITED / UNKNOWN_ERROR) with appropriate HTTP status codes and structured error responses
- Strength: **Medium** | Evidence: `lib/chatbot/types.ts`, `app/api/chat/route.ts:244–246` | Reqs: C, G | **Safe**

**16.** Designed multi-query retrieval strategy (LLM-based query expansion → 3–5 alternate phrasings → semantic + keyword hybrid search → deduplication) improving recall for ambiguous user queries
- Strength: **Medium** | Evidence: `lib/chatbot/queryTransform.ts`, `lib/chatbot/retrieve.ts:71–227` | Reqs: A, F, H | **Safe**

**17.** Built gamification engine with automatic badge detection, weekly challenge tracking, and custom leagues with separate leaderboards — demonstrating incentive compensation logic applied to behavioral data
- Strength: **Medium** | Evidence: `content/projects/data-duel.mdx` | Reqs: B, F | **Safe**

**18.** Collaborated directly with non-technical clients at N-2 Water and Thrive Vineyard Church to translate business objectives into technical deliverables, measuring success through ROAS, CTR, and organic traffic KPIs
- Strength: **Medium** | Evidence: `data/experience.ts` | Reqs: E, A | **Safe**

**19.** Implemented WCAG 2.1 AA accessibility compliance including semantic HTML5, ARIA labels, keyboard navigation, and high contrast ratios on a production client site (tenderheartvintage.com)
- Strength: **Medium** | Evidence: `content/projects/tender-heart-vintage.mdx` | Reqs: C | **Safe**

**20.** Built content chunking algorithm for RAG with token-based boundary detection (~400–800 tokens), sentence-aware splitting, 15% overlap, and section header preservation
- Strength: **Medium** | Evidence: `lib/chatbot/chunk.ts` | Reqs: A, G | **Safe**

---

### Tier 3: Light

**21.** Implemented ID3 decision tree learning from scratch in Python using entropy and information gain without ML libraries — demonstrating deep understanding of scoring and classification logic applicable to SPM rule engines
- Strength: **Light** | Evidence: `content/projects/id3-decision-tree.mdx` | Reqs: F, G | **Safe**

**22.** Optimized database query performance and server configurations at Tribl Records, reducing load times for media asset delivery
- Strength: **Light** | Evidence: `data/experience.ts` | Reqs: G | **Needs confirmation** (metric)

**23.** Designed typed environment variable schema (TypeScript namespace) for multi-environment configuration supporting Supabase, LLM providers, Redis, and email services
- Strength: **Light** | Evidence: `types/env.d.ts` | Reqs: B, C | **Safe**

**24.** Authored formal specification-driven development playbook (260+ lines) governing AI agent behavior: bounded tickets, explicit Allowed Files, hard limits, human-verifiable done criteria — achieving predictable 5–10 min execution per ticket with zero scope creep
- Strength: **Medium** | Evidence: `docs/plans/claude-workflow-opt.md`, `CLAUDE.md` | Reqs: C, H | **Safe**

**25.** Designed comprehensive chatbot evaluation harness with 11 metrics across 4 dimensions (retrieval, generation, low-confidence quality, reliability) — targets: Context Found Rate ≥85%, Citation Precision ≥90%, Hallucination ≤5%, Total P95 ≤5s
- Strength: **Medium** | Evidence: `docs/chatbot-v2-eval-metrics.md` | Reqs: C, F | **Safe**

---

## 4. Project Inventory

> Only projects with clear SPM relevance included.

### DataDuel — Improvement-Based Fitness Competition Platform
**Description:** Fair multi-user fitness competition platform that scores athletes on personal improvement rather than raw performance, normalizing across different fitness levels.
**My Contributions:** Designed the scoring algorithm, built full OAuth 2.0 + Strava API integration with token refresh, migrated data layer from JSON to PostgreSQL, implemented gamification (badges, challenges), built custom leagues with separate leaderboards.
**Tech Stack:** Python, Flask, PostgreSQL, Supabase, JavaScript, Strava API, Cloudflare Pages, Render.com
**SPM Relevance:** Scoring algorithm that normalizes across cohorts = quota attainment normalization; gamification = incentive compensation modeling; custom leagues = territory/org segmentation; 20+ API endpoints = SPM backend API design; PostgreSQL schema = data modeling for performance tracking.
**Artifacts:** `content/projects/data-duel.mdx`

---

### Portfolio Chatbot — Production RAG System
**Description:** AI chatbot for the portfolio site built with full RAG pipeline: embeddings, multi-query retrieval, hybrid search, LLM-based reranking, versioned Redis caching, session management, and rate limiting.
**My Contributions:** Entire system design and implementation — retrieval pipeline, dual LLM provider abstraction, structured output validation, caching strategy, API route with multi-layer validation, client-side React component with error handling.
**Tech Stack:** TypeScript, Next.js, Supabase (pgvector), Upstash Redis, Anthropic Claude, OpenAI, React
**SPM Relevance:** Complex multi-stage pipeline with configurable thresholds = SPM calculation logic; cache versioning with auto-invalidation = configuration management; typed error taxonomy + graceful degradation = production operational rigor; session management + DB verification = multi-app environment patterns.
**Artifacts:** `lib/chatbot/retrieve.ts`, `lib/chatbot/cache.ts`, `lib/chatbot/llm.ts`, `lib/chatbot/rerank.ts`, `lib/chatbot/queryTransform.ts`, `app/api/chat/route.ts`

---

### Divvy Van — TSP Route Optimizer with Real-Time Data
**Description:** Route optimization system for bike-share maintenance vans solving multi-constraint planning (traffic, weather, van capacity) using combinatorial optimization algorithms.
**My Contributions:** 2-opt TSP solver, 0/1 Knapsack capacity optimizer, greedy multi-driver load balancer, real-time API integrations with caching strategy (5-min traffic / 30-min weather), analytics dashboard, offline fallback.
**Tech Stack:** React, JavaScript, Google Maps Distance Matrix API, OpenWeather API, Vite, Tailwind CSS
**SPM Relevance:** Multi-constraint optimization across a distributed system = territory/quota balancing; analytics dashboard with route metrics = SPM performance dashboards; API caching for cost management = operational efficiency; offline fallback = production resilience.
**Artifacts:** `content/projects/divvy-van.mdx`

---

### N-2 Water E-Commerce
**Description:** Production e-commerce platform with Shopify Storefront API integration, marketing campaign management, and SEO optimization for a live B2C brand.
**My Contributions:** Built Next.js + React storefront, Shopify API integration, campaign optimization (A/B testing, keyword research), measured ROAS and traffic outcomes.
**Tech Stack:** Next.js, React, TypeScript, Shopify Storefront API, Tailwind CSS, Vercel
**SPM Relevance:** Direct sales/marketing performance measurement (189% ROAS, 76% traffic); stakeholder-facing work with non-technical client; Shopify API integration = third-party sales platform integration pattern.
**Artifacts:** `data/experience.ts`, `content/projects/n2-water-ecommerce-storefront.mdx`

---

### Tender Heart Vintage — Serverless CMS + E-Commerce
**Description:** Full-stack serverless website with client-side CMS, RESTful API with fallback, real-time cross-tab sync, email integration, and WCAG 2.1 AA compliance for a live retail client.
**My Contributions:** Entire architecture and implementation — Cloudflare Workers API, R2 storage sync, localStorage fallback, email via Resend, accessibility audit.
**Tech Stack:** JavaScript, HTML5/CSS3, Cloudflare Workers, Cloudflare Pages, Cloudflare R2, Resend API
**SPM Relevance:** REST API design with fallback patterns = SPM integration resilience; CMS for non-technical admin = sales admin tooling; multi-storage strategy = data persistence under failure conditions.
**Artifacts:** `content/projects/tender-heart-vintage.mdx`

---

### Relational Database Design & Normalization
**Description:** End-to-end relational schema design project: ER modeling from business requirements, normalization to 3NF/BCNF, SQL implementation with constraints, expressive query writing.
**My Contributions:** Full design from requirements to implementation — entity modeling, normalization decisions, SQL DDL and queries.
**Tech Stack:** MySQL, SQL, ER diagramming
**SPM Relevance:** Requirements → data model translation = SPM data architecture; normalization tradeoff analysis = schema design for reporting/ICM data; constraint design (PKs, FKs, check constraints) = data integrity for calculations.
**Artifacts:** `content/projects/relational-database-design-normalization.mdx`

---

### Tracking Shifts — ML Forecasting Pipeline
**Description:** End-to-end ML pipeline analyzing climate trends and forecasting bird migration through 2050, with proper temporal validation strategy and uncertainty quantification.
**My Contributions:** Full pipeline — data preprocessing, feature engineering, model training/validation (1961–2005 train / 2005–2024 validate), projections through 2050, uncertainty communication.
**Tech Stack:** Python, scikit-learn, pandas, NumPy, Matplotlib, Jupyter Notebook
**SPM Relevance:** Time-series forecasting = sales quota/attainment forecasting; temporal validation (no data leakage) = production model reliability; uncertainty quantification = honest stakeholder communication on projections.
**Artifacts:** `content/projects/tracking-shifts-climate-change-bird-migration.mdx`

---

## 5. SPM-Adjacent Skills Evidence

### Business Modeling / Calculation Logic
- Multi-field weighted relevance scoring in `lib/search.ts:15–100` (score += weight per field type)
- Multi-threshold confidence routing in `lib/chatbot/retrieve.ts:264–290` (rerankThreshold, minChunksSelected, veryHighScore)
- Page-context-conditional response routing in `lib/chatbot/retrieve.ts:299–353` (pathname → option set)
- Improvement-based normalization algorithm in DataDuel (cross-cohort scoring)
- ID3 entropy / information gain from scratch in Python (`content/projects/id3-decision-tree.mdx`)

### SQL / Data Modeling
- CS 480 Database Systems coursework (normalization, query optimization, transactions) — `data/coursework.ts`
- Hospital database project: full ER → 3NF/BCNF → SQL DDL (`content/projects/relational-database-design-normalization.mdx`)
- DataDuel PostgreSQL schema design + JSON→Postgres migration with backward compatibility
- Supabase RPC calls for vector similarity search (`lib/chatbot/retrieve.ts:114–151`): `match_documents`, `match_documents_keyword`
- Supabase CRUD: INSERT sessions/messages, SELECT with ordering/limit, foreign key constraints (`app/api/chat/route.ts:125–169`)
- Tribl Records: DB query optimization and server tuning (`data/experience.ts`)

### Python Pipelines / Automation
- Tracking Shifts: full scikit-learn + pandas pipeline, temporal validation, feature engineering (`content/projects/tracking-shifts-climate-change-bird-migration.mdx`)
- ID3 from scratch: NumPy, entropy calculation, recursive tree construction
- Data Wrangling Toolkit: reusable cleaning + EDA utilities (`content/projects/data-wrangling-analysis-toolkit.mdx`)
- Flask backend for DataDuel: 20+ endpoints, PostgreSQL integration, business logic layer

### TypeScript Systems Work
- Strict TypeScript 5.9 across entire portfolio codebase (no `any` unless justified)
- Discriminated union error types: `ErrorType = 'CONFIG_ERROR' | 'RETRIEVAL_ERROR' | ...` (`lib/chatbot/types.ts`)
- Polymorphic content types with discriminated `SearchResult` union (`types/content.ts`)
- Database type contracts via `Database` interface (Tables → Row/Insert/Update/Relationships) (`lib/supabase/server.ts`)
- Interface extension: `RankedChunk extends RetrievedChunk` (`lib/chatbot/rerank.ts:5–7`)
- Const-asserted configuration objects: `RETRIEVAL_CONFIG as const` (`lib/chatbot/retrieve.ts:21–36`)

### REST API Integrations
- Strava OAuth 2.0 full flow + automatic token refresh (DataDuel)
- Shopify Storefront API (N-2 Water e-commerce)
- Google Maps Distance Matrix + OpenWeather with tiered caching (Divvy Van)
- Anthropic + OpenAI dual-provider abstraction with identical interface (`lib/chatbot/llm.ts:60–142`)
- Resend email API with dynamic templating and label mapping (`app/api/contact/route.ts:52–67`)
- Supabase RPC for stored procedures / vector operations (`lib/chatbot/retrieve.ts:114–151`)

### Testing / Validation Strategy
- Multi-layer API input validation: JSON parse → type check → length bounds → UUID regex → pathname whitelist (`app/api/chat/route.ts:37–87`)
- Runtime type validation for LLM-generated JSON: structure check → whitelist filter → repair retry → raw fallback (`lib/chatbot/llm.ts:24–50, 186–232`)
- Cache read validation: shape check before returning, null on malformed data (`lib/chatbot/cache.ts:80–102`)
- Embedding dimension validation post-response (`lib/chatbot/embed.ts:60–63`)
- Temporal validation in ML pipeline (no data leakage between train/validate periods)
- CS 440 Software Engineering (testing, project management, lifecycle)

### Deployment / Operational Support
- Vercel deployment for Next.js portfolio (serverless functions + static generation)
- Cloudflare Workers + Pages + R2 for Tender Heart (zero-downtime serverless)
- Render.com backend deployment for DataDuel
- Performance instrumentation with requestId-tagged logs and latency tracking at each pipeline stage (`app/api/chat/route.ts:32, 172–258`)
- Graceful degradation: keyword search fallback if RPC unavailable (`lib/chatbot/retrieve.ts:150`), raw text if JSON repair fails (`lib/chatbot/llm.ts:227–231`), null return on cache failure (`lib/chatbot/cache.ts:100`)

### Security / Permissions / Role-Based Access
- UUID v4 regex whitelist before session operations (`app/api/chat/route.ts:20–23`)
- Pathname validation: must start with `/`, no `://`, max 200 chars (`app/api/chat/route.ts:81–87`)
- Citation whitelist filtering: LLM can only cite URLs from retrieval allowlist (`lib/chatbot/llm.ts:34–42`)
- Sliding-window rate limiting keyed by session ID or IP (`lib/chatbot/rateLimit.ts`)
- Session DB verification before message persistence (`app/api/chat/route.ts:111–142`)
- Supabase JWT authentication integration

### AI-Assisted Development Workflows
- Formal 260-line workflow playbook (`docs/plans/claude-workflow-opt.md`) defining 8 strict execution rules for AI agent behavior: bounded tasks, explicit Allowed Files, hard limits, no shell commands, no verification in tickets
- `CLAUDE.md` execution rules (checked into repo): role definition (implementation only), absolute prohibitions, scope control, output expectations
- Specification-driven workflow: specs define "how" (read-only context); tickets define "what" (executable, bounded). Separation enables spec reuse across multiple tickets.
- Ticket template: Task (1–3 items), Reference Docs, Allowed Files, Hard Limits, Instructions, Done Criteria (human-verifiable only)
- Skills system: domain-specific capabilities (error-handling-patterns, rag-engineer, prompt-engineering-patterns) loaded only when explicitly mandated
- 11 structured chatbot v2 tickets in `docs/plans/tickets/chatbot-v2/` (logging → page context → query transform → rerank → hybrid → neighbor expansion → clarifier → prompt → structured output → typed errors → eval harness)
- Multi-provider LLM abstraction: built provider-agnostic interface over Anthropic Claude and OpenAI GPT
- Structured output validation + repair loop: when LLM returns malformed JSON, retry with explicit correction prompt (`lib/chatbot/llm.ts:186–232`)
- Query transformation via LLM: user query → 3–5 search phrasings for improved recall (`lib/chatbot/queryTransform.ts`)
- Reranking via LLM: 0–100 scoring rubric in prompt, JSON response parsed and sorted (`lib/chatbot/rerank.ts`)

---

## 6. Gaps + How to Frame Them Honestly

### Gap D: Pigment / Anaplan / Jedox (Enterprise SPM Platforms)

**What's missing:** Zero hands-on configuration or development in these platforms specifically.

**Honest framing:**
> "I haven't used Pigment, Anaplan, or Jedox directly. However, the underlying competencies these platforms require — translating business logic into calculation models, configuring multi-user environments with permissions, debugging formula errors, integrating with external data sources — are precisely what I've been doing in TypeScript, SQL, and Python. I pick up new platforms quickly when I understand the underlying model, and I understand the underlying model."

**Adjacent strengths that cover the competency:**
- Scored calculation models: DataDuel scoring algorithm, RAG confidence thresholds, search relevance weights
- Multi-user permission modeling: Supabase sessions + RLS, rate limiting per user, session verification
- Formula debugging: multi-stage pipeline debugging with instrumented latency logs, JSON repair when calculations return malformed output
- Configuration management: versioned cache keys, const-asserted RETRIEVAL_CONFIG, environment-driven provider selection

**2-week self-study plan:**
- **Days 1–3:** Pigment free trial — build a basic quota model and quota attainment report. Read Pigment docs on data model, metrics, and permission tiers.
- **Days 4–6:** Watch Anaplan Level 1 Model Builder content (free on Anaplan Community). Build a sandbox territory planning model.
- **Days 7–9:** Jedox trial — replicate the Anaplan model. Note differences in formula syntax and data integration patterns.
- **Days 10–12:** Read Uber job description keywords closely. Find YouTube walkthroughs of ICM (incentive compensation management) modeling in any of these platforms.
- **Days 13–14:** Write a one-page comparison of how I'd model a simple sales commission calculation in each platform versus how I'd do it in TypeScript/SQL. Use this as interview talking points.

---

### Gap J: Airflow (Orchestration)

**What's missing:** No Airflow DAGs or task scheduling configuration.

**Honest framing:**
> "I haven't used Airflow specifically. I'm very familiar with the problem it solves — sequencing dependent steps, handling retries, making pipelines observable and restartable. My RAG retrieval pipeline in TypeScript is an 8-stage sequential pipeline with fallback at each stage, which is the same mental model. I can learn Airflow's DAG syntax and operators quickly given this foundation."

**Adjacent strengths:**
- 8-stage RAG pipeline with explicit step sequencing and fallback at each stage (`lib/chatbot/retrieve.ts`)
- API caching as a scheduling/efficiency concern (TTL management, jitter for expiry storms)
- Multi-query parallel retrieval logic (multiple queries dispatched, results merged)
- ML pipeline sequencing: preprocessing → training → validation → forecasting (Tracking Shifts)

**2-week self-study plan:**
- **Days 1–4:** Airflow quickstart (Docker Compose). Build a simple DAG that runs a Python script on a schedule. Understand TaskFlow API.
- **Days 5–8:** Build a DAG that mimics a mini ETL: extract from an API, transform in Python, load to a database. Use sensors and XComs.
- **Days 9–12:** Read Uber eng blog posts on data infrastructure to understand how Airflow (or similar) is used internally. Look at the Airflow operator docs for HTTP/API operators.
- **Days 13–14:** Build a DAG that triggers data refreshes in a Supabase table from an external API call — connecting to my existing skills.

---

## 7. Top 10 Interview Stories (STAR Format Outlines)

> All grounded in portfolio evidence.

**Story 1: Designing a Fair Scoring Algorithm**
- **S/T:** DataDuel needed a scoring system where a beginner improving 20% beat an elite athlete who improved 5%. Raw time/speed comparisons demotivate most users.
- **A:** Designed improvement-based normalization algorithm: baseline established per user, score = improvement delta normalized against personal history.
- **R:** [metric needed: user count, engagement rate, retention change after scoring update]
- **Relevance:** SPM quota attainment often has same problem — normalizing across different territory sizes, market maturities.

**Story 2: Production ROAS Optimization**
- **S/T:** N-2 Water was spending on Google Ads with unclear ROI. I was tasked with improving campaign performance.
- **A:** Conducted keyword research, restructured ad groups, ran A/B tests on copy, tightened audience targeting, monitored conversion attribution.
- **R:** ~189% ROAS improvement, ~76% traffic increase.
- **Relevance:** SPM teams care about the business outcomes their systems drive. I've driven them directly.

**Story 3: Migrating DataDuel from JSON Storage to PostgreSQL**
- **S/T:** DataDuel was persisting data in JSON files, making queries slow and adding new features complex. Migration required backward compatibility.
- **A:** Designed PostgreSQL schema in Supabase (users, activities, sessions, badges, leagues), wrote migration scripts, ran both storage layers in parallel during cutover, validated parity before deprecating JSON layer.
- **R:** [metric needed: query latency improvement, features unblocked]
- **Relevance:** SPM migrations between data stores / platforms require the same backward-compatibility rigor.

**Story 4: Debugging the RAG Confidence Routing Logic**
- **S/T:** RAG chatbot was returning low-confidence clarifying questions even on clearly answerable queries. Rerank scores were high, but routing logic was still gating responses.
- **A:** Instrumented with requestId-tagged logs at each pipeline stage. Discovered `minChunksSelected` threshold was too high — 3 chunks required, but short queries only retrieved 2 high-quality matches. Added `veryHighScore` override: if any single chunk scores ≥ 90, bypass chunk count gate.
- **R:** High-confidence response rate improved without false positives. [metric needed: before/after rate]
- **Relevance:** SPM calculation debugging — finding which threshold or rule in a multi-variable formula is causing unexpected output.

**Story 5: Building for Non-Technical Stakeholders**
- **S/T:** Tender Heart Vintage client needed to manage their own inventory listings without developer involvement.
- **A:** Built client-side CMS with admin interface: form-based editing, localStorage persistence, R2 cloud sync, fallback to local when API fails. Designed for someone who doesn't know what an API is.
- **R:** Client can self-manage inventory. [metric needed: time-to-publish reduction]
- **Relevance:** SPM admin tools need to be usable by sales ops users who aren't engineers.

**Story 6: Implementing Caching That Automatically Invalidates**
- **S/T:** RAG retrieval pipeline made expensive LLM calls. Simple query caching would go stale when embedding model or prompts changed, but manual cache clearing would be forgotten.
- **A:** Designed cache key that hashes retrieval config + model name + prompt version + environment. Any config change → new cache key → automatic miss → fresh result. Added TTL jitter (±10%) to prevent thundering herd.
- **R:** Cache hit rate [metric needed]. Zero stale-cache incidents after config updates.
- **Relevance:** SPM configuration changes (new quota formulas, new plan periods) need to invalidate derived data without manual intervention.

**Story 7: Multi-Provider API Abstraction**
- **S/T:** Chatbot needed to work in environments with either Anthropic or OpenAI API keys depending on deployment context.
- **A:** Built provider abstraction layer: detect available key → route to Anthropic or OpenAI implementation → identical return types from both. Same pattern for embeddings, reranking, query transformation.
- **R:** Single codebase deploys to both API environments without code changes.
- **Relevance:** SPM systems often need to work across different vendor configurations (Salesforce vs HubSpot, Pigment vs Anaplan). Abstraction layer is the pattern.

**Story 8: Tackling an Unfamiliar Codebase (Tribl Records)**
- **S/T:** Joined Tribl Records as a SWE intern with an existing codebase. Needed to get productive quickly without breaking anything.
- **A:** Applied systematic codebase orientation: entry points first, data flow second, existing tests third. Identified DB query bottlenecks through server configuration analysis.
- **R:** Optimized DB queries and server configs, reducing load times. [metric needed]
- **Relevance:** SPM onboarding at Uber involves inheriting existing Pigment/Anaplan configurations. Same orientation skills apply.

**Story 9: Writing Engineering Documentation (Blog Posts)**
- **S/T:** Wanted to demonstrate engineering thinking and communication skills publicly.
- **A:** Wrote 6+ technical blog posts with clear frameworks: codebase orientation (6-step method), clarity over cleverness (with specific code examples), ML project lessons (honest reflection on what went wrong).
- **R:** Portfolio demonstrates both technical depth and written communication ability.
- **Relevance:** SPM application developers write specs, design docs, and handoff documentation for sales ops teams.

**Story 10: Governing an AI Agent Like an Engineering System**
- **S/T:** Claude Code has a tendency to explore files beyond scope, run verification loops, and expand task boundaries — causing unpredictable runtime and output.
- **A:** Wrote a 260-line workflow playbook (`docs/plans/claude-workflow-opt.md`) formalizing 8 strict execution rules. Created a ticket template with Allowed Files, Hard Limits, and human-verifiable Done Criteria. Defined separate specs (context) vs. tickets (tasks) to prevent scope creep.
- **R:** Predictable 5–10 min execution per ticket. Zero unintended file modifications. Reusable specs across multiple ticket runs.
- **Relevance:** SPM configuration and automation work requires the same kind of bounded, auditable execution — especially when multiple developers maintain shared calculation logic.

**Story 12: Building a System That Degrades Gracefully**
- **S/T:** RAG pipeline had 4 external dependencies (LLM API, embedding API, Supabase RPC, Redis). Any single failure could break the chatbot entirely.
- **A:** Designed fallback at every layer: cache miss → full pipeline; keyword RPC unavailable → semantic-only; JSON parse fails → repair attempt → raw text fallback; cache write error → log and continue; retrieval confidence low → clarifying question instead of hallucination.
- **R:** Chatbot handles every API failure mode gracefully, user always gets a coherent response.
- **Relevance:** SPM systems must remain operational during data feed failures, API rate limits, or partial system outages.

---

## 8. Questions to Ask Aiden

> Only questions that cannot be inferred from the codebase.

1. **DataDuel scale:** How many users / total activities tracked? What was the peak concurrent load? Was this a side project or used by a real community?

2. **DataDuel metrics:** After launching the improvement-based scoring vs. whatever came before — did you track engagement change, retention, or user feedback?

3. **N-2 Water timeline:** How long did the campaign optimization take to achieve the 189% ROAS? Over how many months? What was the ad spend range?

4. **Tribl Records scope:** What specifically did you optimize in the DB queries? What was the before/after latency? How large was the team you collaborated with?

5. **Chatbot production usage:** Is the RAG chatbot live? Do you have any user interaction data (session count, cache hit rate, retrieval latency p50/p95)?

6. **Portfolio site traffic:** Any real traffic metrics? (Helps frame N-2 Water and Thrive projects in contrast.)

7. **Python proficiency depth:** Have you written Python for anything beyond ML coursework and DataDuel backend? (Any automation scripts, data pipelines, ETL-like work?)

8. **SQL proficiency depth:** Beyond the database design course — have you written complex SQL (window functions, CTEs, aggregations over large tables)?

9. **Team experience:** For Tribl Records and the church projects, how many engineers were on the team? Did you do code review, pair programming, or work solo?

10. **Familiarity with sales processes:** Have you worked in or closely with a sales org (even as a customer, prospect, or through a family connection)? Understanding the actual quota-setting and commission workflow will help in interviews.

**Additional questions from docs evidence:**

11. **Chatbot v2 post-launch metrics:** Are any of the evaluation harness targets (Context Found Rate, P95 latency, cache hit rate) actually measured yet? If so, what were the before/after numbers?

12. **Specification-driven workflow ROI:** How often does the ticket-driven Claude workflow work as intended vs. go off-track? Any specific lessons on what ticket structures work best?

13. **SQL depth:** Beyond pgvector + tsvector, have you written complex analytical SQL (window functions, CTEs, aggregation pipelines, explain/analyze output)? This is likely to come up in SPM interviews.
