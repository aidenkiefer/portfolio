import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Technical SEO Setup | Search Engine Optimization Services',
  description: 'Get indexed, ranked, and visible with clean technical SEO. Full audit, metadata fixes, sitemap setup, and Google Search Console optimization.',
  path: '/services/seo',
});

export default function SEOPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link href="/services" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors">
            ← Back to Services
          </Link>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Make Sure Google Can Actually Find Your Website
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          A fast, clean SEO foundation that helps you get indexed, ranked, and visible—without the guesswork.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $200
          </span>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
          Optimize My Site for SEO
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Good content doesn't matter if search engines can't crawl it
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            Most sites are missing the technical basics that allow them to rank. Broken metadata, crawl issues, poor mobile support, no sitemap—it adds up. I'll audit and fix your technical SEO so Google knows what you do and why it should show you.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          SEO Package Includes:
        </h2>
        <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
          <ul className="space-y-4">
            {[
              'Full SEO health audit + checklist',
              'Fixes for metadata (titles, descriptions, OpenGraph, etc.)',
              'Sitemap & robots.txt setup + Google Search Console submission',
              'Alt text and semantic tag structure review',
              'URL structure, canonical tags, and crawl efficiency fixes',
              'Optional schema markup for enhanced listings',
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
            { title: 'New site launches', desc: 'Want to rank early' },
            { title: 'Solid content', desc: 'But poor visibility' },
            { title: 'DIY founders', desc: 'Needing a SEO jumpstart' },
            { title: 'Teams needing', desc: 'One-time audit + fix session' },
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
          Quick, Clean Setup
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed"><span className="font-semibold">2–3 day</span> turnaround</p>
          <p className="text-text-primary leading-relaxed">You'll receive a full audit, fix log, and GSC walkthrough</p>
          <p className="text-text-secondary leading-relaxed">CMS-friendly (Webflow, WordPress, Shopify, React, etc.)</p>
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
            At its core, this service makes your website readable and indexable for search engines. Most sites have technical gaps that prevent Google from understanding what they offer or ranking them properly.
          </p>
          <p>
            I audit your site for the most common SEO issues—broken metadata, missing sitemaps, poor mobile optimization, slow crawl speeds—and fix them. After implementation, search engines can crawl your pages efficiently, understand your content, and start showing you in relevant searches.
          </p>
          <p>
            You'll no longer have to wonder if Google "sees" your site or why your great content isn't ranking. You'll have a clean technical foundation that supports all your future SEO and content efforts.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Who This Service Is Best For
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary">✅ Great Fit If You:</h3>
            <ul className="space-y-3 text-text-primary">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span>You're launching a new site and want it to rank from day one</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span>You have solid content but it's not showing up in Google</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span>You're doing your own SEO but need a technical jumpstart</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span>You've never set up Google Search Console or don't know what a sitemap is</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span>You want a one-time audit and fix without a monthly retainer</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <span>You're preparing for a product launch or fundraising and need to show traction</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary">🚫 Not a Great Fit If You:</h3>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-lg">•</span>
                <span>You need ongoing content strategy or backlink building (this is a one-time technical setup)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">•</span>
                <span>You're looking for guaranteed first-page rankings (no one can promise that—this builds the foundation)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-lg">•</span>
                <span>Your site is already fully optimized and indexed properly (we can run a quick audit to check)</span>
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
          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 1: SaaS Startup</h3>
            <div className="space-y-3 text-text-primary">
              <div>
                <span className="font-semibold">Problem:</span> Launched a new product site but wasn't appearing in search results after 3 months. No Google Search Console setup, no sitemap, metadata was all default templated text.
              </div>
              <div>
                <span className="font-semibold">Solution:</span> Full SEO audit, created and submitted sitemap, configured GSC with proper indexing rules, rewrote all page titles and meta descriptions to be keyword-specific, fixed mobile responsiveness issues.
              </div>
              <div>
                <span className="font-semibold">Result:</span> Indexed within 48 hours. Started ranking for product-related keywords within 2 weeks. Organic traffic went from near-zero to 200+ monthly visits in the first month.
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 2: Content Creator</h3>
            <div className="space-y-3 text-text-primary">
              <div>
                <span className="font-semibold">Problem:</span> Blog with 50+ articles wasn't ranking. Pages had duplicate titles, missing alt text on images, no schema markup for articles, and slow load times.
              </div>
              <div>
                <span className="font-semibold">Solution:</span> Audited all pages, wrote unique titles and descriptions for each, added article schema markup, optimized images with proper alt text, fixed URL structure to be more semantic.
              </div>
              <div>
                <span className="font-semibold">Result:</span> Average search position improved from page 4–5 to page 1–2 for target keywords. Click-through rate increased by 40%. Several articles started appearing in Google's "Featured Snippets."
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 3: Local Service Business</h3>
            <div className="space-y-3 text-text-primary">
              <div>
                <span className="font-semibold">Problem:</span> Website existed but wasn't showing up for local searches. No local SEO setup, missing structured data, Google couldn't understand service areas or business type.
              </div>
              <div>
                <span className="font-semibold">Solution:</span> Implemented LocalBusiness schema markup, added location-specific pages with proper metadata, set up Google Search Console and Google Business Profile integration, created location-based sitemaps.
              </div>
              <div>
                <span className="font-semibold">Result:</span> Started appearing in local map pack for service keywords. Inbound calls from Google increased by 60%. Business now ranks in top 3 for "[service] near me" searches.
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
        <div className="space-y-3 max-w-3xl">
          <ul className="space-y-3 text-text-primary">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>Your site will be fully indexed</strong> — Google knows all your pages exist and what they're about</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>Pages will start appearing in search results</strong> for your target keywords (usually within 1–2 weeks)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>You'll have visibility into performance</strong> — Google Search Console set up and explained, so you can see what's working</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>Your site will load faster and rank better on mobile</strong> — technical optimizations improve user experience and rankings</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>You'll save hours of guesswork</strong> — no more wondering if you're missing something critical</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>Future content will rank faster</strong> — clean technical foundation means every new page you publish starts strong</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          How the Process Works
        </h2>
        <div className="space-y-6">
          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-3 text-lg font-semibold text-text-primary">1. Discovery & Audit</h3>
            <p className="text-text-primary leading-relaxed">
              I run a full technical SEO audit using tools like Google Search Console, Screaming Frog, and Lighthouse. I identify all crawl issues, metadata gaps, mobile problems, and indexing blockers. You'll receive a prioritized checklist of what needs fixing.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-3 text-lg font-semibold text-text-primary">2. Implementation</h3>
            <p className="text-text-primary leading-relaxed">
              I make all fixes directly in your codebase or CMS. This includes: rewriting metadata, creating and submitting sitemaps, setting up robots.txt, adding schema markup, fixing URL structures, optimizing images, and implementing canonical tags. If you prefer, I can provide detailed instructions for your team to implement.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-3 text-lg font-semibold text-text-primary">3. Testing & Validation</h3>
            <p className="text-text-primary leading-relaxed">
              I verify all changes using Google's rich results test, mobile-friendly test, and Search Console. I check that pages are indexing properly, metadata is rendering correctly, and there are no new errors. You'll receive a full before/after report.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-3 text-lg font-semibold text-text-primary">4. Delivery & Walkthrough</h3>
            <p className="text-text-primary leading-relaxed">
              You receive the full audit report, fix log, and a walkthrough of Google Search Console so you can monitor performance going forward. I'll answer any questions and provide recommendations for ongoing SEO maintenance (if needed).
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
            I use a combination of industry-standard SEO tools and custom scripts to audit, fix, and validate your site's technical SEO:
          </p>
          <ul className="space-y-3 text-text-primary">
            <li className="flex items-start gap-3">
              <span className="font-semibold min-w-[140px]">SEO Audit Tools:</span>
              <span>Google Search Console, Screaming Frog, Ahrefs Site Audit, Lighthouse</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold min-w-[140px]">Metadata & Schema:</span>
              <span>OpenGraph, Twitter Cards, JSON-LD structured data (Article, LocalBusiness, Product, etc.)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold min-w-[140px]">Sitemaps & Indexing:</span>
              <span>XML sitemap generation, robots.txt configuration, Google Search Console API</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold min-w-[140px]">Performance Tools:</span>
              <span>PageSpeed Insights, Core Web Vitals monitoring, image optimization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold min-w-[140px]">CMS Integration:</span>
              <span>Works with any platform—Webflow, WordPress, Shopify, Next.js, React, or custom builds</span>
            </li>
          </ul>
          <p className="text-text-secondary text-sm leading-relaxed mt-4">
            Note: Tool choice depends on your existing stack. I adapt to whatever CMS or framework you're using—no platform lock-in.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">How long does it take to see results?</h3>
            <p className="text-text-primary leading-relaxed">
              Technical changes take effect almost immediately—your site will be crawlable and indexable within 24–48 hours. Ranking improvements typically appear within 1–2 weeks, though competitive keywords may take longer. You'll see immediate improvements in Google Search Console once changes are live.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Do I need technical knowledge to work with you?</h3>
            <p className="text-text-primary leading-relaxed">
              Not at all. I handle the technical work and explain everything in plain language. If I need access to your site or CMS, I'll walk you through the setup. You'll receive clear documentation of all changes made.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Will this work with my existing website or CMS?</h3>
            <p className="text-text-primary leading-relaxed">
              Yes. This service works with any platform—Webflow, WordPress, Shopify, custom React/Next.js sites, static site generators, you name it. I adapt the approach to fit your tech stack.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Is this a one-time setup or ongoing?</h3>
            <p className="text-text-primary leading-relaxed">
              This is a one-time technical setup. Once your site is properly configured, it stays that way. Some clients choose ongoing monitoring or monthly audits as they add content, but that's optional—not required.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What if my site is already ranking okay?</h3>
            <p className="text-text-primary leading-relaxed">
              I can run a free quick audit to see if there are any gaps. Most sites I audit—even those ranking decently—have 5–10 fixable issues that could improve visibility, speed, or mobile performance. If your site is truly optimized, I'll tell you honestly.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Do you guarantee first-page rankings?</h3>
            <p className="text-text-primary leading-relaxed">
              No one can honestly guarantee rankings—Google's algorithm changes constantly. What I do guarantee is that your site will be technically sound, fully indexable, and set up to rank as well as it possibly can. The rest depends on content quality, competition, and ongoing SEO efforts.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What happens after the setup is complete?</h3>
            <p className="text-text-primary leading-relaxed">
              You'll have everything you need to monitor and maintain your SEO going forward. I provide documentation and a Google Search Console walkthrough so you can track performance. If issues arise later or you want ongoing support, we can discuss that separately.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Can you help with content strategy or backlink building?</h3>
            <p className="text-text-primary leading-relaxed">
              This service focuses on technical SEO—the foundation. If you need content strategy, keyword research, or link building, I can recommend next steps or connect you with specialists. Think of this as the essential groundwork that makes all other SEO efforts more effective.
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
            If you think this could help your business, the next step is a short call to see if it's a good fit.
          </p>
          <p className="text-text-primary leading-relaxed">
            I'll ask about your site, your goals, and what's currently not working. If a technical SEO audit makes sense, we'll schedule it. If there's a better solution, I'll tell you that too.
          </p>
          <p className="text-text-secondary leading-relaxed">
            No obligation. No hard sell. Just a quick conversation to see if I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
              Get Started with SEO
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
            Get seen. Get indexed. Get found.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
            Optimize My Site for SEO
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
