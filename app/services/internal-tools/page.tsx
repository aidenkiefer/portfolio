import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Internal Tools & Dashboards | Custom Admin Panels',
  description: 'Build lightweight internal tools and CRUD dashboards for your team. Custom admin panels, analytics dashboards, and workflow tools.',
  path: '/services/internal-tools',
});

export default function InternalToolsPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link href="/services" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors">
            ← Back to Services
          </Link>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Custom Dashboards & Tools for the Work You Do Every Day
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          Build a backend that works like your team thinks—with lightweight internal tools that simplify operations.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $400
          </span>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
          Build My Internal Tool
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Your team deserves better than spreadsheets
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            Startups run on glue: Notion tables, Google Sheets, Zapier hacks. But what if you had a tool built *just* for your team's workflow? I build custom internal apps that help you view, edit, and manage your data with less friction.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What I Build
        </h2>
        <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
          <ul className="space-y-4">
            {[
              'CRUD dashboards for managing orders, content, users, etc.',
              'Visual analytics dashboards (e.g., marketing or product metrics)',
              'Admin panels with login, roles, and permissions',
              'UI built in React, Retool, or custom frontends',
              'Backend logic via Supabase, Firebase, Node.js, or Python',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Use Cases That Fit
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: 'Editorial teams', desc: 'Managing content + authors' },
            { title: 'SaaS teams', desc: 'Managing users or support queues' },
            { title: 'Ecommerce brands', desc: 'Reviewing orders + analytics' },
            { title: 'Founders', desc: 'Managing early product ops in-house' },
          ].map((useCase, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">{useCase.title}</h3>
                  <p className="text-sm text-text-secondary">{useCase.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Delivery
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed"><span className="font-semibold">5–7 day</span> build time</p>
          <p className="text-text-primary leading-relaxed">Designed to be expandable later (MVP-friendly)</p>
          <p className="text-text-secondary leading-relaxed">Handoff + codebase walkthrough included</p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What This Service Actually Does
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            At its core, this service helps you replace spreadsheets and manual processes with custom tools built specifically for your team's workflow.
          </p>
          <p>
            Instead of forcing your operations into generic software, you get a lightweight dashboard or admin panel that matches exactly how you work. Manage content, users, orders, or analytics without juggling tabs or wrestling with Airtable formulas.
          </p>
          <p>
            After implementation, your team spends less time on data entry and more time on decisions. You stop worrying about version control in shared spreadsheets or permission issues in no-code tools. Everything lives in one place, with the exact fields and views you actually need.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Who This Service Is Best For
        </h2>
        <div className="space-y-8 max-w-3xl">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-start gap-2">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-1" />
              Great Fit If You
            </h3>
            <ul className="space-y-3 ml-8">
              <li className="text-text-primary leading-relaxed">Need to manage data that doesn't fit in off-the-shelf tools (custom workflows, unique fields, specific permissions)</li>
              <li className="text-text-primary leading-relaxed">Have a small team juggling Google Sheets, Notion, and Airtable for operations that should be centralized</li>
              <li className="text-text-primary leading-relaxed">Want your support, content, or ops team to have their own simple interface without giving them database access</li>
              <li className="text-text-primary leading-relaxed">Need to visualize metrics or KPIs that your existing tools don't surface clearly</li>
              <li className="text-text-primary leading-relaxed">Are building an MVP and need basic admin functionality fast, without over-engineering</li>
              <li className="text-text-primary leading-relaxed">Want something you can expand later as your needs grow, not a rigid SaaS subscription</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-start gap-2">
              <span className="text-accent-secondary flex-shrink-0 mt-1">🚫</span>
              Not a Great Fit If You
            </h3>
            <ul className="space-y-3 ml-8">
              <li className="text-text-primary leading-relaxed">You need enterprise-grade security certifications or compliance (SOC 2, HIPAA) out of the box</li>
              <li className="text-text-primary leading-relaxed">Your operations are already handled perfectly by existing tools like Salesforce or HubSpot</li>
              <li className="text-text-primary leading-relaxed">You need a complex, multi-tenant SaaS product with billing and advanced role hierarchies (that's a different project scope)</li>
              <li className="text-text-primary leading-relaxed">You're looking for a no-code solution you can edit yourself without any technical setup</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Real-World Examples
        </h2>
        <div className="space-y-8 max-w-3xl">
          <div className="rounded-md border border-border bg-surface-raised p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-3 text-lg font-semibold text-text-primary">Example 1: Content Team Dashboard</h3>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-text-primary">Problem:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Editorial team managing 40+ freelance writers across Google Sheets. No way to track assignments, review status, or payment approval in one place.
                </p>
              </div>
              <div>
                <span className="font-semibold text-text-primary">Solution:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Built a custom CMS dashboard with writer profiles, assignment tracking, content status views, and one-click payment export. Editors could filter by status, writer, or deadline.
                </p>
              </div>
              <div>
                <span className="font-semibold text-text-primary">Result:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Team went from 2+ hours per week reconciling spreadsheets to under 15 minutes. Editor could approve drafts and mark invoices ready without switching tools.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-surface-raised p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-3 text-lg font-semibold text-text-primary">Example 2: SaaS Support Queue</h3>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-text-primary">Problem:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Early-stage SaaS handling support requests via email and Notion. No visibility into response times, escalations, or recurring issues.
                </p>
              </div>
              <div>
                <span className="font-semibold text-text-primary">Solution:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Simple ticket dashboard with status filters, user lookup, internal notes, and a chart showing response time trends. Connected to their existing database so support could see customer context.
                </p>
              </div>
              <div>
                <span className="font-semibold text-text-primary">Result:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Support lead could triage tickets in under 5 minutes each morning. Team identified the top 3 recurring issues within the first week and prioritized product fixes accordingly.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-surface-raised p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-3 text-lg font-semibold text-text-primary">Example 3: Analytics Dashboard for Founders</h3>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-text-primary">Problem:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Founder wanted a single view of key metrics (MRR, churn, acquisition channels) without paying for multiple SaaS analytics tools or building complex reporting in Stripe and Google Analytics.
                </p>
              </div>
              <div>
                <span className="font-semibold text-text-primary">Solution:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Built a read-only dashboard pulling from Stripe API and existing product database. Showed current MRR, monthly growth, top acquisition sources, and cohort retention in simple charts.
                </p>
              </div>
              <div>
                <span className="font-semibold text-text-primary">Result:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Founder had a bookmarkable link to check metrics daily instead of exporting CSVs or waiting for weekly reports. Helped make faster decisions on marketing spend and feature prioritization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What You Can Expect After Implementation
        </h2>
        <div className="space-y-4 max-w-3xl">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-primary leading-relaxed"><strong>Centralized operations:</strong> Your team stops context-switching between Notion, Sheets, and email to manage daily workflows.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-primary leading-relaxed"><strong>Faster decisions:</strong> Metrics, user data, or content status are visible at a glance instead of buried in exports.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-primary leading-relaxed"><strong>Time savings:</strong> Typical teams save 2–5 hours per week on manual data entry, reconciliation, or status updates.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-primary leading-relaxed"><strong>Better permissions:</strong> Give your ops or support team exactly the access they need without handing over database credentials.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-primary leading-relaxed"><strong>Room to grow:</strong> Start with a simple CRUD dashboard and expand it as your team and processes scale.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-primary leading-relaxed"><strong>Less frustration:</strong> No more version conflicts, broken formulas, or "who has edit access?" confusion.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          How the Process Works
        </h2>
        <div className="space-y-6 max-w-3xl">
          <div className="rounded-md border border-border bg-surface-raised p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">1. Discovery & Setup</h3>
            <p className="text-text-primary leading-relaxed">
              We start with a short call or Loom walkthrough to understand your current workflow, data sources, and what views or actions your team needs most. I'll ask about your tech stack, who will use the tool, and what success looks like.
            </p>
          </div>

          <div className="rounded-md border border-border bg-surface-raised p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">2. Build & Configuration</h3>
            <p className="text-text-primary leading-relaxed">
              I design the UI and wire it up to your data (Supabase, Firebase, your API, or custom database). You get a working version within 3–5 days to review. We iterate on layout, filters, and permissions based on your feedback.
            </p>
          </div>

          <div className="rounded-md border border-border bg-surface-raised p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">3. Testing & Iteration</h3>
            <p className="text-text-primary leading-relaxed">
              You and your team test it with real data. I fix bugs, adjust views, and add any missing features. The goal is for it to feel intuitive on day one, not after a month of training.
            </p>
          </div>

          <div className="rounded-md border border-border bg-surface-raised p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">4. Delivery & Walkthrough</h3>
            <p className="text-text-primary leading-relaxed">
              I hand off the code and hosting setup (or deploy it for you). You get a walkthrough showing how to use and extend the dashboard. If you want to add features later, the codebase is yours to modify or hire someone to expand.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Tools & Technology Used
        </h2>
        <div className="space-y-4 max-w-3xl">
          <p className="text-text-primary leading-relaxed">
            I adapt to what you're already using, but here are the most common tools for building internal dashboards and admin panels:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-text-primary mb-1">Frontend</h3>
              <p className="text-text-primary leading-relaxed">
                React, Next.js, or Retool for the UI. Tables, filters, charts, and forms that feel fast and responsive.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-1">Backend & Database</h3>
              <p className="text-text-primary leading-relaxed">
                Supabase, Firebase, PostgreSQL, or Node.js/Python APIs. I work with your existing database or help you set up a new one.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-1">Authentication & Permissions</h3>
              <p className="text-text-primary leading-relaxed">
                Auth0, Clerk, Supabase Auth, or custom login flows. Role-based access so only the right people see the right data.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-text-primary mb-1">Analytics & Visualization</h3>
              <p className="text-text-primary leading-relaxed">
                Recharts, Chart.js, or D3 for dashboards. Simple line charts and bar graphs, not complex BI tools.
              </p>
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed italic">
            Note: Tool choice depends on your stack and budget. If you already have a database or auth provider, I'll build around it instead of adding new dependencies.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">How long does this typically take?</h3>
            <p className="text-text-primary leading-relaxed">
              Most internal tools take 5–7 days from kickoff to delivery. Simple CRUD dashboards can be faster; dashboards with complex analytics or multi-step workflows may take closer to 10 days. You'll get a working version within the first 3–5 days to review.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Do I need technical knowledge to use the final dashboard?</h3>
            <p className="text-text-primary leading-relaxed">
              No. The whole point is to give your team a simple interface they can use without understanding databases or code. If someone can use Notion or Airtable, they can use this. You only need technical knowledge if you want to modify or extend it later.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Will this work with my existing tools and data?</h3>
            <p className="text-text-primary leading-relaxed">
              Most likely. I can connect to existing databases (PostgreSQL, MySQL, MongoDB), APIs (Stripe, Shopify, custom), or SaaS tools via webhooks or integrations. If your data lives in spreadsheets, we can import it or connect directly.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Is this a one-time setup or will I need ongoing support?</h3>
            <p className="text-text-primary leading-relaxed">
              It's designed as a one-time build with handoff. You own the code and can maintain it yourself, hire someone to expand it, or loop me back in for future updates. I don't require a retainer or ongoing subscription.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What if I need to add features later?</h3>
            <p className="text-text-primary leading-relaxed">
              The codebase is yours. You can hire me (or another developer) to add features as your needs grow. I build these tools to be expandable, not locked down. Think of it as an MVP that can scale with your operations.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Can you handle login, permissions, and security?</h3>
            <p className="text-text-primary leading-relaxed">
              Yes. I can set up user authentication and role-based permissions so your team, support staff, and admins each see only what they need. Security basics (HTTPS, secure auth, environment variables) are included. If you need compliance certifications (HIPAA, SOC 2), that's a larger scope and we'd need to discuss specifics.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">How much does this cost?</h3>
            <p className="text-text-primary leading-relaxed">
              Starting at $400 for a basic CRUD dashboard. More complex tools (multi-user roles, analytics, integrations) range from $800–$1,500 depending on scope. I'll give you a fixed price after understanding your requirements, so there are no surprises.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What if I just need something simple and fast?</h3>
            <p className="text-text-primary leading-relaxed">
              Perfect. That's exactly what this is optimized for. If you need a read-only dashboard or a basic form to manage a single table, we can do that in 3–5 days. No over-engineering, just the tool you need to get work done.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Next Steps
        </h2>
        <div className="space-y-6 max-w-3xl">
          <p className="text-text-primary leading-relaxed">
            If you're tired of duct-taping spreadsheets together or paying for SaaS tools that don't quite fit your workflow, a custom internal tool might be exactly what you need.
          </p>
          <p className="text-text-primary leading-relaxed">
            The next step is a short call (or async Loom exchange) to understand your current setup and what you'd like to improve. No obligation, no pressure. I'll let you know if this is a good fit and give you a clear timeline and price.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
              Start a Conversation
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link href="/contact#form" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised">
              Send a Quick Message
            </Link>
          </div>
          <p className="text-sm text-text-secondary">
            Quick call, clear scope, fixed price. That's it.
          </p>
        </div>
      </section>

      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Build the tool your team *actually* needs.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
            Build My Internal Tool
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
