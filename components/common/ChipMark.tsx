import * as React from "react";

type ChipMarkProps = React.SVGProps<SVGSVGElement> & {
  title?: string;
};

export function ChipMark({ title = "Chip mark", ...props }: ChipMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="none"
      aria-label={title}
      role="img"
      {...props}
    >
      <g
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* chip body */}
        <rect x="18" y="18" width="28" height="28" rx="4" />

        {/* top pins */}
        <path d="M24 14 V18" />
        <path d="M32 14 V18" />
        <path d="M40 14 V18" />

        {/* bottom pins */}
        <path d="M24 46 V50" />
        <path d="M32 46 V50" />
        <path d="M40 46 V50" />

        {/* left pins */}
        <path d="M14 24 H18" />
        <path d="M14 32 H18" />
        <path d="M14 40 H18" />

        {/* right pins */}
        <path d="M46 24 H50" />
        <path d="M46 32 H50" />
        <path d="M46 40 H50" />
      </g>
    </svg>
  );
}
