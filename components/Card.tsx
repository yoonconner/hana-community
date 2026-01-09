interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export default function Card({ children, className = '', hover = false, onClick }: CardProps) {
  const Component = onClick ? 'button' : 'div'

  return (
    <Component
      onClick={onClick}
      className={`bg-warm-white rounded-softer shadow-soft p-6 text-left w-full ${
        hover ? 'transition-shadow duration-300 hover:shadow-soft-lg' : ''
      } ${className}`}
    >
      {children}
    </Component>
  )
}
