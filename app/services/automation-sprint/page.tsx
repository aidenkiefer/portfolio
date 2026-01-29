import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Automation Sprint – Replace Manual Work with Smart Automation',
  description: 'A focused sprint to automate 1–2 of your most painful workflows. Fast delivery, practical tools, and no long-term lock-in. Starting at $220.',
  path: '/services/automation-sprint',
});

export default function AutomationSprintPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      {/* Hero Section */}
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link
            href="/services"
            className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors"
          >
            ← Back to Services
          </Link>
        </div>
        <div className="mb-4">
          <span className="inline-block px-3 py-1 text-xs uppercase tracking-wide font-semibold bg-accent-primary/10 text-accent-primary rounded border border-accent-primary/20">
            Package
          </span>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Replace Manual Work with Smart Automation
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          A short, focused sprint to automate your most painful workflows—fast.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $220
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
        >
          🤖 Automate My Workflow
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Accent Stripe */}
      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      {/* Services in This Package */}
      <section className="mb-16 sm:mb-20">
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Services in This Package
        </h2>
        <p className="mb-8 text-base text-text-secondary max-w-3xl">
          This package includes these individual services—click to learn more about each:
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            href="/services/automation"
            className="block rounded-md border border-border bg-background p-6 border-l-4 border-l-accent-primary transition-all duration-200 ease-out hover:border-accent-primary hover:-translate-y-0.5"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Process Automation
            </h3>
            <p className="text-sm text-text-secondary">
              Automate repetitive workflows with Python, Zapier, or Make
            </p>
          </Link>

          <Link
            href="/services/api-integrations"
            className="block rounded-md border border-border bg-background p-6 border-l-4 border-l-accent-primary transition-all duration-200 ease-out hover:border-accent-primary hover:-translate-y-0.5"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              API & Tool Integrations
            </h3>
            <p className="text-sm text-text-secondary">
              Connect your tools and services with custom API integrations
            </p>
          </Link>
        </div>

        <div className="mt-8 rounded-md bg-surface-raised border border-border p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-text-primary mb-3">
            Often Combined With
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/internal-tools" className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors">
              Internal Tools →
            </Link>
            <Link href="/services/ai-insights" className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors">
              AI Insights →
            </Link>
            <Link href="/services/chatbots" className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors">
              AI Chatbots →
            </Link>
          </div>
        </div>
      </section>

      {/* Problem → Promise */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Manual work doesn't scale—and it shouldn't exist
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            Copying data, sending routine emails, generating reports—these tasks waste time and introduce errors. This sprint replaces 1–2 of your most repetitive workflows with reliable automation.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Automation Sprint Includes
        </h2>
        <div className="rounded-md border border-border bg-background p-8"
          style={{
            boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
          }}
        >
          <ul className="space-y-4">
            {[
              'Automation of 1–2 core workflows',
              'Tools may include: Python scripts, Zapier / Make, Airtable automations, API-based integrations',
              'Error handling and logging',
              'Documentation + walkthrough',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Example Automations */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Common Automations
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Lead form → CRM → Slack notification',
            'Order placed → invoice → confirmation email',
            'Weekly metrics → automated report',
            'Content submission → CMS publish flow',
          ].map((automation, idx) => (
            <div
              key={idx}
              className="rounded-md border border-border bg-background p-6"
              style={{
                boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-text-primary">{automation}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline & Delivery */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Fast and Practical
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed">
            <span className="font-semibold">Delivery in 2–4 days</span>
          </p>
          <p className="text-text-primary leading-relaxed">
            Designed to be editable after setup
          </p>
          <p className="text-text-primary leading-relaxed">
            No long-term lock-in required
          </p>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <div className="rounded-md border border-accent-secondary/30 bg-surface-raised p-8">
          <h2 className="mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
            Want to Automate More?
          </h2>
          <p className="mb-6 text-base text-text-secondary leading-relaxed">
            This sprint can scale into a larger system or be bundled with dashboards, AI insights, API integrations, or chatbots.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-base font-medium text-accent-primary hover:text-accent-primary/80 transition-colors group"
          >
            📞 Book a Free Consultation
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Section 1: What This Package Actually Does */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What This Package Actually Does
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            At its core, this package helps you eliminate repetitive manual tasks by building custom automations that work reliably behind the scenes, so you can focus on work that actually grows your business.
          </p>
          <p>
            Most small businesses and startups waste hours each week on tasks that should run themselves—copying data between tools, sending follow-up emails, generating reports, or triggering notifications. These workflows aren't hard, they're just tedious and error-prone.
          </p>
          <p>
            After implementation, these workflows run automatically. No more remembering to send that email. No more manual data entry. No more "I forgot to update the spreadsheet."
          </p>
          <p>
            What changes: your team stops spending time on busywork. What you no longer worry about: whether routine tasks are getting done correctly and on time.
          </p>
        </div>
      </section>

      {/* Section 2: Who This Package Is Best For */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Who This Package Is Best For
        </h2>

        <div className="mb-10">
          <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0" />
            Great Fit If You
          </h3>
          <ul className="space-y-3 ml-8 text-text-primary">
            <li className="leading-relaxed">
              You or your team spend hours each week on repetitive tasks that follow the same pattern every time
            </li>
            <li className="leading-relaxed">
              You're manually copying data between apps (CRM to spreadsheet, form to email, etc.)
            </li>
            <li className="leading-relaxed">
              You want to improve response time for leads, customers, or internal requests without hiring more people
            </li>
            <li className="leading-relaxed">
              You've tried DIY automation tools like Zapier but hit limits or couldn't get them to work the way you need
            </li>
            <li className="leading-relaxed">
              You need something fast and affordable—not a months-long enterprise project
            </li>
            <li className="leading-relaxed">
              You're open to a short discovery call to identify the highest-impact workflows to automate
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
            <span className="text-2xl">🚫</span>
            Not a Great Fit If You
          </h3>
          <ul className="space-y-3 ml-8 text-text-primary">
            <li className="leading-relaxed">
              You need a fully custom enterprise workflow system—this sprint is focused on 1–2 workflows, not a comprehensive overhaul
            </li>
            <li className="leading-relaxed">
              Your workflows change constantly or don't follow consistent patterns yet
            </li>
            <li className="leading-relaxed">
              You're looking for ongoing automation support or maintenance—this is a one-time build (though you can always add more later)
            </li>
            <li className="leading-relaxed">
              Your team isn't ready to adopt new tools or change how they currently work
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3: Real-World Examples */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Real-World Examples
        </h2>
        <div className="space-y-8">
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Example 1: E-commerce Store Owner
            </h3>
            <div className="space-y-3 text-text-primary">
              <p>
                <span className="font-semibold">Problem:</span> Manually creating invoices and sending order confirmations for every sale—taking 5–10 minutes per order, often delayed until end of day.
              </p>
              <p>
                <span className="font-semibold">Solution:</span> Built an automation that triggers when a Stripe payment completes: generates a PDF invoice, emails it to the customer, logs the order in Airtable, and posts a summary to Slack.
              </p>
              <p>
                <span className="font-semibold">Result:</span> Saved 2+ hours per day, improved customer experience with instant confirmations, and eliminated the end-of-day invoice backlog.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Example 2: Agency Founder
            </h3>
            <div className="space-y-3 text-text-primary">
              <p>
                <span className="font-semibold">Problem:</span> New leads from website forms were sitting unread in an inbox for hours before anyone followed up, leading to lost conversions.
              </p>
              <p>
                <span className="font-semibold">Solution:</span> Connected the form to their CRM (HubSpot), automatically assigned leads to team members based on service type, and sent instant Slack notifications with lead details and a one-click link to respond.
              </p>
              <p>
                <span className="font-semibold">Result:</span> Response time dropped from 4+ hours to under 15 minutes. Lead-to-customer conversion rate increased by 23% in the first month.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Example 3: SaaS Startup Team
            </h3>
            <div className="space-y-3 text-text-primary">
              <p>
                <span className="font-semibold">Problem:</span> Generating weekly product metrics reports required manually pulling data from three different sources, copying it into a spreadsheet, and formatting it for the team—every Monday morning.
              </p>
              <p>
                <span className="font-semibold">Solution:</span> Built a Python script that pulls data from their database, Google Analytics, and Mixpanel, compiles it into a formatted report, and emails it to the team automatically every Monday at 8 AM.
              </p>
              <p>
                <span className="font-semibold">Result:</span> Reclaimed 90 minutes every week, eliminated manual errors, and gave the team consistent, on-time insights to start their week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What You Can Expect After Implementation */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What You Can Expect After Implementation
        </h2>
        <div className="rounded-md border border-border bg-background p-8"
          style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
        >
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Time Savings:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Reclaim hours each week that were previously spent on manual, repetitive tasks
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Faster Response Times:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Instant notifications and automated follow-ups mean customers and leads get responses in minutes, not hours
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Reduced Errors:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Eliminate copy-paste mistakes, missed steps, and "I forgot to do that" moments
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Better Data Consistency:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Information flows smoothly between your tools—no more outdated spreadsheets or missing entries
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Peace of Mind:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Stop worrying about whether routine tasks are getting done—they just happen, reliably, every time
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Scalability:</span>
                <p className="text-text-primary leading-relaxed mt-1">
                  Your workflows can handle 10x the volume without requiring 10x the team
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: How the Process Works */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          How the Process Works
        </h2>
        <div className="space-y-6">
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-3 text-lg font-semibold text-text-primary flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-bold">1</span>
              Discovery & Planning
            </h3>
            <p className="text-text-primary leading-relaxed ml-10">
              We start with a short discovery call (30–45 minutes) to understand your workflows, identify the 1–2 highest-impact tasks to automate, and map out the triggers, actions, and desired outcomes. You'll walk away with a clear plan of what we're building.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-3 text-lg font-semibold text-text-primary flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-bold">2</span>
              Build & Configuration
            </h3>
            <p className="text-text-primary leading-relaxed ml-10">
              I build the automation using the right tool for your needs—whether that's Python scripts, Zapier/Make workflows, Airtable automations, or custom API integrations. You get access to watch progress and provide quick feedback as needed.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-3 text-lg font-semibold text-text-primary flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-bold">3</span>
              Testing & Iteration
            </h3>
            <p className="text-text-primary leading-relaxed ml-10">
              Before going live, we test the automation with real (or near-real) data to make sure it handles edge cases, errors, and unexpected inputs gracefully. If something doesn't work as expected, we adjust it—no surprises.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-3 text-lg font-semibold text-text-primary flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-bold">4</span>
              Delivery & Walkthrough
            </h3>
            <p className="text-text-primary leading-relaxed ml-10">
              Once it's live, I walk you and your team through how it works, how to monitor it, and how to make simple edits if needed. You also get documentation and access to the automation code/configuration—it's yours to keep and modify.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6: Tools & Technology Used */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Tools & Technology Used
        </h2>
        <div className="space-y-6 text-text-primary leading-relaxed max-w-3xl">
          <p>
            The right tool depends on your workflows, existing tech stack, and future flexibility needs. Here's what's typically used in Automation Sprint projects:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-text-primary mb-2">Automation Platforms</h3>
              <p className="text-text-primary leading-relaxed">
                <span className="font-medium">Zapier, Make (formerly Integromat), n8n</span> — Used for no-code/low-code automations that connect popular apps like Google Sheets, Slack, HubSpot, Stripe, and more. Great for speed and ease of editing later.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-2">Custom Scripts</h3>
              <p className="text-text-primary leading-relaxed">
                <span className="font-medium">Python, Node.js</span> — Used for more complex workflows, custom data transformations, or when you need full control and don't want to rely on third-party platforms. Can be hosted on your own server or cloud.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-2">Database & Workflow Tools</h3>
              <p className="text-text-primary leading-relaxed">
                <span className="font-medium">Airtable, Google Sheets, Notion</span> — Used as central hubs for data collection, triggering automations, or storing results. Often combined with automation platforms for easy team access.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-2">API Integrations</h3>
              <p className="text-text-primary leading-relaxed">
                <span className="font-medium">Custom API connections</span> — Used to connect tools that don't have native integrations or to build more reliable, performant workflows than platform connectors allow.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-2">Monitoring & Error Handling</h3>
              <p className="text-text-primary leading-relaxed">
                <span className="font-medium">Logging, alerts, retry logic</span> — Every automation includes basic error handling so you get notified if something breaks (and it doesn't just silently fail).
              </p>
            </div>
          </div>

          <div className="rounded-md bg-surface-raised border border-border p-6 mt-6">
            <p className="text-sm text-text-primary">
              <span className="font-semibold">Note:</span> Tool choice depends on your stack—I adapt to what you already use and what makes the most sense for your team's technical comfort level.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Frequently Asked Questions */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-2 text-lg font-semibold text-text-primary">
              How long does this take?
            </h3>
            <p className="text-text-primary leading-relaxed">
              Most Automation Sprint projects are delivered in 2–4 days after the discovery call. Simple workflows (like form-to-CRM) can be done in a day; more complex multi-step automations may take the full 4 days.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-2 text-lg font-semibold text-text-primary">
              Do I need to be technical to use this?
            </h3>
            <p className="text-text-primary leading-relaxed">
              No. The automation runs behind the scenes—you don't need to write code or understand how it works. I'll show you how to monitor it and make simple changes if you want, but it's designed to "just work."
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-2 text-lg font-semibold text-text-primary">
              Will this work with my existing tools and website?
            </h3>
            <p className="text-text-primary leading-relaxed">
              In most cases, yes. If your tools have APIs, webhooks, or are supported by platforms like Zapier, they can be connected. If you're using custom or legacy software, we'll discuss options during the discovery call—sometimes a workaround is needed.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-2 text-lg font-semibold text-text-primary">
              Is this a one-time setup or will I need ongoing support?
            </h3>
            <p className="text-text-primary leading-relaxed">
              It's a one-time build with no lock-in. The automation is yours to keep and modify. If you want help adding more workflows later or need troubleshooting, you can book another sprint or request ongoing support—but it's not required.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-2 text-lg font-semibold text-text-primary">
              What if something breaks or stops working?
            </h3>
            <p className="text-text-primary leading-relaxed">
              Every automation includes error handling and logging so you'll be notified if something fails. If a connected tool changes its API or a workflow needs adjustment, you can either fix it yourself (with the documentation provided) or request a quick update.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-2 text-lg font-semibold text-text-primary">
              Can I automate more than 1–2 workflows?
            </h3>
            <p className="text-text-primary leading-relaxed">
              Absolutely. The sprint is scoped to 1–2 workflows to keep the timeline short and the price accessible. If you want to automate more, you can book additional sprints or we can design a custom package with more comprehensive automation coverage.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-2 text-lg font-semibold text-text-primary">
              How much does it cost?
            </h3>
            <p className="text-text-primary leading-relaxed">
              Starting at $220 for a focused sprint covering 1–2 workflows. Final price depends on complexity, number of tools involved, and any custom API work required. You'll get a clear quote after the discovery call—no surprises.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}
          >
            <h3 className="mb-2 text-lg font-semibold text-text-primary">
              What happens if I'm not happy with the result?
            </h3>
            <p className="text-text-primary leading-relaxed">
              We test and iterate together during the build process, so you see progress and can request changes before delivery. If something isn't working as expected at the end, I'll fix it—no additional cost.
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: Next Steps */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Next Steps
        </h2>
        <div className="rounded-md border border-accent-secondary/30 bg-surface-raised p-8">
          <p className="mb-6 text-base text-text-primary leading-relaxed max-w-2xl">
            If you think this could help your business, the next step is a short call to see if it's a good fit. We'll identify the workflows that would save you the most time, map out what we'd build, and give you a clear timeline and price.
          </p>
          <p className="mb-6 text-sm text-text-secondary max-w-2xl">
            No obligation. No pressure. Just a quick conversation to see if automation makes sense for your business right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
            >
              Book a Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact#form"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised group"
            >
              Send a Message Instead
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Stop doing the same work twice.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
          >
            🤖 Automate My Workflow
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
