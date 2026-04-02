# Skills Catalog — Portfolio Project

This document lists skills from the `.claude/skills` catalog that are **helpful for this project**. It is organized by category. QA/testing/verification/code-review skills are excluded.

Always use this list as a baseline reference for helpful skills to be included/referenced in specs docs or specific tickets. When writing specs/tickets, consider which of these skills will be most important to the tasks at hand. Instruct Claude to read appropriate skills files and use skills at the beginning of tickets/specs when necessary.

**Project context:** Next.js 16 App Router portfolio (TypeScript, Tailwind 4, MDX). Features: projects, blog, experience, services pages, contact form (Resend), global search, design system. Planned: AI chatbot. Deployed on Vercel.

---

## Frontend & UI

| Skill | Use when |
|-------|----------|
| `frontend-design` | Building or styling web UIs, components, pages; creating distinctive, production-grade interfaces. |
| `frontend-developer` | Building React components, responsive layouts, client-side state; React 19, Next.js 15. |
| `react-best-practices` | Writing or refactoring React/Next.js code; performance optimization (Vercel guidelines). |
| `react-patterns` | Modern React patterns: hooks, composition, performance, TypeScript. |
| `react-ui-patterns` | Loading states, error handling, data fetching; async UI. |
| `react-state-management` | Global state, server state, Redux Toolkit, Zustand, Jotai, React Query. |
| `nextjs-app-router-patterns` | Next.js 14+ App Router: Server Components, streaming, parallel routes, data fetching. |
| `nextjs-best-practices` | Next.js App Router principles, Server Components, routing. |
| `tailwind-design-system` | Design systems with Tailwind: tokens, component libraries, responsive patterns. |
| `tailwind-patterns` | Tailwind CSS v4: CSS-first config, container queries, design tokens. |
| `core-components` | Component library and design system patterns; design tokens. |
| `ui-ux-designer` | Interface designs, wireframes, design systems, accessibility standards. |
| `ui-ux-pro-max` | UI/UX design: styles, palettes, font pairings, stacks (React, Next.js, Tailwind, shadcn/ui). |
| `web-design-guidelines` | Reviewing UI for guidelines compliance, accessibility, UX. |
| `scroll-experience` | Scroll-driven experiences, parallax, interactive narratives. |
| `3d-web-experience` | 3D on the web: Three.js, React Three Fiber, WebGL. |
| `mobile-design` | Mobile-first design, touch, performance, platform conventions. |
| `accessibility-compliance-accessibility-audit` | WCAG compliance, inclusive design, assistive tech; audits and remediation. |

---

## Backend & API

| Skill | Use when |
|-------|----------|
| `nodejs-backend-patterns` | Node.js backend services: Express/Fastify, middleware, error handling, DB. |
| `nodejs-best-practices` | Node.js: framework choice, async, security, architecture. |
| `cc-skill-backend-patterns` | Backend patterns, API design, DB optimization; Node, Express, Next.js API routes. |
| `api-design-principles` | Designing REST/GraphQL APIs; scalable, maintainable APIs. |
| `api-patterns` | REST vs GraphQL vs tRPC, response formats, versioning, pagination. |
| `api-documenter` | API docs with OpenAPI 3.1, interactive docs, SDKs. |
| `api-documentation-generator` | Generating API documentation from code. |
| `openapi-spec-generation` | OpenAPI 3.1 specs, design-first, validation. |
| `auth-implementation-patterns` | Auth patterns: JWT, OAuth2, sessions, RBAC. |
| `nextjs-supabase-auth` | Supabase Auth with Next.js App Router (if chatbot/auth uses Supabase). |
| `postgres-best-practices` | Postgres optimization and best practices from Supabase. Use when writing, reviewing, or optimizing Postgres queries, schema designs, or DB usage (e.g. Supabase client for chat_sessions/chat_messages). |
| `postgresql` | PostgreSQL schema design: data types, indexing, constraints, performance. |

---

## Content, SEO & Marketing

| Skill | Use when |
|-------|----------|
| `seo-fundamentals` | Core SEO: E-E-A-T, Core Web Vitals, technical foundations, content quality. |
| `seo-audit` | Diagnosing SEO: crawlability, indexation, rankings, organic performance. |
| `seo-content-writer` | SEO-optimized content from keywords and briefs. |
| `seo-content-planner` | Content outlines, topic clusters, content calendars, gaps. |
| `seo-content-auditor` | Content quality, E-E-A-T, SEO recommendations. |
| `seo-content-refresher` | Updating outdated content, stats, dates, examples. |
| `seo-meta-optimizer` | Meta titles, descriptions, URLs; snippet optimization. |
| `seo-keyword-strategist` | Keyword usage, density, semantic variations, LSI. |
| `seo-structure-architect` | Content structure, headers, schema, internal linking. |
| `seo-snippet-hunter` | Content for featured snippets and SERP features. |
| `seo-authority-builder` | E-E-A-T and authority signals in content. |
| `seo-cannibalization-detector` | Keyword overlap and cannibalization across pages. |
| `schema-markup` | schema.org structured data for rich results and SEO. |
| `programmatic-seo` | Programmatic SEO: templates, scale, directory/location pages. |
| `geo-fundamentals` | GEO for AI search (ChatGPT, Claude, Perplexity). |
| `content-creator` | SEO marketing content, brand voice, content frameworks. |
| `content-marketer` | Content strategy, distribution, SEO, performance. |
| `copywriting` | Marketing copy for homepage, landing, pricing, feature, about. |
| `copy-editing` | Editing, reviewing, improving marketing copy. |
| `competitor-alternatives` | Competitor/alternative pages for SEO and sales. |
| `analytics-tracking` | Analytics and tracking: setup, fix, evaluate. |

