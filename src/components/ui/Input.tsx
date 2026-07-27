import type { InputHTMLAttributes } from 'react';

/** Minimalist text field: no fill, just a bottom border that glows scarlet
 * on focus, per the design system's "Input Fields" spec. */
export default function Input({ className = '', ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full bg-transparent border-0 border-b border-secondary/40 focus:border-primary outline-none py-sm text-[16px] font-sans text-on-surface placeholder:text-on-surface-variant/50 transition-colors ${className}`}
      {...props}
    />
  );
}
