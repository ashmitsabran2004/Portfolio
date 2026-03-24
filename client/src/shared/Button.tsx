import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'ghost'
    as?: 'button'
  }
>

export function Button({ children, className = '', variant = 'primary', ...props }: Props) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--bg))]'

  const styles =
    variant === 'primary'
      ? 'bg-orange-500 text-white shadow-soft hover:scale-[1.02] hover:bg-orange-600 active:scale-[0.99]'
      : 'bg-white/70 text-[hsl(var(--ink))] ring-1 ring-black/5 backdrop-blur hover:bg-white hover:scale-[1.02] active:scale-[0.99]'

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  )
}

