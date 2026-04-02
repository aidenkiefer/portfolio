import { Container } from '@/components/layout/Container';
import { ReleaseFeedAdminPanel } from '@/components/experience/ReleaseFeedAdminPanel';
import { ReleaseFeedBoard } from '@/components/experience/ReleaseFeedBoard';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
  title: 'Release feed layout (temporary)',
  description: 'Internal preview: compare Release Feed UI variants. Not indexed.',
  path: '/admin/release-feed',
  noIndex: true,
});

export default function AdminReleaseFeedPage() {
  return (
    <Container className="py-10 sm:py-14 lg:py-20">
      <ReleaseFeedAdminPanel />
      <ReleaseFeedBoard />
    </Container>
  );
}
