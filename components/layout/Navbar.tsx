import Link from 'next/link';
import { Container } from './Container';
import { Logo } from '@/components/Logo';
import { NavLink } from './NavLink';

const navItems = [
  { href: '/', label: 'Home' },
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
            className="flex items-center gap-3 text-xl font-semibold text-text-primary hover:text-accent-primary transition-colors duration-200 ease-out"
          >
            <Logo className="h-8 w-8 text-text-primary" />
            <span className="hidden sm:inline">{siteConfig.name}</span>
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
