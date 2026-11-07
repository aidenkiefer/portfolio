'use client';

import { useState } from 'react';

const INTEREST_OPTIONS = [
  { value: '', label: 'Select an option (optional)' },
  { value: 'engineering', label: 'Engineering opportunity' },
  { value: 'collaboration', label: 'Project collaboration' },
  { value: 'contract', label: 'Selective contract work' },
  { value: 'other', label: 'Other' },
];

const inputBase =
  'w-full rounded-md border border-border bg-background px-4 py-3 text-base text-text-primary placeholder:text-text-muted focus:border-accent-primary focus:outline-none focus:ring-1 focus:ring-accent-primary transition-colors';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const body = {
      name: (formData.get('name') as string)?.trim() || '',
      email: (formData.get('email') as string)?.trim() || '',
      interest: (formData.get('interest') as string)?.trim() || '',
      message: (formData.get('message') as string)?.trim() || '',
    };

    if (!body.name || !body.email || !body.message) {
      setStatus('error');
      setErrorMessage('Please fill in name, email, and message.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again or email directly.');
        return;
      }
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again or email directly.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-text-primary">
          Name <span className="text-accent-secondary">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={inputBase}
          placeholder="Your name"
          disabled={status === 'sending'}
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-text-primary">
          Email <span className="text-accent-secondary">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputBase}
          placeholder="you@example.com"
          disabled={status === 'sending'}
        />
      </div>
      <div>
        <label htmlFor="contact-interest" className="mb-1.5 block text-sm font-medium text-text-primary">
          What are you interested in?
        </label>
        <select
          id="contact-interest"
          name="interest"
          className={inputBase}
          disabled={status === 'sending'}
        >
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt.value || 'empty'} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-text-primary">
          Message <span className="text-accent-secondary">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className={`${inputBase} resize-y min-h-[120px]`}
          placeholder="Tell me about the role, collaboration, or problem you have in mind..."
          disabled={status === 'sending'}
        />
      </div>

      {status === 'success' && (
        <p className="rounded-md border border-border bg-surface-raised px-4 py-3 text-sm text-text-primary">
          Thanks for reaching out. I&apos;ll get back to you at the email you provided.
        </p>
      )}
      {status === 'error' && (
        <p className="rounded-md border border-accent-secondary bg-surface-raised px-4 py-3 text-sm text-accent-secondary">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="inline-flex items-center justify-center rounded-md bg-accent-primary px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-primary/90 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}
