## 13 — Wire Services landing page to detail pages

## Task

- Update the **Services landing page** so its “Learn more” links (and any other appropriate links) correctly point to the new `/services/*` detail pages.
- Add any additional, minimal cross-linking from the landing page that helps users and search engines discover these detail pages without cluttering the UI.

## Mandatory skill usage

- **using-superpowers**: Invoke first; orchestrate the skills for this wiring/refinement step.
- **brainstorming**: Briefly reason about where cross-links are most helpful without overwhelming the page.
- **frontend-design**: Preserve the landing page’s visual balance and hierarchy while adding or confirming links.
- **interactive-portfolio**: Make sure link structure supports how visitors explore services from a portfolio perspective.
- **copywriting**: Ensure link labels and surrounding text remain clear, honest, and non-repetitive.
- **content-marketer**: Check that internal linking strategy supports SEO and user journeys across services.
- **nextjs-best-practices** / **nextjs-app-router-patterns**: Keep routing and link usage consistent with the App Router.
- **Claude Code Guide**: Maintain a small, clearly-scoped set of edits.

## Reference Docs (read-only)

- docs/plans/specs/services-pages-spec.md
- docs/plans/specs/services-landing-spec.md
- docs/services-page.md
- docs/design-guidelines.md
- docs/design-refinement.md
- docs/plans/claude-workflow-opt.md
- app/services/page.tsx

## Allowed Files (ONLY these)

- app/services/page.tsx

> If you discover that service-related navigation is duplicated in other components, stop and ask before extending Allowed Files.

## Hard Limits

- Do **not** modify the structure of the landing page sections (hero, categories, packages, consulting, CTA) beyond link adjustments and very small copy tweaks where required.
- Do not change any individual detail page in this ticket; they are handled by other tickets.
- Do not introduce new services or slugs beyond what is already defined in the specs.
- **If blocked:** Stop and ask rather than guessing about additional files or routes.

## Instructions

1. Use skills as above; review the landing-page spec and `app/services/page.tsx`, along with the list of detail routes from the services-pages spec.
2. Confirm that each service card or “Learn more” link on the landing page points to the correct new route:
   - `/services/chatbots`
   - `/services/ai-content`
   - `/services/personalization`
   - `/services/ai-video`
   - `/services/ai-insights`
   - `/services/performance`
   - `/services/seo`
   - `/services/accessibility`
   - `/services/bugfixes`
   - `/services/automation`
   - `/services/api-integrations`
   - `/services/internal-tools`
3. If any links are still placeholders or missing, update them to these exact paths. Avoid adding query params or extra routing complexity.
4. Where it makes sense and does not crowd the UI, consider adding subtle inline links (e.g., in section intros or the consulting section) that point to particularly relevant detail pages.
5. Verify that:
   - All services that have detail pages are reachable from the landing page.
   - The landing page still reads cleanly and is not overloaded with links.
6. Manually (or via tests, if available) check that clicking each “Learn more” link navigates to a valid, implemented detail page route.

## Done Criteria

- Every “Learn more” entry on the Services landing page points to the correct `/services/*` detail page.
- Any additional cross-links are minimal, clearly helpful, and do not clutter the layout or violate design-guidelines.
- No unrelated structural or styling changes were introduced to the landing page.
- Only `app/services/page.tsx` was modified; updates are summarized in ≤5 bullets or an Implementation Summary.

