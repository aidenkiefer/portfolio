'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // On mobile, prevent navigation and toggle menu instead
    if (typeof window !== 'undefined' && window.innerWidth < 640) {
      e.preventDefault();
      setIsMobileMenuOpen(!isMobileMenuOpen);
    }
  };

  return (
    <>
      <nav className="border-b border-border bg-background sticky top-0 z-50">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link 
              href="/" 
              onClick={handleLogoClick}
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
      
      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-0 top-16 z-40 sm:hidden transition-all duration-300 ease-out ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-background border-b border-border shadow-lg transition-transform duration-300 ease-out ${
            isMobileMenuOpen
              ? 'translate-y-0'
              : '-translate-y-full'
          }`}
        >
          <Container>
            <nav className="py-4 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium text-text-secondary hover:text-accent-primary hover:bg-background/50 rounded-md transition-all duration-200 ease-out"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </Container>
        </div>
      </div>
    </>
  );
}
