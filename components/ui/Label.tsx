import * as React from 'react';
import { cn } from '@/lib/utils';

const Label = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'font-mono text-xs uppercase tracking-widest text-[--color-accent] bg-[rgba(14,165,233,0.1)] border border-[rgba(14,165,233,0.25)] py-1 px-2.5 rounded inline-flex',
      className
    )}
    {...props}
  />
));
Label.displayName = 'Label';

export { Label };