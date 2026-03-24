import type { PropsWithChildren } from 'react'

export function Card({
  children,
  className = '',
}: PropsWithChildren<{
  className?: string
}>) {
  return (
    <div
      className={`rounded-2xl bg-white/70 ring-1 ring-black/5 shadow-soft backdrop-blur transition will-change-transform hover:-translate-y-0.5 hover:scale-[1.01] ${className}`}
    >
      {children}
    </div>
  )
}