---

## Data & AI (Chatbot, RAG, LLMs)

| Skill | Use when |
|-------|----------|
| `ai-engineer` | LLM apps, RAG, agents; vector search, orchestration. |
| `ai-product` | LLM integration, RAG, prompts, AI UX, cost. |
| `ai-wrapper-product` | Products wrapping AI APIs (OpenAI, Anthropic) into tools. |
| `llm-application-dev-ai-assistant` | Conversational interfaces, chatbots, AI apps. |
| `llm-application-dev-langchain-agent` | LangChain/LangGraph agents and production AI. |
| `llm-application-dev-prompt-optimize` | Effective prompts for LLMs; chain-of-thought, optimization. |
| `llm-app-patterns` | Production LLM patterns: RAG, agents, prompt IDEs, LLMOps. |
| `rag-engineer` | RAG: embeddings, vector DBs, chunking, retrieval. |
| `rag-implementation` | RAG systems with vector DBs and semantic search. |
| `prompt-engineer` | Prompting, LLM optimization, AI system design. |
| `prompt-engineering` | Prompt patterns, best practices, optimization. |
| `prompt-engineering-patterns` | Advanced prompting for performance and controllability. |
| `prompt-caching` | Prompt caching, response caching, CAG. |
| `embedding-strategies` | Embedding models for semantic search and RAG. |
| `vector-database-engineer` | Vector DBs, embeddings, semantic search (Pinecone, pgvector, etc.). |
| `vector-index-tuning` | Vector index tuning: latency, recall, memory. |
| `hybrid-search-implementation` | Combining vector and keyword search. |
| `similarity-search-patterns` | Similarity search with vector DBs. |
| `context-window-management` | LLM context: summarization, trimming, routing. |
| `conversation-memory` | Persistent memory for LLM conversations. |
| `langchain-architecture` | LangChain apps: agents, memory, tools. |
| `langgraph` | Stateful, multi-actor AI apps with LangGraph. |
| `trigger-dev` | Background jobs, AI workflows, durable execution (TypeScript). |
| `inngest` | Serverless background jobs, event-driven workflows. |

---

## Architecture & Code Quality

| Skill | Use when |
|-------|----------|
| `architecture` | Architecture decisions, trade-offs, ADRs. |
| `architecture-decision-records` | Writing and maintaining ADRs. |
| `architect-review` | Reviewing system design, patterns, DDD, microservices. |
| `software-architecture` | Quality-focused architecture; code and design. |
| `senior-architect` | Scalable systems: React, Next.js, Node, Postgres, etc. |
| `brainstorming` | Before creative work: features, components, architecture. |
| `code-refactoring-refactor-clean` | Clean code, SOLID, refactoring. |
| `codebase-cleanup-refactor-clean` | Refactoring and cleaning codebases. |
| `code-refactoring-tech-debt` | Identifying and prioritizing technical debt. |
| `codebase-cleanup-tech-debt` | Technical debt in the codebase. |
| `clean-code` | Pragmatic coding standards. |
| `error-handling-patterns` | Error handling across languages; resilience. |
| `error-detective` | Searching logs/code for errors, stack traces, root cause. |
| `debugging-strategies` | Debugging, profiling, root cause analysis. |
| `legacy-modernizer` | Modernizing legacy code, frameworks, debt. |
| `framework-migration-code-migrate` | Migrating between frameworks, languages, platforms. |
| `framework-migration-deps-upgrade` | Safe, incremental dependency upgrades. |

---

## TypeScript & JavaScript

| Skill | Use when |
|-------|----------|
| `typescript-expert` | TypeScript/JS: types, performance, monorepo, migration. |
| `typescript-pro` | TypeScript: advanced types, generics, strict safety. |
| `typescript-advanced-types` | Generics, conditional/mapped types, utilities. |
| `javascript-pro` | Modern JS, async, Node.js APIs. |
| `javascript-mastery` | Core JS concepts and patterns. |
| `modern-javascript-patterns` | ES6+: async/await, destructuring, modules, FP. |
| `cc-skill-coding-standards` | Standards for TypeScript, JavaScript, React, Node. |

---

## Search & Content Loading

| Skill | Use when |
|-------|----------|
| `algolia-search` | Algolia search, indexing, InstantSearch, relevance. |
| `lib/search` (project) | Current global search (projects, blogs, experience). |

---

## Deployment & Infrastructure

