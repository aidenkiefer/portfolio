export function Logo({ className }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        className={className}
      >
        <g
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="18" y="18" width="28" height="28" rx="4" />
          <path d="M26 38 L32 26 L38 38" />
          <path d="M28 35 H36" />
  
          <path d="M24 14 V18" />
          <path d="M32 14 V18" />
          <path d="M40 14 V18" />
  
          <path d="M24 46 V50" />
          <path d="M32 46 V50" />
          <path d="M40 46 V50" />
  
          <path d="M14 24 H18" />
          <path d="M14 32 H18" />
          <path d="M14 40 H18" />
  
          <path d="M46 24 H50" />
          <path d="M46 32 H50" />
          <path d="M46 40 H50" />
        </g>
      </svg>
    );
  }
  