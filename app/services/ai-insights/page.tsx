import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'AI Business Insights | Predictive Analytics & Forecasting',
  description: 'Use AI to predict sales, identify churn risks, and surface insights your dashboards miss. Turn your data into actionable business intelligence.',
  path: '/services/ai-insights',
});

export default function AIInsightsPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link href="/services" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors">
            ← Back to Services
          </Link>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Predict What Happens Next—with Your Own Data
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          Use AI to spot trends, forecast sales, or surface insights your dashboards miss—without a data team.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $400
          </span>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
          Analyze My Business with AI
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          You're sitting on valuable data—and not using it.
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            If you're tracking sales, leads, traffic, or user behavior, there's a story in the numbers. AI tools can read that story—predicting future behavior, spotting risk, or automating decisions. I help you unlock that power using your existing stack.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Deliverables
        </h2>
        <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
          <ul className="space-y-4">
            {[
              'Custom AI models using your existing data (CSV, Airtable, analytics exports, etc.)',
              'Sales forecasting, churn prediction, or customer segmentation',
              'Visual dashboards or automated email reports',
              'Built using Python, Pandas, scikit-learn, or OpenAI for interpretation',
              'Option for scheduled automation (weekly/monthly)',
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
          Examples
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Predict monthly MRR based on past trends',
            'Identify which users are likely to churn',
            'Analyze conversion rates by traffic source or campaign',
            'Automate reports for investors or teams',
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
          Delivery
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed"><span className="font-semibold">3–5 day</span> delivery</p>
          <p className="text-text-primary leading-relaxed">Data access handled securely via encrypted share or API</p>
          <p className="text-text-secondary leading-relaxed">Includes setup, walkthrough, and model explanation</p>
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
            At its core, this service turns your existing business data into actionable predictions and insights. Instead of just looking at what happened in the past, you'll see what's likely to happen next—and why.
          </p>
          <p>
            I build custom AI models using your sales data, customer behavior, or analytics exports to forecast trends, spot risks, and surface patterns that standard dashboards miss. You don't need a data science team or expensive tools. If you have data in a spreadsheet, CRM, or analytics platform, we can work with it.
          </p>
          <p>
            After implementation, you'll have automated reports, visual dashboards, or predictive models that help you make decisions faster—without digging through raw data or guessing what comes next.
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
                'Have at least a few months of business data but aren\'t getting insights from it',
                'Want to predict sales, revenue, or churn before it happens',
                'Need to automate reporting for investors, stakeholders, or your team',
                'Are tired of exporting CSVs and manually analyzing trends',
                'Want to identify which customers are most likely to buy, cancel, or upgrade',
                'Need a custom solution but don\'t have the budget for a full-time data analyst',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-accent-primary flex-shrink-0 mt-1">•</span>
                  <span className="text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary">🚫 Not a Great Fit If You:</h3>
            <ul className="space-y-3">
              {[
                'You have very little historical data (less than a month or two)',
                'You need a real-time dashboard tool (this is for analysis and forecasting, not live monitoring)',
                'You already have a dedicated data science or analytics team',
                'Your data is highly sensitive and cannot be exported or shared securely',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-text-secondary flex-shrink-0 mt-1">•</span>
                  <span className="text-text-primary leading-relaxed">{item}</span>
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
        <div className="space-y-8">
          {[
            {
              title: 'SaaS Startup with Growing Churn',
              problem: 'A B2B SaaS company noticed monthly churn increasing but didn\'t know which users were at risk or why.',
              solution: 'Built a churn prediction model using login frequency, feature usage, and support ticket data. Created a weekly automated report highlighting high-risk accounts.',
              result: 'The team proactively reached out to at-risk customers, reducing churn by 18% over three months.',
            },
            {
              title: 'Ecommerce Brand Planning Inventory',
              problem: 'An online store wanted to predict monthly sales by product category to avoid overstocking or running out during busy seasons.',
              solution: 'Analyzed past sales trends and seasonal patterns, then built a forecasting model that predicted the next quarter\'s revenue by category.',
              result: 'The founder ordered inventory with confidence, avoided $12K in overstock costs, and didn\'t miss any high-demand items.',
            },
            {
              title: 'Founder Preparing for Investor Updates',
              problem: 'A startup founder spent hours each month pulling data from Stripe, Google Analytics, and Notion to create investor reports.',
              solution: 'Automated the entire process—data was pulled, analyzed, and formatted into a visual PDF report sent via email every month.',
              result: 'The founder saved 4+ hours per month and delivered more consistent, data-backed updates to investors.',
            },
          ].map((example, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6 sm:p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
              <h3 className="mb-4 text-lg font-semibold text-text-primary">{example.title}</h3>
              <div className="space-y-3 text-text-primary leading-relaxed">
                <p><span className="font-semibold text-accent-primary">Problem:</span> {example.problem}</p>
                <p><span className="font-semibold text-accent-primary">Solution:</span> {example.solution}</p>
                <p><span className="font-semibold text-accent-primary">Result:</span> {example.result}</p>
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
              'Stop guessing—you'll have data-backed forecasts for revenue, churn, or customer behavior',
              'Save hours each week by automating reports and analysis',
              'Identify at-risk customers or high-value opportunities before they become obvious',
              'Make faster, more confident decisions about inventory, hiring, marketing spend, or pricing',
              'Present clear, visual insights to investors, stakeholders, or your team without manual data wrangling',
              'Reduce stress by knowing what's coming instead of reacting to surprises',
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
              description: 'We start with a short call to understand what you want to predict or analyze. You'll share access to your data (via CSV export, API, or read-only database access). I'll confirm what's feasible and outline the approach.',
            },
            {
              step: '2. Build & Configuration',
              description: 'I build the custom model using Python, Pandas, scikit-learn, or AI tools like OpenAI. Depending on your needs, this might include forecasting, segmentation, or automated report generation.',
            },
            {
              step: '3. Testing & Iteration',
              description: 'I test the model against your historical data to ensure accuracy, then refine based on your feedback. If you want automation, I'll set up scheduled runs (weekly, monthly, etc.).',
            },
            {
              step: '4. Delivery & Walkthrough',
              description: 'You'll receive the working model, dashboard, or automated report along with a walkthrough call. I'll explain how it works, what the results mean, and how to use it going forward.',
            },
          ].map((phase, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
              <h3 className="mb-2 text-lg font-semibold text-accent-primary">{phase.step}</h3>
              <p className="text-text-primary leading-relaxed">{phase.description}</p>
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
        <div className="space-y-6 max-w-3xl">
          <p className="text-text-primary leading-relaxed">
            I adapt to your existing stack and data sources. Here's what I typically use:
          </p>
          <div className="space-y-4">
            {[
              {
                category: 'AI & Machine Learning',
                description: 'Python, Pandas, scikit-learn, TensorFlow, or OpenAI for predictive modeling and pattern recognition',
              },
              {
                category: 'Data Sources',
                description: 'CSV exports, Google Sheets, Airtable, Stripe, analytics platforms (Google Analytics, Mixpanel), CRMs, or direct database access',
              },
              {
                category: 'Visualization & Reporting',
                description: 'Matplotlib, Plotly, or Looker Studio for dashboards; automated PDF or email reports',
              },
              {
                category: 'Automation',
                description: 'Scheduled scripts via cron jobs, Zapier, or serverless functions for recurring analysis',
              },
            ].map((tech, idx) => (
              <div key={idx}>
                <h3 className="mb-1 text-base font-semibold text-accent-primary">{tech.category}</h3>
                <p className="text-text-primary leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed italic">
            Note: Tool choice depends on your data format and goals—I'll recommend the best fit during discovery.
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
              question: 'How long does this take?',
              answer: 'Most projects are delivered in 3–5 days, depending on data complexity and scope. Simple forecasting or segmentation can be faster; more advanced automation or multi-source analysis may take the full timeline.',
            },
            {
              question: 'Do I need technical knowledge to use the results?',
              answer: 'No. I'll deliver everything with clear explanations, visual dashboards, or automated reports that are easy to understand. You'll get a walkthrough call to ensure you're comfortable using the insights.',
            },
            {
              question: 'Will this work with my existing tools and data?',
              answer: 'Yes. As long as you can export your data (CSV, API, or read-only access), I can work with it. Common sources include Stripe, Google Analytics, Airtable, Notion, Mixpanel, or any CRM.',
            },
            {
              question: 'Is this a one-time setup or ongoing?',
              answer: 'It's flexible. You can start with a one-time analysis or forecasting model. If you want recurring reports or automated updates, I can set up scheduled automation for a small monthly fee.',
            },
            {
              question: 'What if I don't have much data?',
              answer: 'You'll need at least a few months of historical data for meaningful predictions. If your dataset is very small, I'll let you know upfront and suggest alternatives like trend analysis or starting with automation to collect better data going forward.',
            },
            {
              question: 'Is my data secure?',
              answer: 'Yes. All data is handled via encrypted shares, read-only access, or secure API keys. I don't store your data long-term unless you explicitly request ongoing automation.',
            },
            {
              question: 'Can you integrate this with my existing dashboard?',
              answer: 'In most cases, yes. If you use tools like Looker Studio, Tableau, or custom dashboards, I can format the output to integrate smoothly. We'll discuss your setup during discovery.',
            },
            {
              question: 'What if the predictions aren't accurate?',
              answer: 'AI models are based on historical patterns, so accuracy improves with more data. I'll test the model and refine it during the process. If something isn't working, we'll iterate or adjust the approach—no guesswork.',
            },
          ].map((faq, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
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
            If you think AI-based insights could help you make better decisions, forecast more accurately, or automate your reporting, the next step is a short call to see if it's a good fit.
          </p>
          <p className="text-text-primary leading-relaxed">
            We'll talk about your data, your goals, and what you want to predict or analyze. No obligation—just a quick conversation to see if this makes sense for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link href="/contact#form" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Let your data make the decisions.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
            Analyze My Business with AI
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
