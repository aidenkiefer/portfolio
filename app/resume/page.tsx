import { Container } from '@/components/layout/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { generateMetadata } from '@/lib/seo';
import { Download } from 'lucide-react';

export const metadata = generateMetadata({
  title: 'Resume',
  description: 'Download my resume',
  path: '/resume',
});

export default function ResumePage() {
  return (
    <Container className="py-12">
      <SectionHeading>Resume</SectionHeading>
      <div className="mb-6">
        <a
          href="/resume/Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded bg-gray-900 px-6 py-3 text-white hover:bg-gray-800"
        >
          <Download className="h-5 w-5" />
          Download PDF
        </a>
      </div>
      <div className="rounded-lg border border-gray-200">
        <iframe
          src="/resume/Resume.pdf"
          className="h-[800px] w-full"
          title="Resume PDF"
        />
      </div>
    </Container>
  );
}
