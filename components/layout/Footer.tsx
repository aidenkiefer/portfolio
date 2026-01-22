'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { Container } from './Container';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ChipMark } from '@/components/common/ChipMark';
import { AdminLoginModal } from '@/components/admin/AdminLoginModal';
import { useAdmin } from '@/components/admin/AdminProvider';

export function Footer() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { isAdmin } = useAdmin();

  return (
    <>
      <footer className="relative border-t border-border py-8 mt-16">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} {siteConfig.name}
            </p>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setShowLoginModal(true)}
                className="text-text-secondary hover:text-accent-primary transition-colors duration-200 ease-out"
                aria-label="Admin login"
              >
                <ChipMark className="h-5 w-5" />
              </button>
              {siteConfig.links.github && (
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-primary transition-colors duration-200 ease-out"
                >
                  <Github className="h-5 w-5" />
                </Link>
              )}
              {siteConfig.links.linkedin && (
                <Link
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent-primary transition-colors duration-200 ease-out"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              )}
              {siteConfig.links.email && (
                <Link
                  href={siteConfig.links.email}
                  className="text-text-secondary hover:text-accent-primary transition-colors duration-200 ease-out"
                >
                  <Mail className="h-5 w-5" />
                </Link>
              )}
            </div>
          </div>
        </Container>
      </footer>
      
      <AdminLoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
}
