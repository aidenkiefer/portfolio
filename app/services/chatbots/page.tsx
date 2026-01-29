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

      {/* Section 1: What This Service Actually Does */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          What This Service Actually Does
        </h2>
        <div className="space-y-4 text-text-primary leading-relaxed max-w-3xl">
          <p>
            At its core, this service builds a smart, conversational AI assistant that lives on your website and handles customer questions in real time—without you or your team lifting a finger.
          </p>
          <p>
            Instead of forcing visitors to dig through FAQs or wait hours for email replies, your chatbot answers instantly. It's trained on your specific content—product details, policies, documentation, whatever matters—so it gives accurate, helpful answers that sound like they came from your team.
          </p>
          <p>
            The chatbot can also qualify leads by asking the right questions, capture contact info, and hand off conversations to you when it's time for a human touch. You get a 24/7 support and sales assistant that reduces repetitive work, speeds up response times, and helps convert more visitors into customers.
          </p>
        </div>
      </section>

      {/* Section 2: Who This Service Is Best For */}
      <section className="mb-16 sm:mb-20">
        <div className="mb-8 h-px bg-border" />
        <h2 className="mb-6 text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
          <ChipMark className="h-14 w-14 text-text-secondary flex-shrink-0" />
          Who This Service Is Best For
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
              <span className="text-2xl">✅</span>
              Great Fit If You:
            </h3>
            <ul className="space-y-3 text-text-primary leading-relaxed max-w-3xl">
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <span>Get the same customer questions over and over (pricing, features, shipping, how-to, etc.)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <span>Want to capture and qualify leads automatically, even when you're offline or asleep</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <span>Need faster response times without hiring a support team</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <span>Have documentation, FAQs, or product info that could be turned into instant answers</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <span>Run an ecommerce store, SaaS product, or service business with high inquiry volume</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-primary mt-1">•</span>
                <span>Want to increase conversions by reducing friction and helping visitors find what they need instantly</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold text-text-primary flex items-center gap-2">
              <span className="text-2xl">🚫</span>
              Not a Great Fit If You:
            </h3>
            <ul className="space-y-3 text-text-secondary leading-relaxed max-w-3xl">
              <li className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <span>Don't have any existing content or documentation to train the chatbot on</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <span>Need complex, multi-step workflows that require heavy human judgment or empathy</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <span>Only get 1-2 inquiries per week (probably not worth automating yet)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">•</span>
                <span>Want a chatbot that can directly process payments or access sensitive customer data without proper setup</span>
              </li>
            </ul>
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
          <div className="rounded-md border border-border bg-background p-6 sm:p-8"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Example 1: Ecommerce Store Scaling Support
            </h3>
            <div className="space-y-3 text-text-primary leading-relaxed">
              <p>
                <span className="font-semibold text-text-primary">Problem:</span> A boutique online store was getting 50+ emails per day asking about sizing, shipping times, and return policies. The founder spent 2-3 hours daily just answering repetitive questions.
              </p>
              <p>
                <span className="font-semibold text-text-primary">Solution:</span> Built a chatbot trained on product specs, shipping FAQ, and return policy. Added a handoff flow for questions requiring human review (like custom orders).
              </p>
              <p>
                <span className="font-semibold text-text-primary">Result:</span> 70% of inquiries handled instantly by the chatbot. Email volume dropped to ~15 per day. Founder reclaimed 1.5 hours per day and customer satisfaction scores improved due to instant responses.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6 sm:p-8"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Example 2: SaaS Startup Lead Qualification
            </h3>
            <div className="space-y-3 text-text-primary leading-relaxed">
              <p>
                <span className="font-semibold text-text-primary">Problem:</span> A B2B SaaS startup was losing leads who landed on their site outside business hours. By the time the team followed up, prospects had moved on to competitors.
              </p>
              <p>
                <span className="font-semibold text-text-primary">Solution:</span> Deployed a chatbot that asked qualifying questions (company size, use case, budget), captured contact details, and scheduled demo calls automatically via Calendly integration.
              </p>
              <p>
                <span className="font-semibold text-text-primary">Result:</span> 40% increase in qualified demo bookings. Sales team stopped chasing cold leads and focused on prospects who were already pre-qualified and engaged.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-border bg-background p-6 sm:p-8"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3 className="mb-4 text-lg font-semibold text-text-primary">
              Example 3: Service Business FAQ Automation
            </h3>
            <div className="space-y-3 text-text-primary leading-relaxed">
              <p>
                <span className="font-semibold text-text-primary">Problem:</span> A consulting agency got constant inquiries about pricing, services offered, and timeline. Most questions came through contact forms, creating a 24-48 hour delay before any reply.
              </p>
              <p>
                <span className="font-semibold text-text-primary">Solution:</span> Added a chatbot trained on service packages, pricing tiers, and typical timelines. Integrated with HubSpot to capture leads directly into their CRM.
              </p>
              <p>
                <span className="font-semibold text-text-primary">Result:</span> Response time dropped from days to seconds. Lead conversion rate increased by 25% because prospects got instant clarity and stayed engaged.
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
        <div className="rounded-md border border-border bg-background p-6 sm:p-8"
          style={{
            boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
          }}
        >
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Instant 24/7 support</span>
                <span className="text-text-primary"> — visitors get answers immediately, even when you're offline, reducing bounce rates and frustration</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Reclaim 5-15 hours per week</span>
                <span className="text-text-primary"> — stop answering the same questions over and over; let the chatbot handle repetitive inquiries so you can focus on high-value work</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Higher conversion rates</span>
                <span className="text-text-primary"> — reduce friction by helping visitors find what they need quickly; qualified leads get routed to you faster</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Better customer experience</span>
                <span className="text-text-primary"> — no more waiting hours or days for replies; instant, accurate answers build trust and satisfaction</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Scalable support without hiring</span>
                <span className="text-text-primary"> — handle 10x the volume without adding headcount; your chatbot gets smarter over time as you refine its training</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-accent-primary flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-text-primary">Clear data and insights</span>
                <span className="text-text-primary"> — see what people are asking, where they get stuck, and what topics need better documentation</span>
              </div>
            </li>
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
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="mb-3 inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent-primary/10 text-accent-primary font-semibold">
              1
            </div>
            <h3 className="mb-3 text-lg font-semibold text-text-primary">
              Discovery & Setup
            </h3>
            <p className="text-text-primary leading-relaxed">
              We start with a short call to understand your most common customer questions, your tone of voice, and what content you already have (FAQs, docs, product pages, etc.). I'll also ask about any integrations you need (Slack, email, CRM).
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="mb-3 inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent-primary/10 text-accent-primary font-semibold">
              2
            </div>
            <h3 className="mb-3 text-lg font-semibold text-text-primary">
              Build & Training
            </h3>
            <p className="text-text-primary leading-relaxed">
              I train the chatbot on your content and configure the conversation flows. This includes setting up the welcome message, fallback responses, and handoff triggers. You'll get a staging link to test it out before it goes live.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="mb-3 inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent-primary/10 text-accent-primary font-semibold">
              3
            </div>
            <h3 className="mb-3 text-lg font-semibold text-text-primary">
              Testing & Iteration
            </h3>
            <p className="text-text-primary leading-relaxed">
              You test the chatbot with real questions and edge cases. I refine the responses, tweak the tone, and fix any gaps in the knowledge base. This phase usually takes 1-2 rounds of feedback.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <div className="mb-3 inline-flex items-center justify-center h-10 w-10 rounded-full bg-accent-primary/10 text-accent-primary font-semibold">
              4
            </div>
            <h3 className="mb-3 text-lg font-semibold text-text-primary">
              Deployment & Walkthrough
            </h3>
            <p className="text-text-primary leading-relaxed">
              Once you're happy, I deploy the chatbot to your live site and walk you through how to monitor conversations, update the knowledge base, and make tweaks over time. You'll also get documentation and support for ongoing adjustments.
            </p>
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
          <div>
            <h3 className="mb-2 text-base font-semibold text-text-primary">
              AI Models
            </h3>
            <p className="text-text-primary leading-relaxed">
              OpenAI GPT-4 or Anthropic Claude for natural language understanding and response generation. These models power the conversational intelligence behind the chatbot.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold text-text-primary">
              Chatbot Platforms
            </h3>
            <p className="text-text-primary leading-relaxed">
              LangChain for RAG (retrieval-augmented generation), Botpress for visual flow builders, or custom-built widgets using React and Next.js for full design control.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold text-text-primary">
              Integrations
            </h3>
            <p className="text-text-primary leading-relaxed">
              Slack, HubSpot, Airtable, email (via SendGrid or Resend), Calendly, or Zapier—whatever fits your existing workflow. The chatbot can hand off conversations or push data to your CRM automatically.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-base font-semibold text-text-primary">
              Hosting & Deployment
            </h3>
            <p className="text-text-primary leading-relaxed">
              Deployed via Vercel, Netlify, or your existing hosting provider. Fully scalable and optimized for fast response times.
            </p>
          </div>
          <div className="pt-2">
            <p className="text-sm text-text-secondary leading-relaxed italic">
              Note: Tool choice depends on your stack and preferences—I adapt to what you already use or recommend the best fit for your use case.
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
          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3 className="mb-3 text-base font-semibold text-text-primary">
              How long does it take to set up?
            </h3>
            <p className="text-text-primary leading-relaxed">
              A basic prototype can be ready in 1 day. Full deployment with training, testing, and integrations usually takes 2-3 days. More complex setups (multi-language, multi-domain, or heavy CRM integration) may take up to a week.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3 className="mb-3 text-base font-semibold text-text-primary">
              Do I need technical knowledge to manage it?
            </h3>
            <p className="text-text-primary leading-relaxed">
              Nope. I'll walk you through how to update responses, add new content, and review chat logs. Most clients manage their chatbot through a simple dashboard or by uploading updated docs—no coding required.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3 className="mb-3 text-base font-semibold text-text-primary">
              Will this work with my existing website or platform?
            </h3>
            <p className="text-text-primary leading-relaxed">
              Yes. The chatbot can be embedded on any website (WordPress, Shopify, Webflow, custom Next.js sites, etc.) using a simple script tag or iframe. It's platform-agnostic and fully customizable to match your design.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3 className="mb-3 text-base font-semibold text-text-primary">
              What if the chatbot doesn't know the answer?
            </h3>
            <p className="text-text-primary leading-relaxed">
              It's trained to recognize when it doesn't have enough information. In those cases, it can hand off to you via email, Slack, or a contact form, and politely let the visitor know a human will follow up soon.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3 className="mb-3 text-base font-semibold text-text-primary">
              Is this a one-time setup or ongoing subscription?
            </h3>
            <p className="text-text-primary leading-relaxed">
              The base service is a one-time setup. You own the chatbot and can manage it yourself. Optional: I offer ongoing support packages for monthly updates, performance monitoring, and knowledge base expansion.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3 className="mb-3 text-base font-semibold text-text-primary">
              Can the chatbot speak multiple languages?
            </h3>
            <p className="text-text-primary leading-relaxed">
              Yes. GPT-4 and Claude support 50+ languages out of the box. If you need multilingual support, just provide translated FAQs or let the AI handle auto-translation (quality depends on language pair).
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3 className="mb-3 text-base font-semibold text-text-primary">
              What kind of data does the chatbot collect?
            </h3>
            <p className="text-text-primary leading-relaxed">
              By default, it logs conversation history (for quality improvement) and can capture visitor contact info if they provide it. All data is stored securely and you maintain full ownership. GDPR and privacy-compliant options available.
            </p>
          </div>

          <div className="rounded-md border border-border bg-background p-6"
            style={{
              boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
            }}
          >
            <h3 className="mb-3 text-base font-semibold text-text-primary">
              Can I customize the chatbot's personality and tone?
            </h3>
            <p className="text-text-primary leading-relaxed">
              Absolutely. During setup, we define the tone (friendly, professional, witty, etc.) and the chatbot's personality to match your brand. You can adjust this anytime by updating the system prompt.
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
        <div className="rounded-md border border-border bg-background p-8 sm:p-12"
          style={{
            boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
          }}
        >
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <p className="text-lg text-text-primary leading-relaxed">
              If you think an AI chatbot could help your business save time, improve customer experience, and capture more leads, the next step is a short, no-pressure call to see if it's a good fit.
            </p>
            <p className="text-text-primary leading-relaxed">
              We'll talk through your most common questions, what content you already have, and what outcomes you're looking for. Then I'll recommend the best approach and give you a clear timeline and price.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-all duration-200 ease-out hover:bg-accent-primary/90 group"
              >
                Book a Free Chatbot Consult
                <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact#form"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-base font-medium text-text-primary transition-all duration-200 ease-out hover:bg-surface-raised"
              >
                Send a Message Instead
              </Link>
            </div>
            <p className="text-sm text-text-secondary">
              No obligation. Quick call. Just honest advice about whether this makes sense for your business.
            </p>
          </div>
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
