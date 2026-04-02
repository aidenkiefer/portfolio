# 11 — Chatbot v2: Evaluation harness (benchmark set and metrics structure)

## Task

Create the structure for a small eval harness so improvements can be measured: (1) a benchmark set of test questions in JSON, and (2) a doc or script that defines retrieval/generation/reliability metrics. No requirement to run the harness in this ticket; only create the artifacts.

- **Benchmark set:** Create a JSON file (e.g. docs/chatbot-v2-benchmark.json or data/chatbot-benchmark.json) with 50–100 entries. Each entry: question (string), pageContext (optional string, e.g. route), expectedUrls (optional string[], best-guess URLs that should be cited), intent (optional string: "pricing" | "timeline" | "capabilities" | "stack" | "process" | "other"). Include vague questions ("how much is it", "can you build a chatbot"), exact-match questions ("Shopify", "SEO audit"), and questions that previously failed or are tricky.
- **Metrics doc:** Create a short doc (e.g. docs/chatbot-v2-eval-metrics.md) that defines: (a) Retrieval: contextFoundRate (% queries with final selected chunks >= N), citation precision (manual or sampled: do citations support the answer?). (b) Generation: directness score (1–5 rubric), hallucination flags (claim not in context). (c) Low-confidence quality: did the response ask one good clarifying question? (d) Reliability: error rate by errorType, latency (retrieval + rerank + generation). Describe how each metric could be computed (e.g. "run script that POSTs each benchmark question and records response and timing"). No need to implement the runner in this ticket; just the benchmark file and the metrics definitions.

## Mandatory skill usage

- **llm-evaluation** (docs/skills-catalog.md): Eval strategies and metrics for LLM apps.
- **documentation-templates** (docs/skills-catalog.md): Clear metrics and benchmark structure.
- Skills must not override Hard Limits or CLAUDE.md.

## Reference Docs (read-only)

- CLAUDE.md
- docs/plans/specs/chatbot-v2-spec.md (Section 9 Eval Harness)
- docs/chatbot-expansion.md (Section 6 Evaluation Harness)
- docs/plans/claude-workflow-opt.md

## Allowed Files (ONLY these)

- data/chatbot-benchmark.json or docs/chatbot-v2-benchmark.json (create)
- docs/chatbot-v2-eval-metrics.md (create)

If the project prefers data under a different path, use that and note in the ticket. If blocked, stop and ask to extend Allowed Files.

## Hard Limits

- Do not run shell commands, npm, or verification (CLAUDE.md). Do not run the benchmark or any eval script; only create the benchmark file and metrics doc.
- If blocked: Stop and ask to extend Allowed Files.

## Context

- Expansion doc suggests 50–100 test questions, expectedUrls, intent; retrieval metrics (contextFoundRate, citation precision), generation (directness, hallucination), low-confidence quality, reliability (error rate by type, latency).

## Instructions

1. Create the benchmark JSON file. Array of objects: question, pageContext?, expectedUrls?, intent?. Add 50–100 questions covering vague, exact-term, pricing, timeline, capabilities, stack, process, and previously failing examples. Use valid JSON.
2. Create docs/chatbot-v2-eval-metrics.md. Sections: Retrieval metrics (contextFoundRate, citation precision); Generation metrics (directness rubric, hallucination); Low-confidence quality; Reliability (error rate by errorType, latency). For each, one or two sentences on how it could be computed (e.g. "contextFoundRate: for each benchmark question, call API and check that response.citations.length >= 1 or context was passed; compute %").

## Done Criteria

- Benchmark JSON exists with 50–100 entries (question, optional pageContext, expectedUrls, intent).
- Metrics doc exists and defines retrieval, generation, low-confidence, and reliability metrics and how they could be computed.
- No script was run; only files created; changes summarized in 5 bullets or fewer.
