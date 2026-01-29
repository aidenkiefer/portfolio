import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';

export const metadata = generateMetadata({
  title: 'AI Customer Service Chatbots | Smart 24/7 Support',
  description: 'Custom AI chatbots that handle support, capture leads, and work 24/7. Reduce manual support work and increase conversions with trained conversational AI.',
  path: '/services/chatbots',
});

export default function ChatbotsPage() {
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
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight">
          Smart AI Chatbots That Handle Support, Capture Leads, and Work 24/7
        </h1>
        <p className="mb-8 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl">
          Turn your website into a conversion machine with a trained, conversational AI assistant.
        </p>
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-md bg-surface-raised border border-border text-base font-semibold text-text-primary">
            Starting at $200
          </span>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
        >
          Book a Free Chatbot Consult
          <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Accent Stripe */}
      <div className="mb-12 sm:mb-16 h-1 bg-accent-secondary" />

      {/* Problem → Promise */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Tired of answering the same questions over and over?
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            Customer support is one of the most draining parts of running a lean business. Your team (or just you) is stuck replying to the same emails, DMs, and contact form submissions. Even worse, leads drop off when they can't find the answer fast.
          </p>
          <p>
            Now imagine a smart AI that answers common questions, qualifies leads, and stays online 24/7—without writing any code or hiring support staff.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What's Included
        </h2>
        <div className="rounded-md border border-border bg-background p-8"
          style={{
            boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
          }}
        >
          <ul className="space-y-4">
            {[
              'A custom-trained GPT-powered chatbot embedded directly into your site',
              'Chat history tracking & visitor handoff to email/slack/CRM',
              'FAQ ingestion (from docs, PDFs, Notion, or plain text)',
              'On-brand styling + welcome prompt customization',
              'Optional multilingual support',
              'Full setup, deployment, and walkthrough included',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
                <span className="text-text-primary leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-8 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Real-World Use Cases
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            { title: 'Ecommerce', desc: 'Answer product + shipping questions' },
            { title: 'Startups', desc: 'Onboard users or collect feedback' },
            { title: 'Creators', desc: 'Engage site visitors, direct traffic' },
            { title: 'Agencies', desc: 'Triage inbound leads + set expectations' },
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
                <div>
                  <h3 className="font-semibold text-text-primary mb-1">{useCase.title}</h3>
                  <p className="text-sm text-text-secondary">{useCase.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline & Delivery */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Timeline
        </h2>
        <div className="space-y-3 max-w-2xl">
          <p className="text-text-primary leading-relaxed">
            <span className="font-semibold">1-day</span> prototype turnaround
          </p>
          <p className="text-text-primary leading-relaxed">
            <span className="font-semibold">2–3 day</span> full deployment
          </p>
          <p className="text-text-secondary leading-relaxed">
            Optional add-ons for multi-domain or multi-language bots
          </p>
        </div>
      </section>

      {/* Technical Details */}
      <section className="mb-16 sm:mb-20">
        <div className="rounded-md border border-border bg-surface-sunken p-6">
          <h3 className="mb-3 text-sm font-semibold text-text-primary uppercase tracking-wide">
            Technical Details
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed">
            Built using OpenAI or Claude APIs, combined with chatbot UIs like LangChain, Botpress, or custom-built widgets. Can integrate with tools like Slack, HubSpot, Airtable, or email.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section>
        <div className="rounded-md border border-border bg-surface-raised p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight">
            Ready to let AI handle the repetitive stuff?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
          >
            Book a Free Chatbot Consult
            <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </Container>
  );
}
