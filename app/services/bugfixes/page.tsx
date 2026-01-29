import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'Bug Fixes & Error Monitoring | Quick Website Repair',
  description: 'Fix broken layouts, forms, and errors fast. Lightweight bug fixing service without waiting on your dev team. Console errors, API issues, and more.',
  path: '/services/bugfixes',
});

export default function BugFixesPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="mb-16 sm:mb-20">
        <div className="mb-4">
          <Link href="/services" className="inline-flex items-center text-sm text-text-secondary hover:text-accent-primary transition-colors">
            ← Back to Services
          </Link>
        </div>
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Fix Broken Stuff Fast—Without Breaking Anything Else
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          A lightweight service to squash annoying bugs and smooth out site behavior, without waiting on your dev team.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $80
          </span>
        </div>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
          Request a Bug Fix
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Tiny bugs create big friction
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            A button that doesn't click. A form that doesn't submit. An error that confuses users or slows conversions. You don't need a rebuild—you just need someone to clean things up. I'll handle it quickly, cleanly, and safely.
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
              'Diagnosis and resolution of frontend or backend issues',
              'Console error tracking + cleanup',
              'Form or API submission debugging',
              'Optional real-time monitoring setup (Sentry, LogRocket, etc.)',
              'Post-fix verification across browsers/devices',
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
          Common Fixes
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            'Broken signup or contact forms',
            'JavaScript errors or unhandled exceptions',
            'CSS/layout bugs across screen sizes',
            '500 errors, slow response times, or misfiring logic',
          ].map((fix, idx) => (
            <div key={idx} className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
                <p className="text-text-primary">{fix}</p>
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
          <p className="text-text-primary leading-relaxed"><span className="font-semibold">24–72 hour</span> turnaround depending on bug scope</p>
          <p className="text-text-primary leading-relaxed">You'll get a full log of fixes made</p>
          <p className="text-text-secondary leading-relaxed">Additional issues quoted separately</p>
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
            At its core, this service identifies and fixes the specific issues causing problems on your site—whether that's a broken form, a console error, a layout bug, or slow API responses—so your users can complete actions without frustration and you can stop worrying about things breaking.
          </p>
          <p>
            After the fix, you get a clean, stable experience: errors disappear from the console, forms submit correctly, pages load properly across devices, and the flow works as intended. You also get a detailed log of what was changed, so you (or your team) understand exactly what was done.
          </p>
          <p>
            If you choose to add monitoring, you'll also get visibility into new errors as they happen—catching issues before users complain, without manual testing.
          </p>
        </div>
      </section>

      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Who This Service Is Best For
        </h2>

        <div className="mb-10">
          <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-text-primary">✅ Great Fit If You:</h3>
          <ul className="space-y-3 max-w-3xl">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed">Have a specific bug or error that's impacting users or conversions, and you need it fixed fast</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed">Don't have an in-house dev or your dev team is tied up with bigger projects</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed">Want someone who can diagnose the issue, fix it cleanly, and document what was changed</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed">Need cross-browser or cross-device testing to make sure the fix actually works everywhere</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed">Want optional error monitoring so you catch future issues before they become problems</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed">Value clean, safe fixes over quick hacks that might break something else down the line</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-text-primary">🚫 Not a Great Fit If You:</h3>
          <ul className="space-y-3 max-w-3xl text-text-secondary">
            <li className="flex items-start gap-3">
              <span className="text-lg mt-0.5">•</span>
              <span className="leading-relaxed">You're looking for a full site rebuild or redesign—this is for targeted fixes, not large-scale changes</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg mt-0.5">•</span>
              <span className="leading-relaxed">You need ongoing maintenance or a retainer—this is a one-off service (though you can book multiple fixes)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg mt-0.5">•</span>
              <span className="leading-relaxed">You're not able to provide access to the codebase or describe the issue clearly—I need visibility to diagnose and fix</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-lg mt-0.5">•</span>
              <span className="leading-relaxed">The issue is server/infrastructure-related and requires DevOps expertise beyond basic debugging</span>
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

        <div className="space-y-8 max-w-3xl">
          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 1: E-commerce Site with Broken Checkout Form</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-secondary leading-relaxed">
                  Users were abandoning carts because the checkout form wouldn't submit on mobile devices. The founder didn't know if it was a JavaScript error, a CSS issue, or a backend problem.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-secondary leading-relaxed">
                  I reviewed the console logs, identified a conflict between the form validation library and a recent update, fixed the logic, and tested across devices and browsers.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-secondary leading-relaxed">
                  Checkout completion rate went back to normal within 48 hours. The founder got a fix log showing exactly what changed and why.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 2: SaaS App with 500 Errors on Signup</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-secondary leading-relaxed">
                  New users trying to sign up were hitting a 500 error intermittently. The team couldn't reproduce it consistently, and it was killing trial conversions.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-secondary leading-relaxed">
                  I set up error monitoring (Sentry), caught the exact conditions causing the failure (a race condition in the signup API), and patched the logic to handle edge cases properly.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-secondary leading-relaxed">
                  Signups stabilized, the team gained real-time error tracking, and they could see exactly when new issues popped up—before users reported them.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6" style={{ boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)' }}>
            <h3 className="mb-4 text-lg font-semibold text-text-primary">Example 3: Marketing Site with Layout Breaking on Safari</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-text-primary mb-1">Problem:</p>
                <p className="text-text-secondary leading-relaxed">
                  A recent CSS change caused the hero section to overlap with the navigation on Safari (but not Chrome or Firefox). The founder only found out after a customer mentioned it.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Solution:</p>
                <p className="text-text-secondary leading-relaxed">
                  I tracked down the Safari-specific rendering issue, adjusted the flexbox properties, and tested across all major browsers and screen sizes.
                </p>
              </div>
              <div>
                <p className="font-semibold text-text-primary mb-1">Result:</p>
                <p className="text-text-secondary leading-relaxed">
                  The layout worked consistently everywhere. The founder got screenshots of the before/after and a note on what to avoid in future updates.
                </p>
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
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Errors gone:</span> Console is clean, forms submit correctly, and pages load without breaking across devices and browsers</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Users unblocked:</span> Customers can complete actions (signups, checkouts, contact forms) without friction or confusion</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Full visibility:</span> You get a detailed log of what was changed, why it was changed, and how to prevent similar issues</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Time saved:</span> No more firefighting or guessing—someone who knows what they're doing handles it quickly and safely</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Optional monitoring:</span> If you choose error tracking setup, you'll catch new issues in real time before they impact users</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent-primary flex-shrink-0 mt-1" />
              <span className="text-text-primary leading-relaxed"><span className="font-semibold">Confidence restored:</span> You can trust the site is working as intended, and you won't lose conversions to preventable bugs</span>
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
        <div className="space-y-6 max-w-3xl">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">1. Discovery & Diagnosis</h3>
            <p className="text-text-secondary leading-relaxed">
              You describe the issue (or share a screenshot/error message), I get access to the codebase, and I review console logs, network requests, and the affected flow to pinpoint the root cause.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">2. Fix & Testing</h3>
            <p className="text-text-secondary leading-relaxed">
              I make the necessary changes—whether that's fixing JavaScript logic, adjusting CSS, patching an API call, or cleaning up error handling—and test across browsers, devices, and edge cases to make sure it works.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">3. Verification & Documentation</h3>
            <p className="text-text-secondary leading-relaxed">
              I confirm the fix works in production (or staging), document what was changed and why, and share a full log with you. If monitoring was requested, I set that up and confirm it's tracking correctly.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">4. Delivery & Handoff</h3>
            <p className="text-text-secondary leading-relaxed">
              You get the fixed code, a written summary, and any relevant screenshots or test results. If you have questions or need to understand the fix better, I walk you through it.
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
        <div className="space-y-4 max-w-3xl text-text-primary leading-relaxed">
          <p>
            I work with whatever stack you're using—React, Vue, Next.js, plain JavaScript, WordPress, Shopify, custom backends, etc. The goal is to fix the issue without forcing you to change your setup.
          </p>
          <div className="space-y-3">
            <div>
              <p className="font-semibold mb-1">Debugging & Testing:</p>
              <p className="text-text-secondary">Browser DevTools, network inspection, cross-browser testing (Chrome, Safari, Firefox, Edge), mobile device testing</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Error Monitoring (optional):</p>
              <p className="text-text-secondary">Sentry, LogRocket, or similar tools to catch errors in real time and see exactly what users are experiencing</p>
            </div>
            <div>
              <p className="font-semibold mb-1">Code & Version Control:</p>
              <p className="text-text-secondary">Git for tracking changes, pull requests for review, detailed commit messages so you (or your team) know what changed</p>
            </div>
          </div>
          <p className="text-text-secondary text-sm">
            Tool choice depends on your stack—I adapt to what you already use. If you don't have monitoring set up and want it, I can recommend and configure a lightweight option.
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
            <h3 className="mb-2 text-lg font-semibold text-text-primary">How long does a typical bug fix take?</h3>
            <p className="text-text-secondary leading-relaxed">
              Most fixes take 24–72 hours depending on complexity. Simple issues (broken CSS, form validation) can be done in a day. More involved bugs (API logic, race conditions, cross-browser inconsistencies) may take 2–3 days to diagnose, fix, and test properly.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Do I need to understand how the fix works?</h3>
            <p className="text-text-secondary leading-relaxed">
              Not at all. You'll get a clear summary in plain language, but you don't need to understand the technical details. If you want to know more (or your team does), I'm happy to walk you through it.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What if the fix breaks something else?</h3>
            <p className="text-text-secondary leading-relaxed">
              I test thoroughly before delivering, including cross-browser and device testing. If something does break, I'll fix it at no additional cost. The goal is a clean, safe fix—not a quick hack that creates new problems.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Can you fix bugs on any platform or framework?</h3>
            <p className="text-text-secondary leading-relaxed">
              I work with most modern stacks—React, Next.js, Vue, plain JavaScript, WordPress, Shopify, custom backends, etc. If your setup is particularly niche or requires deep infrastructure/DevOps work, I'll let you know upfront if it's outside my scope.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Is error monitoring included, or is that extra?</h3>
            <p className="text-text-secondary leading-relaxed">
              Error monitoring setup (Sentry, LogRocket, etc.) is optional. If you want it, I can configure it as part of the service. It's especially useful if you want to catch future issues before users report them.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What if I have multiple bugs to fix?</h3>
            <p className="text-text-secondary leading-relaxed">
              Each bug is quoted separately, but if you have a list, I can give you a bundled estimate. This keeps pricing transparent and lets you prioritize which issues to tackle first.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">Do you offer ongoing maintenance or a retainer?</h3>
            <p className="text-text-secondary leading-relaxed">
              This is a one-off service, not a retainer. If you need ongoing support, we can discuss a separate arrangement, but most clients just book fixes as needed.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold text-text-primary">What do I need to provide to get started?</h3>
            <p className="text-text-secondary leading-relaxed">
              A description of the issue (or a screenshot/error message), access to the codebase (GitHub, Bitbucket, etc.), and ideally access to a staging environment if you have one. The more detail you can provide, the faster I can diagnose and fix.
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
            If you have a bug that's slowing you down or impacting users, the next step is a short call to understand the issue and see if this service is a good fit.
          </p>
          <p className="text-text-secondary leading-relaxed">
            No obligation, no sales pitch—just a quick chat to figure out what's broken, how to fix it, and what it'll cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link href="/contact#form" className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised">
              Or fill out the contact form
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Squash the bugs and smooth out your UX.
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group">
            Request a Bug Fix
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
