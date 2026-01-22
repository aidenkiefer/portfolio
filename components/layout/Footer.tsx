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
            <div className="flex gap-4">
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
        
        {/* Admin Login Button - Bottom Right */}
        <button
          onClick={() => setShowLoginModal(true)}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-background border border-border transition-all duration-500 ease-out hover:scale-110 hover:shadow-xl group"
          style={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
          aria-label="Admin login"
        >
          <div className="relative">
            <ChipMark 
              className="h-8 w-8 text-text-secondary transition-all duration-500 ease-out group-hover:text-accent-primary group-hover:rotate-12"
            />
            {/* Primary animated gradient glow on hover */}
            <div 
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out blur-lg -z-10"
              style={{
                background: 'radial-gradient(circle at center, #1E3A5F 0%, #9F2D20 50%, transparent 75%)',
                animation: 'pulse 2s ease-in-out infinite',
                width: '120%',
                height: '120%',
                top: '-10%',
                left: '-10%',
              }}
            />
            {/* Secondary animated glow layer */}
            <div 
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-70 transition-opacity duration-700 ease-out blur-md -z-10"
              style={{
                background: 'radial-gradient(circle at center, #9F2D20 0%, #1E3A5F 50%, transparent 75%)',
                animation: 'pulse 2s ease-in-out infinite 0.7s',
                width: '140%',
                height: '140%',
                top: '-20%',
                left: '-20%',
              }}
            />
            {/* Tertiary outer glow */}
            <div 
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-900 ease-out blur-xl -z-10"
              style={{
                background: 'radial-gradient(circle at center, #1E3A5F 30%, #9F2D20 60%, transparent 85%)',
                animation: 'pulse 2.5s ease-in-out infinite 1s',
                width: '160%',
                height: '160%',
                top: '-30%',
                left: '-30%',
              }}
            />
          </div>
        </button>
      </footer>
      
      <AdminLoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </>
  );
}
