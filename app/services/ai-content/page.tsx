import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'AI Content Workflows | Automated Blog & Copy Generation',
  description: 'Done-for-you AI content workflows that turn inputs into full-length drafts in seconds. Automate blogs, product copy, and emails with GPT-powered systems.',
  path: '/services/ai-content',
});

export default function AIContentPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link href="/services" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors">
            ← Back to Services
          </Link>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Automate Your Blog, Product Copy, and Emails with AI
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          Done-for-you AI content workflows that turn a few inputs into full-length drafts in seconds.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $120
          </span>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
          Set Up My AI Content System
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Content marketing works—until you run out of time
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            Most teams know they *should* publish blogs, write product blurbs, and send newsletters—but keeping up is brutal. You either burn hours or outsource low-quality fluff.
          </p>
          <p>
            What if you could go from outline to full draft in one click? These GPT-powered workflows save time and keep content flowing.
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
              'Custom GPT workflows built in tools like Notion AI, Make, Zapier, or Python',
              'One-click content generation templates (blog posts, ad copy, emails, etc.)',
              'Input forms or command-line tools for structured control',
              'Editing interface or Google Docs-style outputs',
              'Training on how to prompt effectively for your niche',
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
          Perfect For:
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: 'Founders', desc: 'Writing pitch decks, updates, or blogs' },
            { title: 'Shopify owners', desc: 'Needing product descriptions' },
            { title: 'Agencies', desc: 'Generating newsletter templates' },
            { title: 'Marketers', desc: 'Spinning up copy variations' },
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
          Setup Timeline
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed"><span className="font-semibold">2–3 day</span> delivery</p>
          <p className="text-text-primary leading-relaxed">Training session included</p>
          <p className="text-text-secondary leading-relaxed">Optional maintenance if you want me to refresh your prompts monthly</p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="rounded-md border border-border bg-surface-sunken p-6">
          <h3 className="mb-3 text-sm font-semibold text-text-primary uppercase tracking-wide">Bonus Add-On</h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            <strong className="text-text-primary">$50 Add-on:</strong> Monthly content refresh – update prompts + tweak outputs for current campaigns
          </p>
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
            At its core, this service helps you turn ideas into finished content drafts by building custom AI workflows that understand your voice and format requirements, so you can publish more without burning out.
          </p>
          <p>
            Instead of staring at a blank screen or hiring expensive writers, you fill out a simple form or template with the key points you want to cover. The AI workflow generates a full first draft—blog post, product description, email sequence, or ad copy—in seconds.
          </p>
          <p>
            After implementation, you no longer worry about content bottlenecks. You can launch campaigns faster, test more variations, and keep your audience engaged without the manual grind.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Who This Service Is Best For
        </h2>

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0" />
            Great Fit If You:
          </h3>
          <ul className="space-y-3 ml-7 max-w-3xl">
            <li className="text-text-primary leading-relaxed">Need to publish blogs, newsletters, or product copy regularly but don't have the time or team</li>
            <li className="text-text-primary leading-relaxed">Want to test multiple content variations (headlines, ad copy, landing pages) quickly</li>
            <li className="text-text-primary leading-relaxed">Have a content backlog or campaign ideas but struggle to get them written and shipped</li>
            <li className="text-text-primary leading-relaxed">Are comfortable editing AI-generated drafts to add your final polish and personality</li>
            <li className="text-text-primary leading-relaxed">Need structured, repeatable workflows (like weekly blog posts or daily social captions)</li>
            <li className="text-text-primary leading-relaxed">Want to maintain a consistent brand voice across all your content without writing everything from scratch</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
            <span className="text-lg">🚫</span>
            Not a Great Fit If You:
          </h3>
          <ul className="space-y-3 ml-7 max-w-3xl">
            <li className="text-text-primary leading-relaxed">Expect AI to publish final, human-level thought leadership without any editing</li>
            <li className="text-text-primary leading-relaxed">Need highly technical or deeply researched content (whitepapers, academic writing, legal docs)</li>
            <li className="text-text-primary leading-relaxed">Don't have time to review and approve outputs before publishing</li>
            <li className="text-text-primary leading-relaxed">Want a completely hands-off content agency (this is a tool + training, not managed content services)</li>
          </ul>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Real-World Examples
        </h2>

        <div className="space-y-8">
          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 1: E-commerce Founder</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-secondary leading-relaxed">Had 200+ products with no descriptions, losing sales due to thin content and poor SEO.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-secondary leading-relaxed">Built a Make.com workflow that pulled product specs from their Shopify store and generated SEO-friendly descriptions with key features, benefits, and use cases.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-secondary leading-relaxed">All 200 products got descriptions in under 3 hours. Organic traffic increased 40% in 6 weeks, and the founder now updates descriptions monthly with one click.</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 2: B2B SaaS Marketer</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-secondary leading-relaxed">Needed to publish 3 blogs per week to support SEO strategy, but the team was stretched thin and couldn't keep up.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-secondary leading-relaxed">Set up a Notion AI template library with custom prompts for different content types (how-to guides, listicles, case studies). The marketer enters a topic and key points, and gets a 1,500-word draft in 30 seconds.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-secondary leading-relaxed">Cut drafting time from 3 hours to 30 minutes per post. Hit their publishing goal for 12 weeks straight, driving a 25% increase in organic leads.</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 3: Solopreneur Coach</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-secondary leading-relaxed">Wanted to send weekly email newsletters but struggled to find time and the right words to stay consistent.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-secondary leading-relaxed">Built a Zapier + GPT workflow that turned voice notes (recorded on phone) into polished newsletter drafts, automatically formatted and sent to their email platform.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-secondary leading-relaxed">Went from sporadic emails to 100% consistency. Open rates improved 15%, and the coach now records a 5-minute voice note every Monday instead of writing for an hour.</p>
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
        <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
          <ul className="space-y-4">
            {[
              'Publish content 5–10x faster—go from idea to draft in minutes instead of hours',
              'Test multiple content variations quickly to find what resonates with your audience',
              'Maintain a consistent publishing schedule without burning out or hiring expensive writers',
              'Reduce content bottlenecks that slow down campaigns, product launches, and marketing initiatives',
              'Free up time to focus on strategy, editing, and high-value tasks instead of grinding out first drafts',
              'Build a scalable content system that grows with your business',
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
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">1. Discovery & Setup</h3>
            <p className="text-text-secondary leading-relaxed">
              We start with a quick call to understand your content needs, brand voice, and existing tools (Notion, WordPress, Shopify, etc.). I'll ask for examples of content you like and what you need to publish regularly.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">2. Build & Configuration</h3>
            <p className="text-text-secondary leading-relaxed">
              I build custom GPT workflows using tools like Notion AI, Make, Zapier, or Python scripts. You'll get templates, input forms, and prompts tuned to your niche and tone. Everything is designed for one-click generation.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">3. Testing & Iteration</h3>
            <p className="text-text-secondary leading-relaxed">
              We test the workflows with real examples to make sure the outputs match your expectations. I'll tweak prompts and formatting based on your feedback until you're happy with the quality.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">4. Delivery & Walkthrough</h3>
            <p className="text-text-secondary leading-relaxed">
              You get full access to the workflows, plus a training session where I show you how to use them, edit outputs, and troubleshoot. You'll also receive documentation and tips for getting the best results.
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
            The exact tools depend on your existing stack and workflow preferences. Here's what I typically use:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">AI Models</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                OpenAI GPT-4, Claude, or platform-specific AI (Notion AI, Jasper) for content generation. Prompts are custom-tuned to your brand voice and content type.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">Automation Platforms</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Make.com, Zapier, or n8n to connect your tools (Notion, Google Docs, Shopify, WordPress, Airtable) and trigger content generation workflows automatically.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">Content Platforms</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Notion, Google Docs, WordPress, or custom dashboards for input forms, draft editing, and publishing. Whatever you're already using, I'll integrate with it.
              </p>
            </div>
            <div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">Custom Code (When Needed)</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                Python scripts or API integrations for advanced workflows like bulk content generation, voice-to-text, or multi-step content pipelines.
              </p>
            </div>
          </div>

          <p className="text-sm text-text-secondary leading-relaxed italic">
            Note: Tool choice depends on your stack—I adapt to what you already use and recommend solutions that fit your budget and technical comfort level.
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
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">How long does setup take?</h3>
            <p className="text-text-secondary leading-relaxed">
              Most workflows are live in 2–3 days. Complex multi-step systems might take up to a week, but you'll see drafts and prototypes within the first day or two.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Do I need technical knowledge to use this?</h3>
            <p className="text-text-secondary leading-relaxed">
              No. I build everything to be as simple as clicking a button or filling out a form. If you can use Notion or Google Docs, you can use these workflows. I also provide training and documentation.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Will the AI content sound like me?</h3>
            <p className="text-text-secondary leading-relaxed">
              The prompts are custom-tuned to match your brand voice and style. You'll review examples during setup, and I'll adjust until it feels right. You'll still edit the final draft to add your personality and polish.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Can this integrate with my existing tools?</h3>
            <p className="text-text-secondary leading-relaxed">
              Yes. I can connect to Notion, WordPress, Shopify, Airtable, Google Docs, HubSpot, Mailchimp, and most other platforms via APIs or automation tools. If you have a specific tool, just ask.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Is this a one-time setup or ongoing work?</h3>
            <p className="text-text-secondary leading-relaxed">
              It's a one-time setup with optional monthly maintenance. After delivery, the workflows are yours to use forever. The $50/month add-on covers prompt updates, output tweaks, and campaign-specific adjustments if you want ongoing support.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What if the AI outputs aren't good enough?</h3>
            <p className="text-text-secondary leading-relaxed">
              AI works best as a drafting tool, not a replacement for human creativity. You'll always edit the output, but it should save you 70–80% of the writing time. If the quality isn't meeting expectations, I'll refine the prompts and workflows until it does.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Can I use this for different types of content?</h3>
            <p className="text-text-secondary leading-relaxed">
              Absolutely. I can set up separate workflows for blogs, product descriptions, emails, social posts, ad copy, landing pages, or anything else you need. Each workflow has its own templates and prompts.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What happens if I want to change something later?</h3>
            <p className="text-text-secondary leading-relaxed">
              You own the workflows, so you can tweak prompts and templates yourself. If you need bigger changes (new content types, platform migrations, etc.), I offer the monthly maintenance add-on or we can scope a new project.
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
            If you think AI content workflows could help your business move faster, the next step is a short call to see if it's a good fit.
          </p>
          <p className="text-text-secondary leading-relaxed">
            We'll talk about what content you need, what tools you're already using, and whether this approach makes sense for your workflow. No pressure, no obligation—just a quick conversation to see if we should work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
              Book a Call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link href="/contact#form" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised">
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Let AI write the first draft—so you can finish strong.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
            Set Up My AI Content System
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
