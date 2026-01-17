import Link from 'next/link';
import { Container } from '@/components/layout/Container';

export default function NotFound() {
  return (
    <Container className="py-12">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-900">404</h1>
        <p className="mb-8 text-gray-600">Page not found</p>
        <Link
          href="/"
          className="rounded bg-gray-900 px-6 py-3 text-white hover:bg-gray-800"
        >
          Go Home
        </Link>
      </div>
    </Container>
  );
}
