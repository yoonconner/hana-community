'use client'

interface LogoProps {
  variant?: 'full' | 'icon' | 'text'
  colorMode?: 'dark' | 'light'
  className?: string
}

const MosaicCross = ({ colorMode = 'dark', size = 40 }: { colorMode?: 'dark' | 'light', size?: number }) => {
  const fillColor = colorMode === 'dark' ? '#1a1a2e' : '#fffefb'
  const blockSize = size / 4
  const gap = blockSize * 0.15

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Top block (position 1) */}
      <rect x="15" y="0" width="10" height="10" rx="1" fill={fillColor} />

      {/* Left arm block */}
      <rect x="0" y="12" width="10" height="10" rx="1" fill={fillColor} />

      {/* Center block (position 2) */}
      <rect x="15" y="12" width="10" height="10" rx="1" fill={fillColor} />

      {/* Right arm block */}
      <rect x="30" y="12" width="10" height="10" rx="1" fill={fillColor} />

      {/* Third block (position 3) */}
      <rect x="15" y="24" width="10" height="10" rx="1" fill={fillColor} />

      {/* Bottom block (position 4) */}
      <rect x="15" y="36" width="10" height="4" rx="1" fill={fillColor} />
    </svg>
  )
}

const LogoText = ({ colorMode = 'dark' }: { colorMode?: 'dark' | 'light' }) => {
  const textColor = colorMode === 'dark' ? 'text-navy-dark' : 'text-warm-white'

  return (
    <div className="flex flex-col">
      <span
        className={`font-heading font-medium text-lg tracking-logo ${textColor}`}
        style={{ letterSpacing: '0.15em' }}
      >
        HANA
      </span>
      <span
        className={`font-heading font-normal text-[10px] tracking-logo ${textColor} opacity-80 -mt-1`}
        style={{ letterSpacing: '0.12em' }}
      >
        COMMUNITY
      </span>
    </div>
  )
}

export default function Logo({ variant = 'full', colorMode = 'dark', className = '' }: LogoProps) {
  if (variant === 'icon') {
    return (
      <div className={className}>
        <MosaicCross colorMode={colorMode} size={40} />
      </div>
    )
  }

  if (variant === 'text') {
    return (
      <div className={className}>
        <LogoText colorMode={colorMode} />
      </div>
    )
  }

  // Full variant: icon + text
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <MosaicCross colorMode={colorMode} size={36} />
      <LogoText colorMode={colorMode} />
    </div>
  )
}
