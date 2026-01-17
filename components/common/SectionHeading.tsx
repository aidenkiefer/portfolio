import { ReactNode } from 'react';
import { ChipIcon } from './ChipIcon';

interface SectionHeadingProps {
  children: ReactNode;
  showSeparator?: boolean;
  showChip?: boolean;
}

export function SectionHeading({ 
  children, 
  showSeparator = false,
  showChip = true 
}: SectionHeadingProps) {
  return (
    <>
      {showSeparator && (
        <div className="mb-8 h-px bg-border" />
      )}
      <h2 className="mb-8 text-3xl font-semibold text-text-primary tracking-tight flex items-center gap-3">
        {showChip && (
          <ChipIcon className="h-5 w-5 text-text-secondary flex-shrink-0" />
        )}
        {children}
      </h2>
    </>
  );
}
