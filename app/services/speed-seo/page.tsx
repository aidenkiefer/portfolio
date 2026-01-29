import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2, Zap, Search } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Speed & SEO Tune-Up – Make Your Website Faster and Easier to Find',
  description: 'A focused optimization sprint to improve performance, rankings, and user experience. Core Web Vitals, technical SEO, and mobile optimization. 2–3 day delivery. Starting at $150.',
  path: '/services/speed-seo',
});

export default function SpeedSeoPage() {
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
          Make Your Website Faster—and Easier to Find
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          A focused optimization sprint to improve performance, rankings, and user experience without redesigning your site.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            $150
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
        >
          ⚡ Tune Up My Website
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
            href="/services/performance"
            className="block rounded-md border border-border bg-background p-6 border-l-4 border-l-accent-primary transition-all duration-200 ease-out hover:border-accent-primary hover:-translate-y-0.5"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Performance Optimization
            </h3>
            <p className="text-sm text-text-secondary">
              Core Web Vitals, asset optimization, caching, and speed improvements
            </p>
          </Link>

          <Link
            href="/services/seo"
            className="block rounded-md border border-border bg-background p-6 border-l-4 border-l-accent-primary transition-all duration-200 ease-out hover:border-accent-primary hover:-translate-y-0.5"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Technical SEO Setup
            </h3>
            <p className="text-sm text-text-secondary">
              Metadata, sitemaps, Google Search Console, and indexing fixes
            </p>
          </Link>
        </div>

        <div className="mt-8 rounded-md bg-surface-raised border border-border p-6">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-text-primary mb-3">
            Often Combined With
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/accessibility" className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors">
              Accessibility →
            </Link>
            <Link href="/services/personalization" className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors">
              Personalization →
            </Link>
            <Link href="/services/automation" className="text-sm text-accent-primary hover:text-accent-primary/80 transition-colors">
              Automation →
            </Link>
          </div>
        </div>
      </section>

      {/* Problem → Promise */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Slow sites lose traffic. Invisible sites lose everything.
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            Even great content can underperform if your site is slow or technically broken for search engines. This package fixes the foundation—so your site loads faster, ranks better, and converts more visitors.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Speed & SEO Tune-Up Includes
        </h2>

        <div className="space-y-8">
          {/* Performance Optimization */}
          <div className="rounded-md border border-border bg-background p-8"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-accent-secondary" />
              <h3 className="text-xl font-semibold text-text-primary">
                Performance Optimization
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                'Core Web Vitals audit',
                'Image, script, and asset optimization',
                'Caching and CDN setup',
                'Mobile performance improvements',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical SEO */}
          <div className="rounded-md border border-border bg-background p-8"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Search className="h-6 w-6 text-accent-secondary" />
              <h3 className="text-xl font-semibold text-text-primary">
                Technical SEO Setup
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                'Metadata cleanup (titles, descriptions, OG tags)',
                'Sitemap + robots.txt configuration',
                'Google Search Console submission',
                'Crawl and indexing issue fixes',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-text-primary leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline & Delivery */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Quick Wins, Real Impact
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed">
            <span className="font-semibold">Delivery in 2–3 days</span>
          </p>
          <p className="text-text-primary leading-relaxed">
            Before/after performance report included
          </p>
          <p className="text-text-primary leading-relaxed">
            No design or content changes required
          </p>
        </div>
      </section>

      {/* Ideal Use Cases */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          This Package Is Great If You
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { text: 'Have high bounce rates or slow load times' },
            { text: 'Want better SEO without long retainers' },
            { text: 'Are launching or relaunching a site' },
            { text: 'Care about mobile experience and rankings' },
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

      {/* Section 1: What This Package Actually Does */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What This Package Actually Does
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            At its core, this package ensures your site is technically sound for both people and search engines. It combines performance optimization and technical SEO into one focused sprint—so you get faster load times, better mobile experience, and the foundation you need to rank.
          </p>
          <p>
            After implementation, you no longer have to worry about slow page speeds hurting your bounce rate, or technical SEO errors keeping you out of Google's index. Your site becomes a lean, well-optimized asset that supports growth instead of blocking it.
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

        <div className="mb-8">
          <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-accent-primary" />
            Great Fit If You
          </h3>
          <ul className="space-y-3 max-w-3xl">
            {[
              'Your site feels slow or has high bounce rates, and you know it's costing you conversions',
              'You want better search rankings but don't need (or can't afford) a long-term SEO retainer',
              'You're launching or relaunching a site and want to start with a strong technical foundation',
              'Mobile traffic is important to your business, and you need your site to perform well on phones',
              'You've been told your site has "SEO issues" but aren't sure what that means or how to fix it',
              'You need quick wins that actually move metrics—not vague promises',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <span className="text-text-primary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
            <span className="text-text-secondary">🚫</span>
            Not a Great Fit If You
          </h3>
          <ul className="space-y-3 max-w-3xl">
            {[
              'You need content strategy or keyword research (this is purely technical)',
              'Your site needs a full redesign or rebuild (this is optimization, not a rebuild)',
              'You want ongoing content creation or link building (this is a one-time tune-up)',
              'You're expecting instant #1 rankings (this fixes the foundation; ranking takes time and content)',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-text-secondary mt-1">•</span>
                <span className="text-text-primary leading-relaxed">{item}</span>
              </li>
            ))}
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
          {/* Example 1 */}
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Example 1: Ecommerce Startup
            </h3>
            <div className="space-y-3 text-text-primary">
              <p>
                <strong className="text-accent-primary">Problem:</strong> High bounce rate on mobile; Google Search Console showing "poor" Core Web Vitals scores
              </p>
              <p>
                <strong className="text-accent-primary">Solution:</strong> Optimized images, enabled caching, configured CDN, cleaned up metadata, submitted sitemap
              </p>
              <p>
                <strong className="text-accent-primary">Result:</strong> Page load time dropped from 4.2s to 1.1s; mobile bounce rate improved by 28%; indexed pages increased from 12 to 47
              </p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Example 2: SaaS Marketing Site
            </h3>
            <div className="space-y-3 text-text-primary">
              <p>
                <strong className="text-accent-primary">Problem:</strong> Site was fast on desktop but unusable on mobile; no pages showing in Google results
              </p>
              <p>
                <strong className="text-accent-primary">Solution:</strong> Fixed mobile performance issues, corrected robots.txt blocking search engines, set up Google Search Console, optimized OG tags for social sharing
              </p>
              <p>
                <strong className="text-accent-primary">Result:</strong> Mobile performance score went from 32 to 94; organic traffic started growing within two weeks; social shares increased due to proper preview images
              </p>
            </div>
          </div>

          {/* Example 3 */}
          <div className="rounded-md border border-border bg-background p-6"
            style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
          >
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              Example 3: Agency Redesign
            </h3>
            <div className="space-y-3 text-text-primary">
              <p>
                <strong className="text-accent-primary">Problem:</strong> Just launched a beautiful new site, but it was slower than the old one and losing search rankings
              </p>
              <p>
                <strong className="text-accent-primary">Solution:</strong> Audited Core Web Vitals, optimized assets and scripts, configured caching, fixed broken internal links, resubmitted sitemap
              </p>
              <p>
                <strong className="text-accent-primary">Result:</strong> Reclaimed previous rankings within a month; site now loads 60% faster; client can confidently share the URL knowing it performs well
              </p>
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
        <div className="space-y-4 max-w-3xl">
          <ul className="space-y-3">
            {[
              'Your site loads faster—especially on mobile and slower connections',
              'Lower bounce rates and better user experience (fast sites convert better)',
              'Google can properly crawl and index your pages (you'll show up in search)',
              'Better rankings for your target keywords over time (SEO is a foundation, not a switch)',
              'Confidence that your site won't hurt your marketing efforts—it'll support them',
              'A clear before/after performance report you can reference or share with stakeholders',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary leading-relaxed">{item}</span>
              </li>
            ))}
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
          {[
            {
              step: '1',
              title: 'Discovery & Audit',
              description: 'I run a full performance and SEO audit using tools like Google Lighthouse, PageSpeed Insights, and Search Console. You'll get a summary of what's broken and what needs fixing.'
            },
            {
              step: '2',
              title: 'Build & Optimization',
              description: 'I optimize images, scripts, and assets; configure caching and CDN; clean up metadata; fix sitemaps and robots.txt; and resolve any crawl or indexing issues.'
            },
            {
              step: '3',
              title: 'Testing & Validation',
              description: 'I test across devices and browsers to confirm performance improvements, then revalidate Core Web Vitals and submit the updated sitemap to Google Search Console.'
            },
            {
              step: '4',
              title: 'Delivery & Walkthrough',
              description: 'You get a before/after report with performance metrics, a summary of what was fixed, and optional recommendations for ongoing maintenance or next steps.'
            },
          ].map((item) => (
            <div
              key={item.step}
              className="rounded-md border border-border bg-background p-6"
              style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-accent-primary/10 text-accent-primary font-semibold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Performance Tools
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Google Lighthouse, PageSpeed Insights, WebPageTest, and Chrome DevTools for auditing and validating Core Web Vitals (LCP, FID, CLS)
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              SEO Tools
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Google Search Console, Screaming Frog (for crawl analysis), and manual metadata validation
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Optimization Stack
            </h3>
            <p className="text-text-secondary leading-relaxed">
              CDN setup (Cloudflare or similar), image optimization (WebP/AVIF conversion, lazy loading), caching strategies, and asset minification
            </p>
          </div>

          <div className="rounded-md bg-surface-raised border border-border p-4">
            <p className="text-sm text-text-secondary">
              <strong className="text-text-primary">Note:</strong> Tool choice adapts to your existing stack. If you're on WordPress, Shopify, Next.js, or another platform, I'll use the best optimization methods for that environment.
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
          {[
            {
              question: 'How long does this package take?',
              answer: 'Typically 2–3 days from kickoff to delivery. It depends on the size of your site and how many issues need fixing, but most optimizations are quick to implement once the audit is complete.'
            },
            {
              question: 'Will you change my site's design or content?',
              answer: 'No. This is a technical tune-up—I optimize what's already there. Your design, copy, and branding stay the same. If content or design issues are blocking performance, I'll flag them for you to address separately.'
            },
            {
              question: 'Do I need to know how to code?',
              answer: 'Not at all. I handle the technical work. You'll get a summary report that explains what was done in plain language, but you don't need to understand code to benefit from the improvements.'
            },
            {
              question: 'Will this guarantee better Google rankings?',
              answer: 'No service can guarantee rankings—Google's algorithm considers hundreds of factors. But this package fixes the technical foundation that often holds sites back. If your content is solid, these optimizations will help you compete.'
            },
            {
              question: 'Is this a one-time fix or ongoing maintenance?',
              answer: 'This is a one-time optimization. Once implemented, the improvements last. If you add new content, redesign, or change platforms later, you may want a refresh—but there's no ongoing cost or retainer.'
            },
            {
              question: 'What if my site is on WordPress, Shopify, or another platform?',
              answer: 'This package works across platforms. I adapt the optimization methods to your CMS or framework. Whether you're on WordPress, Shopify, Webflow, Next.js, or a custom stack, I'll use the best tools for your setup.'
            },
            {
              question: 'Can I combine this with other services?',
              answer: 'Yes. This package is often bundled with Accessibility, Personalization, or Automation. If you want a custom package, book a free consultation and we'll scope it out.'
            },
            {
              question: 'What's included in the before/after report?',
              answer: 'You'll get performance scores (before and after), Core Web Vitals data, a summary of fixes applied, and optional next-step recommendations. It's clear, visual, and easy to share with your team or stakeholders.'
            },
          ].map((faq, idx) => (
            <div
              key={idx}
              className="rounded-md border border-border bg-background p-6"
              style={{ boxShadow: '0 1px 0 rgba(0,0,0,0.04)' }}
            >
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {faq.question}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
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
            If you think this package could help your business, the next step is a short call to confirm it's a good fit and answer any questions.
          </p>
          <p className="text-text-secondary leading-relaxed">
            No obligation. No pressure. Just a quick conversation to see if Speed & SEO Tune-Up is right for your site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
            >
              Book a Call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact#form"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <div className="rounded-md border border-accent-secondary/30 bg-surface-raised p-8">
          <h2 className="mb-4 text-xl sm:text-2xl font-semibold text-text-primary">
            Need More Than a Tune-Up?
          </h2>
          <p className="mb-6 text-base text-text-secondary leading-relaxed">
            This package can be combined with accessibility audits, personalization, analytics or dashboards, and automation workflows.
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

      {/* Final CTA */}
      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Fix speed. Fix SEO. Fix growth blockers.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
          >
            ⚡ Tune Up My Website
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
