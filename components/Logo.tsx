'use client'

import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className = '', size = 48 }: LogoProps) {
  return (
    <div className={className}>
      <Image
        src="/logo-transparent.svg"
        alt="Agape Collective"
        width={size}
        height={size}
        className="object-contain"
        priority
      />
    </div>
  )
}
