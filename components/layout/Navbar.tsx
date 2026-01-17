import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { Container } from './Container';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/coursework', label: 'Coursework & Skills' },
  { href: '/strengths', label: 'How I Think' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            {siteConfig.name}
          </Link>
          <div className="hidden gap-4 sm:flex sm:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}
