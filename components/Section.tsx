interface SectionProps {
  children: React.ReactNode
  variant?: 'light' | 'dark' | 'cream'
  className?: string
  id?: string
}

const variants = {
  light: 'bg-warm-white text-navy-dark',
  dark: 'bg-navy-dark text-warm-white',
  cream: 'bg-cream text-navy-dark',
}

export default function Section({
  children,
  variant = 'cream',
  className = '',
  id,
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${variants[variant]} ${className}`}>
      {children}
    </section>
  )
}
