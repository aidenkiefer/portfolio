# Chatbot v2 Evaluation Metrics

This document defines metrics for measuring chatbot v2 performance across retrieval, generation, low-confidence handling, and reliability dimensions. These metrics can be computed by running the benchmark set (`data/chatbot-benchmark.json`) through the chat API and analyzing the responses.

## How to Run Evaluation

Create a script that:
1. Loads `data/chatbot-benchmark.json`
2. For each entry, POSTs to `/api/chat` with the question and optional `pageContext`
3. Records the response: `answer`, `citations`, `errorType`, `ok`, and timing data
4. Computes metrics below based on the collected responses

## Retrieval Metrics

### Context Found Rate
**Definition:** Percentage of queries that retrieved relevant context (final selected chunks ≥ 1).

**Computation:** For each benchmark question, check if `response.citations.length >= 1` OR log messages indicate chunks were selected. Compute: `(queries with context / total queries) × 100%`.

**Target:** ≥ 85% for questions with `expectedUrls` provided in benchmark.

### Citation Precision (Manual/Sampled)
**Definition:** Do the citations actually support the answer?

**Computation:** Manually review a sample (e.g. 20-30 responses) and rate each citation as "supports answer" or "irrelevant". Compute: `(supporting citations / total citations) × 100%`.

**Target:** ≥ 90% of citations should be relevant to the answer given.

### Citation Recall (Optional)
**Definition:** For questions with `expectedUrls`, were those URLs included in the response citations?

**Computation:** For each benchmark entry with `expectedUrls`, check if `response.citations` includes at least one expected URL. Compute: `(queries with expected URL cited / queries with expectedUrls) × 100%`.

**Target:** ≥ 70% (some questions may have multiple valid sources).

## Generation Metrics

### Directness Score (1-5 Rubric)
**Definition:** How directly and concisely does the response answer the question?

**Scale:**
- 1: Vague, off-topic, or overly verbose with no clear answer
- 2: Partially answers but includes excessive fluff or hedging
- 3: Answers the question but could be more concise
- 4: Direct answer with minimal fluff
- 5: Perfectly direct, scannable, actionable answer

**Computation:** Manually score a sample of 30-50 responses. Compute average score.

**Target:** Average ≥ 4.0.

### Hallucination Flags
**Definition:** Claims in the answer that are not supported by the retrieved context.

**Computation:** Manually review a sample of responses. For each response, check if the answer makes factual claims (pricing, timelines, capabilities) that are NOT present in the citations or context. Flag responses with hallucinations.

**Target:** ≤ 5% hallucination rate.

### Answer Structure Compliance
**Definition:** Does the response follow the RESPONSE SHAPE structure (direct answer, key details, recommendation, next step)?

**Computation:** Manually review a sample. Check if answers have clear structure with bullets, recommendations when relevant, and a next step. Compute: `(compliant responses / sample size) × 100%`.

**Target:** ≥ 80%.

## Low-Confidence Quality

### Clarifying Question Quality
**Definition:** When the system returns a low-confidence response, does it ask one good clarifying question with 2-3 specific options?

**Computation:** Filter responses where `citations.length === 0` or the answer includes a question. Manually review to confirm the question is clear and options are specific. Compute: `(good clarifying questions / low-confidence responses) × 100%`.

**Target:** ≥ 90% of low-confidence responses should ask a well-structured clarifying question.

### Page Awareness in Clarifiers
**Definition:** Do low-confidence responses use page context (if provided) to offer relevant options?

**Computation:** For benchmark questions with `pageContext`, review low-confidence responses to confirm options are tailored to the current page. Compute: `(page-aware clarifiers / low-confidence responses with pageContext) × 100%`.

**Target:** ≥ 80%.

## Reliability Metrics

### Error Rate by Type
**Definition:** Percentage of requests that return each error type.

**Computation:** Run all benchmark questions through the API. Count responses by `errorType` (`RATE_LIMITED`, `RETRIEVAL_ERROR`, `LLM_ERROR`, `CONFIG_ERROR`, `UNKNOWN_ERROR`) and compute percentages. Also track `ok: false` responses.

**Baseline:** Under normal conditions (no misconfig, API available):
- `RETRIEVAL_ERROR`: ≤ 1%
- `LLM_ERROR`: ≤ 2%
- `CONFIG_ERROR`: 0% (config should be valid)
- `UNKNOWN_ERROR`: ≤ 0.5%
- `RATE_LIMITED`: Depends on rate limit settings

### Latency (P50, P95, P99)
**Definition:** Time from request to response, broken down by stage.

**Computation:** Instrument the eval script to measure:
- **Total latency:** Time from POST to response received
- **Retrieval latency:** Parse from logs (`[Chat API] Retrieval end: XXXms`)
- **LLM latency:** Parse from logs (`[Chat API] LLM call end: XXXms`)

Compute percentiles (P50, P95, P99) across all requests.

**Targets:**
- Total P95: ≤ 5 seconds
- Retrieval P95: ≤ 1 second
- LLM P95: ≤ 3 seconds

### Availability
**Definition:** Percentage of requests that complete successfully (non-error).

**Computation:** `(responses with ok !== false / total requests) × 100%`.

**Target:** ≥ 99% (barring external API issues).

## Intent Coverage (Optional)

**Definition:** For each intent type (`pricing`, `timeline`, `capabilities`, `stack`, `process`, `other`), measure retrieval and generation quality.

**Computation:** Group benchmark questions by `intent`. For each intent, compute:
- Context Found Rate
- Average Directness Score
- Hallucination Rate

This helps identify which intent types need improvement.

## Benchmark Evolution

As the system improves, update `data/chatbot-benchmark.json` with:
- Questions that failed in production or testing
- Edge cases discovered during manual review
- New service offerings or content areas

Periodic benchmark refresh (every 2-3 months) ensures metrics stay relevant.
