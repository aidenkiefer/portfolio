import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function ProjectNavigation() {
  return (
    <div className="mb-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-primary transition-colors duration-200 ease-out"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Projects
      </Link>
    </div>
  );
}
