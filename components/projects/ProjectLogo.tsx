import Image from 'next/image';
import { cn } from '@/lib/utils';

export function ProjectLogo({
  src,
  size = 'md',
  className,
}: {
  src: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const px = size === 'sm' ? 40 : size === 'lg' ? 72 : 56;
  const innerPx = size === 'sm' ? 28 : size === 'lg' ? 48 : 40;

  return (
    <div
      className={cn(
        'shrink-0 rounded-md border border-border bg-surface-raised grid place-items-center',
        className
      )}
      style={{ width: px, height: px }}
      aria-hidden
    >
      <Image
        src={src}
        alt=""
        width={innerPx}
        height={innerPx}
        className="object-contain"
        style={{ width: innerPx, height: innerPx }}
      />
    </div>
  );
}

