import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = 'hello@aidenkiefer.com';
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'Contact Form <onboarding@resend.dev>';

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { message: 'Contact form is not configured. Please set RESEND_API_KEY.' },
      { status: 503 }
    );
  }

  let body: { name?: string; email?: string; interest?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid JSON body.' }, { status: 400 });
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const interest = typeof body.interest === 'string' ? body.interest.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  if (message.length > 10000) {
    return NextResponse.json(
      { message: 'Message is too long.' },
      { status: 400 }
    );
  }

  const interestLabel = interest
    ? INTEREST_LABELS[interest as keyof typeof INTEREST_LABELS] ?? interest
    : 'Not specified';
  const subject = `Contact form: ${interestLabel} from ${name}`;
  const text = [
    `From: ${name} <${email}>`,
    `Interest: ${interestLabel}`,
    '',
    message,
  ].join('\n');

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject,
    text,
  });

  if (error) {
    console.error('Resend error:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again or email directly.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}

const INTEREST_LABELS: Record<string, string> = {
  general: 'General inquiry',
  chatbots: 'AI Chatbots',
  'ai-content': 'AI Content Workflows',
  personalization: 'AI Personalization',
  'ai-video': 'AI Voiceovers & Video',
  'ai-insights': 'AI Business Insights',
  performance: 'Performance & Speed',
  seo: 'Technical SEO',
  accessibility: 'Accessibility & Mobile',
  bugfixes: 'Bug Fixes',
  automation: 'Automation',
  'api-integrations': 'API Integrations',
  'internal-tools': 'Internal Tools & Dashboards',
  'startup-ai': 'Starter package: Startup AI Jumpstart',
  'speed-seo': 'Starter package: Speed & SEO Tune-Up',
  'automation-sprint': 'Starter package: Automation Sprint',
  custom: 'Custom project / other',
};
