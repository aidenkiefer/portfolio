import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { generateMetadata } from '@/lib/seo';
import { Download } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Resume',
  description: 'Download my resume',
  path: '/resume',
});

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="mb-12">
        <h1 className="mb-6 text-4xl font-semibold text-text-primary tracking-tight">Resume</h1>
        <p className="text-sm text-text-secondary leading-relaxed max-w-2xl mb-8">
          For a concise overview of my background, experience, and skills, you can view or download my resume below.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/resume/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-accent-primary bg-accent-primary px-6 py-3 text-white font-medium transition-colors duration-200 ease-out hover:bg-accent-primary/90"
          >
            View Resume (PDF)
          </a>
          <a
            href="/resume/Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-text-primary font-medium transition-colors duration-200 ease-out hover:border-accent-primary hover:text-accent-primary"
          >
            <Download className="h-5 w-5" />
            Download Resume
          </a>
        </div>
      </div>
      <div className="rounded-md border border-border overflow-hidden">
        <iframe
          src="/resume/Resume.pdf"
          className="h-[800px] w-full"
          title="Resume PDF"
        />
      </div>
    </Container>
  );
}
