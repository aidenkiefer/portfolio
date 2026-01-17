'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!linkRef.current) return;
    
    const rect = linkRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setGlowPosition({ x, y });
  };

  return (
    <Link
      ref={linkRef}
      href={href}
      className="relative text-sm font-medium text-text-secondary hover:text-accent-primary transition-colors duration-200 ease-out overflow-visible rounded-md px-2 py-1"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <span className="relative z-10">{label}</span>
      {isHovering && (
        <span
          className="absolute pointer-events-none rounded-lg opacity-30 blur-xl transition-opacity duration-200"
          style={{
            left: `${glowPosition.x}px`,
            top: `${glowPosition.y}px`,
            transform: 'translate(-50%, -50%)',
            width: '120px',
            height: '60px',
            background: `radial-gradient(ellipse, var(--color-accent-primary) 0%, transparent 70%)`,
          }}
        />
      )}
    </Link>
  );
}
