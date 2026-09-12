import type { CSSProperties, ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  to?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  type?: 'button' | 'submit'
  style?: CSSProperties
}

export default function Button({
  children,
  to,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  style,
}: ButtonProps) {
  const classes = `btn btn-${variant} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} style={style}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} style={style}>
      {children}
    </button>
  )
}
