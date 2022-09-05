import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

const Button = ({
  className,
  children,
  href,
  ...props
}: {
  className?: string
  children?: ReactNode
  href?: string
}) => {
  className = clsx(
    className,
    'rounded-lg text-slate-900 font-semibold transition flex items-center gap-3 text-[0.8125rem] leading-6 py-1 px-1.5 hover:bg-slate-900/[0.03] -my-1 -mx-1.5'
  )

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export default Button
