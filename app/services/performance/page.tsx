import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Website Performance Optimization | Speed & Core Web Vitals',
  description: 'Speed up your website, improve Core Web Vitals, and boost rankings. Targeted optimizations that make your site load faster without breaking anything.',
  path: '/services/performance',
});

export default function PerformancePage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link href="/services" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors">
            ← Back to Services
          </Link>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Speed Up Your Website. Improve Everything.
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          Slow sites lose users. I fix that with targeted optimizations that make your site load faster and feel better—without breaking anything.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $120
          </span>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
          Optimize My Website
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Slow sites kill conversions.
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            Even a one-second delay can tank your conversion rate, increase bounce rate, and hurt SEO. If your site feels sluggish—or fails Core Web Vitals—I'll clean it up, speed it up, and show you the before/after results.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Performance Upgrade Includes:
        </h2>
        <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
          <ul className="space-y-4">
            {[
              'Full audit of Core Web Vitals + Lighthouse scores',
              'Lazy loading, compression, minification, and caching setup',
              'Script deferrals + third-party cleanup',
              'Image/WebP optimization and CDN setup',
              'Before/after metrics report with breakdown',
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
          Who This Helps
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: 'High bounce rates', desc: 'Sites with poor mobile experience' },
            { title: 'SEO-driven brands', desc: 'Needing Core Web Vitals fixes' },
            { title: 'Founders prepping', desc: 'For launch or traffic spikes' },
            { title: 'Dev teams', desc: 'Needing a performance consultant' },
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
          Quick + Safe
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed"><span className="font-semibold">2–3 day</span> delivery</p>
          <p className="text-text-primary leading-relaxed">Compatible with static, React, Shopify, or WordPress sites</p>
          <p className="text-text-secondary leading-relaxed">No design or content changes needed</p>
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
            At its core, this service makes your website load faster and perform better across all devices. I audit your site's current speed, identify what's slowing it down, and implement targeted fixes—from image optimization and caching to script cleanup and CDN setup.
          </p>
          <p>
            After implementation, your site loads faster, ranks better in search, and converts more visitors. You no longer have to worry about users bouncing because of slow load times or Google penalizing you for failing Core Web Vitals. Everything works as it should—just faster.
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
          <h3 className="mb-4 text-xl font-semibold text-text-primary">✅ Great Fit If You:</h3>
          <ul className="space-y-3 text-text-primary leading-relaxed max-w-3xl">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span>Your site feels slow on mobile or takes more than 2–3 seconds to load</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span>You're failing Core Web Vitals checks in Google Search Console</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span>You're seeing high bounce rates or drop-offs during checkout</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span>You're launching soon and want to avoid performance issues from day one</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span>You need SEO improvements and know speed is a ranking factor</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span>Your dev team is busy and you need a specialist to handle performance</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold text-text-primary">🚫 Not a Great Fit If You:</h3>
          <ul className="space-y-3 text-text-secondary leading-relaxed max-w-3xl">
            <li className="flex items-start gap-3">
              <span className="text-base flex-shrink-0 mt-1">•</span>
              <span>Your site is already fast (Lighthouse scores consistently above 90)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-base flex-shrink-0 mt-1">•</span>
              <span>You're looking for a complete redesign or rebuild—this is optimization-only</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-base flex-shrink-0 mt-1">•</span>
              <span>Your backend/server is the bottleneck (not frontend performance)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-base flex-shrink-0 mt-1">•</span>
              <span>You need ongoing monitoring and maintenance—this is a one-time optimization</span>
            </li>
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
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 1: E-commerce Store Owner</h3>
            <div className="space-y-3 text-text-primary leading-relaxed">
              <p><strong>Problem:</strong> Their Shopify store had a 5-second load time on mobile, causing high bounce rates and cart abandonment. Google Search Console showed failing Core Web Vitals.</p>
              <p><strong>Solution:</strong> Compressed and converted images to WebP, implemented lazy loading, deferred non-critical scripts, and set up browser caching. Removed unused third-party tracking scripts.</p>
              <p><strong>Result:</strong> Load time dropped to 1.8 seconds. Bounce rate decreased by 22%, and checkout completion improved by 15% within the first month.</p>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 2: SaaS Founder</h3>
            <div className="space-y-3 text-text-primary leading-relaxed">
              <p><strong>Problem:</strong> Their marketing site was built on WordPress with heavy plugins. Pages took 6+ seconds to load, hurting paid ad campaign performance and SEO.</p>
              <p><strong>Solution:</strong> Optimized database queries, enabled full-page caching, minified CSS/JS, set up a CDN, and cleaned up plugin bloat.</p>
              <p><strong>Result:</strong> Page load time reduced to 2.1 seconds. Organic traffic increased 18% over three months as rankings improved, and ad conversion rates went up 12%.</p>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 3: Startup Pre-Launch</h3>
            <div className="space-y-3 text-text-primary leading-relaxed">
              <p><strong>Problem:</strong> A new React-based product site was ready to launch but Lighthouse scores were in the 40s due to large bundle sizes and unoptimized assets.</p>
              <p><strong>Solution:</strong> Implemented code-splitting, tree-shaking, image optimization, and preload/prefetch strategies. Set up efficient caching headers and compression.</p>
              <p><strong>Result:</strong> Lighthouse performance score jumped to 95+. The site launched with fast load times, positive user feedback, and strong early SEO performance.</p>
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
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>Faster load times:</strong> Pages load in under 2–3 seconds on average, even on mobile</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>Better SEO rankings:</strong> Passing Core Web Vitals helps you rank higher in Google search</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>Higher conversions:</strong> Users stay longer, engage more, and complete purchases or signups</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>Lower bounce rates:</strong> Visitors don't leave before your page even loads</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>Improved mobile experience:</strong> Your site feels fast and responsive on all devices</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>Clear metrics:</strong> You get a before/after report showing exactly what improved and by how much</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span><strong>Peace of mind:</strong> You know your site is technically solid and won't embarrass you in front of users or investors</span>
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
            <h3 className="mb-2 text-lg font-semibold text-text-primary">1. Discovery & Audit</h3>
            <p className="text-text-primary leading-relaxed">
              I run a full performance audit using Lighthouse, Core Web Vitals, and other tools. I identify bottlenecks—large images, render-blocking scripts, unoptimized code, slow third-party resources—and prioritize fixes based on impact.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">2. Optimization & Implementation</h3>
            <p className="text-text-primary leading-relaxed">
              I implement the fixes: compress and convert images, enable lazy loading, minify CSS/JS, defer scripts, set up caching, configure CDN, and clean up unnecessary resources. All changes are tested in a staging environment first.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">3. Testing & Validation</h3>
            <p className="text-text-primary leading-relaxed">
              I test the optimized site across devices and browsers to ensure everything works correctly. I verify that load times have improved, Core Web Vitals are passing, and no functionality has broken.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">4. Delivery & Reporting</h3>
            <p className="text-text-primary leading-relaxed">
              You receive a before/after report with clear metrics (load time, Lighthouse scores, Core Web Vitals), a summary of what was changed, and recommendations for maintaining performance going forward. I deploy the changes and provide a brief walkthrough.
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
            I use industry-standard tools and techniques to diagnose and fix performance issues. The specific approach depends on your stack, but common tools include:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="font-semibold flex-shrink-0 mt-0.5">Performance Testing:</span>
              <span>Google Lighthouse, PageSpeed Insights, WebPageTest, Core Web Vitals monitoring</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold flex-shrink-0 mt-0.5">Image Optimization:</span>
              <span>Sharp, ImageOptim, WebP conversion, responsive image techniques, lazy loading libraries</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold flex-shrink-0 mt-0.5">Caching & CDN:</span>
              <span>Cloudflare, browser caching headers, service workers, static asset optimization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold flex-shrink-0 mt-0.5">Code Optimization:</span>
              <span>Minification, tree-shaking, code-splitting, bundle analysis (Webpack Bundle Analyzer, etc.)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-semibold flex-shrink-0 mt-0.5">Platform-Specific:</span>
              <span>Next.js optimization, WordPress caching plugins, Shopify theme optimization</span>
            </li>
          </ul>
          <p className="text-text-secondary">
            Tool choice depends on your existing stack—I adapt to what you're already using and recommend changes only when they make a measurable difference.
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
            <h3 className="mb-2 text-lg font-semibold text-text-primary">How long does this take?</h3>
            <p className="text-text-primary leading-relaxed">
              Most performance optimizations are completed in 2–3 days. Complex sites or custom platforms may take slightly longer, but I'll give you a clear timeline upfront.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Do I need technical knowledge to work with you?</h3>
            <p className="text-text-primary leading-relaxed">
              No. I handle all the technical work and explain everything in plain language. You just need to provide access to your site and hosting environment.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Will this work with my existing site/platform?</h3>
            <p className="text-text-primary leading-relaxed">
              Yes. I've optimized sites built on React, Next.js, WordPress, Shopify, static HTML, and more. If your platform is unusual, I'll let you know during our initial conversation.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Is this a one-time setup or ongoing?</h3>
            <p className="text-text-primary leading-relaxed">
              This is a one-time optimization. After implementation, your site stays fast. If you add new features or content later, you may need a refresh, but the core improvements remain in place.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What if my site is already pretty fast?</h3>
            <p className="text-text-primary leading-relaxed">
              If your Lighthouse scores are consistently above 90 and you're passing Core Web Vitals, you probably don't need this. I'll tell you honestly if optimization isn't necessary.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Will you change the design or content of my site?</h3>
            <p className="text-text-primary leading-relaxed">
              No. I only optimize the technical performance—images, code, caching, scripts—without changing how your site looks or what it says.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What kind of results can I expect?</h3>
            <p className="text-text-primary leading-relaxed">
              Results vary, but most sites see load times cut by 30–60%, improved Lighthouse scores, and better Core Web Vitals. You'll get a detailed before/after report showing exactly what improved.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What happens if something breaks?</h3>
            <p className="text-text-primary leading-relaxed">
              I test all changes in staging before deploying to production, and I keep backups. If anything goes wrong, I fix it immediately at no extra cost.
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
        <div className="space-y-6 text-text-primary leading-relaxed max-w-3xl">
          <p>
            If you think this could help your business, the next step is a short call to see if it's a good fit. I'll ask a few questions about your site, current performance, and goals. If it makes sense to move forward, I'll send over a clear proposal and timeline.
          </p>
          <p className="text-text-secondary">
            No obligation. No pressure. Just a quick conversation to see if performance optimization is what you need right now.
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
            Don't let load time lose you sales.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
            Optimize My Website
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