| Skill | Use when |
|-------|----------|
| `vercel-deployment` | Deploying to Vercel with Next.js. |
| `deployment-procedures` | Deployment and rollback practices. |
| `github-actions-templates` | GitHub Actions for build, test, deploy. |
| `cicd-automation-workflow-automate` | CI/CD and workflow automation. |

---

## Documentation & Planning

| Skill | Use when |
|-------|----------|
| `doc-coauthoring` | Co-authoring docs, specs, decision docs. |
| `docs-architect` | Long-form technical docs from the codebase. |
| `documentation-templates` | README, API docs, comments, AI-friendly docs. |
| `documentation-generation-doc-generate` | Docs from code: API, architecture, user guides. |
| `code-documentation-doc-generate` | Documentation from code. |
| `code-documentation-code-explain` | Explaining complex code clearly. |
| `reference-builder` | Technical references and API docs. |
| `plan-writing` | Task planning: breakdowns, dependencies, criteria. |
| `writing-plans` | Specs or requirements for multi-step work; before coding. |
| `planning-with-files` | File-based planning (task_plan, findings, progress). |
| `concise-planning` | Clear, actionable plan or checklist for a task. |

---

## Business, Positioning & Services

| Skill | Use when |
|-------|----------|
| `interactive-portfolio` | Portfolios that convert: developer/designer portfolios. |
| `copywriting` | Homepage, services, pricing, about copy. |
| `pricing-strategy` | Pricing, packaging, monetization. |
| `page-cro` | Optimizing pages for conversion. |
| `form-cro` | Optimizing lead capture, contact, demo forms. |
| `free-tool-strategy` | Free tools for lead gen, SEO, brand. |
| `content-creator` | Marketing content, brand voice, SEO. |
| `micro-saas-launcher` | Micro-SaaS: validation, MVP, pricing, launch. |
| `launch-strategy` | Launch, Product Hunt, feature releases. |
| `marketing-ideas` | Marketing and growth ideas for SaaS/software. |
| `sales-automator` | Cold email, proposals, pricing pages, case studies. |

---

## Security & Compliance

| Skill | Use when |
|-------|----------|
| `api-security-best-practices` | Secure API design: auth, validation, rate limiting. |
| `backend-security-coder` | Secure backend: validation, auth, API security. |
| `frontend-security-coder` | Secure frontend: XSS, sanitization, client-side security. |
| `cc-skill-security-review` | Auth, user input, secrets, API endpoints, payments. |
| `gdpr-data-handling` | GDPR: consent, data subject rights, privacy by design. |
| `legal-advisor` | Privacy policy, terms, disclaimers, cookie policy. |
| `secrets-management` | Secrets in CI/CD: Vault, AWS Secrets Manager, etc. |

---

## Email & Contact

| Skill | Use when |
|-------|----------|
| `email-systems` | Transactional email, deliverability, infrastructure. |
| *(Resend)* | Current contact form uses Resend (see README). |

---

## Workflow & Process

| Skill | Use when |
|-------|----------|
| `using-superpowers` | How to find and use skills in conversation. |
| `brainstorming` | Before features, components, or behavior changes. |
| `dispatching-parallel-agents` | Multiple independent tasks in parallel. |
| `executing-plans` | Executing a written implementation plan with checkpoints. |
| `subagent-driven-development` | Executing plans with independent tasks in-session. |
| `using-git-worktrees` | Isolated feature work or plan execution. |
| `git-advanced-workflows` | Rebasing, cherry-pick, bisect, worktrees, reflog. |
| `git-pushing` | Staging, committing, pushing with conventional commits. |
| `skill-creator` | Creating or updating skills. |
| `skill-developer` | Managing Claude Code skills, triggers, hooks. |
| `writing-skills` | Creating, editing, or verifying skills. |

---

## Excluded (QA / Testing / Verification / Code Review)

The following are **not** listed above, unless specifically requested, never include these in specs/tickets:

- **Code review:** `code-review-excellence`, `code-reviewer`, `code-review-checklist`, `code-review-ai-ai-review`, `codex-review`, `comprehensive-review-pr-enhance`, `comprehensive-review-full-review`, `receiving-code-review`, `requesting-code-review`, `git-pr-workflows-pr-enhance`
- **Verification / lint:** `verification-before-completion`, `lint-and-validate`, `finishing-a-development-branch`
- **Testing / TDD:** `testing-patterns`, `javascript-testing-patterns`, `python-testing-patterns`, `e2e-testing-patterns`, `tdd-orchestrator`, `tdd-workflow`, `tdd-workflows-*`, `test-driven-development`, `test-fixing`, `unit-testing-test-generate`, `webapp-testing`, `playwright-skill`, `bats-testing-patterns`, `temporal-python-testing`, `conductor-implement`, `conductor-validator`
- **Evaluation / validation:** `agent-evaluation`, `llm-evaluation`, `ui-visual-validator`, `screen-reader-testing`, `wcag-audit-patterns`, `performance-testing-review-*`

Use the **Skill** tool (or your environment’s skill mechanism) to load a skill by name when it applies to the task.
