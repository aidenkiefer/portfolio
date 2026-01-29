import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';
import { serviceCategories, servicePackages } from '@/data/services';

export const metadata = generateMetadata({
  title: 'Freelance Software Engineering Services | AI, Performance, Automation',
  description: 'Professional web development services for startups and small businesses. AI chatbots, performance optimization, SEO, automation, and custom integrations. Remote contractor work with transparent pricing.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      {/* Hero Section */}
      <div className="mb-16 sm:mb-20 lg:mb-24">
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Modern Tech Services to Supercharge Your Business
        </h1>
        <p className="mb-2 text-sm sm:text-base text-text-muted uppercase tracking-wide">
          — contractor services • startups • small business
        </p>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          From AI chatbots to backend automation, I help startups and lean teams unlock growth with fast, effective web-based solutions. Check out my{' '}
          <Link href="/projects" className="text-accent-primary hover:text-accent-primary/80 transition-colors">
            portfolio of projects
          </Link>{' '}
          or{' '}
          <Link href="/experience" className="text-accent-primary hover:text-accent-primary/80 transition-colors">
            professional experience
          </Link>
          .
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
          >
            Book a Free Discovery Call
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:border-accent-primary hover:text-accent-primary"
          >
            View Services Below
          </a>
        </div>
      </div>

      {/* Accent Stripe */}
      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      {/* Service Categories */}
      {serviceCategories.map((category, idx) => (
        <section key={category.title} id={idx === 0 ? 'services' : undefined} className="mb-20">
          <div className="mb-8 h-px bg-border" />
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
            <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
            {category.title}
          </h2>
          <p className="mb-10 text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
            {category.tagline}
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {category.services.map((service) => (
              <div
                key={service.slug}
                className="rounded-md border border-border bg-background p-6 transition-all duration-200 ease-out hover:border-accent-primary hover:-translate-y-0.5"
                style={{
                  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
                }}
              >
                <h3 className="mb-3 text-lg sm:text-xl font-semibold text-text-primary">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm sm:text-base text-text-secondary leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-text-primary">
                    Starting at ${service.price}
                  </span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-medium text-accent-primary hover:text-accent-primary/80 transition-colors duration-200 ease-out inline-flex items-center gap-1 group"
                  >
                    Learn more
                    <ArrowRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Optional Starter Packages */}
      <section className="mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Starter Packages
        </h2>
        <p className="mb-10 text-base sm:text-lg text-text-secondary leading-relaxed max-w-3xl">
          Bundled services at a discounted rate for common needs.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {servicePackages.map((pkg) => (
            <div
              key={pkg.slug}
              className="rounded-md border border-border bg-background p-6 transition-all duration-200 ease-out hover:border-accent-primary hover:-translate-y-0.5"
              style={{
                boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
              }}
            >
              <h3 className="mb-3 text-lg sm:text-xl font-semibold text-text-primary">
                {pkg.name}
              </h3>
              <p className="mb-4 text-sm sm:text-base text-text-secondary leading-relaxed">
                {pkg.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-base font-semibold text-text-primary">
                  Package: ${pkg.price}
                </span>
                <Link
                  href={`/services/${pkg.slug}`}
                  className="text-sm font-medium text-accent-primary hover:text-accent-primary/80 transition-colors duration-200 ease-out inline-flex items-center gap-1 group"
                >
                  Learn more
                  <ArrowRight className="h-3 w-3 transition-transform duration-200 ease-out group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consulting & Misc Services */}
      <section className="mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Need Help with Something Else?
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl mb-8">
          <p>
            Not every useful engagement fits neatly into a predefined package. If you're working on something that doesn't match the services above, I'm available for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-text-secondary">
            <li>Consulting on tricky architecture or performance issues</li>
            <li>Short-term advisory work for product or engineering teams</li>
            <li>One-off problem-solving or exploratory prototypes</li>
            <li>Miscellaneous technical work that aligns with my{' '}
              <Link href="/experience" className="text-accent-primary hover:text-accent-primary/80 transition-colors">
                background and skills
              </Link>
            </li>
          </ul>
          <p className="text-text-secondary">
            These are <strong className="text-text-primary">custom engagements</strong> with rates set after a <strong className="text-text-primary">free consultation call</strong>. No public flat pricing—we'll scope the work together and agree on terms that make sense for your project.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md border-2 border-accent-primary px-6 py-3 text-base font-medium text-accent-primary transition-all duration-200 ease-out hover:bg-accent-primary hover:text-white group"
        >
          Talk Through Your Project
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </section>

      {/* Final CTA */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary tracking-tight">
            Let's Build Something That Saves You Time or Makes You Money
          </h2>
          <p className="mb-8 text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            If you're building something and want to move faster, cleaner, or smarter—let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
            >
              Book a Free Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact#form"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:border-accent-primary hover:text-accent-primary"
            >
              Reach Out by Email
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="border-t border-border pt-8 pb-4">
        <p className="text-sm text-text-secondary text-center max-w-2xl mx-auto">
          All services are remote and tailored per client. Custom quotes available upon request.
        </p>
      </div>
    </Container>
  );
}
