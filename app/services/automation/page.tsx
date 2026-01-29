import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Business Process Automation | Workflow Automation Services',
  description: 'Automate repetitive tasks with Zapier, Make, Python, and API integrations. From lead routing to reporting—let automation handle the manual work.',
  path: '/services/automation',
});

export default function AutomationPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link href="/services" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors">
            ← Back to Services
          </Link>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Automate the Repetitive Stuff That Eats Your Time
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          From lead routing to reporting, I build automations that let you focus on what actually matters.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $200
          </span>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
          Automate My Workflow
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Every business has a manual bottleneck
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            You copy-paste data. You send the same email every week. You move leads from form to CRM. What if that all just…happened? I build automations that replace manual tasks—saving hours and removing human error.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Typical Automations Include:
        </h2>
        <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
          <ul className="space-y-4">
            {[
              'Lead capture → CRM entry + Slack ping',
              'New order → invoice + customer email',
              'Daily/weekly metrics pulled from analytics and emailed',
              'Content updates or scheduling via form → site or Notion',
              'Tools used: Zapier, Make, Python scripts, Airtable automations, API hooks',
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
          Automate Tasks Like:
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'New lead notification + enrichment',
            'Internal reminders and approvals',
            'Report generation + file exports',
            'Content workflows for blog/podcast',
          ].map((task, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <p className="text-text-primary">{task}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Setup Time
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed"><span className="font-semibold">2–4 days</span> from spec to live</p>
          <p className="text-text-primary leading-relaxed">Walkthrough included</p>
          <p className="text-text-secondary leading-relaxed">Most automations can be adjusted without code after setup</p>
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
            At its core, this service eliminates the repetitive manual work that drains your time and creates errors. Instead of copying data between tools, sending the same updates, or manually triggering tasks, automations run in the background—connecting your apps, moving information, and completing workflows without you lifting a finger.
          </p>
          <p>
            After implementation, the tasks that used to take you 5, 10, or 30 minutes a day just happen. Leads flow into your CRM. Reports land in your inbox. Orders trigger invoices and customer emails. You no longer worry about forgetting a step or making a copy-paste mistake.
          </p>
          <p>
            This isn't about replacing your entire operation with robots. It's about identifying the 2–5 workflows eating your week and making them automatic, so you can focus on strategy, relationships, and growth.
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
            <h3 className="mb-4 text-xl font-semibold text-text-primary">✅ Great Fit If You:</h3>
            <ul className="space-y-3">
              {[
                'Do the same task (data entry, notifications, reporting) multiple times per week',
                'Use multiple tools that don\'t talk to each other (form → CRM, analytics → email, etc.)',
                'Want to scale your operations without hiring another admin or ops person',
                'Need consistent, error-free execution of routine workflows',
                'Spend more time managing tasks than doing high-value work',
                'Have a clear sense of what\'s manual and repetitive in your day-to-day',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary">🚫 Not a Great Fit If You:</h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">•</span>
                <span>You need someone to figure out what your processes should be (this is implementation, not consulting)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">•</span>
                <span>Your workflow changes every week and can't be standardized</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">•</span>
                <span>You're looking for enterprise-scale RPA or IT infrastructure automation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">•</span>
                <span>You don't have access to the tools/accounts that need to be connected</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Real-World Examples
        </h2>
        <div className="space-y-8">
          <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 1: Marketing Agency Lead Routing</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-secondary">New leads from website forms sat in an inbox for hours. By the time someone manually entered them into the CRM and notified sales, prospects had moved on.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-secondary">Built a Zapier automation connecting Typeform → HubSpot CRM → Slack. When a lead submits the form, they're instantly added to HubSpot with proper tags, and the sales team gets a Slack ping with contact details.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-secondary">Response time dropped from 4+ hours to under 15 minutes. Lead conversion improved 22% in the first month. Zero manual data entry.</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 2: E-commerce Order Processing</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-secondary">A Shopify store owner spent 30 minutes every morning manually generating invoices, sending confirmation emails, and updating an internal fulfillment tracker in Airtable.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-secondary">Created a Make automation that triggers when a new order is placed. The workflow generates a PDF invoice, sends a branded email to the customer, logs the order in Airtable, and pings the fulfillment team.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-secondary">Owner saved 2.5 hours per week. Customer satisfaction increased due to instant confirmation emails. Zero missed orders or manual errors.</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 3: Weekly Performance Reporting</h3>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-secondary">A SaaS founder manually pulled data from Google Analytics, Stripe, and their database every Monday morning to create a weekly report for investors. It took 45–60 minutes and was easy to forget.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-secondary">Built a Python script scheduled to run every Monday at 8am. It pulls metrics from Analytics, Stripe, and their PostgreSQL database, formats them into a clean table, and emails the report to the founder and key stakeholders.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-secondary">Founder reclaimed an hour every week. Reports are now consistent, never late, and include more metrics than before. Stakeholders appreciate the reliability.</p>
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
        <div className="space-y-6 max-w-3xl">
          <p className="text-text-primary leading-relaxed">
            Once your automation is live, here's what changes:
          </p>
          <ul className="space-y-4">
            {[
              'Time savings: Reclaim 2–10+ hours per week depending on the workflows automated',
              'Consistency: Every task executes the same way, every time—no forgotten steps or human errors',
              'Speed: Workflows that used to take 10–30 minutes now happen in seconds',
              'Scalability: Handle 10x more volume without hiring or burning out',
              "Clarity: You'll know exactly what happens when, with logs and notifications to keep you informed",
              "Peace of mind: Stop worrying about whether something got done—it's automatic",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-text-secondary leading-relaxed mt-6">
            Most clients report feeling a sense of relief within the first week—like a weight has been lifted. You'll wonder why you waited so long to automate it.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          How the Process Works
        </h2>
        <div className="space-y-8 max-w-3xl">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">1. Discovery / Setup</h3>
            <p className="text-text-secondary leading-relaxed">
              We start with a short conversation to map out the workflow: what triggers it, what steps happen, what tools are involved, and what the end result should be. I'll ask for access to the relevant accounts (read-only where possible) and clarify any edge cases.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">2. Build / Configuration</h3>
            <p className="text-text-secondary leading-relaxed">
              I build the automation using the best tool for the job—Zapier, Make, Python scripts, or API integrations. You'll get a draft version to review, along with a diagram or walkthrough showing how it works.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">3. Testing & Iteration</h3>
            <p className="text-text-secondary leading-relaxed">
              We test the automation with real data in a safe environment. I'll run it through edge cases, confirm it handles errors gracefully, and make adjustments based on your feedback.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">4. Delivery & Walkthrough</h3>
            <p className="text-text-secondary leading-relaxed">
              Once it's live, I walk you through how it works, how to monitor it, and how to make simple adjustments (if applicable). You'll also get documentation and support for the first week to ensure everything runs smoothly.
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
        <div className="space-y-6 max-w-3xl">
          <p className="text-text-primary leading-relaxed">
            I choose the right tool for your workflow, budget, and existing stack. Common tools include:
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">Automation Platforms</h3>
              <p className="text-text-secondary leading-relaxed">
                Zapier, Make (formerly Integromat), n8n — used for connecting apps like Slack, HubSpot, Google Sheets, Shopify, Typeform, and hundreds more. Great for no-code automation that you can adjust later.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">Custom Scripts</h3>
              <p className="text-text-secondary leading-relaxed">
                Python, Node.js — used when you need more control, custom logic, or integration with databases and APIs that aren't supported by automation platforms.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">Data & Storage</h3>
              <p className="text-text-secondary leading-relaxed">
                Airtable, Google Sheets, Notion, PostgreSQL — used for logging data, tracking workflows, or serving as a lightweight database for automation.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">API Integrations</h3>
              <p className="text-text-secondary leading-relaxed">
                REST APIs, webhooks — used to connect tools that don't have pre-built integrations. I build custom API connections when needed.
              </p>
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed italic mt-6">
            Note: Tool choice depends on your stack and budget. I adapt to what you already use whenever possible.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-8 max-w-3xl">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">How long does it take to build an automation?</h3>
            <p className="text-text-secondary leading-relaxed">
              Most automations take 2–4 days from initial conversation to live deployment. Simple workflows (like form → email) can be done faster; complex multi-step workflows with custom logic may take longer. I'll give you a timeline upfront.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Do I need technical knowledge to use the automation after it's built?</h3>
            <p className="text-text-secondary leading-relaxed">
              No. Most automations are set-it-and-forget-it. If you're using a platform like Zapier or Make, I'll show you how to turn it on/off or make simple edits (like changing an email address). For custom scripts, I handle updates for you.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Will this work with my existing tools?</h3>
            <p className="text-text-secondary leading-relaxed">
              Very likely. Platforms like Zapier and Make integrate with thousands of apps (Slack, HubSpot, Shopify, Google Workspace, etc.). If your tool has an API or webhook support, I can connect it. I'll confirm compatibility during discovery.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Is this a one-time setup or ongoing?</h3>
            <p className="text-text-secondary leading-relaxed">
              It's a one-time setup with optional ongoing support. Once the automation is live, it runs automatically. If you need updates, new workflows, or troubleshooting later, we can discuss a support retainer or project-based updates.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What if something breaks or stops working?</h3>
            <p className="text-text-secondary leading-relaxed">
              I build automations with error handling and notifications, so you'll know if something fails. Most issues are due to API changes or account disconnections, which are easy to fix. I provide one week of post-launch support to ensure stability, and you can reach out for troubleshooting anytime.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Can I see examples of automations you've built?</h3>
            <p className="text-text-secondary leading-relaxed">
              Yes—check out the Real-World Examples section above. I can also share workflows similar to your use case during our initial conversation.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">How much does this cost?</h3>
            <p className="text-text-secondary leading-relaxed">
              Starting at $200 for simple workflows. More complex automations (multi-step, custom scripts, database integration) are priced based on scope. I'll give you a fixed quote after understanding your needs.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What if I need multiple automations?</h3>
            <p className="text-text-secondary leading-relaxed">
              We can bundle them into a package. Many clients start with one workflow, see the results, and come back for more. I offer discounts for multi-workflow projects.
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
            If you're spending hours each week on repetitive tasks that could be automated, let's talk. The next step is a short call to understand your workflow and see if automation is a good fit.
          </p>
          <p className="text-text-secondary leading-relaxed">
            No obligation, no pressure—just a conversation about what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
              Schedule a Call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link href="/contact#form" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised group">
              Send a Message
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Free your team from copy/paste.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
            Automate My Workflow
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
