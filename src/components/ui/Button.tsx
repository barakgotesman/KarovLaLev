import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  pulse?: boolean;
}

/** Shared button primitive: high-contrast scarlet "primary" for calls to
 * action, transparent wine-grey-bordered "ghost" for secondary actions. */
export default function Button({
  variant = 'primary',
  pulse = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const base =
    'group relative w-full py-md rounded-xl font-sans text-[18px] font-bold tracking-[0.01em] cursor-pointer transition-all active:scale-95';

  const variants = {
    primary:
      'bg-primary text-on-primary shadow-[0_0_30px_rgba(255,26,60,0.25)] hover:shadow-[0_0_40px_rgba(255,26,60,0.35)]',
    ghost: 'bg-transparent text-on-surface border border-secondary/60',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${pulse ? 'animate-pulse hover:animate-none' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      )}
    </button>
  );
}
