import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'AI Web Personalization | Adaptive User Experiences',
  description: 'Personalized content and flows that increase engagement and conversions. Make your website adapt to every visitor in real time with AI-powered personalization.',
  path: '/services/personalization',
});

export default function PersonalizationPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link href="/services" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors">
            ← Back to Services
          </Link>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Make Your Website Adapt to Every Visitor in Real Time
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          Personalized content and flows that increase engagement, retention, and conversions—with zero manual tagging.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $280
          </span>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
          Personalize My Website
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Most websites are static. Your users aren't.
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            Every visitor is different—so why show them the same homepage, offer, or message? With AI-powered personalization, your site adapts on the fly based on user behavior, traffic source, or intent. It's like giving every visitor their own optimized experience—automatically.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Included in this service:
        </h2>
        <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
          <ul className="space-y-4">
            {[
              'Personalized CTAs, banners, copy, or layout changes based on source, behavior, and past interactions',
              'Integration with no-code tools (like Mutiny) or custom-coded with APIs',
              'Strategy call to define high-ROI personalization points',
              'Full setup, testing, and QA',
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
          Examples That Convert
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Show a "Welcome back!" message to returning visitors',
            'Tailor homepage messaging to match ads clicked',
            'Highlight case studies based on industry',
            'Change CTA based on scroll behavior or time on page',
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
          Timeline
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed"><span className="font-semibold">3-day</span> turnaround</p>
          <p className="text-text-primary leading-relaxed">Strategy → setup → live in one week</p>
          <p className="text-text-secondary leading-relaxed">Optional analytics reporting add-on</p>
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
            At its core, this service helps you treat different visitors differently based on where they came from, what they've done on your site, or what their behavior signals about their intent—so you can increase conversions without increasing traffic.
          </p>
          <p>
            Instead of showing everyone the same generic homepage, you show first-time visitors a different message than returning customers. You highlight different case studies based on the ad they clicked. You adjust your CTA based on how engaged they are.
          </p>
          <p>
            After implementation, your website becomes adaptive. Visitors feel seen, messaging feels relevant, and conversion rates improve—without you manually tagging or segmenting anyone.
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
            <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
              <span className="text-accent-primary">✅</span> Great Fit If You:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span className="text-text-primary leading-relaxed">You're running paid ads or email campaigns and want your landing pages to match the messaging</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span className="text-text-primary leading-relaxed">You have different customer segments visiting the same pages (e.g. agencies vs. in-house teams, enterprise vs. startup)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span className="text-text-primary leading-relaxed">You want to increase conversion rates without redesigning your entire site</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span className="text-text-primary leading-relaxed">You have returning visitors but aren't treating them any differently than first-timers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span className="text-text-primary leading-relaxed">You're a SaaS, DTC brand, lead-gen site, or marketplace with multiple user types</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span className="text-text-primary leading-relaxed">You want to test personalized experiences without hiring a full engineering team</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
              <span className="text-red-500">🚫</span> Not a Great Fit If You:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0 mt-1">•</span>
                <span className="text-text-primary leading-relaxed">You have very low traffic (under 1,000 visitors/month)—personalization works best with volume</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0 mt-1">•</span>
                <span className="text-text-primary leading-relaxed">Your website is still in early MVP stage and you haven't validated product-market fit yet</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0 mt-1">•</span>
                <span className="text-text-primary leading-relaxed">You're looking for fully automated AI content generation (this is about adaptive displays, not generative AI writing)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 flex-shrink-0 mt-1">•</span>
                <span className="text-text-primary leading-relaxed">You need complex behavioral scoring or predictive analytics—this is focused on practical, high-ROI personalization</span>
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
          <div className="rounded-md border border-border bg-background p-6 sm:p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 1: SaaS with Multiple User Types</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-primary leading-relaxed">A project management tool was getting traffic from both agencies and in-house teams, but their homepage messaging was generic and didn't speak to either segment's specific pain points.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-primary leading-relaxed">Set up personalization to detect traffic source (e.g. "agency project management" ad vs. "team collaboration" ad) and dynamically swap the hero copy, featured case study, and CTA to match the visitor's context.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-primary leading-relaxed">42% increase in demo requests from paid traffic. Agencies saw agency-focused messaging and clicked through at higher rates. In-house teams saw relevant use cases for their workflow.</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6 sm:p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 2: E-Commerce Brand with Returning Visitors</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-primary leading-relaxed">A DTC skincare brand was treating first-time visitors and loyal customers the same—everyone saw the same "first order discount" banner, which annoyed repeat buyers.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-primary leading-relaxed">Built a simple personalization layer that detects returning visitors (via cookies) and shows them "Welcome back!" messaging with product recommendations based on past purchases, while new visitors still see the discount offer.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-primary leading-relaxed">Repeat purchase rate increased 28% in the first month. Customer feedback improved—people felt recognized and appreciated rather than constantly pitched the same intro offer.</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6 sm:p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 3: Lead-Gen Site with Multiple Industries</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-primary leading-relaxed">A B2B software company served healthcare, finance, and logistics but had one generic homepage. Visitors couldn't tell if the product worked for their industry.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-primary leading-relaxed">Implemented industry-based personalization that detects referrer data (e.g. healthcare blog, finance directory) and swaps out the hero image, social proof logos, and featured case study to match the visitor's likely industry.</p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-primary leading-relaxed">Lead form completion rate jumped 37%. Time on page increased because visitors saw relevant proof points immediately instead of having to hunt for them.</p>
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
          <p className="text-text-primary leading-relaxed">
            Once your personalization is live, you'll see measurable improvements in how visitors engage with your site:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Higher conversion rates</span> — visitors see messaging that matches their context, so they're more likely to take action</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Improved ad performance</span> — paid traffic converts better because landing pages match ad copy and intent</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Better user experience</span> — returning visitors feel recognized; new visitors see relevant proof points immediately</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Reduced bounce rate</span> — visitors stick around longer because the content feels relevant to them</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Time savings</span> — no more manually creating separate landing pages for every campaign or segment</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Ongoing optimization</span> — you can test and refine personalization rules without developer support</span>
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
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">1. Discovery & Strategy</h3>
            <p className="text-text-primary leading-relaxed">
              We start with a call to understand your audience segments, traffic sources, and conversion goals. I'll identify 2–3 high-impact personalization opportunities (e.g. new vs. returning visitors, traffic from specific campaigns, or industry-based targeting).
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">2. Build & Configuration</h3>
            <p className="text-text-primary leading-relaxed">
              I'll set up the personalization logic using either a no-code tool (like Mutiny or similar) or custom code integrated with your site. This includes defining the rules (who sees what), creating the content variations, and connecting to your analytics.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">3. Testing & Iteration</h3>
            <p className="text-text-primary leading-relaxed">
              Before going live, I'll test all personalization rules across different traffic sources and user states to ensure everything triggers correctly. We'll do a brief QA review together to confirm the experiences feel right.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">4. Delivery & Walkthrough</h3>
            <p className="text-text-primary leading-relaxed">
              Once live, I'll walk you through how to monitor performance, adjust rules, and add new variations. You'll get documentation on what's running and how to optimize it over time. Optional: analytics reporting add-on for ongoing performance tracking.
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
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            The specific tools depend on your stack and preferences. Here's what I typically work with:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="font-semibold flex-shrink-0 mt-0.5">No-Code Platforms —</span>
              <span>Mutiny, Optimizely, or similar tools for fast, visual personalization without code changes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold flex-shrink-0 mt-0.5">Custom Code —</span>
              <span>JavaScript/TypeScript for advanced logic, API integrations, or when you need full control</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold flex-shrink-0 mt-0.5">Analytics & Tracking —</span>
              <span>Google Analytics, Segment, or your existing analytics stack to measure performance</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold flex-shrink-0 mt-0.5">CMS & Site Platform —</span>
              <span>Works with Next.js, WordPress, Webflow, Shopify, or any modern web platform</span>
            </li>
          </ul>
          <p className="text-text-secondary italic">
            Note: Tool choice depends on your existing stack and budget—I adapt to what you already use whenever possible.
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
            <h3 className="mb-2 text-lg font-semibold text-text-primary">How long does this take to implement?</h3>
            <p className="text-text-primary leading-relaxed">
              Typically 3–5 days from kickoff to live. The timeline depends on complexity (number of segments, variations, and integrations), but most personalization setups are live within a week.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Do I need technical knowledge to manage this after launch?</h3>
            <p className="text-text-primary leading-relaxed">
              No. If we use a no-code tool, you'll be able to adjust content and rules from a visual editor. If we go custom-coded, I'll provide documentation and a walkthrough. Either way, you won't need to touch code to make updates.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Will this work with my existing site or do I need to rebuild?</h3>
            <p className="text-text-primary leading-relaxed">
              It works with your existing site. Personalization is typically added on top of your current setup—no rebuild required. It integrates with most modern platforms (Next.js, WordPress, Webflow, Shopify, custom builds).
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Is this a one-time setup or ongoing?</h3>
            <p className="text-text-primary leading-relaxed">
              The base service is a one-time setup. After that, you can manage it yourself or add an optional analytics reporting package if you want ongoing optimization support.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What kind of data do you use for personalization?</h3>
            <p className="text-text-primary leading-relaxed">
              Common data sources include: traffic source (where they came from), returning vs. new visitor status, pages viewed, time on site, scroll depth, or campaign parameters (UTM tags). Everything is privacy-compliant and doesn't require personal data collection.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">How much traffic do I need for this to be worth it?</h3>
            <p className="text-text-primary leading-relaxed">
              Personalization works best with at least 1,000+ visitors per month. Below that, you're better off focusing on messaging clarity and conversion optimization before adding personalization layers.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Can I test different personalization strategies over time?</h3>
            <p className="text-text-primary leading-relaxed">
              Yes. Once the foundation is in place, you can easily test new rules, content variations, and targeting strategies. I'll show you how to iterate and optimize based on performance data.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What if I want to personalize more pages later?</h3>
            <p className="text-text-primary leading-relaxed">
              We can expand personalization to additional pages as a follow-up engagement. The initial setup usually focuses on your highest-traffic or highest-value pages (homepage, landing pages, pricing), and we can layer on more over time.
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
            If you think personalization could help your business convert more visitors without increasing ad spend, the next step is a short call to see if it's a good fit.
          </p>
          <p className="text-text-primary leading-relaxed">
            We'll talk through your audience segments, traffic sources, and conversion goals. I'll recommend 2–3 high-impact personalization opportunities, and if it makes sense, we'll move forward with a fast, focused implementation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
              Book a Call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link href="/contact#form" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised">
              Send a Message
            </Link>
          </div>
          <p className="text-text-secondary text-sm">
            No obligation. Quick call to see if this fits your goals.
          </p>
        </div>
      </section>

      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Speak to your visitors like you know them.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
            Personalize My Website
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
