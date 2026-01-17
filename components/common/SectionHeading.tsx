import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-3xl font-semibold text-text-primary">{children}</h2>
  );
}
