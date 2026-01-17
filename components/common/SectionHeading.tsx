import { ReactNode } from 'react';

interface SectionHeadingProps {
  children: ReactNode;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-6 text-3xl font-bold text-gray-900">{children}</h2>
  );
}
