# Fix — CSS parse error: invalid `.[-:|]` rule

## Task

- **Find and eliminate the source** of the invalid CSS rule that causes "Parsing CSS source code failed" (dev) or "Found 1 warning while optimizing generated CSS" (build).
- The bad rule in the **generated** CSS is:
  ```css
  .\[-\:\|\] {
    -: |;
  }
  ```
  (Selector `.[-:|]`, declaration `-: |;` — invalid.)
- Prefer fixing the **root cause** (e.g. remove or correct the class/CSS that produces this). If the cause is a Tailwind v4 or tooling bug, document it and add a minimal, documented workaround.

## Mandatory skill usage

- **using-superpowers**: Invoke first; use any other relevant skills (e.g. **systematic-debugging**, **debugger**) to narrow down the source.
- **systematic-debugging**: Reproduce the error, form hypotheses, and test them (e.g. narrow content paths, comment out layers, inspect generated CSS) before changing production code.
- **Claude Code Guide**: Keep edits small and verifiable; document findings.

## Reference docs (read-only)

- docs/plans/specs/css-parse-error-spec.md (full description, hypotheses, constraints, success criteria)
- app/globals.css
- tailwind.config.ts
- postcss.config.mjs
- docs/plans/claude-workflow-opt.md

## Allowed files

- **Investigation:** Any file may be **read** to locate the source of the bad rule.
- **Edits:** Prefer changing only the **minimal set** of files that fix the issue. Likely candidates:
  - app/globals.css (if the source is a custom rule or import)
  - tailwind.config.ts (e.g. content paths or safelist)
  - Any single file under app/, components/, or pages/ that contains the offending class or pattern
- If you identify a file outside app/, components/, pages/, or config (e.g. in content/, or a dependency), **stop and report** the path and proposed fix before editing; we may extend Allowed Files or handle it separately.

## Hard limits

- Do **not** remove or alter the design system in `app/globals.css` (e.g. `@theme`, `@layer base` colors/typography) except where necessary to remove the bad rule or a mis-parsed custom utility.
- Do **not** disable Tailwind or PostCSS; the fix must allow Tailwind to continue to work for the rest of the site.
- **If blocked:** If you cannot find the source after a reasonable investigation, add a short "Investigation summary" at the bottom of this ticket (where you looked, what you tried, and what you recommend next) instead of making speculative edits.

## Instructions

1. **Read** docs/plans/specs/css-parse-error-spec.md and use **systematic-debugging** (or equivalent) to plan steps.
2. **Reproduce** the error: run `npm run build` and/or `npm run dev` and confirm the parse error or warning appears.
3. **Narrow the source:**
   - Check whether the bad rule appears when Tailwind content is restricted (e.g. temporarily set `content: []` in `tailwind.config.ts` and rebuild). If the warning disappears, the source is in scanned content or in Tailwind’s own output; if it remains, the source may be in `globals.css` or another input to the CSS pipeline.
   - Search the repo (including app/, components/, pages/, content/ if in scope) for strings that could be parsed as a class `[-:|]` or arbitrary property (e.g. `[-:`, `|]`, template literals, MDX).
   - Inspect `app/globals.css` for any rule that could be mis-parsed (e.g. custom utilities, `@theme` edges).
4. **Apply a fix:** Remove or correct the source (e.g. fix a typo, remove a bad utility, or adjust content so Tailwind doesn’t generate that class). If the only option is a workaround (e.g. PostCSS step to strip the rule, or a Tailwind config workaround), implement it minimally and document it in this ticket and/or the spec.
5. **Verify:** Run `npm run build` and `npm run dev`; confirm the parse error/warning is gone and the site still looks and behaves correctly.
6. **Document:** In an "Implementation summary" (or "Investigation summary" if no fix was applied) at the bottom of this ticket, list: cause (if found), files changed, and verification result.

## Done criteria

- The CSS parse error / "Found 1 warning while optimizing generated CSS" for the `.[-:\|] { -: |; }` rule is **gone** when running `npm run build` and `npm run dev`.
- No intentional regressions to layout or styling; design system in `app/globals.css` is preserved except for the minimal change that fixes the issue.
- Only allowed files were modified (or explicit approval was given to extend the list).
- Ticket includes a short summary of cause and fix (or investigation summary if unresolved).
