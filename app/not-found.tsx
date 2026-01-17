import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export default function NotFound() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <div className="text-center">
        <h1 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary">404</h1>
        <p className="mb-8 text-text-secondary">Page not found</p>
        <Link
          href="/"
          className="rounded-md border border-accent-primary bg-accent-primary px-6 py-3 text-white font-medium transition-colors duration-200 ease-out hover:bg-accent-primary/90"
        >
          Go Home
        </Link>
      </div>
    </Container>
  );
}
