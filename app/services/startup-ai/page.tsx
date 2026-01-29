import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2, Bot, FileText, Target } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Startup AI Jumpstart – Launch with AI Built In, Not Bolted On',
  description: 'A complete AI starter package for startups: chatbot, content workflows, and personalization. Production-ready AI that works immediately and scales. 5–7 day delivery. Starting at $350.',
  path: '/services/startup-ai',
});

export default function StartupAiPage() {
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
          Launch with AI Built In—Not Bolted On
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          A complete AI starter package to help your business attract, engage, and convert users from day one.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            $350
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
        >
          🚀 Launch My AI Stack
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/services/chatbots"
            className="block rounded-md border border-border bg-background p-6 border-l-4 border-l-accent-primary transition-all duration-200 ease-out hover:border-accent-primary hover:-translate-y-0.5"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              AI Chatbots
            </h3>
            <p className="text-sm text-text-secondary">
              Smart 24/7 customer service that handles support and captures leads
            </p>
          </Link>

          <Link
            href="/services/ai-content"
            className="block rounded-md border border-border bg-background p-6 border-l-4 border-l-accent-primary transition-all duration-200 ease-out hover:border-accent-primary hover:-translate-y-0.5"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              AI Content Workflows
            </h3>
            <p className="text-sm text-text-secondary">
              GPT-powered workflows for blogs, product descriptions, and marketing copy
            </p>
          </Link>

          <Link
            href="/services/personalization"
            className="block rounded-md border border-border bg-background p-6 border-l-4 border-l-accent-primary transition-all duration-200 ease-out hover:border-accent-primary hover:-translate-y-0.5"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              AI Personalization
            </h3>
            <p className="text-sm text-text-secondary">
              Dynamic messaging and CTAs based on visitor behavior and traffic source
            </p>
          </Link>
        </div>

        <div className="mt-8 rounded-md bg-surface-raised border border-border p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-text-primary mb-3">
            Often Combined With
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/automation" className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors">
              Automation →
            </Link>
            <Link href="/services/performance" className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors">
              Performance →
            </Link>
            <Link href="/services/internal-tools" className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors">
              Internal Tools →
            </Link>
            <Link href="/services/api-integrations" className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors">
              API Integrations →
            </Link>
          </div>
        </div>
      </section>

      {/* Problem → Promise */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Most startups wait too long to use AI effectively
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            Founders know AI can help—but stitching tools together takes time, technical skill, and experimentation. This package gives you a clean, production-ready AI setup that works immediately and scales as you grow.
          </p>
          <p>
            Instead of duct-taping tools together, you start with a solid AI foundation.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Startup AI Jumpstart Includes
        </h2>

        <div className="space-y-8">
          {/* AI Customer Service Chatbot */}
          <div className="rounded-md border border-border bg-background p-8"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Bot className="h-6 w-6 text-accent-secondary" />
              <h3 className="text-xl font-semibold text-text-primary">
                🤖 AI Customer Service Chatbot
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                'Site-embedded chatbot trained on your business',
                'Answers FAQs, explains offerings, and captures leads',
                'Routes users to the right pages or next steps',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Content Workflows */}
          <div className="rounded-md border border-border bg-background p-8"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <FileText className="h-6 w-6 text-accent-secondary" />
              <h3 className="text-xl font-semibold text-text-primary">
                ✍️ AI Content Workflows
              </h3>
            </div>
            <p className="text-text-primary mb-3">GPT-powered workflows for:</p>
            <ul className="space-y-3 ml-4">
              {[
                'Blog drafts',
                'Product descriptions',
                'Marketing or onboarding copy',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary text-sm mt-4">
              Easy-to-use templates with training included
            </p>
          </div>

          {/* AI-Powered Personalization */}
          <div className="rounded-md border border-border bg-background p-8"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-accent-secondary" />
              <h3 className="text-xl font-semibold text-text-primary">
                🎯 AI-Powered Personalization
              </h3>
            </div>
            <p className="text-text-primary mb-3">Personalized messaging or CTAs based on:</p>
            <ul className="space-y-3 ml-4">
              {[
                'Visitor behavior',
                'Traffic source',
                'Returning vs new users',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-text-secondary text-sm mt-4">
              Optimized for engagement and conversion
            </p>
          </div>
        </div>
      </section>

      {/* Timeline & Delivery */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Fast, Focused, Founder-Friendly
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed">
            <span className="font-semibold">Total delivery: ~5–7 days</span>
          </p>
          <p className="text-text-primary leading-relaxed">
            One kickoff call
          </p>
          <p className="text-text-primary leading-relaxed">
            Setup → testing → live deployment
          </p>
          <p className="text-text-primary leading-relaxed">
            Walkthrough included so you're not left guessing
          </p>
        </div>
      </section>

      {/* Ideal Use Cases */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          This Package Is Perfect If You're
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { text: 'Launching a new product or startup' },
            { text: 'Running a lean team without AI expertise' },
            { text: 'Wanting AI-powered UX without hiring engineers' },
            { text: 'Looking to stand out with modern tooling' },
          ].map((useCase, idx) => (
            <div
              key={idx}
              className="rounded-md border border-border bg-background p-6"
              style={{
                boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
              }}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-text-primary">{useCase.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Packages */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <div className="rounded-md border border-accent-secondary/30 bg-surface-raised p-8">
          <h2 className="mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
            Want a Custom AI Package?
          </h2>
          <p className="mb-6 text-base text-text-secondary leading-relaxed">
            This starter package can be expanded or combined with any other service: automation, performance optimization, dashboards, or API integrations.
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
            At its core, this package helps you <strong>launch with AI capabilities that most startups take months to build</strong>, so you can focus on your product and customers instead of infrastructure.
          </p>
          <p>
            You get a chatbot that handles customer questions 24/7, content workflows that speed up marketing and onboarding, and personalization that adapts to each visitor—all working together from day one.
          </p>
          <p>
            After implementation, you no longer have to worry about:
          </p>
          <ul className="space-y-2 ml-6">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
              <span>Manually answering the same customer questions over and over</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
              <span>Spending hours writing product descriptions or blog posts</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
              <span>Showing the same generic message to every visitor regardless of intent</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
              <span>Figuring out which AI tools to use and how to connect them</span>
            </li>
          </ul>
          <p>
            This is AI built into your business foundation, not duct-taped on later.
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

        <div className="space-y-8">
          {/* Great Fit */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6 text-accent-primary" />
              Great Fit If You
            </h3>
            <div className="space-y-3">
              {[
                'Are launching a startup or new product and want AI from day one',
                'Run a lean team without dedicated AI or engineering resources',
                "Need to move fast and can't spend months researching and testing AI tools",
                "Want to stand out with modern tooling but don't know where to start",
                "Need 24/7 customer support but can't afford a support team yet",
                'Are spending too much time on repetitive content or manual personalization',
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-md border border-border bg-background p-4"
                  style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
                >
                  <p className="text-text-primary text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Not a Great Fit */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
              <span className="text-2xl">🚫</span>
              Not a Great Fit If You
            </h3>
            <div className="space-y-3">
              {[
                'Already have a robust AI stack and dedicated engineers maintaining it',
                'Need highly specialized AI (e.g., computer vision, ML model training, custom LLMs)',
                'Want a free or DIY solution—this is a professional implementation',
                "Aren't ready to integrate AI into your customer-facing workflows",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-md border border-border bg-surface-raised p-4"
                >
                  <p className="text-text-secondary text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
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
          {/* Example 1 */}
          <div className="rounded-md border border-border bg-background p-8"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Example 1: Early-Stage SaaS Founder
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-accent-primary mb-1">Problem</h4>
                <p className="text-text-primary text-sm leading-relaxed">
                  Solo founder launching a scheduling tool. Getting 30+ questions/day about features, pricing, and integrations. Spending 2–3 hours daily answering emails instead of building.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-accent-primary mb-1">Solution</h4>
                <p className="text-text-primary text-sm leading-relaxed">
                  Deployed chatbot trained on product docs and FAQ. Added content workflows for weekly blog posts and feature announcements. Set up personalized CTAs for free-trial vs. paid users.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-accent-primary mb-1">Result</h4>
                <p className="text-text-primary text-sm leading-relaxed">
                  Support volume dropped 60%. Founder saved 10+ hours/week. Trial-to-paid conversion increased 18% from better personalization.
                </p>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="rounded-md border border-border bg-background p-8"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Example 2: E-Commerce Startup with Limited Resources
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-accent-primary mb-1">Problem</h4>
                <p className="text-text-primary text-sm leading-relaxed">
                  New DTC brand with 200+ SKUs. Writing product descriptions manually took weeks. Generic homepage messaging wasn't converting visitors from different channels.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-accent-primary mb-1">Solution</h4>
                <p className="text-text-primary text-sm leading-relaxed">
                  Built content workflow to generate SEO-optimized product descriptions in minutes. Chatbot handled sizing and shipping questions. Personalization showed different headlines for Instagram vs. Google traffic.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-accent-primary mb-1">Result</h4>
                <p className="text-text-primary text-sm leading-relaxed">
                  Launched 200+ products in 1 week instead of 6. Bounce rate from Instagram dropped 22%. Support team could focus on complex issues instead of FAQs.
                </p>
              </div>
            </div>
          </div>

          {/* Example 3 */}
          <div className="rounded-md border border-border bg-background p-8"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Example 3: B2B Service Provider Scaling Fast
            </h3>
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-accent-primary mb-1">Problem</h4>
                <p className="text-text-primary text-sm leading-relaxed">
                  Consulting firm growing quickly but drowning in lead qualification. Most inquiries weren't a good fit, wasting hours on discovery calls.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-accent-primary mb-1">Solution</h4>
                <p className="text-text-primary text-sm leading-relaxed">
                  Chatbot pre-qualified leads by asking budget and timeline questions. Content workflows automated case study creation. Personalization showed industry-specific messaging.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-accent-primary mb-1">Result</h4>
                <p className="text-text-primary text-sm leading-relaxed">
                  Reduced unqualified calls by 40%. Closed deals 20% faster with better pre-call context. Published 2x more case studies with half the effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What You Can Expect After Implementation */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What You Can Expect After Implementation
        </h2>
        <div className="space-y-6 max-w-3xl">
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              Immediate Operational Improvements
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">24/7 customer support without adding headcount</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">Content creation that takes minutes instead of hours</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">Dynamic website experience that adapts to each visitor</span>
              </li>
            </ul>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              Time Savings
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">Save 5–10 hours/week on repetitive customer questions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">Cut content production time by 60–80%</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">Eliminate manual A/B testing for messaging variants</span>
              </li>
            </ul>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              Revenue & Conversion Impact
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">Capture more leads with instant, accurate responses</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">Increase engagement with personalized user journeys</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">Improve conversion rates by showing the right message to the right visitor</span>
              </li>
            </ul>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              Clarity & Peace of Mind
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">Confidence that your AI stack is production-ready and scalable</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">Focus on building your product instead of configuring tools</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary text-sm">Know you're using modern tooling that investors and customers expect</span>
              </li>
            </ul>
          </div>
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
          {/* Step 1 */}
          <div className="rounded-md border border-border bg-background p-6 border-l-4 border-l-accent-primary"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary text-white font-semibold text-sm">
                1
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Discovery & Setup
                </h3>
                <p className="text-text-primary text-sm leading-relaxed mb-3">
                  We start with a 30-minute kickoff call to understand your business, audience, and goals. I'll ask about:
                </p>
                <ul className="space-y-1 ml-4 text-sm text-text-secondary">
                  <li>• Your most common customer questions</li>
                  <li>• What content you need to create regularly</li>
                  <li>• What visitor segments or traffic sources matter most</li>
                  <li>• Your existing stack (CMS, CRM, analytics)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="rounded-md border border-border bg-background p-6 border-l-4 border-l-accent-primary"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary text-white font-semibold text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Build & Configuration
                </h3>
                <p className="text-text-primary text-sm leading-relaxed mb-3">
                  I build and configure all three components in parallel:
                </p>
                <ul className="space-y-1 ml-4 text-sm text-text-secondary">
                  <li>• Train the chatbot on your docs, FAQs, and messaging</li>
                  <li>• Set up content workflows with templates and examples</li>
                  <li>• Configure personalization rules and segment logic</li>
                  <li>• Integrate with your existing tools (if applicable)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="rounded-md border border-border bg-background p-6 border-l-4 border-l-accent-primary"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary text-white font-semibold text-sm">
                3
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Testing & Iteration
                </h3>
                <p className="text-text-primary text-sm leading-relaxed mb-3">
                  Before going live, we test everything together:
                </p>
                <ul className="space-y-1 ml-4 text-sm text-text-secondary">
                  <li>• You test the chatbot with real questions</li>
                  <li>• We run through content workflows and refine outputs</li>
                  <li>• I show you how personalization adapts in real-time</li>
                  <li>• We make any adjustments based on your feedback</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="rounded-md border border-border bg-background p-6 border-l-4 border-l-accent-primary"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-accent-primary text-white font-semibold text-sm">
                4
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Delivery & Walkthrough
                </h3>
                <p className="text-text-primary text-sm leading-relaxed mb-3">
                  Once everything works, we deploy and I walk you through how to use and maintain each component:
                </p>
                <ul className="space-y-1 ml-4 text-sm text-text-secondary">
                  <li>• How to update chatbot training data</li>
                  <li>• How to use content workflows for different content types</li>
                  <li>• How to monitor and adjust personalization rules</li>
                  <li>• What to watch for and when to reach out for help</li>
                </ul>
                <p className="text-text-primary text-sm leading-relaxed mt-3">
                  You'll have everything documented and access to me for questions during the first 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Tools & Technology Used */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Tools & Technology Used
        </h2>
        <div className="space-y-6 max-w-3xl">
          <p className="text-text-primary leading-relaxed">
            This package uses proven, production-ready tools that work together seamlessly. The exact stack depends on what you already use—I adapt to your environment.
          </p>

          <div className="space-y-4">
            <div className="rounded-md border border-border bg-background p-6"
              style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
            >
              <h3 className="text-base font-semibold text-text-primary mb-2">
                AI Models & Platforms
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Used for chatbot intelligence, content generation, and personalization logic. Typically OpenAI (GPT-4, GPT-3.5), Anthropic Claude, or open-source models depending on your budget and requirements.
              </p>
            </div>

            <div className="rounded-md border border-border bg-background p-6"
              style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
            >
              <h3 className="text-base font-semibold text-text-primary mb-2">
                Chatbot Framework
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Used to build and deploy the chatbot. Options include custom-built solutions with LangChain, Vercel AI SDK, or managed platforms like Intercom AI, Voiceflow, or Botpress depending on integration needs.
              </p>
            </div>

            <div className="rounded-md border border-border bg-background p-6"
              style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
            >
              <h3 className="text-base font-semibold text-text-primary mb-2">
                Content Automation Tools
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Used to create reusable content workflows. May include Zapier, Make.com, or custom scripts integrated with your CMS (WordPress, Webflow, Notion, etc.).
              </p>
            </div>

            <div className="rounded-md border border-border bg-background p-6"
              style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
            >
              <h3 className="text-base font-semibold text-text-primary mb-2">
                Personalization Engine
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Used to deliver dynamic content based on visitor data. Can be custom JavaScript, segment-based rules in your analytics stack, or tools like Segment, Optimizely, or custom Next.js middleware.
              </p>
            </div>

            <div className="rounded-md border border-border bg-background p-6"
              style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
            >
              <h3 className="text-base font-semibold text-text-primary mb-2">
                Custom Code
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Used to glue everything together and handle edge cases your existing tools don't support. Written in JavaScript/TypeScript, Python, or whatever fits your stack.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-accent-secondary/30 bg-surface-raised p-4">
            <p className="text-sm text-text-secondary italic">
              <strong>Note:</strong> Tool choice depends on your existing stack, budget, and technical comfort level. I'll recommend the best fit during our kickoff call and can adapt to what you already use.
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
          {/* FAQ 1 */}
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              How long does implementation take?
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Total delivery is typically 5–7 days from kickoff to deployment. This includes setup, testing, and a walkthrough. Timeline may vary slightly depending on integration complexity and your responsiveness during testing.
            </p>
          </div>

          {/* FAQ 2 */}
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              Do I need technical knowledge to use this?
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              No. Everything is set up for you and comes with clear documentation and a walkthrough. You'll be able to update the chatbot, run content workflows, and adjust personalization without writing code. If you get stuck, you have 30 days of support included.
            </p>
          </div>

          {/* FAQ 3 */}
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              Will this work with my existing website or tools?
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Yes. This package is designed to integrate with most modern stacks—WordPress, Webflow, Next.js, Shopify, etc. During the kickoff call we'll confirm compatibility and adapt the implementation to fit your environment.
            </p>
          </div>

          {/* FAQ 4 */}
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              Is this a one-time setup or ongoing service?
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              This is a one-time implementation. Once deployed, you own and control everything. You can maintain and update it yourself, or we can discuss ongoing support or optimization on a monthly retainer basis if you prefer.
            </p>
          </div>

          {/* FAQ 5 */}
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              Are there any ongoing costs (beyond the $350)?
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              The $350 covers implementation. Some AI tools charge based on usage (e.g., API calls to OpenAI or Claude). Typical monthly costs range from $20–$100 depending on traffic and usage, but you control the budget and can set limits. I'll recommend cost-effective options during setup.
            </p>
          </div>

          {/* FAQ 6 */}
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              Can I customize or expand this later?
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              Absolutely. This package is designed to scale. You can add more workflows, train the chatbot on new content, create additional personalization rules, or combine this with other services (automation, dashboards, integrations). Just reach out when you're ready to expand.
            </p>
          </div>

          {/* FAQ 7 */}
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              What if the chatbot gives wrong answers or the content needs improvement?
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              We test thoroughly before deployment, but if issues come up, you can update the chatbot training data or content templates yourself (with the walkthrough I provide). During the first 30 days, I'm available to help troubleshoot and refine outputs at no extra cost.
            </p>
          </div>

          {/* FAQ 8 */}
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-base font-semibold text-text-primary mb-2">
              Who owns the code and data?
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed">
              You do. All code, configurations, and workflows are yours. You're not locked into any proprietary system. If you ever want to move to a different provider or manage it internally, you can.
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
        <div className="space-y-6 max-w-3xl">
          <p className="text-text-primary leading-relaxed">
            If you think this package could help your business, the next step is a short call to see if it's a good fit.
          </p>
          <p className="text-text-primary leading-relaxed">
            We'll talk about your goals, what you're building, and whether this package (or a custom variation) makes sense for where you are right now.
          </p>
          <p className="text-text-secondary text-sm leading-relaxed">
            No obligation. No pressure. Just a quick conversation to see if this is the right move.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
            >
              Book a Free Call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact#form"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised"
            >
              Send a Message Instead
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Start your business with AI done right.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
          >
            🚀 Launch My AI Stack
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
