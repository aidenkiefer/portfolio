import { Container } from '@/components/layout/Container';

export default function Loading() {
  return (
    <Container className="py-16">
      <div className="mb-20">
        <h1 className="mb-6 text-4xl font-semibold text-text-primary tracking-tight">Search</h1>
        <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
          Loading...
        </p>
      </div>
    </Container>
  );
}
