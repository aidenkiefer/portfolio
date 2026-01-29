import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Accessibility & Mobile Audit | WCAG Compliance Services',
  description: 'Make your website usable by everyone, everywhere. WCAG-compliant accessibility audit with mobile-first UX testing and remediation plan.',
  path: '/services/accessibility',
});

export default function AccessibilityPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link href="/services" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors">
            ← Back to Services
          </Link>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Make Your Website Usable by Everyone, Everywhere
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          Ensure your site works on every screen and for every user—while staying ahead of accessibility standards and legal risk.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $160
          </span>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
          Audit My Site for Accessibility
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Accessibility isn't optional anymore—and neither is mobile UX.
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            One in four adults lives with a disability. Accessibility is no longer just ethical—it's a legal risk if ignored. On top of that, most users browse on mobile first. I audit your site for both, and deliver the fixes you need to reach everyone.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What's Included
        </h2>
        <div className="rounded-md border border-border bg-background p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
          <ul className="space-y-4">
            {[
              'WCAG-compliant audit using automated tools + manual review',
              'Fixes for contrast, navigation, focus states, screen reader support',
              'Mobile-first layout testing and UX recommendations',
              'Detailed remediation plan with before/after metrics',
              'Optional implementation help available',
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
            { title: 'Grant applications', desc: 'Businesses applying for accessibility funding' },
            { title: 'Legal compliance', desc: 'Avoiding lawsuits from non-compliance' },
            { title: 'Mobile-first brands', desc: 'Want strong UX on all devices' },
            { title: 'Agencies', desc: 'Needing fast audit before client handoff' },
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
          Audit Delivery
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed"><span className="font-semibold">2–4 day</span> turnaround</p>
          <p className="text-text-primary leading-relaxed">Detailed report + recommended fixes</p>
          <p className="text-text-secondary leading-relaxed">Optional fix implementation billed separately</p>
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
            At its core, this service helps you identify and fix barriers that prevent people from using your website—whether they have a disability, use assistive technology, or browse on mobile devices.
          </p>
          <p>
            I audit your site against WCAG (Web Content Accessibility Guidelines) standards, test it on mobile devices, and deliver a prioritized list of issues with clear instructions on how to fix them.
          </p>
          <p>
            After implementation, your site becomes usable by everyone, reduces legal risk, and provides a better experience across all devices. You no longer have to worry about accessibility lawsuits, excluded users, or broken mobile layouts.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Who This Service Is Best For
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0" />
              Great Fit If You
            </h3>
            <ul className="space-y-3 ml-7">
              <li className="text-text-primary leading-relaxed">You're launching a product and need to ensure it's accessible before going public</li>
              <li className="text-text-primary leading-relaxed">You received a demand letter or accessibility complaint and need to remediate quickly</li>
              <li className="text-text-primary leading-relaxed">You're applying for grants, funding, or contracts that require accessibility compliance</li>
              <li className="text-text-primary leading-relaxed">Your analytics show high mobile bounce rates and you want to understand why</li>
              <li className="text-text-primary leading-relaxed">You care about inclusivity and want your brand to reflect that in practice</li>
              <li className="text-text-primary leading-relaxed">You're redesigning your site and want to build accessibility in from the start</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
              <span className="text-xl">🚫</span>
              Not a Great Fit If You
            </h3>
            <ul className="space-y-3 ml-7">
              <li className="text-text-secondary leading-relaxed">You're not willing to implement any of the recommended fixes</li>
              <li className="text-text-secondary leading-relaxed">You need legal certification or official VPAT documentation (I provide technical audits, not legal compliance documents)</li>
              <li className="text-text-secondary leading-relaxed">You want a "rubber stamp" without actually improving user experience</li>
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
            <h3 className="mb-4 text-lg font-semibold text-text-primary">E-commerce Startup</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-1">Problem:</p>
                <p className="text-text-primary leading-relaxed">Product pages had low-contrast text, no keyboard navigation, and a broken mobile checkout flow. Customers were abandoning carts, and the company received an accessibility complaint.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-1">Solution:</p>
                <p className="text-text-primary leading-relaxed">Conducted full WCAG audit, identified 23 critical issues, and provided CSS fixes for contrast, focus states, and mobile layout. Implemented keyboard navigation for checkout.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-1">Result:</p>
                <p className="text-text-primary leading-relaxed">Mobile conversion rate increased 18%, complaint was resolved, and the site passed follow-up accessibility review.</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6 sm:p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">SaaS Platform</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-1">Problem:</p>
                <p className="text-text-primary leading-relaxed">Dashboard was unusable with screen readers, and mobile users couldn't access key features. This blocked enterprise sales requiring accessibility compliance.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-1">Solution:</p>
                <p className="text-text-primary leading-relaxed">Audited dashboard against WCAG 2.1 AA standards, added ARIA labels, improved semantic HTML structure, and optimized mobile responsive behavior.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-1">Result:</p>
                <p className="text-text-primary leading-relaxed">Passed enterprise accessibility review, closed 3 pending deals worth $180K ARR, and improved usability for all users.</p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6 sm:p-8" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Content Publisher</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-1">Problem:</p>
                <p className="text-text-primary leading-relaxed">Articles were difficult to read on mobile, images had no alt text, and video content lacked captions—limiting reach and SEO.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-1">Solution:</p>
                <p className="text-text-primary leading-relaxed">Audit revealed missing alt text, poor heading hierarchy, and non-responsive media embeds. Provided templates and guidelines for content team to follow.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-text-secondary mb-1">Result:</p>
                <p className="text-text-primary leading-relaxed">Mobile engagement time increased 34%, organic traffic grew 22% (improved SEO from alt text and structure), and content reached visually impaired audience for the first time.</p>
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
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Reduced legal risk</span> — Your site meets accessibility standards and is defensible against ADA complaints</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Expanded audience reach</span> — Users with disabilities, mobile users, and older devices can all access your content</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Better mobile conversion</span> — Fewer bounce rates, easier navigation, faster checkout or signup flows</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">SEO improvements</span> — Proper heading structure, alt text, and semantic HTML help search engines understand your content</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Peace of mind</span> — You can confidently say your site is inclusive and compliant when asked by customers, investors, or partners</span>
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
            <h3 className="mb-2 text-lg font-semibold text-text-primary">1. Discovery & Setup</h3>
            <p className="text-text-primary leading-relaxed">
              Share your site URL, priority pages, and any known issues. I'll confirm scope, review your current tech stack, and understand your target compliance level (WCAG 2.1 A, AA, or AAA).
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">2. Audit & Testing</h3>
            <p className="text-text-primary leading-relaxed">
              Run automated accessibility scans with tools like Axe and WAVE, then perform manual testing with screen readers (NVDA, VoiceOver), keyboard-only navigation, and mobile device testing across iOS and Android.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">3. Report & Recommendations</h3>
            <p className="text-text-primary leading-relaxed">
              Deliver a detailed audit report with screenshots, issue severity ratings (critical, moderate, minor), specific code fixes, and before/after examples. Issues are prioritized by impact and effort.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">4. Walkthrough & Next Steps</h3>
            <p className="text-text-primary leading-relaxed">
              Review the report together, answer questions, and clarify implementation. If you need help implementing fixes, I can provide that as a separate engagement—or you can hand the report to your team.
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
            I use a combination of automated tools and manual testing to ensure comprehensive coverage:
          </p>
          <ul className="space-y-3 ml-6">
            <li className="leading-relaxed">
              <span className="font-semibold">Automated Testing</span> — Axe DevTools, WAVE, Lighthouse, and Pa11y for initial scans and regression testing
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold">Screen Readers</span> — NVDA (Windows), VoiceOver (macOS/iOS), and TalkBack (Android) for real-world assistive technology testing
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold">Manual Testing</span> — Keyboard-only navigation, color contrast analyzers, browser zoom testing, and mobile device testing
            </li>
            <li className="leading-relaxed">
              <span className="font-semibold">Compliance Frameworks</span> — WCAG 2.1 (A, AA, AAA levels), Section 508, and ADA best practices
            </li>
          </ul>
          <p className="text-text-secondary">
            Tool choice depends on your existing setup—I adapt to your platform and can work with any modern web framework or CMS.
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
            <h3 className="mb-2 text-lg font-semibold text-text-primary">How long does an accessibility audit take?</h3>
            <p className="text-text-primary leading-relaxed">
              Most audits are completed in 2–4 days, depending on the size of your site. A 5-page marketing site is faster than a 50-page web app. I'll give you a timeline estimate after reviewing your site.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Do I need technical knowledge to understand the report?</h3>
            <p className="text-text-primary leading-relaxed">
              No. The report includes plain-language explanations, visual examples, and specific instructions. If you have a developer, they'll find the technical details they need. If you don't, I can walk you through it or implement the fixes for you.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Will this guarantee I won't get sued for accessibility issues?</h3>
            <p className="text-text-primary leading-relaxed">
              I'm not a lawyer, so I can't provide legal guarantees. But I can tell you that following WCAG 2.1 AA standards significantly reduces your risk and demonstrates good faith effort to comply with accessibility laws like the ADA.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Can you help implement the fixes, or just audit?</h3>
            <p className="text-text-primary leading-relaxed">
              Both. The audit is a standalone service—you get a detailed report and can implement fixes yourself or with your team. If you want help implementing, I can quote that separately as a follow-up engagement.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What's the difference between automated and manual testing?</h3>
            <p className="text-text-primary leading-relaxed">
              Automated tools catch obvious issues like missing alt text or low contrast. Manual testing catches nuanced problems like confusing navigation flow, unclear labels, or unusable mobile interactions. You need both for a complete audit.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Do you test on real mobile devices?</h3>
            <p className="text-text-primary leading-relaxed">
              Yes. I test on actual iPhones and Android devices, not just browser emulators. Real devices reveal touch target issues, font scaling problems, and mobile-specific bugs that emulators miss.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Is this a one-time audit or ongoing monitoring?</h3>
            <p className="text-text-primary leading-relaxed">
              The audit is a one-time engagement. However, accessibility is ongoing—every time you add new features or content, you should re-test. I can set up automated monitoring or provide periodic re-audits if needed.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What if my site is built on WordPress, Shopify, or another platform?</h3>
            <p className="text-text-primary leading-relaxed">
              No problem. Accessibility standards apply regardless of platform. I'll audit your site and provide fixes that work within your CMS or platform constraints.
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
            I'll review your site, answer your questions, and give you a clear sense of scope and timeline. No obligation, no pressure—just a quick conversation to see if accessibility and mobile optimization make sense for you right now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Build with empathy. Reach more people.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
            Audit My Site for Accessibility
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
