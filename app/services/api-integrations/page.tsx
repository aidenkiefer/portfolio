import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'API Integrations & Tool Connections | Custom Integrations',
  description: 'Connect your CRM, email platform, and data sources with custom-built API integrations. REST, GraphQL, webhooks, and OAuth2 setup.',
  path: '/services/api-integrations',
});

export default function APIIntegrationsPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link href="/services" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors">
            ← Back to Services
          </Link>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Get Your Tools Talking to Each Other
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          Connect your CRM, email platform, web app, or data source using custom-built API logic—no duct tape required.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $240
          </span>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
          Set Up an Integration
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Disjointed systems slow everything down
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            You've got data in one tool and actions in another. You manually sync customers, copy data between tools, or rely on brittle spreadsheets. I build robust API connections so your platforms work together—and scale with you.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Integration Package Includes:
        </h2>
        <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
          <ul className="space-y-4">
            {[
              '1–2 custom-built API connections (REST, GraphQL, Webhooks)',
              'Authentication handling (OAuth2, tokens, etc.)',
              'Retry logic and error logging setup',
              'Data formatting, transformation, and syncing',
              'JSON-based logic for mapping between systems',
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
          Example Integrations
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Stripe → CRM → Slack notifications',
            'Webflow CMS → Notion database → Email updates',
            'Internal tool → Google Sheets → Reporting dashboards',
            'Form → internal API → Slack + email chain',
          ].map((example, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <p className="text-text-primary">{example}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Delivery Timeline
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed"><span className="font-semibold">3–5 days</span> depending on system complexity</p>
          <p className="text-text-primary leading-relaxed">Full walkthrough and test logs included</p>
          <p className="text-text-secondary leading-relaxed">Optional long-term monitoring available</p>
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
            At its core, this service connects your digital tools so they can share data and trigger actions automatically—without you having to manually copy, paste, or export between platforms.
          </p>
          <p>
            Most businesses run on multiple tools: a CRM for customers, Stripe for payments, Slack for notifications, spreadsheets for reporting. When these systems don't talk to each other, you waste time on manual updates, risk data errors, and miss opportunities to automate workflows.
          </p>
          <p>
            I build custom API integrations that let your tools sync in real time. Whether it's pushing form submissions to your CRM, sending Stripe payment data to Google Sheets, or triggering Slack alerts when something important happens—this service removes the manual friction and makes your tech stack work like a single, unified system.
          </p>
          <p>
            After implementation, you no longer have to babysit data transfers or worry about things falling through the cracks. Your tools work together automatically, and you get back hours every week.
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
            <h3 className="mb-4 text-xl font-semibold text-text-primary">Great Fit If You:</h3>
            <ul className="space-y-3">
              {[
                'Are manually copying data between tools (CRM, spreadsheets, email, payment processors)',
                'Need your website, app, or internal tool to send or receive data from external platforms',
                'Want to automate notifications, reporting, or data syncing across your stack',
                'Are using multiple SaaS tools that don\'t have native integrations',
                'Need a custom workflow that connects 2+ systems (e.g., form → CRM → Slack → email)',
                'Want to scale operations without hiring someone to manage data transfers',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary">Not a Great Fit If You:</h3>
            <ul className="space-y-3">
              {[
                'You only need a simple Zapier or Make workflow (I recommend using those first)',
                'Your tools already have native integrations that meet your needs',
                'You need a full-scale enterprise integration platform with dedicated infrastructure',
                'You\'re looking for ongoing management or a dedicated integration team (this is a setup service)',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-text-secondary text-xl flex-shrink-0 mt-0.5">✕</span>
                  <span className="text-text-secondary leading-relaxed">{item}</span>
                </li>
              ))}
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
        <div className="space-y-6">
          {[
            {
              title: 'E-commerce Brand',
              problem: 'Every time a customer made a purchase, they had to manually add them to their CRM and send a welcome email. High-value orders weren\'t flagged for the team.',
              solution: 'Built a Stripe webhook integration that automatically sends new customer data to their CRM, triggers a personalized email sequence, and posts high-value orders to a dedicated Slack channel.',
              result: 'Saved 10+ hours per week on manual data entry. No more missed follow-ups. Team now responds to VIP customers within minutes.',
            },
            {
              title: 'SaaS Startup',
              problem: 'Their marketing team was exporting lead data from their web app, cleaning it in Excel, then uploading it to their email platform—every single day.',
              solution: 'Created a custom API connection between their app database and their email platform (using REST API + OAuth2). New leads are now synced automatically with proper segmentation tags.',
              result: 'Eliminated daily manual exports. Leads enter email campaigns within minutes instead of 24+ hours. Marketing team can focus on strategy instead of spreadsheets.',
            },
            {
              title: 'Consulting Firm',
              problem: 'Client intake forms were submitted via their website, but the data lived in a disconnected form tool. They had to manually copy everything into Notion, then notify the team in Slack.',
              solution: 'Built a webhook integration that sends form submissions to Notion (formatted as a database entry) and posts a summary to Slack with a link to the full record.',
              result: 'New client inquiries are now tracked instantly. No lost leads. The team responds faster and the intake process feels seamless.',
            },
          ].map((example, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
              <h3 className="mb-4 text-lg font-semibold text-text-primary">{example.title}</h3>
              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-text-primary">Problem: </span>
                  <span className="text-text-primary">{example.problem}</span>
                </div>
                <div>
                  <span className="font-semibold text-text-primary">Solution: </span>
                  <span className="text-text-primary">{example.solution}</span>
                </div>
                <div>
                  <span className="font-semibold text-text-primary">Result: </span>
                  <span className="text-text-primary">{example.result}</span>
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
          What You Can Expect After Implementation
        </h2>
        <div className="space-y-4 max-w-3xl">
          <ul className="space-y-3">
            {[
              'Your tools sync data automatically—no more manual copying or exporting',
              'Real-time notifications when important events happen (payments, new leads, errors)',
              'Reduced risk of data errors or missed updates',
              'Hours saved every week on repetitive admin tasks',
              'Faster response times to customers, leads, or internal requests',
              'Confidence that your systems are working together reliably in the background',
              'Clear documentation and test logs so you understand exactly what\'s happening',
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
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          How the Process Works
        </h2>
        <div className="space-y-6 max-w-3xl">
          {[
            {
              step: '1. Discovery & Setup',
              description: 'We start with a short call or async conversation to understand what tools you\'re using, what data needs to move where, and what the trigger should be. I\'ll ask for API access or credentials (handled securely) and review any documentation for the platforms involved.',
            },
            {
              step: '2. Build & Configuration',
              description: 'I write the integration logic—whether that\'s a REST API connection, a webhook listener, or a GraphQL query. I handle authentication (OAuth2, API keys, tokens), set up retry logic for reliability, and format the data so it arrives in the right structure on the other side.',
            },
            {
              step: '3. Testing & Iteration',
              description: 'I run test transactions to make sure data flows correctly, errors are logged, and edge cases are handled (e.g., what happens if a field is missing or a service is down). You\'ll get a summary of test results and any adjustments made.',
            },
            {
              step: '4. Delivery & Walkthrough',
              description: 'Once everything is working, I hand off the integration with full documentation: what it does, how it works, and how to monitor it. If you want ongoing monitoring or adjustments, we can discuss a maintenance plan—but the integration is yours to keep and modify.',
            },
          ].map((item, idx) => (
            <div key={idx}>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">{item.step}</h3>
              <p className="text-text-primary leading-relaxed">{item.description}</p>
            </div>
          ))}
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
            I adapt to whatever tools you're already using. Here are the most common technologies I work with:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">API Types</h3>
              <p className="text-text-primary leading-relaxed">REST APIs, GraphQL, webhooks, and SOAP (when necessary). I handle authentication methods including OAuth2, API keys, JWT tokens, and session-based auth.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">Common Platforms</h3>
              <p className="text-text-primary leading-relaxed">Stripe, Shopify, Salesforce, HubSpot, Notion, Airtable, Google Sheets, Slack, Webflow, WordPress, Zapier, Make, Twilio, SendGrid, Mailchimp, and custom internal APIs.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">Backend & Infrastructure</h3>
              <p className="text-text-primary leading-relaxed">Node.js, Python, serverless functions (Vercel, AWS Lambda, Netlify), and custom middleware. I set up logging, retry logic, and error handling to keep things reliable.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">Data Formatting</h3>
              <p className="text-text-primary leading-relaxed">JSON transformation, CSV parsing, XML handling, and custom mapping logic to ensure data arrives in the right format on both sides.</p>
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed italic">
            Tool choice depends on your stack—I adapt to what you already use and recommend the most reliable, maintainable approach for your situation.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-3xl">
          {[
            {
              question: 'How long does it take to build an integration?',
              answer: 'Most integrations take 3–5 days, depending on complexity. Simple two-tool connections (like Stripe → Slack) can be done faster. Multi-step workflows with data transformation or custom logic may take closer to a week. I\'ll give you a timeline estimate after we discuss your specific needs.',
            },
            {
              question: 'Do I need technical knowledge to use this service?',
              answer: 'No. You just need to know what tools you\'re using and what you want them to do together. I handle all the technical setup, authentication, and testing. You\'ll get a walkthrough and documentation, but you don\'t need to write any code or understand APIs.',
            },
            {
              question: 'Will this work with my existing tools?',
              answer: 'Almost certainly. As long as your tools have an API (or support webhooks, Zapier, or similar), I can connect them. If a tool doesn\'t have an API, I\'ll let you know upfront and suggest alternatives (like using a CSV export + scheduled script, or switching to a more integration-friendly platform).',
            },
            {
              question: 'What if something breaks later?',
              answer: 'I build integrations with error logging and retry logic, so they\'re resilient to temporary outages. If a platform changes its API or you need adjustments later, I offer ongoing support and maintenance plans—or I can hand off the code so your team can maintain it.',
            },
            {
              question: 'Is this a one-time setup or ongoing?',
              answer: 'This is a one-time setup service. Once the integration is live and tested, it runs automatically. If you want ongoing monitoring, alerts, or future changes, we can discuss a maintenance retainer—but it\'s not required.',
            },
            {
              question: 'Can you integrate more than two tools at once?',
              answer: 'Yes. Many workflows involve 3+ tools (e.g., form → CRM → email → Slack). The starting price covers 1–2 connections; if you need a more complex multi-tool workflow, I\'ll scope it out and give you a clear quote upfront.',
            },
            {
              question: 'Do you handle secure data like payment info or customer records?',
              answer: 'Yes, securely. I follow best practices for handling sensitive data: encrypted connections (HTTPS), secure credential storage, and compliance with platform requirements (e.g., PCI for payment data). I never store credentials in plain text, and I can sign an NDA if needed.',
            },
            {
              question: 'What if I already tried Zapier or Make and it didn\'t work?',
              answer: 'That\'s common. No-code tools are great for simple workflows, but they hit limits with custom logic, data transformation, or complex triggers. If you\'ve outgrown Zapier or need something more reliable/flexible, a custom integration is the right move. I can also work *with* Zapier/Make if that makes sense for part of your workflow.',
            },
          ].map((faq, idx) => (
            <div key={idx}>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">{faq.question}</h3>
              <p className="text-text-primary leading-relaxed">{faq.answer}</p>
            </div>
          ))}
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
            If you're spending hours every week copying data between tools—or missing opportunities because your systems don't talk to each other—this service can help.
          </p>
          <p className="text-text-primary leading-relaxed">
            The next step is a short conversation (15–20 minutes) to understand what tools you're using, what workflow you need, and whether this is a good fit. No obligation, no pressure—just a clear plan and a timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Let your systems sync like they were built that way.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
            Set Up an Integration
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
