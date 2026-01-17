import Link from 'next/link';
import { Container } from './Container';
import { Logo } from '@/components/Logo';
import { NavLink } from './NavLink';

const navItems = [
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/coursework', label: 'Coursework' },
  { href: '/strengths', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  return (
    <nav className="border-b border-border bg-background sticky top-0 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center transition-opacity duration-200 ease-out hover:opacity-80"
          >
            <Logo className="h-20 w-20 text-text-primary" />
          </Link>
          <div className="hidden gap-4 sm:flex sm:gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
}
